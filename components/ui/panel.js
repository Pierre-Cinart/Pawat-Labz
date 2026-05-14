import { renderBadge } from "./badge.js";

/**
 * Construit un panneau de contenu coherent visuellement.
 *
 * Ce helper permet d'unifier les sections des pages sans reecrire a la main
 * la meme structure HTML partout.
 */
export const renderPanel = ({
  kicker,
  title,
  text,
  tone = "default",
  badge = ""
}) => `
  <section class="content-panel content-panel--${tone}">
    <div class="content-panel__head">
      <p class="section-kicker">${kicker}</p>
      ${badge ? renderBadge(badge, tone) : ""}
    </div>
    <h2 class="section-title">${title}</h2>
    <p class="section-text">${text}</p>
  </section>
`;
