import { renderPanel } from "../components/ui/panel.js";
import { getPageContent, getPageHighlights } from "../data/site.js";

export const renderMusiquePage = () => {
  const musiqueContent = getPageContent("musique");
  const pageHighlights = getPageHighlights();

  return {
    html: `
      <section class="page">
        ${renderPanel({
          kicker: musiqueContent.kicker,
          title: musiqueContent.title,
          text: musiqueContent.text,
          tone: "default",
          badge: musiqueContent.badge
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
  };
};
