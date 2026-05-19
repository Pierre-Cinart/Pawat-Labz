# Pawat-Labz

Pawat-Labz est le laboratoire creatif personnel de Pawat.

Le site rassemble plusieurs univers dans une meme identite visuelle : musique, animation, developpement, gaming, freestyle et tutos. L'objectif n'est pas seulement de montrer des contenus, mais de proposer une entree claire dans un univers creatif vivant.

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
- hub musique avec plusieurs modes de navigation
- hub animation avec cartes, showcase et lecteur integre
- hub tutos avec lecture detaillee au clic

## Choix techniques

- front en HTML, CSS et JavaScript vanilla
- pas de dependance npm obligatoire pour lancer le site
- architecture modulaire simple a faire evoluer
- contenus editoriaux centralises dans `data/site.js`

## Lancer le projet en local

Le projet peut etre servi comme un site statique simple.

Exemples :

- VS Code + Live Server
- un petit serveur local type `http-server`
- Laragon, XAMPP ou tout autre hebergement local statique

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

La documentation d'architecture, de maintenance et de travail interne est conservee dans `README.tech.md`, un fichier prive ignore par Git.

## Licence

© Pawat Labz - Tous droits reserves
