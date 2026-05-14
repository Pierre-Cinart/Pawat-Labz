import { renderButtonLink } from "../components/ui/button.js";
import { renderPanel } from "../components/ui/panel.js";
import { foundationBlocks, pageHighlights } from "../data/site.js";

/**
 * La home n'est pas encore la version finale de la roadmap,
 * mais elle sert de premiere experience d'entree coherente :
 * - un hero
 * - des cartes de direction
 * - un resume de l'intention produit
 */
export const renderHomePage = () => ({
  html: `
    <section class="page page-home">
      <div class="hero-card">
        <p class="section-kicker">ENTRY POINT</p>
        <h2 class="section-title">Le laboratoire creatif prend forme.</h2>
        <p class="section-text">
          Cette premiere version de Pawat-Labz pose la structure technique du site :
          un shell persistant, un routeur SPA maison et une identite visuelle forte
          inspiree de la roadmap.
        </p>

        <div class="hero-actions">
          ${renderButtonLink({ href: "#/dev", label: "Explorer le lab", variant: "primary" })}
          ${renderButtonLink({ href: "#/musique", label: "Voir les univers", variant: "ghost" })}
        </div>
      </div>

      <section class="content-grid">
        ${pageHighlights.home
          .map(
            (item, index) => `
              <article class="info-card">
                <p class="info-card__index">0${index + 1}</p>
                <p class="info-card__text">${item}</p>
              </article>
            `
          )
          .join("")}
      </section>

      <section class="content-grid content-grid--foundation">
        ${foundationBlocks
          .map(
            (block) => `
              <article class="info-card">
                <p class="info-card__index">${block.title}</p>
                <p class="info-card__text">${block.text}</p>
              </article>
            `
          )
          .join("")}
      </section>

      ${renderPanel({
        kicker: "MISSION",
        title: "Construire un site vivant, modulaire et evolutif.",
        text:
          "Le projet suivra la roadmap de developpement en plusieurs phases : architecture, design system, home immersive, sections metiers, optimisation et polish final. Ce commit pose le socle sur lequel tout le reste pourra s'appuyer sans repartir de zero.",
        tone: "default",
        badge: "FOUNDATION"
      })}
    </section>
  `
});
