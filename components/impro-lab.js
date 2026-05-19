import { getImproLabContent, getLanguage } from "../data/site.js";

/**
 * Impro Labz.
 *
 * Composant autonome pour l'entrainement freestyle : il charge les banques de
 * mots, gere les beats, calcule la difficulte et nettoie ses listeners quand la
 * page Freestyle est demontee par le routeur.
 */
const IMPRO_WORD_FILES = {
  fr: "data/impro-fr-words.json",
  en: "data/impro-en-words.json"
};

const IMPRO_BEATS_FILE = "data/impro-beats.json";
const IMPRO_DEFAULT_SPEED = 3200;
const IMPRO_SPEED_MIN_DELAY = 1200;
const IMPRO_SPEED_MAX_DELAY = 5200;

const IMPRO_DIFFICULTY_CONFIG = {
  "1": {
    minSyllables: 2,
    maxSyllables: 4,
    weights: { easy: 5, medium: 1, hard: 0 },
    perSyllableDelay: 320
  },
  "2": {
    minSyllables: 2,
    maxSyllables: 6,
    weights: { easy: 2, medium: 3, hard: 1 },
    perSyllableDelay: 220
  },
  "3": {
    minSyllables: 4,
    maxSyllables: 12,
    weights: { easy: 1, medium: 2, hard: 5 },
    perSyllableDelay: 120
  }
};

const SPECIAL_SYLLABLES = {
  fr: {
    ntm: 3,
    iam: 3,
    atm: 3,
    kdd: 3,
    "dr-dre": 3,
    "dr-dree": 3,
    "dr-dreologie": 5
  },
  en: {
    "dr-dre": 3,
    "wu-tang-clan": 3
  }
};

const improState = {
  // Etat unique du module pour eviter de disperser timer, audio et options UI.
  difficulty: "2",
  speed: IMPRO_DEFAULT_SPEED,
  isRunning: false,
  currentWord: "",
  history: [],
  wordsByLanguage: {},
  beats: [],
  beatsLoaded: false,
  wordsLoaded: false,
  hasError: false,
  selectedBeatId: "",
  currentBeatId: "",
  randomBeat: true,
  repeatBeat: false,
  noInstru: false,
  timer: null,
  audioNode: null,
  persistentAudioNode: null,
  cleanup: null
};

const loadImproWords = async () => {
  if (improState.wordsLoaded) {
    return improState.wordsByLanguage;
  }

  const [frResponse, enResponse] = await Promise.all([
    fetch(IMPRO_WORD_FILES.fr),
    fetch(IMPRO_WORD_FILES.en)
  ]);

  const [frWords, enWords] = await Promise.all([frResponse.json(), enResponse.json()]);

  improState.wordsByLanguage = {
    fr: normalizeWordBank(frWords, "fr"),
    en: normalizeWordBank(enWords, "en")
  };
  improState.wordsLoaded = true;

  return improState.wordsByLanguage;
};

const loadImproBeats = async () => {
  if (improState.beatsLoaded) {
    return improState.beats;
  }

  const response = await fetch(IMPRO_BEATS_FILE);
  const payload = await response.json();
  improState.beats = Array.isArray(payload.beats) ? payload.beats : [];
  improState.beatsLoaded = true;

  if (!improState.selectedBeatId && improState.beats.length) {
    improState.selectedBeatId = improState.beats[0].id;
    improState.currentBeatId = improState.beats[0].id;
  }

  return improState.beats;
};

const normalizeWordBank = (bank, lang) => {
  const normalizeWords = (words) =>
    Array.isArray(words)
      ? words
          .map((word) => cleanWord(word))
          .filter((word) => word && countSyllables(word, lang) >= 2)
      : [];

  return {
    easy: normalizeWords(bank.easy),
    medium: normalizeWords(bank.medium),
    hard: normalizeWords(bank.hard)
  };
};

const cleanWord = (word) => {
  return String(word ?? "")
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z-]/g, "");
};

export const countSyllables = (word, lang) => {
  const normalizedWord = cleanWord(word);
  const specialCount = SPECIAL_SYLLABLES[lang]?.[normalizedWord];

  if (specialCount) {
    return specialCount;
  }

  const vowelGroups = normalizedWord.match(/[aeiouy]+/g);
  let count = vowelGroups ? vowelGroups.length : 0;

  if (lang === "en" && normalizedWord.endsWith("e") && count > 1) {
    count -= 1;
  }

  if (lang === "fr" && /e|es|ent$/.test(normalizedWord) && count > 1) {
    count -= 1;
  }

  return Math.max(count, 1);
};

