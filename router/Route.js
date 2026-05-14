/**
 * La classe Route formalise la definition d'une page de l'application.
 *
 * Chaque route decrit :
 * - son chemin logique (`/dev`, `/gaming`, etc.)
 * - le titre de l'onglet
 * - la fonction de rendu qui doit produire la definition de vue de la page
 *
 * Ce petit objet simple rend le routeur plus lisible et plus facile a etendre.
 */
export default class Route {
  constructor(path, title, render) {
    this.path = path;
    this.title = title;
    this.render = render;
  }
}
