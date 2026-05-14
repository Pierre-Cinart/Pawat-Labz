import { renderPanel } from "../components/ui/panel.js";
import { pageHighlights } from "../data/site.js";

export const renderDevPage = () => ({
  html: `
    <section class="page">
      ${renderPanel({
        kicker: "SECTION 03",
        title: "Dev",
        text: "Espace dedie au portfolio technique, aux prototypes, aux outils open source et a la partie developpement du laboratoire.",
        tone: "default",
        badge: "CODE"
      })}

      <div class="stack-list">
        ${pageHighlights.dev
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
