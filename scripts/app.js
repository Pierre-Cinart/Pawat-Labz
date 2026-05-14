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

    if (!languageButton) {
      return;
    }

    const nextLanguage = languageButton.dataset.languageSwitch;
    setLanguage(nextLanguage);
    renderShell();
    renderCurrentRoute({ shouldFocus: false });
  });
};

const bootstrap = () => {
  normalizeEntryUrl();
  initializeLanguage();
  renderShell();
  bindLanguageSwitcher();
  initializeRouter();
};

bootstrap();
