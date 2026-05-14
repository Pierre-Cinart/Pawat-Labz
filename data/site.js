/**
 * Toutes les donnees partagees par plusieurs fichiers sont centralisees ici.
 *
 * Avantage :
 * - on evite de dupliquer les labels et textes dans plusieurs modules
 * - le header, les pages et le routeur peuvent lire la meme source de verite
 * - faire evoluer le contenu devient plus simple ensuite
 */

export const siteMeta = {
  version: "v0.1.0",
  eyebrow: "LABORATOIRE CREATIF · RETRO FUTURE INTERFACE",
  titlePrimary: "PAWAT",
  titleAccent: "LABZ",
  tagline: "Musique · Animation · Dev · Gaming · Experiences interactives",
  description:
    "Base initiale du site Pawat-Labz. Cette premiere version pose un shell visuel fort, un routeur hash SPA maison et des pages fondation prêtes a etre developpees pas a pas."
};

export const navigationItems = [
  { index: "00", label: "Accueil", path: "/" },
  { index: "01", label: "Musique", path: "/musique" },
  { index: "02", label: "Animation", path: "/animation" },
  { index: "03", label: "Dev", path: "/dev" },
  { index: "04", label: "Gaming", path: "/gaming" },
  { index: "05", label: "Freestyle", path: "/freestyle" }
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "YouTube", href: "https://youtube.com/" },
  { label: "Contact", href: "mailto:contact@pawat-labz.dev" }
];

/**
 * Cartes de structure projet.
 *
 * Elles servent a expliquer, des le premier commit, quel est le role de chaque
 * bloc d'architecture technique.
 */
export const foundationBlocks = [
  {
    title: "Router",
    text: "La navigation SPA hash est centralisee et prete pour accueillir des pages plus riches sans recharger tout le site."
  },
  {
    title: "Pages",
    text: "Chaque univers du site possede deja sa vue dediee, ce qui permet de construire les sections une par une sans casser l'ensemble."
  },
  {
    title: "UI",
    text: "Les premiers composants reutilisables sont poses pour garder une interface coherente a mesure que le projet grossit."
  }
];

/**
 * Les highlights servent surtout a nourrir les pages stubs du premier commit.
 * Plus tard, ils pourront etre remplaces par de vraies donnees venant de fichiers
 * dedies, d'une API ou d'un CMS.
 */
export const pageHighlights = {
  home: [
    "Architecture front-end maison avec navigation SPA stable",
    "Direction visuelle inspiree de la roadmap Pawat Labz",
    "Base modulaire prete pour evoluer section par section"
  ],
  musique: [
    "Catalogue audio et instrus",
    "Lecteur custom et mini-player persistant",
    "Sections clips, projets perso et sorties"
  ],
  animation: [
    "Showreels, clips animes et publicites",
    "Galeries immersives et lightbox video",
    "Sous-sections serie, clip, pub et experimental"
  ],
  dev: [
    "Portfolio technique et outils open source",
    "Grilles projets, filtres et demonstrations",
    "Section services et univers developpeur"
  ],
  gaming: [
    "Prototypes jouables et jeux complets",
    "Embeds interactifs et CTA de telechargement",
    "Presentation arcade retro-futuriste"
  ],
  freestyle: [
    "Impro lab et generation de mots",
    "Interaction audio et visuelle en temps reel",
    "Modes de difficulte et ambiance scene / labo"
  ]
};
