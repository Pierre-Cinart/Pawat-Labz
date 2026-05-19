import { renderPanel } from "../components/ui/panel.js";
import { getCreativeUniverses, getPageContent } from "../data/site.js";

/**
 * Page Univers.
 *
 * C'est la carte generale des portails du site. Elle reutilise les memes donnees
 * que les cartes d'accueil pour garder une coherence entre les deux entrees.
 */
const resolveDetail = (universe, detail) => {
  // Meme convention que sur l'accueil : detail texte simple ou lien dedie.
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

export const renderUniversPage = () => {
  const universContent = getPageContent("univers");
  const creativeUniverses = getCreativeUniverses();

  return {
    html: `
      <section class="page">
        ${renderPanel({
          kicker: universContent.kicker,
          title: universContent.title,
          text: universContent.text,
          tone: "cyan",
          badge: universContent.badge
        })}

        <section class="univers-overview-grid">
          ${creativeUniverses
            .map(
              (universe) => `
                <article class="univers-overview-card">
                  <div class="univers-overview-card__top">
                    <p class="univers-overview-card__index">${universe.index}</p>
                    <p class="univers-overview-card__label">${universe.label}</p>
                  </div>
                  <a class="univers-overview-card__main-link" href="#${universe.path}" data-link>
                    <h3 class="univers-overview-card__title">${universe.title}</h3>
                  </a>
                  <p class="univers-overview-card__text">${universe.text}</p>
                  <ul class="univers-overview-card__details">
                    ${universe.details
                      .map((detail) => {
                        const resolvedDetail = resolveDetail(universe, detail);

                        return `
                          <li>
                            <a class="univers-overview-card__detail-link" href="#${resolvedDetail.path}" data-link>
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
      </section>
    `
  };
};
