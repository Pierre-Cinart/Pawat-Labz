import { setActiveNavigation } from "../components/layout.js";
import { getRouteTitle, getSiteMeta } from "../data/site.js";
import { renderView } from "../scripts/view-manager.js";
import { notFoundRoute, routes } from "./routes.js";

/**
 * Normalise un hash en chemin métier exploitable par le routeur.
 */
const normalizeHash = (hash) => {
  const rawValue = hash.replace(/^#/, "").trim();
  const [pathOnly] = rawValue.split("?");

  if (!pathOnly || pathOnly === "/") {
    return "/";
  }

  return pathOnly.endsWith("/") ? pathOnly.slice(0, -1) : pathOnly;
};

const getCurrentPath = () => normalizeHash(window.location.hash);

const getRouteByPath = (path) => {
  return routes.find((route) => route.path === path) ?? notFoundRoute;
};

/**
 * Le site est une SPA : sans JavaScript, le routeur ne peut pas injecter les
 * pages, la navigation hash, les lecteurs ou les outils interactifs.
 *
 * Le vrai message de secours vit dans index.html via <noscript>, car ce bloc
 * reste visible meme quand aucun module JS ne s'execute. Ici, on marque juste
 * le runtime comme actif des que le routeur demarre, ce qui donne un signal
 * simple et centralise pour le debug, les styles ou de futurs checks.
 */
const markJavaScriptRuntimeReady = () => {
  document.documentElement.dataset.jsRuntime = "enabled";
};

/**
 * Cette fonction est exportée pour pouvoir rerendre la page courante quand
 * une langue change, sans réinitialiser le routeur.
 */
export const renderCurrentRoute = ({ shouldFocus = true } = {}) => {
  const app = document.getElementById("app");
  const currentPath = getCurrentPath();
  const currentRoute = getRouteByPath(currentPath);
  const viewDefinition = currentRoute.render();
  const siteMeta = getSiteMeta();

  // Le View Manager remplace la vue, puis declenche les hooks `onMount/onUnmount`.
  renderView(app, viewDefinition);
  document.title = `${getRouteTitle(currentRoute.path)} - ${siteMeta.titlePrimary} ${siteMeta.titleAccent}`;
  setActiveNavigation(currentRoute.path === "/404" ? "" : window.location.hash.replace(/^#/, "") || currentRoute.path);

  if (shouldFocus) {
    // Focus clavier/accessibilite apres changement de route.
    app.scrollIntoView({
      block: "start",
      behavior: "auto"
    });
    app.focus({ preventScroll: true });
  }
};

export const navigate = (path) => {
  const normalizedPath = path === "/" ? "/" : path.replace(/\/$/, "");
  window.location.hash = normalizedPath;
};

export const initializeRouter = () => {
  markJavaScriptRuntimeReady();

  if (!window.location.hash) {
    // La home officielle de cette SPA est `#/`, meme quand l'URL arrive sans hash.
    window.location.hash = "/";
  }

  window.addEventListener("hashchange", renderCurrentRoute);
  renderCurrentRoute();
};
