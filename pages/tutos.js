import { renderPanel } from "../components/ui/panel.js";
import { getPageContent, getTutorialHub } from "../data/site.js";

// La page Tutos manipule une liste de sous-rubriques cliquables et un lecteur
// detaille a droite. On centralise donc les topics pour faciliter le rendu
// initial, l'activation au clic et le nettoyage des listeners.
const getAllTopics = (sections) => sections.flatMap((section) => section.topics);

const renderTopicButton = (topic, tutorialHub, activeTopicId) => `
  <button
    class="tutorial-topic ${topic.available ? "" : "tutorial-topic--disabled"} ${activeTopicId === topic.id ? "tutorial-topic--active" : ""}"
    type="button"
    data-tutorial-topic="${topic.id}"
    ${topic.available ? "" : "disabled"}
    aria-pressed="${activeTopicId === topic.id ? "true" : "false"}"
  >
    <div class="tutorial-topic__media">
      ${topic.image ? `<img class="tutorial-topic__image" src="${topic.image}" alt="${topic.imageAlt ?? topic.label}" loading="lazy">` : ""}
      <div class="tutorial-topic__placeholder">
        <span>${tutorialHub.imageLabel}</span>
      </div>
    </div>

    <div class="tutorial-topic__content">
      <div class="tutorial-topic__head">
        <h4 class="tutorial-topic__title">${topic.label}</h4>
        <span class="tutorial-topic__status">${topic.status}</span>
      </div>
      <p class="tutorial-topic__text">${topic.description}</p>
      <span class="tutorial-topic__cta">${topic.available ? tutorialHub.openLabel : tutorialHub.inactiveLabel}</span>
    </div>
  </button>
`;

const renderTutorialSection = (section, tutorialHub, activeTopicId) => `
  <article class="tutorial-group">
    <div class="tutorial-group__head">
      <div>
        <p class="tutorial-group__label">${tutorialHub.sectionLabel}</p>
        <h3 class="tutorial-group__title">${section.label}</h3>
      </div>
      <span class="tutorial-group__count">${section.topics.length}</span>
    </div>

    <p class="tutorial-group__subtitle">${section.title}</p>
    <p class="tutorial-group__description">${section.description}</p>
    <p class="tutorial-group__topics-label">${tutorialHub.subtopicsLabel}</p>

    <div class="tutorial-group__topics">
      ${section.topics.map((topic) => renderTopicButton(topic, tutorialHub, activeTopicId)).join("")}
    </div>
  </article>
`;

const renderReaderEmptyState = (tutorialHub) => `
  <article class="tutorial-reader tutorial-reader--empty">
    <p class="section-kicker">${tutorialHub.detailLabel}</p>
    <h3 class="tutorial-reader__title">${tutorialHub.placeholderTitle}</h3>
    <p class="tutorial-reader__summary">${tutorialHub.placeholderText}</p>
  </article>
`;

