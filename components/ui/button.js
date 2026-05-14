/**
 * Helper de bouton/lien stylise.
 *
 * On retourne un lien HTML car, dans ce premier commit, la navigation SPA
 * repose principalement sur des ancres hash (#/...).
 */
export const renderButtonLink = ({
  href,
  label,
  variant = "primary",
  extraClass = ""
}) => {
  const className = `button button--${variant} ${extraClass}`.trim();

  return `
    <a class="${className}" href="${href}" data-link>
      ${label}
    </a>
  `;
};
