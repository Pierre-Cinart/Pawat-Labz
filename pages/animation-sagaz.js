import { renderButtonLink } from "../components/ui/button.js";
import { getAnimationSeries } from "../data/site.js";

/**
 * Page detaillee SagaZ ZZZ.
 *
 * Elle isole le lecteur, la liste d'episodes et les metadonnees de la serie pour
 * eviter d'alourdir le hub Animation principal.
 */
const getEpisodeMetaLabel = (sagaz, season, episode) =>
  `${sagaz.seasonLabel.toUpperCase()} ${season.label.replace(/[^0-9]/g, "") || season.label} / ${sagaz.episodeLabel.slice(0, -1).toUpperCase()} ${episode.number}`;

const renderEpisodeList = (sagaz, season, episodes, activeEpisodeId) =>
  episodes
    .map(
      (episode) => `
        <button
          class="episode-card ${episode.id === activeEpisodeId ? "episode-card--active" : ""}"
          type="button"
          data-episode-id="${episode.id}"
        >
          <span class="episode-card__thumb">
            <img class="episode-card__thumb-image" src="${episode.thumbnail}" alt="${episode.thumbnailAlt}" loading="lazy">
            <span class="episode-card__thumb-placeholder">${episode.number}</span>
          </span>
          <span class="episode-card__body">
            <span class="episode-card__meta-label">${getEpisodeMetaLabel(sagaz, season, episode)}</span>
            <span class="episode-card__title">${episode.title}</span>
            <span class="episode-card__summary">${episode.summary}</span>
          </span>
        </button>
      `
    )
    .join("");

const renderPlayer = (sagaz, episode) => {
  if (!episode.youtubeId) {
    return `
      <div class="sagaz-player__placeholder">
        <p class="sagaz-player__placeholder-title">${sagaz.placeholderTitle}</p>
        <p>${sagaz.placeholderText}</p>
        <a class="button button--ghost" href="${sagaz.playlistUrl}" target="_blank" rel="noreferrer">
          ${sagaz.playlistButtonLabel}
        </a>
      </div>
    `;
  }

  return `
    <div class="sagaz-player__frame">
      <iframe
        src="https://www.youtube.com/embed/${episode.youtubeId}"
        title="${episode.title}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  `;
};

const getYoutubeWatchUrl = (episode) => `https://www.youtube.com/watch?v=${episode.youtubeId}`;

