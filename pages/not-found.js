import { renderButtonLink } from "../components/ui/button.js";
import { getPageContent } from "../data/site.js";

/**
 * Page 404 de la SPA.
 *
 * Elle s'affiche quand le hash ne correspond a aucune route connue et propose
 * un retour simple vers les zones utiles.
 */
export const renderNotFoundPage = () => {
  const notFoundContent = getPageContent("notFound");

  return {
    html: `
      <section class="page">
        <div class="hero-card hero-card--danger">
          <p class="section-kicker">${notFoundContent.kicker}</p>
          <h2 class="section-title">${notFoundContent.title}</h2>
          <p class="section-text">${notFoundContent.text}</p>

          <div class="hero-actions">
            ${renderButtonLink({ href: "#/", label: notFoundContent.backHomeLabel, variant: "primary" })}
            ${renderButtonLink({ href: "#/dev", label: notFoundContent.devLabel, variant: "ghost" })}
          </div>
        </div>
      </section>
    `
  };
};
