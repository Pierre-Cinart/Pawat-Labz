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

const renderMusicShowcasePlayer = (entry) => {
  if (!entry.youtubeId) {
    return `
      <div class="sagaz-player__placeholder animation-showcase__placeholder">
        <p>Aperçu vidéo bientôt disponible.</p>
      </div>
    `;
  }
  return `
    <div class="sagaz-player__frame animation-showcase__frame">
      <iframe
        src="https://www.youtube.com/embed/${entry.youtubeId}"
        title="${entry.title}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
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
            </div>

            <div class="music-focus__entries" data-music-focus-entries style="display:none"></div>

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
      const entriesNode = document.querySelector("[data-music-focus-entries]");
      const cardNode = document.querySelector("[data-music-focus-card]");
      const featuredLinkNode = document.querySelector("[data-music-focus-featured-link]");
      let imageCleanup = null;
      let showcaseCleanup = null;

      const renderEntries = (entries) => {
        if (typeof imageCleanup === "function") {
          imageCleanup();
          imageCleanup = null;
        }

        if (!entries.length) {
          entriesNode.innerHTML = `
            <div class="animation-entry-empty">
              <p>${musicHub.emptyState}</p>
            </div>
          `;
          return;
        }

        entriesNode.innerHTML = entries
          .map(
            (entry) => `
              <article class="animation-entry-card">
                <div class="animation-entry-card__media">
                  <img class="animation-entry-card__image" src="${entry.image}" alt="${entry.imageAlt}" loading="lazy">
                  <div class="animation-entry-card__media-placeholder">
                    <span>${musicHub.imageLabel}</span>
                  </div>
                </div>
                <div class="animation-entry-card__content">
                  <p class="animation-entry-card__kicker">${entry.typeLabel ?? musicHub.entryKicker}</p>
                  <h4 class="animation-entry-card__title">${entry.title}</h4>
                  <p class="animation-entry-card__text">${entry.subtitle}</p>
                  ${entry.context ? `<p class="animation-entry-card__context">${entry.context}</p>` : ""}
                  <div class="animation-entry-card__actions">
                    ${entry.externalUrl
                      ? `<a class="button button--primary" href="${entry.externalUrl}" target="_blank" rel="noreferrer">${entry.externalLabel ?? musicHub.entryButtons.external}</a>`
                      : ""}
                  </div>
                </div>
              </article>
            `
          )
          .join("");

        const imageNodes = Array.from(entriesNode.querySelectorAll(".animation-entry-card__image"));
        const removeImageListeners = [];

        imageNodes.forEach((imageNode) => {
          const mediaNode = imageNode.closest(".animation-entry-card__media");
          const placeholderNode = mediaNode?.querySelector(".animation-entry-card__media-placeholder");

          const handleLoad = () => {
            imageNode.classList.add("animation-entry-card__image--ready");
            placeholderNode?.classList.add("animation-entry-card__media-placeholder--hidden");
          };

          const handleError = () => {
            imageNode.classList.remove("animation-entry-card__image--ready");
            placeholderNode?.classList.remove("animation-entry-card__media-placeholder--hidden");
          };

          imageNode.addEventListener("load", handleLoad);
          imageNode.addEventListener("error", handleError);

          if (imageNode.complete && imageNode.naturalWidth > 0) {
            handleLoad();
          }

          removeImageListeners.push(() => {
            imageNode.removeEventListener("load", handleLoad);
            imageNode.removeEventListener("error", handleError);
          });
        });

        imageCleanup = () => {
          removeImageListeners.forEach((removeListener) => removeListener());
        };
      };

      const renderShowcase = (category) => {
        const initialEntry = category.entries[0];

        if (typeof imageCleanup === "function") {
          imageCleanup();
          imageCleanup = null;
        }

        if (typeof showcaseCleanup === "function") {
          showcaseCleanup();
          showcaseCleanup = null;
        }

        entriesNode.innerHTML = `
          <section class="animation-showcase">
            <div class="episode-list-panel animation-showcase__list-panel">
              <p class="section-kicker">${category.label}</p>
              <div class="episode-list animation-showcase__list" data-music-showcase-list>
                ${category.entries
                  .map(
                    (entry, index) => `
                      <button
                        class="episode-card animation-showcase-card ${index === 0 ? "episode-card--active animation-showcase-card--active" : ""}"
                        type="button"
                        data-showcase-entry="${entry.title}"
                      >
                        <span class="episode-card__thumb animation-showcase-card__thumb">
                          <img class="episode-card__thumb-image animation-showcase-card__thumb-image" src="${entry.image}" alt="${entry.imageAlt}" loading="lazy">
                          <span class="episode-card__thumb-placeholder animation-showcase-card__thumb-placeholder">${musicHub.imageLabel}</span>
                        </span>
                        <span class="episode-card__body animation-showcase-card__body">
                          <span class="episode-card__title animation-showcase-card__title">${entry.title}</span>
                          <span class="episode-card__summary animation-showcase-card__summary">${entry.subtitle}</span>
                        </span>
                      </button>
                    `
                  )
                  .join("")}
              </div>
            </div>

            <div class="sagaz-player-panel animation-showcase__player-panel" data-music-showcase-panel>
              <div class="animation-showcase__head">
                <p class="section-kicker">${initialEntry.typeLabel ?? musicHub.entryKicker}</p>
                ${initialEntry.externalUrl
                  ? `<a class="sagaz-browser__playlist-link animation-showcase__quick-link" href="${initialEntry.externalUrl}" target="_blank" rel="noreferrer">${initialEntry.externalLabel ?? musicHub.entryButtons.external}</a>`
                  : ""}
              </div>
              <div class="sagaz-player animation-showcase__player" data-music-showcase-player>
                ${renderMusicShowcasePlayer(initialEntry)}
              </div>
              <article class="sagaz-player__meta animation-showcase__meta">
                <p class="sagaz-player__episode-number" data-music-showcase-type>${initialEntry.typeLabel ?? musicHub.entryKicker}</p>
                <h4 class="sagaz-player__episode-title animation-showcase__meta-title" data-music-showcase-title>${initialEntry.title}</h4>
                <p class="sagaz-player__episode-summary animation-showcase__meta-text" data-music-showcase-subtitle>${initialEntry.subtitle}</p>
                <p class="sagaz-player__episode-summary animation-showcase__meta-context" data-music-showcase-context>${initialEntry.context ?? ""}</p>
                <div class="animation-showcase__actions" data-music-showcase-actions>
                  ${initialEntry.externalUrl
                    ? `<a class="button button--primary" href="${initialEntry.externalUrl}" target="_blank" rel="noreferrer">${initialEntry.externalLabel ?? musicHub.entryButtons.external}</a>`
                    : ""}
                </div>
              </article>
            </div>
          </section>
        `;

        const thumbImages = Array.from(entriesNode.querySelectorAll(".animation-showcase-card__thumb-image"));
        const removeImageListeners = [];

        thumbImages.forEach((imageNode) => {
          const placeholderNode = imageNode.parentElement?.querySelector(".animation-showcase-card__thumb-placeholder");

          const handleLoad = () => {
            imageNode.classList.add("animation-showcase-card__thumb-image--ready");
            imageNode.classList.add("episode-card__thumb-image--ready");
            placeholderNode?.classList.add("animation-showcase-card__thumb-placeholder--hidden");
            placeholderNode?.classList.add("episode-card__thumb-placeholder--hidden");
          };

          const handleError = () => {
            imageNode.classList.remove("animation-showcase-card__thumb-image--ready");
            imageNode.classList.remove("episode-card__thumb-image--ready");
            placeholderNode?.classList.remove("animation-showcase-card__thumb-placeholder--hidden");
            placeholderNode?.classList.remove("episode-card__thumb-placeholder--hidden");
          };

          imageNode.addEventListener("load", handleLoad);
          imageNode.addEventListener("error", handleError);

          if (imageNode.complete && imageNode.naturalWidth > 0) {
            handleLoad();
          }

          removeImageListeners.push(() => {
            imageNode.removeEventListener("load", handleLoad);
            imageNode.removeEventListener("error", handleError);
          });
        });

        const cardNodes = Array.from(entriesNode.querySelectorAll("[data-showcase-entry]"));
        const playerNode = entriesNode.querySelector("[data-music-showcase-player]");
        const panelNode = entriesNode.querySelector("[data-music-showcase-panel]");
        const quickLinkNode = entriesNode.querySelector(".animation-showcase__quick-link");
        const typeNode = entriesNode.querySelector("[data-music-showcase-type]");
        const showcaseTitleNode = entriesNode.querySelector("[data-music-showcase-title]");
        const subtitleNode = entriesNode.querySelector("[data-music-showcase-subtitle]");
        const contextNode = entriesNode.querySelector("[data-music-showcase-context]");
        const actionsNode = entriesNode.querySelector("[data-music-showcase-actions]");

        const updateShowcase = (entryTitle, { scrollToPlayer = false } = {}) => {
          const activeEntry = category.entries.find((entry) => entry.title === entryTitle) ?? initialEntry;

          cardNodes.forEach((cardNode) => {
            const isActive = cardNode.dataset.showcaseEntry === activeEntry.title;
            cardNode.classList.toggle("animation-showcase-card--active", isActive);
            cardNode.classList.toggle("episode-card--active", isActive);
          });

          playerNode.innerHTML = renderMusicShowcasePlayer(activeEntry);

          if (quickLinkNode) {
            if (activeEntry.externalUrl) {
              quickLinkNode.href = activeEntry.externalUrl;
              quickLinkNode.textContent = activeEntry.externalLabel ?? musicHub.entryButtons.external;
              quickLinkNode.style.display = "";
            } else {
              quickLinkNode.style.display = "none";
            }
          }

          typeNode.textContent = activeEntry.typeLabel ?? musicHub.entryKicker;
          showcaseTitleNode.textContent = activeEntry.title;
          subtitleNode.textContent = activeEntry.subtitle;
          contextNode.textContent = activeEntry.context ?? "";
          actionsNode.innerHTML = activeEntry.externalUrl
            ? `<a class="button button--primary" href="${activeEntry.externalUrl}" target="_blank" rel="noreferrer">${activeEntry.externalLabel ?? musicHub.entryButtons.external}</a>`
            : "";

          if (scrollToPlayer) {
            panelNode.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        };

        const handleCardClick = (event) => {
          updateShowcase(event.currentTarget.dataset.showcaseEntry, { scrollToPlayer: true });
        };

        cardNodes.forEach((cardNode) => {
          cardNode.addEventListener("click", handleCardClick);
        });

        showcaseCleanup = () => {
          cardNodes.forEach((cardNode) => {
            cardNode.removeEventListener("click", handleCardClick);
          });
          removeImageListeners.forEach((removeListener) => removeListener());
        };
      };

      const centerMusicTarget = (targetNode) => {
        if (!targetNode) return;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            targetNode.scrollIntoView({ behavior: "smooth", block: "center" });
          });
        });
      };

      const updateFocus = (categoryId, { shouldScroll = false, shouldCenter = false } = {}) => {
        const category = hubState.get(categoryId);
        if (!category) return;

        triggerNodes.forEach((triggerNode) => {
          const isActive = triggerNode.dataset.musicCategory === categoryId;
          triggerNode.classList.toggle("music-focus__trigger--active", isActive);
          triggerNode.setAttribute("aria-expanded", isActive ? "true" : "false");
        });

        titleNode.textContent = category.title;
        descriptionNode.textContent = category.description;

        if (category.entries !== undefined) {
          cardNode.style.display = "none";
          entriesNode.style.display = "";

          if (category.displayMode === "showcase") {
            if (category.entries.length) {
              renderShowcase(category);
            } else {
              if (typeof showcaseCleanup === "function") {
                showcaseCleanup();
                showcaseCleanup = null;
              }
              if (typeof imageCleanup === "function") {
                imageCleanup();
                imageCleanup = null;
              }
              entriesNode.innerHTML = `
                <div class="animation-entry-empty">
                  <p>${musicHub.emptyState}</p>
                </div>
              `;
            }
            if (shouldCenter) {
              const focusTarget =
                entriesNode.querySelector(".animation-showcase") ??
                entriesNode.querySelector(".animation-entry-empty") ??
                entriesNode;
              centerMusicTarget(focusTarget);
            }
          } else {
            if (typeof showcaseCleanup === "function") {
              showcaseCleanup();
              showcaseCleanup = null;
            }
            renderEntries(category.entries);
            if (shouldCenter) {
              const focusTarget =
                entriesNode.querySelector(".animation-entry-card") ??
                entriesNode.querySelector(".animation-entry-empty") ??
                musicFocusNode;
              centerMusicTarget(focusTarget);
            }
          }
        } else {
          entriesNode.style.display = "none";
          entriesNode.innerHTML = "";
          if (typeof imageCleanup === "function") {
            imageCleanup();
            imageCleanup = null;
          }
          if (typeof showcaseCleanup === "function") {
            showcaseCleanup();
            showcaseCleanup = null;
          }
          cardNode.style.display = "";
          featuredLinkNode.innerHTML = renderMusicFeaturedLink(category.featuredLink);

          if (shouldScroll) {
            const scrollTarget = menuNode ?? musicFocusNode;
            scrollTarget?.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      };

      const handleTriggerClick = (event) => {
        const categoryId = event.currentTarget.dataset.musicCategory;
        const category = hubState.get(categoryId);
        const hasEntries = category?.entries !== undefined;
        updateFocus(categoryId, {
          shouldScroll: !hasEntries,
          shouldCenter: hasEntries
        });
      };

      triggerNodes.forEach((triggerNode) => {
        triggerNode.addEventListener("click", handleTriggerClick);
      });

      const initialHasEntries = initialCategory.entries !== undefined;
      updateFocus(resolveMusicCategoryId(requestedFocus, musicHub.categories), {
        shouldScroll: Boolean(requestedFocus) && !initialHasEntries,
        shouldCenter: Boolean(requestedFocus) && initialHasEntries
      });

      cleanupMusicHub = () => {
        triggerNodes.forEach((triggerNode) => {
          triggerNode.removeEventListener("click", handleTriggerClick);
        });
        if (typeof imageCleanup === "function") {
          imageCleanup();
          imageCleanup = null;
        }
        if (typeof showcaseCleanup === "function") {
          showcaseCleanup();
          showcaseCleanup = null;
        }
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
