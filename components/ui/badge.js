/**
 * Petit helper de badge reutilisable.
 *
 * Il sert a normaliser les etiquettes courtes affichees dans les pages :
 * section, statut, categorie, etc.
 */
export const renderBadge = (label, tone = "default") => `
  <span class="ui-badge ui-badge--${tone}">${label}</span>
`;
