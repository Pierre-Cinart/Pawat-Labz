import Route from "./Route.js";
import { renderAnimationPage } from "../pages/animation.js";
import { renderDevPage } from "../pages/dev.js";
import { renderFreestylePage } from "../pages/freestyle.js";
import { renderGamingPage } from "../pages/gaming.js";
import { renderHomePage } from "../pages/home.js";
import { renderMusiquePage } from "../pages/musique.js";
import { renderNotFoundPage } from "../pages/not-found.js";

/**
 * Toutes les routes officielles de l'application sont declarees ici.
 *
 * Ce fichier sert de source de verite :
 * si une route n'existe pas dans ce tableau, elle sera consideree comme inconnue.
 */
export const routes = [
  new Route("/", "Accueil", renderHomePage),
  new Route("/musique", "Musique", renderMusiquePage),
  new Route("/animation", "Animation", renderAnimationPage),
  new Route("/dev", "Dev", renderDevPage),
  new Route("/gaming", "Gaming", renderGamingPage),
  new Route("/freestyle", "Freestyle", renderFreestylePage)
];

/**
 * Route 404 de secours.
 */
export const notFoundRoute = new Route("/404", "404", renderNotFoundPage);
