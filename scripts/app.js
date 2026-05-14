import { renderFooter, renderHeader } from "../components/layout.js";
import { initializeRouter } from "../router/router.js";

/**
 * app.js est le point d'entree JavaScript de l'application.
 *
 * Son role est volontairement limite :
 * - installer le shell global
 * - demarrer le routeur
 * - fournir un point d'entree clair pour toute la suite du projet
 *
 * On garde ce fichier mince pour qu'il reste simple a lire et a maintenir.
 */

/**
 * Normalise l'URL de demarrage quand le projet est ouvert explicitement via
 * "index.html".
 *
 * Exemple non souhaite :
 * - http://127.0.0.1:5500/Pawat-Labz/index.html#/musique
 *
 * Exemple souhaite en hash router :
 * - http://127.0.0.1:5500/Pawat-Labz/#/musique
 *
 * Pourquoi cette correction :
 * Live Server ou certains clics peuvent conserver "index.html" dans l'URL.
 * Ce n'est pas bloquant techniquement, mais c'est moins propre visuellement.
 * On remplace donc cette URL par la version "racine du dossier + hash".
 */
const normalizeEntryUrl = () => {
  if (!window.location.pathname.endsWith("/index.html")) {
    return;
  }

  const normalizedPath = window.location.pathname.replace(/\/index\.html$/, "/");
  const normalizedUrl = `${normalizedPath}${window.location.hash}`;

  window.history.replaceState(null, "", normalizedUrl);
};

const bootstrap = () => {
  normalizeEntryUrl();

  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");

  header.innerHTML = renderHeader();
  footer.innerHTML = renderFooter();

  initializeRouter();
};

bootstrap();
