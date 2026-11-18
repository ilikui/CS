/* 数学二 CAL-05 真题解题能力补强层
 * 不覆盖原卡内容；保留原有真题映射与题目来源，只追加考场流程、完整变式推导和验收清单。
 */
(() => {
  const guides = {
    "CAL-05-A": {
      title: "中值定理综合证明",
      trigger: "题干出现“证明不等式 / 证明方程根的个数 / 存在 ξ / 比较函数增量”，优先检查中值定理。",
      steps: [
        "先写清区间 [a,b]，逐项核验 f 在闭区间连续、在开区间可导；罗尔定理还必须有 f(a)=f(b)。",
        "把结论改写成差商。单函数增量对应拉格朗日；两个函数的增量比对应柯西；端点相等且要证某点导数为零对应罗尔。",
        "若结论含 f'(ξ)=0，构造 F(x)=f(x)-直线；若含 f'(ξ)=某常数，构造 F(x)=f(x)-kx。",
        "应用定理后保留 ξ∈(a,b)，再把辅助函数关系代回原命题，不能停在“存在 ξ”。"
      ],
      worked: "例：设 f 在 [a,b] 连续、(a,b) 可导，且 f(a)=f(b)=0。证明存在 ξ∈(a,b)，使 f'(ξ)=0。",
      solution: "由 f 在 [a,b] 连续、(a,b) 可导且 f(a)=f(b)，满足罗尔定理全部条件。因此存在 ξ∈(a,b)，使 f'(ξ)=0。若题目要求进一步证明某个含 ξ 的等式，应先构造满足端点相等的辅助函数，再对该函数应用罗尔定理。",
      trap: "只写“由中值定理”而不验证区间条件；把拉格朗日定理误加端点相等条件；忘记 ξ 必须位于开区间。",
      check: "能否不看答案区分三种定理？能否从目标式反向构造辅助函数？"
    },
    "CAL-05-B": {
      title: "单调性、极值与最值综合题",
      trigger: "出现“单调区间、极值、最值、零点唯一性、参数范围”，先求导并制作符号表。",
      steps: [
        "确定定义域，求 f'(x)，解出 f'(x)=0 及 f' 不存在的点，按定义域分区间。",
        "在每个区间判断 f' 符号：正则递增，负则递减；写出完整区间而非只写驻点。",
        "极值必须检查 f' 是否变号：+→− 为极大，−→+ 为极小；不变号不是极值。",
        "闭区间 [a,b] 求绝对最值时，比较所有内部驻点/不可导点与端点的函数值。",
        "证明唯一根要分两步：连续性与端点异号保证至少一根；严格单调保证至多一根。"
      ],
      worked: "例：讨论 f(x)=x^3−3x 在实数范围内的单调区间和极值。",
      solution: "f'(x)=3x^2−3=3(x−1)(x+1)。临界点为 −1、1。符号表：x∈(−∞,−1) 时 f'>0；(−1,1) 时 f'<0；(1,+∞) 时 f'>0。因此在 (−∞,−1)、(1,+∞) 递增，在 (−1,1) 递减。f' 在 −1 处由正变负，故有极大值 f(−1)=2；在 1 处由负变正，故有极小值 f(1)=−2。",
      trap: "驻点不等于极值点；单调区间端点写法要与定义域一致；闭区间最值不能漏端点。",
      check: "能否独立画出 f' 符号表，并用函数值验证极值大小？"
    },
    "CAL-05-C": {
      title: "二阶导数、凹凸性与曲线形态",
      trigger: "出现“凹凸、拐点、曲线形状、切线斜率变化”，求 f'' 并做二阶导数符号表。",
      steps: [
        "求 f''(x)，找 f''=0 与 f'' 不存在的候选分界点。",
        "按候选点分区间判断 f'' 的正负；f''>0 表示斜率递增、图像凹向上，f''<0 表示斜率递减、图像凹向下。",
        "只有两侧凹凸性发生改变，候选点才是拐点；还要确认函数在该点有定义并写出坐标。",
        "把 f' 的零点（极值候选）与 f'' 的零点（拐点候选）分开处理，最后合并成曲线性态表。"
      ],
      worked: "例：判断 f(x)=x^4 与 g(x)=x^3 在 x=0 处是否有拐点。",
      solution: "f''(x)=12x^2，x=0 两侧均非负，凹凸性没有改变，故 (0,0) 不是拐点。g''(x)=6x，左侧为负、右侧为正，凹凸性发生改变，故 (0,0) 是拐点。",
      trap: "f''(x0)=0 只是候选条件，不是拐点的充分条件；把极值点直接当拐点。",
      check: "能否写出候选点左右两侧的 f'' 符号，而不是只代入 f''(x0)？"
    },
    "CAL-05-D": {
      title: "泰勒展开与余项阶数",
      trigger: "出现“极限、参数待定、近似、误差阶、局部展开”，先找展开中心并确定必须保留到几阶。",
      steps: [
        "确定展开点 x0，令 h=x−x0；写出对应的泰勒/麦克劳林公式及余项形式。",
        "先比较题目中最低阶项；若低阶项抵消，必须继续展开到抵消后的首个非零项。",
        "常用展开：e^x=1+x+x²/2!+…；sin x=x−x³/3!+…；cos x=1−x²/2!+…；ln(1+x)=x−x²/2+x³/3+…；(1+x)^α=1+αx+α(α−1)x²/2+…。",
        "求极限时把余项阶数写清：o(x^n) 比 x^n 高阶；O(x^n) 只表示同阶上界，不能混用。",
        "参数题按幂次逐项比较系数；写出消项顺序，最后检查剩余项除以目标分母确实趋于零。"
      ],
      worked: "例：计算 lim(x→0)[e^x−1−x]/x²。",
      solution: "由 e^x=1+x+x²/2+o(x²)，分子为 x²/2+o(x²)。因此原极限=[x²/2+o(x²)]/x²=1/2。",
      trap: "展开阶数不足；把 O(x^n) 当作 o(x^n)；在加减式中用等价无穷小替换导致首项抵消后失真。",
      check: "能否解释为什么本题必须展开到二阶？能否为参数题保留到抵消后的下一非零阶？"
    },
    "CAL-05-E": {
      title: "辅助函数与商的单调性证明",
      trigger: "题干含 f'g−fg'、f/g、ln、指数函数或复杂不等式，考虑构造差函数或商函数。",
      steps: [
        "把待证不等式移项，构造 φ(x)=左边−右边；若出现 f'g−fg'，识别为 (f/g)' 的分子。",
        "若考虑 F=f/g，先确认 g(x) 在区间内不为零；若要保持不等号方向，还需确认 g 的符号。",
        "求 φ' 或 F'，因式分解并判断符号，得到单调性。",
        "选取端点/已知点计算函数值，利用单调性完成比较；最后还原为原不等式。",
        "证明唯一性时，先用严格单调排除两个不同零点，再用连续性和端点异号证明存在。"
      ],
      worked: "例：已知 f(x)>0、g(x)>0 且 f'(x)g(x)−f(x)g'(x)<0，证明 f(x)/g(x) 严格递减。",
      solution: "令 F(x)=f(x)/g(x)。因 g(x)>0，F'(x)=[f'g−fg']/g²<0。因此 F 在所给区间严格递减。注意这里的正性条件保证分母 g²>0；若要把结论改写成不等式，交叉相乘时还要再次使用 g>0。",
      trap: "未证明 g 不为零就作商；忽略乘除负数会改变不等号方向；只证明单调而没有连接到端点值。",
      check: "能否从题目中的导数分子识别商函数？能否明确写出分母正性？"
    },
    "CAL-05-F": {
      title: "极值判别与高阶情形",
      trigger: "出现 f'(x0)=0、极大/极小或参数驻点，先用一阶变号，满足条件时再用二阶判别。",
      steps: [
        "求 f' 并解出驻点；若题目给出 f'(x0)=0，记录它只是必要条件。",
        "优先做 f' 左右符号表：+→− 极大，−→+ 极小，不变号则不是极值。",
        "若 f''(x0) 存在且非零，可用二阶判别：f''>0 极小，f''<0 极大；必须同时满足 f'(x0)=0。",
        "若 f''(x0)=0，二阶判别失效，不代表没有极值；回到一阶变号，或检查首个非零高阶导数。",
        "题目要求极值还要代回 f(x0) 求极值，不要只报告点的横坐标。"
      ],
      worked: "例：分别判断 f(x)=x^3 与 g(x)=x^4 在 x=0 处的极值。",
      solution: "f'(x)=3x²，左右均非负且不变号，所以 x=0 不是极值点。g'(x)=4x³，左负右正，所以 x=0 是严格极小值点，极小值为 0。两者在 0 处二阶导数都为 0，说明二阶判别法失效时必须回到一阶导数符号。",
      trap: "仅由 f'=0 判断极值；仅由 f''=0 判断非极值；忘记二阶判别法还要求 f'(x0)=0。",
      check: "能否在二阶导数为零时继续正确判断，而不是直接停止？"
    },
    "CAL-05-G": {
      title: "拐点坐标与个数",
      trigger: "题目要求拐点、拐点个数或参数范围，关键是逐个候选点检查两侧凹凸性。",
      steps: [
        "求 f''，列出 f''=0 及 f'' 不存在的点；同时检查这些点是否属于函数定义域。",
        "以候选点分段，选取测试值或因式符号分析 f'' 在左右区间的符号。",
        "两侧异号才发生凹凸性改变；同号则排除。不要把 f''=0 的根直接计入拐点个数。",
        "对每个确认的拐点计算 f(x0)，写出完整坐标 (x0,f(x0))。",
        "参数题把“左右异号”转化为参数不等式，并检查临界参数下是否只是相切、不变号。"
      ],
      worked: "例：求 f(x)=x^3−3x² 的拐点。",
      solution: "f'(x)=3x²−6x，f''(x)=6x−6。令 f''=0 得 x=1。x<1 时 f''<0，x>1 时 f''>0，凹凸性改变；f(1)=−2。因此唯一拐点为 (1,−2)。",
      trap: "只求出 f''=0 而不验符号；只写横坐标；把定义域断点当作曲线上拐点。",
      check: "能否用符号表证明凹凸性确实改变，并准确写出拐点坐标？"
    },
    "CAL-05-H": {
      title: "竖直、水平与斜渐近线",
      trigger: "出现渐近线方程或条数，按定义域边界、正无穷、负无穷三个方向分别检查。",
      steps: [
        "先求定义域，找有限边界点 a；分别计算 x→a−、x→a+ 的函数极限，只有函数值趋于无穷才有竖直渐近线 x=a。",
        "分别计算 x→+∞ 与 x→−∞ 的 f(x)；若极限为有限数 b，则对应方向有水平渐近线 y=b。",
        "若无水平渐近线，计算 k=lim f(x)/x；k 有限且非零时再算 b=lim[f(x)−kx]，得到斜渐近线 y=kx+b。",
        "正、负无穷必须分开；把所有方向的结果汇总并去重。",
        "最后将 f(x)−(kx+b) 或 f(x)−b 的极限核对为 0。"
      ],
      worked: "例：求 f(x)=(2x²+3x+1)/(x+1) 的渐近线。",
      solution: "因 2x²+3x+1=(2x+1)(x+1)，在 x≠−1 时 f(x)=2x+1。x→−1 时函数趋于 1 而非无穷，因此 x=−1 不是竖直渐近线。无穷远处 f(x)−(2x+1)=0，故斜渐近线为 y=2x+1。",
      trap: "分母为零不等于一定有竖直渐近线；只检查 x→+∞ 会漏掉负无穷方向；斜渐近线截距必须在求 k 后另算。",
      check: "能否区分可去间断点与竖直渐近线？能否分别检查 ±∞？"
    },
    "CAL-05-N27": {
      title: "弧微分与弧长计算",
      trigger: "题目直接给曲线长度或参数曲线弧长时，先识别曲线表示方式，再写 ds。",
      steps: [
        "显函数 y=f(x)：ds=√(1+[f'(x)]²) dx；在 [a,b] 上弧长 L=∫ₐᵇ√(1+[f'(x)]²) dx。",
        "参数方程 x=x(t)、y=y(t)：ds=√([x'(t)]²+[y'(t)]²) dt，并按 t 的区间积分。",
        "若曲线为极坐标 r=r(θ)，ds=√(r²+[r'(θ)]²)dθ。",
        "先检查参数区间是否完整覆盖目标弧，必要时分段；根式化简后再积分。",
        "若题目要求长度而非有向量，积分结果应非负。"
      ],
      worked: "例：求 y=2x 在 0≤x≤1 上的弧长。",
      solution: "y'=2，故 L=∫₀¹√(1+4)dx=∫₀¹√5 dx=√5。",
      trap: "把弧长公式误写成 ∫(1+y')dx；参数方程漏掉 x' 或 y'；参数范围与曲线方向混淆。",
      check: "能否根据显函数、参数方程和极坐标三种形式正确写出 ds？"
    }
  };

  const aliases = {
    "CAL-05-N07":"CAL-05-A","CAL-05-N08":"CAL-05-A","CAL-05-N09":"CAL-05-A",
    "CAL-05-N59":"CAL-05-A","CAL-05-N81":"CAL-05-A","CAL-05-N92":"CAL-05-A",
    "CAL-05-N26":"CAL-05-F","CAL-05-N61":"CAL-05-F","CAL-05-N123":"CAL-05-F","CAL-05-N122":"CAL-05-F",
    "CAL-05-N60":"CAL-05-B","CAL-05-N146":"CAL-05-B","CAL-05-N01":"CAL-05-B",
    "CAL-05-N93":"CAL-05-C","CAL-05-N94":"CAL-05-G","CAL-05-N62":"CAL-05-H"
  };

  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const css = document.createElement("style");
  css.textContent = ".exam-readiness{margin:14px 0;padding:13px;border:1px solid #cbdced;border-radius:11px;background:#f5f9fe}.exam-readiness h4{margin:7px 0;color:#244f78}.exam-readiness p,.exam-readiness li{font-size:12px;line-height:1.8}.exam-readiness ol,.exam-readiness ul{padding-left:22px;margin:5px 0}.exam-readiness .readiness-work{padding:9px 11px;margin:8px 0;background:#fff;border-radius:8px}.exam-readiness .readiness-check{border-left:3px solid #399879}.exam-readiness .readiness-trap{border-left:3px solid #d28b38}.exam-readiness .readiness-tag{font-size:11px;color:#55718c}";
  document.head.appendChild(css);

  function enhance(root=document) {
    root.querySelectorAll(".atomic-card[id^='card-CAL-05-']").forEach(card => {
      const body = card.querySelector(".atomic-body");
      if (!body || body.querySelector(".exam-readiness")) return;
      const id = card.id.replace("card-","");
      const key = guides[id] ? id : aliases[id];
      const g = guides[key] || guides["CAL-05-B"];
      const block = document.createElement("section");
      block.className = "exam-readiness";
      block.innerHTML = '<div class="readiness-tag">真题解题能力补强 · '+esc(id)+'</div>'
        +'<h4>一、真题识别信号</h4><p>'+esc(g.trigger)+'</p>'
        +'<h4>二、考场标准流程</h4><ol>'+g.steps.map(x=>'<li>'+esc(x)+'</li>').join("")+'</ol>'
        +'<div class="readiness-work"><h4>三、独立推导训练</h4><p>'+esc(g.worked)+'</p><p><b>完整推导：</b>'+esc(g.solution)+'</p></div>'
        +'<div class="readiness-work readiness-trap"><h4>四、失分点排查</h4><p>'+esc(g.trap)+'</p></div>'
        +'<div class="readiness-work readiness-check"><h4>五、真题掌握验收</h4><p>'+esc(g.check)+'</p><ul><li>先独立完成本卡上方已关联的历年真题，再展开官方/整理解析核对。</li><li>必须写出关键中间步骤、定理条件和结论回代；只选对答案不算掌握。</li><li>若关联真题的考点只是次级考点，不能把它标记为本卡的核心考查证据。</li></ul></div>';
      body.appendChild(block);
      if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([block]);
    });
  }

  enhance();
  const target = document.getElementById("cards");
  if (target) new MutationObserver(() => enhance(target)).observe(target,{childList:true,subtree:true});
})();
