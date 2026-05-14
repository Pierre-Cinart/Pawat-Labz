import { renderPanel } from "../components/ui/panel.js";
import { getPageContent, getPageHighlights } from "../data/site.js";

export const renderFreestylePage = () => {
  const freestyleContent = getPageContent("freestyle");
  const pageHighlights = getPageHighlights();

  return {
    html: `
      <section class="page">
        ${renderPanel({
          kicker: freestyleContent.kicker,
          title: freestyleContent.title,
          text: freestyleContent.text,
          tone: "default",
          badge: freestyleContent.badge
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
  };
};
