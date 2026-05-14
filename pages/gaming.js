import { pageHighlights } from "../data/site.js";

export const renderGamingPage = () => `
  <section class="page">
    <div class="page-banner">
      <p class="section-kicker">SECTION 04</p>
      <h2 class="section-title">Gaming</h2>
      <p class="section-text">
        Terrain d'accueil des prototypes jouables, mini-jeux web, jeux complets
        et demonstrations interactives du projet.
      </p>
    </div>

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
`;
