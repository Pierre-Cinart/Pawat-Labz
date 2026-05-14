import { renderButtonLink } from "../components/ui/button.js";
import { renderPanel } from "../components/ui/panel.js";
import {
  getCreativeUniverses,
  getHomeManifesto,
  getPageContent,
  getPageHighlights
} from "../data/site.js";

export const renderHomePage = () => {
  const homeContent = getPageContent("home");
  const creativeUniverses = getCreativeUniverses();
  const homeManifesto = getHomeManifesto();
  const pageHighlights = getPageHighlights();

  return {
    html: `
      <section class="page page-home">
        <div class="hero-card hero-card--home">
          <div class="hero-card__grid">
            <div class="hero-card__copy">
              <p class="section-kicker">${homeContent.kicker}</p>
              <h2 class="section-title">${homeContent.title}</h2>
              <p class="section-text">${homeContent.intro}</p>

              <div class="hero-actions">
                ${renderButtonLink({ href: "#/univers", label: homeContent.ctaLabel, variant: "primary" })}
              </div>
            </div>

            <div class="signal-panel">
              <p class="signal-panel__label">${homeContent.visionLabel}</p>
              <div class="signal-panel__lines">
                ${homeManifesto
                  .map(
                    (item) => `
                      <div class="signal-line">
                        <span class="signal-line__dot"></span>
                        <p>${item}</p>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>

        <section class="universe-grid">
          ${creativeUniverses
            .map(
              (universe) => `
                <a class="universe-card" href="#${universe.path}" data-link>
                  <p class="universe-card__index">${universe.index}</p>
                  <p class="universe-card__label">${universe.label}</p>
                  <h3 class="universe-card__title">${universe.title}</h3>
                  <p class="universe-card__text">${universe.text}</p>
                  <ul class="universe-card__tags">
                    ${universe.details.map((detail) => `<li>${detail}</li>`).join("")}
                  </ul>
                </a>
              `
            )
            .join("")}
        </section>

        <section class="manifesto-grid">
          ${pageHighlights.home
            .map(
              (item, index) => `
                <article class="manifesto-card">
                  <p class="manifesto-card__index">0${index + 1}</p>
                  <p class="manifesto-card__text">${item}</p>
                </article>
              `
            )
            .join("")}
        </section>

        ${renderPanel({
          kicker: homeContent.panel.kicker,
          title: homeContent.panel.title,
          text: homeContent.panel.text,
          tone: "default",
          badge: homeContent.panel.badge
        })}
      </section>
    `
  };
};
