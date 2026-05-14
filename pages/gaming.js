import { renderPanel } from "../components/ui/panel.js";
import { pageHighlights } from "../data/site.js";

export const renderGamingPage = () => ({
  html: `
    <section class="page">
      ${renderPanel({
        kicker: "SECTION 04",
        title: "Gaming",
        text: "Terrain d'accueil des prototypes jouables, mini-jeux web, jeux complets et demonstrations interactives du projet.",
        tone: "default",
        badge: "PLAY"
      })}

      <div class="stack-list">
        ${pageHighlights.gaming
          .map(
            (item) => `
              <article class="stack-item">
                <span class="stack-item__bullet"></span>
                <p>${item}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `
});
