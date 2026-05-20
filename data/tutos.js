export const tutosContent = {
  fr: {
    tutos: {
            kicker: "TUTOS",
            title: "Bases, transmission et formations à développer",
            text: "Cette zone rassemble les tutos, bases, explications progressives et contenus de transmission du labo. L'idée n'est pas seulement de montrer, mais aussi d'aider à comprendre, pratiquer et aller plus loin.",
            badge: "LEARNING"
          },
    pageHighlights: {
      tutos: [
            "Partage de méthodes, astuces et ressources"
          ]
    },
    tutorialHub: {
        introLabel: "ATELIER TUTOS",
        introTitle: "Des rubriques claires, des sous-rubriques ciblées, et une fiche détaillée seulement quand tu l'ouvres.",
        introText:
          "La section Tutos suit l'esprit des autres univers du site : une entrée lisible, des cartes propres, puis un panneau de lecture qui s'active quand une ressource précise est choisie.",
        imageLabel: "Vignette",
        sectionLabel: "Rubrique",
        subtopicsLabel: "Sous-rubriques",
        placeholderTitle: "Choisis une sous-rubrique pour afficher sa fiche détaillée.",
        placeholderText:
          "Le panneau de droite sert de lecteur pédagogique. Il s'ouvre uniquement quand un tuto actif est sélectionné.",
        openLabel: "Voir",
        inactiveLabel: "Preparation",
        detailLabel: "FICHE DETAILLEE",
        resourcesTitle: "Liens utiles",
        projectTreeTitle: "Arborescence conseillée",
        sections: [
          {
            id: "game-making",
            label: "Game Making",
            title: "Frameworks, prototypes et bases de gameplay",
            description:
              "Une zone pensée pour le jeu navigateur, la logique de prototype et les briques techniques réutilisables du Lab.",
            topics: [
                {
                  id: "phaser-local-install",
                  label: "Installer Phaser en local dans vos projets",
                  description:
                    "Installer Phaser localement, sans npm, pour démarrer un projet de jeu navigateur simple et propre.",
                  status: "Actif",
                  available: true,
                  image: "assets/images/tutos/game-making/phaser-local-install.webp",
                  imageAlt: "Vignette Phaser local",
                  detail: {
                    kicker: "Game Making / Phaser",
                    title: "Installer Phaser en local dans vos projets",
                    summary:
                      "Un point de départ simple pour installer Phaser en local, créer un canvas de jeu et afficher un premier Hello World dans ton propre projet navigateur.",
                    presentationTitle: "Présentation de Phaser",
                    presentation: [
                      "Phaser est un framework JavaScript spécialisé dans le développement de jeux 2D pour le web. Il permet de créer facilement des jeux jouables dans un navigateur, sur ordinateur comme sur mobile.",
                      "Il est apprécié parce qu'il réunit dans un même outil tout ce qu'il faut pour commencer : gestion des scènes, affichage, clavier, souris, tactile, chargement d'images, sons et logique de gameplay."
                    ],
                    creditsTitle: "Équipe, but du framework et petite histoire",
                    credits: [
                      "Phaser a été créé par Richard Davey et continue d'évoluer grâce à une communauté open source active. Son but est de rendre le développement de jeux HTML5 plus simple, plus accessible et plus rapide à mettre en place.",
                      "Au fil des années, Phaser est devenu une référence pour les mini-jeux navigateur, les prototypes arcade, les projets éducatifs et les jeux indépendants accessibles directement sur le web."
                    ],
                    installTitle: "Récupération du build et installation dans le projet",
                    installIntro: [
                      "Dans ce tuto, on ne passe pas par npm. L'idée est d'utiliser Phaser en copie locale pour que tu puisses lancer ton projet facilement, même avec une structure simple.",
                      "Cette méthode est parfaite pour un premier jeu navigateur, un prototype personnel ou un projet pédagogique où tu veux comprendre clairement ce que tu ajoutes dans ton dossier.",
                      "L'objectif est d'arriver rapidement à une page HTML, un canvas de jeu visible et un Hello World affiché par Phaser."
                    ],
                    steps: [
                      {
                        title: "1. Télécharger Phaser depuis la source officielle",
                        text:
                          "Va sur le site officiel de Phaser ou sur la release GitHub de la version que tu veux utiliser, puis récupère les fichiers de build du framework."
                      },
                      {
                        title: "2. Garder les fichiers essentiels",
                        text:
                          "Pour une installation simple, garde `phaser.js` et `phaser.min.js`. Ces fichiers suffisent pour charger Phaser directement dans ton projet sans dépendance npm."
                      },
                      {
                        title: "3. Créer un dossier clair dans ton projet",
                        text:
                          "Range Phaser dans un dossier facile à retrouver, par exemple `vendor/phaser/` ou `assets/phaser/`. Le plus important est d'avoir une structure propre et compréhensible."
                      },
                      {
                        title: "4. Préparer une page HTML de test",
                        text:
                          "Crée un fichier `index.html` et ajoute-y un conteneur comme `<div id=\"game\"></div>`, puis une balise `<script>` qui charge ton fichier Phaser local. C'est la base la plus simple pour vérifier que tout fonctionne."
                      },
                      {
                        title: "5. Créer un premier canvas Phaser",
                        text:
                          "Crée ensuite un fichier comme `main.js` ou `game.js` dans lequel tu initialises une instance Phaser avec une configuration simple : largeur, hauteur, parent `game`, scène de départ et couleur de fond. Phaser injectera alors automatiquement son canvas dans le conteneur."
                      },
                      {
                        title: "6. Afficher un Hello World",
                        text:
                          "Dans ta scène de base, utilise par exemple `this.add.text(...)` pour afficher un message comme `Hello World` au centre du jeu. C'est le test le plus simple pour confirmer que ton canvas, ta scène et le rendu Phaser fonctionnent bien."
                      },
                      {
                        title: "7. Lancer un premier test local",
                        text:
                          "Ouvre ton projet avec un petit serveur local, vérifie que Phaser se charge bien, puis confirme que ton canvas s'affiche avec ton Hello World avant de construire ton vrai gameplay."
                      }
                    ],
                    localPathLabel: "Chemin local d'exemple",
                    localPath: "vendor/phaser/phaser.min.js",
                    projectTree: `mon-jeu/\n  index.html\n  main.js\n  assets/\n    images/\n    audio/\n  vendor/\n    phaser/\n      phaser.js\n      phaser.min.js\n\nindex.html\n  <div id="game"></div>\n\nmain.js\n  new Phaser.Game(...)\n  this.add.text(160, 120, "Hello World", ...)`,
                    resources: [
                      {
                        label: "Téléchargement Phaser 3",
                      url: "https://phaser.io/download/phaser3"
                    },
                    {
                      label: "Guide officiel d'installation",
                      url: "https://docs.phaser.io/phaser/getting-started/installation"
                    },
                    {
                      label: "Documentation officielle Phaser",
                      url: "https://docs.phaser.io/"
                    },
                    {
                      label: "Release GitHub v3.90.0",
                      url: "https://github.com/phaserjs/phaser/releases/tag/v3.90.0"
                    }
                    ],
                    closingTitle: "Remerciements et mot de fin",
                    closing: [
                      "Merci aux développeurs open source qui font vivre Phaser et documentent son écosystème. Leur travail permet à beaucoup de créateurs de commencer plus facilement dans le jeu web.",
                      "J'espère que ce tuto t'aidera à lancer ton propre projet dans de bonnes conditions. Bon courage pour ton jeu, amuse-toi bien avec Phaser, et si cette fiche t'a été utile, pense à la partager."
                    ]
                  }
                }
            ]
          }
        ]
      }
  },
  en: {
    tutos: {
            kicker: "TUTORIALS",
            title: "Foundations, knowledge sharing and future training",
            text: "This zone gathers the Lab's tutorials, basics, progressive explanations and deeper educational content. The goal is not only to show, but also to help people understand, practice and go further.",
            badge: "LEARNING"
          },
    pageHighlights: {
      tutos: [
            "Foundations and progressive explanations",
            "Tutorials currently being scripted",
            "Gateway toward more complete training"
          ]
    },
    tutorialHub: {
        introLabel: "TUTORIAL WORKSHOP",
        introTitle: "Clear sections, focused subtopics, and a detailed sheet only when you open it.",
        introText:
          "The Tutorials section follows the same spirit as the other site worlds: a readable entry point, clean cards, then a reading panel that activates when a specific resource is chosen.",
        imageLabel: "Thumbnail",
        sectionLabel: "Section",
        subtopicsLabel: "Subtopics",
        placeholderTitle: "Choose a subtopic to display its detailed sheet.",
        placeholderText:
          "The right panel acts like a teaching reader. It opens only when an active tutorial is selected.",
        openLabel: "View",
        inactiveLabel: "Preparation",
        detailLabel: "DETAILED SHEET",
        resourcesTitle: "Useful links",
        projectTreeTitle: "Suggested project tree",
        sections: [
          {
            id: "game-making",
            label: "Game Making",
            title: "Frameworks, prototypes and gameplay foundations",
            description:
              "A space built for browser games, prototype logic and reusable technical building blocks across the Lab.",
            topics: [
                {
                  id: "phaser-local-install",
                  label: "Install Phaser locally in your projects",
                  description:
                    "Install Phaser locally, without npm, to start a clean and simple browser game project.",
                  status: "Active",
                  available: true,
                  image: "assets/images/tutos/game-making/phaser-local-install.webp",
                  imageAlt: "Phaser local thumbnail",
                  detail: {
                    kicker: "Game Making / Phaser",
                    title: "Install Phaser locally in your projects",
                    summary:
                      "A simple starting point to install Phaser locally, create a game canvas and display a first Hello World in your own browser game project.",
                    presentationTitle: "What Phaser is",
                    presentation: [
                      "Phaser is a JavaScript framework made for 2D web game development. It helps you create games that run directly in the browser, on desktop and mobile.",
                      "It is popular because it gives beginners and indie creators many essential tools in one place: scenes, rendering, keyboard, mouse, touch input, asset loading, audio and gameplay structure."
                    ],
                    creditsTitle: "Team, framework purpose and short history",
                    credits: [
                      "Phaser was created by Richard Davey and keeps growing thanks to an active open-source community. Its main goal is to make HTML5 game development easier, faster and more accessible.",
                      "Over the years, Phaser became a strong reference for browser mini-games, arcade prototypes, educational projects and independent games that run directly on the web."
                    ],
                    installTitle: "Getting the build and installing it inside the project",
                    installIntro: [
                      "In this tutorial, we do not use npm. The idea is to keep a local copy of Phaser inside your project so the setup stays simple and easy to understand.",
                      "This approach is great for a first browser game, a personal prototype or a learning project where you want to clearly see what files are used.",
                      "The short-term goal is simple: reach a working HTML page, a visible game canvas and a Hello World rendered by Phaser."
                    ],
                    steps: [
                      {
                        title: "1. Download Phaser from the official source",
                        text:
                          "Go to the official Phaser website or the GitHub release page for the version you want, then download the framework build files."
                      },
                      {
                        title: "2. Keep the essential files",
                        text:
                          "For a simple setup, keep `phaser.js` and `phaser.min.js`. Those files are enough to load Phaser directly into your project without npm."
                      },
                      {
                        title: "3. Create a clean folder structure",
                        text:
                          "Place Phaser in a clear folder such as `vendor/phaser/` or `assets/phaser/`. What matters most is using a structure that stays easy to read and maintain."
                      },
                      {
                        title: "4. Prepare a simple test HTML page",
                        text:
                          "Create an `index.html` file with a game container such as `<div id=\"game\"></div>`, then add a `<script>` tag that loads your local Phaser file. This is the easiest way to confirm the framework is correctly installed."
                      },
                      {
                        title: "5. Create your first Phaser canvas",
                        text:
                          "Create a file such as `main.js` or `game.js` where you initialize Phaser with a basic config: width, height, the `game` parent container, a starting scene and a background color. Phaser will then inject its canvas into your page."
                      },
                      {
                        title: "6. Display a Hello World",
                        text:
                          "Inside your base scene, use something like `this.add.text(...)` to display `Hello World` in the middle of the game. This is the fastest way to confirm that the canvas, the scene and the Phaser renderer all work together."
                      },
                      {
                        title: "7. Run a first local test",
                        text:
                          "Open the project with a small local server, confirm that Phaser loads correctly, then make sure your canvas and Hello World appear before moving on to actual gameplay."
                      }
                    ],
                    localPathLabel: "Example local path",
                    localPath: "vendor/phaser/phaser.min.js",
                    projectTree: `my-game/\n  index.html\n  main.js\n  assets/\n    images/\n    audio/\n  vendor/\n    phaser/\n      phaser.js\n      phaser.min.js\n\nindex.html\n  <div id="game"></div>\n\nmain.js\n  new Phaser.Game(...)\n  this.add.text(160, 120, "Hello World", ...)`,
                    resources: [
                      {
                        label: "Phaser 3 downloads",
                      url: "https://phaser.io/download/phaser3"
                    },
                    {
                      label: "Official installation guide",
                      url: "https://docs.phaser.io/phaser/getting-started/installation"
                    },
                    {
                      label: "Official Phaser documentation",
                      url: "https://docs.phaser.io/"
                    },
                    {
                      label: "GitHub release v3.90.0",
                      url: "https://github.com/phaserjs/phaser/releases/tag/v3.90.0"
                    }
                    ],
                    closingTitle: "Thanks and final note",
                    closing: [
                      "Thanks to the open-source developers who keep Phaser alive and document its ecosystem. Their work makes web game creation much easier to access for newcomers.",
                      "I hope this tutorial helps you launch your own project with confidence. Good luck with your game, enjoy building with Phaser, and if this sheet helped you, feel free to share it."
                    ]
                  }
                }
            ]
          }
        ]
      }
  }
};
