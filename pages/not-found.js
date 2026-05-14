/**
 * La vue 404 est volontairement simple mais thematique.
 * Elle permet de rester dans l'univers visuel du site meme en cas de hash inconnu.
 */
export const renderNotFoundPage = () => `
  <section class="page">
    <div class="hero-card hero-card--danger">
      <p class="section-kicker">ERROR 404</p>
      <h2 class="section-title">Route introuvable</h2>
      <p class="section-text">
        La route demandee n'existe pas encore dans Pawat-Labz.
        Reviens a l'accueil ou explore une section deja initialisee.
      </p>

      <div class="hero-actions">
        <a class="button button--primary" href="#/" data-link>Retour accueil</a>
        <a class="button button--ghost" href="#/dev" data-link>Section dev</a>
      </div>
    </div>
  </section>
`;
