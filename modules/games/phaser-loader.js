const PHASER_VERSION = "3.90.0";
const PHASER_SRC = `assets/vendors/phaser/${PHASER_VERSION}/phaser.min.js`;
const PHASER_SCRIPT_SELECTOR = `script[data-phaser-version="${PHASER_VERSION}"]`;

let phaserLoadPromise = null;

/**
 * Charge Phaser une seule fois depuis la copie locale du projet.
 * Les futures pages jeux pourront appeler ce loader sans se soucier
 * d'injecter plusieurs fois le meme script.
 */
export const loadPhaser = () => {
  if (window.Phaser) {
    return Promise.resolve(window.Phaser);
  }

  if (phaserLoadPromise) {
    return phaserLoadPromise;
  }

  phaserLoadPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector(PHASER_SCRIPT_SELECTOR);

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(window.Phaser), { once: true });
      existingScript.addEventListener("error", () => reject(new Error("Phaser local script failed to load.")), {
        once: true
      });
      return;
    }

    const script = document.createElement("script");
    script.src = PHASER_SRC;
    script.async = true;
    script.dataset.phaserVersion = PHASER_VERSION;

    script.addEventListener(
      "load",
      () => {
        if (!window.Phaser) {
          reject(new Error("Phaser loaded but window.Phaser is unavailable."));
          return;
        }

        resolve(window.Phaser);
      },
      { once: true }
    );

    script.addEventListener(
      "error",
      () => {
        phaserLoadPromise = null;
        reject(new Error(`Unable to load local Phaser build from ${PHASER_SRC}.`));
      },
      { once: true }
    );

    document.head.appendChild(script);
  });

  return phaserLoadPromise;
};

export const getLocalPhaserSource = () => PHASER_SRC;