const getDifficultyPools = (lang) => {
  const bank = improState.wordsByLanguage[lang] ?? improState.wordsByLanguage.fr;
  const config = IMPRO_DIFFICULTY_CONFIG[improState.difficulty] ?? IMPRO_DIFFICULTY_CONFIG["2"];
  const easy = bank.easy ?? [];
  const medium = bank.medium ?? [];
  const hard = bank.hard ?? [];

  const filterWords = (words) =>
    words.filter((word) => {
      const syllables = countSyllables(word, lang);
      return syllables >= config.minSyllables && syllables <= config.maxSyllables;
    });

  const weightedPool = [];
  const weightedSources = [
    { words: filterWords(easy), weight: config.weights.easy },
    { words: filterWords(medium), weight: config.weights.medium },
    { words: filterWords(hard), weight: config.weights.hard }
  ];

  weightedSources.forEach(({ words, weight }) => {
    for (let index = 0; index < weight; index += 1) {
      weightedPool.push(...words);
    }
  });

  if (weightedPool.length) {
    return weightedPool;
  }

  return [...easy, ...medium, ...hard];
};

const getRandomItem = (items, excludedValue = "") => {
  if (!items.length) {
    return "";
  }

  if (items.length === 1) {
    return items[0];
  }

  let nextItem = items[Math.floor(Math.random() * items.length)];

  while (nextItem === excludedValue) {
    nextItem = items[Math.floor(Math.random() * items.length)];
  }

  return nextItem;
};

const getNextWordDelay = (word, lang) => {
  const config = IMPRO_DIFFICULTY_CONFIG[improState.difficulty] ?? IMPRO_DIFFICULTY_CONFIG["2"];
  const syllables = countSyllables(word, lang);
  const extraDelay = Math.max(0, syllables - config.minSyllables) * config.perSyllableDelay;
  return improState.speed + extraDelay;
};

const drawNextWord = () => {
  const lang = getLanguage();
  const pool = getDifficultyPools(lang);

  if (!pool.length) {
    return;
  }

  const nextWord = getRandomItem(pool, improState.currentWord);
  improState.history = [improState.currentWord, ...improState.history].filter(Boolean).slice(0, 2);
  improState.currentWord = nextWord;
  syncImproLabUI();

  improState.timer = window.setTimeout(() => {
    if (!improState.isRunning) {
      return;
    }

    drawNextWord();
  }, getNextWordDelay(nextWord, lang));
};

const rescheduleCurrentWord = () => {
  if (!improState.isRunning || !improState.currentWord) {
    syncImproLabUI();
    return;
  }

  stopWordFlow();
  const lang = getLanguage();
  improState.timer = window.setTimeout(() => {
    if (!improState.isRunning) {
      return;
    }

    drawNextWord();
  }, getNextWordDelay(improState.currentWord, lang));
  syncImproLabUI();
};

const restartWordFlow = () => {
  if (!improState.isRunning) {
    syncImproLabUI();
    return;
  }

  stopWordFlow();
  drawNextWord();
};

const stopWordFlow = () => {
  if (improState.timer) {
    window.clearTimeout(improState.timer);
    improState.timer = null;
  }
};

const getSpeedLabel = () => {
  const content = getImproLabContent();

  if (improState.speed >= 3000) {
    return content.speedSlow;
  }

  if (improState.speed <= 1800) {
    return content.speedFast;
  }

  return content.speedMedium;
};

const sliderValueToDelay = (sliderValue) => {
  return IMPRO_SPEED_MAX_DELAY - Number(sliderValue) + IMPRO_SPEED_MIN_DELAY;
};

const delayToSliderValue = (delay) => {
  return IMPRO_SPEED_MAX_DELAY - Number(delay) + IMPRO_SPEED_MIN_DELAY;
};

const getBeatById = (beatId) => improState.beats.find((beat) => beat.id === beatId) ?? null;

const getBeatToPlay = () => {
  if (!improState.beats.length) {
    return null;
  }

  if (improState.randomBeat) {
    const nextBeat = getRandomItem(improState.beats, getBeatById(improState.currentBeatId));
    return typeof nextBeat === "string" ? null : nextBeat;
  }

  return getBeatById(improState.selectedBeatId) ?? improState.beats[0];
};

const resolveRandomBeat = (beats, excludedBeatId = "") => {
  if (!beats.length) {
    return null;
  }

  if (beats.length === 1) {
    return beats[0];
  }

  let nextBeat = beats[Math.floor(Math.random() * beats.length)];

  while (nextBeat.id === excludedBeatId) {
    nextBeat = beats[Math.floor(Math.random() * beats.length)];
  }

  return nextBeat;
};

