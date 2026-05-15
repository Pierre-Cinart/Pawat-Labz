import {
  getFooterLinks,
  getFooterMeta,
  getLanguage,
  getLanguageSwitcher,
  getNavigationItems,
  getSiteMeta
} from "../data/site.js";

export const renderHeader = () => {
  const siteMeta = getSiteMeta();
  const navigationItems = getNavigationItems();
  const languageSwitcher = getLanguageSwitcher();
  const currentLanguage = getLanguage();

  const navigationMarkup = navigationItems
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
    .join("");

  return `
    <div class="sticky-nav-shell">
      <div class="sticky-nav-bar">
        <a class="sticky-nav-bar__brand" href="#/" data-link data-home-brand>
          <span class="sticky-nav-bar__brand-main">${siteMeta.titlePrimary}</span>
          <span class="sticky-nav-bar__brand-accent">${siteMeta.titleAccent}</span>
        </a>

        <nav class="primary-nav primary-nav--desktop" aria-label="Navigation principale du site">
          <ul class="primary-nav__list">
            ${navigationMarkup}
          </ul>
        </nav>

        <div class="sticky-nav-bar__actions">
          <div class="language-switcher" aria-label="${languageSwitcher.label}">
            <span class="language-switcher__label">${languageSwitcher.label}</span>

            <div class="language-switcher__actions">
              ${Object.entries(languageSwitcher.options)
                .map(
                  ([languageCode, label]) => `
                    <button
                      class="language-switcher__button ${currentLanguage === languageCode ? "language-switcher__button--active" : ""}"
                      type="button"
                      data-language-switch="${languageCode}"
                      aria-pressed="${currentLanguage === languageCode ? "true" : "false"}"
                    >
                      ${label}
                    </button>
                  `
                )
                .join("")}
            </div>
          </div>

          <button
            class="nav-burger"
            type="button"
            data-nav-toggle
            aria-expanded="false"
            aria-controls="mobile-primary-nav"
            aria-label="Ouvrir le menu"
          >
            <span class="nav-burger__line"></span>
            <span class="nav-burger__line"></span>
            <span class="nav-burger__line"></span>
          </button>
        </div>
      </div>

      <div class="mobile-nav-panel" id="mobile-primary-nav" data-mobile-nav hidden>
        <nav class="primary-nav primary-nav--mobile" aria-label="Navigation mobile du site">
          <ul class="primary-nav__list primary-nav__list--mobile">
            ${navigationMarkup}
          </ul>
        </nav>
      </div>
    </div>

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
      </div>
    </div>
  `;
};

export const renderFooter = () => {
  const footerMeta = getFooterMeta();
  const footerLinks = getFooterLinks();

  return `
    <div class="footer-panel">
      <div class="footer-meta">
        <p class="footer-signature">${footerMeta.signature}</p>
        <p class="footer-note">${footerMeta.note}</p>
      </div>

      <div class="footer-columns">
        ${footerLinks
          .map(
            (group) => `
              <section class="footer-group" aria-label="${group.title}">
                <p class="footer-group__title">${group.title}</p>
                <ul class="footer-links">
                  ${group.links
                    .map((link) => {
                      if (!link.available) {
                        return `
                          <li class="footer-link footer-link--muted">
                            <span>${link.label}</span>
                            <small>${link.note ?? "bientôt"}</small>
                          </li>
                        `;
                      }

                      return `
                        <li>
                          <a class="footer-link" href="${link.href}" target="_blank" rel="noreferrer">
                            ${link.label}
                          </a>
                        </li>
                      `;
                    })
                    .join("")}
                </ul>
              </section>
            `
          )
          .join("")}
      </div>
    </div>
  `;
};

export const setActiveNavigation = (activePath) => {
  document.querySelectorAll("[data-route]").forEach((link) => {
    const isActive = link.dataset.route === activePath;
    link.classList.toggle("primary-nav__link--active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });
};
