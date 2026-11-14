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
    const converted = [];
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
      converted.push(diagram);
    }
    return converted;
  }

  async function enhance(root) {
    if (!root || root.nodeType !== 1) return;
    const converted = toMermaid(root);
    await mathReady;
    if (window.renderMathInElement) {
      try { window.renderMathInElement(root, mathOptions); }
      catch (error) { console.warn('[CS render] Math rendering failed:', error); }
    }
    const mermaid = await mermaidReady;
    if (mermaid) {
      const nodes = [...converted];
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

  function initOfflineEnglish() {
    if (!location.pathname.includes('/opensource-22408/english')) return;
    const original = window.loadWordEnrichment;
    let data = null;
    let lastWord = '';
    const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch]));
    const posLabel = value => ({
      'verb': '动词', 'noun': '名词', 'adjective': '形容词',
      'noun / verb': '名词 / 动词', 'verb / noun': '动词 / 名词'
    }[value] || value || '词性与用法');

    function render(word) {
      const entry = data?.entries?.[String(word).toLowerCase()];
      const root = document.getElementById('word-enrichment');
      if (!entry || !root) return false;
      const list = (items, renderItem) => Array.isArray(items) && items.length
        ? items.map(renderItem).join('') : '<div class="enrich-note">本词条暂未整理该项。</div>';
      const meanings = list(entry.meanings, item => '<li>' + esc(item) + '</li>');
      const phrases = list(entry.phrases, item =>
        '<div class="enrich-tag"><b>' + esc(item[0]) + '</b><br><span class="enrich-zh">' + esc(item[1]) + '</span></div>');
      const sentences = list(entry.sentences, item =>
        '<div class="enrich-sentence"><div class="enrich-en">' + esc(item[0]) +
        '</div><div class="enrich-zh">' + esc(item[1]) + '</div></div>');
      const forms = list(entry.forms, item => '<div class="enrich-tag">' + esc(item) + '</div>');
      const confusables = list(entry.confusables, item =>
        '<div class="enrich-sentence"><div class="enrich-en"><b>' + esc(item[0]) +
        '</b> / <b>' + esc(item[1]) + '</b></div><div class="enrich-zh">' + esc(item[2]) + '</div></div>');
      root.innerHTML =
        '<div class="enrich-shell">' +
          '<div class="enrich-head"><div><div class="enrich-title">📚 离线词汇拓展</div>' +
          '<div class="enrich-subtitle">' + esc(word) + ' · ' + esc(posLabel(entry.pos)) + ' · 无需联网</div></div>' +
          '<span class="enrich-tag">本地词库</span></div>' +
          '<div class="enrich-section"><h3>核心释义与语义辨析</h3><ol class="enrich-meanings">' + meanings + '</ol></div>' +
          '<div class="enrich-section"><h3>高频词组与固定搭配</h3><div class="enrich-tags">' + phrases + '</div></div>' +
          '<div class="enrich-section"><h3>双语短句 · 结合语境记忆</h3>' + sentences + '</div>' +
          '<div class="enrich-section"><h3>词形变化与派生词</h3><div class="enrich-tags">' + forms + '</div></div>' +
          '<div class="enrich-section"><h3>易混词辨析</h3>' + confusables + '</div>' +
          '<div class="enrich-note">离线内容保存在仓库中，页面加载后即可查看；例句用于考研语境理解。该批次为人工整理的首批核心词，其他词条会继续扩充。</div>' +
        '</div>';
      return true;
    }

    window.loadWordEnrichment = function(word) {
      lastWord = word || '';
      if (data && render(lastWord)) return;
      if (typeof original === 'function') original(word);
    };

    fetch('/opensource-22408/english/english_enrichment_data.json')
      .then(response => {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        return response.json();
      })
      .then(json => {
        data = json;
        if (lastWord) render(lastWord);
      })
      .catch(error => console.warn('[CS English] Offline vocabulary pack unavailable:', error));
  }

  window.CSRender = { enhance, mathReady, mermaidReady };
  const start = () => {
    initOfflineEnglish();
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
