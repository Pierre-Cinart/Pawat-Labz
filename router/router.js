import { setActiveNavigation } from "../components/layout.js";
import { renderView } from "../scripts/view-manager.js";
import { siteMeta } from "../data/site.js";
import { notFoundRoute, routes } from "./routes.js";

/**
 * Normalise un hash en chemin metier exploitable par le routeur.
 *
 * Exemples :
 * - "#/dev"    -> "/dev"
 * - "#/"       -> "/"
 * - ""         -> "/"
 * - "#/dev/"   -> "/dev"
 */
const normalizeHash = (hash) => {
  const rawValue = hash.replace(/^#/, "").trim();

  if (!rawValue || rawValue === "/") {
    return "/";
  }

  return rawValue.endsWith("/") ? rawValue.slice(0, -1) : rawValue;
};

/**
 * Retourne le chemin courant de l'application a partir du hash navigateur.
 */
const getCurrentPath = () => normalizeHash(window.location.hash);

/**
 * Cherche la route correspondant au chemin courant.
 *
 * Si rien ne correspond, on renvoie la route 404.
 */
const getRouteByPath = (path) => {
  return routes.find((route) => route.path === path) ?? notFoundRoute;
};

/**
 * Rend la page associee a la route courante dans le conteneur principal #app.
 *
 * Cette fonction centralise tout ce qu'une navigation doit faire :
 * - trouver la route
 * - injecter la vue
 * - mettre a jour le titre du document
 * - marquer le lien actif dans le menu
 * - replacer le focus sur la zone principale pour l'accessibilite
 */
const renderCurrentRoute = () => {
  const app = document.getElementById("app");
  const currentPath = getCurrentPath();
  const currentRoute = getRouteByPath(currentPath);
  const viewDefinition = currentRoute.render();

  renderView(app, viewDefinition);
  document.title = `${currentRoute.title} - ${siteMeta.titlePrimary} ${siteMeta.titleAccent}`;
  setActiveNavigation(currentRoute.path === "/404" ? "" : currentRoute.path);
  app.focus();
};

/**
 * API publique du routeur.
 *
 * Elle permet de naviguer par code ailleurs dans le projet si besoin.
 * Exemple futur :
 * `navigate("/musique")`
 */
export const navigate = (path) => {
  const normalizedPath = path === "/" ? "/" : path.replace(/\/$/, "");
  window.location.hash = normalizedPath;
};

/**
 * Initialise l'ecoute des changements de hash et declenche le premier rendu.
 *
 * Pourquoi le hash router est pratique ici :
 * - il fonctionne tres bien avec Live Server
 * - il ne demande pas de configuration serveur complexe
 * - il reste ideal pour un premier commit orienté front-end statique
 */
export const initializeRouter = () => {
  if (!window.location.hash) {
    window.location.hash = "/";
  }

  window.addEventListener("hashchange", renderCurrentRoute);
  renderCurrentRoute();
};
