export const LANGUAGE_STORAGE_KEY = "pawat-labz-language";
export const SUPPORTED_LANGUAGES = ["fr", "en"];
export const SITE_BASE_URL = "https://pierre-cinart.github.io/Pawat-Labz/";

const resolveAbsoluteUrl = (value) => {
  if (!value) {
    return SITE_BASE_URL;
  }

  try {
    return new URL(value, SITE_BASE_URL).toString();
  } catch {
    return value;
  }
};

const upsertMeta = (selector, attributes) => {
  let metaNode = document.head.querySelector(selector);

  if (!metaNode) {
    metaNode = document.createElement("meta");
    document.head.appendChild(metaNode);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    metaNode.setAttribute(name, value);
  });
};

export const updateHead = (routeMeta) => {
  if (typeof document === "undefined" || !routeMeta) {
    return;
  }

  const imageUrl = resolveAbsoluteUrl(routeMeta.image);
  const pageUrl = resolveAbsoluteUrl(routeMeta.url);

  document.title = routeMeta.title;
  upsertMeta('meta[name="description"]', { name: "description", content: routeMeta.description });
  upsertMeta('meta[property="og:title"]', { property: "og:title", content: routeMeta.title });
  upsertMeta('meta[property="og:description"]', { property: "og:description", content: routeMeta.description });
  upsertMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl });
  upsertMeta('meta[property="og:url"]', { property: "og:url", content: pageUrl });
  upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
  upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
  upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: routeMeta.title });
  upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: routeMeta.description });
  upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });
};

