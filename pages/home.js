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

const navigateFromCard = (cardNode) => {
  const targetPath = cardNode?.dataset.cardPath;

  if (!targetPath) {
    return;
  }

  window.location.hash = targetPath;
};

export const renderHomePage = () => {
  const homeContent = getPageContent("home");
  const creativeUniverses = getCreativeUniverses();
  const homeManifesto = getHomeManifesto();
  let cleanupHomePage = null;

  return {
    html: `
      <section class="page page-home">
        <section class="hero-card hero-card--home" aria-labelledby="home-entry-title">
          <div class="hero-card__grid">
            <div class="hero-card__copy hero-card__copy--home">
              <p class="section-kicker">${homeContent.kicker}</p>
              <h1 class="section-title section-title--home" id="home-entry-title">${homeContent.title}</h1>
              <p class="section-text">${homeContent.intro}</p>

              <div class="hero-actions">
                ${renderButtonLink({ href: "#/univers", label: homeContent.ctaLabel, variant: "primary" })}
              </div>
            </div>

            <div class="signal-panel signal-panel--home">
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
        </section>

        <section class="home-universe-stage" aria-label="${homeContent.ctaLabel}">
          <div class="universe-grid">
            ${creativeUniverses
              .map(
                (universe) => `
                  <article
                    class="universe-card"
                    data-card-path="${universe.path}"
                    tabindex="0"
                    role="link"
                    aria-label="${universe.label}"
                  >
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
          </div>
        </section>

        ${renderPanel({
          kicker: homeContent.panel.kicker,
          title: homeContent.panel.title,
          text: homeContent.panel.text,
          tone: "default",
          badge: homeContent.panel.badge
        })}
      </section>
    `,
    onMount: () => {
      const cardNodes = Array.from(document.querySelectorAll("[data-card-path]"));

      const handleCardClick = (event) => {
        if (event.target.closest("a, button")) {
          return;
        }

        navigateFromCard(event.currentTarget);
      };

      const handleCardKeydown = (event) => {
        if (event.key !== "Enter" && event.key !== " ") {
          return;
        }

        event.preventDefault();
        navigateFromCard(event.currentTarget);
      };

      cardNodes.forEach((cardNode) => {
        cardNode.addEventListener("click", handleCardClick);
        cardNode.addEventListener("keydown", handleCardKeydown);
      });

      cleanupHomePage = () => {
        cardNodes.forEach((cardNode) => {
          cardNode.removeEventListener("click", handleCardClick);
          cardNode.removeEventListener("keydown", handleCardKeydown);
        });
      };
    },
    onUnmount: () => {
      if (typeof cleanupHomePage === "function") {
        cleanupHomePage();
        cleanupHomePage = null;
      }
    }
  };
};
