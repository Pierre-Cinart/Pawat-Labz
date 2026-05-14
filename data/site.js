const LANGUAGE_STORAGE_KEY = "pawat-labz-language";
const SUPPORTED_LANGUAGES = ["fr", "en"];

const translations = {
  fr: {
    siteMeta: {
      version: "v0.1.0",
      eyebrow: "LABORATOIRE CRÉATIF VIVANT",
      titlePrimary: "PAWAT",
      titleAccent: "LABZ",
      tagline: "Musique - Animation - Dev - Gaming - Freestyle - Tutos",
      description:
        "Pawat Labz est un laboratoire créatif personnel où musique, image, code, animation, design et expérimentation se mélangent pour donner naissance à des projets hybrides, vivants et évolutifs."
    },
    navigationItems: [
      { index: "00", label: "Accueil", path: "/" },
      { index: "00A", label: "Univers", path: "/univers" },
      { index: "01", label: "Musique", path: "/musique" },
      { index: "02", label: "Animation", path: "/animation" },
      { index: "03", label: "Dev", path: "/dev" },
      { index: "04", label: "Gaming", path: "/gaming" },
      { index: "05", label: "Freestyle", path: "/freestyle" },
      { index: "06", label: "Tutos", path: "/tutos" }
    ],
    footerMeta: {
      signature: "PAWAT LABZ - laboratoire créatif vivant",
      note: "© Pawat Labz - Tous droits réservés"
    },
    footerLinks: [
      {
        title: "YouTube",
        links: [
          { label: "@Pawat_Music", href: "https://youtube.com/@Pawat_Music", available: true },
          { label: "@Pawat_TV", href: "https://youtube.com/@Pawat_TV", available: true }
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
    creativeUniverses: [
      {
        path: "/musique",
        index: "01",
        label: "Musique",
        title: "Productions, instrus et identité sonore",
        text: "La musique est un des moteurs principaux de Pawat Labz. On y retrouve mes productions, mes instrus, mes projets personnels, mes collaborations, mes cyphers et mes futurs albums.",
        details: ["Instrus", "Productions", "Clips", "Album solo", "Feat / Cypher", "YouTube / réseaux"]
      },
      {
        path: "/animation",
        index: "02",
        label: "Animation",
        title: "Images en mouvement, séries et univers visuels",
        text: "Découvrez ici mes créations animées, mes dessins animés, mes concepts de séries, mes clips animés, mes publicités courtes et mes expérimentations visuelles.",
        details: ["Séries animées", "Clips animés", "Publicités courtes", "Univers visuels", "Expérimentations", "Concepts narratifs"]
      },
      {
        path: "/dev",
        index: "03",
        label: "Dev",
        title: "Outils, prototypes et construction technique",
        text: "La section Dev montre mon côté constructeur. J'y partage mes projets web, mes prototypes, mes outils maison, mes systèmes JavaScript, mes expérimentations open source et mes futurs utilitaires.",
        details: ["Développement web", "Outils open source", "Phaser tools", "Utilitaires PC/.NET", "Prototypes techniques", "GitHub"]
      },
      {
        path: "/gaming",
        index: "04",
        label: "Gaming",
        title: "Prototypes jouables et expériences interactives",
        text: "Cette section est pensée comme un terrain de jeu. Elle regroupe mes petits prototypes jouables en ligne, mes concepts de jeux, mes projets Phaser, mes mini-jeux arcade et mes futurs jeux complets.",
        details: ["Mini-jeux jouables", "Prototypes Phaser", "Futurs jeux Play Store", "Jeux téléchargeables", "Projets complets"]
      },
      {
        path: "/freestyle",
        index: "05",
        label: "Freestyle Lab",
        title: "On balance les mots, le beat et c'est parti pour l'impro",
        text: "Impro Lab est un outil interactif pensé pour les rappeurs, improvisateurs et curieux. Des mots apparaissent aléatoirement pendant qu'une instru tourne, avec vitesse et difficulté réglables.",
        details: ["Générateur de mots", "Difficulté", "Vitesse", "Instrus disponibles", "Freestyle", "Entraînement impro"]
      },
      {
        path: "/tutos",
        index: "06",
        label: "Tutos",
        title: "Bases, transmission et formations à développer",
        text: "Retrouvez ici mes tutos, mes bases, des explications progressives et des contenus de transmission plus complets. L'idée n'est pas seulement de montrer, mais aussi d'aider à comprendre, pratiquer et aller plus loin.",
        details: ["Bases", "Tutos en cours", "Méthodes", "Ressources", "Formations avancées"]
      }
    ],
    homeManifesto: [
      "Je suis un créateur multitâche, artiste dans l'âme, qui utilise la programmation comme un prolongement naturel de sa créativité.",
      "Ici, chaque idée peut devenir un son, une interface, un jeu, un clip, un outil ou un univers complet.",
      "Le visiteur ne doit pas seulement comprendre ce que je fais. Il doit ressentir le monde dans lequel il entre."
    ],
    pageHighlights: {
      home: [
        "Musique, image, code, animation, design et expérimentation se croisent ici.",
        "Chaque rubrique est pensée comme un monde identifiable, avec sa propre énergie.",
        "Pawat Labz avance comme un espace vivant : hybride, mouvant et évolutif."
      ],
      musique: [
        "Catalogue audio et instrus",
        "Lecteur custom et mini-player persistant",
        "Sections clips, projets perso et sorties"
      ],
      animation: [
        "Séries animées",
        "Clips animés et univers visuels",
        "Publicités courtes et formats promo",
        "Expérimentations graphiques et narratives"
      ],
      dev: [
        "Présentation de mes outils, prototypes et systèmes",
        "Grilles projets, filtres et expérimentation",
        "Liens GitHub, open source et utilitaires"
      ],
      gaming: [
        "Prototypes jouables et jeux complets",
        "Embeds interactifs et passerelles de progression",
        "Présentation arcade rétro-futuriste"
      ],
      freestyle: [
        "Impro Lab et génération de mots",
        "Interaction audio et visuelle en temps réel",
        "Modes de difficulté et ambiance scène / labo"
      ],
      tutos: [
        "Bases et explications progressives",
        "Tutos en cours de scriptage",
        "Passerelle vers des formations plus complètes"
      ]
    },
    animationHub: {
      introLabel: "Exploration animation",
      introTitle: "Choisis une rubrique pour faire apparaître son focus créatif.",
      introText:
        "Chaque sous-menu peut devenir une porte d'entrée vers une série, une collection de clips, des pubs ou un mini-univers visuel plus détaillé.",
      entryKicker: "SÉRIE ANIMÉE",
      imageLabel: "Image",
      categories: [
        {
          id: "series-animees",
          label: "Séries animées",
          title: "Séries animées",
          description:
            "Univers épisodiques, personnages récurrents, narration cartoon et détournements maison.",
          entries: [
            {
              path: "/animation/sagaz-zzz",
              title: "SagaZ zzz",
              subtitle:
                "Une parodie hilarante de DBZ qui revisite le fabuleux manga d'Akira Toriyama façon humour Pawat Labz.",
              image: "assets/images/animation/sagaz-zzz-cover.webp",
              imageAlt: "Illustration de SagaZ zzz"
            }
          ]
        },
        {
          id: "clips-animes",
          label: "Clips animés",
          title: "Clips animés",
          description:
            "Clips visuels, énergie musicale, montage cartoon et idées hybrides entre son et image.",
          entries: []
        },
        {
          id: "publicites-courtes",
          label: "Publicités courtes",
          title: "Publicités courtes",
          description:
            "Formats promo courts, idées visuelles rapides, humour, gimmicks et messages percutants.",
          entries: []
        }
      ],
      emptyState: "Cette rubrique pourra accueillir plusieurs projets plus tard."
    },
    animationSeries: {
      sagaz: {
        path: "/animation/sagaz-zzz",
        kicker: "SÉRIE ANIMÉE",
        title: "SagaZ zzz",
        subtitle:
          "Une parodie hilarante de DBZ qui revisite le fabuleux manga d'Akira Toriyama façon humour Pawat Labz.",
        description:
          "SagaZ zzz revisite avec humour le fabuleux manga d'Akira Toriyama dans une version cartoon maison pensée comme un hommage autant qu'un terrain de jeu Pawat Labz. Cette page est construite comme un mini espace de visionnage : on choisit une saison, puis un épisode, comme dans une petite plateforme de streaming.",
        coverImage: "assets/images/animation/sagaz-zzz-cover.webp",
        coverAlt: "Illustration de SagaZ zzz",
        coverHint: "Ajoute ton image ici : assets/images/animation/sagaz-zzz-cover.webp",
        backLabel: "Retour animation",
        seasonLabel: "Saison",
        episodeLabel: "Épisodes",
        episodeThumbnailLabel: "Vignette épisode",
        playerLabel: "Lecteur YouTube",
        watchOnYoutubeLabel: "Voir l'épisode sur YouTube",
        playlistLabel: "Playlist officielle",
        playlistUrl: "https://www.youtube.com/@Pawat_TV/playlists",
        playlistButtonLabel: "Voir la playlist Pawat_TV",
        placeholderTitle: "Épisode en attente de lecture",
        placeholderText:
          "Le lecteur YouTube intégré apparaîtra ici. En attendant, tu peux retrouver la playlist SagaZ zzz sur la chaîne Pawat_TV.",
        seasons: [
          {
            id: "season-1",
            label: "Saison 1",
            episodes: [
              {
                id: "s1-e1",
                number: "01",
                title: "L'Aventure commence !",
                summary: "SagaZ zzz - Saison 1 - épisode 1. Le départ de la parodie et l'entrée dans l'univers cartoon revisité.",
                thumbnail: "assets/images/animation/sagaz-zzz/s1-e1.webp",
                thumbnailAlt: "Vignette de l'épisode 1 de SagaZ zzz",
                youtubeId: "qGw72pOeaKE"
              },
              {
                id: "s1-e2",
                number: "02",
                title: "Kakamou se fait démonter !!!",
                summary: "SagaZ zzz - Saison 1 - épisode 2. L'humour monte d'un cran et la baston prend une tournure bien plus absurde.",
                thumbnail: "assets/images/animation/sagaz-zzz/s1-e2.webp",
                thumbnailAlt: "Vignette de l'épisode 2 de SagaZ zzz",
                youtubeId: "J9B1E55-wNE"
              },
              {
                id: "s1-e3",
                number: "03",
                title: "Une union inattendue",
                summary: "SagaZ zzz - Saison 1 - épisode 3. Un nouveau tournant dans l'aventure avec une alliance improbable.",
                thumbnail: "assets/images/animation/sagaz-zzz/s1-e3.webp",
                thumbnailAlt: "Vignette de l'épisode 3 de SagaZ zzz",
                youtubeId: "yVYHZy_uVKs"
              },
              {
                id: "s1-e4",
                number: "04",
                title: "La baston commence",
                summary: "SagaZ zzz - Saison 1 - épisode 4. Le face-à-face démarre vraiment et l'énergie cartoon prend toute la place.",
                thumbnail: "assets/images/animation/sagaz-zzz/s1-e4.webp",
                thumbnailAlt: "Vignette de l'épisode 4 de SagaZ zzz",
                youtubeId: "aSoCIprpkHo"
              },
              {
                id: "s1-e5",
                number: "05",
                title: "Une fin tragique...",
                summary: "SagaZ zzz - Saison 1 - épisode 5. Une conclusion plus dramatique qui détourne encore les codes de DBZ.",
                thumbnail: "assets/images/animation/sagaz-zzz/s1-e5.webp",
                thumbnailAlt: "Vignette de l'épisode 5 de SagaZ zzz",
                youtubeId: "VxjibwYvybc"
              }
            ]
          }
        ]
      }
    },
    pageContent: {
      home: {
        kicker: "ACCUEIL / UNIVERS",
        title: "Pawat Labz - laboratoire créatif vivant",
        intro:
          "Pawat Labz, laboratoire créatif. Je mélange musique, image, code, animation, design et expérimentation pour construire des projets hybrides, vivants et évolutifs. Ici, chaque idée peut devenir un son, une interface, un jeu, un clip, un outil ou un univers complet.",
        ctaLabel: "Découvrir les univers",
        visionLabel: "VISION",
        panel: {
          kicker: "UNE INTERFACE ENTRE ART, CODE ET EXPÉRIMENTATION",
          title: "Un espace en évolution construit autour de ma manière de créer.",
          text:
            "Pawat Labz n'est pas seulement un site. C'est un espace en évolution, construit autour de ma manière de créer : tester, mélanger, détourner, apprendre et transformer les idées en expériences concrètes. Chaque rubrique doit devenir un monde identifiable, avec sa propre énergie, ses propres détails et sa propre narration visuelle.",
          badge: "INTENTION"
        }
      },
      univers: {
        kicker: "PANORAMA",
        title: "Bienvenue dans l'univers Pawat-Labz",
        text: "Cette page résume les grandes rubriques du site et donne une vision plus claire de chaque monde créatif du Labz.",
        badge: "OVERVIEW"
      },
      musique: {
        kicker: "SECTION 01",
        title: "Musique",
        text: "Catalogue audio, instrus, clips, actualités musique et projets à venir.",
        badge: "AUDIO"
      },
      animation: {
        kicker: "SECTION 02",
        title: "Animation",
        text: "Découvrez ici mes créations animées, mes dessins animés, mes concepts de séries, mes clips animés, mes publicités courtes et mes expérimentations visuelles.",
        badge: "VIDEO"
      },
      dev: {
        kicker: "SECTION 03",
        title: "Dev",
        text: "Espace dédié à mon univers de constructeur : projets web, prototypes, outils open source, systèmes maison et expérimentations techniques.",
        badge: "CODE"
      },
      gaming: {
        kicker: "SECTION 04",
        title: "Gaming",
        text: "Le petit plaisir des geeks. Cette section regroupe mes petits prototypes jouables en ligne, mes concepts de jeux, mes projets Phaser, mes mini-jeux arcade et mes futurs jeux complets.",
        badge: "PLAY"
      },
      freestyle: {
        kicker: "SECTION 05",
        title: "Freestyle / Impro Lab",
        text: "Cette section préparera l'outil interactif de génération de mots et d'ambiance pensé pour l'improvisation, l'entraînement et la performance.",
        badge: "INTERACTIF"
      },
      tutos: {
        kicker: "TUTOS",
        title: "Bases, transmission et formations à développer",
        text: "Retrouvez ici mes tutos, mes bases, des explications progressives et des contenus de transmission plus complets. L'idée n'est pas seulement de montrer, mais aussi d'aider à comprendre, pratiquer et aller plus loin.",
        badge: "LEARNING"
      },
      notFound: {
        kicker: "ERROR 404",
        title: "Route introuvable",
        text: "La route demandée n'existe pas encore dans Pawat-Labz. Reviens à l'accueil ou explore une section déjà initialisée.",
        backHomeLabel: "Retour accueil",
        devLabel: "Section dev"
      }
    },
    routeTitles: {
      "/animation/sagaz-zzz": "SagaZ zzz"
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
        "Pawat Labz is a personal creative lab where music, image, code, animation, design and experimentation blend together to shape hybrid, living and evolving projects."
    },
    navigationItems: [
      { index: "00", label: "Home", path: "/" },
      { index: "00A", label: "Universes", path: "/univers" },
      { index: "01", label: "Music", path: "/musique" },
      { index: "02", label: "Animation", path: "/animation" },
      { index: "03", label: "Dev", path: "/dev" },
      { index: "04", label: "Gaming", path: "/gaming" },
      { index: "05", label: "Freestyle", path: "/freestyle" },
      { index: "06", label: "Tutorials", path: "/tutos" }
    ],
    footerMeta: {
      signature: "PAWAT LABZ - living creative lab",
      note: "© Pawat Labz - All rights reserved"
    },
    footerLinks: [
      {
        title: "YouTube",
        links: [
          { label: "@Pawat_Music", href: "https://youtube.com/@Pawat_Music", available: true },
          { label: "@Pawat_TV", href: "https://youtube.com/@Pawat_TV", available: true }
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
    creativeUniverses: [
      {
        path: "/musique",
        index: "01",
        label: "Music",
        title: "Productions, beats and sonic identity",
        text: "Music is one of the main engines behind Pawat Labz. This section gathers my productions, beats, personal projects, collaborations, cyphers and future albums.",
        details: ["Beats", "Productions", "Clips", "Solo album", "Feat / Cypher", "YouTube / socials"]
      },
      {
        path: "/animation",
        index: "02",
        label: "Animation",
        title: "Moving images, series and visual worlds",
        text: "Discover my animated creations, cartoons, series concepts, animated clips, short ads and visual experiments here.",
        details: ["Animated series", "Animated clips", "Short ads", "Visual worlds", "Experiments", "Narrative concepts"]
      },
      {
        path: "/dev",
        index: "03",
        label: "Dev",
        title: "Tools, prototypes and technical craft",
        text: "The Dev section shows my builder side. I share web projects, prototypes, custom tools, JavaScript systems, open source experiments and future utilities.",
        details: ["Web development", "Open source tools", "Phaser tools", "PC/.NET utilities", "Technical prototypes", "GitHub"]
      },
      {
        path: "/gaming",
        index: "04",
        label: "Gaming",
        title: "Playable prototypes and interactive experiences",
        text: "This section is designed as a playground. It gathers my small online prototypes, game concepts, Phaser projects, arcade mini-games and future full games.",
        details: ["Playable mini-games", "Phaser prototypes", "Future Play Store games", "Downloadable games", "Full projects"]
      },
      {
        path: "/freestyle",
        index: "05",
        label: "Freestyle Lab",
        title: "Words, beat, flow - and the improv begins",
        text: "Impro Lab is an interactive tool made for rappers, improvisers and curious minds. Random words appear while a beat plays, with adjustable speed and difficulty.",
        details: ["Word generator", "Difficulty", "Speed", "Available beats", "Freestyle", "Impro training"]
      },
      {
        path: "/tutos",
        index: "06",
        label: "Tutorials",
        title: "Foundations, knowledge sharing and future training",
        text: "Here you will find my tutorials, learning foundations, progressive explanations and more complete educational content. The goal is not only to show, but to help people understand, practice and go further.",
        details: ["Basics", "Tutorials in progress", "Methods", "Resources", "Advanced training"]
      }
    ],
    homeManifesto: [
      "I am a multitasking creator, an artist at heart, using programming as a natural extension of creativity.",
      "Here, every idea can become a sound, an interface, a game, a clip, a tool or a complete universe.",
      "Visitors should not only understand what I do. They should feel the world they are stepping into."
    ],
    pageHighlights: {
      home: [
        "Music, image, code, animation, design and experimentation intersect here.",
        "Each section is imagined as its own recognizable world, with its own energy.",
        "Pawat Labz grows like a living space: hybrid, moving and evolving."
      ],
      musique: [
        "Audio catalog and beats",
        "Custom player and persistent mini-player",
        "Clips, personal projects and releases"
      ],
      animation: [
        "Animated series",
        "Animated clips and visual worlds",
        "Short ads and promo formats",
        "Graphic and narrative experiments"
      ],
      dev: [
        "Presentation of my tools, prototypes and systems",
        "Project grids, filters and experimentation",
        "GitHub links, open source work and utilities"
      ],
      gaming: [
        "Playable prototypes and full games",
        "Interactive embeds and progression gateways",
        "Retro-futuristic arcade presentation"
      ],
      freestyle: [
        "Impro Lab and word generation",
        "Real-time audio and visual interaction",
        "Difficulty modes and stage / lab atmosphere"
      ],
      tutos: [
        "Foundations and progressive explanations",
        "Tutorials currently being scripted",
        "Gateway toward more complete training"
      ]
    },
    animationHub: {
      introLabel: "Animation focus",
      introTitle: "Choose a sub-section to reveal its creative focus.",
      introText:
        "Each submenu can become a doorway toward a series, a clip collection, short ads or a more detailed visual universe.",
      entryKicker: "ANIMATED SERIES",
      imageLabel: "Image",
      categories: [
        {
          id: "animated-series",
          label: "Animated series",
          title: "Animated series",
          description:
            "Episodic worlds, recurring characters, cartoon storytelling and custom parody energy.",
          entries: [
            {
              path: "/animation/sagaz-zzz",
              title: "SagaZ zzz",
              subtitle:
                "A hilarious DBZ parody that revisits Akira Toriyama's legendary manga through Pawat Labz humor.",
              image: "assets/images/animation/sagaz-zzz-cover.webp",
              imageAlt: "SagaZ zzz illustration"
            }
          ]
        },
        {
          id: "animated-clips",
          label: "Animated clips",
          title: "Animated clips",
          description:
            "Visual clips, musical energy, cartoon editing and hybrid ideas between sound and motion.",
          entries: []
        },
        {
          id: "short-ads",
          label: "Short ads",
          title: "Short ads",
          description:
            "Short promo formats, quick visual ideas, humor, gimmicks and punchy messages.",
          entries: []
        }
      ],
      emptyState: "This section can host several projects later on."
    },
    animationSeries: {
      sagaz: {
        path: "/animation/sagaz-zzz",
        kicker: "ANIMATED SERIES",
        title: "SagaZ zzz",
        subtitle:
          "A hilarious DBZ parody that revisits Akira Toriyama's legendary manga through Pawat Labz humor.",
        description:
          "SagaZ zzz revisits Akira Toriyama's legendary manga with humor in a custom cartoon version designed as both a tribute and a Pawat Labz playground. This page works like a mini streaming space: pick a season, then pick an episode.",
        coverImage: "assets/images/animation/sagaz-zzz-cover.webp",
        coverAlt: "SagaZ zzz illustration",
        coverHint: "Add your image here: assets/images/animation/sagaz-zzz-cover.webp",
        backLabel: "Back to animation",
        seasonLabel: "Season",
        episodeLabel: "Episodes",
        episodeThumbnailLabel: "Episode thumbnail",
        playerLabel: "YouTube player",
        watchOnYoutubeLabel: "Watch this episode on YouTube",
        playlistLabel: "Official playlist",
        playlistUrl: "https://www.youtube.com/@Pawat_TV/playlists",
        playlistButtonLabel: "Open the Pawat_TV playlist",
        placeholderTitle: "Episode waiting for playback",
        placeholderText:
          "The embedded YouTube player will appear here. In the meantime, you can find the SagaZ zzz playlist on the Pawat_TV channel.",
        seasons: [
          {
            id: "season-1",
            label: "Season 1",
            episodes: [
              {
                id: "s1-e1",
                number: "01",
                title: "The adventure begins!",
                summary: "SagaZ zzz - Season 1 - Episode 1. The parody starts and the cartoon-flavored world begins to take shape.",
                thumbnail: "assets/images/animation/sagaz-zzz/s1-e1.webp",
                thumbnailAlt: "Thumbnail for SagaZ zzz episode 1",
                youtubeId: "qGw72pOeaKE"
              },
              {
                id: "s1-e2",
                number: "02",
                title: "Kakamou gets wrecked!!!",
                summary: "SagaZ zzz - Season 1 - Episode 2. The humor gets louder and the fight becomes way more absurd.",
                thumbnail: "assets/images/animation/sagaz-zzz/s1-e2.webp",
                thumbnailAlt: "Thumbnail for SagaZ zzz episode 2",
                youtubeId: "J9B1E55-wNE"
              },
              {
                id: "s1-e3",
                number: "03",
                title: "An unexpected union",
                summary: "SagaZ zzz - Season 1 - Episode 3. A new turn in the story with an unlikely alliance.",
                thumbnail: "assets/images/animation/sagaz-zzz/s1-e3.webp",
                thumbnailAlt: "Thumbnail for SagaZ zzz episode 3",
                youtubeId: "yVYHZy_uVKs"
              },
              {
                id: "s1-e4",
                number: "04",
                title: "The fight begins",
                summary: "SagaZ zzz - Season 1 - Episode 4. The showdown really starts and the cartoon energy takes over.",
                thumbnail: "assets/images/animation/sagaz-zzz/s1-e4.webp",
                thumbnailAlt: "Thumbnail for SagaZ zzz episode 4",
                youtubeId: "aSoCIprpkHo"
              },
              {
                id: "s1-e5",
                number: "05",
                title: "A tragic ending...",
                summary: "SagaZ zzz - Season 1 - Episode 5. A more dramatic finale that still twists DBZ codes with humor.",
                thumbnail: "assets/images/animation/sagaz-zzz/s1-e5.webp",
                thumbnailAlt: "Thumbnail for SagaZ zzz episode 5",
                youtubeId: "VxjibwYvybc"
              }
            ]
          }
        ]
      }
    },
    pageContent: {
      home: {
        kicker: "HOME / UNIVERSES",
        title: "Pawat Labz - living creative laboratory",
        intro:
          "Pawat Labz, creative laboratory. I mix music, image, code, animation, design and experimentation to build hybrid, living and evolving projects. Here, every idea can become a sound, an interface, a game, a clip, a tool or a complete universe.",
        ctaLabel: "Explore the universes",
        visionLabel: "VISION",
        panel: {
          kicker: "AN INTERFACE BETWEEN ART, CODE AND EXPERIMENTATION",
          title: "An evolving space built around the way I create.",
          text:
            "Pawat Labz is not just a website. It is an evolving space built around the way I create: testing, blending, bending, learning and turning ideas into concrete experiences. Each section is meant to become a recognizable world, with its own energy, details and visual storytelling.",
          badge: "INTENTION"
        }
      },
      univers: {
        kicker: "PANORAMA",
        title: "Welcome to the Pawat-Labz universe",
        text: "This page sums up the main sections of the site and gives a clearer view of each creative world inside the Labz.",
        badge: "OVERVIEW"
      },
      musique: {
        kicker: "SECTION 01",
        title: "Music",
        text: "Audio catalog, beats, clips, music news and upcoming projects.",
        badge: "AUDIO"
      },
      animation: {
        kicker: "SECTION 02",
        title: "Animation",
        text: "Discover my animated creations, cartoons, series concepts, animated clips, short ads and visual experiments here.",
        badge: "VIDEO"
      },
      dev: {
        kicker: "SECTION 03",
        title: "Dev",
        text: "A space dedicated to my builder side: web projects, prototypes, open source tools, custom systems and technical experiments.",
        badge: "CODE"
      },
      gaming: {
        kicker: "SECTION 04",
        title: "Gaming",
        text: "A little treat for geeks. This section gathers my small online playable prototypes, game concepts, Phaser projects, arcade mini-games and future full games.",
        badge: "PLAY"
      },
      freestyle: {
        kicker: "SECTION 05",
        title: "Freestyle / Impro Lab",
        text: "This section prepares an interactive tool for word generation and atmosphere, designed for improvisation, training and performance.",
        badge: "INTERACTIVE"
      },
      tutos: {
        kicker: "TUTORIALS",
        title: "Foundations, knowledge sharing and future training",
        text: "Here you will find my tutorials, basics, progressive explanations and deeper educational content. The goal is not only to show, but also to help people understand, practice and go further.",
        badge: "LEARNING"
      },
      notFound: {
        kicker: "ERROR 404",
        title: "Route not found",
        text: "The requested route does not exist yet in Pawat-Labz. Go back home or explore a section that is already online.",
        backHomeLabel: "Back home",
        devLabel: "Dev section"
      }
    },
    routeTitles: {
      "/animation/sagaz-zzz": "SagaZ zzz"
    }
  }
};

const getStoredLanguage = () => {
  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return SUPPORTED_LANGUAGES.includes(storedLanguage) ? storedLanguage : "fr";
  } catch {
    return "fr";
  }
};

let currentLanguage = getStoredLanguage();

const getLocaleContent = () => translations[currentLanguage] ?? translations.fr;

export const getLanguage = () => currentLanguage;

export const getSupportedLanguages = () => [...SUPPORTED_LANGUAGES];

export const setLanguage = (language) => {
  if (!SUPPORTED_LANGUAGES.includes(language)) {
    return;
  }

  currentLanguage = language;

  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // No-op if storage is unavailable.
  }

  document.documentElement.lang = language;
};

export const initializeLanguage = () => {
  document.documentElement.lang = currentLanguage;
};

export const getSiteMeta = () => getLocaleContent().siteMeta;
export const getNavigationItems = () => getLocaleContent().navigationItems;
export const getFooterMeta = () => getLocaleContent().footerMeta;
export const getFooterLinks = () => getLocaleContent().footerLinks;
export const getLanguageSwitcher = () => getLocaleContent().languageSwitcher;
export const getCreativeUniverses = () => getLocaleContent().creativeUniverses;
export const getHomeManifesto = () => getLocaleContent().homeManifesto;
export const getPageHighlights = () => getLocaleContent().pageHighlights;
export const getPageContent = (pageKey) => getLocaleContent().pageContent[pageKey];
export const getAnimationHub = () => getLocaleContent().animationHub;
export const getAnimationSeries = (seriesKey) => getLocaleContent().animationSeries[seriesKey];

export const getRouteTitle = (path) => {
  const localeContent = getLocaleContent();

  if (path === "/404") {
    return localeContent.pageContent.notFound.title;
  }

  return (
    localeContent.routeTitles?.[path] ??
    localeContent.navigationItems.find((item) => item.path === path)?.label ??
    "Pawat Labz"
  );
};
