# Pawat-Labz

Pawat-Labz est un laboratoire creatif numerique ou musique, animation, developpement, gaming, freestyle et tutos se connectent.

Le site n'est pas un portfolio classique : il fonctionne comme un hub vivant, avec des portails vers des creations, des prototypes, des outils, des experiences et des contenus de transmission.

## Ce que le site presente

- des creations musicales et audiovisuelles
- des clips, series et formats animation
- des outils, prototypes et experiences de developpement
- des prototypes jouables et futurs web games
- des tutos et contenus de transmission

## Rubriques principales

- Accueil
- Univers
- Musique
- Animation
- Dev
- Gaming
- Freestyle / Impro Labz
- Tutos

## Experience actuelle

- navigation SPA fluide
- interface bilingue FR / EN
- navbar sticky desktop et menu burger mobile
- message clair si JavaScript est desactive
- hub musique avec plusieurs modes de navigation
- hub animation avec cartes, showcase et lecteur integre
- hub tutos avec lecture detaillee au clic
- About immersif pour comprendre le lore du Lab

## Choix techniques

- front en HTML, CSS et JavaScript vanilla
- pas de dependance npm obligatoire pour lancer le site
- architecture modulaire simple a faire evoluer
- contenus editoriaux centralises dans `data/site.js`
- Phaser prepare en copie locale pour les futurs jeux navigateur

## Lancer le projet en local

Le projet peut etre servi comme un site statique simple.

Exemples :

- VS Code + Live Server
- un petit serveur local type `http-server`
- Laragon, XAMPP ou tout autre hebergement local statique

## Modifier le contenu

La majorite des textes, cartes, labels et contenus FR / EN se trouvent dans `data/site.js`.

Les pages dans `pages/` s'occupent surtout de la structure HTML et des interactions propres a chaque rubrique.

Les styles sont separes dans `styles/` :

- `variables.css` pour le design system
- `layout.css` pour la navbar, le burger et le footer
- `components.css` pour les elements UI reutilisables
- `pages.css` pour les sections et cartes propres aux rubriques

## Structure generale

- `assets/` : images, audio, fonts, vendors et medias
- `components/` : layout et petits blocs UI reutilisables
- `data/` : textes, contenus et configurations editoriales
- `modules/` : briques de logique reutilisable
- `pages/` : vues du site
- `router/` : navigation SPA
- `scripts/` : bootstrap global
- `styles/` : design system et styles des pages

## Notes

Le README public reste volontairement centre sur le projet, ses sections et son usage general.

La documentation d'architecture, de maintenance et de travail interne est conservee dans `README.tech.md` et `documentation.md`, des fichiers prives ignores par Git.

## Licence

© Pawat Labz - Tous droits reserves
