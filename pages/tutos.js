import { renderPanel } from "../components/ui/panel.js";
import { getPageContent, getPageHighlights } from "../data/site.js";

export const renderTutosPage = () => {
  const tutosContent = getPageContent("tutos");
  const pageHighlights = getPageHighlights();

  return {
    html: `
      <section class="page">
        ${renderPanel({
          kicker: tutosContent.kicker,
          title: tutosContent.title,
          text: tutosContent.text,
          tone: "cyan",
          badge: tutosContent.badge
        })}
        <!-- Cette page pourra accueillir plus tard des blocs par niveau, thème ou format. -->

        <div class="stack-list">
          ${pageHighlights.tutos
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
