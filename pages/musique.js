import { pageHighlights } from "../data/site.js";

export const renderMusiquePage = () => `
  <section class="page">
    <div class="page-banner">
      <p class="section-kicker">SECTION 01</p>
      <h2 class="section-title">Musique</h2>
      <p class="section-text">
        Cette section accueillera le catalogue audio, les instrus, les clips et
        les futures experiences d'ecoute du laboratoire.
      </p>
    </div>

    <div class="stack-list">
      ${pageHighlights.musique
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
