import { pageHighlights } from "../data/site.js";

/**
 * La home n'est pas encore la version finale de la roadmap,
 * mais elle sert de premiere experience d'entree coherente :
 * - un hero
 * - des cartes de direction
 * - un resume de l'intention produit
 */
export const renderHomePage = () => `
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
        <a class="button button--primary" href="#/dev" data-link>Explorer le lab</a>
        <a class="button button--ghost" href="#/musique" data-link>Voir les univers</a>
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

    <section class="mission-panel">
      <p class="section-kicker">MISSION</p>
      <h3 class="subsection-title">Construire un site vivant, modulaire et evolutif.</h3>
      <p class="section-text">
        Le projet suivra la roadmap de developpement en plusieurs phases :
        architecture, design system, home immersive, sections metiers, optimisation
        et polish final. Ce commit pose le socle sur lequel tout le reste pourra
        s'appuyer sans repartir de zero.
      </p>
    </section>
  </section>
`;
