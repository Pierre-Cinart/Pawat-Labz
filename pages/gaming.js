import { renderButtonLink } from "../components/ui/button.js";
import { renderPanel } from "../components/ui/panel.js";
import { getLanguage, getPageContent, getPageHighlights } from "../data/site.js";

const gamingMiniGamesCopy = {
  fr: {
    kicker: "MINI-JEUX",
    title: "Premiers prototypes jouables du Lab",
    text: "Une entree simple pour lancer les jeux navigateur de Pawat-Labz. Chaque carte ouvre un prototype jouable dans le site.",
    cardKicker: "PHASER / FLAPPY-LIKE",
    cardTitle: "Jet Bot",
    cardText:
      "Prototype arcade portrait inspire du Flappy-like, pense comme une base jouable, pedagogique et evolutive pour les futurs web games du Lab.",
    cardStatus: "Prototype jouable",
    controls: "Espace, clic, tactile, Echap pour pause",
    playLabel: "Jouer"
  },
  en: {
    kicker: "MINI-GAMES",
    title: "The Lab's first playable prototypes",
    text: "A simple entry point to launch Pawat-Labz browser games. Each card opens a playable prototype inside the site.",
    cardKicker: "PHASER / FLAPPY-LIKE",
    cardTitle: "Jet Bot",
    cardText:
      "A portrait arcade prototype inspired by the Flappy-like formula, built as a playable, educational and scalable base for future Lab web games.",
    cardStatus: "Playable prototype",
    controls: "Space, click, touch, Escape to pause",
    playLabel: "Play"
  }
};

const getGamingMiniGamesCopy = () => gamingMiniGamesCopy[getLanguage()] ?? gamingMiniGamesCopy.fr;

/**
 * Page Gaming actuelle.
 *
 * Elle reste volontairement simple pour le moment : panneau d'introduction et
 * points forts. La future section Web Games pourra s'y brancher sans casser la
 * structure existante.
 */
export const renderGamingPage = () => {
  const gamingContent = getPageContent("gaming");
  const pageHighlights = getPageHighlights();
  const miniGamesCopy = getGamingMiniGamesCopy();

  return {
    html: `
      <section class="page page-gaming">
        ${renderPanel({
          kicker: gamingContent.kicker,
          title: gamingContent.title,
          text: gamingContent.text,
          tone: "default",
          badge: gamingContent.badge
        })}

        <div class="stack-list">
          ${pageHighlights.gaming
            .map(
              (item) => `
                <article class="stack-item">
                  <span class="stack-item__bullet"></span>
                  <p>${item}</p>
                </article>
              `
            )
            .join("")}
        </div>

        <section class="gaming-mini-games">
          <div class="gaming-mini-games__intro">
            <p class="section-kicker">${miniGamesCopy.kicker}</p>
            <h2 class="gaming-mini-games__title">${miniGamesCopy.title}</h2>
            <p class="section-text">${miniGamesCopy.text}</p>
          </div>

          <article class="gaming-game-card">
            <div class="gaming-game-card__media">
              <img
                class="gaming-game-card__image"
                src="assets/web-games/JetBot/images/jetbot.webp"
                alt="Jet Bot"
                loading="lazy"
              >
            </div>

            <div class="gaming-game-card__body">
              <p class="gaming-game-card__kicker">${miniGamesCopy.cardKicker}</p>
              <h3 class="gaming-game-card__title">${miniGamesCopy.cardTitle}</h3>
              <p class="gaming-game-card__text">${miniGamesCopy.cardText}</p>

              <div class="gaming-game-card__meta">
                <span class="gaming-game-card__status">${miniGamesCopy.cardStatus}</span>
                <span class="gaming-game-card__controls">${miniGamesCopy.controls}</span>
              </div>

              <div class="gaming-game-card__actions">
                ${renderButtonLink({
                  href: "#/gaming/jet-bot",
                  label: miniGamesCopy.playLabel,
                  variant: "primary"
                })}
              </div>
            </div>
          </article>
        </section>
      </section>
    `
  };
};
