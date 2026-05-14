import { pageHighlights } from "../data/site.js";

export const renderDevPage = () => `
  <section class="page">
    <div class="page-banner">
      <p class="section-kicker">SECTION 03</p>
      <h2 class="section-title">Dev</h2>
      <p class="section-text">
        Espace dedie au portfolio technique, aux prototypes, aux outils open source
        et a la partie developpement du laboratoire.
      </p>
    </div>

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
`;
