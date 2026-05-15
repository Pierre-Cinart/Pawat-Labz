import { renderPanel } from "../components/ui/panel.js";
import { getAboutLab, getPageContent } from "../data/site.js";

const renderSignalCards = (signals) =>
  signals
    .map(
      (signal) => `
        <article class="about-signal-card">
          <p class="about-signal-card__label">${signal.label}</p>
          <h3 class="about-signal-card__value">${signal.value}</h3>
          <p class="about-signal-card__note">${signal.note}</p>
        </article>
      `
    )
    .join("");

const renderSectionCards = (sections) =>
  sections
    .map(
      (section) => `
        <article class="about-sector-card">
          <div class="about-sector-card__head">
            <span class="about-sector-card__signal">${section.signal}</span>
            <span class="about-sector-card__line"></span>
          </div>
          <h3 class="about-sector-card__title">${section.title}</h3>
          <p class="about-sector-card__text">${section.text}</p>
        </article>
      `
    )
    .join("");

const renderStatusCards = (items) =>
  items
    .map(
      (item) => `
        <article class="about-status-card">
          <p class="about-status-card__label">${item.label}</p>
          <p class="about-status-card__value">${item.value}</p>
        </article>
      `
    )
    .join("");

const renderSupportChannels = (channels) =>
  channels
    .map(
      (channel) => `
        <li class="about-support-chip">${channel}</li>
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

        <section class="about-atlas">
          <div class="about-atlas__intro">
            <article class="about-atlas__copy">
              <p class="section-kicker">${aboutLab.overview.kicker}</p>
              <h3 class="about-atlas__title">${aboutLab.overview.title}</h3>
              <p class="section-text">${aboutLab.overview.text}</p>
            </article>

            <div class="about-atlas__signals">
              ${renderSignalCards(aboutLab.signals)}
            </div>
          </div>

          <div class="about-sector-grid">
            ${renderSectionCards(aboutLab.sections)}
          </div>
        </section>

        <section class="about-status-panel">
          <div class="about-status-panel__intro">
            <p class="section-kicker">${aboutLab.systemStatus.kicker}</p>
            <h3 class="about-atlas__title">${aboutLab.systemStatus.title}</h3>
            <p class="section-text">${aboutLab.systemStatus.text}</p>
          </div>

          <div class="about-status-grid">
            ${renderStatusCards(aboutLab.systemStatus.items)}
          </div>
        </section>

        <section class="about-support-panel">
          <div class="about-support-panel__copy">
            <p class="section-kicker">${aboutLab.support.kicker}</p>
            <h3 class="about-atlas__title">${aboutLab.support.title}</h3>
            <p class="section-text">${aboutLab.support.text}</p>
          </div>

          <div class="about-support-panel__actions">
            <ul class="about-support-chips">
              ${renderSupportChannels(aboutLab.support.channels)}
            </ul>

            <button
              class="button button--primary about-support-panel__button"
              type="button"
              disabled
              aria-disabled="true"
            >
              ${aboutLab.support.buttonLabel}
            </button>
          </div>
        </section>
      </section>
    `
  };
};
