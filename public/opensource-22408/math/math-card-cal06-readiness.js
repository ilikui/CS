/* CAL-06 真题解题能力补强：按知识卡逐点挂载，不覆盖原卡内容。 */
(() => {
  "use strict";
  const guides = {
    "CAL-06-A": {
      title:"原函数与不定积分",
      trigger:"识别基本积分公式、线性组合或原函数族。",
      steps:["先识别幂、指数、对数、三角等基本类型；幂函数公式要求指数不等于 −1，∫dx/x=ln|x|+C 单独处理。","利用积分线性性质拆项并提出常数；复合函数检查是否缺少内层导数因子。","每个不定积分最后统一写 +C；对结果求导，验证是否回到被积函数。"],
      worked:"计算 ∫(3x²−4/x+2eˣ)dx。",
      solution:"逐项积分得 x³−4ln|x|+2eˣ+C。求导为 3x²−4/x+2eˣ，与被积函数一致。",
      trap:"n=−1 时误套幂函数公式；漏写 ln|x| 的绝对值或积分常数；没有求导验算。",
      check:"能否说明幂函数积分公式的适用条件，并用求导完整验算？"
    },
    "CAL-06-B": {
      title:"换元积分与分部积分的选法",
      trigger:"复合函数及其导数因子优先凑微分；乘积结构且求导可简化时考虑分部积分。",
      steps:["凑微分先设 u=φ(x)，确认 φ'(x)dx 是否出现；差常数时先提出常数。","第二类换元要同时替换 x、dx、根式和积分区间；注意代换区间及反三角函数主值。","分部积分写清 u、dv、du、v，再用 ∫u dv=uv−∫v du；定积分换元后同步修改上下限。","完成后求导或代入边界，检查符号和变量是否全部换回。"],
      worked:"计算 ∫x ln x dx（x>0）。",
      solution:"取 u=ln x，dv=x dx，则 du=dx/x，v=x²/2。积分为 (x²/2)ln x−(1/2)∫x dx=(x²/2)ln x−x²/4+C。",
      trap:"只换函数不换微分；定积分漏改积分限；分部积分漏负号；把 LIATE 经验口诀当作定理。",
      check:"能否解释 u 的选择，并独立完成一次求导验算？"
    },
    "CAL-06-C": {
      title:"定积分、几何面积与区域",
      trigger:"出现面积、平均值、旋转体或二重积分，先区分有向累积量与几何量。",
      steps:["定积分是有向量；几何面积必须非负，函数过 x 轴时按零点分段积分 |f(x)|。","面积先画区域、找交点，确定上减下或右减左。","旋转体圆盘/垫片法用 π(R²−r²)，柱壳法用 2π×半径×高；切片方向要与积分变量一致。","二重积分先画 D，再确定积分次序；换序时重新推导边界。"],
      worked:"求 y=x 与 y=x² 在 0≤x≤1 围成的面积。",
      solution:"区间内 x≥x²，故 S=∫₀¹(x−x²)dx=[x²/2−x³/3]₀¹=1/6。",
      trap:"把有向积分值当几何面积；上下边界颠倒；旋转体忘记平方半径；换序只交换积分符号而不重写边界。",
      check:"能否画图判断上下边界，并说明为何被积函数为 x−x²？"
    },
    "CAL-06-D": {
      title:"分部积分与循环积分",
      trigger:"多项式与指数/三角/对数/反三角函数乘积，或分部后积分更简单。",
      steps:["先写 u、dv、du、v 四项，再代入公式。","多项式乘指数或三角函数，通常令多项式为 u，连续求导直至消失。","循环积分分部两次后，把原积分移项求解。","定积分形式写 [uv]ₐᵇ−∫ₐᵇv du，并将上下限作用于整个边界项。"],
      worked:"计算 I=∫eˣsin x dx。",
      solution:"第一次分部得 I=eˣsin x−∫eˣcos x dx。令 J=∫eˣcos x dx，再分部得 J=eˣcos x+I。因此 2I=eˣ(sin x−cos x)，I=eˣ(sin x−cos x)/2+C。",
      trap:"第二次分部符号错误；循环积分后忘记移项；把经验选法当作唯一选法。",
      check:"能否独立完成两次分部，并正确移项解出原积分？"
    },
    "CAL-06-E": {
      title:"黎曼和、定积分性质与估值",
      trigger:"题干含 Σ、极限、区间分割、积分比较或对称区间。",
      steps:["识别 Δx=(b−a)/n、取样点 xₖ，并将求和项写成 f(xₖ)Δx。","由求和下标和取样点还原积分区间；核对系数是否对应小区间长度。","用线性性、区间可加性、换限变号和保序估值时，先检查上下限方向。","对称区间先检查奇偶性；估值先建立 m≤f≤M，再积分得到 m(b−a)≤∫f≤M(b−a)，要求 a≤b。"],
      worked:"计算 lim(n→∞) Σ(k=1…n) (1/n)(k/n)²。",
      solution:"这是 f(x)=x²、Δx=1/n、区间 [0,1] 的黎曼和，极限为 ∫₀¹x²dx=1/3。",
      trap:"漏掉 Δx 或把系数误写成 1/n²；只看区间对称却不检查奇偶性；积分保序时忽略 a≤b。",
      check:"能否逐项指出求和式中的 f(xₖ)、Δx 和积分区间来源？"
    },
    "CAL-06-F": {
      title:"变上限积分与莱布尼茨公式",
      trigger:"积分上下限含 x，或要求变上限积分函数的导数。",
      steps:["若 Φ(x)=∫ₐˣf(t)dt 且 f 连续，则 Φ'(x)=f(x)；t 是哑变量。","上下限均变化时，Φ'=f(b(x))b'(x)−f(a(x))a'(x)。","若被积函数显含 x，还要加上 ∫ₐᵇ∂f/∂x dt。","求二阶导时对上一步整体使用乘积法则与链式法则。"],
      worked:"求 Φ'(x)，Φ(x)=∫ₓ^{x²}(1+t²)dt（x>0）。",
      solution:"Φ'(x)=(1+x⁴)·2x−(1+x²)·1=2x+2x⁵−1−x²。",
      trap:"下限项漏负号；上下限求导漏乘导数；显含 x 时漏掉积分号内偏导项。",
      check:"能否分别解释上限贡献、下限贡献和负号来源？"
    },
    "CAL-06-G": {
      title:"定积分换元、分部与几何量综合",
      trigger:"积分技巧与定积分边界、面积或旋转体组合出现。",
      steps:["先画出区间或区域，确定变量与上下限。","换元完整写出 u、du 和新上下限；分部写出边界项 [uv]ₐᵇ。","分段积分要分别计算后相加；几何面积使用非负的面积表达式。","旋转体核对半径函数、平方、π 因子和积分变量。","最后检查结果的正负、单位与数量级。"],
      worked:"计算 ∫₀¹2x e^{x²}dx。",
      solution:"令 u=x²，则 du=2x dx，积分限仍为 0、1。原积分化为 ∫₀¹eᵘdu=e−1。",
      trap:"定积分换元不换上下限；有向面积误作几何面积；旋转体半径没有平方；分段交界漏算或重复计算。",
      check:"能否完整列出换元前后的变量、微分和积分限？"
    },
    "CAL-06-H": {
      title:"积分中值定理与积分平均值",
      trigger:"出现“存在 ξ”或积分等于某点函数值乘区间长度。",
      steps:["f 在 [a,b] 连续时，存在 ξ∈[a,b] 使 ∫ₐᵇf(x)dx=f(ξ)(b−a)。","积分平均值为 (1/(b−a))∫ₐᵇf；它位于连续函数的最小值与最大值之间。","求 ξ 时先解 f(ξ)=平均值，再筛选 ξ∈[a,b] 的解。","含权函数时检查权函数非负等条件；b=a 时不可直接除以区间长度。"],
      worked:"求 f(x)=x² 在 [0,2] 上的积分平均值。",
      solution:"平均值=(1/2)∫₀²x²dx=4/3。由连续性，存在 ξ∈[0,2] 使 ξ²=4/3，故 ξ=2/√3。",
      trap:"把平均值写成积分本身；忘记除以 b−a；给出区间外的代数根；忽略连续条件。",
      check:"能否区分积分值、区间长度与积分平均值，并给出 ξ 的合法范围？"
    },
    "CAL-06-I": {
      title:"反常积分敛散性与计算",
      trigger:"积分区间无界、端点函数无界或区间内部存在奇点时，先定义极限再判敛。",
      steps:["无穷上限写 lim(R→∞)∫ₐᴿ；无界端点写单侧极限。","内部奇点 c 必须拆成左右两个反常积分；两侧都收敛才收敛，不能用柯西主值抵消。","p-积分：∫₁∞x⁻ᵖdx 当 p>1 收敛；∫₀¹x⁻ᵖdx 当 p<1 收敛；p=1 均发散。","比较判别保持非负性与不等号方向；等价比较要求比值趋于正的有限常数。","判敛后再计算截断积分并取极限；无界区间不等于必发散。"],
      worked:"判断 ∫₀¹x⁻ᵖdx 的敛散性。",
      solution:"p≠1 时，截断积分为 lim(ε→0+) (1−ε^{1−p})/(1−p)。p<1 时极限为 1/(1−p)；p>1 时发散。p=1 时积分为 lim ln(1/ε)=∞，也发散。因此当且仅当 p<1 收敛。",
      trap:"把 0 端与无穷端的 p-积分条件记反；内部奇点不拆分；用主值代替通常反常积分；直接把无穷代入原函数。",
      check:"能否从截断积分推导 p=1 临界情形，并说明内部奇点为何必须拆成两侧？"
    }
  };
  const aliases = {
    "CAL-06-N10":"CAL-06-A","CAL-06-N11":"CAL-06-B","CAL-06-N12":"CAL-06-B",
    "CAL-06-N28":"CAL-06-E","CAL-06-N29":"CAL-06-E","CAL-06-N30":"CAL-06-E",
    "CAL-06-N63":"CAL-06-B","CAL-06-N64":"CAL-06-D","CAL-06-N65":"CAL-06-G",
    "CAL-06-N66":"CAL-06-F","CAL-06-N67":"CAL-06-H","CAL-06-N82":"CAL-06-E",
    "CAL-06-N83":"CAL-06-F","CAL-06-N95":"CAL-06-B","CAL-06-N96":"CAL-06-A",
    "CAL-06-N97":"CAL-06-C","CAL-06-N124":"CAL-06-E","CAL-06-N125":"CAL-06-E",
    "CAL-06-N126":"CAL-06-D","CAL-06-N147":"CAL-06-E","CAL-06-N148":"CAL-06-E",
    "CAL-06-N01":"CAL-06-E","CAL-06-N02":"CAL-06-H"
  };
  const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const css=document.createElement("style");
  css.textContent=".exam-readiness.cal06{margin:14px 0;padding:13px;border:1px solid #cbdced;border-radius:11px;background:#f5f9fe}.exam-readiness.cal06 h4{margin:7px 0;color:#244f78}.exam-readiness.cal06 p,.exam-readiness.cal06 li{font-size:12px;line-height:1.8}.exam-readiness.cal06 ol,.exam-readiness.cal06 ul{padding-left:22px;margin:5px 0}.exam-readiness.cal06 .readiness-work{padding:9px 11px;margin:8px 0;background:#fff;border-radius:8px}";
  document.head.appendChild(css);
  function enhance(root=document){
    root.querySelectorAll(".atomic-card[id^='card-CAL-06-']").forEach(card=>{
      const body=card.querySelector(".atomic-body");
      if(!body||body.querySelector(".exam-readiness.cal06"))return;
      const id=card.id.replace("card-","");
      const key=guides[id]?id:aliases[id];
      const g=guides[key]||guides["CAL-06-A"];
      const block=document.createElement("section");
      block.className="exam-readiness cal06";
      block.innerHTML='<div class="readiness-tag">真题解题能力补强 · '+esc(id)+'</div>'
        +'<h4>一、真题识别信号</h4><p>'+esc(g.trigger)+'</p>'
        +'<h4>二、考场标准流程</h4><ol>'+g.steps.map(x=>'<li>'+esc(x)+'</li>').join("")+'</ol>'
        +'<div class="readiness-work"><h4>三、独立推导训练</h4><p>'+esc(g.worked)+'</p><p><b>完整推导：</b>'+esc(g.solution)+'</p></div>'
        +'<div class="readiness-work"><h4>四、失分点排查</h4><p>'+esc(g.trap)+'</p></div>'
        +'<div class="readiness-work"><h4>五、真题掌握验收</h4><p>'+esc(g.check)+'</p><ul><li>先独立完成本卡已关联的历年真题，再核对解析。</li><li>必须写出关键中间步骤、适用条件和结论回代；只选对答案不算掌握。</li><li>候选关联不等于人工核验，不能把自动匹配当作真题证据。</li></ul></div>';
      body.appendChild(block);
      if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([block]);
    });
  }
  enhance();
  const target=document.getElementById("cards");
  if(target)new MutationObserver(()=>enhance(target)).observe(target,{childList:true,subtree:true});
})();
