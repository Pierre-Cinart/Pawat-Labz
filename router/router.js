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
 * Cette fonction est exportée pour pouvoir rerendre la page courante quand
 * une langue change, sans réinitialiser le routeur.
 */
export const renderCurrentRoute = ({ shouldFocus = true } = {}) => {
  const app = document.getElementById("app");
  const currentPath = getCurrentPath();
  const currentRoute = getRouteByPath(currentPath);
  const viewDefinition = currentRoute.render();
  const siteMeta = getSiteMeta();

  renderView(app, viewDefinition);
  document.title = `${getRouteTitle(currentRoute.path)} - ${siteMeta.titlePrimary} ${siteMeta.titleAccent}`;
  setActiveNavigation(currentRoute.path === "/404" ? "" : currentRoute.path);

  if (shouldFocus) {
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
  if (!window.location.hash) {
    window.location.hash = "/";
  }

  window.addEventListener("hashchange", renderCurrentRoute);
  renderCurrentRoute();
};
