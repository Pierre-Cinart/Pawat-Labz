import { renderPanel } from "../components/ui/panel.js";
import { pageHighlights } from "../data/site.js";

export const renderAnimationPage = () => ({
  html: `
    <section class="page">
      ${renderPanel({
        kicker: "SECTION 02",
        title: "Animation",
        text: "Future vitrine des series, clips animes, publicites et explorations visuelles du projet Pawat-Labz.",
        tone: "cyan",
        badge: "VIDEO"
      })}

      <div class="stack-list">
        ${pageHighlights.animation
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
