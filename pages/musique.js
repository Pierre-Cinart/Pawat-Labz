import { renderPanel } from "../components/ui/panel.js";
import { getMusicHub, getPageContent } from "../data/site.js";

const MUSIC_CATEGORY_ALIASES = {
  productions: "projets",
  "album-solo": "projets",
  "youtube-reseaux": "reseaux"
};

const getRequestedMusicFocus = () => {
  const [, queryString = ""] = window.location.hash.replace(/^#/, "").split("?");
  const searchParams = new URLSearchParams(queryString);

  return searchParams.get("focus");
};

const resolveMusicCategoryId = (requestedFocus, categories) => {
  if (!requestedFocus) {
    return categories[0]?.id ?? "";
  }

  const canonicalCategoryId = MUSIC_CATEGORY_ALIASES[requestedFocus] ?? requestedFocus;

  return categories.find((category) => category.id === canonicalCategoryId)?.id ?? categories[0]?.id ?? "";
};

const renderMusicFeaturedLink = (featuredLink) => {
  if (!featuredLink) {
    return "";
  }

  return `
    <article class="music-featured-link">
      <div class="music-featured-link__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="presentation" focusable="false">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.8V8.2l6.6 3.8-6.6 3.8Z"></path>
        </svg>
      </div>

      <div class="music-featured-link__body">
        <p class="music-featured-link__platform">${featuredLink.platform}</p>
        <h4 class="music-featured-link__handle">${featuredLink.handle}</h4>
        <p class="music-featured-link__summary">${featuredLink.summary}</p>
      </div>

      <a class="button button--primary music-featured-link__button" href="${featuredLink.url}" target="_blank" rel="noreferrer">
        ${featuredLink.buttonLabel}
      </a>
    </article>
  `;
};

export const renderMusiquePage = () => {
  const musiqueContent = getPageContent("musique");
  const musicHub = getMusicHub();
  const requestedFocus = getRequestedMusicFocus();
  const initialCategoryId = resolveMusicCategoryId(requestedFocus, musicHub.categories);
  const initialCategory =
    musicHub.categories.find((category) => category.id === initialCategoryId) ?? musicHub.categories[0];
  let cleanupMusicHub = null;

  return {
    html: `
      <section class="page">
        ${renderPanel({
          kicker: musiqueContent.kicker,
          title: musiqueContent.title,
          text: musiqueContent.text,
          tone: "default",
          badge: musiqueContent.badge
        })}

        <section class="music-focus">
          <div class="music-focus__menu" role="tablist" aria-label="${musicHub.introLabel}">
            ${musicHub.categories
              .map(
                (category, index) => `
                  <button
                    class="music-focus__trigger ${index === 0 ? "music-focus__trigger--active" : ""}"
                    type="button"
                    data-music-category="${category.id}"
                    aria-expanded="${index === 0 ? "true" : "false"}"
                  >
                    <span class="music-focus__trigger-index">0${index + 1}</span>
                    <span>${category.label}</span>
                  </button>
                `
              )
              .join("")}
          </div>

          <div class="music-focus__panel">
            <div class="music-focus__intro">
              <p class="section-kicker">${musicHub.introLabel}</p>
              <h3 class="music-focus__title" data-music-focus-title>${initialCategory.title}</h3>
              <p class="section-text" data-music-focus-description>${initialCategory.description}</p>
              <p class="music-focus__lead">${musicHub.introText}</p>
            </div>

            <article class="music-focus-card" data-music-focus-card>
              <div class="music-focus-card__head">
                <p class="music-focus-card__kicker">${musicHub.categoryKicker}</p>
                <span class="music-focus-card__status">ONLINE</span>
              </div>
              <div data-music-focus-featured-link>
                ${renderMusicFeaturedLink(initialCategory.featuredLink)}
              </div>
            </article>
          </div>
        </section>
      </section>
    `,
    onMount: () => {
      const hubState = new Map(musicHub.categories.map((category) => [category.id, category]));
      const requestedFocus = getRequestedMusicFocus();
      const musicFocusNode = document.querySelector(".music-focus");
      const menuNode = document.querySelector(".music-focus__menu");
      const triggerNodes = Array.from(document.querySelectorAll("[data-music-category]"));
      const titleNode = document.querySelector("[data-music-focus-title]");
      const descriptionNode = document.querySelector("[data-music-focus-description]");
      const featuredLinkNode = document.querySelector("[data-music-focus-featured-link]");

      const updateFocus = (categoryId, { shouldScroll = false } = {}) => {
        const category = hubState.get(categoryId);

        if (!category) {
          return;
        }

        triggerNodes.forEach((triggerNode) => {
          const isActive = triggerNode.dataset.musicCategory === categoryId;
          triggerNode.classList.toggle("music-focus__trigger--active", isActive);
          triggerNode.setAttribute("aria-expanded", isActive ? "true" : "false");
        });

        titleNode.textContent = category.title;
        descriptionNode.textContent = category.description;
        featuredLinkNode.innerHTML = renderMusicFeaturedLink(category.featuredLink);

        if (shouldScroll) {
          const scrollTarget = menuNode ?? musicFocusNode;

          scrollTarget?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      };

      const handleTriggerClick = (event) => {
        updateFocus(event.currentTarget.dataset.musicCategory, { shouldScroll: true });
      };

      triggerNodes.forEach((triggerNode) => {
        triggerNode.addEventListener("click", handleTriggerClick);
      });

      updateFocus(resolveMusicCategoryId(requestedFocus, musicHub.categories), {
        shouldScroll: Boolean(requestedFocus)
      });

      cleanupMusicHub = () => {
        triggerNodes.forEach((triggerNode) => {
          triggerNode.removeEventListener("click", handleTriggerClick);
        });
      };
    },
    onUnmount: () => {
      if (typeof cleanupMusicHub === "function") {
        cleanupMusicHub();
        cleanupMusicHub = null;
      }
    }
  };
};
