import { renderPanel } from "../components/ui/panel.js";
import { getPageContent, getPageHighlights } from "../data/site.js";

/**
 * Page Dev.
 *
 * Les outils maison et futurs modules techniques sont regroupes ici. Le contenu
 * reste dans `data/site.js` pour que la page ne gere que la structure.
 */
export const renderDevPage = () => {
  const devContent = getPageContent("dev");
  const pageHighlights = getPageHighlights();

  return {
    html: `
      <section class="page">
        ${renderPanel({
          kicker: devContent.kicker,
          title: devContent.title,
          text: devContent.text,
          tone: "default",
          badge: devContent.badge
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
  };
};
