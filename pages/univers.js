import { renderPanel } from "../components/ui/panel.js";
import { getCreativeUniverses, getPageContent } from "../data/site.js";

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
                <a class="univers-overview-card" href="#${universe.path}" data-link>
                  <div class="univers-overview-card__top">
                    <p class="univers-overview-card__index">${universe.index}</p>
                    <p class="univers-overview-card__label">${universe.label}</p>
                  </div>
                  <h3 class="univers-overview-card__title">${universe.title}</h3>
                  <p class="univers-overview-card__text">${universe.text}</p>
                  <ul class="univers-overview-card__details">
                    ${universe.details.map((detail) => `<li>${detail}</li>`).join("")}
                  </ul>
                </a>
              `
            )
            .join("")}
        </section>
      </section>
    `
  };
};
