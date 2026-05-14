import { renderPanel } from "../components/ui/panel.js";
import { getPageContent, getPageHighlights } from "../data/site.js";

export const renderGamingPage = () => {
  const gamingContent = getPageContent("gaming");
  const pageHighlights = getPageHighlights();

  return {
    html: `
      <section class="page">
        ${renderPanel({
          kicker: gamingContent.kicker,
          title: gamingContent.title,
          text: gamingContent.text,
          tone: "default",
          badge: gamingContent.badge
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
  };
};
