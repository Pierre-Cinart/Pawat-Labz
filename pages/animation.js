import { renderPanel } from "../components/ui/panel.js";
import { getAnimationHub, getPageContent } from "../data/site.js";

export const renderAnimationPage = () => {
  const animationContent = getPageContent("animation");
  const animationHub = getAnimationHub();
  const initialCategory = animationHub.categories[0];
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
                        <a class="animation-entry-card" href="#${entry.path}" data-link>
                          <div class="animation-entry-card__media">
                            <img class="animation-entry-card__image" src="${entry.image}" alt="${entry.imageAlt}" loading="lazy">
                            <div class="animation-entry-card__media-placeholder">
                              <span>${animationHub.imageLabel}</span>
                            </div>
                          </div>
                          <div class="animation-entry-card__content">
                            <p class="animation-entry-card__kicker">${animationHub.entryKicker}</p>
                            <h4 class="animation-entry-card__title">${entry.title}</h4>
                            <p class="animation-entry-card__text">${entry.subtitle}</p>
                          </div>
                        </a>
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
      const triggerNodes = Array.from(document.querySelectorAll("[data-animation-category]"));
      const titleNode = document.querySelector("[data-animation-focus-title]");
      const descriptionNode = document.querySelector("[data-animation-focus-description]");
      const entriesNode = document.querySelector("[data-animation-focus-entries]");
      let imageCleanup = null;

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
              <a class="animation-entry-card" href="#${entry.path}" data-link>
                <div class="animation-entry-card__media">
                  <img class="animation-entry-card__image" src="${entry.image}" alt="${entry.imageAlt}" loading="lazy">
                  <div class="animation-entry-card__media-placeholder">
                    <span>${animationHub.imageLabel}</span>
                  </div>
                </div>
                <div class="animation-entry-card__content">
                  <p class="animation-entry-card__kicker">${animationHub.entryKicker}</p>
                  <h4 class="animation-entry-card__title">${entry.title}</h4>
                  <p class="animation-entry-card__text">${entry.subtitle}</p>
                </div>
              </a>
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

      const updateFocus = (categoryId) => {
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
        renderEntries(category.entries);
      };

      const handleTriggerClick = (event) => {
        const triggerNode = event.currentTarget;
        updateFocus(triggerNode.dataset.animationCategory);
      };

      triggerNodes.forEach((triggerNode) => {
        triggerNode.addEventListener("click", handleTriggerClick);
      });

      updateFocus(initialCategory.id);

      cleanupAnimationHub = () => {
        triggerNodes.forEach((triggerNode) => {
          triggerNode.removeEventListener("click", handleTriggerClick);
        });

        if (typeof imageCleanup === "function") {
          imageCleanup();
          imageCleanup = null;
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
