/* index 为 EXAM_DATA 数组序号；仅逐题复核完成的记录可标记 verified。 */
window.EXAM_KNOWLEDGE_MAP = {
  "0": {
    "status": "verified",
    "primary": [
      "CAL-04-B"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "对数复合函数的一、二阶导数；先用链式法则求一阶导，再继续求导。",
    "methods": "链式法则、二阶求导。",
    "pitfalls": "二阶导数漏负号或平方分母。"
  },
  "1": {
    "status": "verified",
    "primary": [
      "CAL-04-A"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "指定点导数给出切线斜率，法线斜率为切线斜率的负倒数。",
    "methods": "反正切求导、点斜式。",
    "pitfalls": "法线斜率只取相反数；切点函数值代错。"
  },
  "2": {
    "status": "verified",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-03-C"
    ],
    "rationale": "直接考查积分中值定理的连续条件及存在 ξ 的结论。",
    "methods": "积分平均值、闭区间连续性质。",
    "pitfalls": "漏掉连续条件；把存在误写为唯一。"
  },
  "3": {
    "status": "verified",
    "primary": [
      "CAL-02-A"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "数列型重要极限，化为 (1+c/n)^n 的指数极限形式。",
    "methods": "重要极限、指数化简。",
    "pitfalls": "指数 n 与分母 n+1 的比例处理错误。"
  },
  "4": {
    "status": "verified",
    "primary": [
      "CAL-06-A"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "不定积分由原函数定义得到；定积分用牛顿—莱布尼茨公式并处理复合自变量。",
    "methods": "基本积分、定积分上下限代入。",
    "pitfalls": "漏写积分常数；对 f'(2x) 积分漏掉 1/2。"
  },
  "5": {
    "status": "verified",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-05-A"
    ],
    "rationale": "用导数恒正证明严格单调，证明过程依赖拉格朗日中值定理。",
    "methods": "中值定理、函数增量。",
    "pitfalls": "未说明任意两点及中值点。"
  },
  "6": {
    "status": "verified",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "驻点处二阶导数为负，使用二阶导数判别极大值。",
    "methods": "二阶导数、导数符号变化。",
    "pitfalls": "仅由一阶导数为零就判断极值。"
  },
  "7": {
    "status": "verified",
    "primary": [
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-07-A"
    ],
    "rationale": "方程化为一阶线性方程，使用积分因子并代入初值求特解。",
    "methods": "积分因子、初值条件。",
    "pitfalls": "误判方程类型；漏代初值。"
  },
  "8": {
    "status": "verified",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-B"
    ],
    "rationale": "二阶常系数非齐次线性方程，先解特征方程再求特解。",
    "methods": "重根齐次解、待定系数法。",
    "pitfalls": "重根解漏写 x 因子；特解与齐次解重复。"
  },
  "9": {
    "status": "verified",
    "primary": [
      "CAL-01-A"
    ],
    "secondary": [
      "CAL-01-C"
    ],
    "rationale": "判断函数奇偶性，比较 f(-x) 与 f(x)。",
    "methods": "绝对值与三角函数奇偶性。",
    "pitfalls": "忽略定义域关于原点对称的前提。"
  },
  "10": {
    "status": "verified",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-01-A"
    ],
    "rationale": "构造数列或子列说明 x sin x 在全实轴无界。",
    "methods": "函数有界性与极限。",
    "pitfalls": "把无界误认为必趋于正无穷。"
  },
  "11": {
    "status": "verified",
    "primary": [
      "CAL-04-A"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "对称差商拆为左右增量商，极限为两倍导数。",
    "methods": "导数定义、极限运算。",
    "pitfalls": "第二项符号处理错误，误得 f'(a)。"
  },
  "12": {
    "status": "verified",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "作 u=tx 换元并同步改变积分限，消去参数 t。",
    "methods": "定积分换元。",
    "pitfalls": "只换被积函数而不换积分限。"
  },
  "13": {
    "status": "verified",
    "primary": [
      "CAL-03-A"
    ],
    "secondary": [
      "CAL-03-B"
    ],
    "rationale": "分段函数在分界点连续，令左右极限相等并等于函数值。",
    "methods": "单侧极限。",
    "pitfalls": "只比较左右表达式而漏掉函数值。"
  },
  "14": {
    "status": "verified",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "先用重要极限求出参数函数，再对参数求导。",
    "methods": "指数型极限、复合求导。",
    "pitfalls": "混淆趋于无穷的变量与参数 t。"
  },
  "15": {
    "status": "verified",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "变上限积分求导，使用微积分基本定理及链式法则。",
    "methods": "复合函数求导。",
    "pitfalls": "漏乘上限 x³−1 的导数。"
  },
  "16": {
    "status": "verified",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-02-B"
    ],
    "rationale": "1^∞ 型极限，取对数后化为乘积极限。",
    "methods": "对数变形、等价无穷小。",
    "pitfalls": "直接套重要极限而未先取对数。"
  },
  "17": {
    "status": "verified",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "根式换元并配合分部积分计算定积分。",
    "methods": "定积分换元、积分限变换。",
    "pitfalls": "微分关系或新积分限错误。"
  },
  "18": {
    "status": "verified",
    "primary": [
      "CAL-04-A"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "先求指定点导数作为切线斜率，再求切线与 x 轴交点。",
    "methods": "多项式求导、直线方程。",
    "pitfalls": "把函数值当斜率；截距符号错误。"
  },
  "19": {
    "status": "verified",
    "primary": [
      "CAL-03-A"
    ],
    "secondary": [
      "CAL-02-B"
    ],
    "rationale": "可导推出连续，利用连续性与严格函数值不等关系确定极限不等式。",
    "methods": "极限与连续定义。",
    "pitfalls": "误认为函数严格不等必推出导数严格不等。"
  },
  "20": {
    "status": "verified",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "微分 dy=f'(x₀)Δx，导数为非零常数，故与 Δx 同阶。",
    "methods": "导数定义、无穷小阶比较。",
    "pitfalls": "将同阶误认为等价。"
  },
  "21": {
    "status": "verified",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "绕 x 轴旋转体体积用圆盘法 V=π∫y²dx。",
    "methods": "定积分、三角幂积分。",
    "pitfalls": "忘记函数值平方或漏乘 π。"
  },
  "22": {
    "status": "verified",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "利用微分方程求出该点二阶导数，再用二阶导数判别极大值。",
    "methods": "微分方程代入、极值判别。",
    "pitfalls": "二阶导数符号判断反了。"
  },
  "23": {
    "status": "verified",
    "primary": [
      "CAL-01-C"
    ],
    "secondary": [
      "CAL-01-B"
    ],
    "rationale": "由复合函数关系反解 φ(x)，结合 φ≥0 确定平方根分支和定义域。",
    "methods": "反函数思路、对数定义域。",
    "pitfalls": "忽略非负条件选错分支。"
  },
  "24": {
    "status": "verified",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "隐函数两次求导，在指定点代入求一、二阶导数。",
    "methods": "链式法则、乘积法则。",
    "pitfalls": "对 e^(xy) 求导漏掉 y+xy'。"
  },
  "25": {
    "status": "verified",
    "primary": [
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-07-C"
    ],
    "rationale": "标准一阶线性微分方程，积分因子为 x，积分后得到通解。",
    "methods": "积分因子、通解验证。",
    "pitfalls": "积分因子错误；忽略 x≠0。"
  },
  "26": {
    "status": "verified",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-02-B"
    ],
    "rationale": "平移积分区间后化简，再求参数趋零极限；核心是积分平均变化率。",
    "methods": "变量替换、极限。",
    "pitfalls": "上下限平移错误；分母系数 4 处理错误。"
  },
  "27": {
    "status": "verified",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-03-C"
    ],
    "rationale": "用积分中值定理把积分平均值表示为 f(c)，再利用 m≤f≤M 证明差值界。",
    "methods": "有界性、绝对值不等式。",
    "pitfalls": "把积分平均值直接等同于 f(x)。"
  },
  "28": {
    "status": "verified",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-02-B"
    ],
    "rationale": "利用 tan(2x)~2x 求三角函数基本极限。",
    "methods": "等价无穷小。",
    "pitfalls": "忘记角度系数 2。"
  },
  "29": {
    "status": "verified",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "定积分分部积分，选 u=t、dv=sin t dt。",
    "methods": "牛顿—莱布尼茨公式。",
    "pitfalls": "分部积分符号或端点代入错误。"
  },
  "30": {
    "status": "verified",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "变上限积分求导得到切线斜率，再写切线方程。",
    "methods": "导数几何意义。",
    "pitfalls": "把积分函数本身当导数。"
  },
  "31": {
    "status": "verified",
    "primary": [
      "CAL-04-A"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "由乘积结构的导数定义求 f'(0)，结果为 n!。",
    "methods": "导数定义、乘积求导。",
    "pitfalls": "漏掉含 x 的因子。"
  },
  "32": {
    "status": "verified",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "设定积分为常数，代回积分方程求常数，再恢复 f(x)。",
    "methods": "定积分线性性质。",
    "pitfalls": "把积分变量 t 当作外部 x。"
  },
  "33": {
    "status": "verified",
    "primary": [
      "CAL-03-A"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "分段函数在 0 连续，右极限 sin(bx)/x=b，与左侧函数值 a 相等。",
    "methods": "重要极限。",
    "pitfalls": "漏掉极限系数 b。"
  },
  "34": {
    "status": "verified",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "对 tan y=x+y 两边微分并整理 dy。",
    "methods": "隐函数求导。",
    "pitfalls": "sec²y−1 化简错误。"
  },
  "35": {
    "status": "verified",
    "primary": [
      "CAL-04-B"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "反正弦复合指数根式函数，连续使用链式法则。",
    "methods": "反三角函数导数、根式求导。",
    "pitfalls": "漏掉内层函数导数因子。"
  },
  "36": {
    "status": "verified",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-A"
    ],
    "rationale": "令 u=ln x 换元，化为幂函数积分。",
    "methods": "基本积分公式。",
    "pitfalls": "漏写 dx/x 或积分常数。"
  },
  "37": {
    "status": "verified",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-02-B"
    ],
    "rationale": "1^∞ 型幂指函数极限，取对数并使用等价无穷小。",
    "methods": "对数变形、等价无穷小。",
    "pitfalls": "先对底数或指数分别取极限。"
  },
  "38": {
    "status": "verified",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "参数方程分别对 t 求导，求 dy/dx 与二阶导数。",
    "methods": "参数求导、链式法则。",
    "pitfalls": "二阶导数漏除 dx/dt。"
  },
  "39": {
    "status": "verified",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "换元将积分区间化为 [0,2]，再对 ∫u²f''(u) 分部积分并使用端点条件。",
    "methods": "分部积分、边界值代入。",
    "pitfalls": "换元系数 1/8 错误；漏算边界项。"
  }
};
