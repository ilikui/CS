// Exam Bank Controller - 分页版
(function() {
  let currentYear = '2025';
  let currentType = 'all';
  let currentPage = 1;
  const PAGE_SIZE = 20;

  function initExamBank() {
    const years = [...new Set(EXAM_DATA.map(q => q[0]))].sort().reverse();
    const yearScroll = document.getElementById('yearScroll');
    if (!yearScroll) return;

    let html = '';
    for (const y of years) {
      html += `<button class="year-btn${y === currentYear ? ' active' : ''}" onclick="filterExamYear('${y}')">${y}</button>`;
    }
    yearScroll.innerHTML = html;

    renderExamQuestions();
  }

  function filterExamYear(year) {
    currentYear = year;
    currentPage = 1;
    document.querySelectorAll('.year-btn').forEach(b => {
      b.classList.toggle('active', b.textContent === year);
    });
    renderExamQuestions();
  }

  function filterExamType(type) {
    currentType = type;
    currentPage = 1;
    document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    renderExamQuestions();
  }

  function getFiltered() {
    let filtered = EXAM_DATA;
    if (currentYear !== 'all') {
      filtered = filtered.filter(q => q[0] === currentYear);
    }
    if (currentType !== 'all') {
      filtered = filtered.filter(q => q[1] === currentType);
    }
    return filtered;
  }


  // Reverse index: a true question can point back to every matching atomic card.
  const EXAM_TOPIC_TERMS = {"CAL-01-A":["定义域","值域","反函数","复合函数","奇偶性","周期性"],"CAL-01-B":["定义域","真数","分母","根式","有意义"],"CAL-01-C":["值域","反函数","一一对应","单调区间"],"CAL-02-A":["数列极限","数列收敛","单调有界","递推数列","数列"],"CAL-02-B":["左极限","右极限","左右极限","极限存在","单侧极限"],"CAL-02-C":["重要极限","等价无穷小","sin x","e^","无穷小替换"],"CAL-03-A":["连续","连续性","间断点","可导必连续"],"CAL-03-B":["间断点","可去间断","跳跃间断","无穷间断","振荡间断"],"CAL-03-C":["闭区间","零点定理","介值定理","最值定理","有界性"],"CAL-04-A":["导数定义","导数的几何意义","切线斜率","导数值","导数"],"CAL-04-B":["链式法则","复合函数求导","乘积求导","商法则","求导公式"],"CAL-04-C":["隐函数","参数方程","微分","全微分","二阶导数"],"CAL-05-A":["罗尔定理","拉格朗日中值定理","柯西中值定理","中值定理"],"CAL-05-B":["单调性","极值","最值","驻点","极大值","极小值"],"CAL-05-C":["凹凸性","拐点","渐近线","曲率","凹函数","凸函数"],"CAL-06-A":["原函数","不定积分","积分基本公式","积分常数"],"CAL-06-B":["换元积分","分部积分","积分换元","分部积分法"],"CAL-06-C":["定积分","变上限积分","积分中值定理","面积","旋转体体积"],"CAL-07-A":["可分离变量","分离变量","变量分离","微分方程"],"CAL-07-B":["一阶线性微分方程","积分因子","一阶线性方程"],"CAL-07-C":["二阶常系数","特征方程","齐次微分方程","特征根"],"CAL-08-A":["偏导数","全微分","偏微分","可微"],"CAL-08-B":["复合函数偏导","链式法则","隐函数求导","多元复合"],"CAL-08-C":["二元函数极值","二重积分","条件极值","极值点"],"LA-01-A":["行列式","行列式定义","行列式性质"],"LA-01-B":["余子式","代数余子式","按行展开","按列展开"],"LA-01-C":["可逆矩阵","行列式不为零","矩阵可逆","非奇异矩阵"],"LA-02-A":["矩阵乘法","转置矩阵","逆矩阵","矩阵的逆"],"LA-02-B":["矩阵的秩","初等变换","行阶梯形","秩"],"LA-03-A":["线性表示","增广矩阵","线性组合","向量组表示"],"LA-03-B":["线性相关","线性无关","向量组相关"],"LA-03-C":["极大线性无关组","向量组的秩","极大无关组"],"LA-04-A":["高斯消元","方程组有解","增广矩阵","线性方程组"],"LA-04-B":["齐次方程组","基础解系","自由变量"],"LA-04-C":["非齐次方程组","通解结构","导出组","特解"],"LA-05-A":["特征值","特征向量","特征多项式"],"LA-05-B":["相似对角化","可对角化","相似矩阵","特征向量线性无关"],"LA-05-C":["实对称矩阵","正交矩阵","正交对角化","正交相似"],"LA-06-A":["二次型","对称矩阵","二次型矩阵"],"LA-06-B":["合同变换","二次型标准形","规范形","配方法"],"LA-06-C":["正定","顺序主子式","正定性","正定矩阵","正定二次型"]};
  const EXAM_CARD_TITLES = {
    
  };
  function getRelatedKnowledgeCards(q) {
    const body = String(q[3] || '') + ' ' + String(q[5] || '');
    return Object.entries(EXAM_TOPIC_TERMS).map(([id, words]) => {
      const hits = words.filter(word => body.includes(word));
      return { id, hits, score: hits.length };
    }).filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id))
      .slice(0, 5);
  }
  function renderKnowledgeLinks(q) {
    const related = getRelatedKnowledgeCards(q);
    if (!related.length) return '<div class="q-knowledge-links"><b>关联知识卡：</b><span>暂未匹配到候选知识点</span></div>';
    return '<div class="q-knowledge-links"><b>关联知识卡（关键词候选）：</b>' +
      related.map(item => '<a href="./cards.html#card-' + encodeURIComponent(item.id) +
        '" title="命中关键词：' + item.hits.slice(0, 3).join('、').replace(/&/g,'&amp;').replace(/"/g,'&quot;') +
        '">' + item.id + '</a>').join('') +
      '<small>依据题干与解析关键词匹配，建议结合题目人工复核。</small></div>';
  }

  function renderExamQuestions() {
    const filtered = getFiltered();
    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    if (currentPage > totalPages) currentPage = totalPages || 1;

    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const pageItems = filtered.slice(start, end);

    // Stats
    const stats = document.getElementById('examStats');
    const typeCounts = {};
    filtered.forEach(q => { typeCounts[q[1]] = (typeCounts[q[1]] || 0) + 1; });
    let statsHtml = `共 <span>${filtered.length}</span> 题`;
    if (typeCounts['选择题']) statsHtml += ` · 选择<span>${typeCounts['选择题']}</span>`;
    if (typeCounts['填空题']) statsHtml += ` · 填空<span>${typeCounts['填空题']}</span>`;
    if (typeCounts['解答题']) statsHtml += ` · 解答<span>${typeCounts['解答题']}</span>`;
    if (totalPages > 1) statsHtml += ` · 第 <span>${currentPage}/${totalPages}</span> 页`;
    stats.innerHTML = statsHtml;

    const container = document.getElementById('examQuestions');
    if (filtered.length === 0) {
      container.innerHTML = '<div class="no-results">&#128269; 没有找到匹配的题目</div>';
      return;
    }

    let html = '';
    for (let i = 0; i < pageItems.length; i++) {
      const [year, type, num, question, answer, solution] = pageItems[i];
      html += `<div class="q-card">
        <div class="q-header">
          <div class="q-meta">
            <span class="q-year">${year}年</span>
            <span class="q-type ${type}">${type}</span>
            <span class="q-number">第${num}题</span>
          </div>
          <button class="q-toggle" onclick="toggleExamAnswer(this)">查看解答</button>
        </div>
        <div class="q-text">${question}</div>
        ${renderKnowledgeLinks(pageItems[i])}
        <div class="q-hidden">
          ${answer ? `<div class="q-answer-box"><div class="q-answer-label">&#9989; 答案</div><div>${answer}</div></div>` : ''}
          ${solution ? `<div class="q-solution"><div class="q-answer-label">&#128161; 解析</div><div>${solution}</div></div>` : ''}
        </div>
      </div>`;
    }

    // Pagination controls
    if (totalPages > 1) {
      html += `<div style="display:flex;justify-content:center;gap:8px;margin-top:16px;flex-wrap:wrap">`;
      if (currentPage > 1) {
        html += `<button class="year-btn" onclick="examPage(${currentPage - 1})">← 上一页</button>`;
      }
      // Show max 7 page buttons
      let startPage = Math.max(1, currentPage - 3);
      let endPage = Math.min(totalPages, startPage + 6);
      if (endPage - startPage < 6) startPage = Math.max(1, endPage - 6);
      for (let p = startPage; p <= endPage; p++) {
        html += `<button class="year-btn${p === currentPage ? ' active' : ''}" onclick="examPage(${p})">${p}</button>`;
      }
      if (currentPage < totalPages) {
        html += `<button class="year-btn" onclick="examPage(${currentPage + 1})">下一页 →</button>`;
      }
      html += `</div>`;
    }

    container.innerHTML = html;

    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([container]).catch(() => {});
    }
  }

  function examPage(page) {
    currentPage = page;
    renderExamQuestions();
    document.getElementById('sec-exambank').scrollIntoView({ behavior: 'smooth' });
  }

  function toggleExamAnswer(btn) {
    const hidden = btn.parentElement.nextElementSibling.nextElementSibling;
    if (hidden.classList.contains('q-hidden')) {
      hidden.classList.remove('q-hidden');
      btn.textContent = '收起解答';
      if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise([hidden]).catch(() => {});
      }
    } else {
      hidden.classList.add('q-hidden');
      btn.textContent = '查看解答';
    }
  }

  window.filterExamYear = filterExamYear;
  window.filterExamType = filterExamType;
  window.toggleExamAnswer = toggleExamAnswer;
  window.examPage = examPage;
  window.initExamBank = initExamBank;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initExamBank);
  } else {
    initExamBank();
  }
})();
