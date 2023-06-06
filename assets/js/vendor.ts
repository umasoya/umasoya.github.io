/* eslint-disable */
import "@fortawesome/fontawesome-free/js/all";
import InstantClick = require("instantclick");
import ScrollOut = require("scroll-out");

// mermaid
import mermaid from "mermaid";
(async () => {
  mermaid.initialize({startOnLoad:true});
})();

/* eslint-enable */

/* {{{1 highlight.js */
import hljs       = require("highlight.js/lib/highlight");
import bash       = require("highlight.js/lib/languages/bash");
hljs.registerLanguage("sh", bash);
import dockerfile = require("highlight.js/lib/languages/dockerfile");
hljs.registerLanguage("dockerfile", dockerfile);
import go         = require("highlight.js/lib/languages/go");
hljs.registerLanguage("go", go);
import ini        = require("highlight.js/lib/languages/ini");
hljs.registerLanguage("ini", ini);
import javascript = require("highlight.js/lib/languages/javascript");
hljs.registerLanguage("js", javascript);
import json       = require("highlight.js/lib/languages/json");
hljs.registerLanguage("json", json);
import makefile   = require("highlight.js/lib/languages/makefile");
hljs.registerLanguage("makefile", makefile);
import nginx      = require("highlight.js/lib/languages/nginx");
hljs.registerLanguage("nginx", nginx);
import php        = require("highlight.js/lib/languages/php");
hljs.registerLanguage("php", php);
import sql        = require("highlight.js/lib/languages/sql");
hljs.registerLanguage("sql", sql);
// typescript is not working.
// import typescript = require("highlight.js/lib/languages/typescript");
// hljs.registerLanguage("typescript", typescript);
import vim        = require("highlight.js/lib/languages/vim");
hljs.registerLanguage("vim", vim);
import xml        = require("highlight.js/lib/languages/xml");
hljs.registerLanguage("xml", xml);
import yaml       = require("highlight.js/lib/languages/yaml");
hljs.registerLanguage("yaml", yaml);

/**
 * Applies highlighting to a DOM node containing inline code.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
hljs.highlightInline = () => {
  const elements = document.querySelectorAll("code");
  const l = elements.length;

  for (let i = 0; i < l; i++) {
    const elm = elements[i];

    if (elm === null || elm.parentElement === null) return;

    if (elm.parentElement.tagName.toLowerCase() != "pre") {
      elm.style.display = "inline";
      elm.style.margin = "0 2px";
      elm.style.padding = "1px 3px";
      elm.classList.add("hljs", "inline-code");
    }
  }
};

hljs.initHighlighting();
hljs.highlightInline();

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
