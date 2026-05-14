import { renderPanel } from "../components/ui/panel.js";
import { pageHighlights } from "../data/site.js";

export const renderFreestylePage = () => ({
  html: `
    <section class="page">
      ${renderPanel({
        kicker: "SECTION 05",
        title: "Freestyle / Impro Lab",
        text: "Cette section preparera l'outil interactif de generation de mots et d'ambiance pour l'improvisation et la performance.",
        tone: "default",
        badge: "INTERACTIF"
      })}

      <div class="stack-list">
        ${pageHighlights.freestyle
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
