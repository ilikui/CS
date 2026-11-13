/* CS Study: site-wide Markdown math + Mermaid enhancement */
(() => {
  const KATEX_CSS = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css';
  const KATEX_JS = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js';
  const AUTORENDER_JS = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js';
  const MERMAID_JS = 'https://cdn.jsdelivr.net/npm/mermaid@11.12.0/dist/mermaid.esm.min.mjs';

  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = KATEX_CSS;
  document.head.appendChild(css);

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = () => reject(new Error('资源加载失败：' + src));
      document.head.appendChild(script);
    });
  }

  const mathReady = loadScript(KATEX_JS)
    .then(() => loadScript(AUTORENDER_JS))
    .catch(error => console.warn('[CS render] KaTeX unavailable:', error));

  const mermaidReady = import(MERMAID_JS).then(({ default: mermaid }) => {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'strict',
      theme: 'neutral',
      flowchart: { htmlLabels: false, curve: 'basis' },
      sequence: { useMaxWidth: true }
    });
    return mermaid;
  }).catch(error => {
    console.warn('[CS render] Mermaid unavailable:', error);
    return null;
  });

  const mathOptions = {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '\\[', right: '\\]', display: true },
      { left: '\\(', right: '\\)', display: false },
      { left: '$', right: '$', display: false }
    ],
    throwOnError: false,
    strict: 'ignore',
    ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'option']
  };

  function toMermaid(root) {
    const blocks = [];
    if (root.matches?.('pre > code.language-mermaid, pre > code.lang-mermaid')) blocks.push(root);
    blocks.push(...(root.querySelectorAll?.('pre > code.language-mermaid, pre > code.lang-mermaid') || []));
    for (const code of blocks) {
      const pre = code.parentElement;
      if (!pre || pre.dataset.mermaidConverted === '1') continue;
      const diagram = document.createElement('div');
      diagram.className = 'mermaid';
      diagram.textContent = code.textContent;
      diagram.dataset.renderPending = '1';
      pre.replaceWith(diagram);
    }
  }

  async function enhance(root) {
    if (!root || root.nodeType !== 1) return;
    toMermaid(root);
    await mathReady;
    if (window.renderMathInElement) {
      try { window.renderMathInElement(root, mathOptions); }
      catch (error) { console.warn('[CS render] Math rendering failed:', error); }
    }
    const mermaid = await mermaidReady;
    if (mermaid) {
      const nodes = [];
      if (root.matches?.('.mermaid[data-render-pending="1"]')) nodes.push(root);
      nodes.push(...root.querySelectorAll('.mermaid[data-render-pending="1"]'));
      if (nodes.length) {
        nodes.forEach(node => { node.dataset.renderPending = '0'; });
        try { await mermaid.run({ nodes }); }
        catch (error) {
          console.warn('[CS render] Mermaid rendering failed:', error);
          nodes.forEach(node => {
            node.dataset.renderPending = 'error';
            node.title = '图表渲染失败，请检查 Mermaid 语法';
          });
        }
      }
    }
  }

  window.CSRender = { enhance, mathReady, mermaidReady };
  const start = () => {
    enhance(document.body);
    const observer = new MutationObserver(records => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node.nodeType === 1 && !node.closest?.('.mermaid, .katex')) enhance(node);
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
