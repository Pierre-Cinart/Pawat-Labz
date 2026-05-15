import { renderPanel } from "../components/ui/panel.js";
import { getAnimationHub, getPageContent } from "../data/site.js";

const ANIMATION_CATEGORY_ALIASES = {
  "animated-series": "series-animees",
  "animated-clips": "clips-animes",
  "short-ads": "publicites-courtes"
};

const getRequestedAnimationFocus = () => {
  const [, queryString = ""] = window.location.hash.replace(/^#/, "").split("?");
  const searchParams = new URLSearchParams(queryString);

  return searchParams.get("focus");
};

const resolveAnimationCategoryId = (requestedFocus, categories) => {
  if (!requestedFocus) {
    return categories[0]?.id ?? "";
  }

  const canonicalCategoryId = ANIMATION_CATEGORY_ALIASES[requestedFocus] ?? requestedFocus;

  return categories.find((category) => category.id === canonicalCategoryId)?.id ?? categories[0]?.id ?? "";
};

export const renderAnimationPage = () => {
  const animationContent = getPageContent("animation");
  const animationHub = getAnimationHub();
  const requestedFocus = getRequestedAnimationFocus();
  const initialCategoryId = resolveAnimationCategoryId(requestedFocus, animationHub.categories);
  const initialCategory =
    animationHub.categories.find((category) => category.id === initialCategoryId) ?? animationHub.categories[0];
  let cleanupAnimationHub = null;

  return {
    html: `
      <section class="page">
        ${renderPanel({
          kicker: animationContent.kicker,
          title: animationContent.title,
          text: animationContent.text,
          tone: "cyan",
          badge: animationContent.badge
        })}

        <section class="animation-focus">
          <div class="animation-focus__menu" role="tablist" aria-label="${animationHub.introLabel}">
            ${animationHub.categories
              .map(
                (category, index) => `
                  <button
                    class="animation-focus__trigger ${index === 0 ? "animation-focus__trigger--active" : ""}"
                    type="button"
                    data-animation-category="${category.id}"
                    aria-expanded="${index === 0 ? "true" : "false"}"
                  >
                    <span class="animation-focus__trigger-index">0${index + 1}</span>
                    <span>${category.label}</span>
                  </button>
                `
              )
              .join("")}
          </div>

          <div class="animation-focus__panel">
            <div class="animation-focus__intro">
              <p class="section-kicker">${animationHub.introLabel}</p>
              <h3 class="animation-focus__title" data-animation-focus-title>${initialCategory.title}</h3>
              <p class="section-text" data-animation-focus-description>${initialCategory.description}</p>
            </div>

            <div class="animation-focus__entries" data-animation-focus-entries>
              ${initialCategory.entries.length
                ? initialCategory.entries
                    .map(
                      (entry) => `
                        <article class="animation-entry-card">
                          <div class="animation-entry-card__media">
                            <img class="animation-entry-card__image" src="${entry.image}" alt="${entry.imageAlt}" loading="lazy">
                            <div class="animation-entry-card__media-placeholder">
                              <span>${animationHub.imageLabel}</span>
                            </div>
                          </div>
                          <div class="animation-entry-card__content">
                            <p class="animation-entry-card__kicker">${entry.typeLabel ?? animationHub.entryKicker}</p>
                            <h4 class="animation-entry-card__title">${entry.title}</h4>
                            <p class="animation-entry-card__text">${entry.subtitle}</p>
                            ${entry.context ? `<p class="animation-entry-card__context">${entry.context}</p>` : ""}
                            ${entry.relatedLinks?.length ? `
                              <div class="animation-entry-card__links">
                                ${entry.relatedLinks
                                  .map(
                                    (relatedLink) => `
                                      <a class="button button--ghost" href="${relatedLink.href}" ${relatedLink.href.startsWith("#") ? "" : 'target="_blank" rel="noreferrer"'}>
                                        ${relatedLink.label}
                                      </a>
                                    `
                                  )
                                  .join("")}
                              </div>
                            ` : ""}
                            <div class="animation-entry-card__actions">
                              ${entry.path
                                ? `<a class="button button--primary" href="#${entry.path}" data-link>${animationHub.entryButtons.internal}</a>`
                                : ""}
                              ${entry.externalUrl
                                ? `<a class="button button--ghost" href="${entry.externalUrl}" target="_blank" rel="noreferrer">${entry.externalLabel ?? animationHub.entryButtons.external}</a>`
                                : ""}
                            </div>
                          </div>
                        </article>
                      `
                    )
                    .join("")
                : `
                    <div class="animation-entry-empty">
                      <p>${animationHub.emptyState}</p>
                    </div>
                  `}
            </div>
          </div>
        </section>
      </section>
    `,
    onMount: () => {
      const hubState = new Map(animationHub.categories.map((category) => [category.id, category]));
      const requestedFocus = getRequestedAnimationFocus();
      const animationFocusNode = document.querySelector(".animation-focus");
      const triggerNodes = Array.from(document.querySelectorAll("[data-animation-category]"));
      const titleNode = document.querySelector("[data-animation-focus-title]");
      const descriptionNode = document.querySelector("[data-animation-focus-description]");
      const entriesNode = document.querySelector("[data-animation-focus-entries]");
      let imageCleanup = null;
      let showcaseCleanup = null;

      const renderShowcasePlayer = (entry) => {
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

      const renderEntries = (entries) => {
        if (!entries.length) {
          entriesNode.innerHTML = `
            <div class="animation-entry-empty">
              <p>${animationHub.emptyState}</p>
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
                    <span>${animationHub.imageLabel}</span>
                  </div>
                </div>
                <div class="animation-entry-card__content">
                  <p class="animation-entry-card__kicker">${entry.typeLabel ?? animationHub.entryKicker}</p>
                  <h4 class="animation-entry-card__title">${entry.title}</h4>
                  <p class="animation-entry-card__text">${entry.subtitle}</p>
                  ${entry.context ? `<p class="animation-entry-card__context">${entry.context}</p>` : ""}
                  ${entry.relatedLinks?.length ? `
                    <div class="animation-entry-card__links">
                      ${entry.relatedLinks
                        .map(
                          (relatedLink) => `
                            <a class="button button--ghost" href="${relatedLink.href}" ${relatedLink.href.startsWith("#") ? "" : 'target="_blank" rel="noreferrer"'}>
                              ${relatedLink.label}
                            </a>
                          `
                        )
                        .join("")}
                    </div>
                  ` : ""}
                  <div class="animation-entry-card__actions">
                    ${entry.path
                      ? `<a class="button button--primary" href="#${entry.path}" data-link>${animationHub.entryButtons.internal}</a>`
                      : ""}
                    ${entry.externalUrl
                      ? `<a class="button button--ghost" href="${entry.externalUrl}" target="_blank" rel="noreferrer">${entry.externalLabel ?? animationHub.entryButtons.external}</a>`
                      : ""}
                  </div>
                </div>
              </article>
            `
          )
          .join("");

        if (typeof imageCleanup === "function") {
          imageCleanup();
          imageCleanup = null;
        }

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

        entriesNode.innerHTML = `
          <section class="animation-showcase">
            <div class="episode-list-panel animation-showcase__list-panel">
              <p class="section-kicker">${category.label}</p>

              <div class="episode-list animation-showcase__list" data-animation-showcase-list>
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
                          <span class="episode-card__thumb-placeholder animation-showcase-card__thumb-placeholder">${animationHub.imageLabel}</span>
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

            <div class="sagaz-player-panel animation-showcase__player-panel" data-animation-showcase-panel>
              <div class="animation-showcase__head">
                <p class="section-kicker">${initialEntry.typeLabel ?? animationHub.entryKicker}</p>
                ${initialEntry.externalUrl
                  ? `<a class="sagaz-browser__playlist-link animation-showcase__quick-link" href="${initialEntry.externalUrl}" target="_blank" rel="noreferrer">${initialEntry.externalLabel ?? animationHub.entryButtons.external}</a>`
                  : ""}
              </div>

              <div class="sagaz-player animation-showcase__player" data-animation-showcase-player>
                ${renderShowcasePlayer(initialEntry)}
              </div>
              <article class="sagaz-player__meta animation-showcase__meta">
                <p class="sagaz-player__episode-number" data-animation-showcase-type>${initialEntry.typeLabel ?? animationHub.entryKicker}</p>
                <h4 class="sagaz-player__episode-title animation-showcase__meta-title" data-animation-showcase-title>${initialEntry.title}</h4>
                <p class="sagaz-player__episode-summary animation-showcase__meta-text" data-animation-showcase-subtitle>${initialEntry.subtitle}</p>
                <p class="sagaz-player__episode-summary animation-showcase__meta-context" data-animation-showcase-context>${initialEntry.context ?? ""}</p>
                <div class="animation-showcase__actions" data-animation-showcase-actions>
                  ${initialEntry.relatedLinks?.length
                    ? initialEntry.relatedLinks
                        .map(
                          (relatedLink) => `
                            <a class="button button--ghost" href="${relatedLink.href}" ${relatedLink.href.startsWith("#") ? "" : 'target="_blank" rel="noreferrer"'}>
                              ${relatedLink.label}
                            </a>
                          `
                        )
                        .join("")
                    : ""}
                  ${initialEntry.externalUrl
                    ? `<a class="button button--primary" href="${initialEntry.externalUrl}" target="_blank" rel="noreferrer">${initialEntry.externalLabel ?? animationHub.entryButtons.external}</a>`
                    : ""}
                </div>
              </article>
            </div>
          </section>
        `;

        if (typeof imageCleanup === "function") {
          imageCleanup();
          imageCleanup = null;
        }

        if (typeof showcaseCleanup === "function") {
          showcaseCleanup();
          showcaseCleanup = null;
        }

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
        const playerNode = entriesNode.querySelector("[data-animation-showcase-player]");
        const panelNode = entriesNode.querySelector("[data-animation-showcase-panel]");
        const quickLinkNode = entriesNode.querySelector(".animation-showcase__quick-link");
        const typeNode = entriesNode.querySelector("[data-animation-showcase-type]");
        const showcaseTitleNode = entriesNode.querySelector("[data-animation-showcase-title]");
        const subtitleNode = entriesNode.querySelector("[data-animation-showcase-subtitle]");
        const contextNode = entriesNode.querySelector("[data-animation-showcase-context]");
        const actionsNode = entriesNode.querySelector("[data-animation-showcase-actions]");

        const updateShowcase = (entryTitle, { scrollToPlayer = false } = {}) => {
          const activeEntry = category.entries.find((entry) => entry.title === entryTitle) ?? initialEntry;

          cardNodes.forEach((cardNode) => {
            const isActive = cardNode.dataset.showcaseEntry === activeEntry.title;
            cardNode.classList.toggle("animation-showcase-card--active", isActive);
            cardNode.classList.toggle("episode-card--active", isActive);
          });

          playerNode.innerHTML = renderShowcasePlayer(activeEntry);
          if (quickLinkNode) {
            if (activeEntry.externalUrl) {
              quickLinkNode.href = activeEntry.externalUrl;
              quickLinkNode.textContent = activeEntry.externalLabel ?? animationHub.entryButtons.external;
              quickLinkNode.style.display = "";
            } else {
              quickLinkNode.style.display = "none";
            }
          }
          typeNode.textContent = activeEntry.typeLabel ?? animationHub.entryKicker;
          showcaseTitleNode.textContent = activeEntry.title;
          subtitleNode.textContent = activeEntry.subtitle;
          contextNode.textContent = activeEntry.context ?? "";
          actionsNode.innerHTML = `
            ${activeEntry.relatedLinks?.length
              ? activeEntry.relatedLinks
                  .map(
                    (relatedLink) => `
                      <a class="button button--ghost" href="${relatedLink.href}" ${relatedLink.href.startsWith("#") ? "" : 'target="_blank" rel="noreferrer"'}>
                        ${relatedLink.label}
                      </a>
                    `
                  )
                  .join("")
              : ""}
            ${activeEntry.externalUrl
              ? `<a class="button button--primary" href="${activeEntry.externalUrl}" target="_blank" rel="noreferrer">${activeEntry.externalLabel ?? animationHub.entryButtons.external}</a>`
              : ""}
          `;

          if (scrollToPlayer) {
            panelNode.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
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

      const centerAnimationTarget = (targetNode) => {
        if (!targetNode) {
          return;
        }

        // On laisse d'abord le routeur terminer son focus global sur #app,
        // puis on reprend la main pour centrer la vraie sous-section demandée.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            targetNode.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });
          });
        });
      };

      const updateFocus = (categoryId, { shouldCenter = false } = {}) => {
        const category = hubState.get(categoryId);

        if (!category) {
          return;
        }

        triggerNodes.forEach((triggerNode) => {
          const isActive = triggerNode.dataset.animationCategory === categoryId;
          triggerNode.classList.toggle("animation-focus__trigger--active", isActive);
          triggerNode.setAttribute("aria-expanded", isActive ? "true" : "false");
        });

        titleNode.textContent = category.title;
        descriptionNode.textContent = category.description;

        if (category.displayMode === "showcase") {
          renderShowcase(category);
          if (shouldCenter) {
            const focusTarget =
              entriesNode.querySelector(".animation-showcase") ??
              entriesNode.querySelector(".animation-showcase__player-panel") ??
              entriesNode;

            centerAnimationTarget(focusTarget);
          }
          return;
        }

        if (typeof showcaseCleanup === "function") {
          showcaseCleanup();
          showcaseCleanup = null;
        }

        renderEntries(category.entries);

        if (shouldCenter) {
          const focusTarget =
            entriesNode.querySelector(".animation-entry-card") ??
            entriesNode.querySelector(".animation-entry-empty") ??
            animationFocusNode;

          centerAnimationTarget(focusTarget);
        }
      };

      const handleTriggerClick = (event) => {
        const triggerNode = event.currentTarget;
        updateFocus(triggerNode.dataset.animationCategory, { shouldCenter: true });
      };

      triggerNodes.forEach((triggerNode) => {
        triggerNode.addEventListener("click", handleTriggerClick);
      });

      updateFocus(resolveAnimationCategoryId(requestedFocus, animationHub.categories), {
        shouldCenter: Boolean(requestedFocus)
      });

      cleanupAnimationHub = () => {
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
      if (typeof cleanupAnimationHub === "function") {
        cleanupAnimationHub();
        cleanupAnimationHub = null;
      }
    }
  };
};
