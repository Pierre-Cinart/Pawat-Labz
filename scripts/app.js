import { renderFooter, renderHeader } from "../components/layout.js";
import { initializeLanguage, setLanguage } from "../data/site.js";
import { initializeRouter, renderCurrentRoute } from "../router/router.js";

/**
 * app.js est le point d'entrée JavaScript de l'application.
 *
 * Son rôle est volontairement limité :
 * - installer le shell global
 * - démarrer le routeur
 * - brancher les interactions globales comme le changement de langue
 *
 * On garde ce fichier mince pour qu'il reste simple à lire et à maintenir.
 */

/**
 * Normalise l'URL de démarrage quand le projet est ouvert explicitement via
 * "index.html".
 *
 * Exemple non souhaité :
 * - http://127.0.0.1:5500/Pawat-Labz/index.html#/musique
 *
 * Exemple souhaité en hash router :
 * - http://127.0.0.1:5500/Pawat-Labz/#/musique
 */
const normalizeEntryUrl = () => {
  if (!window.location.pathname.endsWith("/index.html")) {
    return;
  }

  const normalizedPath = window.location.pathname.replace(/\/index\.html$/, "/");
  const normalizedUrl = `${normalizedPath}${window.location.hash}`;

  window.history.replaceState(null, "", normalizedUrl);
};

const renderShell = () => {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");

  header.innerHTML = renderHeader();
  footer.innerHTML = renderFooter();
};

const scrollAppIntoView = () => {
  const app = document.getElementById("app");

  if (!app) {
    return;
  }

  app.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });

  window.setTimeout(() => {
    app.focus({ preventScroll: true });
  }, 120);
};

const scrollFocusedSectionIntoView = (targetHash) => {
  if (!targetHash) {
    return false;
  }

  const [, queryString = ""] = targetHash.replace(/^#/, "").split("?");
  const searchParams = new URLSearchParams(queryString);
  const focusTarget = searchParams.get("focus");

  if (!focusTarget) {
    return false;
  }

  const focusMap = {
    "impro-labz": "[data-impro-stage]"
  };

  const selector = focusMap[focusTarget];
  const targetNode = selector ? document.querySelector(selector) : null;

  if (!targetNode) {
    return false;
  }

  targetNode.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  return true;
};

const scrollHomeHeaderIntoView = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const setMobileNavState = (isOpen) => {
  const header = document.getElementById("site-header");
  const toggleButton = header.querySelector("[data-nav-toggle]");
  const mobileNav = header.querySelector("[data-mobile-nav]");

  if (!toggleButton || !mobileNav) {
    return;
  }

  toggleButton.setAttribute("aria-expanded", String(isOpen));
  toggleButton.setAttribute(
    "aria-label",
    isOpen ? toggleButton.dataset.labelClose ?? "Fermer le menu" : toggleButton.dataset.labelOpen ?? "Ouvrir le menu"
  );

  if (isOpen) {
    mobileNav.hidden = false;
    requestAnimationFrame(() => {
      mobileNav.dataset.open = "true";
      mobileNav.querySelector("a, button:not([disabled])")?.focus({ preventScroll: true });
    });
    return;
  }

  delete mobileNav.dataset.open;

  window.setTimeout(() => {
    const latestToggleState = toggleButton.getAttribute("aria-expanded") === "true";

    if (!latestToggleState) {
      mobileNav.hidden = true;
    }
  }, 260);
};

const closeMobileNav = () => {
  setMobileNavState(false);
};

/**
 * Le son d'interface doit accompagner les vrais changements de rubrique,
 * pas tous les clics de l'application.
 *
 * On l'accroche donc au changement de route hash :
 * - oui quand on passe d'une rubrique a une autre
 * - non quand on change juste la langue
 * - non quand on clique dans une interaction locale sans changer d'URL
 */
const bindSectionSound = () => {
  const interfaceSound = new Audio("assets/audio/sfx/bulle.m4a");
  let previousPath = window.location.hash;

  interfaceSound.preload = "auto";

  window.addEventListener("hashchange", () => {
    const nextPath = window.location.hash;

    if (nextPath === previousPath) {
      return;
    }

    previousPath = nextPath;
    interfaceSound.currentTime = 0;
    interfaceSound.play().catch(() => {
      // Certains navigateurs bloquent ponctuellement un son s'il n'est pas autorise.
    });
  });
};

/**
 * Le switcher de langue vit dans le header global.
 *
 * À chaque clic :
 * - on mémorise la langue choisie
 * - on rerend le header/footer
 * - on rerend la page courante sans toucher à la route
 */
const bindLanguageSwitcher = () => {
  const header = document.getElementById("site-header");

  header.addEventListener("click", (event) => {
    const languageButton = event.target.closest("[data-language-switch]");
    const navToggleButton = event.target.closest("[data-nav-toggle]");
    const navLink = event.target.closest("[data-link]");

    if (navToggleButton) {
      const isExpanded = navToggleButton.getAttribute("aria-expanded") === "true";
      setMobileNavState(!isExpanded);
      return;
    }

    if (navLink) {
      closeMobileNav();

      const targetHash = navLink.getAttribute("href");
      const isHomeBrand = navLink.hasAttribute("data-home-brand");

      if (isHomeBrand) {
        scrollHomeHeaderIntoView();
      }

      if (!isHomeBrand && targetHash === window.location.hash) {
        if (!scrollFocusedSectionIntoView(targetHash)) {
          scrollAppIntoView();
        }
      }
    }

    if (!languageButton) {
      return;
    }

    const nextLanguage = languageButton.dataset.languageSwitch;
    setLanguage(nextLanguage);
    renderShell();
    closeMobileNav();
    renderCurrentRoute({ shouldFocus: false });
  });

  header.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileNav();
    }
  });

  document.addEventListener("click", (event) => {
    const mobileNav = header.querySelector("[data-mobile-nav]");
    const navToggleButton = header.querySelector("[data-nav-toggle]");
    const isMenuOpen = navToggleButton?.getAttribute("aria-expanded") === "true";

    if (!mobileNav || !navToggleButton || !isMenuOpen) {
      return;
    }

    const clickedInsideHeader = event.target.closest("#site-header");

    if (clickedInsideHeader) {
      return;
    }

    closeMobileNav();
  });
};

const bootstrap = () => {
  normalizeEntryUrl();
  initializeLanguage();
  renderShell();
  bindLanguageSwitcher();
  initializeRouter();
  bindSectionSound();
};

bootstrap();
