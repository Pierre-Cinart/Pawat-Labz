/**
 * Helper d'injection de composant au format demande dans la roadmap.
 *
 * Signature attendue :
 * `chargerComposant(id, htmlString)`
 *
 * Son role est simple :
 * - retrouver un conteneur par son id
 * - y injecter une string HTML
 * - renvoyer l'element cible pour d'eventuelles suites de traitement
 *
 * Cette fonction constitue la base la plus directe du systeme de composants
 * injectes dynamiquement.
 */
export const chargerComposant = (id, htmlString) => {
  const cible = document.getElementById(id);

  if (!cible) {
    throw new Error(`Composant introuvable : #${id}`);
  }

  cible.innerHTML = htmlString;
  return cible;
};
