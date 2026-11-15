/* 771 道真题逐题考点映射。index 为 EXAM_DATA 稳定数组序号；pending 不代表无考点。 */
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
      "CAL-06-B"
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
      "CAL-06-A"
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
  },
  "40": {
    "status": "verified",
    "primary": [
      "CAL-05-C"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "考查 x→∞ 的水平渐近线及 x→0+ 时是否存在铅直渐近线。",
    "methods": "分别计算无穷远极限和定义域边界极限。",
    "pitfalls": "只检查 x→∞ 而漏掉 x→0+。"
  },
  "41": {
    "status": "verified",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-05-A"
    ],
    "rationale": "导数恒正使多项式严格递增，再结合两端极限异号确定唯一实根。",
    "methods": "导数符号、介值定理与单调性。",
    "pitfalls": "只证明单调而未证明至少有根。"
  },
  "42": {
    "status": "verified",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "旋转体体积用圆盘法 V=π∫y²dx。",
    "methods": "三角函数平方积分。",
    "pitfalls": "漏乘 π 或错误平方。"
  },
  "43": {
    "status": "verified",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "两个函数各自极大不保证乘积极大，需看函数值符号并构造反例。",
    "methods": "乘积求导、极值定义与反例。",
    "pitfalls": "把两个局部极大直接传递给乘积。"
  },
  "44": {
    "status": "verified",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-B"
    ],
    "rationale": "二阶常系数非齐次方程中，右端 e^x 与齐次解共振，特解需乘 x；常数项另设常数特解。",
    "methods": "特征方程、待定系数法。",
    "pitfalls": "忽略共振导致特解形式错误。"
  },
  "45": {
    "status": "verified",
    "primary": [
      "CAL-04-A"
    ],
    "secondary": [
      "CAL-02-B"
    ],
    "rationale": "选项 D 经变量替换后正是导数定义的左差商，极限存在可推出可导。",
    "methods": "导数定义、极限变量替换。",
    "pitfalls": "把 h→+∞ 误当作 h→0；误判对称差商充分性。"
  },
  "46": {
    "status": "verified",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "参数曲线先求 dy/dx，再取负倒数求法线斜率。",
    "methods": "参数求导、点斜式。",
    "pitfalls": "把切线斜率直接当法线斜率。"
  },
  "47": {
    "status": "verified",
    "primary": [
      "CAL-04-B"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "指数与三角函数复合，连续使用链式法则并处理 1/x 的导数。",
    "methods": "指数函数、三角函数求导。",
    "pitfalls": "漏掉 −1/x² 或 sec²(1/x)。"
  },
  "48": {
    "status": "verified",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-A"
    ],
    "rationale": "令 t=√(1−x) 换元，转化为多项式定积分。",
    "methods": "定积分换元、基本积分。",
    "pitfalls": "换元后上下限方向与负号处理错误。"
  },
  "49": {
    "status": "verified",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-03-C"
    ],
    "rationale": "在整个积分区间上比较被积函数大小，再使用定积分保序性。",
    "methods": "定积分保序性质。",
    "pitfalls": "只比较某一点函数值；忽略区间内处处大小关系。"
  },
  "50": {
    "status": "verified",
    "primary": [
      "CAL-01-A"
    ],
    "secondary": [
      "CAL-01-C"
    ],
    "rationale": "函数值 f(x) 只取 0 或 1，继续代入 f 的定义即可判断复合函数恒为 1。",
    "methods": "复合函数与函数值域。",
    "pitfalls": "未先求内层函数的值域。"
  },
  "51": {
    "status": "verified",
    "primary": [
      "CAL-02-B"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "多项式除法化简有理式，令其极限为零以比较 x 项和常数项。",
    "methods": "无穷远处极限、主导项比较。",
    "pitfalls": "只比较最高次项，漏掉常数余项。"
  },
  "52": {
    "status": "verified",
    "primary": [
      "CAL-06-A"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "不定积分表示原函数族，对其求微分得到 f(x)dx。",
    "methods": "原函数定义、微分与积分互逆。",
    "pitfalls": "把微分结果写成 f(x) 而漏 dx。"
  },
  "53": {
    "status": "verified",
    "primary": [
      "CAL-04-B"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "由 f'=f² 递推求高阶导数，观察并归纳 n! f^(n+1) 的规律。",
    "methods": "乘积求导、数学归纳。",
    "pitfalls": "递推时阶乘或幂次少一阶。"
  },
  "54": {
    "status": "verified",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "变上、下限同时变化，使用莱布尼茨公式并对上限求导、下限项取负。",
    "methods": "链式法则。",
    "pitfalls": "下限项漏负号或漏乘上限导数。"
  },
  "55": {
    "status": "verified",
    "primary": [
      "CAL-03-B"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "由导数定义可知 x→0 时 F(x) 的极限为 f'(0)≠0，但 F(0)=0，故为可去间断。",
    "methods": "导数定义与间断点分类。",
    "pitfalls": "把极限非零误认为连续；忽略题目另定义的 F(0)。"
  },
  "56": {
    "status": "verified",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-02-B"
    ],
    "rationale": "将底数写成 1+2a/(x−a)，套用指数型重要极限得到 e^(2a)。",
    "methods": "重要极限、指数化简。",
    "pitfalls": "指数与分母渐近比例系数漏算 2。"
  },
  "57": {
    "status": "verified",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "对隐式方程两边微分，整理 dx、dy 项求出 dy。",
    "methods": "隐函数求导与全微分。",
    "pitfalls": "对 (x−y)ln(x−y) 使用乘积法则漏项。"
  },
  "58": {
    "status": "verified",
    "primary": [
      "CAL-05-C"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "求二阶导数并检查凹凸性变号，确定拐点坐标。",
    "methods": "二阶导数、符号分析。",
    "pitfalls": "只令 y''=0 不检查变号。"
  },
  "59": {
    "status": "verified",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-A"
    ],
    "rationale": "对 ln x/(1−x)² 使用分部积分，再拆分有理函数积分。",
    "methods": "分部积分、部分分式。",
    "pitfalls": "分部积分负号及对数绝对值遗漏。"
  },
  "60": {
    "status": "verified",
    "primary": [
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-07-A"
    ],
    "rationale": "整理为一阶线性方程，积分因子为 ln x，再用初值确定常数。",
    "methods": "积分因子、初值条件。",
    "pitfalls": "积分因子漏乘或常数求错。"
  },
  "61": {
    "status": "verified",
    "primary": [
      "CAL-04-B"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "对数函数复合指数函数，求导得到 dy=y'dx。",
    "methods": "链式法则、指数函数求导。",
    "pitfalls": "把 3^(−x) 导数写错符号或漏 ln3。"
  },
  "62": {
    "status": "verified",
    "primary": [
      "CAL-05-C"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "求二阶导数并解 y''<0 的区间，判断曲线凹凸区间。",
    "methods": "二阶导数符号表。",
    "pitfalls": "把 y''=0 的点直接当成区间端点而不检查符号。"
  },
  "63": {
    "status": "verified",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "广义积分用分部积分并计算无穷端点极限。",
    "methods": "分部积分、广义积分收敛。",
    "pitfalls": "忽略边界项在无穷远处的极限。"
  },
  "64": {
    "status": "verified",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "路程等于速度绝对值的积分；题给区间速度非负，因此直接积分并换元。",
    "methods": "定积分换元、运动学路程。",
    "pitfalls": "将路程与位移混淆；未检查速度符号。"
  },
  "65": {
    "status": "verified",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-02-B"
    ],
    "rationale": "分子分母同除以 e^(1/x)，利用指数衰减 e^(−1/x)→0。",
    "methods": "无穷小与极限四则运算。",
    "pitfalls": "直接处理两个无穷大而未同除主导项。"
  },
  "66": {
    "status": "verified",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "两曲线在同一点相切，先代点确定参数关系，再隐函数求导比较斜率。",
    "methods": "隐函数求导、切线斜率。",
    "pitfalls": "只代点不比较斜率；隐函数求导符号错误。"
  },
  "67": {
    "status": "verified",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-03-A"
    ],
    "rationale": "按 x 所在区间拆分变上限积分，逐段计算并核对分界点连续。",
    "methods": "定积分可加性、连续性。",
    "pitfalls": "分段积分漏掉前一段累计值。"
  },
  "68": {
    "status": "verified",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-01-A"
    ],
    "rationale": "极大值点经自变量反射与函数值取负的组合变换，极大变为极小。",
    "methods": "函数图像变换、极值定义。",
    "pitfalls": "只反射自变量或只改变函数值符号。"
  },
  "69": {
    "status": "verified",
    "primary": [
      "CAL-05-C"
    ],
    "secondary": [
      "CAL-02-B"
    ],
    "rationale": "分别考察 x→±∞ 与 x→0，确定水平渐近线和铅直渐近线。",
    "methods": "函数极限与渐近线判定。",
    "pitfalls": "只检查无穷远渐近线，漏掉分母为零的点。"
  },
  "70": {
    "status": "verified",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "把细杆分割为微元，写出微元引力并在杆区间上积分。",
    "methods": "定积分建模、微元法。",
    "pitfalls": "距离表达式或积分区间方向错误。"
  },
  "71": {
    "status": "verified",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "参数方程先求一阶导数，再对参数求导并除以 dx/dt 得二阶导数。",
    "methods": "参数求导、商法则。",
    "pitfalls": "二阶导数漏除 dx/dt。"
  },
  "72": {
    "status": "verified",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "令 t=√x，把根式积分转化为有理函数积分。",
    "methods": "定积分换元、部分分式。",
    "pitfalls": "dx=2t dt 后漏掉 t 因子。"
  },
  "73": {
    "status": "verified",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-02-B"
    ],
    "rationale": "分子分母分别用等价无穷小展开，比较同阶主项。",
    "methods": "等价无穷小替换。",
    "pitfalls": "把 x−sin x 错换为 0；忽略三阶主项。"
  },
  "74": {
    "status": "verified",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-A"
    ],
    "rationale": "利用 sin²x=(1−cos2x)/2，再对 x cos2x 分部积分。",
    "methods": "三角恒等变形、分部积分。",
    "pitfalls": "倍角公式或分部积分系数错误。"
  },
  "75": {
    "status": "verified",
    "primary": [
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-06-A"
    ],
    "rationale": "识别 (xy)'=xy'+y，积分后代入初值求常数。",
    "methods": "乘积求导、初值条件。",
    "pitfalls": "漏识别乘积导数；代入 x=1 时漏项。"
  },
  "76": {
    "status": "verified",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "参数方程求导时分别对 x(t)、y(t) 求导，再求比值并代 t=0。",
    "methods": "链式法则。",
    "pitfalls": "把 dy/dx 误写成 dy/dt。"
  },
  "77": {
    "status": "verified",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-05-A"
    ],
    "rationale": "闭区间上求最大值需比较驻点与端点值。",
    "methods": "导数判单调、中值/极值方法。",
    "pitfalls": "只比较驻点，不检查端点。"
  },
  "78": {
    "status": "verified",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-02-B"
    ],
    "rationale": "分子有理化后用二阶小量，分母 e^x−cos x 的主项为 x。",
    "methods": "泰勒/等价无穷小。",
    "pitfalls": "误以为分母首项为 x²，漏掉 e^x 的一次项。"
  },
  "79": {
    "status": "verified",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "广义积分拆成两个基本积分或合并后求无穷端点极限。",
    "methods": "部分分式、广义积分。",
    "pitfalls": "分开处理发散项而未保留抵消结构。"
  },
  "80": {
    "status": "pending",
    "questionKey": "1992-填空题-5",
    "primary": [],
    "secondary": []
  },
  "81": {
    "status": "pending",
    "questionKey": "1992-选择题-1",
    "primary": [],
    "secondary": []
  },
  "82": {
    "status": "pending",
    "questionKey": "1992-选择题-2",
    "primary": [],
    "secondary": []
  },
  "83": {
    "status": "pending",
    "questionKey": "1992-选择题-3",
    "primary": [],
    "secondary": []
  },
  "84": {
    "status": "pending",
    "questionKey": "1992-选择题-4",
    "primary": [],
    "secondary": []
  },
  "85": {
    "status": "pending",
    "questionKey": "1992-选择题-5",
    "primary": [],
    "secondary": []
  },
  "86": {
    "status": "pending",
    "questionKey": "1992-解答题-1",
    "primary": [],
    "secondary": []
  },
  "87": {
    "status": "pending",
    "questionKey": "1992-解答题-2",
    "primary": [],
    "secondary": []
  },
  "88": {
    "status": "pending",
    "questionKey": "1992-解答题-3",
    "primary": [],
    "secondary": []
  },
  "89": {
    "status": "pending",
    "questionKey": "1992-解答题-4",
    "primary": [],
    "secondary": []
  },
  "90": {
    "status": "pending",
    "questionKey": "1992-解答题-5",
    "primary": [],
    "secondary": []
  },
  "91": {
    "status": "pending",
    "questionKey": "1993-填空题-1",
    "primary": [],
    "secondary": []
  },
  "92": {
    "status": "pending",
    "questionKey": "1993-填空题-2",
    "primary": [],
    "secondary": []
  },
  "93": {
    "status": "pending",
    "questionKey": "1993-填空题-3",
    "primary": [],
    "secondary": []
  },
  "94": {
    "status": "pending",
    "questionKey": "1993-填空题-4",
    "primary": [],
    "secondary": []
  },
  "95": {
    "status": "pending",
    "questionKey": "1993-填空题-5",
    "primary": [],
    "secondary": []
  },
  "96": {
    "status": "pending",
    "questionKey": "1993-选择题-1",
    "primary": [],
    "secondary": []
  },
  "97": {
    "status": "pending",
    "questionKey": "1993-选择题-2",
    "primary": [],
    "secondary": []
  },
  "98": {
    "status": "pending",
    "questionKey": "1993-选择题-3",
    "primary": [],
    "secondary": []
  },
  "99": {
    "status": "pending",
    "questionKey": "1993-选择题-4",
    "primary": [],
    "secondary": []
  },
  "100": {
    "status": "pending",
    "questionKey": "1993-选择题-5",
    "primary": [],
    "secondary": []
  },
  "101": {
    "status": "pending",
    "questionKey": "1993-解答题-1",
    "primary": [],
    "secondary": []
  },
  "102": {
    "status": "pending",
    "questionKey": "1993-解答题-2",
    "primary": [],
    "secondary": []
  },
  "103": {
    "status": "pending",
    "questionKey": "1993-解答题-3",
    "primary": [],
    "secondary": []
  },
  "104": {
    "status": "pending",
    "questionKey": "1993-解答题-4",
    "primary": [],
    "secondary": []
  },
  "105": {
    "status": "pending",
    "questionKey": "1993-解答题-5",
    "primary": [],
    "secondary": []
  },
  "106": {
    "status": "pending",
    "questionKey": "1994-填空题-1",
    "primary": [],
    "secondary": []
  },
  "107": {
    "status": "pending",
    "questionKey": "1994-填空题-2",
    "primary": [],
    "secondary": []
  },
  "108": {
    "status": "pending",
    "questionKey": "1994-填空题-3",
    "primary": [],
    "secondary": []
  },
  "109": {
    "status": "pending",
    "questionKey": "1994-填空题-4",
    "primary": [],
    "secondary": []
  },
  "110": {
    "status": "pending",
    "questionKey": "1994-填空题-5",
    "primary": [],
    "secondary": []
  },
  "111": {
    "status": "pending",
    "questionKey": "1994-选择题-1",
    "primary": [],
    "secondary": []
  },
  "112": {
    "status": "pending",
    "questionKey": "1994-选择题-2",
    "primary": [],
    "secondary": []
  },
  "113": {
    "status": "pending",
    "questionKey": "1994-选择题-3",
    "primary": [],
    "secondary": []
  },
  "114": {
    "status": "pending",
    "questionKey": "1994-选择题-4",
    "primary": [],
    "secondary": []
  },
  "115": {
    "status": "pending",
    "questionKey": "1994-选择题-5",
    "primary": [],
    "secondary": []
  },
  "116": {
    "status": "pending",
    "questionKey": "1994-解答题-1",
    "primary": [],
    "secondary": []
  },
  "117": {
    "status": "pending",
    "questionKey": "1994-解答题-2",
    "primary": [],
    "secondary": []
  },
  "118": {
    "status": "pending",
    "questionKey": "1994-解答题-3",
    "primary": [],
    "secondary": []
  },
  "119": {
    "status": "pending",
    "questionKey": "1994-解答题-4",
    "primary": [],
    "secondary": []
  },
  "120": {
    "status": "pending",
    "questionKey": "1994-解答题-5",
    "primary": [],
    "secondary": []
  },
  "121": {
    "status": "pending",
    "questionKey": "1995-填空题-1",
    "primary": [],
    "secondary": []
  },
  "122": {
    "status": "pending",
    "questionKey": "1995-填空题-2",
    "primary": [],
    "secondary": []
  },
  "123": {
    "status": "pending",
    "questionKey": "1995-填空题-3",
    "primary": [],
    "secondary": []
  },
  "124": {
    "status": "pending",
    "questionKey": "1995-填空题-4",
    "primary": [],
    "secondary": []
  },
  "125": {
    "status": "pending",
    "questionKey": "1995-填空题-5",
    "primary": [],
    "secondary": []
  },
  "126": {
    "status": "pending",
    "questionKey": "1995-选择题-1",
    "primary": [],
    "secondary": []
  },
  "127": {
    "status": "pending",
    "questionKey": "1995-选择题-2",
    "primary": [],
    "secondary": []
  },
  "128": {
    "status": "pending",
    "questionKey": "1995-选择题-3",
    "primary": [],
    "secondary": []
  },
  "129": {
    "status": "pending",
    "questionKey": "1995-选择题-4",
    "primary": [],
    "secondary": []
  },
  "130": {
    "status": "pending",
    "questionKey": "1995-选择题-5",
    "primary": [],
    "secondary": []
  },
  "131": {
    "status": "pending",
    "questionKey": "1995-解答题-1",
    "primary": [],
    "secondary": []
  },
  "132": {
    "status": "pending",
    "questionKey": "1995-解答题-2",
    "primary": [],
    "secondary": []
  },
  "133": {
    "status": "pending",
    "questionKey": "1995-解答题-3",
    "primary": [],
    "secondary": []
  },
  "134": {
    "status": "pending",
    "questionKey": "1995-解答题-4",
    "primary": [],
    "secondary": []
  },
  "135": {
    "status": "pending",
    "questionKey": "1995-解答题-5",
    "primary": [],
    "secondary": []
  },
  "136": {
    "status": "pending",
    "questionKey": "1995-解答题-6",
    "primary": [],
    "secondary": []
  },
  "137": {
    "status": "pending",
    "questionKey": "1996-填空题-1",
    "primary": [],
    "secondary": []
  },
  "138": {
    "status": "pending",
    "questionKey": "1996-填空题-2",
    "primary": [],
    "secondary": []
  },
  "139": {
    "status": "pending",
    "questionKey": "1996-填空题-3",
    "primary": [],
    "secondary": []
  },
  "140": {
    "status": "pending",
    "questionKey": "1996-填空题-4",
    "primary": [],
    "secondary": []
  },
  "141": {
    "status": "pending",
    "questionKey": "1996-填空题-5",
    "primary": [],
    "secondary": []
  },
  "142": {
    "status": "pending",
    "questionKey": "1996-选择题-1",
    "primary": [],
    "secondary": []
  },
  "143": {
    "status": "pending",
    "questionKey": "1996-选择题-2",
    "primary": [],
    "secondary": []
  },
  "144": {
    "status": "pending",
    "questionKey": "1996-选择题-3",
    "primary": [],
    "secondary": []
  },
  "145": {
    "status": "pending",
    "questionKey": "1996-选择题-4",
    "primary": [],
    "secondary": []
  },
  "146": {
    "status": "pending",
    "questionKey": "1996-选择题-5",
    "primary": [],
    "secondary": []
  },
  "147": {
    "status": "pending",
    "questionKey": "1996-解答题-1",
    "primary": [],
    "secondary": []
  },
  "148": {
    "status": "pending",
    "questionKey": "1996-解答题-2",
    "primary": [],
    "secondary": []
  },
  "149": {
    "status": "pending",
    "questionKey": "1996-解答题-3",
    "primary": [],
    "secondary": []
  },
  "150": {
    "status": "pending",
    "questionKey": "1996-解答题-4",
    "primary": [],
    "secondary": []
  },
  "151": {
    "status": "pending",
    "questionKey": "1996-解答题-5",
    "primary": [],
    "secondary": []
  },
  "152": {
    "status": "pending",
    "questionKey": "1996-解答题-6",
    "primary": [],
    "secondary": []
  },
  "153": {
    "status": "pending",
    "questionKey": "1997-填空题-1",
    "primary": [],
    "secondary": []
  },
  "154": {
    "status": "pending",
    "questionKey": "1997-填空题-2",
    "primary": [],
    "secondary": []
  },
  "155": {
    "status": "pending",
    "questionKey": "1997-填空题-3",
    "primary": [],
    "secondary": []
  },
  "156": {
    "status": "pending",
    "questionKey": "1997-填空题-4",
    "primary": [],
    "secondary": []
  },
  "157": {
    "status": "pending",
    "questionKey": "1997-填空题-5",
    "primary": [],
    "secondary": []
  },
  "158": {
    "status": "pending",
    "questionKey": "1997-选择题-1",
    "primary": [],
    "secondary": []
  },
  "159": {
    "status": "pending",
    "questionKey": "1997-选择题-2",
    "primary": [],
    "secondary": []
  },
  "160": {
    "status": "pending",
    "questionKey": "1997-选择题-3",
    "primary": [],
    "secondary": []
  },
  "161": {
    "status": "pending",
    "questionKey": "1997-选择题-4",
    "primary": [],
    "secondary": []
  },
  "162": {
    "status": "pending",
    "questionKey": "1997-选择题-5",
    "primary": [],
    "secondary": []
  },
  "163": {
    "status": "pending",
    "questionKey": "1997-解答题-1",
    "primary": [],
    "secondary": []
  },
  "164": {
    "status": "pending",
    "questionKey": "1997-解答题-2",
    "primary": [],
    "secondary": []
  },
  "165": {
    "status": "pending",
    "questionKey": "1997-解答题-3",
    "primary": [],
    "secondary": []
  },
  "166": {
    "status": "pending",
    "questionKey": "1997-解答题-4",
    "primary": [],
    "secondary": []
  },
  "167": {
    "status": "pending",
    "questionKey": "1997-解答题-5",
    "primary": [],
    "secondary": []
  },
  "168": {
    "status": "pending",
    "questionKey": "1997-解答题-6",
    "primary": [],
    "secondary": []
  },
  "169": {
    "status": "pending",
    "questionKey": "1998-填空题-1",
    "primary": [],
    "secondary": []
  },
  "170": {
    "status": "pending",
    "questionKey": "1998-填空题-2",
    "primary": [],
    "secondary": []
  },
  "171": {
    "status": "pending",
    "questionKey": "1998-填空题-3",
    "primary": [],
    "secondary": []
  },
  "172": {
    "status": "pending",
    "questionKey": "1998-填空题-4",
    "primary": [],
    "secondary": []
  },
  "173": {
    "status": "pending",
    "questionKey": "1998-填空题-5",
    "primary": [],
    "secondary": []
  },
  "174": {
    "status": "pending",
    "questionKey": "1998-选择题-1",
    "primary": [],
    "secondary": []
  },
  "175": {
    "status": "pending",
    "questionKey": "1998-选择题-2",
    "primary": [],
    "secondary": []
  },
  "176": {
    "status": "pending",
    "questionKey": "1998-选择题-3",
    "primary": [],
    "secondary": []
  },
  "177": {
    "status": "pending",
    "questionKey": "1998-选择题-4",
    "primary": [],
    "secondary": []
  },
  "178": {
    "status": "pending",
    "questionKey": "1998-选择题-5",
    "primary": [],
    "secondary": []
  },
  "179": {
    "status": "pending",
    "questionKey": "1999-填空题-1",
    "primary": [],
    "secondary": []
  },
  "180": {
    "status": "pending",
    "questionKey": "1999-填空题-2",
    "primary": [],
    "secondary": []
  },
  "181": {
    "status": "pending",
    "questionKey": "1999-填空题-3",
    "primary": [],
    "secondary": []
  },
  "182": {
    "status": "pending",
    "questionKey": "1999-填空题-4",
    "primary": [],
    "secondary": []
  },
  "183": {
    "status": "pending",
    "questionKey": "1999-填空题-5",
    "primary": [],
    "secondary": []
  },
  "184": {
    "status": "pending",
    "questionKey": "1999-选择题-1",
    "primary": [],
    "secondary": []
  },
  "185": {
    "status": "pending",
    "questionKey": "1999-选择题-2",
    "primary": [],
    "secondary": []
  },
  "186": {
    "status": "pending",
    "questionKey": "1999-选择题-3",
    "primary": [],
    "secondary": []
  },
  "187": {
    "status": "pending",
    "questionKey": "1999-选择题-4",
    "primary": [],
    "secondary": []
  },
  "188": {
    "status": "pending",
    "questionKey": "1999-选择题-5",
    "primary": [],
    "secondary": []
  },
  "189": {
    "status": "pending",
    "questionKey": "2000-填空题-1",
    "primary": [],
    "secondary": []
  },
  "190": {
    "status": "pending",
    "questionKey": "2000-填空题-2",
    "primary": [],
    "secondary": []
  },
  "191": {
    "status": "pending",
    "questionKey": "2000-填空题-3",
    "primary": [],
    "secondary": []
  },
  "192": {
    "status": "pending",
    "questionKey": "2000-填空题-4",
    "primary": [],
    "secondary": []
  },
  "193": {
    "status": "pending",
    "questionKey": "2000-填空题-5",
    "primary": [],
    "secondary": []
  },
  "194": {
    "status": "pending",
    "questionKey": "2000-选择题-1",
    "primary": [],
    "secondary": []
  },
  "195": {
    "status": "pending",
    "questionKey": "2000-选择题-2",
    "primary": [],
    "secondary": []
  },
  "196": {
    "status": "pending",
    "questionKey": "2000-选择题-3",
    "primary": [],
    "secondary": []
  },
  "197": {
    "status": "pending",
    "questionKey": "2000-选择题-4",
    "primary": [],
    "secondary": []
  },
  "198": {
    "status": "pending",
    "questionKey": "2000-选择题-5",
    "primary": [],
    "secondary": []
  },
  "199": {
    "status": "pending",
    "questionKey": "2001-填空题-1",
    "primary": [],
    "secondary": []
  },
  "200": {
    "status": "pending",
    "questionKey": "2001-填空题-2",
    "primary": [],
    "secondary": []
  },
  "201": {
    "status": "pending",
    "questionKey": "2001-填空题-3",
    "primary": [],
    "secondary": []
  },
  "202": {
    "status": "pending",
    "questionKey": "2001-填空题-4",
    "primary": [],
    "secondary": []
  },
  "203": {
    "status": "pending",
    "questionKey": "2001-填空题-5",
    "primary": [],
    "secondary": []
  },
  "204": {
    "status": "pending",
    "questionKey": "2001-选择题-1",
    "primary": [],
    "secondary": []
  },
  "205": {
    "status": "pending",
    "questionKey": "2001-选择题-2",
    "primary": [],
    "secondary": []
  },
  "206": {
    "status": "pending",
    "questionKey": "2001-选择题-3",
    "primary": [],
    "secondary": []
  },
  "207": {
    "status": "pending",
    "questionKey": "2001-选择题-4",
    "primary": [],
    "secondary": []
  },
  "208": {
    "status": "pending",
    "questionKey": "2001-选择题-5",
    "primary": [],
    "secondary": []
  },
  "209": {
    "status": "pending",
    "questionKey": "2002-填空题-1",
    "primary": [],
    "secondary": []
  },
  "210": {
    "status": "pending",
    "questionKey": "2002-填空题-2",
    "primary": [],
    "secondary": []
  },
  "211": {
    "status": "pending",
    "questionKey": "2002-填空题-3",
    "primary": [],
    "secondary": []
  },
  "212": {
    "status": "pending",
    "questionKey": "2002-填空题-4",
    "primary": [],
    "secondary": []
  },
  "213": {
    "status": "pending",
    "questionKey": "2002-填空题-5",
    "primary": [],
    "secondary": []
  },
  "214": {
    "status": "pending",
    "questionKey": "2002-选择题-1",
    "primary": [],
    "secondary": []
  },
  "215": {
    "status": "pending",
    "questionKey": "2002-选择题-2",
    "primary": [],
    "secondary": []
  },
  "216": {
    "status": "pending",
    "questionKey": "2002-选择题-3",
    "primary": [],
    "secondary": []
  },
  "217": {
    "status": "pending",
    "questionKey": "2002-选择题-4",
    "primary": [],
    "secondary": []
  },
  "218": {
    "status": "pending",
    "questionKey": "2002-选择题-5",
    "primary": [],
    "secondary": []
  },
  "219": {
    "status": "pending",
    "questionKey": "2003-填空题-1",
    "primary": [],
    "secondary": []
  },
  "220": {
    "status": "pending",
    "questionKey": "2003-填空题-2",
    "primary": [],
    "secondary": []
  },
  "221": {
    "status": "pending",
    "questionKey": "2003-填空题-3",
    "primary": [],
    "secondary": []
  },
  "222": {
    "status": "pending",
    "questionKey": "2003-填空题-4",
    "primary": [],
    "secondary": []
  },
  "223": {
    "status": "pending",
    "questionKey": "2003-填空题-5",
    "primary": [],
    "secondary": []
  },
  "224": {
    "status": "pending",
    "questionKey": "2003-填空题-6",
    "primary": [],
    "secondary": []
  },
  "225": {
    "status": "pending",
    "questionKey": "2003-选择题-1",
    "primary": [],
    "secondary": []
  },
  "226": {
    "status": "pending",
    "questionKey": "2003-选择题-2",
    "primary": [],
    "secondary": []
  },
  "227": {
    "status": "pending",
    "questionKey": "2003-选择题-3",
    "primary": [],
    "secondary": []
  },
  "228": {
    "status": "pending",
    "questionKey": "2003-选择题-4",
    "primary": [],
    "secondary": []
  },
  "229": {
    "status": "pending",
    "questionKey": "2003-选择题-5",
    "primary": [],
    "secondary": []
  },
  "230": {
    "status": "pending",
    "questionKey": "2003-选择题-6",
    "primary": [],
    "secondary": []
  },
  "231": {
    "status": "pending",
    "questionKey": "2004-填空题-1",
    "primary": [],
    "secondary": []
  },
  "232": {
    "status": "pending",
    "questionKey": "2004-填空题-2",
    "primary": [],
    "secondary": []
  },
  "233": {
    "status": "pending",
    "questionKey": "2004-填空题-3",
    "primary": [],
    "secondary": []
  },
  "234": {
    "status": "pending",
    "questionKey": "2004-填空题-4",
    "primary": [],
    "secondary": []
  },
  "235": {
    "status": "pending",
    "questionKey": "2004-填空题-5",
    "primary": [],
    "secondary": []
  },
  "236": {
    "status": "pending",
    "questionKey": "2004-填空题-6",
    "primary": [],
    "secondary": []
  },
  "237": {
    "status": "pending",
    "questionKey": "2004-选择题-7",
    "primary": [],
    "secondary": []
  },
  "238": {
    "status": "pending",
    "questionKey": "2004-选择题-8",
    "primary": [],
    "secondary": []
  },
  "239": {
    "status": "pending",
    "questionKey": "2004-选择题-9",
    "primary": [],
    "secondary": []
  },
  "240": {
    "status": "pending",
    "questionKey": "2004-选择题-10",
    "primary": [],
    "secondary": []
  },
  "241": {
    "status": "pending",
    "questionKey": "2004-选择题-11",
    "primary": [],
    "secondary": []
  },
  "242": {
    "status": "pending",
    "questionKey": "2004-选择题-12",
    "primary": [],
    "secondary": []
  },
  "243": {
    "status": "pending",
    "questionKey": "2004-选择题-13",
    "primary": [],
    "secondary": []
  },
  "244": {
    "status": "pending",
    "questionKey": "2004-选择题-14",
    "primary": [],
    "secondary": []
  },
  "245": {
    "status": "pending",
    "questionKey": "2004-解答题-15",
    "primary": [],
    "secondary": []
  },
  "246": {
    "status": "pending",
    "questionKey": "2004-解答题-16",
    "primary": [],
    "secondary": []
  },
  "247": {
    "status": "pending",
    "questionKey": "2004-解答题-17",
    "primary": [],
    "secondary": []
  },
  "248": {
    "status": "pending",
    "questionKey": "2004-解答题-18",
    "primary": [],
    "secondary": []
  },
  "249": {
    "status": "pending",
    "questionKey": "2004-解答题-19",
    "primary": [],
    "secondary": []
  },
  "250": {
    "status": "pending",
    "questionKey": "2004-解答题-20",
    "primary": [],
    "secondary": []
  },
  "251": {
    "status": "pending",
    "questionKey": "2004-解答题-21",
    "primary": [],
    "secondary": []
  },
  "252": {
    "status": "pending",
    "questionKey": "2004-解答题-22",
    "primary": [],
    "secondary": []
  },
  "253": {
    "status": "pending",
    "questionKey": "2004-解答题-23",
    "primary": [],
    "secondary": []
  },
  "254": {
    "status": "pending",
    "questionKey": "2005-填空题-1",
    "primary": [],
    "secondary": []
  },
  "255": {
    "status": "pending",
    "questionKey": "2005-填空题-2",
    "primary": [],
    "secondary": []
  },
  "256": {
    "status": "pending",
    "questionKey": "2005-填空题-3",
    "primary": [],
    "secondary": []
  },
  "257": {
    "status": "pending",
    "questionKey": "2005-填空题-4",
    "primary": [],
    "secondary": []
  },
  "258": {
    "status": "pending",
    "questionKey": "2005-填空题-5",
    "primary": [],
    "secondary": []
  },
  "259": {
    "status": "pending",
    "questionKey": "2005-填空题-6",
    "primary": [],
    "secondary": []
  },
  "260": {
    "status": "pending",
    "questionKey": "2005-选择题-7",
    "primary": [],
    "secondary": []
  },
  "261": {
    "status": "pending",
    "questionKey": "2005-选择题-8",
    "primary": [],
    "secondary": []
  },
  "262": {
    "status": "pending",
    "questionKey": "2005-选择题-9",
    "primary": [],
    "secondary": []
  },
  "263": {
    "status": "pending",
    "questionKey": "2005-选择题-10",
    "primary": [],
    "secondary": []
  },
  "264": {
    "status": "pending",
    "questionKey": "2005-选择题-11",
    "primary": [],
    "secondary": []
  },
  "265": {
    "status": "pending",
    "questionKey": "2005-选择题-12",
    "primary": [],
    "secondary": []
  },
  "266": {
    "status": "pending",
    "questionKey": "2005-选择题-13",
    "primary": [],
    "secondary": []
  },
  "267": {
    "status": "pending",
    "questionKey": "2005-选择题-14",
    "primary": [],
    "secondary": []
  },
  "268": {
    "status": "pending",
    "questionKey": "2005-解答题-15",
    "primary": [],
    "secondary": []
  },
  "269": {
    "status": "pending",
    "questionKey": "2005-解答题-16",
    "primary": [],
    "secondary": []
  },
  "270": {
    "status": "pending",
    "questionKey": "2005-解答题-17",
    "primary": [],
    "secondary": []
  },
  "271": {
    "status": "pending",
    "questionKey": "2005-解答题-18",
    "primary": [],
    "secondary": []
  },
  "272": {
    "status": "pending",
    "questionKey": "2005-解答题-19",
    "primary": [],
    "secondary": []
  },
  "273": {
    "status": "pending",
    "questionKey": "2005-解答题-20",
    "primary": [],
    "secondary": []
  },
  "274": {
    "status": "pending",
    "questionKey": "2005-解答题-21",
    "primary": [],
    "secondary": []
  },
  "275": {
    "status": "pending",
    "questionKey": "2005-解答题-22",
    "primary": [],
    "secondary": []
  },
  "276": {
    "status": "pending",
    "questionKey": "2005-解答题-23",
    "primary": [],
    "secondary": []
  },
  "277": {
    "status": "pending",
    "questionKey": "2006-填空题-1",
    "primary": [],
    "secondary": []
  },
  "278": {
    "status": "pending",
    "questionKey": "2006-填空题-2",
    "primary": [],
    "secondary": []
  },
  "279": {
    "status": "pending",
    "questionKey": "2006-填空题-3",
    "primary": [],
    "secondary": []
  },
  "280": {
    "status": "pending",
    "questionKey": "2006-填空题-4",
    "primary": [],
    "secondary": []
  },
  "281": {
    "status": "pending",
    "questionKey": "2006-填空题-5",
    "primary": [],
    "secondary": []
  },
  "282": {
    "status": "pending",
    "questionKey": "2006-填空题-6",
    "primary": [],
    "secondary": []
  },
  "283": {
    "status": "pending",
    "questionKey": "2006-选择题-7",
    "primary": [],
    "secondary": []
  },
  "284": {
    "status": "pending",
    "questionKey": "2006-选择题-8",
    "primary": [],
    "secondary": []
  },
  "285": {
    "status": "pending",
    "questionKey": "2006-选择题-9",
    "primary": [],
    "secondary": []
  },
  "286": {
    "status": "pending",
    "questionKey": "2006-选择题-10",
    "primary": [],
    "secondary": []
  },
  "287": {
    "status": "pending",
    "questionKey": "2006-选择题-11",
    "primary": [],
    "secondary": []
  },
  "288": {
    "status": "pending",
    "questionKey": "2006-选择题-12",
    "primary": [],
    "secondary": []
  },
  "289": {
    "status": "pending",
    "questionKey": "2006-选择题-13",
    "primary": [],
    "secondary": []
  },
  "290": {
    "status": "pending",
    "questionKey": "2006-选择题-14",
    "primary": [],
    "secondary": []
  },
  "291": {
    "status": "pending",
    "questionKey": "2006-解答题-15",
    "primary": [],
    "secondary": []
  },
  "292": {
    "status": "pending",
    "questionKey": "2006-解答题-16",
    "primary": [],
    "secondary": []
  },
  "293": {
    "status": "pending",
    "questionKey": "2006-解答题-17",
    "primary": [],
    "secondary": []
  },
  "294": {
    "status": "pending",
    "questionKey": "2006-解答题-18",
    "primary": [],
    "secondary": []
  },
  "295": {
    "status": "pending",
    "questionKey": "2006-解答题-19",
    "primary": [],
    "secondary": []
  },
  "296": {
    "status": "pending",
    "questionKey": "2006-解答题-20",
    "primary": [],
    "secondary": []
  },
  "297": {
    "status": "pending",
    "questionKey": "2006-解答题-21",
    "primary": [],
    "secondary": []
  },
  "298": {
    "status": "pending",
    "questionKey": "2006-解答题-22",
    "primary": [],
    "secondary": []
  },
  "299": {
    "status": "pending",
    "questionKey": "2006-解答题-23",
    "primary": [],
    "secondary": []
  },
  "300": {
    "status": "pending",
    "questionKey": "2007-选择题-1",
    "primary": [],
    "secondary": []
  },
  "301": {
    "status": "pending",
    "questionKey": "2007-选择题-2",
    "primary": [],
    "secondary": []
  },
  "302": {
    "status": "pending",
    "questionKey": "2007-选择题-3",
    "primary": [],
    "secondary": []
  },
  "303": {
    "status": "pending",
    "questionKey": "2007-选择题-4",
    "primary": [],
    "secondary": []
  },
  "304": {
    "status": "pending",
    "questionKey": "2007-选择题-5",
    "primary": [],
    "secondary": []
  },
  "305": {
    "status": "pending",
    "questionKey": "2007-选择题-6",
    "primary": [],
    "secondary": []
  },
  "306": {
    "status": "pending",
    "questionKey": "2007-选择题-7",
    "primary": [],
    "secondary": []
  },
  "307": {
    "status": "pending",
    "questionKey": "2007-选择题-8",
    "primary": [],
    "secondary": []
  },
  "308": {
    "status": "pending",
    "questionKey": "2007-选择题-9",
    "primary": [],
    "secondary": []
  },
  "309": {
    "status": "pending",
    "questionKey": "2007-选择题-10",
    "primary": [],
    "secondary": []
  },
  "310": {
    "status": "pending",
    "questionKey": "2007-填空题-11",
    "primary": [],
    "secondary": []
  },
  "311": {
    "status": "pending",
    "questionKey": "2007-填空题-12",
    "primary": [],
    "secondary": []
  },
  "312": {
    "status": "pending",
    "questionKey": "2007-填空题-13",
    "primary": [],
    "secondary": []
  },
  "313": {
    "status": "pending",
    "questionKey": "2007-填空题-14",
    "primary": [],
    "secondary": []
  },
  "314": {
    "status": "pending",
    "questionKey": "2007-填空题-15",
    "primary": [],
    "secondary": []
  },
  "315": {
    "status": "pending",
    "questionKey": "2007-填空题-16",
    "primary": [],
    "secondary": []
  },
  "316": {
    "status": "pending",
    "questionKey": "2007-解答题-17",
    "primary": [],
    "secondary": []
  },
  "317": {
    "status": "pending",
    "questionKey": "2007-解答题-18",
    "primary": [],
    "secondary": []
  },
  "318": {
    "status": "pending",
    "questionKey": "2007-解答题-19",
    "primary": [],
    "secondary": []
  },
  "319": {
    "status": "pending",
    "questionKey": "2007-解答题-20",
    "primary": [],
    "secondary": []
  },
  "320": {
    "status": "pending",
    "questionKey": "2007-解答题-21",
    "primary": [],
    "secondary": []
  },
  "321": {
    "status": "pending",
    "questionKey": "2007-解答题-22",
    "primary": [],
    "secondary": []
  },
  "322": {
    "status": "pending",
    "questionKey": "2007-解答题-23",
    "primary": [],
    "secondary": []
  },
  "323": {
    "status": "pending",
    "questionKey": "2007-解答题-24",
    "primary": [],
    "secondary": []
  },
  "324": {
    "status": "pending",
    "questionKey": "2008-选择题-1",
    "primary": [],
    "secondary": []
  },
  "325": {
    "status": "pending",
    "questionKey": "2008-选择题-2",
    "primary": [],
    "secondary": []
  },
  "326": {
    "status": "pending",
    "questionKey": "2008-选择题-3",
    "primary": [],
    "secondary": []
  },
  "327": {
    "status": "pending",
    "questionKey": "2008-选择题-4",
    "primary": [],
    "secondary": []
  },
  "328": {
    "status": "pending",
    "questionKey": "2008-选择题-5",
    "primary": [],
    "secondary": []
  },
  "329": {
    "status": "pending",
    "questionKey": "2008-选择题-6",
    "primary": [],
    "secondary": []
  },
  "330": {
    "status": "pending",
    "questionKey": "2008-选择题-7",
    "primary": [],
    "secondary": []
  },
  "331": {
    "status": "pending",
    "questionKey": "2008-选择题-8",
    "primary": [],
    "secondary": []
  },
  "332": {
    "status": "pending",
    "questionKey": "2008-填空题-9",
    "primary": [],
    "secondary": []
  },
  "333": {
    "status": "pending",
    "questionKey": "2008-填空题-10",
    "primary": [],
    "secondary": []
  },
  "334": {
    "status": "pending",
    "questionKey": "2008-填空题-11",
    "primary": [],
    "secondary": []
  },
  "335": {
    "status": "pending",
    "questionKey": "2008-填空题-12",
    "primary": [],
    "secondary": []
  },
  "336": {
    "status": "pending",
    "questionKey": "2008-填空题-13",
    "primary": [],
    "secondary": []
  },
  "337": {
    "status": "pending",
    "questionKey": "2008-填空题-14",
    "primary": [],
    "secondary": []
  },
  "338": {
    "status": "pending",
    "questionKey": "2008-解答题-15",
    "primary": [],
    "secondary": []
  },
  "339": {
    "status": "pending",
    "questionKey": "2008-解答题-16",
    "primary": [],
    "secondary": []
  },
  "340": {
    "status": "pending",
    "questionKey": "2008-解答题-17",
    "primary": [],
    "secondary": []
  },
  "341": {
    "status": "pending",
    "questionKey": "2008-解答题-18",
    "primary": [],
    "secondary": []
  },
  "342": {
    "status": "pending",
    "questionKey": "2008-解答题-19",
    "primary": [],
    "secondary": []
  },
  "343": {
    "status": "pending",
    "questionKey": "2008-解答题-20",
    "primary": [],
    "secondary": []
  },
  "344": {
    "status": "pending",
    "questionKey": "2008-解答题-21",
    "primary": [],
    "secondary": []
  },
  "345": {
    "status": "pending",
    "questionKey": "2008-解答题-22",
    "primary": [],
    "secondary": []
  },
  "346": {
    "status": "pending",
    "questionKey": "2008-解答题-23",
    "primary": [],
    "secondary": []
  },
  "347": {
    "status": "pending",
    "questionKey": "2009-选择题-1",
    "primary": [],
    "secondary": []
  },
  "348": {
    "status": "pending",
    "questionKey": "2009-选择题-2",
    "primary": [],
    "secondary": []
  },
  "349": {
    "status": "pending",
    "questionKey": "2009-选择题-3",
    "primary": [],
    "secondary": []
  },
  "350": {
    "status": "pending",
    "questionKey": "2009-选择题-4",
    "primary": [],
    "secondary": []
  },
  "351": {
    "status": "pending",
    "questionKey": "2009-选择题-5",
    "primary": [],
    "secondary": []
  },
  "352": {
    "status": "pending",
    "questionKey": "2009-选择题-6",
    "primary": [],
    "secondary": []
  },
  "353": {
    "status": "pending",
    "questionKey": "2009-选择题-7",
    "primary": [],
    "secondary": []
  },
  "354": {
    "status": "pending",
    "questionKey": "2009-选择题-8",
    "primary": [],
    "secondary": []
  },
  "355": {
    "status": "pending",
    "questionKey": "2009-填空题-9",
    "primary": [],
    "secondary": []
  },
  "356": {
    "status": "pending",
    "questionKey": "2009-填空题-10",
    "primary": [],
    "secondary": []
  },
  "357": {
    "status": "pending",
    "questionKey": "2009-填空题-11",
    "primary": [],
    "secondary": []
  },
  "358": {
    "status": "pending",
    "questionKey": "2009-填空题-12",
    "primary": [],
    "secondary": []
  },
  "359": {
    "status": "pending",
    "questionKey": "2009-填空题-13",
    "primary": [],
    "secondary": []
  },
  "360": {
    "status": "pending",
    "questionKey": "2009-填空题-14",
    "primary": [],
    "secondary": []
  },
  "361": {
    "status": "pending",
    "questionKey": "2009-解答题-15",
    "primary": [],
    "secondary": []
  },
  "362": {
    "status": "pending",
    "questionKey": "2009-解答题-16",
    "primary": [],
    "secondary": []
  },
  "363": {
    "status": "pending",
    "questionKey": "2009-解答题-17",
    "primary": [],
    "secondary": []
  },
  "364": {
    "status": "pending",
    "questionKey": "2009-解答题-18",
    "primary": [],
    "secondary": []
  },
  "365": {
    "status": "pending",
    "questionKey": "2009-解答题-19",
    "primary": [],
    "secondary": []
  },
  "366": {
    "status": "pending",
    "questionKey": "2009-解答题-20",
    "primary": [],
    "secondary": []
  },
  "367": {
    "status": "pending",
    "questionKey": "2009-解答题-21",
    "primary": [],
    "secondary": []
  },
  "368": {
    "status": "pending",
    "questionKey": "2009-解答题-22",
    "primary": [],
    "secondary": []
  },
  "369": {
    "status": "pending",
    "questionKey": "2009-解答题-23",
    "primary": [],
    "secondary": []
  },
  "370": {
    "status": "pending",
    "questionKey": "2010-选择题-1",
    "primary": [],
    "secondary": []
  },
  "371": {
    "status": "pending",
    "questionKey": "2010-选择题-2",
    "primary": [],
    "secondary": []
  },
  "372": {
    "status": "pending",
    "questionKey": "2010-选择题-3",
    "primary": [],
    "secondary": []
  },
  "373": {
    "status": "pending",
    "questionKey": "2010-选择题-4",
    "primary": [],
    "secondary": []
  },
  "374": {
    "status": "pending",
    "questionKey": "2010-选择题-5",
    "primary": [],
    "secondary": []
  },
  "375": {
    "status": "pending",
    "questionKey": "2010-选择题-6",
    "primary": [],
    "secondary": []
  },
  "376": {
    "status": "pending",
    "questionKey": "2010-选择题-7",
    "primary": [],
    "secondary": []
  },
  "377": {
    "status": "pending",
    "questionKey": "2010-选择题-8",
    "primary": [],
    "secondary": []
  },
  "378": {
    "status": "pending",
    "questionKey": "2010-填空题-9",
    "primary": [],
    "secondary": []
  },
  "379": {
    "status": "pending",
    "questionKey": "2010-填空题-10",
    "primary": [],
    "secondary": []
  },
  "380": {
    "status": "pending",
    "questionKey": "2010-填空题-11",
    "primary": [],
    "secondary": []
  },
  "381": {
    "status": "pending",
    "questionKey": "2010-填空题-12",
    "primary": [],
    "secondary": []
  },
  "382": {
    "status": "pending",
    "questionKey": "2010-填空题-13",
    "primary": [],
    "secondary": []
  },
  "383": {
    "status": "pending",
    "questionKey": "2010-填空题-14",
    "primary": [],
    "secondary": []
  },
  "384": {
    "status": "pending",
    "questionKey": "2010-解答题-15",
    "primary": [],
    "secondary": []
  },
  "385": {
    "status": "pending",
    "questionKey": "2010-解答题-16",
    "primary": [],
    "secondary": []
  },
  "386": {
    "status": "pending",
    "questionKey": "2010-解答题-17",
    "primary": [],
    "secondary": []
  },
  "387": {
    "status": "pending",
    "questionKey": "2010-解答题-18",
    "primary": [],
    "secondary": []
  },
  "388": {
    "status": "pending",
    "questionKey": "2010-解答题-19",
    "primary": [],
    "secondary": []
  },
  "389": {
    "status": "pending",
    "questionKey": "2010-解答题-20",
    "primary": [],
    "secondary": []
  },
  "390": {
    "status": "pending",
    "questionKey": "2010-解答题-21",
    "primary": [],
    "secondary": []
  },
  "391": {
    "status": "pending",
    "questionKey": "2010-解答题-22",
    "primary": [],
    "secondary": []
  },
  "392": {
    "status": "pending",
    "questionKey": "2010-解答题-23",
    "primary": [],
    "secondary": []
  },
  "393": {
    "status": "pending",
    "questionKey": "2011-选择题-1",
    "primary": [],
    "secondary": []
  },
  "394": {
    "status": "pending",
    "questionKey": "2011-选择题-2",
    "primary": [],
    "secondary": []
  },
  "395": {
    "status": "pending",
    "questionKey": "2011-选择题-3",
    "primary": [],
    "secondary": []
  },
  "396": {
    "status": "pending",
    "questionKey": "2011-选择题-4",
    "primary": [],
    "secondary": []
  },
  "397": {
    "status": "pending",
    "questionKey": "2011-选择题-5",
    "primary": [],
    "secondary": []
  },
  "398": {
    "status": "pending",
    "questionKey": "2011-选择题-6",
    "primary": [],
    "secondary": []
  },
  "399": {
    "status": "pending",
    "questionKey": "2011-选择题-7",
    "primary": [],
    "secondary": []
  },
  "400": {
    "status": "pending",
    "questionKey": "2011-选择题-8",
    "primary": [],
    "secondary": []
  },
  "401": {
    "status": "pending",
    "questionKey": "2011-填空题-9",
    "primary": [],
    "secondary": []
  },
  "402": {
    "status": "pending",
    "questionKey": "2011-填空题-10",
    "primary": [],
    "secondary": []
  },
  "403": {
    "status": "pending",
    "questionKey": "2011-填空题-11",
    "primary": [],
    "secondary": []
  },
  "404": {
    "status": "pending",
    "questionKey": "2011-填空题-12",
    "primary": [],
    "secondary": []
  },
  "405": {
    "status": "pending",
    "questionKey": "2011-填空题-13",
    "primary": [],
    "secondary": []
  },
  "406": {
    "status": "pending",
    "questionKey": "2011-填空题-14",
    "primary": [],
    "secondary": []
  },
  "407": {
    "status": "pending",
    "questionKey": "2011-解答题-15",
    "primary": [],
    "secondary": []
  },
  "408": {
    "status": "pending",
    "questionKey": "2011-解答题-16",
    "primary": [],
    "secondary": []
  },
  "409": {
    "status": "pending",
    "questionKey": "2011-解答题-17",
    "primary": [],
    "secondary": []
  },
  "410": {
    "status": "pending",
    "questionKey": "2011-解答题-18",
    "primary": [],
    "secondary": []
  },
  "411": {
    "status": "pending",
    "questionKey": "2011-解答题-19",
    "primary": [],
    "secondary": []
  },
  "412": {
    "status": "pending",
    "questionKey": "2011-解答题-20",
    "primary": [],
    "secondary": []
  },
  "413": {
    "status": "pending",
    "questionKey": "2011-解答题-21",
    "primary": [],
    "secondary": []
  },
  "414": {
    "status": "pending",
    "questionKey": "2011-解答题-22",
    "primary": [],
    "secondary": []
  },
  "415": {
    "status": "pending",
    "questionKey": "2011-解答题-23",
    "primary": [],
    "secondary": []
  },
  "416": {
    "status": "pending",
    "questionKey": "2012-选择题-1",
    "primary": [],
    "secondary": []
  },
  "417": {
    "status": "pending",
    "questionKey": "2012-选择题-2",
    "primary": [],
    "secondary": []
  },
  "418": {
    "status": "pending",
    "questionKey": "2012-选择题-3",
    "primary": [],
    "secondary": []
  },
  "419": {
    "status": "pending",
    "questionKey": "2012-选择题-4",
    "primary": [],
    "secondary": []
  },
  "420": {
    "status": "pending",
    "questionKey": "2012-选择题-5",
    "primary": [],
    "secondary": []
  },
  "421": {
    "status": "pending",
    "questionKey": "2012-选择题-6",
    "primary": [],
    "secondary": []
  },
  "422": {
    "status": "pending",
    "questionKey": "2012-选择题-7",
    "primary": [],
    "secondary": []
  },
  "423": {
    "status": "pending",
    "questionKey": "2012-选择题-8",
    "primary": [],
    "secondary": []
  },
  "424": {
    "status": "pending",
    "questionKey": "2012-填空题-9",
    "primary": [],
    "secondary": []
  },
  "425": {
    "status": "pending",
    "questionKey": "2012-填空题-10",
    "primary": [],
    "secondary": []
  },
  "426": {
    "status": "pending",
    "questionKey": "2012-填空题-11",
    "primary": [],
    "secondary": []
  },
  "427": {
    "status": "pending",
    "questionKey": "2012-填空题-12",
    "primary": [],
    "secondary": []
  },
  "428": {
    "status": "pending",
    "questionKey": "2012-填空题-13",
    "primary": [],
    "secondary": []
  },
  "429": {
    "status": "pending",
    "questionKey": "2012-填空题-14",
    "primary": [],
    "secondary": []
  },
  "430": {
    "status": "pending",
    "questionKey": "2012-解答题-15",
    "primary": [],
    "secondary": []
  },
  "431": {
    "status": "pending",
    "questionKey": "2012-解答题-16",
    "primary": [],
    "secondary": []
  },
  "432": {
    "status": "pending",
    "questionKey": "2012-解答题-17",
    "primary": [],
    "secondary": []
  },
  "433": {
    "status": "pending",
    "questionKey": "2012-解答题-18",
    "primary": [],
    "secondary": []
  },
  "434": {
    "status": "pending",
    "questionKey": "2012-解答题-19",
    "primary": [],
    "secondary": []
  },
  "435": {
    "status": "pending",
    "questionKey": "2012-解答题-20",
    "primary": [],
    "secondary": []
  },
  "436": {
    "status": "pending",
    "questionKey": "2012-解答题-21",
    "primary": [],
    "secondary": []
  },
  "437": {
    "status": "pending",
    "questionKey": "2012-解答题-22",
    "primary": [],
    "secondary": []
  },
  "438": {
    "status": "pending",
    "questionKey": "2012-解答题-23",
    "primary": [],
    "secondary": []
  },
  "439": {
    "status": "pending",
    "questionKey": "2013-选择题-1",
    "primary": [],
    "secondary": []
  },
  "440": {
    "status": "pending",
    "questionKey": "2013-选择题-2",
    "primary": [],
    "secondary": []
  },
  "441": {
    "status": "pending",
    "questionKey": "2013-选择题-3",
    "primary": [],
    "secondary": []
  },
  "442": {
    "status": "pending",
    "questionKey": "2013-选择题-4",
    "primary": [],
    "secondary": []
  },
  "443": {
    "status": "pending",
    "questionKey": "2013-选择题-5",
    "primary": [],
    "secondary": []
  },
  "444": {
    "status": "pending",
    "questionKey": "2013-选择题-6",
    "primary": [],
    "secondary": []
  },
  "445": {
    "status": "pending",
    "questionKey": "2013-选择题-7",
    "primary": [],
    "secondary": []
  },
  "446": {
    "status": "pending",
    "questionKey": "2013-选择题-8",
    "primary": [],
    "secondary": []
  },
  "447": {
    "status": "pending",
    "questionKey": "2013-填空题-9",
    "primary": [],
    "secondary": []
  },
  "448": {
    "status": "pending",
    "questionKey": "2013-填空题-10",
    "primary": [],
    "secondary": []
  },
  "449": {
    "status": "pending",
    "questionKey": "2013-填空题-11",
    "primary": [],
    "secondary": []
  },
  "450": {
    "status": "pending",
    "questionKey": "2013-填空题-12",
    "primary": [],
    "secondary": []
  },
  "451": {
    "status": "pending",
    "questionKey": "2013-填空题-13",
    "primary": [],
    "secondary": []
  },
  "452": {
    "status": "pending",
    "questionKey": "2013-填空题-14",
    "primary": [],
    "secondary": []
  },
  "453": {
    "status": "pending",
    "questionKey": "2013-解答题-15",
    "primary": [],
    "secondary": []
  },
  "454": {
    "status": "pending",
    "questionKey": "2013-解答题-16",
    "primary": [],
    "secondary": []
  },
  "455": {
    "status": "pending",
    "questionKey": "2013-解答题-17",
    "primary": [],
    "secondary": []
  },
  "456": {
    "status": "pending",
    "questionKey": "2013-解答题-18",
    "primary": [],
    "secondary": []
  },
  "457": {
    "status": "pending",
    "questionKey": "2013-解答题-19",
    "primary": [],
    "secondary": []
  },
  "458": {
    "status": "pending",
    "questionKey": "2013-解答题-20",
    "primary": [],
    "secondary": []
  },
  "459": {
    "status": "pending",
    "questionKey": "2013-解答题-21",
    "primary": [],
    "secondary": []
  },
  "460": {
    "status": "pending",
    "questionKey": "2013-解答题-22",
    "primary": [],
    "secondary": []
  },
  "461": {
    "status": "pending",
    "questionKey": "2013-解答题-23",
    "primary": [],
    "secondary": []
  },
  "462": {
    "status": "pending",
    "questionKey": "2014-选择题-1",
    "primary": [],
    "secondary": []
  },
  "463": {
    "status": "pending",
    "questionKey": "2014-选择题-2",
    "primary": [],
    "secondary": []
  },
  "464": {
    "status": "pending",
    "questionKey": "2014-选择题-3",
    "primary": [],
    "secondary": []
  },
  "465": {
    "status": "pending",
    "questionKey": "2014-选择题-4",
    "primary": [],
    "secondary": []
  },
  "466": {
    "status": "pending",
    "questionKey": "2014-选择题-5",
    "primary": [],
    "secondary": []
  },
  "467": {
    "status": "pending",
    "questionKey": "2014-选择题-6",
    "primary": [],
    "secondary": []
  },
  "468": {
    "status": "pending",
    "questionKey": "2014-选择题-7",
    "primary": [],
    "secondary": []
  },
  "469": {
    "status": "pending",
    "questionKey": "2014-选择题-8",
    "primary": [],
    "secondary": []
  },
  "470": {
    "status": "pending",
    "questionKey": "2014-填空题-9",
    "primary": [],
    "secondary": []
  },
  "471": {
    "status": "pending",
    "questionKey": "2014-填空题-10",
    "primary": [],
    "secondary": []
  },
  "472": {
    "status": "pending",
    "questionKey": "2014-填空题-11",
    "primary": [],
    "secondary": []
  },
  "473": {
    "status": "pending",
    "questionKey": "2014-填空题-12",
    "primary": [],
    "secondary": []
  },
  "474": {
    "status": "pending",
    "questionKey": "2014-填空题-13",
    "primary": [],
    "secondary": []
  },
  "475": {
    "status": "pending",
    "questionKey": "2014-填空题-14",
    "primary": [],
    "secondary": []
  },
  "476": {
    "status": "pending",
    "questionKey": "2014-解答题-15",
    "primary": [],
    "secondary": []
  },
  "477": {
    "status": "pending",
    "questionKey": "2014-解答题-16",
    "primary": [],
    "secondary": []
  },
  "478": {
    "status": "pending",
    "questionKey": "2014-解答题-17",
    "primary": [],
    "secondary": []
  },
  "479": {
    "status": "pending",
    "questionKey": "2014-解答题-18",
    "primary": [],
    "secondary": []
  },
  "480": {
    "status": "pending",
    "questionKey": "2014-解答题-19",
    "primary": [],
    "secondary": []
  },
  "481": {
    "status": "pending",
    "questionKey": "2014-解答题-20",
    "primary": [],
    "secondary": []
  },
  "482": {
    "status": "pending",
    "questionKey": "2014-解答题-21",
    "primary": [],
    "secondary": []
  },
  "483": {
    "status": "pending",
    "questionKey": "2014-解答题-22",
    "primary": [],
    "secondary": []
  },
  "484": {
    "status": "pending",
    "questionKey": "2014-解答题-23",
    "primary": [],
    "secondary": []
  },
  "485": {
    "status": "pending",
    "questionKey": "2015-选择题-1",
    "primary": [],
    "secondary": []
  },
  "486": {
    "status": "pending",
    "questionKey": "2015-选择题-2",
    "primary": [],
    "secondary": []
  },
  "487": {
    "status": "pending",
    "questionKey": "2015-选择题-3",
    "primary": [],
    "secondary": []
  },
  "488": {
    "status": "pending",
    "questionKey": "2015-选择题-4",
    "primary": [],
    "secondary": []
  },
  "489": {
    "status": "pending",
    "questionKey": "2015-选择题-5",
    "primary": [],
    "secondary": []
  },
  "490": {
    "status": "pending",
    "questionKey": "2015-选择题-6",
    "primary": [],
    "secondary": []
  },
  "491": {
    "status": "pending",
    "questionKey": "2015-选择题-7",
    "primary": [],
    "secondary": []
  },
  "492": {
    "status": "pending",
    "questionKey": "2015-选择题-8",
    "primary": [],
    "secondary": []
  },
  "493": {
    "status": "pending",
    "questionKey": "2015-填空题-9",
    "primary": [],
    "secondary": []
  },
  "494": {
    "status": "pending",
    "questionKey": "2015-填空题-10",
    "primary": [],
    "secondary": []
  },
  "495": {
    "status": "pending",
    "questionKey": "2015-填空题-11",
    "primary": [],
    "secondary": []
  },
  "496": {
    "status": "pending",
    "questionKey": "2015-填空题-12",
    "primary": [],
    "secondary": []
  },
  "497": {
    "status": "pending",
    "questionKey": "2015-填空题-13",
    "primary": [],
    "secondary": []
  },
  "498": {
    "status": "pending",
    "questionKey": "2015-填空题-14",
    "primary": [],
    "secondary": []
  },
  "499": {
    "status": "pending",
    "questionKey": "2015-解答题-15",
    "primary": [],
    "secondary": []
  },
  "500": {
    "status": "pending",
    "questionKey": "2015-解答题-16",
    "primary": [],
    "secondary": []
  },
  "501": {
    "status": "pending",
    "questionKey": "2015-解答题-17",
    "primary": [],
    "secondary": []
  },
  "502": {
    "status": "pending",
    "questionKey": "2015-解答题-18",
    "primary": [],
    "secondary": []
  },
  "503": {
    "status": "pending",
    "questionKey": "2015-解答题-19",
    "primary": [],
    "secondary": []
  },
  "504": {
    "status": "pending",
    "questionKey": "2015-解答题-20",
    "primary": [],
    "secondary": []
  },
  "505": {
    "status": "pending",
    "questionKey": "2015-解答题-21",
    "primary": [],
    "secondary": []
  },
  "506": {
    "status": "pending",
    "questionKey": "2015-解答题-22",
    "primary": [],
    "secondary": []
  },
  "507": {
    "status": "pending",
    "questionKey": "2015-解答题-23",
    "primary": [],
    "secondary": []
  },
  "508": {
    "status": "pending",
    "questionKey": "2016-选择题-1",
    "primary": [],
    "secondary": []
  },
  "509": {
    "status": "pending",
    "questionKey": "2016-选择题-2",
    "primary": [],
    "secondary": []
  },
  "510": {
    "status": "pending",
    "questionKey": "2016-选择题-3",
    "primary": [],
    "secondary": []
  },
  "511": {
    "status": "pending",
    "questionKey": "2016-选择题-4",
    "primary": [],
    "secondary": []
  },
  "512": {
    "status": "pending",
    "questionKey": "2016-选择题-5",
    "primary": [],
    "secondary": []
  },
  "513": {
    "status": "pending",
    "questionKey": "2016-选择题-6",
    "primary": [],
    "secondary": []
  },
  "514": {
    "status": "pending",
    "questionKey": "2016-选择题-7",
    "primary": [],
    "secondary": []
  },
  "515": {
    "status": "pending",
    "questionKey": "2016-选择题-8",
    "primary": [],
    "secondary": []
  },
  "516": {
    "status": "pending",
    "questionKey": "2016-填空题-9",
    "primary": [],
    "secondary": []
  },
  "517": {
    "status": "pending",
    "questionKey": "2016-填空题-10",
    "primary": [],
    "secondary": []
  },
  "518": {
    "status": "pending",
    "questionKey": "2016-填空题-11",
    "primary": [],
    "secondary": []
  },
  "519": {
    "status": "pending",
    "questionKey": "2016-填空题-12",
    "primary": [],
    "secondary": []
  },
  "520": {
    "status": "pending",
    "questionKey": "2016-填空题-13",
    "primary": [],
    "secondary": []
  },
  "521": {
    "status": "pending",
    "questionKey": "2016-填空题-14",
    "primary": [],
    "secondary": []
  },
  "522": {
    "status": "pending",
    "questionKey": "2016-解答题-15",
    "primary": [],
    "secondary": []
  },
  "523": {
    "status": "pending",
    "questionKey": "2016-解答题-16",
    "primary": [],
    "secondary": []
  },
  "524": {
    "status": "pending",
    "questionKey": "2016-解答题-17",
    "primary": [],
    "secondary": []
  },
  "525": {
    "status": "pending",
    "questionKey": "2016-解答题-18",
    "primary": [],
    "secondary": []
  },
  "526": {
    "status": "pending",
    "questionKey": "2016-解答题-19",
    "primary": [],
    "secondary": []
  },
  "527": {
    "status": "pending",
    "questionKey": "2016-解答题-20",
    "primary": [],
    "secondary": []
  },
  "528": {
    "status": "pending",
    "questionKey": "2016-解答题-21",
    "primary": [],
    "secondary": []
  },
  "529": {
    "status": "pending",
    "questionKey": "2016-解答题-22",
    "primary": [],
    "secondary": []
  },
  "530": {
    "status": "pending",
    "questionKey": "2016-解答题-23",
    "primary": [],
    "secondary": []
  },
  "531": {
    "status": "pending",
    "questionKey": "2017-选择题-1",
    "primary": [],
    "secondary": []
  },
  "532": {
    "status": "pending",
    "questionKey": "2017-选择题-2",
    "primary": [],
    "secondary": []
  },
  "533": {
    "status": "pending",
    "questionKey": "2017-选择题-3",
    "primary": [],
    "secondary": []
  },
  "534": {
    "status": "pending",
    "questionKey": "2017-选择题-4",
    "primary": [],
    "secondary": []
  },
  "535": {
    "status": "pending",
    "questionKey": "2017-选择题-5",
    "primary": [],
    "secondary": []
  },
  "536": {
    "status": "pending",
    "questionKey": "2017-选择题-6",
    "primary": [],
    "secondary": []
  },
  "537": {
    "status": "pending",
    "questionKey": "2017-选择题-7",
    "primary": [],
    "secondary": []
  },
  "538": {
    "status": "pending",
    "questionKey": "2017-选择题-8",
    "primary": [],
    "secondary": []
  },
  "539": {
    "status": "pending",
    "questionKey": "2017-填空题-9",
    "primary": [],
    "secondary": []
  },
  "540": {
    "status": "pending",
    "questionKey": "2017-填空题-10",
    "primary": [],
    "secondary": []
  },
  "541": {
    "status": "pending",
    "questionKey": "2017-填空题-11",
    "primary": [],
    "secondary": []
  },
  "542": {
    "status": "pending",
    "questionKey": "2017-填空题-12",
    "primary": [],
    "secondary": []
  },
  "543": {
    "status": "pending",
    "questionKey": "2017-填空题-13",
    "primary": [],
    "secondary": []
  },
  "544": {
    "status": "pending",
    "questionKey": "2017-填空题-14",
    "primary": [],
    "secondary": []
  },
  "545": {
    "status": "pending",
    "questionKey": "2017-解答题-15",
    "primary": [],
    "secondary": []
  },
  "546": {
    "status": "pending",
    "questionKey": "2017-解答题-16",
    "primary": [],
    "secondary": []
  },
  "547": {
    "status": "pending",
    "questionKey": "2017-解答题-17",
    "primary": [],
    "secondary": []
  },
  "548": {
    "status": "pending",
    "questionKey": "2017-解答题-18",
    "primary": [],
    "secondary": []
  },
  "549": {
    "status": "pending",
    "questionKey": "2017-解答题-19",
    "primary": [],
    "secondary": []
  },
  "550": {
    "status": "pending",
    "questionKey": "2017-解答题-20",
    "primary": [],
    "secondary": []
  },
  "551": {
    "status": "pending",
    "questionKey": "2017-解答题-21",
    "primary": [],
    "secondary": []
  },
  "552": {
    "status": "pending",
    "questionKey": "2017-解答题-22",
    "primary": [],
    "secondary": []
  },
  "553": {
    "status": "pending",
    "questionKey": "2017-解答题-23",
    "primary": [],
    "secondary": []
  },
  "554": {
    "status": "pending",
    "questionKey": "2018-选择题-1",
    "primary": [],
    "secondary": []
  },
  "555": {
    "status": "pending",
    "questionKey": "2018-选择题-2",
    "primary": [],
    "secondary": []
  },
  "556": {
    "status": "pending",
    "questionKey": "2018-选择题-3",
    "primary": [],
    "secondary": []
  },
  "557": {
    "status": "pending",
    "questionKey": "2018-选择题-4",
    "primary": [],
    "secondary": []
  },
  "558": {
    "status": "pending",
    "questionKey": "2018-选择题-5",
    "primary": [],
    "secondary": []
  },
  "559": {
    "status": "pending",
    "questionKey": "2018-选择题-6",
    "primary": [],
    "secondary": []
  },
  "560": {
    "status": "pending",
    "questionKey": "2018-选择题-7",
    "primary": [],
    "secondary": []
  },
  "561": {
    "status": "pending",
    "questionKey": "2018-选择题-8",
    "primary": [],
    "secondary": []
  },
  "562": {
    "status": "pending",
    "questionKey": "2018-填空题-9",
    "primary": [],
    "secondary": []
  },
  "563": {
    "status": "pending",
    "questionKey": "2018-填空题-10",
    "primary": [],
    "secondary": []
  },
  "564": {
    "status": "pending",
    "questionKey": "2018-填空题-11",
    "primary": [],
    "secondary": []
  },
  "565": {
    "status": "pending",
    "questionKey": "2018-填空题-12",
    "primary": [],
    "secondary": []
  },
  "566": {
    "status": "pending",
    "questionKey": "2018-填空题-13",
    "primary": [],
    "secondary": []
  },
  "567": {
    "status": "pending",
    "questionKey": "2018-填空题-14",
    "primary": [],
    "secondary": []
  },
  "568": {
    "status": "pending",
    "questionKey": "2018-解答题-15",
    "primary": [],
    "secondary": []
  },
  "569": {
    "status": "pending",
    "questionKey": "2018-解答题-16",
    "primary": [],
    "secondary": []
  },
  "570": {
    "status": "pending",
    "questionKey": "2018-解答题-17",
    "primary": [],
    "secondary": []
  },
  "571": {
    "status": "pending",
    "questionKey": "2018-解答题-18",
    "primary": [],
    "secondary": []
  },
  "572": {
    "status": "pending",
    "questionKey": "2018-解答题-19",
    "primary": [],
    "secondary": []
  },
  "573": {
    "status": "pending",
    "questionKey": "2018-解答题-20",
    "primary": [],
    "secondary": []
  },
  "574": {
    "status": "pending",
    "questionKey": "2018-解答题-21",
    "primary": [],
    "secondary": []
  },
  "575": {
    "status": "pending",
    "questionKey": "2018-解答题-22",
    "primary": [],
    "secondary": []
  },
  "576": {
    "status": "pending",
    "questionKey": "2018-解答题-23",
    "primary": [],
    "secondary": []
  },
  "577": {
    "status": "pending",
    "questionKey": "2019-选择题-1",
    "primary": [],
    "secondary": []
  },
  "578": {
    "status": "pending",
    "questionKey": "2019-选择题-2",
    "primary": [],
    "secondary": []
  },
  "579": {
    "status": "pending",
    "questionKey": "2019-选择题-3",
    "primary": [],
    "secondary": []
  },
  "580": {
    "status": "pending",
    "questionKey": "2019-选择题-4",
    "primary": [],
    "secondary": []
  },
  "581": {
    "status": "pending",
    "questionKey": "2019-选择题-5",
    "primary": [],
    "secondary": []
  },
  "582": {
    "status": "pending",
    "questionKey": "2019-选择题-6",
    "primary": [],
    "secondary": []
  },
  "583": {
    "status": "pending",
    "questionKey": "2019-选择题-7",
    "primary": [],
    "secondary": []
  },
  "584": {
    "status": "pending",
    "questionKey": "2019-选择题-8",
    "primary": [],
    "secondary": []
  },
  "585": {
    "status": "pending",
    "questionKey": "2019-填空题-9",
    "primary": [],
    "secondary": []
  },
  "586": {
    "status": "pending",
    "questionKey": "2019-填空题-10",
    "primary": [],
    "secondary": []
  },
  "587": {
    "status": "pending",
    "questionKey": "2019-填空题-11",
    "primary": [],
    "secondary": []
  },
  "588": {
    "status": "pending",
    "questionKey": "2019-填空题-12",
    "primary": [],
    "secondary": []
  },
  "589": {
    "status": "pending",
    "questionKey": "2019-填空题-13",
    "primary": [],
    "secondary": []
  },
  "590": {
    "status": "pending",
    "questionKey": "2019-填空题-14",
    "primary": [],
    "secondary": []
  },
  "591": {
    "status": "pending",
    "questionKey": "2019-解答题-15",
    "primary": [],
    "secondary": []
  },
  "592": {
    "status": "pending",
    "questionKey": "2019-解答题-16",
    "primary": [],
    "secondary": []
  },
  "593": {
    "status": "pending",
    "questionKey": "2019-解答题-17",
    "primary": [],
    "secondary": []
  },
  "594": {
    "status": "pending",
    "questionKey": "2019-解答题-18",
    "primary": [],
    "secondary": []
  },
  "595": {
    "status": "pending",
    "questionKey": "2019-解答题-19",
    "primary": [],
    "secondary": []
  },
  "596": {
    "status": "pending",
    "questionKey": "2019-解答题-20",
    "primary": [],
    "secondary": []
  },
  "597": {
    "status": "pending",
    "questionKey": "2019-解答题-21",
    "primary": [],
    "secondary": []
  },
  "598": {
    "status": "pending",
    "questionKey": "2019-解答题-22",
    "primary": [],
    "secondary": []
  },
  "599": {
    "status": "pending",
    "questionKey": "2019-解答题-23",
    "primary": [],
    "secondary": []
  },
  "600": {
    "status": "pending",
    "questionKey": "2020-选择题-1",
    "primary": [],
    "secondary": []
  },
  "601": {
    "status": "pending",
    "questionKey": "2020-选择题-2",
    "primary": [],
    "secondary": []
  },
  "602": {
    "status": "pending",
    "questionKey": "2020-选择题-3",
    "primary": [],
    "secondary": []
  },
  "603": {
    "status": "pending",
    "questionKey": "2020-选择题-4",
    "primary": [],
    "secondary": []
  },
  "604": {
    "status": "pending",
    "questionKey": "2020-选择题-5",
    "primary": [],
    "secondary": []
  },
  "605": {
    "status": "pending",
    "questionKey": "2020-选择题-6",
    "primary": [],
    "secondary": []
  },
  "606": {
    "status": "pending",
    "questionKey": "2020-选择题-7",
    "primary": [],
    "secondary": []
  },
  "607": {
    "status": "pending",
    "questionKey": "2020-选择题-8",
    "primary": [],
    "secondary": []
  },
  "608": {
    "status": "pending",
    "questionKey": "2020-填空题-9",
    "primary": [],
    "secondary": []
  },
  "609": {
    "status": "pending",
    "questionKey": "2020-填空题-10",
    "primary": [],
    "secondary": []
  },
  "610": {
    "status": "pending",
    "questionKey": "2020-填空题-11",
    "primary": [],
    "secondary": []
  },
  "611": {
    "status": "pending",
    "questionKey": "2020-填空题-12",
    "primary": [],
    "secondary": []
  },
  "612": {
    "status": "pending",
    "questionKey": "2020-填空题-13",
    "primary": [],
    "secondary": []
  },
  "613": {
    "status": "pending",
    "questionKey": "2020-填空题-14",
    "primary": [],
    "secondary": []
  },
  "614": {
    "status": "pending",
    "questionKey": "2020-解答题-15",
    "primary": [],
    "secondary": []
  },
  "615": {
    "status": "pending",
    "questionKey": "2020-解答题-16",
    "primary": [],
    "secondary": []
  },
  "616": {
    "status": "pending",
    "questionKey": "2020-解答题-17",
    "primary": [],
    "secondary": []
  },
  "617": {
    "status": "pending",
    "questionKey": "2020-解答题-18",
    "primary": [],
    "secondary": []
  },
  "618": {
    "status": "pending",
    "questionKey": "2020-解答题-19",
    "primary": [],
    "secondary": []
  },
  "619": {
    "status": "pending",
    "questionKey": "2020-解答题-20",
    "primary": [],
    "secondary": []
  },
  "620": {
    "status": "pending",
    "questionKey": "2020-解答题-21",
    "primary": [],
    "secondary": []
  },
  "621": {
    "status": "pending",
    "questionKey": "2020-解答题-22",
    "primary": [],
    "secondary": []
  },
  "622": {
    "status": "pending",
    "questionKey": "2020-解答题-23",
    "primary": [],
    "secondary": []
  },
  "623": {
    "status": "pending",
    "questionKey": "2021-选择题-1",
    "primary": [],
    "secondary": []
  },
  "624": {
    "status": "pending",
    "questionKey": "2021-选择题-2",
    "primary": [],
    "secondary": []
  },
  "625": {
    "status": "pending",
    "questionKey": "2021-选择题-3",
    "primary": [],
    "secondary": []
  },
  "626": {
    "status": "pending",
    "questionKey": "2021-选择题-4",
    "primary": [],
    "secondary": []
  },
  "627": {
    "status": "pending",
    "questionKey": "2021-选择题-5",
    "primary": [],
    "secondary": []
  },
  "628": {
    "status": "pending",
    "questionKey": "2021-选择题-6",
    "primary": [],
    "secondary": []
  },
  "629": {
    "status": "pending",
    "questionKey": "2021-选择题-7",
    "primary": [],
    "secondary": []
  },
  "630": {
    "status": "pending",
    "questionKey": "2021-选择题-8",
    "primary": [],
    "secondary": []
  },
  "631": {
    "status": "pending",
    "questionKey": "2021-选择题-9",
    "primary": [],
    "secondary": []
  },
  "632": {
    "status": "pending",
    "questionKey": "2021-选择题-10",
    "primary": [],
    "secondary": []
  },
  "633": {
    "status": "pending",
    "questionKey": "2021-填空题-11",
    "primary": [],
    "secondary": []
  },
  "634": {
    "status": "pending",
    "questionKey": "2021-填空题-12",
    "primary": [],
    "secondary": []
  },
  "635": {
    "status": "pending",
    "questionKey": "2021-填空题-13",
    "primary": [],
    "secondary": []
  },
  "636": {
    "status": "pending",
    "questionKey": "2021-填空题-14",
    "primary": [],
    "secondary": []
  },
  "637": {
    "status": "pending",
    "questionKey": "2021-填空题-15",
    "primary": [],
    "secondary": []
  },
  "638": {
    "status": "pending",
    "questionKey": "2021-填空题-16",
    "primary": [],
    "secondary": []
  },
  "639": {
    "status": "pending",
    "questionKey": "2021-解答题-17",
    "primary": [],
    "secondary": []
  },
  "640": {
    "status": "pending",
    "questionKey": "2021-解答题-18",
    "primary": [],
    "secondary": []
  },
  "641": {
    "status": "pending",
    "questionKey": "2021-解答题-19",
    "primary": [],
    "secondary": []
  },
  "642": {
    "status": "pending",
    "questionKey": "2021-解答题-20",
    "primary": [],
    "secondary": []
  },
  "643": {
    "status": "pending",
    "questionKey": "2021-解答题-21",
    "primary": [],
    "secondary": []
  },
  "644": {
    "status": "pending",
    "questionKey": "2021-解答题-22",
    "primary": [],
    "secondary": []
  },
  "645": {
    "status": "pending",
    "questionKey": "2022-选择题-1",
    "primary": [],
    "secondary": []
  },
  "646": {
    "status": "pending",
    "questionKey": "2022-选择题-2",
    "primary": [],
    "secondary": []
  },
  "647": {
    "status": "pending",
    "questionKey": "2022-选择题-3",
    "primary": [],
    "secondary": []
  },
  "648": {
    "status": "pending",
    "questionKey": "2022-选择题-4",
    "primary": [],
    "secondary": []
  },
  "649": {
    "status": "pending",
    "questionKey": "2022-选择题-5",
    "primary": [],
    "secondary": []
  },
  "650": {
    "status": "pending",
    "questionKey": "2022-选择题-6",
    "primary": [],
    "secondary": []
  },
  "651": {
    "status": "pending",
    "questionKey": "2022-选择题-7",
    "primary": [],
    "secondary": []
  },
  "652": {
    "status": "pending",
    "questionKey": "2022-选择题-8",
    "primary": [],
    "secondary": []
  },
  "653": {
    "status": "pending",
    "questionKey": "2022-选择题-9",
    "primary": [],
    "secondary": []
  },
  "654": {
    "status": "pending",
    "questionKey": "2022-选择题-10",
    "primary": [],
    "secondary": []
  },
  "655": {
    "status": "pending",
    "questionKey": "2022-填空题-11",
    "primary": [],
    "secondary": []
  },
  "656": {
    "status": "pending",
    "questionKey": "2022-填空题-12",
    "primary": [],
    "secondary": []
  },
  "657": {
    "status": "pending",
    "questionKey": "2022-填空题-13",
    "primary": [],
    "secondary": []
  },
  "658": {
    "status": "pending",
    "questionKey": "2022-填空题-14",
    "primary": [],
    "secondary": []
  },
  "659": {
    "status": "pending",
    "questionKey": "2022-填空题-15",
    "primary": [],
    "secondary": []
  },
  "660": {
    "status": "pending",
    "questionKey": "2022-填空题-16",
    "primary": [],
    "secondary": []
  },
  "661": {
    "status": "pending",
    "questionKey": "2022-解答题-17",
    "primary": [],
    "secondary": []
  },
  "662": {
    "status": "pending",
    "questionKey": "2022-解答题-18",
    "primary": [],
    "secondary": []
  },
  "663": {
    "status": "pending",
    "questionKey": "2022-解答题-19",
    "primary": [],
    "secondary": []
  },
  "664": {
    "status": "pending",
    "questionKey": "2022-解答题-20",
    "primary": [],
    "secondary": []
  },
  "665": {
    "status": "pending",
    "questionKey": "2022-解答题-21",
    "primary": [],
    "secondary": []
  },
  "666": {
    "status": "pending",
    "questionKey": "2022-解答题-22",
    "primary": [],
    "secondary": []
  },
  "667": {
    "status": "pending",
    "questionKey": "2023-选择题-1",
    "primary": [],
    "secondary": []
  },
  "668": {
    "status": "pending",
    "questionKey": "2023-选择题-2",
    "primary": [],
    "secondary": []
  },
  "669": {
    "status": "pending",
    "questionKey": "2023-选择题-3",
    "primary": [],
    "secondary": []
  },
  "670": {
    "status": "pending",
    "questionKey": "2023-选择题-4",
    "primary": [],
    "secondary": []
  },
  "671": {
    "status": "pending",
    "questionKey": "2023-选择题-5",
    "primary": [],
    "secondary": []
  },
  "672": {
    "status": "pending",
    "questionKey": "2023-选择题-6",
    "primary": [],
    "secondary": []
  },
  "673": {
    "status": "pending",
    "questionKey": "2023-选择题-7",
    "primary": [],
    "secondary": []
  },
  "674": {
    "status": "pending",
    "questionKey": "2023-选择题-8",
    "primary": [],
    "secondary": []
  },
  "675": {
    "status": "pending",
    "questionKey": "2023-选择题-9",
    "primary": [],
    "secondary": []
  },
  "676": {
    "status": "pending",
    "questionKey": "2023-选择题-10",
    "primary": [],
    "secondary": []
  },
  "677": {
    "status": "pending",
    "questionKey": "2023-填空题-11",
    "primary": [],
    "secondary": []
  },
  "678": {
    "status": "pending",
    "questionKey": "2023-填空题-12",
    "primary": [],
    "secondary": []
  },
  "679": {
    "status": "pending",
    "questionKey": "2023-填空题-13",
    "primary": [],
    "secondary": []
  },
  "680": {
    "status": "pending",
    "questionKey": "2023-填空题-14",
    "primary": [],
    "secondary": []
  },
  "681": {
    "status": "pending",
    "questionKey": "2023-填空题-15",
    "primary": [],
    "secondary": []
  },
  "682": {
    "status": "pending",
    "questionKey": "2023-填空题-16",
    "primary": [],
    "secondary": []
  },
  "683": {
    "status": "pending",
    "questionKey": "2023-解答题-17",
    "primary": [],
    "secondary": []
  },
  "684": {
    "status": "pending",
    "questionKey": "2023-解答题-1",
    "primary": [],
    "secondary": []
  },
  "685": {
    "status": "pending",
    "questionKey": "2023-解答题-2",
    "primary": [],
    "secondary": []
  },
  "686": {
    "status": "pending",
    "questionKey": "2023-解答题-18",
    "primary": [],
    "secondary": []
  },
  "687": {
    "status": "pending",
    "questionKey": "2023-解答题-19",
    "primary": [],
    "secondary": []
  },
  "688": {
    "status": "pending",
    "questionKey": "2023-解答题-1",
    "primary": [],
    "secondary": []
  },
  "689": {
    "status": "pending",
    "questionKey": "2023-解答题-2",
    "primary": [],
    "secondary": []
  },
  "690": {
    "status": "pending",
    "questionKey": "2023-解答题-20",
    "primary": [],
    "secondary": []
  },
  "691": {
    "status": "pending",
    "questionKey": "2023-解答题-21",
    "primary": [],
    "secondary": []
  },
  "692": {
    "status": "pending",
    "questionKey": "2023-解答题-1",
    "primary": [],
    "secondary": []
  },
  "693": {
    "status": "pending",
    "questionKey": "2023-解答题-2",
    "primary": [],
    "secondary": []
  },
  "694": {
    "status": "pending",
    "questionKey": "2023-解答题-22",
    "primary": [],
    "secondary": []
  },
  "695": {
    "status": "pending",
    "questionKey": "2023-解答题-1",
    "primary": [],
    "secondary": []
  },
  "696": {
    "status": "pending",
    "questionKey": "2023-解答题-2",
    "primary": [],
    "secondary": []
  },
  "697": {
    "status": "pending",
    "questionKey": "2024-选择题-1",
    "primary": [],
    "secondary": []
  },
  "698": {
    "status": "pending",
    "questionKey": "2024-选择题-2",
    "primary": [],
    "secondary": []
  },
  "699": {
    "status": "pending",
    "questionKey": "2024-选择题-3",
    "primary": [],
    "secondary": []
  },
  "700": {
    "status": "pending",
    "questionKey": "2024-选择题-4",
    "primary": [],
    "secondary": []
  },
  "701": {
    "status": "pending",
    "questionKey": "2024-选择题-5",
    "primary": [],
    "secondary": []
  },
  "702": {
    "status": "pending",
    "questionKey": "2024-选择题-6",
    "primary": [],
    "secondary": []
  },
  "703": {
    "status": "pending",
    "questionKey": "2024-选择题-7",
    "primary": [],
    "secondary": []
  },
  "704": {
    "status": "pending",
    "questionKey": "2024-选择题-8",
    "primary": [],
    "secondary": []
  },
  "705": {
    "status": "pending",
    "questionKey": "2024-选择题-9",
    "primary": [],
    "secondary": []
  },
  "706": {
    "status": "pending",
    "questionKey": "2024-选择题-10",
    "primary": [],
    "secondary": []
  },
  "707": {
    "status": "pending",
    "questionKey": "2024-填空题-11",
    "primary": [],
    "secondary": []
  },
  "708": {
    "status": "pending",
    "questionKey": "2024-填空题-12",
    "primary": [],
    "secondary": []
  },
  "709": {
    "status": "pending",
    "questionKey": "2024-填空题-13",
    "primary": [],
    "secondary": []
  },
  "710": {
    "status": "pending",
    "questionKey": "2024-填空题-14",
    "primary": [],
    "secondary": []
  },
  "711": {
    "status": "pending",
    "questionKey": "2024-填空题-15",
    "primary": [],
    "secondary": []
  },
  "712": {
    "status": "pending",
    "questionKey": "2024-填空题-16",
    "primary": [],
    "secondary": []
  },
  "713": {
    "status": "pending",
    "questionKey": "2024-解答题-17",
    "primary": [],
    "secondary": []
  },
  "714": {
    "status": "pending",
    "questionKey": "2024-解答题-18",
    "primary": [],
    "secondary": []
  },
  "715": {
    "status": "pending",
    "questionKey": "2024-解答题-1",
    "primary": [],
    "secondary": []
  },
  "716": {
    "status": "pending",
    "questionKey": "2024-解答题-2",
    "primary": [],
    "secondary": []
  },
  "717": {
    "status": "pending",
    "questionKey": "2024-解答题-19",
    "primary": [],
    "secondary": []
  },
  "718": {
    "status": "pending",
    "questionKey": "2024-解答题-20",
    "primary": [],
    "secondary": []
  },
  "719": {
    "status": "pending",
    "questionKey": "2024-解答题-1",
    "primary": [],
    "secondary": []
  },
  "720": {
    "status": "pending",
    "questionKey": "2024-解答题-2",
    "primary": [],
    "secondary": []
  },
  "721": {
    "status": "pending",
    "questionKey": "2024-解答题-21",
    "primary": [],
    "secondary": []
  },
  "722": {
    "status": "pending",
    "questionKey": "2024-解答题-1",
    "primary": [],
    "secondary": []
  },
  "723": {
    "status": "pending",
    "questionKey": "2024-解答题-2",
    "primary": [],
    "secondary": []
  },
  "724": {
    "status": "pending",
    "questionKey": "2024-解答题-22",
    "primary": [],
    "secondary": []
  },
  "725": {
    "status": "pending",
    "questionKey": "2024-解答题-1",
    "primary": [],
    "secondary": []
  },
  "726": {
    "status": "pending",
    "questionKey": "2024-解答题-2",
    "primary": [],
    "secondary": []
  },
  "727": {
    "status": "pending",
    "questionKey": "2025-选择题-1",
    "primary": [],
    "secondary": []
  },
  "728": {
    "status": "pending",
    "questionKey": "2025-选择题-2",
    "primary": [],
    "secondary": []
  },
  "729": {
    "status": "pending",
    "questionKey": "2025-选择题-3",
    "primary": [],
    "secondary": []
  },
  "730": {
    "status": "pending",
    "questionKey": "2025-选择题-4",
    "primary": [],
    "secondary": []
  },
  "731": {
    "status": "pending",
    "questionKey": "2025-选择题-5",
    "primary": [],
    "secondary": []
  },
  "732": {
    "status": "pending",
    "questionKey": "2025-选择题-6",
    "primary": [],
    "secondary": []
  },
  "733": {
    "status": "pending",
    "questionKey": "2025-选择题-7",
    "primary": [],
    "secondary": []
  },
  "734": {
    "status": "pending",
    "questionKey": "2025-选择题-8",
    "primary": [],
    "secondary": []
  },
  "735": {
    "status": "pending",
    "questionKey": "2025-选择题-9",
    "primary": [],
    "secondary": []
  },
  "736": {
    "status": "pending",
    "questionKey": "2025-选择题-10",
    "primary": [],
    "secondary": []
  },
  "737": {
    "status": "pending",
    "questionKey": "2025-填空题-11",
    "primary": [],
    "secondary": []
  },
  "738": {
    "status": "pending",
    "questionKey": "2025-填空题-12",
    "primary": [],
    "secondary": []
  },
  "739": {
    "status": "pending",
    "questionKey": "2025-填空题-13",
    "primary": [],
    "secondary": []
  },
  "740": {
    "status": "pending",
    "questionKey": "2025-填空题-14",
    "primary": [],
    "secondary": []
  },
  "741": {
    "status": "pending",
    "questionKey": "2025-填空题-15",
    "primary": [],
    "secondary": []
  },
  "742": {
    "status": "pending",
    "questionKey": "2025-填空题-16",
    "primary": [],
    "secondary": []
  },
  "743": {
    "status": "pending",
    "questionKey": "2025-解答题-17",
    "primary": [],
    "secondary": []
  },
  "744": {
    "status": "pending",
    "questionKey": "2025-解答题-18",
    "primary": [],
    "secondary": []
  },
  "745": {
    "status": "pending",
    "questionKey": "2025-解答题-19",
    "primary": [],
    "secondary": []
  },
  "746": {
    "status": "pending",
    "questionKey": "2025-解答题-20",
    "primary": [],
    "secondary": []
  },
  "747": {
    "status": "pending",
    "questionKey": "2025-解答题-21",
    "primary": [],
    "secondary": []
  },
  "748": {
    "status": "pending",
    "questionKey": "2025-解答题-22",
    "primary": [],
    "secondary": []
  },
  "749": {
    "status": "pending",
    "questionKey": "2026-选择题-1",
    "primary": [],
    "secondary": []
  },
  "750": {
    "status": "pending",
    "questionKey": "2026-选择题-2",
    "primary": [],
    "secondary": []
  },
  "751": {
    "status": "pending",
    "questionKey": "2026-选择题-3",
    "primary": [],
    "secondary": []
  },
  "752": {
    "status": "pending",
    "questionKey": "2026-选择题-4",
    "primary": [],
    "secondary": []
  },
  "753": {
    "status": "pending",
    "questionKey": "2026-选择题-5",
    "primary": [],
    "secondary": []
  },
  "754": {
    "status": "pending",
    "questionKey": "2026-选择题-6",
    "primary": [],
    "secondary": []
  },
  "755": {
    "status": "pending",
    "questionKey": "2026-选择题-7",
    "primary": [],
    "secondary": []
  },
  "756": {
    "status": "pending",
    "questionKey": "2026-选择题-8",
    "primary": [],
    "secondary": []
  },
  "757": {
    "status": "pending",
    "questionKey": "2026-选择题-9",
    "primary": [],
    "secondary": []
  },
  "758": {
    "status": "pending",
    "questionKey": "2026-选择题-10",
    "primary": [],
    "secondary": []
  },
  "759": {
    "status": "pending",
    "questionKey": "2026-填空题-11",
    "primary": [],
    "secondary": []
  },
  "760": {
    "status": "pending",
    "questionKey": "2026-填空题-12",
    "primary": [],
    "secondary": []
  },
  "761": {
    "status": "pending",
    "questionKey": "2026-填空题-13",
    "primary": [],
    "secondary": []
  },
  "762": {
    "status": "pending",
    "questionKey": "2026-填空题-14",
    "primary": [],
    "secondary": []
  },
  "763": {
    "status": "pending",
    "questionKey": "2026-填空题-15",
    "primary": [],
    "secondary": []
  },
  "764": {
    "status": "pending",
    "questionKey": "2026-填空题-16",
    "primary": [],
    "secondary": []
  },
  "765": {
    "status": "pending",
    "questionKey": "2026-解答题-17",
    "primary": [],
    "secondary": []
  },
  "766": {
    "status": "pending",
    "questionKey": "2026-解答题-18",
    "primary": [],
    "secondary": []
  },
  "767": {
    "status": "pending",
    "questionKey": "2026-解答题-19",
    "primary": [],
    "secondary": []
  },
  "768": {
    "status": "pending",
    "questionKey": "2026-解答题-20",
    "primary": [],
    "secondary": []
  },
  "769": {
    "status": "pending",
    "questionKey": "2026-解答题-21",
    "primary": [],
    "secondary": []
  },
  "770": {
    "status": "pending",
    "questionKey": "2026-解答题-22",
    "primary": [],
    "secondary": []
  }
};