const syncBeatSelection = (beat) => {
  if (!beat) {
    return;
  }

  improState.currentBeatId = beat.id;
  improState.selectedBeatId = beat.id;
};

const playBeat = async (beat) => {
  const audioNode = improState.audioNode;

  if (!audioNode || !beat || improState.noInstru) {
    return;
  }

  syncBeatSelection(beat);
  audioNode.loop = improState.repeatBeat;
  audioNode.src = encodeURI(beat.path);

  try {
    await audioNode.play();
  } catch {
    // Some browsers can block autoplay until the audio control is interacted with.
  }

  syncImproLabUI();
};

const handleBeatEnded = () => {
  if (improState.noInstru || improState.repeatBeat || !improState.audioNode) {
    return;
  }

  if (improState.randomBeat) {
    const randomBeat = resolveRandomBeat(improState.beats, improState.currentBeatId);
    if (randomBeat) {
      playBeat(randomBeat);
    }
    return;
  }

  const currentIndex = improState.beats.findIndex((beat) => beat.id === improState.currentBeatId);
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % improState.beats.length : 0;
  playBeat(improState.beats[nextIndex]);
};

const startImproSession = () => {
  stopWordFlow();
  improState.isRunning = true;

  if (!improState.noInstru && improState.beats.length) {
    const nextBeat = improState.randomBeat
      ? resolveRandomBeat(improState.beats, improState.currentBeatId)
      : getBeatById(improState.selectedBeatId) ?? improState.beats[0];

    if (nextBeat) {
      playBeat(nextBeat);
    }
  }

  drawNextWord();
};

const stopImproSession = () => {
  improState.isRunning = false;
  stopWordFlow();

  if (improState.audioNode) {
    improState.audioNode.pause();
  }

  syncImproLabUI();
};

const renderBeatOptions = () => {
  return improState.beats
    .map(
      (beat) => `
        <option value="${beat.id}" ${beat.id === improState.selectedBeatId ? "selected" : ""}>
          ${beat.title}
        </option>
      `
    )
    .join("");
};

const getImproAudioNode = () => {
  if (!improState.persistentAudioNode) {
    const audioNode = document.createElement("audio");
    audioNode.className = "impro-lab__audio";
    audioNode.controls = true;
    audioNode.preload = "none";
    audioNode.setAttribute("controlsList", "nodownload");
    improState.persistentAudioNode = audioNode;
  }

  return improState.persistentAudioNode;
};

export const renderImproLab = () => {
  const content = getImproLabContent();

  return `
    <section class="impro-lab" data-impro-lab>
      <div class="impro-lab__intro">
        <div>
          <p class="section-kicker">${content.kicker}</p>
          <h3 class="impro-lab__title">${content.title}</h3>
          <p class="section-text">${content.intro}</p>
        </div>
        <div class="impro-lab__status" data-impro-status>${content.loading}</div>
      </div>

      <section class="impro-lab__stage" data-impro-stage>
        <div class="impro-lab__topbar">
          <div class="impro-lab__language">${content.languageTitle} <span data-impro-language>${getLanguage().toUpperCase()}</span></div>
          <button class="button button--primary impro-lab__start impro-lab__start--top" type="button" data-impro-start>
            ${improState.isRunning ? content.stop : content.start}
          </button>
        </div>

        <div class="impro-lab__word-wrap">
          <p class="impro-lab__word-label">${content.currentWordLabel}</p>
          <div class="impro-lab__word" data-impro-word-box>
            <div data-impro-word>${content.pendingWord}</div>
            <div class="impro-lab__history" data-impro-history-wrap>
              <p class="impro-lab__history-title">${content.historyTitle}</p>
              <div class="impro-lab__history-list" data-impro-history>
                <span class="impro-lab__history-item impro-lab__history-item--empty">---</span>
                <span class="impro-lab__history-item impro-lab__history-item--empty">---</span>
              </div>
            </div>
          </div>
        </div>

        <div class="impro-lab__controls">
          <div class="impro-lab__difficulty">
            <p class="impro-lab__control-title">${content.difficultyTitle}</p>
            <div class="impro-lab__difficulty-buttons">
              ${Object.entries(content.difficulties)
                .map(
                  ([level, label]) => `
                    <button
                      class="impro-lab__difficulty-button ${improState.difficulty === level ? "impro-lab__difficulty-button--active" : ""}"
                      type="button"
                      data-impro-difficulty="${level}"
                      aria-pressed="${improState.difficulty === level ? "true" : "false"}"
                    >
                      <span class="impro-lab__difficulty-index">${level}</span>
                      <span>${label}</span>
                    </button>
                  `
                )
                .join("")}
            </div>
          </div>

          <div class="impro-lab__speed">
            <div class="impro-lab__speed-head">
              <p class="impro-lab__control-title">${content.speedTitle}</p>
              <span class="impro-lab__speed-value" data-impro-speed-label>${getSpeedLabel()}</span>
            </div>
            <input
              class="impro-lab__speed-slider"
              type="range"
              min="${IMPRO_SPEED_MIN_DELAY}"
              max="${IMPRO_SPEED_MAX_DELAY}"
              step="200"
              value="${delayToSliderValue(improState.speed)}"
              data-impro-speed
            >
          </div>
        </div>

        <div class="impro-lab__player" data-impro-player>
          <div class="impro-lab__player-head">
            <p class="impro-lab__control-title">${content.playlistTitle}</p>
            <label class="impro-lab__toggle">
              <input type="checkbox" data-impro-no-instru ${improState.noInstru ? "checked" : ""}>
              <span>${content.noInstru}</span>
            </label>
          </div>

          <div class="impro-lab__player-options">
            <label class="impro-lab__toggle">
              <input type="checkbox" data-impro-random ${improState.randomBeat ? "checked" : ""}>
              <span>${content.random}</span>
            </label>
            <label class="impro-lab__toggle">
              <input type="checkbox" data-impro-repeat ${improState.repeatBeat ? "checked" : ""}>
              <span>${content.repeat}</span>
            </label>
          </div>

          <select class="impro-lab__beat-select" data-impro-beat-select ${improState.noInstru ? "disabled" : ""}>
            ${renderBeatOptions()}
          </select>

          <div class="impro-lab__beat-meta" data-impro-beat-meta></div>
          <div data-impro-audio-slot></div>
        </div>
      </section>
    </section>
  `;
};

