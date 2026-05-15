import Route from "./Route.js";
import { renderAboutPage } from "../pages/about.js";
import { renderAnimationPage } from "../pages/animation.js";
import { renderSagaZPage } from "../pages/animation-sagaz.js";
import { renderDevPage } from "../pages/dev.js";
import { renderFreestylePage } from "../pages/freestyle.js";
import { renderGamingPage } from "../pages/gaming.js";
import { renderHomePage } from "../pages/home.js";
import { renderMusiquePage } from "../pages/musique.js";
import { renderNotFoundPage } from "../pages/not-found.js";
import { renderTutosPage } from "../pages/tutos.js";
import { renderUniversPage } from "../pages/univers.js";

export const routes = [
  new Route("/", "Accueil", renderHomePage),
  new Route("/univers", "Univers", renderUniversPage),
  new Route("/about", "About", renderAboutPage),
  new Route("/musique", "Musique", renderMusiquePage),
  new Route("/animation", "Animation", renderAnimationPage),
  new Route("/animation/sagaz-zzz", "SagaZ zzz", renderSagaZPage),
  new Route("/dev", "Dev", renderDevPage),
  new Route("/gaming", "Gaming", renderGamingPage),
  new Route("/freestyle", "Freestyle", renderFreestylePage),
  new Route("/tutos", "Tutos", renderTutosPage)
];

export const notFoundRoute = new Route("/404", "404", renderNotFoundPage);
