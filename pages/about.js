import { renderPanel } from "../components/ui/panel.js";
import { getAboutLab, getPageContent } from "../data/site.js";

/**
 * Page About.
 *
 * Cette page porte le lore du Lab : entree du multivers, createur derriere le
 * labo, ecosysteme des rubriques et futur support. Les textes viennent de
 * `data/site.js` pour garder la version FR/EN au meme endroit.
 */

// Les lignes de manifeste restent separees pour eviter un gros mur de texte.
const renderHeroLines = (lines) =>
  lines
    .map(
      (line) => `
        <p class="about-lab-hero__line">${line}</p>
      `
    )
    .join("");

// La grille ecosysteme sert de carte du Lab : chaque carte renvoie a sa rubrique.
const renderEcosystemCards = (cards) =>
  cards
    .map(
      (card) => `
        <a class="about-lab-card" href="#${card.path}" data-link aria-label="${card.title}">
          <div class="about-lab-card__head">
            <span class="about-lab-card__signal">${card.signal}</span>
            <span class="about-lab-card__line"></span>
          </div>
          <h3 class="about-lab-card__title">${card.title}</h3>
          <p class="about-lab-card__text">${card.text}</p>
        </a>
      `
    )
    .join("");

const renderFlowItems = (items) =>
  items
    .map(
      (item) => `
        <article class="about-flow-card">
          <p class="about-flow-card__label">${item.label}</p>
          <h3 class="about-flow-card__title">${item.title}</h3>
          <p class="about-flow-card__text">${item.text}</p>
        </article>
      `
    )
    .join("");

const renderPortalLinks = (items) =>
  items
    .map(
      (item) => `
        <li class="about-linkmap__item">
          <span class="about-linkmap__from">${item.from}</span>
          <span class="about-linkmap__arrow">→</span>
          <span class="about-linkmap__to">${item.to}</span>
        </li>
      `
    )
    .join("");

export const renderAboutPage = () => {
  const aboutContent = getPageContent("about");
  const aboutLab = getAboutLab();

  return {
    html: `
      <section class="page page-about">
        ${renderPanel({
          kicker: aboutContent.kicker,
          title: aboutContent.title,
          text: aboutContent.text,
          tone: "cyan",
          badge: aboutContent.badge
        })}

        <section class="about-lab-hero">
          <div class="about-lab-hero__grid">
            <article class="about-lab-hero__copy">
              <p class="section-kicker">${aboutLab.hero.kicker}</p>
              <h2 class="about-lab-hero__title">${aboutLab.hero.title}</h2>
              <div class="about-lab-hero__manifesto">
                ${renderHeroLines(aboutLab.hero.lines)}
              </div>
            </article>

            <aside class="about-lab-hero__panel" aria-label="${aboutLab.hero.panelLabel}">
              <p class="about-lab-hero__panel-label">${aboutLab.hero.panelLabel}</p>
              <p class="about-lab-hero__panel-title">${aboutLab.hero.panelTitle}</p>
              <p class="about-lab-hero__panel-text">${aboutLab.hero.panelText}</p>
            </aside>
          </div>
        </section>

        <section class="about-lab-identity">
          <div class="about-lab-identity__copy">
            <p class="section-kicker">${aboutLab.creator.kicker}</p>
            <h2 class="about-lab-section__title">${aboutLab.creator.title}</h2>
            <p class="section-text">${aboutLab.creator.text}</p>
          </div>

          <div class="about-lab-identity__panel">
            <p class="about-lab-identity__label">${aboutLab.creator.panelLabel}</p>
            <h3 class="about-lab-identity__lead">${aboutLab.creator.lead}</h3>
            <p class="about-lab-identity__text">${aboutLab.creator.panelText}</p>
          </div>
        </section>

        <section class="about-lab-ecosystem">
          <div class="about-lab-section__head">
            <p class="section-kicker">${aboutLab.ecosystem.kicker}</p>
            <h2 class="about-lab-section__title">${aboutLab.ecosystem.title}</h2>
            <p class="section-text">${aboutLab.ecosystem.text}</p>
          </div>

          <div class="about-lab-grid">
            ${renderEcosystemCards(aboutLab.ecosystem.cards)}
          </div>
        </section>

        <section class="about-lab-flow">
          <div class="about-lab-flow__intro">
            <p class="section-kicker">${aboutLab.siteFlow.kicker}</p>
            <h2 class="about-lab-section__title">${aboutLab.siteFlow.title}</h2>
            <p class="section-text">${aboutLab.siteFlow.text}</p>
          </div>

          <div class="about-lab-flow__grid">
            <div class="about-lab-flow__cards">
              ${renderFlowItems(aboutLab.siteFlow.items)}
            </div>

            <aside class="about-linkmap">
              <p class="about-linkmap__label">${aboutLab.siteFlow.linkMapLabel}</p>
              <ul class="about-linkmap__list">
                ${renderPortalLinks(aboutLab.siteFlow.links)}
              </ul>
            </aside>
          </div>
        </section>

        <section class="about-lab-support">
          <div class="about-lab-support__copy">
            <p class="section-kicker">${aboutLab.support.kicker}</p>
            <h2 class="about-lab-section__title">${aboutLab.support.title}</h2>
            <p class="section-text">${aboutLab.support.text}</p>
          </div>

          <div class="about-lab-support__actions">
            <button
              class="button button--primary about-lab-support__button"
              type="button"
              disabled
              aria-disabled="true"
            >
              ${aboutLab.support.buttonLabel}
            </button>
            <p class="about-lab-support__note">${aboutLab.support.note}</p>
          </div>
        </section>
      </section>
    `
  };
};
