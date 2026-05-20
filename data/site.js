/**
 * Point d'entree public des contenus Pawat-Labz.
 *
 * Les gros blocs editoriaux vivent dans des modules specialises par rubrique.
 * Ce fichier garde les imports historiques stables pour les pages et le layout.
 */
import { aboutContent } from "./about.js";
import { animationContent } from "./animation.js";
import { devContent } from "./dev.js";
import { freestyleContent } from "./freestyle.js";
import { gamingContent } from "./gaming.js";
import { homeContent } from "./home.js";
import { musicContent } from "./music.js";
import { navigationContent } from "./navigation.js";
import {
  LANGUAGE_STORAGE_KEY,
  SITE_BASE_URL,
  SUPPORTED_LANGUAGES,
  siteMetaContent,
  updateHead
} from "./site-meta.js";
import { tutosContent } from "./tutos.js";
import { universContent } from "./univers.js";

const getStoredLanguage = () => {
  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return SUPPORTED_LANGUAGES.includes(storedLanguage) ? storedLanguage : "fr";
  } catch {
    return "fr";
  }
};

let currentLanguage = getStoredLanguage();

const getLocalizedContent = (contentMap) => contentMap[currentLanguage] ?? contentMap.fr;

const getPageContentMap = () => ({
  home: getLocalizedContent(homeContent).home,
  univers: getLocalizedContent(universContent).univers,
  about: getLocalizedContent(aboutContent).about,
  musique: getLocalizedContent(musicContent).musique,
  animation: getLocalizedContent(animationContent).animation,
  dev: getLocalizedContent(devContent).dev,
  gaming: getLocalizedContent(gamingContent).gaming,
  freestyle: getLocalizedContent(freestyleContent).freestyle,
  improLab: getLocalizedContent(freestyleContent).improLab,
  tutos: getLocalizedContent(tutosContent).tutos,
  notFound: getLocalizedContent(siteMetaContent).notFound
});

export const getLanguage = () => currentLanguage;

export const getSupportedLanguages = () => [...SUPPORTED_LANGUAGES];

export const setLanguage = (language) => {
  if (!SUPPORTED_LANGUAGES.includes(language)) {
    return;
  }

  currentLanguage = language;

  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // No-op if storage is unavailable.
  }

  document.documentElement.lang = language;
};

export const initializeLanguage = () => {
  document.documentElement.lang = currentLanguage;
};

export const getSiteMeta = () => getLocalizedContent(siteMetaContent).siteMeta;
export const getNavigationItems = () => getLocalizedContent(navigationContent).navigationItems;
export const getFooterMeta = () => getLocalizedContent(siteMetaContent).footerMeta;
export const getFooterLinks = () => getLocalizedContent(siteMetaContent).footerLinks;
export const getLanguageSwitcher = () => getLocalizedContent(siteMetaContent).languageSwitcher;
export const getAuthPreview = () => getLocalizedContent(siteMetaContent).authPreview;
export const getCreativeUniverses = () => getLocalizedContent(universContent).creativeUniverses;
export const getHomeManifesto = () => getLocalizedContent(homeContent).homeManifesto;
export const getPageHighlights = () => ({
  ...getLocalizedContent(homeContent).pageHighlights,
  ...getLocalizedContent(musicContent).pageHighlights,
  ...getLocalizedContent(animationContent).pageHighlights,
  ...getLocalizedContent(devContent).pageHighlights,
  ...getLocalizedContent(gamingContent).pageHighlights,
  ...getLocalizedContent(freestyleContent).pageHighlights,
  ...getLocalizedContent(tutosContent).pageHighlights
});
export const getPageContent = (pageKey) => getPageContentMap()[pageKey];
export const getTutorialHub = () => getLocalizedContent(tutosContent).tutorialHub;
export const getImproLabContent = () => getLocalizedContent(freestyleContent).improLab;
export const getAnimationHub = () => getLocalizedContent(animationContent).animationHub;
export const getAnimationSeries = (seriesKey) => getLocalizedContent(animationContent).animationSeries[seriesKey];
export const getMusicHub = () => getLocalizedContent(musicContent).musicHub;
export const getAboutLab = () => getLocalizedContent(aboutContent).aboutLab;

export const getRouteTitle = (path) => {
  const localeContent = getLocalizedContent(siteMetaContent);

  if (path === "/404") {
    return localeContent.notFound.title;
  }

  return (
    localeContent.routeTitles?.[path] ??
    getNavigationItems().find((item) => item.path === path)?.label ??
    "Pawat Labz"
  );
};

export const getRouteMeta = (path) => {
  const localeContent = getLocalizedContent(siteMetaContent);
  const routeMeta = localeContent.routeMeta?.[path] ?? localeContent.routeMeta?.["/"];
  const routeHash = path === "/" ? "#/" : path === "/404" ? "#/404" : "#" + path;

  return {
    ...routeMeta,
    url: SITE_BASE_URL + routeHash
  };
};

export { updateHead };
