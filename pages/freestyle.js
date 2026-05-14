import { pageHighlights } from "../data/site.js";

export const renderFreestylePage = () => `
  <section class="page">
    <div class="page-banner">
      <p class="section-kicker">SECTION 05</p>
      <h2 class="section-title">Freestyle / Impro Lab</h2>
      <p class="section-text">
        Cette section preparera l'outil interactif de generation de mots et
        d'ambiance pour l'improvisation et la performance.
      </p>
    </div>

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
`;
