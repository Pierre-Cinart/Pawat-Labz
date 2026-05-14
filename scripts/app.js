import { renderFooter, renderHeader } from "../components/layout.js";
import { initializeRouter } from "../router/router.js";

/**
 * app.js est le point d'entree JavaScript de l'application.
 *
 * Son role est volontairement limite :
 * - installer le shell global
 * - demarrer le routeur
 *
 * On garde ce fichier mince pour qu'il reste simple a lire et a maintenir.
 */
const bootstrap = () => {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");

  header.innerHTML = renderHeader();
  footer.innerHTML = renderFooter();

  initializeRouter();
};

bootstrap();
