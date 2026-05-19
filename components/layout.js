import {
  getAuthPreview,
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
  const authPreview = getAuthPreview();
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

  const authPreviewMarkup = `
    <div class="nav-auth-preview" aria-label="${authPreview.label}">
      <button class="nav-auth-preview__button nav-auth-preview__button--ghost" type="button" disabled>
        ${authPreview.signIn}
      </button>
      <button class="nav-auth-preview__button nav-auth-preview__button--primary" type="button" disabled>
        ${authPreview.signUp}
      </button>
    </div>
  `;

  return `
    <div class="sticky-nav-shell">
      <div class="sticky-nav-bar">
        <div class="sticky-nav-bar__top">
          <a class="sticky-nav-bar__brand" href="#/" data-link data-home-brand>
            <span class="sticky-nav-bar__brand-main">${siteMeta.titlePrimary}</span>
            <span class="sticky-nav-bar__brand-accent">${siteMeta.titleAccent}</span>
          </a>

          <div class="sticky-nav-bar__actions">
            ${authPreviewMarkup}

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

        <nav class="primary-nav primary-nav--desktop" aria-label="Navigation principale du site">
          <ul class="primary-nav__list">
            ${navigationMarkup}
          </ul>
        </nav>
      </div>

      <div class="mobile-nav-panel" id="mobile-primary-nav" data-mobile-nav hidden>
        <nav class="primary-nav primary-nav--mobile" aria-label="Navigation mobile du site">
          <ul class="primary-nav__list primary-nav__list--mobile">
            ${navigationMarkup}
          </ul>
        </nav>

        <div class="mobile-nav-panel__auth">
          ${authPreviewMarkup}
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
  const normalizeTarget = (target) => {
    if (!target) {
      return "/";
    }

    const normalizedTarget = target.replace(/^#/, "").trim();

    if (!normalizedTarget || normalizedTarget === "/") {
      return "/";
    }

    return normalizedTarget.endsWith("/") ? normalizedTarget.slice(0, -1) : normalizedTarget;
  };

  const stripQuery = (target) => normalizeTarget(target).split("?")[0];
  const normalizedActivePath = normalizeTarget(activePath);
  const navigationLinks = Array.from(document.querySelectorAll("[data-route]"));
  const hasExactMatch = navigationLinks.some((link) => normalizeTarget(link.dataset.route) === normalizedActivePath);

  navigationLinks.forEach((link) => {
    const linkTarget = normalizeTarget(link.dataset.route);
    const isActive = hasExactMatch
      ? linkTarget === normalizedActivePath
      : stripQuery(linkTarget) === stripQuery(normalizedActivePath);
    link.classList.toggle("primary-nav__link--active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });
};
