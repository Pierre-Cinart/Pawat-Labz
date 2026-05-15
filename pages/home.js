import { renderButtonLink } from "../components/ui/button.js";
import { renderPanel } from "../components/ui/panel.js";
import {
  getCreativeUniverses,
  getHomeManifesto,
  getPageContent
} from "../data/site.js";

const resolveDetail = (universe, detail) => {
  if (typeof detail === "string") {
    return {
      label: detail,
      path: universe.path
    };
  }

  return {
    label: detail.label,
    path: detail.path ?? universe.path
  };
};

export const renderHomePage = () => {
  const homeContent = getPageContent("home");
  const creativeUniverses = getCreativeUniverses();
  const homeManifesto = getHomeManifesto();

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
                <article class="universe-card">
                  <p class="universe-card__index">${universe.index}</p>
                  <p class="universe-card__label">${universe.label}</p>
                  <a class="universe-card__main-link" href="#${universe.path}" data-link>
                    <h3 class="universe-card__title">${universe.title}</h3>
                  </a>
                  <p class="universe-card__text">${universe.text}</p>
                  <ul class="universe-card__tags">
                    ${universe.details
                      .map((detail) => {
                        const resolvedDetail = resolveDetail(universe, detail);

                        return `
                          <li>
                            <a class="universe-card__tag-link" href="#${resolvedDetail.path}" data-link>
                              ${resolvedDetail.label}
                            </a>
                          </li>
                        `;
                      })
                      .join("")}
                  </ul>
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
