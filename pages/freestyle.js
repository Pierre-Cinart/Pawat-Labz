import { renderImproLab, mountImproLab, unmountImproLab } from "../components/impro-lab.js";
import { renderPanel } from "../components/ui/panel.js";
import { getPageContent } from "../data/site.js";

const getRequestedFreestyleFocus = () => {
  const [, queryString = ""] = window.location.hash.replace(/^#/, "").split("?");
  const searchParams = new URLSearchParams(queryString);
  return searchParams.get("focus");
};

export const renderFreestylePage = () => {
  const freestyleContent = getPageContent("freestyle");
  const requestedFocus = getRequestedFreestyleFocus();

  return {
    html: `
      <section class="page">
        ${renderPanel({
          kicker: freestyleContent.kicker,
          title: freestyleContent.title,
          text: freestyleContent.text,
          tone: "default",
          badge: freestyleContent.badge
        })}

        <div class="freestyle-focus-links">
          <a class="univers-overview-card__detail-link" href="#/freestyle?focus=impro-labz" data-link>
            Impro Labz
          </a>
        </div>

        <div data-impro-lab-anchor>
          ${renderImproLab()}
        </div>
      </section>
    `,
    onMount: () => {
      mountImproLab();

      if (requestedFocus === "impro-labz") {
        const targetNode =
          document.querySelector("[data-impro-stage]") ??
          document.querySelector("[data-impro-lab]") ??
          document.querySelector("[data-impro-lab-anchor]");

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            targetNode?.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          });
        });
      }
    },
    onUnmount: () => {
      unmountImproLab();
    }
  };
};
