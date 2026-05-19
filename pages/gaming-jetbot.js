import { renderButtonLink } from "../components/ui/button.js";
import { loadPhaser } from "../modules/games/phaser-loader.js";
import { mountJetBotGame } from "../modules/games/jet-bot.js";
import { getLanguage } from "../data/site.js";

const jetBotPageCopy = {
  fr: {
    title: "JET BOT",
    quitLabel: "Quitter",
    loading: "Chargement de Jet Bot...",
    error: "Impossible de charger Jet Bot pour le moment."
  },
  en: {
    title: "JET BOT",
    quitLabel: "Quit",
    loading: "Loading Jet Bot...",
    error: "Unable to load Jet Bot right now."
  }
};

const getJetBotPageCopy = () => jetBotPageCopy[getLanguage()] ?? jetBotPageCopy.fr;

export const renderGamingJetBotPage = () => {
  const copy = getJetBotPageCopy();
  let cleanupGame = null;

  return {
    html: `
      <section class="page page-gaming-play">
        <section class="gaming-stage-card" aria-label="${copy.title}">
          <div class="gaming-stage-card__topbar">
            <p class="gaming-stage-card__title">${copy.title}</p>
            ${renderButtonLink({ href: "#/gaming", label: copy.quitLabel, variant: "ghost" })}
          </div>

          <div class="gaming-stage-card__viewport" id="jetbot-game-stage">
            <p class="gaming-stage-card__loading" data-jetbot-status>${copy.loading}</p>
          </div>
        </section>
      </section>
    `,
    onMount: async () => {
      const mountNode = document.getElementById("jetbot-game-stage");
      const statusNode = mountNode?.querySelector("[data-jetbot-status]");

      if (!mountNode) {
        return;
      }

      try {
        await loadPhaser();
        if (statusNode) {
          statusNode.remove();
        }
        cleanupGame = mountJetBotGame({
          mountNode,
          language: getLanguage(),
          onQuit: () => {
            window.location.hash = "/gaming";
          }
        });
      } catch (error) {
        if (statusNode) {
          statusNode.textContent = copy.error;
        }
      }
    },
    onUnmount: () => {
      if (typeof cleanupGame === "function") {
        cleanupGame();
        cleanupGame = null;
      }
    }
  };
};