const syncImproLabUI = () => {
  const content = getImproLabContent();
  const wordNode = document.querySelector("[data-impro-word]");
  const historyNode = document.querySelector("[data-impro-history]");
  const statusNode = document.querySelector("[data-impro-status]");
  const startNode = document.querySelector("[data-impro-start]");
  const speedLabelNode = document.querySelector("[data-impro-speed-label]");
  const languageNode = document.querySelector("[data-impro-language]");
  const beatMetaNode = document.querySelector("[data-impro-beat-meta]");
  const beatSelectNode = document.querySelector("[data-impro-beat-select]");
  const randomNode = document.querySelector("[data-impro-random]");
  const repeatNode = document.querySelector("[data-impro-repeat]");
  const noInstruNode = document.querySelector("[data-impro-no-instru]");
  const audioNode = improState.audioNode;

  if (wordNode) {
    wordNode.textContent = improState.currentWord || content.pendingWord;
  }

  if (historyNode) {
    historyNode.innerHTML = improState.history.length
      ? improState.history
          .map((word) => `<span class="impro-lab__history-item">${word}</span>`)
          .join("")
      : `
          <span class="impro-lab__history-item impro-lab__history-item--empty">---</span>
          <span class="impro-lab__history-item impro-lab__history-item--empty">---</span>
        `;
  }

  if (statusNode) {
    statusNode.textContent = improState.hasError
      ? content.error
      : improState.wordsLoaded
        ? content.ready
        : content.loading;
  }

  if (startNode) {
    startNode.textContent = improState.isRunning ? content.stop : content.start;
  }

  if (speedLabelNode) {
    speedLabelNode.textContent = getSpeedLabel();
  }

  if (languageNode) {
    languageNode.textContent = getLanguage().toUpperCase();
  }

  if (beatSelectNode) {
    beatSelectNode.innerHTML = renderBeatOptions();
    beatSelectNode.value = improState.selectedBeatId;
    beatSelectNode.disabled = improState.noInstru;
  }

  if (randomNode) {
    randomNode.checked = improState.randomBeat;
  }

  if (repeatNode) {
    repeatNode.checked = improState.repeatBeat;
  }

  if (noInstruNode) {
    noInstruNode.checked = improState.noInstru;
  }

  if (audioNode) {
    audioNode.loop = improState.repeatBeat;
    audioNode.muted = improState.noInstru;

    if (improState.noInstru) {
      audioNode.pause();
    }
  }

  if (beatMetaNode) {
    const activeBeat = getBeatById(improState.selectedBeatId) ?? improState.beats[0];
    beatMetaNode.innerHTML = activeBeat
      ? `
          <span><strong>${content.beatLabel}</strong> ${activeBeat.title}</span>
        `
      : "";
  }

  document.querySelectorAll("[data-impro-difficulty]").forEach((buttonNode) => {
    const isActive = buttonNode.dataset.improDifficulty === improState.difficulty;
    buttonNode.classList.toggle("impro-lab__difficulty-button--active", isActive);
    buttonNode.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

};

export const mountImproLab = async () => {
  try {
    await Promise.all([loadImproWords(), loadImproBeats()]);
    improState.hasError = false;
  } catch {
    improState.hasError = true;
  }

  improState.audioNode = getImproAudioNode();
  const audioSlotNode = document.querySelector("[data-impro-audio-slot]");
  if (audioSlotNode && improState.audioNode.parentElement !== audioSlotNode) {
    audioSlotNode.appendChild(improState.audioNode);
  }
  syncImproLabUI();

  const startNode = document.querySelector("[data-impro-start]");
  const speedNode = document.querySelector("[data-impro-speed]");
  const beatSelectNode = document.querySelector("[data-impro-beat-select]");
  const randomNode = document.querySelector("[data-impro-random]");
  const repeatNode = document.querySelector("[data-impro-repeat]");
  const noInstruNode = document.querySelector("[data-impro-no-instru]");
  const getDifficultyNodes = () => Array.from(document.querySelectorAll("[data-impro-difficulty]"));

  const handleStartClick = () => {
    if (improState.hasError) {
      return;
    }

    if (improState.isRunning) {
      stopImproSession();
      return;
    }

    startImproSession();
  };

  const handleSpeedInput = (event) => {
    improState.speed = sliderValueToDelay(event.currentTarget.value);
    rescheduleCurrentWord();
  };

  const handleBeatChange = (event) => {
    const beatId = event.currentTarget.value;
    if (!beatId) {
      return;
    }

    improState.randomBeat = false;
    improState.selectedBeatId = beatId;
    improState.currentBeatId = beatId;
    const nextBeat = getBeatById(improState.selectedBeatId);

    if (improState.audioNode && nextBeat && !improState.noInstru) {
      improState.audioNode.src = encodeURI(nextBeat.path);

      if (improState.isRunning || !improState.audioNode.paused) {
        playBeat(nextBeat);
      }
    }

    syncImproLabUI();
  };

  const handleRandomChange = (event) => {
    improState.randomBeat = event.currentTarget.checked;
    syncImproLabUI();
  };

  const handleRepeatChange = (event) => {
    improState.repeatBeat = event.currentTarget.checked;
    syncImproLabUI();
  };

  const handleNoInstruChange = (event) => {
    improState.noInstru = event.currentTarget.checked;

    if (!improState.noInstru && improState.isRunning) {
      const activeBeat = getBeatById(improState.selectedBeatId) ?? improState.beats[0];
      if (activeBeat) {
        playBeat(activeBeat);
      }
    }

    syncImproLabUI();
  };

  const handleDifficultyClick = (event) => {
    improState.difficulty = event.currentTarget.dataset.improDifficulty;
    restartWordFlow();
  };

  startNode?.addEventListener("click", handleStartClick);
  speedNode?.addEventListener("input", handleSpeedInput);
  beatSelectNode?.addEventListener("change", handleBeatChange);
  randomNode?.addEventListener("change", handleRandomChange);
  repeatNode?.addEventListener("change", handleRepeatChange);
  noInstruNode?.addEventListener("change", handleNoInstruChange);
  getDifficultyNodes().forEach((buttonNode) => buttonNode.addEventListener("click", handleDifficultyClick));
  improState.audioNode?.removeEventListener("ended", handleBeatEnded);
  improState.audioNode?.addEventListener("ended", handleBeatEnded);

  if (improState.isRunning) {
    restartWordFlow();
  } else if (improState.audioNode) {
    const activeBeat = getBeatById(improState.selectedBeatId);
    if (activeBeat && !improState.noInstru) {
      if (!improState.audioNode.src) {
        improState.audioNode.src = encodeURI(activeBeat.path);
      }
    }
  }

  improState.cleanup = () => {
    stopWordFlow();
    startNode?.removeEventListener("click", handleStartClick);
    speedNode?.removeEventListener("input", handleSpeedInput);
    beatSelectNode?.removeEventListener("change", handleBeatChange);
    randomNode?.removeEventListener("change", handleRandomChange);
    repeatNode?.removeEventListener("change", handleRepeatChange);
    noInstruNode?.removeEventListener("change", handleNoInstruChange);
    getDifficultyNodes().forEach((buttonNode) => buttonNode.removeEventListener("click", handleDifficultyClick));
    improState.audioNode?.removeEventListener("ended", handleBeatEnded);
  };
};

export const unmountImproLab = () => {
  if (typeof improState.cleanup === "function") {
    improState.cleanup();
    improState.cleanup = null;
  }
};