export const renderSagaZPage = () => {
  const sagaz = getAnimationSeries("sagaz");
  const initialSeason = sagaz.seasons[0];
  const initialEpisode = initialSeason.episodes[0];
  let cleanupSagaZPage = null;

  return {
    html: `
      <section class="page">
        <div class="sagaz-hero">
          <div class="sagaz-hero__media">
            <img class="sagaz-hero__image" src="${sagaz.coverImage}" alt="${sagaz.coverAlt}" loading="lazy">
            <div class="sagaz-hero__image-placeholder">
              <p>Illustration SagaZ zzz</p>
              <small>${sagaz.coverHint}</small>
            </div>
          </div>

          <div class="sagaz-hero__copy">
            <p class="section-kicker">${sagaz.kicker}</p>
            <h2 class="section-title">${sagaz.title}</h2>
            <p class="sagaz-hero__subtitle">${sagaz.subtitle}</p>
            <p class="section-text">${sagaz.description}</p>

            <div class="hero-actions">
              ${renderButtonLink({ href: "#/animation", label: sagaz.backLabel, variant: "ghost" })}
            </div>
          </div>
        </div>

        <section class="sagaz-browser">
          <div class="sagaz-browser__head">
            <div>
              <p class="section-kicker">${sagaz.seasonLabel}</p>
              <div class="season-switcher">
                ${sagaz.seasons
                  .map(
                    (season, index) => `
                      <button
                        class="season-switcher__button ${index === 0 ? "season-switcher__button--active" : ""}"
                        type="button"
                        data-season-id="${season.id}"
                      >
                        ${season.label}
                      </button>
                    `
                  )
                  .join("")}
              </div>
            </div>

            <div class="sagaz-browser__player-label">
              <p class="section-kicker">${sagaz.playerLabel}</p>
              <a class="sagaz-browser__playlist-link" href="${sagaz.playlistUrl}" target="_blank" rel="noreferrer">
                ${sagaz.playlistButtonLabel}
              </a>
            </div>
          </div>

          <div class="sagaz-browser__grid">
            <div class="episode-list-panel">
              <p class="section-kicker">${sagaz.episodeLabel}</p>
              <div class="episode-list" data-episode-list>
                ${renderEpisodeList(sagaz, initialSeason, initialSeason.episodes, initialEpisode.id)}
              </div>
            </div>

            <div class="sagaz-player-panel">
              <div class="sagaz-player" data-episode-player>
                ${renderPlayer(sagaz, initialEpisode)}
              </div>

              <article class="sagaz-player__meta">
                <p class="sagaz-player__episode-number" data-current-episode-number>${getEpisodeMetaLabel(sagaz, initialSeason, initialEpisode)}</p>
                <h3 class="sagaz-player__episode-title" data-current-episode-name>${initialEpisode.title}</h3>
                <p class="sagaz-player__episode-summary" data-current-episode-summary>${initialEpisode.summary}</p>
                <div class="sagaz-player__actions" data-current-episode-actions>
                  <a class="button button--ghost" href="${getYoutubeWatchUrl(initialEpisode)}" target="_blank" rel="noreferrer">
                    ${sagaz.watchOnYoutubeLabel}
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </section>
    `,
    onMount: () => {
      const seasons = sagaz.seasons;
      const seasonButtons = Array.from(document.querySelectorAll("[data-season-id]"));
      const episodeListNode = document.querySelector("[data-episode-list]");
      const playerNode = document.querySelector("[data-episode-player]");
      const currentEpisodeNumberNode = document.querySelector("[data-current-episode-number]");
      const currentEpisodeNameNode = document.querySelector("[data-current-episode-name]");
      const currentEpisodeSummaryNode = document.querySelector("[data-current-episode-summary]");
      const currentEpisodeActionsNode = document.querySelector("[data-current-episode-actions]");
      const playerPanelNode = document.querySelector(".sagaz-player-panel");
      const heroImageNode = document.querySelector(".sagaz-hero__image");
      const heroPlaceholderNode = document.querySelector(".sagaz-hero__image-placeholder");

      let activeSeason = initialSeason;
      let episodeCleanup = null;
      let heroImageCleanup = null;
      let thumbnailCleanup = null;

      const getSeasonById = (seasonId) => seasons.find((season) => season.id === seasonId) ?? seasons[0];
      const getEpisodeById = (episodes, episodeId) => episodes.find((episode) => episode.id === episodeId) ?? episodes[0];

      const updateEpisodeMeta = (episode, { focusPlayer = false } = {}) => {
        currentEpisodeNumberNode.textContent = getEpisodeMetaLabel(sagaz, activeSeason, episode);
        currentEpisodeNameNode.textContent = episode.title;
        currentEpisodeSummaryNode.textContent = episode.summary;
        playerNode.innerHTML = renderPlayer(sagaz, episode);
        currentEpisodeActionsNode.innerHTML = `
          <a class="button button--ghost" href="${getYoutubeWatchUrl(episode)}" target="_blank" rel="noreferrer">
            ${sagaz.watchOnYoutubeLabel}
          </a>
        `;

        if (focusPlayer) {
          playerPanelNode.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      };

      const bindEpisodeButtons = (episodes) => {
        if (typeof episodeCleanup === "function") {
          episodeCleanup();
          episodeCleanup = null;
        }

        if (typeof thumbnailCleanup === "function") {
          thumbnailCleanup();
          thumbnailCleanup = null;
        }

        const episodeButtons = Array.from(document.querySelectorAll("[data-episode-id]"));
        const thumbImages = Array.from(document.querySelectorAll(".episode-card__thumb-image"));

        const handleEpisodeClick = (event) => {
          const clickedEpisodeId = event.currentTarget.dataset.episodeId;
          const nextEpisode = getEpisodeById(episodes, clickedEpisodeId);

          episodeButtons.forEach((button) => {
            button.classList.toggle("episode-card--active", button.dataset.episodeId === nextEpisode.id);
          });

          updateEpisodeMeta(nextEpisode, { focusPlayer: true });
        };

        episodeButtons.forEach((button) => {
          button.addEventListener("click", handleEpisodeClick);
        });

        const removeThumbListeners = [];

        thumbImages.forEach((imageNode) => {
          const placeholderNode = imageNode.parentElement?.querySelector(".episode-card__thumb-placeholder");

          const handleLoad = () => {
            imageNode.classList.add("episode-card__thumb-image--ready");
            placeholderNode?.classList.add("episode-card__thumb-placeholder--hidden");
          };

          const handleError = () => {
            imageNode.classList.remove("episode-card__thumb-image--ready");
            placeholderNode?.classList.remove("episode-card__thumb-placeholder--hidden");
          };

          imageNode.addEventListener("load", handleLoad);
          imageNode.addEventListener("error", handleError);

          if (imageNode.complete && imageNode.naturalWidth > 0) {
            handleLoad();
          }

          removeThumbListeners.push(() => {
            imageNode.removeEventListener("load", handleLoad);
            imageNode.removeEventListener("error", handleError);
          });
        });

        episodeCleanup = () => {
          episodeButtons.forEach((button) => {
            button.removeEventListener("click", handleEpisodeClick);
          });
        };

        thumbnailCleanup = () => {
          removeThumbListeners.forEach((removeListener) => removeListener());
        };
      };

      const renderSeason = (seasonId) => {
        const season = getSeasonById(seasonId);
        const episode = getEpisodeById(season.episodes, season.episodes[0]?.id);
        activeSeason = season;

        seasonButtons.forEach((button) => {
          button.classList.toggle("season-switcher__button--active", button.dataset.seasonId === season.id);
        });

        episodeListNode.innerHTML = renderEpisodeList(sagaz, season, season.episodes, episode.id);
        updateEpisodeMeta(episode);
        bindEpisodeButtons(season.episodes);
      };

      const handleSeasonClick = (event) => {
        renderSeason(event.currentTarget.dataset.seasonId);
      };

      seasonButtons.forEach((button) => {
        button.addEventListener("click", handleSeasonClick);
      });

      bindEpisodeButtons(initialSeason.episodes);

      const handleHeroImageLoad = () => {
        heroImageNode.classList.add("sagaz-hero__image--ready");
        heroPlaceholderNode?.classList.add("sagaz-hero__image-placeholder--hidden");
      };

      const handleHeroImageError = () => {
        heroImageNode.classList.remove("sagaz-hero__image--ready");
        heroPlaceholderNode?.classList.remove("sagaz-hero__image-placeholder--hidden");
      };

      heroImageNode?.addEventListener("load", handleHeroImageLoad);
      heroImageNode?.addEventListener("error", handleHeroImageError);

      if (heroImageNode?.complete && heroImageNode.naturalWidth > 0) {
        handleHeroImageLoad();
      }

      heroImageCleanup = () => {
        heroImageNode?.removeEventListener("load", handleHeroImageLoad);
        heroImageNode?.removeEventListener("error", handleHeroImageError);
      };

      cleanupSagaZPage = () => {
        seasonButtons.forEach((button) => {
          button.removeEventListener("click", handleSeasonClick);
        });

        if (typeof episodeCleanup === "function") {
          episodeCleanup();
        }

        if (typeof heroImageCleanup === "function") {
          heroImageCleanup();
          heroImageCleanup = null;
        }

        if (typeof thumbnailCleanup === "function") {
          thumbnailCleanup();
          thumbnailCleanup = null;
        }
      };
    },
    onUnmount: () => {
      if (typeof cleanupSagaZPage === "function") {
        cleanupSagaZPage();
        cleanupSagaZPage = null;
      }
    }
  };
};
