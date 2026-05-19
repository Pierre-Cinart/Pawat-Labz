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
      { index: "05A", label: "Impro Labz", path: "/freestyle?focus=impro-labz" },
      { index: "06", label: "Tutos", path: "/tutos" },
      { index: "00B", label: "ABOUT", path: "/about" }
    ],
    footerMeta: {
      signature: "PAWAT LABZ - laboratoire créatif vivant",
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
    creativeUniverses: [
      {
        path: "/musique",
        index: "01",
        label: "Musique",
        title: "Productions, instrus et identité sonore",
        text: "La musique est un des moteurs principaux de Pawat Labz. On y retrouve mes productions, mes instrus, mes projets personnels, mes collaborations, mes cyphers et mes futurs albums.",
        details: [
          { label: "Projets", path: "/musique?focus=projets" },
          { label: "Clips", path: "/musique?focus=clips" },
          { label: "Feat/Cypher", path: "/musique?focus=feat-cypher" },
          { label: "Instrus", path: "/musique?focus=instrus" },
          { label: "Réseaux", path: "/musique?focus=reseaux" }
        ]
      },
      {
        path: "/animation",
        index: "02",
        label: "Animation",
        title: "Images en mouvement, séries et univers visuels",
        text: "Découvrez ici mes créations animées, mes dessins animés, mes concepts de séries, mes clips animés, mes publicités courtes et mes expérimentations visuelles.",
        details: [
          { label: "Séries animées", path: "/animation?focus=series-animees" },
          { label: "Clips animés", path: "/animation?focus=clips-animes" },
          { label: "Publicités courtes", path: "/animation?focus=publicites-courtes" },
          { label: "Réseaux", path: "/animation?focus=reseaux" },
          { label: "Univers visuels", path: "/animation" },
          { label: "Expérimentations", path: "/animation" },
          { label: "Concepts narratifs", path: "/animation" }
        ]
      },
      {
        path: "/dev",
        index: "03",
        label: "Dev",
        title: "Outils, prototypes et construction technique",
        text: "La section Dev montre mon côté constructeur. J'y partage mes projets web, mes prototypes, mes outils maison, mes systèmes JavaScript, mes expérimentations open source et mes futurs utilitaires.",
        details: [
          { label: "Développement web", path: "/dev" },
          { label: "Outils open source", path: "/dev" },
          { label: "Phaser tools", path: "/dev" },
          { label: "Utilitaires PC/.NET", path: "/dev" },
          { label: "Prototypes techniques", path: "/dev" },
          { label: "GitHub", path: "/dev" }
        ]
      },
      {
        path: "/gaming",
        index: "04",
        label: "Gaming",
        title: "Prototypes jouables et expériences interactives",
        text: "Cette section est pensée comme un terrain de jeu. Elle regroupe mes petits prototypes jouables en ligne, mes concepts de jeux, mes projets Phaser, mes mini-jeux arcade et mes futurs jeux complets.",
        details: [
          { label: "Mini-jeux jouables", path: "/gaming" },
          { label: "Prototypes Phaser", path: "/gaming" },
          { label: "Futurs jeux Play Store", path: "/gaming" },
          { label: "Jeux téléchargeables", path: "/gaming" },
          { label: "Projets complets", path: "/gaming" }
        ]
      },
      {
        path: "/freestyle",
        index: "05",
        label: "Freestyle Lab",
        title: "On balance les mots, le beat et c'est parti pour l'impro",
        text: "Impro Labz est un outil interactif pensé pour les rappeurs, improvisateurs et curieux. Des mots apparaissent aléatoirement pendant qu'une instru tourne, avec vitesse et difficulté réglables.",
        details: [
          { label: "Impro Labz", path: "/freestyle?focus=impro-labz" },
          { label: "Difficulté", path: "/freestyle" },
          { label: "Vitesse", path: "/freestyle" },
          { label: "Instrus disponibles", path: "/freestyle" },
          { label: "Freestyle", path: "/freestyle" },
          { label: "Entraînement impro", path: "/freestyle" }
        ]
      },
      {
        path: "/tutos",
        index: "06",
        label: "Tutos",
        title: "Bases, transmission et formations à développer",
        text: "Retrouvez ici mes tutos, mes bases, des explications progressives et des contenus de transmission plus complets. L'idée n'est pas seulement de montrer, mais aussi d'aider à comprendre, pratiquer et aller plus loin.",
        details: [
          { label: "Bases", path: "/tutos" },
          { label: "Tutos en cours", path: "/tutos" },
          { label: "Méthodes", path: "/tutos" },
          { label: "Ressources", path: "/tutos" },
          { label: "Formations avancées", path: "/tutos" }
        ]
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
        "Impro Labz et génération de mots",
        "Interaction audio et visuelle en temps réel",
        "Modes de difficulté et ambiance scène / labo"
      ],
      tutos: [
        "Bases et explications progressives",
        "Tutos en cours de scriptage",
        "Passerelle vers des formations plus complètes"
      ]
    },
    musicHub: {
      introLabel: "Exploration musique",
      introTitle: "Choisis une rubrique pour faire apparaitre son point d'entree sonore.",
      introText:
        "La section musique va se structurer autour des memes portes d'entree que celles deja visibles dans le site : projets, clips, feat/cypher, instrus et reseaux.",
      categoryKicker: "SIGNAL AUDIO",
      entryKicker: "CLIP MUSICAL",
      imageLabel: "Image",
      entryButtons: {
        external: "Voir le clip"
      },
      emptyState: "Cette rubrique pourra accueillir plusieurs clips plus tard.",
      categories: [
        {
          id: "projets",
          label: "Projets",
          title: "Projets",
          description: "Espace dedie aux morceaux construits, a l'ecriture sonore globale et aux projets qui prennent une vraie forme finale.",
          highlights: [
            "Tracks finalises ou en evolution",
            "Assemblage entre voix, instrumental et univers",
            "Sorties personnelles et projets pilotes"
          ]
        },
        {
          id: "clips",
          label: "Clips",
          title: "Clips",
          displayMode: "showcase",
          description: "La musique ne reste pas seule : elle dialogue avec l'image, le montage et les formats video lies au labo.",
          highlights: [
            "Pont direct entre son et image",
            "Clips musicaux et formats hybrides",
            "Passerelle naturelle vers la section Animation"
          ],
          entries: [
            {
              title: "MALABARZ",
              subtitle: "",
              image: "https://img.youtube.com/vi/_RjHrjYH0bs/maxresdefault.jpg",
              imageAlt: "Miniature MALABARZ",
              typeLabel: "CLIP RAP",
              context: "Artiste : Wampawat feat Nino — Instru : Tysha — Clip : Pawat_TV",
              youtubeId: "_RjHrjYH0bs",
              externalUrl: "https://www.youtube.com/watch?v=_RjHrjYH0bs"
            },
            {
              title: "SANDERS TOUS ENSEMBLE",
              subtitle: "",
              image: "https://img.youtube.com/vi/H9kXElI4U24/maxresdefault.jpg",
              imageAlt: "Miniature SANDERS TOUS ENSEMBLE",
              typeLabel: "SHORT CLIP — \"TOUS ENSEMBLE\"",
              context: "Artiste : SANDERS — Instru : Pawat_Music x Fanatik1200 — Clip : Pawat_TV",
              youtubeId: "H9kXElI4U24",
              externalUrl: "https://www.youtube.com/watch?v=H9kXElI4U24"
            },
            {
              title: "SHEIN B TOUS ENSEMBLE",
              subtitle: "",
              image: "https://img.youtube.com/vi/SXhbD9AEaGY/maxresdefault.jpg",
              imageAlt: "Miniature SHEIN B TOUS ENSEMBLE",
              typeLabel: "SHORT CLIP — \"TOUS ENSEMBLE\"",
              context: "Artiste : Shein B — Instru : Pawat_Music x Fanatik1200 — Clip : Pawat_TV",
              youtubeId: "SXhbD9AEaGY",
              externalUrl: "https://www.youtube.com/watch?v=SXhbD9AEaGY"
            },
            {
              title: "KAMEO TOUS ENSEMBLE",
              subtitle: "",
              image: "https://img.youtube.com/vi/JrTGw8cbWj8/maxresdefault.jpg",
              imageAlt: "Miniature KAMEO TOUS ENSEMBLE",
              typeLabel: "SHORT CLIP — \"TOUS ENSEMBLE\"",
              context: "Artiste : KAMEO — Instru : Pawat_Music x Fanatik1200 — Clip : Pawat_TV",
              youtubeId: "JrTGw8cbWj8",
              externalUrl: "https://www.youtube.com/watch?v=JrTGw8cbWj8"
            },
            {
              title: "WAMPAWAT TOUS ENSEMBLE",
              subtitle: "",
              image: "https://img.youtube.com/vi/-Gq8e5jIKWk/maxresdefault.jpg",
              imageAlt: "Miniature WAMPAWAT TOUS ENSEMBLE",
              typeLabel: "SHORT CLIP — \"TOUS ENSEMBLE\"",
              context: "Artiste : Wampawat — Instru : Pawat_Music x Fanatik1200 — Clip : Pawat_TV",
              youtubeId: "-Gq8e5jIKWk",
              externalUrl: "https://www.youtube.com/watch?v=-Gq8e5jIKWk"
            },
            {
              title: "BGE TOUS ENSEMBLE",
              subtitle: "",
              image: "https://img.youtube.com/vi/4yc6VFMwRME/maxresdefault.jpg",
              imageAlt: "Miniature BGE TOUS ENSEMBLE",
              typeLabel: "SHORT CLIP — \"TOUS ENSEMBLE\"",
              context: "Artiste : BGE — Instru : Pawat_Music x Fanatik1200 — Clip : Pawat_TV",
              youtubeId: "4yc6VFMwRME",
              externalUrl: "https://www.youtube.com/watch?v=4yc6VFMwRME"
            },
            {
              title: "OLD SCHOOL CYPHER",
              subtitle: "",
              image: "https://img.youtube.com/vi/fNPp0caMptc/maxresdefault.jpg",
              imageAlt: "Miniature OLD SCHOOL CYPHER",
              typeLabel: "EXPERIMENTAL ANIMATED MUSIC CLIP",
              context: "Artistes : Process lvx, BGE, Malro, Kameo, Inconiko, Pawat — Instru : Pawat_Music — Clip : Pawat_TV",
              youtubeId: "fNPp0caMptc",
              externalUrl: "https://www.youtube.com/watch?v=fNPp0caMptc"
            }
          ]
        },
        {
          id: "feat-cypher",
          label: "Feat/Cypher",
          title: "Feat/Cypher",
          description: "Collaborations, cyphers, croisements d'energie et moments collectifs qui etendent le terrain du labo.",
          displayMode: "library",
          library: {
            introLabel: "ARCHIVES COLLECTIVES",
            introTitle: "Cyphers, feats et dossiers ouverts",
            introText:
              "Cette zone regroupe les rencontres rap du labo : formats collectifs, collaborations vocales et dossiers en construction comme La RE-7.",
            statusLabel: "AUDIO ONLINE",
            subsectionLabel: "Canaux",
            sectionKicker: "Signal collectif",
            dossierKicker: "Dossier cypher",
            trackKicker: "Signal audio",
            trackButtonMore: "Lire plus",
            trackButtonLess: "Refermer",
            audioLabel: "Lecture",
            artistsLabel: "Artistes",
            beatmakerLabel: "Beatmaker",
            folders: [
              {
                id: "la-re-7",
                label: "La RE-7",
                title: "La RE-7",
                text: "Compile de cyphers en cours de mix, pensee comme une archive a part dans le laboratoire. Volume I deja en place, d'autres signaux pourront suivre.",
                entries: [
                  {
                    title: "La RE-7 Cypher I",
                    description:
                      "Premier signal de la compile La RE-7, pense comme une capsule cypher a part, plus archivee et plus frontale dans son energie.",
                    artists: "K7_Z'onde, Wampawat, Inconiko, Sanders, Arco",
                    beatmaker: "TBS",
                    audioSrc: "assets/audio/music/cyphers/La RE-7 Volume 1/La RE-7 Cypher I.m4a"
                  }
                ]
              }
            ],
            subsections: [
              {
                id: "cyphers",
                label: "Cyphers",
                title: "Cyphers",
                description: "Formats collectifs, energie brute, grosses reunions de voix et archives rap construites autour du labo.",
                entries: [
                  {
                    title: "HipHop is not dead",
                    description:
                      "Cypher rap organise par Caractere Prod reunissant 14 MCs autour d'une energie rap brute, collective et sans filtre.",
                    artists:
                      "Pilot en Flamme, Pawat_Music, Inconiko, IWH, Saika, Lezo Miska, Nino, Sanders, Osah, Thanos, Lorenben, Thysha, Arco, Kmax l'alchimiste",
                    beatmaker: "Caractere Prod",
                    audioSrc: "assets/audio/music/cyphers/HipHop is not dead.m4a"
                  },
                  {
                    title: "OLD SCHOOL CYPHER",
                    description:
                      "Cypher rap organise par Pawat_Music dans une couleur old school, avec une distribution resserree et une energie de session brute.",
                    artists: "Process Lvx, BGE (Grosse equipe), Malro, Kameo, Inconiko, Wampawat",
                    beatmaker: "Pawat_Music",
                    audioSrc: "assets/audio/music/cyphers/OLD SCHOOL CYPHER.m4a"
                  },
                  {
                    title: "Tous_ensemble",
                    description:
                      "Enorme cypher rap organise par Pawat_Music reunissant 31 artistes, pense comme un grand rassemblement de voix, d'ambiances et de connexions.",
                    artists:
                      "BGE (Grosse equipe), Inconiko, Thanos, Process Lvx, Jiji, Sanders, Malro, La Chapka, El Tchicko, Arco, Wampawat, K7_Z'onde, Music4800, Vega de la Suite, Ejay, Shein B, Youss le Prolifik, HSN, Una Sola, Nessa Nyams, Kameo, Nozey, Nino, Thysha, Soso La Hyene, Adil Serafin, Zanatik, Soulalys, S2G, La Galeci, Pilot en Flamme, Spy Cam, Oktay",
                    beatmaker: "Pawat_Music x Fanatik 12000",
                    audioSrc: "assets/audio/music/cyphers/Tous_ensemble.m4a"
                  }
                ]
              },
              {
                id: "feats",
                label: "Feats",
                title: "Feats",
                description: "Croisements de voix, invites et morceaux rap plus cibles, entre ego-trip, old school et signaux plus directs.",
                entries: [
                  {
                    title: "Indesirables",
                    description:
                      "Titre old school rap porte par Arco, Wampawat et Malro dans une approche brute, directe et tres rap.",
                    artists: "Arco, Wampawat, Malro",
                    beatmaker: "Pawat_Music",
                    audioSrc: "assets/audio/music/feats/Indésirables feat Arco et Malro.m4a"
                  },
                  {
                    title: "Malabarz",
                    description:
                      "Morceau rap ego axe sur l'attitude et l'impact, avec Nino et Wampawat sur une production de Thysha.",
                    artists: "Nino, Wampawat",
                    beatmaker: "Thysha",
                    audioSrc: "assets/audio/music/feats/Malabarz feat Nino.m4a"
                  },
                  {
                    title: "N'oublie jamais",
                    description:
                      "Morceau boom bap conscient autour de toutes les choses importantes qu'on oublie, avec Wampawat, Soso La Hyene et Inconiko sur une prod de Darkness Prod.",
                    artists: "Wampawat, Soso La Hyene, Inconiko",
                    beatmaker: "Darkness Prod",
                    audioSrc: "assets/audio/music/feats/N'oublie Jamais Feat inconiko et Soso la hyène.m4a"
                  }
                ]
              }
            ]
          }
        },
        {
          id: "instrus",
          label: "Instrus",
          title: "Instrus",
          description: "Base sonore du laboratoire : beats, textures, directions d'ambiance et terrains de jeu pour les futures voix.",
          displayMode: "library",
          library: {
            introLabel: "BANQUE INSTRU",
            introTitle: "Beats, ambiances et terrains de jeu",
            introText:
              "Cette zone rassemble les instrus du labo : boom bap, directions d'ambiance, textures atypiques et supports pensés pour les voix futures.",
            statusLabel: "BEATS ONLINE",
            subsectionLabel: "Familles",
            sectionKicker: "Signal instrumental",
            trackKicker: "Instru",
            trackButtonMore: "Lire plus",
            trackButtonLess: "Refermer",
            audioLabel: "Lecture",
            artistsLabel: "Type",
            beatmakerLabel: "Beatmaker",
            folders: [],
            subsections: [
              {
                id: "boombap",
                label: "Boom bap",
                title: "Boom bap",
                description: "Textures boom bap maison, pensées pour le freestyle, le rap et les ambiances plus marquées.",
                entries: [
                  {
                    title: "Gotham City",
                    description:
                      "Instru boom bap 93 BPM pensée comme un freestyle beat sombre, urbain et direct, avec une énergie de session brute.",
                    artists: "Freestyle beat / boom bap 93 BPM",
                    beatmaker: "Pawat_Music",
                    audioSrc: "assets/audio/music/instrus/boombap/gotham city (93BPM).m4a"
                  },
                  {
                    title: "Yakuza V2",
                    description:
                      "Instru boom bap 98.8 BPM au parfum de harpe orientale atypique, construite pour un format 3 x 16 plus narratif et singulier.",
                    artists: "Harp oriental atypique / boom bap 98.8 BPM / 3 x 16",
                    beatmaker: "Pawat_Music",
                    audioSrc: "assets/audio/music/instrus/boombap/yakuza v2 (98.8 BPM).m4a"
                  }
                ]
              }
            ]
          }
        },
        {
          id: "reseaux",
          label: "Réseaux",
          title: "Réseaux",
          description: "Canal de diffusion, mise en avant des sorties et connexions publiques autour de l'univers musical Pawat-Labz.",
          highlights: [
            "Visibilite des contenus musicaux du labo",
            "Pont vers clips, annonces et formats courts",
            "Presence publique evolutive autour des projets"
          ],
          featuredLink: {
            platform: "YouTube",
            handle: "@Pawat_Music",
            url: "https://www.youtube.com/@Pawat_Music?sub_confirmation=1",
            summary: "Chaine principale pour retrouver les morceaux, clips, sorties et futurs signaux musicaux du labo.",
            buttonLabel: "Voir la chaine"
          }
        }
      ]
    },
    aboutLab: {
      overview: {
        kicker: "LAB ENTRY",
        title: "Une zone transversale pour sentir comment le laboratoire respire.",
        text:
          "ABOUT ouvre une porte plus large sur la logique interne de Pawat-Labz : musique, jeux, animation, outils, IA et experimentation s'y croisent comme dans un studio-laboratoire vivant."
      },
      signals: [
        {
          label: "Creative core",
          value: "Music + visuals + code",
          note: "Chaque discipline nourrit les autres et fait naitre de nouveaux formats."
        },
        {
          label: "Lab direction",
          value: "Hybrid creative systems",
          note: "Le but n'est pas de separer les rubriques, mais de les faire dialoguer."
        },
        {
          label: "Production mode",
          value: "Independent and evolving",
          note: "Le labo grandit projet apres projet, prototype apres prototype."
        },
        {
          label: "Open channels",
          value: "Web / video / sound / play",
          note: "Chaque idee peut devenir une interface, un clip, un outil ou un terrain de jeu."
        }
      ],
      sections: [
        {
          signal: "SND",
          title: "Music Production",
          text: "Production musicale, instrus, identite sonore, sorties, energie rap et textures plus experimentales se rencontrent ici."
        },
        {
          signal: "GME",
          title: "Game Development",
          text: "Des prototypes jouables, des idees de gameplay et des passerelles entre code, fun et direction artistique prennent forme dans le Lab."
        },
        {
          signal: "VIS",
          title: "Animation & Visual Experiments",
          text: "Series animees, clips, pubs courtes et experiences visuelles servent a faire bouger les personnages, les rythmes et les mondes."
        },
        {
          signal: "OSS",
          title: "Open Source & Tools",
          text: "Le cote constructeur de Pawat-Labz passe aussi par des outils maison, des prototypes techniques et une envie de partager des briques utiles."
        },
        {
          signal: "AI",
          title: "AI Assisted Creation",
          text: "L'IA est pensee comme une extension creative : ideation, acceleration de workflow, tests visuels et nouvelles pistes de production."
        },
        {
          signal: "EXP",
          title: "Experimental Projects",
          text: "Interfaces hybrides, concepts web plus libres, croisements inattendus et formats difficiles a classer font partie du coeur vivant du labo."
        }
      ],
      systemStatus: {
        kicker: "SYSTEM STATUS",
        title: "Le laboratoire reste en mouvement.",
        text:
          "Plusieurs chantiers tournent en meme temps : composition, jeu, video, interfaces et outillage. L'ensemble avance comme un systeme vivant plutot que comme une simple vitrine statique.",
        items: [
          {
            label: "Projects in progress",
            value: "Multiple creative threads active"
          },
          {
            label: "Experimental systems online",
            value: "UI, routing and media layers stable"
          },
          {
            label: "New portals opening",
            value: "Fresh sections and new formats in preparation"
          },
          {
            label: "Development active",
            value: "Code, visuals and stories evolving together"
          }
        ]
      },
      support: {
        kicker: "SUPPORT THE LABZ",
        title: "Une future zone de soutien prendra place dans le laboratoire.",
        text:
          "Cette interface preparera plus tard plusieurs formats simples pour soutenir les creations, les outils et l'evolution du labo sans casser l'identite du site.",
        channels: ["Donation", "Support", "Buy me a coffee", "Patreon-like support"],
        buttonLabel: "Support Coming Soon"
      }
    },
    animationHub: {
      introLabel: "Exploration animation",
      introTitle: "Choisis une rubrique pour faire apparaître son focus créatif.",
      introText:
        "Chaque sous-menu peut devenir une porte d'entrée vers une série, une collection de clips, des pubs ou un mini-univers visuel plus détaillé.",
      entryKicker: "SÉRIE ANIMÉE",
      imageLabel: "Image",
      entryButtons: {
        internal: "Ouvrir la fiche",
        external: "Voir la vidéo",
        related: "Voir le lien"
      },
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
          displayMode: "showcase",
          description:
            "Formats promo courts, idées visuelles rapides, humour, gimmicks et messages percutants.",
          entries: [
            {
              title: "Kameomago live magie",
              subtitle:
                "Spot promo  pour mettre en avant un spectacle de magie organisé par Kaméo.",
              image: "assets/images/animation/pubs/kameomago-live-magie.webp",
              imageAlt: "Illustration pub Kameomago live magie",
              typeLabel: "PUB / SPECTACLE",
              context:
                "Publicité pensée pour présenter l'univers du spectacle, attirer l'œil rapidement et créer une ambiance drôle autour de la magie.",
              youtubeId: "QLsLNYFr8cQ",
              externalUrl: "https://www.youtube.com/shorts/QLsLNYFr8cQ",
              externalLabel: "Voir la pub",
              relatedLinks: [
                {
                  label: "Lien artiste / contact",
                  href: "#"
                }
              ]
            },
            {
              title: "Thysha balance Pawat",
              subtitle:
                "Promo humour façon Père Noël pour annoncer une sortie du titre 'malabarz' avec un ton décalé.",
              image: "assets/images/animation/pubs/thysha-balance-pawat.webp",
              imageAlt: "Illustration pub Thysha balance Pawat",
              typeLabel: "PUB / SORTIE MUSICALE",
              context:
                "Cette pub joue la carte de l humour promo pour annoncer une sortie musicale du titre 'malabarz' en collaboration avec Thysha et Nino",
              youtubeId: "XFR2i_YtrjI",
              externalUrl: "https://www.youtube.com/shorts/XFR2i_YtrjI",
              externalLabel: "Voir la pub",
              relatedLinks: [
                {
                  label: "Lien artiste / projet",
                  href: "#"
                }
              ]
            },
            {
              title: "Nino veut son cadeau",
              subtitle:
                "Pub humoristique  pour  un clip manga rap avec une pincée d'humour.",
              image: "assets/images/animation/pubs/malabarz-promo.webp",
              imageAlt: "Illustration pub Malabarz",
              typeLabel: "PUB / CLIP RAP",
              context:
                "Format très court imaginé comme une pub-annonce pour préparer le terrain avant la sortie et la mise en avant du clip 'malabarz'.",
              youtubeId: "LIRF834MB_Q",
              externalUrl: "https://www.youtube.com/shorts/LIRF834MB_Q",
              externalLabel: "Voir la pub",
              relatedLinks: [
                {
                  label: "Lien artiste / projet",
                  href: "#"
                }
              ]
            },
            {
              title: "Pub Pawat TV",
              subtitle:
                "Spot d'auto-promo pour présenter l'identité de Pawat TV et l'univers animation / vidéo du labo.",
              image: "assets/images/animation/pubs/pawat-tv-promo.webp",
              imageAlt: "Illustration pub Pawat TV",
              typeLabel: "AUTO-PROMO",
              context:
                "Auto promo pensée pour affirmer une identité visuelle, poser un ton et annoncer l'univers de création vidéo .",
              youtubeId: "f4qpAZ0iLZQ",
              externalUrl: "https://www.youtube.com/shorts/f4qpAZ0iLZQ",
              externalLabel: "Voir la pub",
              relatedLinks: []
            }   
          ]
        },
        {
          id: "reseaux",
          label: "Réseaux",
          title: "Réseaux",
          description:
            "Canal de diffusion pour les clips, shorts, playlists et signaux publics qui prolongent l'univers animation du labo.",
          featuredLink: {
            platform: "YouTube",
            handle: "@Pawat_TV",
            url: "https://www.youtube.com/@Pawat_TV?sub_confirmation=1",
            summary: "Chaîne principale pour retrouver les clips, contenus vidéo et sorties visuelles signées Pawat_TV.",
            buttonLabel: "Voir la chaîne"
          }
        },

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
          title: "Un laboratoire vivant pensé pour relier mes idées, mes outils et mes univers.",
          text:
            "Pawat Labz n'est pas juste une vitrine. C'est un laboratoire créatif personnel où je rassemble ce que je compose, ce que j'anime, ce que je développe et ce que j'expérimente. L'idée est de faire de chaque rubrique un vrai territoire, avec sa propre ambiance, sa propre logique et une manière bien à elle de raconter ce qu'elle contient.",
          badge: "INTENTION"
        }
      },
      univers: {
        kicker: "PANORAMA",
        title: "Bienvenue dans l'univers Pawat-Labz",
        text: "Cette page résume les grandes rubriques du site et donne une vision plus claire de chaque monde créatif du Labz.",
        badge: "OVERVIEW"
      },
      about: {
        kicker: "SIGNAL 00B",
        title: "ABOUT THE LAB",
        text: "Pawat-Labz is an independent creative laboratory mixing games, music, animation, experimental web experiences and AI-assisted workflows.",
        badge: "ABOUT"
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
        title: "Freestyle / Impro Labz",
        text: "Cette section accueille désormais Impro Labz : un outil interactif de génération de mots et d'ambiance pensé pour l'improvisation, l'entraînement et la performance.",
        badge: "INTERACTIF"
      },
      improLab: {
        kicker: "MODE IMPRO",
        title: "Impro Labz",
        intro: "Impro Labz, entraîne toi pour devenir le roi de l'impro",
        directLabel: "Accès direct",
        start: "Start",
        stop: "Stop",
        loading: "Chargement des banques de mots...",
        ready: "Prêt à lancer la session.",
        error: "Impossible de charger les banques de mots pour le moment.",
        noInstru: "No instru",
        random: "Random",
        repeat: "Repeat",
        playlistTitle: "Playlist instru",
        difficultyTitle: "Difficulté",
        speedTitle: "Vitesse",
        speedSlow: "Lent",
        speedMedium: "Medium",
        speedFast: "Rapide",
        languageTitle: "Langue",
        currentWordLabel: "Mot courant",
        historyTitle: "Derniers mots",
        beatLabel: "Instru",
        beatTypeLabel: "Type",
        beatBpmLabel: "BPM",
        pendingWord: "Appuie sur Start pour lancer le flux.",
        difficulties: {
          "1": "Mots faciles",
          "2": "Mix équilibré",
          "3": "Mots plus longs"
        }
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
      { index: "05A", label: "Impro Labz", path: "/freestyle?focus=impro-labz" },
      { index: "06", label: "Tutorials", path: "/tutos" },
      { index: "00B", label: "ABOUT", path: "/about" }
    ],
    footerMeta: {
      signature: "PAWAT LABZ - living creative lab",
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
    creativeUniverses: [
      {
        path: "/musique",
        index: "01",
        label: "Music",
        title: "Productions, beats and sonic identity",
        text: "Music is one of the main engines behind Pawat Labz. This section gathers my productions, beats, personal projects, collaborations, cyphers and future albums.",
        details: [
          { label: "Projects", path: "/musique?focus=projets" },
          { label: "Clips", path: "/musique?focus=clips" },
          { label: "Feat/Cypher", path: "/musique?focus=feat-cypher" },
          { label: "Beats", path: "/musique?focus=instrus" },
          { label: "Socials", path: "/musique?focus=reseaux" }
        ]
      },
      {
        path: "/animation",
        index: "02",
        label: "Animation",
        title: "Moving images, series and visual worlds",
        text: "Discover my animated creations, cartoons, series concepts, animated clips, short ads and visual experiments here.",
        details: [
          { label: "Animated series", path: "/animation?focus=series-animees" },
          { label: "Animated clips", path: "/animation?focus=clips-animes" },
          { label: "Short ads", path: "/animation?focus=publicites-courtes" },
          { label: "Socials", path: "/animation?focus=reseaux" },
          { label: "Visual worlds", path: "/animation" },
          { label: "Experiments", path: "/animation" },
          { label: "Narrative concepts", path: "/animation" }
        ]
      },
      {
        path: "/dev",
        index: "03",
        label: "Dev",
        title: "Tools, prototypes and technical craft",
        text: "The Dev section shows my builder side. I share web projects, prototypes, custom tools, JavaScript systems, open source experiments and future utilities.",
        details: [
          { label: "Web development", path: "/dev" },
          { label: "Open source tools", path: "/dev" },
          { label: "Phaser tools", path: "/dev" },
          { label: "PC/.NET utilities", path: "/dev" },
          { label: "Technical prototypes", path: "/dev" },
          { label: "GitHub", path: "/dev" }
        ]
      },
      {
        path: "/gaming",
        index: "04",
        label: "Gaming",
        title: "Playable prototypes and interactive experiences",
        text: "This section is designed as a playground. It gathers my small online prototypes, game concepts, Phaser projects, arcade mini-games and future full games.",
        details: [
          { label: "Playable mini-games", path: "/gaming" },
          { label: "Phaser prototypes", path: "/gaming" },
          { label: "Future Play Store games", path: "/gaming" },
          { label: "Downloadable games", path: "/gaming" },
          { label: "Full projects", path: "/gaming" }
        ]
      },
      {
        path: "/freestyle",
        index: "05",
        label: "Freestyle Lab",
        title: "Words, beat, flow - and the improv begins",
        text: "Impro Labz is an interactive tool made for rappers, improvisers and curious minds. Random words appear while a beat plays, with adjustable speed and difficulty.",
        details: [
          { label: "Impro Labz", path: "/freestyle?focus=impro-labz" },
          { label: "Difficulty", path: "/freestyle" },
          { label: "Speed", path: "/freestyle" },
          { label: "Available beats", path: "/freestyle" },
          { label: "Freestyle", path: "/freestyle" },
          { label: "Impro training", path: "/freestyle" }
        ]
      },
      {
        path: "/tutos",
        index: "06",
        label: "Tutorials",
        title: "Foundations, knowledge sharing and future training",
        text: "Here you will find my tutorials, learning foundations, progressive explanations and more complete educational content. The goal is not only to show, but to help people understand, practice and go further.",
        details: [
          { label: "Basics", path: "/tutos" },
          { label: "Tutorials in progress", path: "/tutos" },
          { label: "Methods", path: "/tutos" },
          { label: "Resources", path: "/tutos" },
          { label: "Advanced training", path: "/tutos" }
        ]
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
        "Impro Labz and word generation",
        "Real-time audio and visual interaction",
        "Difficulty modes and stage / lab atmosphere"
      ],
      tutos: [
        "Foundations and progressive explanations",
        "Tutorials currently being scripted",
        "Gateway toward more complete training"
      ]
    },
    musicHub: {
      introLabel: "Music exploration",
      introTitle: "Choose a section to reveal its sonic entry point.",
      introText:
        "The music section is now structured around the same visible gateways: projects, clips, feat/cypher, beats and socials.",
      categoryKicker: "AUDIO SIGNAL",
      entryKicker: "MUSIC CLIP",
      imageLabel: "Image",
      entryButtons: {
        external: "Watch the clip"
      },
      emptyState: "This section can host several clips later on.",
      categories: [
        {
          id: "projets",
          label: "Projects",
          title: "Projects",
          description: "A space dedicated to finished tracks, full sonic construction and projects taking a stronger final shape.",
          highlights: [
            "Finished or evolving tracks",
            "Assembly between voice, instrumental and worldbuilding",
            "Personal releases and pilot projects"
          ]
        },
        {
          id: "clips",
          label: "Clips",
          title: "Clips",
          displayMode: "showcase",
          description: "Music does not stay isolated here: it connects with image, editing and video formats tied to the Lab.",
          highlights: [
            "Direct bridge between sound and image",
            "Music clips and hybrid formats",
            "Natural gateway toward the Animation section"
          ],
          entries: [
            {
              title: "MALABARZ",
              subtitle: "",
              image: "https://img.youtube.com/vi/_RjHrjYH0bs/maxresdefault.jpg",
              imageAlt: "MALABARZ thumbnail",
              typeLabel: "RAP CLIP",
              context: "Artist : Wampawat feat Nino — Prod. : Tysha — Clip : Pawat_TV",
              youtubeId: "_RjHrjYH0bs",
              externalUrl: "https://www.youtube.com/watch?v=_RjHrjYH0bs"
            },
            {
              title: "SANDERS TOUS ENSEMBLE",
              subtitle: "",
              image: "https://img.youtube.com/vi/H9kXElI4U24/maxresdefault.jpg",
              imageAlt: "SANDERS TOUS ENSEMBLE thumbnail",
              typeLabel: "SHORT CLIP — \"TOUS ENSEMBLE\"",
              context: "Artist : SANDERS — Prod. : Pawat_Music x Fanatik1200 — Clip : Pawat_TV",
              youtubeId: "H9kXElI4U24",
              externalUrl: "https://www.youtube.com/watch?v=H9kXElI4U24"
            },
            {
              title: "SHEIN B TOUS ENSEMBLE",
              subtitle: "",
              image: "https://img.youtube.com/vi/SXhbD9AEaGY/maxresdefault.jpg",
              imageAlt: "SHEIN B TOUS ENSEMBLE thumbnail",
              typeLabel: "SHORT CLIP — \"TOUS ENSEMBLE\"",
              context: "Artist : Shein B — Prod. : Pawat_Music x Fanatik1200 — Clip : Pawat_TV",
              youtubeId: "SXhbD9AEaGY",
              externalUrl: "https://www.youtube.com/watch?v=SXhbD9AEaGY"
            },
            {
              title: "KAMEO TOUS ENSEMBLE",
              subtitle: "",
              image: "https://img.youtube.com/vi/JrTGw8cbWj8/maxresdefault.jpg",
              imageAlt: "KAMEO TOUS ENSEMBLE thumbnail",
              typeLabel: "SHORT CLIP — \"TOUS ENSEMBLE\"",
              context: "Artist : KAMEO — Prod. : Pawat_Music x Fanatik1200 — Clip : Pawat_TV",
              youtubeId: "JrTGw8cbWj8",
              externalUrl: "https://www.youtube.com/watch?v=JrTGw8cbWj8"
            },
            {
              title: "WAMPAWAT TOUS ENSEMBLE",
              subtitle: "",
              image: "https://img.youtube.com/vi/-Gq8e5jIKWk/maxresdefault.jpg",
              imageAlt: "WAMPAWAT TOUS ENSEMBLE thumbnail",
              typeLabel: "SHORT CLIP — \"TOUS ENSEMBLE\"",
              context: "Artist : Wampawat — Prod. : Pawat_Music x Fanatik1200 — Clip : Pawat_TV",
              youtubeId: "-Gq8e5jIKWk",
              externalUrl: "https://www.youtube.com/watch?v=-Gq8e5jIKWk"
            },
            {
              title: "BGE TOUS ENSEMBLE",
              subtitle: "",
              image: "https://img.youtube.com/vi/4yc6VFMwRME/maxresdefault.jpg",
              imageAlt: "BGE TOUS ENSEMBLE thumbnail",
              typeLabel: "SHORT CLIP — \"TOUS ENSEMBLE\"",
              context: "Artist : BGE — Prod. : Pawat_Music x Fanatik1200 — Clip : Pawat_TV",
              youtubeId: "4yc6VFMwRME",
              externalUrl: "https://www.youtube.com/watch?v=4yc6VFMwRME"
            },
            {
              title: "OLD SCHOOL CYPHER",
              subtitle: "",
              image: "https://img.youtube.com/vi/fNPp0caMptc/maxresdefault.jpg",
              imageAlt: "OLD SCHOOL CYPHER thumbnail",
              typeLabel: "EXPERIMENTAL ANIMATED MUSIC CLIP",
              context: "Artists : Process lvx, BGE, Malro, Kameo, Inconiko, Pawat — Prod. : Pawat_Music — Clip : Pawat_TV",
              youtubeId: "fNPp0caMptc",
              externalUrl: "https://www.youtube.com/watch?v=fNPp0caMptc"
            }
          ]
        },
        {
          id: "feat-cypher",
          label: "Feat/Cypher",
          title: "Feat/Cypher",
          description: "Collaborations, cyphers, shared energy and collective moments that expand the Lab's field.",
          displayMode: "library",
          library: {
            introLabel: "COLLECTIVE ARCHIVES",
            introTitle: "Cyphers, feats and open folders",
            introText:
              "This zone gathers the Lab's rap encounters: collective formats, vocal collaborations and evolving folders such as La RE-7.",
            statusLabel: "AUDIO ONLINE",
            subsectionLabel: "Channels",
            sectionKicker: "Collective signal",
            dossierKicker: "Cypher folder",
            trackKicker: "Audio signal",
            trackButtonMore: "Read more",
            trackButtonLess: "Close",
            audioLabel: "Playback",
            artistsLabel: "Artists",
            beatmakerLabel: "Beatmaker",
            folders: [
              {
                id: "la-re-7",
                label: "La RE-7",
                title: "La RE-7",
                text: "A cypher compilation currently being mixed, imagined as a separate archive inside the Lab. Volume I is already in place and more signals can follow.",
                entries: [
                  {
                    title: "La RE-7 Cypher I",
                    description:
                      "First signal from the La RE-7 compilation, built like a sharper, more archival cypher capsule.",
                    artists: "K7_Z'onde, Wampawat, Inconiko, Sanders, Arco",
                    beatmaker: "TBS",
                    audioSrc: "assets/audio/music/cyphers/La RE-7 Volume 1/La RE-7 Cypher I.m4a"
                  }
                ]
              }
            ],
            subsections: [
              {
                id: "cyphers",
                label: "Cyphers",
                title: "Cyphers",
                description: "Collective formats, raw energy, large voice gatherings and rap archives built around the Lab.",
                entries: [
                  {
                    title: "HipHop is not dead",
                    description:
                      "A rap cypher organised by Caractere Prod bringing together 14 MCs around a raw, collective hip-hop energy.",
                    artists:
                      "Pilot en Flamme, Pawat_Music, Inconiko, IWH, Saika, Lezo Miska, Nino, Sanders, Osah, Thanos, Lorenben, Thysha, Arco, Kmax l'alchimiste",
                    beatmaker: "Caractere Prod",
                    audioSrc: "assets/audio/music/cyphers/HipHop is not dead.m4a"
                  },
                  {
                    title: "OLD SCHOOL CYPHER",
                    description:
                      "A rap cypher organised by Pawat_Music with an old school color, a tighter cast and a raw session feel.",
                    artists: "Process Lvx, BGE (Grosse equipe), Malro, Kameo, Inconiko, Wampawat",
                    beatmaker: "Pawat_Music",
                    audioSrc: "assets/audio/music/cyphers/OLD SCHOOL CYPHER.m4a"
                  },
                  {
                    title: "Tous_ensemble",
                    description:
                      "A huge rap cypher organised by Pawat_Music gathering 31 artists as a large meeting point for voices, moods and connections.",
                    artists:
                      "BGE (Grosse equipe), Inconiko, Thanos, Process Lvx, Jiji, Sanders, Malro, La Chapka, El Tchicko, Arco, Wampawat, K7_Z'onde, Music4800, Vega de la Suite, Ejay, Shein B, Youss le Prolifik, HSN, Una Sola, Nessa Nyams, Kameo, Nozey, Nino, Thysha, Soso La Hyene, Adil Serafin, Zanatik, Soulalys, S2G, La Galeci, Pilot en Flamme, Spy Cam, Oktay",
                    beatmaker: "Pawat_Music x Fanatik 12000",
                    audioSrc: "assets/audio/music/cyphers/Tous_ensemble.m4a"
                  }
                ]
              },
              {
                id: "feats",
                label: "Feats",
                title: "Feats",
                description: "Voice crossovers, invited artists and more targeted rap tracks ranging from ego-trip to old school tones.",
                entries: [
                  {
                    title: "Indesirables",
                    description:
                      "An old school rap track carried by Arco, Wampawat and Malro in a direct, no-frills approach.",
                    artists: "Arco, Wampawat, Malro",
                    beatmaker: "Pawat_Music",
                    audioSrc: "assets/audio/music/feats/Indésirables feat Arco et Malro.m4a"
                  },
                  {
                    title: "Malabarz",
                    description:
                      "An ego-driven rap cut built on attitude and impact, with Nino and Wampawat over a Thysha beat.",
                    artists: "Nino, Wampawat",
                    beatmaker: "Thysha",
                    audioSrc: "assets/audio/music/feats/Malabarz feat Nino.m4a"
                  },
                  {
                    title: "N'oublie jamais",
                    description:
                      "A conscious boom bap track about all the important things we forget, with Wampawat, Soso La Hyene and Inconiko over a Darkness Prod beat.",
                    artists: "Wampawat, Soso La Hyene, Inconiko",
                    beatmaker: "Darkness Prod",
                    audioSrc: "assets/audio/music/feats/N'oublie Jamais Feat inconiko et Soso la hyène.m4a"
                  }
                ]
              }
            ]
          }
        },
        {
          id: "instrus",
          label: "Beats",
          title: "Beats",
          description: "The sonic base of the laboratory: beats, textures, atmospheres and playgrounds for future voices.",
          displayMode: "library",
          library: {
            introLabel: "INSTRUMENTAL BANK",
            introTitle: "Beats, moods and creative playgrounds",
            introText:
              "This zone gathers the Lab's instrumentals: boom bap foundations, stronger atmospheres, atypical textures and supports built for future voices.",
            statusLabel: "BEATS ONLINE",
            subsectionLabel: "Families",
            sectionKicker: "Instrumental signal",
            trackKicker: "Beat",
            trackButtonMore: "Read more",
            trackButtonLess: "Close",
            audioLabel: "Playback",
            artistsLabel: "Type",
            beatmakerLabel: "Beatmaker",
            folders: [],
            subsections: [
              {
                id: "boombap",
                label: "Boom bap",
                title: "Boom bap",
                description: "In-house boom bap textures designed for freestyle, rap writing and stronger atmosphere work.",
                entries: [
                  {
                    title: "Gotham City",
                    description:
                      "A 93 BPM boom bap instrumental built like a dark, urban freestyle beat with a raw session energy.",
                    artists: "Freestyle beat / 93 BPM boom bap",
                    beatmaker: "Pawat_Music",
                    audioSrc: "assets/audio/music/instrus/boombap/gotham city (93BPM).m4a"
                  },
                  {
                    title: "Yakuza V2",
                    description:
                      "A 98.8 BPM boom bap instrumental shaped around an atypical oriental harp mood, built for a more narrative 3 x 16 format.",
                    artists: "Atypical oriental harp / 98.8 BPM boom bap / 3 x 16",
                    beatmaker: "Pawat_Music",
                    audioSrc: "assets/audio/music/instrus/boombap/yakuza v2 (98.8 BPM).m4a"
                  }
                ]
              }
            ]
          }
        },
        {
          id: "reseaux",
          label: "Socials",
          title: "Socials",
          description: "A distribution channel for releases, public presence and visible connections around the musical side of Pawat-Labz.",
          highlights: [
            "Visibility for the lab's music content",
            "Bridge toward clips, announcements and short formats",
            "An evolving public layer around the projects"
          ],
          featuredLink: {
            platform: "YouTube",
            handle: "@Pawat_Music",
            url: "https://www.youtube.com/@Pawat_Music?sub_confirmation=1",
            summary: "Main channel for tracks, clips, releases and future musical signals coming from the Lab.",
            buttonLabel: "Open channel"
          }
        }
      ]
    },
    aboutLab: {
      overview: {
        kicker: "LAB ENTRY",
        title: "A transversal zone designed to reveal how the laboratory actually breathes.",
        text:
          "ABOUT opens a wider access point into the living logic of Pawat-Labz, where music, games, animation, tools, AI and experimentation connect inside one creative system."
      },
      signals: [
        {
          label: "Creative core",
          value: "Music + visuals + code",
          note: "Each discipline feeds the others and helps new formats emerge."
        },
        {
          label: "Lab direction",
          value: "Hybrid creative systems",
          note: "The goal is not to isolate sections, but to let them talk to each other."
        },
        {
          label: "Production mode",
          value: "Independent and evolving",
          note: "The lab grows project by project, prototype after prototype."
        },
        {
          label: "Open channels",
          value: "Web / video / sound / play",
          note: "Any idea can become an interface, a clip, a tool or a playground."
        }
      ],
      sections: [
        {
          signal: "SND",
          title: "Music Production",
          text: "Music production, beats, sonic identity, releases, rap energy and more experimental textures all intersect here."
        },
        {
          signal: "GME",
          title: "Game Development",
          text: "Playable prototypes, gameplay ideas and bridges between code, fun and art direction take shape inside the Lab."
        },
        {
          signal: "VIS",
          title: "Animation & Visual Experiments",
          text: "Animated series, clips, short ads and visual experiments help move characters, rhythms and worlds."
        },
        {
          signal: "OSS",
          title: "Open Source & Tools",
          text: "The builder side of Pawat-Labz also lives through custom tools, technical prototypes and a desire to share useful building blocks."
        },
        {
          signal: "AI",
          title: "AI Assisted Creation",
          text: "AI is treated like a creative extension for ideation, workflow acceleration, visual tests and fresh production directions."
        },
        {
          signal: "EXP",
          title: "Experimental Projects",
          text: "Hybrid interfaces, freer web concepts, unexpected crossovers and hard-to-classify formats belong to the living core of the lab."
        }
      ],
      systemStatus: {
        kicker: "SYSTEM STATUS",
        title: "The laboratory stays in motion.",
        text:
          "Several construction threads run in parallel: composition, games, video, interfaces and tooling. The whole thing moves like a living system rather than a static showcase.",
        items: [
          {
            label: "Projects in progress",
            value: "Multiple creative threads active"
          },
          {
            label: "Experimental systems online",
            value: "UI, routing and media layers stable"
          },
          {
            label: "New portals opening",
            value: "Fresh sections and new formats in preparation"
          },
          {
            label: "Development active",
            value: "Code, visuals and stories evolving together"
          }
        ]
      },
      support: {
        kicker: "SUPPORT THE LABZ",
        title: "A future support zone is being prepared inside the laboratory.",
        text:
          "This interface will later host simple ways to support the creations, tools and evolution of the Lab without breaking the identity of the site.",
        channels: ["Donation", "Support", "Buy me a coffee", "Patreon-like support"],
        buttonLabel: "Support Coming Soon"
      }
    },
    animationHub: {
      introLabel: "Animation focus",
      introTitle: "Choose a sub-section to reveal its creative focus.",
      introText:
        "Each submenu can become a doorway toward a series, a clip collection, short ads or a more detailed visual universe.",
      entryKicker: "ANIMATED SERIES",
      imageLabel: "Image",
      entryButtons: {
        internal: "Open project",
        external: "Watch video",
        related: "Open link"
      },
      categories: [
        {
          id: "series-animees",
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
          id: "clips-animes",
          label: "Animated clips",
          title: "Animated clips",
          description:
            "Visual clips, musical energy, cartoon editing and hybrid ideas between sound and motion.",
          entries: []
        },
        {
          id: "publicites-courtes",
          label: "Short ads",
          title: "Short ads",
          displayMode: "showcase",
          description:
            "Short promo formats, quick visual ideas, humor, gimmicks and punchy messages.",
          entries: [
            {
              title: "Kameomago live magie",
              subtitle:
                "Promo spot created to highlight a magic show organized by Kaméo.",
              image: "assets/images/animation/pubs/kameomago-live-magie.webp",
              imageAlt: "Kameomago live magic ad illustration",
              typeLabel: "AD / LIVE SHOW",
              context:
                "An ad designed to present the spirit of the show, catch the eye quickly and build a playful atmosphere around the magic performance.",
              youtubeId: "QLsLNYFr8cQ",
              externalUrl: "https://www.youtube.com/shorts/QLsLNYFr8cQ",
              externalLabel: "Watch the ad",
              relatedLinks: [
                {
                  label: "Artist / contact link",
                  href: "#"
                }
              ]
            },
            {
              title: "Thysha balance Pawat",
              subtitle:
                "A Santa-style comedy promo used to announce the release of the track 'Malabarz' with an offbeat tone.",
              image: "assets/images/animation/pubs/thysha-balance-pawat.webp",
              imageAlt: "Thysha drops Pawat ad illustration",
              typeLabel: "AD / MUSIC RELEASE",
              context:
                "This ad leans into promo humor to announce the musical release of the track 'Malabarz' in collaboration with Thysha and Nino.",
              youtubeId: "XFR2i_YtrjI",
              externalUrl: "https://www.youtube.com/shorts/XFR2i_YtrjI",
              externalLabel: "Watch the ad",
              relatedLinks: [
                {
                  label: "Artist / project link",
                  href: "#"
                }
              ]
            },
            {
              title: "Nino veut son cadeau",
              subtitle:
                "A humorous promo for a manga rap clip with a playful touch of comedy.",
              image: "assets/images/animation/pubs/malabarz-promo.webp",
              imageAlt: "Malabarz ad illustration",
              typeLabel: "AD / RAP CLIP",
              context:
                "A very short format imagined like a promo trailer to prepare the ground before the release and spotlight of the clip 'Malabarz'.",
              youtubeId: "LIRF834MB_Q",
              externalUrl: "https://www.youtube.com/shorts/LIRF834MB_Q",
              externalLabel: "Watch the ad",
              relatedLinks: [
                {
                  label: "Artist / project link",
                  href: "#"
                }
              ]
            },
            {
              title: "Pawat TV promo",
              subtitle:
                "A self-promo spot presenting the identity of Pawat TV and the animation / video side of the Lab.",
              image: "assets/images/animation/pubs/pawat-tv-promo.webp",
              imageAlt: "Pawat TV promo illustration",
              typeLabel: "SELF PROMO",
              context:
                "A self-promo piece built to assert a visual identity, set a tone and introduce the video creation universe.",
              youtubeId: "f4qpAZ0iLZQ",
              externalUrl: "https://www.youtube.com/shorts/f4qpAZ0iLZQ",
              externalLabel: "Watch the ad",
              relatedLinks: []
            }
          ]
        },
        {
          id: "reseaux",
          label: "Socials",
          title: "Socials",
          description:
            "Broadcast channel for clips, shorts, playlists and public signals extending the Lab's animation universe.",
          featuredLink: {
            platform: "YouTube",
            handle: "@Pawat_TV",
            url: "https://www.youtube.com/@Pawat_TV?sub_confirmation=1",
            summary: "Main channel to find clips, video content and visual releases published through Pawat_TV.",
            buttonLabel: "Open the channel"
          }
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
          title: "A living lab designed to connect my ideas, my tools and my creative worlds.",
          text:
            "Pawat Labz is not just a showcase website. It is a personal creative lab where I bring together what I compose, animate, build and experiment with. The goal is for each section to feel like a real territory, with its own atmosphere, its own internal logic and its own way of telling what lives inside it.",
          badge: "INTENTION"
        }
      },
      univers: {
        kicker: "PANORAMA",
        title: "Welcome to the Pawat-Labz universe",
        text: "This page sums up the main sections of the site and gives a clearer view of each creative world inside the Labz.",
        badge: "OVERVIEW"
      },
      about: {
        kicker: "SIGNAL 00B",
        title: "ABOUT THE LAB",
        text: "Pawat-Labz is an independent creative laboratory mixing games, music, animation, experimental web experiences and AI-assisted workflows.",
        badge: "ABOUT"
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
        title: "Freestyle / Impro Labz",
        text: "This section now hosts Impro Labz: an interactive tool for word generation and atmosphere, designed for improvisation, training and performance.",
        badge: "INTERACTIVE"
      },
      improLab: {
        kicker: "IMPRO MODE",
        title: "Impro Labz",
        intro:
          "Impro Labz throws timed words on screen to train improvisation, freestyle reflexes and stage fluency while staying inside the Lab's identity.",
        directLabel: "Direct access",
        start: "Start",
        stop: "Stop",
        loading: "Loading word banks...",
        ready: "Ready to launch the session.",
        error: "Unable to load the word banks right now.",
        noInstru: "No beat",
        random: "Random",
        repeat: "Repeat",
        playlistTitle: "Beat playlist",
        difficultyTitle: "Difficulty",
        speedTitle: "Speed",
        speedSlow: "Slow",
        speedMedium: "Medium",
        speedFast: "Fast",
        languageTitle: "Language",
        currentWordLabel: "Current word",
        historyTitle: "Recent words",
        beatLabel: "Beat",
        beatTypeLabel: "Type",
        beatBpmLabel: "BPM",
        pendingWord: "Press Start to launch the flow.",
        difficulties: {
          "1": "Easy words",
          "2": "Balanced mix",
          "3": "Longer words"
        }
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
export const getAuthPreview = () => getLocaleContent().authPreview;
export const getCreativeUniverses = () => getLocaleContent().creativeUniverses;
export const getHomeManifesto = () => getLocaleContent().homeManifesto;
export const getPageHighlights = () => getLocaleContent().pageHighlights;
export const getPageContent = (pageKey) => getLocaleContent().pageContent[pageKey];
export const getImproLabContent = () => getLocaleContent().pageContent.improLab;
export const getAnimationHub = () => getLocaleContent().animationHub;
export const getAnimationSeries = (seriesKey) => getLocaleContent().animationSeries[seriesKey];
export const getMusicHub = () => getLocaleContent().musicHub;
export const getAboutLab = () => getLocaleContent().aboutLab;

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
