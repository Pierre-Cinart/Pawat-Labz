import { renderButtonLink } from "../components/ui/button.js";
import { getLanguage } from "../data/site.js";

const desSonsPageCopy = {
  fr: {
    title: "DES SONS & DES MOTS",
    quitLabel: "Quitter",
    loading: "Chargement de Des Sons & Des Mots..."
  },
  en: {
    title: "DES SONS & DES MOTS",
    quitLabel: "Quit",
    loading: "Loading Des Sons & Des Mots..."
  }
};

const getDesSonsPageCopy = () => desSonsPageCopy[getLanguage()] ?? desSonsPageCopy.fr;

export const renderGamingDesSonsDesMotsPage = () => {
  const copy = getDesSonsPageCopy();

  return {
    html: `
      <section class="page page-gaming-play">
        <section class="gaming-stage-card" aria-label="${copy.title}">
          <div class="gaming-stage-card__topbar">
            <p class="gaming-stage-card__title">${copy.title}</p>
            ${renderButtonLink({ href: "#/gaming", label: copy.quitLabel, variant: "ghost" })}
          </div>

          <div class="gaming-stage-card__viewport gaming-stage-card__viewport--iframe">
            <iframe
              class="gaming-stage-card__frame"
              src="assets/web-games/DesSonsDesMots/game/index.html"
              title="${copy.title}"
              loading="eager"
              allow="autoplay"
            ></iframe>
          </div>
        </section>
      </section>
    `
  };
};