export const siteMetaContent = {
  fr: {
    siteMeta: {
          version: "v0.1.0",
          eyebrow: "LABORATOIRE CRÉATIF VIVANT",
          titlePrimary: "PAWAT",
          titleAccent: "LABZ",
          tagline: "Musique - Animation - Dev - Gaming - Freestyle - Tutos",
          description:
            "Pawat Labz est un laboratoire créatif où musique, image, code, animation, design et expérimentation se mélangent pour donner naissance à des projets hybrides, vivants et évolutifs."
        },
    footerMeta: {
          signature: "PAWAT LABZ",
          note: "© Pawat Labz - Tous droits réservés"
        },
    footerLinks: [
          {
            title: "YouTube",
            links: [
              { label: "@Pawat_Music", href: "https://youtube.com/@Pawat_Music?sub_confirmation=1", available: true },
              { label: "@Pawat_TV", href: "https://youtube.com/@Pawat_TV?sub_confirmation=1", available: true }
            ]
          },
          {
            title: "Contact & liens",
            links: [
              { label: "pawat.contact@gmail.com", href: "mailto:pawat.contact@gmail.com", available: true },
              { label: "GitHub", href: "https://github.com/", available: true }
            ]
          }
        ],
    languageSwitcher: {
          label: "Langue",
          options: {
            fr: "FR",
            en: "EN"
          }
        },
    authPreview: {
          label: "Espace membre",
          status: "Bientot",
          signIn: "Connexion",
          signUp: "Inscription"
        },
    routeTitles: {
          "/animation/sagaz-zzz": "SagaZ zzz",
          "/gaming/jet-bot": "Jet Bot"
        },
    notFound: {
            kicker: "ERROR 404",
            title: "Route introuvable",
            text: "La route demandée n'existe pas encore dans Pawat-Labz. Reviens à l'accueil ou explore une section déjà initialisée.",
            backHomeLabel: "Retour accueil",
            devLabel: "Section dev"
          },
    routeMeta: {
      "/": {
        title: "Pawat Labz - Laboratoire creatif vivant",
        description: "Musique, animation, dev, gaming, freestyle et tutos se croisent dans un laboratoire cyber/neon vivant.",
        image: "assets/images/animation/sagaz-zzz-cover.webp"
      },
      "/univers": {
        title: "Univers - Pawat Labz",
        description: "Explore les portails creatifs de Pawat Labz : musique, animation, dev, gaming, freestyle et tutos.",
        image: "assets/images/animation/sagaz-zzz-cover.webp"
      },
      "/about": {
        title: "About - Pawat Labz",
        description: "Comprendre l'identite du Lab, ses mondes creatifs et la logique qui relie les projets Pawat Labz.",
        image: "assets/images/animation/sagaz-zzz-cover.webp"
      },
      "/musique": {
        title: "Musique - Pawat Labz",
        description: "Ecouter les clips, cyphers, feats, instrus et archives audio de l'univers Pawat_Music.",
        image: "https://img.youtube.com/vi/_RjHrjYH0bs/maxresdefault.jpg"
      },
      "/animation": {
        title: "Animation - Pawat Labz",
        description: "Voir les series, clips animes, promos courtes et experimentations visuelles de Pawat_TV.",
        image: "assets/images/animation/sagaz-zzz-cover.webp"
      },
      "/animation/sagaz-zzz": {
        title: "SagaZ zzz - Pawat Labz",
        description: "Decouvrir SagaZ zzz, une serie animee du Lab avec episodes, playlist et lecteur integre.",
        image: "assets/images/animation/sagaz-zzz-cover.webp"
      },
      "/dev": {
        title: "Dev - Pawat Labz",
        description: "Tester les outils, prototypes web et systemes techniques en construction dans le Lab.",
        image: "assets/images/tutos/game-making/phaser-local-install.webp"
      },
      "/gaming": {
        title: "Gaming - Pawat Labz",
        description: "Jouer aux prototypes navigateur et suivre les experiences interactives du Lab.",
        image: "assets/web-games/JetBot/images/jetbot.webp"
      },
      "/gaming/jet-bot": {
        title: "Jet Bot - Pawat Labz",
        description: "Jouer a Jet Bot, prototype arcade Phaser local integre a Pawat Labz.",
        image: "assets/web-games/JetBot/images/jetbot.webp"
      },
      "/freestyle": {
        title: "Freestyle - Pawat Labz",
        description: "Tester Impro Labz, un outil interactif pour s'entrainer au freestyle en francais et en anglais.",
        image: "assets/images/animation/sagaz-zzz-cover.webp"
      },
      "/tutos": {
        title: "Tutos - Pawat Labz",
        description: "Decouvrir des fiches pratiques autour du dev, du game making et des methodes du Lab.",
        image: "assets/images/tutos/game-making/phaser-local-install.webp"
      },
      "/404": {
        title: "Page introuvable - Pawat Labz",
        description: "Cette route n'existe pas encore dans le laboratoire Pawat Labz.",
        image: "assets/images/animation/sagaz-zzz-cover.webp"
      }
    }
  },
  en: {
    siteMeta: {
          version: "v0.1.0",
          eyebrow: "LIVING CREATIVE LAB",
          titlePrimary: "PAWAT",
          titleAccent: "LABZ",
          tagline: "Music - Animation - Dev - Gaming - Freestyle - Tutorials",
          description:
            "Pawat Labz is a creative lab where music, image, code, animation, design and experimentation blend together to shape hybrid, living and evolving projects."
        },
    footerMeta: {
          signature: "PAWAT LABZ",
          note: "© Pawat Labz - All rights reserved"
        },
    footerLinks: [
          {
            title: "YouTube",
            links: [
              { label: "@Pawat_Music", href: "https://youtube.com/@Pawat_Music?sub_confirmation=1", available: true },
              { label: "@Pawat_TV", href: "https://youtube.com/@Pawat_TV?sub_confirmation=1", available: true }
            ]
          },
          {
            title: "Contact & links",
            links: [
              { label: "pawat.contact@gmail.com", href: "mailto:pawat.contact@gmail.com", available: true },
              { label: "GitHub", href: "https://github.com/", available: true }
            ]
          }
        ],
    languageSwitcher: {
          label: "Language",
          options: {
            fr: "FR",
            en: "EN"
          }
        },
    authPreview: {
          label: "Member area",
          status: "Soon",
          signIn: "Sign in",
          signUp: "Sign up"
        },
    routeTitles: {
          "/animation/sagaz-zzz": "SagaZ zzz",
          "/gaming/jet-bot": "Jet Bot"
        },
    notFound: {
            kicker: "ERROR 404",
            title: "Route not found",
            text: "The requested route does not exist yet in Pawat-Labz. Go back home or explore a section that is already online.",
            backHomeLabel: "Back home",
            devLabel: "Dev section"
          },
    routeMeta: {
      "/": {
        title: "Pawat Labz - Living creative laboratory",
        description: "Music, animation, dev, gaming, freestyle and tutorials meet inside a living cyber/neon laboratory.",
        image: "assets/images/animation/sagaz-zzz-cover.webp"
      },
      "/univers": {
        title: "Universes - Pawat Labz",
        description: "Explore the creative portals of Pawat Labz: music, animation, dev, gaming, freestyle and tutorials.",
        image: "assets/images/animation/sagaz-zzz-cover.webp"
      },
      "/about": {
        title: "About - Pawat Labz",
        description: "Understand the Lab identity, its creative worlds and the logic connecting Pawat Labz projects.",
        image: "assets/images/animation/sagaz-zzz-cover.webp"
      },
      "/musique": {
        title: "Music - Pawat Labz",
        description: "Listen to clips, cyphers, feats, beats and audio archives from the Pawat_Music universe.",
        image: "https://img.youtube.com/vi/_RjHrjYH0bs/maxresdefault.jpg"
      },
      "/animation": {
        title: "Animation - Pawat Labz",
        description: "Watch series, animated clips, short promos and visual experiments from Pawat_TV.",
        image: "assets/images/animation/sagaz-zzz-cover.webp"
      },
      "/animation/sagaz-zzz": {
        title: "SagaZ zzz - Pawat Labz",
        description: "Discover SagaZ zzz, an animated Lab series with episodes, playlist and embedded player.",
        image: "assets/images/animation/sagaz-zzz-cover.webp"
      },
      "/dev": {
        title: "Dev - Pawat Labz",
        description: "Test web tools, prototypes and technical systems currently being built inside the Lab.",
        image: "assets/images/tutos/game-making/phaser-local-install.webp"
      },
      "/gaming": {
        title: "Gaming - Pawat Labz",
        description: "Play browser prototypes and follow the interactive experiences of the Lab.",
        image: "assets/web-games/JetBot/images/jetbot.webp"
      },
      "/gaming/jet-bot": {
        title: "Jet Bot - Pawat Labz",
        description: "Play Jet Bot, a local Phaser arcade prototype integrated into Pawat Labz.",
        image: "assets/web-games/JetBot/images/jetbot.webp"
      },
      "/freestyle": {
        title: "Freestyle - Pawat Labz",
        description: "Test Impro Labz, an interactive tool to train freestyle skills in French and English.",
        image: "assets/images/animation/sagaz-zzz-cover.webp"
      },
      "/tutos": {
        title: "Tutorials - Pawat Labz",
        description: "Discover practical sheets around dev, game making and Lab methods.",
        image: "assets/images/tutos/game-making/phaser-local-install.webp"
      },
      "/404": {
        title: "Page not found - Pawat Labz",
        description: "This route does not exist yet inside the Pawat Labz laboratory.",
        image: "assets/images/animation/sagaz-zzz-cover.webp"
      }
    }
  }
};
