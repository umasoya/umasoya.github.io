/* eslint-disable */
import "@fortawesome/fontawesome-free/js/all";
import InstantClick = require("instantclick");
import ScrollOut = require("scroll-out");

// mermaid
import mermaid from "mermaid";
(async () => {
  mermaid.initialize({startOnLoad:true});
})();

/* }}} */

/**
 * instantclick
 */
InstantClick.init();

/* {{{1 ScrollOut */

ScrollOut({
  threshold: 0.2,
  onShown: (elm: HTMLElement) => {
    elm.style.opacity = "1";
    elm.animate(
      {
        opacity: [0, 1]
      },
      1000
    );
  },
  onHidden: (elm: HTMLElement) => {
    elm.animate(
      {
        opacity: [1, 0]
      },
      1000
    );
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (elm: HTMLElement, ctx: any) => {
    if (!ctx.visible) {
      elm.style.opacity = "0";
    }
  }
});

/* }}} */
