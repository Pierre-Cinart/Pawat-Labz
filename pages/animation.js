import { pageHighlights } from "../data/site.js";

export const renderAnimationPage = () => `
  <section class="page">
    <div class="page-banner">
      <p class="section-kicker">SECTION 02</p>
      <h2 class="section-title">Animation</h2>
      <p class="section-text">
        Future vitrine des series, clips animes, publicites et explorations
        visuelles du projet Pawat-Labz.
      </p>
    </div>

    <div class="stack-list">
      ${pageHighlights.animation
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
