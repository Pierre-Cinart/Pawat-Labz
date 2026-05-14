import { chargerComposant } from "./composants.js";

/**
 * Petit gestionnaire de vue.
 *
 * Son but est de preparer le projet a des pages plus complexes en introduisant
 * des hooks de cycle de vie simples :
 * - `onMount()` apres l'injection du HTML
 * - `onUnmount()` juste avant de detruire la vue courante
 *
 * Pour le premier commit, les pages utilisent surtout `html`,
 * mais le socle est deja en place pour la suite de la roadmap.
 */

let currentUnmount = null;

export const renderView = (container, viewDefinition) => {
  if (typeof currentUnmount === "function") {
    currentUnmount();
    currentUnmount = null;
  }

  // On passe par chargerComposant(id, htmlString) pour aligner le projet
  // avec la roadmap et centraliser l'injection DOM.
  chargerComposant(container.id, viewDefinition.html);

  if (typeof viewDefinition.onMount === "function") {
    viewDefinition.onMount(container);
  }

  if (typeof viewDefinition.onUnmount === "function") {
    currentUnmount = viewDefinition.onUnmount;
  }
};