const renderReaderTopic = (topic, tutorialHub) => `
  <article class="tutorial-reader">
    <div class="tutorial-reader__hero">
      <div class="tutorial-reader__hero-copy">
        <p class="section-kicker">${topic.detail.kicker}</p>
        <h3 class="tutorial-reader__title">${topic.detail.title}</h3>
        <p class="tutorial-reader__summary">${topic.detail.summary}</p>
      </div>
      <span class="tutorial-reader__badge">${tutorialHub.detailLabel}</span>
    </div>

    <section class="tutorial-reader__section">
      <h4 class="tutorial-reader__section-title">${topic.detail.presentationTitle}</h4>
      <div class="tutorial-reader__paragraphs">
        ${topic.detail.presentation.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
    </section>

    <section class="tutorial-reader__section">
      <h4 class="tutorial-reader__section-title">${topic.detail.creditsTitle}</h4>
      <div class="tutorial-reader__paragraphs">
        ${topic.detail.credits.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
    </section>

    <section class="tutorial-reader__section">
      <h4 class="tutorial-reader__section-title">${topic.detail.installTitle}</h4>
      <div class="tutorial-reader__paragraphs">
        ${topic.detail.installIntro.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
      <div class="tutorial-reader__steps">
        ${topic.detail.steps
          .map(
            (step) => `
              <article class="tutorial-reader__step">
                <h5 class="tutorial-reader__step-title">${step.title}</h5>
                <p>${step.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <div class="tutorial-reader__grid">
      <section class="tutorial-reader__section">
        <h4 class="tutorial-reader__section-title">${topic.detail.localPathLabel}</h4>
        <p class="tutorial-reader__path">${topic.detail.localPath}</p>
      </section>

      <section class="tutorial-reader__section">
        <h4 class="tutorial-reader__section-title">${tutorialHub.resourcesTitle}</h4>
        <div class="tutorial-reader__links">
          ${topic.detail.resources
            .map(
              (resource) => `
                <a class="button button--ghost" href="${resource.url}" target="_blank" rel="noreferrer">
                  ${resource.label}
                </a>
              `
            )
            .join("")}
        </div>
      </section>
    </div>

    <section class="tutorial-reader__section">
      <h4 class="tutorial-reader__section-title">${tutorialHub.projectTreeTitle}</h4>
      <pre class="tutorial-reader__code"><code>${topic.detail.projectTree}</code></pre>
    </section>

    <section class="tutorial-reader__section">
      <h4 class="tutorial-reader__section-title">${topic.detail.closingTitle}</h4>
      <div class="tutorial-reader__paragraphs">
        ${topic.detail.closing.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
    </section>
  </article>
`;

export const renderTutosPage = () => {
  const tutosContent = getPageContent("tutos");
  const tutorialHub = getTutorialHub();
  let cleanupTutorialHub = null;

  return {
    html: `
      <section class="page">
        ${renderPanel({
          kicker: tutosContent.kicker,
          title: tutosContent.title,
          text: tutosContent.text,
          tone: "cyan",
          badge: tutosContent.badge
        })}

        <section class="tutorial-hub">
          <div class="tutorial-hub__intro">
            <p class="section-kicker">${tutorialHub.introLabel}</p>
            <h2 class="tutorial-hub__title">${tutorialHub.introTitle}</h2>
            <p class="section-text">${tutorialHub.introText}</p>
          </div>

          <div class="tutorial-hub__layout">
            <div class="tutorial-shelf" data-tutorial-shelf>
              ${tutorialHub.sections
                .map((section) => renderTutorialSection(section, tutorialHub, ""))
                .join("")}
            </div>

            <div class="tutorial-reader-wrap" data-tutorial-reader>
              ${renderReaderEmptyState(tutorialHub)}
            </div>
          </div>
        </section>
      </section>
    `,
    onMount: () => {
      // Seuls les tutos actives sont enregistrés dans la map car le panneau
      // detaille ne doit jamais s'ouvrir pour une fiche encore inactive.
      const topicRegistry = new Map(
        getAllTopics(tutorialHub.sections)
          .filter((topic) => topic.available)
          .map((topic) => [topic.id, topic])
      );
      const shelfNode = document.querySelector("[data-tutorial-shelf]");
      const readerNode = document.querySelector("[data-tutorial-reader]");
      let imageCleanup = null;

      const wireTopicImages = () => {
        if (typeof imageCleanup === "function") {
          imageCleanup();
          imageCleanup = null;
        }

        const imageNodes = Array.from(shelfNode?.querySelectorAll(".tutorial-topic__image") ?? []);
        const removeListeners = [];

        imageNodes.forEach((imageNode) => {
          const mediaNode = imageNode.closest(".tutorial-topic__media");
          const placeholderNode = mediaNode?.querySelector(".tutorial-topic__placeholder");

          // On garde toujours le src dans le DOM pour que le chemin de l'image
          // reste visible et remplaçable facilement meme si le fichier n'existe
          // pas encore pendant la phase de maquettage.
          const handleLoad = () => {
            imageNode.classList.add("tutorial-topic__image--ready");
            placeholderNode?.classList.add("tutorial-topic__placeholder--hidden");
          };

          const handleError = () => {
            imageNode.classList.remove("tutorial-topic__image--ready");
            placeholderNode?.classList.remove("tutorial-topic__placeholder--hidden");
          };

          if (imageNode.complete && imageNode.naturalWidth > 0) {
            handleLoad();
          } else {
            imageNode.addEventListener("load", handleLoad);
            imageNode.addEventListener("error", handleError);
            removeListeners.push(() => {
              imageNode.removeEventListener("load", handleLoad);
              imageNode.removeEventListener("error", handleError);
            });
          }
        });

        imageCleanup = () => removeListeners.forEach((removeListener) => removeListener());
      };

      const setActiveTopic = (topicId) => {
        const activeTopic = topicRegistry.get(topicId) ?? null;

        shelfNode?.querySelectorAll("[data-tutorial-topic]").forEach((buttonNode) => {
          const isActive = buttonNode.getAttribute("data-tutorial-topic") === activeTopic?.id;
          buttonNode.classList.toggle("tutorial-topic--active", isActive);
          buttonNode.setAttribute("aria-pressed", String(isActive));
        });

        // Le lecteur demarre volontairement vide et ne se remplit qu'apres un clic.
        readerNode.innerHTML = activeTopic ? renderReaderTopic(activeTopic, tutorialHub) : renderReaderEmptyState(tutorialHub);
      };

      const handleShelfClick = (event) => {
        const trigger = event.target.closest("[data-tutorial-topic]");

        if (!trigger || trigger.hasAttribute("disabled")) {
          return;
        }

        setActiveTopic(trigger.getAttribute("data-tutorial-topic"));
      };

      shelfNode?.addEventListener("click", handleShelfClick);
      wireTopicImages();

      cleanupTutorialHub = () => {
        shelfNode?.removeEventListener("click", handleShelfClick);

        if (typeof imageCleanup === "function") {
          imageCleanup();
          imageCleanup = null;
        }
      };
    },
    onUnmount: () => {
      if (typeof cleanupTutorialHub === "function") {
        cleanupTutorialHub();
        cleanupTutorialHub = null;
      }
    }
  };
};
