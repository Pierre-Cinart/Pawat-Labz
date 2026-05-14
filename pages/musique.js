import { renderPanel } from "../components/ui/panel.js";
import { pageHighlights } from "../data/site.js";

export const renderMusiquePage = () => ({
  html: `
    <section class="page">
      ${renderPanel({
        kicker: "SECTION 01",
        title: "Musique",
        text: "Cette section accueillera le catalogue audio, les instrus, les clips et les futures experiences d'ecoute du laboratoire.",
        tone: "default",
        badge: "AUDIO"
      })}

      <div class="stack-list">
        ${pageHighlights.musique
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
