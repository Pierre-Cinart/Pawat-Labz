import { navigationItems, siteMeta, socialLinks } from "../data/site.js";

/**
 * Construit le header global du site.
 *
 * Le header n'appartient pas a une page specifique :
 * il reste visible pendant toute la vie de l'application.
 * On le separe donc du contenu route dans #app.
 */
export const renderHeader = () => `
  <div class="header-panel">
    <div class="header-topbar">
      <span class="header-badge">PAWAT LABZ / CREATIVE SYSTEM</span>
      <span class="header-version">${siteMeta.version}</span>
    </div>

    <div class="header-hero">
      <div class="header-copy">
        <p class="eyebrow">${siteMeta.eyebrow}</p>
        <h1 class="site-title">
          ${siteMeta.titlePrimary}
          <span class="site-title-accent">${siteMeta.titleAccent}</span>
        </h1>
        <p class="site-tagline">${siteMeta.tagline}</p>
        <p class="site-description">${siteMeta.description}</p>
      </div>

      <div class="header-status-card">
        <p class="status-label">SYSTEM STATUS</p>
        <p class="status-value">INITIALIZING CREATIVE LAB</p>
        <p class="status-note">
          Architecture SPA en place, design system initial actif, pages prêtes a evoluer selon la roadmap.
        </p>
      </div>
    </div>

    <nav class="primary-nav" aria-label="Navigation principale du site">
      <ul class="primary-nav__list">
        ${navigationItems
          .map(
            (item) => `
              <li>
                <a
                  class="primary-nav__link"
                  href="#${item.path}"
                  data-link
                  data-route="${item.path}"
                >
                  <span class="primary-nav__index">${item.index}</span>
                  <span>${item.label}</span>
                </a>
              </li>
            `
          )
          .join("")}
      </ul>
    </nav>
  </div>
`;

/**
 * Construit le footer global.
 *
 * Comme le header, il est persistant et n'a pas besoin d'etre rerendu
 * a chaque changement de page.
 */
export const renderFooter = () => `
  <div class="footer-panel">
    <p class="footer-signature">
      PAWAT LABZ · FRONT-END FIRST · HASH ROUTER READY · FIRST COMMIT FOUNDATION
    </p>

    <ul class="footer-links" aria-label="Liens externes">
      ${socialLinks
        .map(
          (link) => `
            <li>
              <a class="footer-link" href="${link.href}" target="_blank" rel="noreferrer">
                ${link.label}
              </a>
            </li>
          `
        )
        .join("")}
    </ul>
  </div>
`;

/**
 * Met en surbrillance le lien actif dans la navigation.
 *
 * Le routeur appelle cette fonction apres chaque navigation afin que
 * le menu reflète toujours la route courante.
 */
export const setActiveNavigation = (activePath) => {
  document.querySelectorAll("[data-route]").forEach((link) => {
    const isActive = link.dataset.route === activePath;
    link.classList.toggle("primary-nav__link--active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });
};
