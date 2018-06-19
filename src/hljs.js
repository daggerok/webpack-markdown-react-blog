import 'highlight.js';
import 'highlight.js/lib/languages/javascript.js';
import 'highlight.js/lib/languages/bash.js';

import 'highlight.js/styles/default.css';
// import 'highlight.js/styles/docco.css';
import 'highlight.js/styles/dracula.css';

// const hljs = require('highlight.js');

window.addEventListener('DOMContentLoaded', () => {
  // window.hljs = hljs;
  // window.hljs.configure({
  //   tabReplace: '  ',
  // });
  // window.hljs.initHighlightingOnLoad();
  import(/* webpackChunkName: hljs */ 'highlight.js').then(hljs => {
    hljs.configure({
      tabReplace: '  ',
    });
    hljs.initHighlightingOnLoad();
  });
}, false);
