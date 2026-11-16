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
    "status": "verified",
    "questionKey": "1992-填空题-5",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "两曲线交点为 x=0、1，区间内上方曲线为 ex，面积是两曲线差的定积分。",
    "methods": "先解交点确定积分限，再判断上下关系，计算 ∫₀¹(ex−xeˣ)dx。",
    "pitfalls": "把代数积分值直接当面积；未确认上下曲线顺序。"
  },
  "81": {
    "status": "verified",
    "questionKey": "1992-选择题-1",
    "primary": [
      "CAL-01-G"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "x−sin x~x³/6，故与 x² 的比值趋于 0，属于高阶无穷小。",
    "methods": "用 sin x 的麦克劳林展开保留首个非零差项，再比较阶数。",
    "pitfalls": "误把 x−sin x 与 x 等价；展开阶数不足。"
  },
  "82": {
    "status": "verified",
    "questionKey": "1992-选择题-2",
    "primary": [
      "CAL-01-A"
    ],
    "secondary": [
      "CAL-01-B"
    ],
    "rationale": "求 f(−x) 必须按 −x 落入原分段定义域的条件重新划分 x 的区间，并代入对应表达式。",
    "methods": "分别解 −x≤0 与 −x>0，得到 x≥0 与 x<0，再逐段代入。",
    "pitfalls": "直接照抄原分段区间，忽略不等号方向反转。"
  },
  "83": {
    "status": "verified",
    "questionKey": "1992-选择题-3",
    "primary": [
      "CAL-02-B"
    ],
    "secondary": [
      "CAL-02-D"
    ],
    "rationale": "约去因子后表达式为 (x+1)e^{1/(x−1)}，左极限为 0、右极限为正无穷，双侧极限不存在。",
    "methods": "先因式约分，再分别计算分界点两侧的极限。",
    "pitfalls": "只算一侧；将一侧趋于无穷误判为双侧极限为无穷。"
  },
  "84": {
    "status": "verified",
    "questionKey": "1992-选择题-4",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "变上限积分的上限为 x²，链式法则给出 f((x²)²)·2x。",
    "methods": "使用微积分基本定理，再对上限函数 x² 求导。",
    "pitfalls": "漏乘 2x；把 f(x⁴) 误写为 f(x²)。"
  },
  "85": {
    "status": "verified",
    "questionKey": "1992-选择题-5",
    "primary": [
      "CAL-06-A"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "先由 f′=sin x 得 f=−cos x+C₁，再对 f 积分并选择常数得到一个原函数。",
    "methods": "连续做两次不定积分，注意每次积分常数可按题意选择。",
    "pitfalls": "把 f 与 f 的原函数混为一谈；漏掉积分常数。"
  },
  "86": {
    "status": "verified",
    "questionKey": "1992-解答题-1",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-05-D"
    ],
    "rationale": "底数可写为 1−3/(x+6)，指数约为 x/2，利用 (1+u)^{1/u} 型极限得到 e^(−3/2)。",
    "methods": "取对数或直接构造重要极限，计算指数与小量的乘积极限。",
    "pitfalls": "指数中 x−1 与分母 x+6 的主阶系数处理错误。"
  },
  "87": {
    "status": "verified",
    "questionKey": "1992-解答题-2",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "方程隐式确定 y(x)，需连续两次隐式求导，并在 x=0、y=1 代入。",
    "methods": "先求 y′，再对含 y′ 的关系再次求导，最后代入初始点。",
    "pitfalls": "把 y 当常数；二次求导漏掉乘积法则中的项。"
  },
  "88": {
    "status": "verified",
    "questionKey": "1992-解答题-3",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-A"
    ],
    "rationale": "被积式含 x³/√(1+x²)，令 u=√(1+x²) 可将根式与 xdx 配对，化为多项式积分。",
    "methods": "拆出 x²·x dx，作根式换元并回代。",
    "pitfalls": "换元时遗漏 xdx=u du；回代幂次错误。"
  },
  "89": {
    "status": "verified",
    "questionKey": "1992-解答题-4",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "根式可化为半角三角函数差的绝对值，需在表达式变号点 x=π/2 分段积分。",
    "methods": "利用平方差恒等式化简根式，确定绝对值符号区间后分别积分。",
    "pitfalls": "忽略绝对值导致跨越变号点时符号错误。"
  },
  "90": {
    "status": "verified",
    "questionKey": "1992-解答题-5",
    "primary": [
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-07-A"
    ],
    "rationale": "方程整理为一阶线性标准式 y′−y/(2x)=−x²/2，求积分因子可得通解。",
    "methods": "先化标准形，再求 μ=e^{∫Pdx}，将方程写成 (μy)′=μQ。",
    "pitfalls": "线性方程系数符号错误；除以 x 时忽略定义区间。"
  },
  "91": {
    "status": "verified",
    "questionKey": "1993-填空题-1",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-02-D"
    ],
    "rationale": "x ln x 是 0·(−∞) 型，改写为 ln x/(1/x) 后可用洛必达法则，极限为 0。",
    "methods": "先变形为商，再检查 0/0 或 ∞/∞ 条件并求导。",
    "pitfalls": "直接套洛必达；忽略 x→0⁺ 的定义域。"
  },
  "92": {
    "status": "verified",
    "questionKey": "1993-填空题-2",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "方程含 x、y 的复合三角函数和 xy²，逐项对 x 求导并将 y 视为 y(x)。",
    "methods": "对 sin(x²+y²) 使用链式法则，对 xy² 使用乘积法则，整理 y′。",
    "pitfalls": "遗漏 2yy′ 或乘积项中的 y′。"
  },
  "93": {
    "status": "verified",
    "questionKey": "1993-填空题-3",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "F′(x)=2−1/√x，导数在 (0,1/4) 为负，故 F 在该区间递减。",
    "methods": "由变上限积分求导，再解 F′(x)<0。",
    "pitfalls": "把驻点两侧单调区间写反；忘记 x>0 的定义域。"
  },
  "94": {
    "status": "verified",
    "questionKey": "1993-填空题-4",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-A"
    ],
    "rationale": "被积函数可写成 sin x·cos^(−3/2)x，令 u=cos x 后成为幂函数积分。",
    "methods": "凑微分 du=−sin x dx，处理负号并回代。",
    "pitfalls": "三角函数幂次化简错误；换元负号丢失。"
  },
  "95": {
    "status": "verified",
    "questionKey": "1993-填空题-5",
    "primary": [
      "CAL-06-A"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "切线斜率给出 f′(x)，先积分求 f，再用经过点 (0,−1/2) 确定积分常数。",
    "methods": "对 x ln(1+x²) 作分部积分，代入初值确定常数。",
    "pitfalls": "只求导数不恢复函数；初值代入错误。"
  },
  "96": {
    "status": "verified",
    "questionKey": "1993-选择题-1",
    "primary": [
      "CAL-01-G"
    ],
    "secondary": [
      "CAL-01-I"
    ],
    "rationale": "该表达式沿不同趋零数列分别取 0 与趋于无穷，故无界但不是趋于正无穷的无穷大。",
    "methods": "构造两列趋于 0 的自变量序列，比较函数值行为。",
    "pitfalls": "仅凭振荡因子有界判断整体有界；将无界等同于无穷大。"
  },
  "97": {
    "status": "verified",
    "questionKey": "1993-选择题-2",
    "primary": [
      "CAL-03-B"
    ],
    "secondary": [
      "CAL-02-B"
    ],
    "rationale": "在 x=1 左右，绝对值分子导致左右极限分别为 −2、2，极限不存在，因此不连续。",
    "methods": "先去绝对值分段，再求左右极限比较。",
    "pitfalls": "只计算函数点值；忽略绝对值在 x=1 两侧符号变化。"
  },
  "98": {
    "status": "verified",
    "questionKey": "1993-选择题-3",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-03-A"
    ],
    "rationale": "积分上限跨越分段点 1，需分区间按被积函数表达式积分，并保证 F(1)=0。",
    "methods": "对 x<1、x≥1 分别计算定积分，利用积分方向处理负号。",
    "pitfalls": "把 ∫₁ˣ 的方向弄反；分段原函数常数未衔接。"
  },
  "99": {
    "status": "verified",
    "questionKey": "1993-选择题-4",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-03-C"
    ],
    "rationale": "函数在 x=e 处取得唯一最大值 k>0，且两端趋于负无穷，因此图像与 x 轴有两个交点。",
    "methods": "求导确定单调区间和最大值，再结合连续性与端点极限判零点个数。",
    "pitfalls": "只找到一个驻点就断言零点个数；忽略两端极限。"
  },
  "100": {
    "status": "verified",
    "questionKey": "1993-选择题-5",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-05-C"
    ],
    "rationale": "奇函数的一阶导数为偶函数、二阶导数为奇函数，故左半轴 f′>0、f″<0。",
    "methods": "分别对 f(−x)=−f(x) 求导一次和两次，比较奇偶性。",
    "pitfalls": "把一阶、二阶导数的奇偶性颠倒。"
  },
  "101": {
    "status": "verified",
    "questionKey": "1993-解答题-1",
    "primary": [
      "CAL-04-B"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "复合函数 y=sin(f(x²)) 求二阶导，涉及链式法则和乘积法则。",
    "methods": "先求 y′，再对 cos(f(x²))、f′(x²) 与 2x 的乘积逐项求导。",
    "pitfalls": "漏掉 f″ 项或把内层导数 2x 漏乘。"
  },
  "102": {
    "status": "verified",
    "questionKey": "1993-解答题-2",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-02-D"
    ],
    "rationale": "x→−∞ 时根式与 x 相消，乘以共轭有理化后得到有限极限 −50。",
    "methods": "乘共轭将根式差化为常数，再提出 |x| 或按 x<0 处理平方根。",
    "pitfalls": "把 √(x²) 错写为 x；忽略 x→−∞ 的符号。"
  },
  "103": {
    "status": "verified",
    "questionKey": "1993-解答题-3",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "利用 1+cos2x=2cos²x 将积分化为 (1/2)∫x sec²x dx，再分部积分。",
    "methods": "先用二倍角公式化简，再取 u=x、dv=sec²x dx。",
    "pitfalls": "三角恒等式化简系数错误；分部积分边界项遗漏。"
  },
  "104": {
    "status": "verified",
    "questionKey": "1993-解答题-4",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "积分上限为无穷，属于反常积分；拆项后分别求极限，结果收敛为 1/2。",
    "methods": "写成 lim(R→∞)∫₀ᴿ，再拆为 (x+1)⁻²−(x+1)⁻³ 积分。",
    "pitfalls": "把无穷上限当普通端点代入；拆项后漏算极限。"
  },
  "105": {
    "status": "verified",
    "questionKey": "1993-解答题-5",
    "primary": [
      "CAL-07-D"
    ],
    "secondary": [
      "CAL-07-A"
    ],
    "rationale": "方程可识别为全微分 d(x²y−sin x−y)=0，积分后利用初值确定常数。",
    "methods": "展开全微分核对各项，积分得到隐式通解，再代 y(0)=1。",
    "pitfalls": "全微分项符号错误；代入初值时忽略 x=0。"
  },
  "106": {
    "status": "verified",
    "questionKey": "1994-填空题-1",
    "primary": [
      "CAL-03-A"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "连续条件要求 x→0 时分式极限等于定义值 a，利用 sin2x 与 e^(2ax) 的一阶展开解参数。",
    "methods": "分别展开 sin2x、指数函数，计算分子除以 x 的极限并令其等于 a。",
    "pitfalls": "只取 sin2x 的极限而漏掉指数项；连续条件方向写反。"
  },
  "107": {
    "status": "verified",
    "questionKey": "1994-填空题-2",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "参数方程的二阶导数需先求 dy/dx，再对参数 t 求导并除以 dx/dt。",
    "methods": "分别求 x′(t)、y′(t)，形成一阶导后再按参数二阶导公式计算。",
    "pitfalls": "把 d²y/dx² 误当 y″(t)；漏除 x′(t)。"
  },
  "108": {
    "status": "verified",
    "questionKey": "1994-填空题-3",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "上限为 cos3x，变上限积分求导后乘上限导数 −3sin3x。",
    "methods": "应用 Φ′(x)=f(φ(x))φ′(x)。",
    "pitfalls": "漏掉链式法则中的 −3sin3x。"
  },
  "109": {
    "status": "verified",
    "questionKey": "1994-填空题-4",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-A"
    ],
    "rationale": "x³e^(x²)dx 可拆成 x²·e^(x²)·x dx，令 t=x² 后再对 t e^t 积分。",
    "methods": "先换元 t=x²，再用分部积分求 ∫t e^t dt。",
    "pitfalls": "换元后系数 1/2 遗漏；分部积分符号错误。"
  },
  "110": {
    "status": "verified",
    "questionKey": "1994-填空题-5",
    "primary": [
      "CAL-07-A"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "方程分离变量后分别积分，得到 y 与 x 的幂函数关系。",
    "methods": "整理为 dy/y 与 dx/[x(x−4)]，部分分式积分后指数化。",
    "pitfalls": "部分分式系数或指数化幂次错误；分离时丢失常值解。"
  },
  "111": {
    "status": "verified",
    "questionKey": "1994-选择题-1",
    "primary": [
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-02-E"
    ],
    "rationale": "ln(1+x) 在 0 点的二阶展开与题设极限比较，先令一次项系数抵消，再匹配二次项。",
    "methods": "写 ln(1+x)=x−x²/2+o(x²)，代入后比较 x 与 x² 系数。",
    "pitfalls": "只比较二次项而漏掉一次项必须为零。"
  },
  "112": {
    "status": "verified",
    "questionKey": "1994-选择题-2",
    "primary": [
      "CAL-04-A"
    ],
    "secondary": [
      "CAL-03-A"
    ],
    "rationale": "在 x=1 处左导数有限；右侧差商分子趋于非零常数、分母趋于 0⁺，右导数不存在。",
    "methods": "按导数定义分别计算左右差商，先核对函数点值。",
    "pitfalls": "把右侧普通导数公式代入分段点；不检查连续性。"
  },
  "113": {
    "status": "verified",
    "questionKey": "1994-选择题-3",
    "primary": [
      "CAL-05-F"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "由微分方程得 f″(x₀)=e^{sin x₀}>0，且 f′(x₀)=0，二阶导数判别法说明取得极小值。",
    "methods": "将 x₀ 代入微分方程求二阶导，再应用极值判别。",
    "pitfalls": "误将正二阶导解释为极大值；忽略驻点条件。"
  },
  "114": {
    "status": "verified",
    "questionKey": "1994-选择题-4",
    "primary": [
      "CAL-05-H"
    ],
    "secondary": [
      "CAL-05-C"
    ],
    "rationale": "分别考察 x→±∞ 与定义域边界；水平渐近线 y=π/4，x=0 为铅直渐近线。",
    "methods": "计算函数在无穷远的极限及 x→0⁺ 的单侧极限，并排除 x=1、−2。",
    "pitfalls": "把分母为零直接判为铅直渐近线，不检查函数极限。"
  },
  "115": {
    "status": "verified",
    "questionKey": "1994-选择题-5",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-E"
    ],
    "rationale": "M 的被积函数为奇函数积分为 0；N、P 中奇函数部分积分为 0，偶函数部分由对称性比较。",
    "methods": "先判断奇偶性，再利用对称区间将偶函数积分化为两倍半区间积分。",
    "pitfalls": "未识别奇函数项抵消；比较大小时符号弄反。"
  },
  "116": {
    "status": "verified",
    "questionKey": "1994-解答题-1",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "y=f(x+y) 是隐式复合关系，二阶求导要同时使用链式法则与乘积/商法则。",
    "methods": "先对 x 求导解出 y′，再对 f′(x+y)/(1−f′(x+y)) 求导并乘 (1+y′)。",
    "pitfalls": "二阶导数中遗漏 (1+y′) 因子，或幂次分母错误。"
  },
  "117": {
    "status": "verified",
    "questionKey": "1994-解答题-2",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "先令 u=x²，将积分转为半区间上的 (1−u²)^(3/2)，再作三角代换计算定积分。",
    "methods": "换元时同步调整积分限，令 u=sin t 后利用 cos⁴t 的标准积分。",
    "pitfalls": "第一次换元漏掉 1/2；三角换元积分限或幂次错误。"
  },
  "118": {
    "status": "verified",
    "questionKey": "1994-解答题-3",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-05-D"
    ],
    "rationale": "底数趋于 1，取对数后利用 tan(π/4+h) 的一阶展开，指数极限为 4，原极限 e⁴。",
    "methods": "取对数，化为 n·ln tan(π/4+2/n)，再用导数或泰勒展开求极限。",
    "pitfalls": "误将 tan(π/4+2/n) 直接近似为 1+2/n，系数遗漏。"
  },
  "119": {
    "status": "verified",
    "questionKey": "1994-解答题-4",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-A"
    ],
    "rationale": "分母用二倍角与和差恒等式化简后，令 u=cos x，得到有理函数积分并作部分分式。",
    "methods": "先因式分解三角分母，再作三角换元和部分分式分解。",
    "pitfalls": "因式分解漏系数；部分分式积分的对数绝对值或常数项错误。"
  },
  "120": {
    "status": "verified",
    "questionKey": "1994-解答题-5",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-03-C"
    ],
    "rationale": "比较直线梯形面积与曲边梯形面积，关键是把两者写成关于 a 的代数式并比较比值。",
    "methods": "分别计算 D 与 D₁，化简 D/D₁，再利用 a²>0 比较分式。",
    "pitfalls": "面积表达式漏掉矩形/三角形部分；不等式方向判断错误。"
  },
  "121": {
    "status": "verified",
    "questionKey": "1995-填空题-1",
    "primary": [
      "CAL-04-B"
    ],
    "secondary": [
      "CAL-08-B"
    ],
    "rationale": "函数是 cos(x²) 与 sin²(1/x) 的乘积，求导需同时使用乘积法则和复合函数链式法则。",
    "methods": "分别求两因子的导数，利用 2sin(1/x)cos(1/x)=sin(2/x) 化简。",
    "pitfalls": "漏掉内层 1/x 的导数负号或 x² 的 2x 因子。"
  },
  "122": {
    "status": "verified",
    "questionKey": "1995-填空题-2",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "二阶常系数非齐次线性方程，齐次特征根为 ±i，右端 −2x 可用一次多项式特解。",
    "methods": "先解特征方程，再设 yp=ax+b 代入确定系数。",
    "pitfalls": "把非齐次特解漏掉；齐次解中正弦余弦频率写错。"
  },
  "123": {
    "status": "verified",
    "questionKey": "1995-填空题-3",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "参数曲线切线斜率由 (dy/dt)/(dx/dt) 求得，在 t=2 处确定切点与斜率。",
    "methods": "计算 x(2)、y(2)，求 dy/dx=3t/2，再写点斜式。",
    "pitfalls": "误用 dy/dt 作为斜率；切点坐标代入错误。"
  },
  "124": {
    "status": "verified",
    "questionKey": "1995-填空题-4",
    "primary": [
      "CAL-02-A"
    ],
    "secondary": [
      "CAL-01-I"
    ],
    "rationale": "和式为随 n 变化的正项和，可用分母上下界夹逼，结合 1+…+n=n(n+1)/2 得极限。",
    "methods": "对每项分母 n²+n+k 用 n²+n+1 与 n²+2n 夹逼，求两端极限。",
    "pitfalls": "上下界分母取值方向弄反；求和分子漏掉 n(n+1)/2。"
  },
  "125": {
    "status": "verified",
    "questionKey": "1995-填空题-5",
    "primary": [
      "CAL-05-H"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "x²e^(−x²) 在 x→±∞ 均趋于 0，因此有水平渐近线 y=0。",
    "methods": "计算函数在正、负无穷处的极限，确认同一水平渐近线。",
    "pitfalls": "只检查 x→+∞；把函数趋于 0 误认为曲线与 x 轴相交。"
  },
  "126": {
    "status": "verified",
    "questionKey": "1995-选择题-1",
    "primary": [
      "CAL-03-B"
    ],
    "secondary": [
      "CAL-03-A"
    ],
    "rationale": "若 φ/f 连续且 f 连续，则 φ=f·(φ/f) 连续，与 φ 有间断点矛盾；又 f 处处非零保证商有定义。",
    "methods": "使用连续函数四则运算的逆否思路，逐项辨析复合、平方是否必保留间断。",
    "pitfalls": "把连续函数复合不连续函数必不连续当成普遍结论。"
  },
  "127": {
    "status": "verified",
    "questionKey": "1995-选择题-2",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-03-C"
    ],
    "rationale": "被积曲线在 (0,1) 位于 x 轴下方、(1,2) 位于上方，面积必须按零点分段取绝对值积分。",
    "methods": "解零点 0、1、2，判断每段符号，分别将负面积取相反数。",
    "pitfalls": "直接计算整个区间定积分，导致正负面积抵消。"
  },
  "128": {
    "status": "verified",
    "questionKey": "1995-选择题-3",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "f 严格递增则 f(−x) 严格递减，取负后 −f(−x) 严格递增；严格递增不保证处处导数严格为正。",
    "methods": "利用复合函数单调性逐层判断，并构造导数可为零的递增函数排除 A。",
    "pitfalls": "把函数严格递增等同于导数处处大于零。"
  },
  "129": {
    "status": "verified",
    "questionKey": "1995-选择题-4",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-05-C"
    ],
    "rationale": "f″>0 使 f′严格递增；由拉格朗日中值定理，f(1)−f(0)=f′(c)，其中 c∈(0,1)。",
    "methods": "先应用中值定理将函数增量表示为某点导数，再用 f′单调性比较。",
    "pitfalls": "误将区间平均变化量与端点导数大小关系倒置。"
  },
  "130": {
    "status": "verified",
    "questionKey": "1995-选择题-5",
    "primary": [
      "CAL-04-A"
    ],
    "secondary": [
      "CAL-03-A"
    ],
    "rationale": "因 |sin x| 在 0 处左右导数符号相反，乘积 F 在 0 可导要求尖点项系数 f(0) 消失。",
    "methods": "分别计算 F 的左右导数，比较 f′(0)−f(0) 与 f′(0)+f(0)。",
    "pitfalls": "仅对 x≠0 使用乘积求导，忽略 |sin x| 在 0 的不可导性。"
  },
  "131": {
    "status": "verified",
    "questionKey": "1995-解答题-1",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-01-G"
    ],
    "rationale": "分子 1−√cos x 的主阶为 x²/4，分母 x(1−cos√x) 的主阶为 x²/2，极限为 1/2。",
    "methods": "有理化分子，使用 1−cos u~u²/2 分别比较主阶。",
    "pitfalls": "把 1−cos√x 的主阶误写成 x²；漏掉有理化因子。"
  },
  "132": {
    "status": "verified",
    "questionKey": "1995-解答题-2",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "对 xe^{f(y)}=e^y 取对数得到 ln x+f(y)=y，隐式求导两次得到 y″。",
    "methods": "先求 y′=1/[x(1−f′(y))]，再对 x 求导并用链式法则处理 f′(y)。",
    "pitfalls": "对数等式移项符号错误；二次求导漏掉 f″(y)y′。"
  },
  "133": {
    "status": "verified",
    "questionKey": "1995-解答题-3",
    "primary": [
      "CAL-01-C"
    ],
    "secondary": [
      "CAL-06-A"
    ],
    "rationale": "先由 f(x²−1) 的表达式换元确定 f，再由 f(φ(x))=ln x 解出 φ，最后积分有理函数。",
    "methods": "令 u=x²−1 求 f(u)，再解对数方程并作部分分式/拆项积分。",
    "pitfalls": "换元时把 x² 当成自变量本身；解 φ 时指数化或定义域处理错误。"
  },
  "134": {
    "status": "verified",
    "questionKey": "1995-解答题-4",
    "primary": [
      "CAL-03-A"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "需先用导数定义求 f′(0)，再比较 x≠0 时 f′(x) 的极限与该值。",
    "methods": "对 x≠0 求导，利用 arctan(1/x²)→π/2 且第二项趋零；再计算点导数。",
    "pitfalls": "误以为 f′在原函数连续就自动成立；漏算 f′(0) 的定义。"
  },
  "135": {
    "status": "verified",
    "questionKey": "1995-解答题-5",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "参数曲线弧长由 ∫√[(x′(t))²+(y′(t))²]dt 给出，化简为 2|sin(t/2)|。",
    "methods": "求 x′、y′，代入弧长公式，并在 0≤t≤2π 上处理绝对值。",
    "pitfalls": "将参数弧长误当作 y 对 x 的积分；绝对值符号处理错误。"
  },
  "136": {
    "status": "verified",
    "questionKey": "1995-解答题-6",
    "primary": [
      "CAL-07-A"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "阻力与速度成正比给出 v′=−v，解指数衰减方程后以速度条件确定时间，再积分速度求路程。",
    "methods": "分离变量求 v(t)，令 v=v₀/3 解 t，再计算 ∫₀ᵗv(s)ds。",
    "pitfalls": "把路程误写为末速度乘时间；阻力方向符号错误。"
  },
  "137": {
    "status": "verified",
    "questionKey": "1996-填空题-1",
    "primary": [
      "CAL-04-B"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "幂函数复合指数函数，使用链式法则求导并在 x=0 代入。",
    "methods": "对 (g(x))^(2/3) 求导，g=x+e^(−x/2)，计算 g(0)=1、g′(0)=1/2。",
    "pitfalls": "指数 −x/2 的导数漏掉 −1/2；代入时幂次计算错误。"
  },
  "138": {
    "status": "verified",
    "questionKey": "1996-填空题-2",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-03-C"
    ],
    "rationale": "展开平方后交叉项 2x√(1−x²) 为奇函数，在对称区间积分为零，其余两项合并为常数 1。",
    "methods": "展开被积函数，利用奇函数在 [−1,1] 上积分为零。",
    "pitfalls": "没有展开平方；把根式项误判为奇函数。"
  },
  "139": {
    "status": "verified",
    "questionKey": "1996-填空题-3",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "特征方程 λ²+2λ+5=0 的根为 −1±2i，对应指数衰减乘正弦余弦的齐次通解。",
    "methods": "解特征方程，按共轭复根通解公式写出实数形式。",
    "pitfalls": "虚部频率写成 1；指数因子符号错误。"
  },
  "140": {
    "status": "verified",
    "questionKey": "1996-填空题-4",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-05-A"
    ],
    "rationale": "两个对数自变量均趋于 1，正弦差可用中值定理化为 cosξ 乘对数差，最终得到 2。",
    "methods": "应用正弦函数中值定理，再用 ln(1+a/x) 的一阶展开或对数差化简。",
    "pitfalls": "忽略中值点 ξ 的趋向；对数差展开时常数差漏算。"
  },
  "141": {
    "status": "verified",
    "questionKey": "1996-填空题-5",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "曲线与 y=2 的交点满足 x+1/x=2，即 x=1（另一根重合），在 [1,2] 上曲线位于直线上方。",
    "methods": "解交点确定积分限，计算 ∫₁²(x+1/x−2)dx。",
    "pitfalls": "漏掉交点；面积上下函数顺序或积分限错误。"
  },
  "142": {
    "status": "verified",
    "questionKey": "1996-选择题-1",
    "primary": [
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-02-E"
    ],
    "rationale": "eˣ 的二阶麦克劳林展开为 1+x+x²/2+o(x²)，要使差为比 x² 高阶，x 与 x² 系数都必须消失。",
    "methods": "展开到二阶，比较一次项系数 b 与二次项系数 a。",
    "pitfalls": "只匹配 x² 系数而忽略一次项必须为零。"
  },
  "143": {
    "status": "verified",
    "questionKey": "1996-选择题-2",
    "primary": [
      "CAL-04-A"
    ],
    "secondary": [
      "CAL-03-A"
    ],
    "rationale": "由 |f(x)|≤x² 得 f(0)=0，且差商绝对值 |f(x)/x|≤|x|→0，所以 f′(0)=0。",
    "methods": "先代 x=0 确定函数值，再用导数定义夹逼差商。",
    "pitfalls": "仅由函数连续性推断可导；没有使用差商定义。"
  },
  "144": {
    "status": "verified",
    "questionKey": "1996-选择题-3",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "若 f′(x)→+∞，则充分大 x 有 f′(x)>1，利用中值定理可推出 f(x)最终至少线性增长趋于 +∞。",
    "methods": "选取固定充分大的 X，对 x>X 用拉格朗日中值定理建立 f(x)−f(X)>x−X。",
    "pitfalls": "误认为函数趋于无穷必然导数趋于无穷；忽略导数下界只对充分大 x 成立。"
  },
  "145": {
    "status": "verified",
    "questionKey": "1996-选择题-4",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-03-C"
    ],
    "rationale": "方程左侧构成偶函数；在正半轴其零点只需考察 [0,1]，端点异号且区间单调递增，故正半轴唯一零点并由偶性得到两个根。",
    "methods": "利用偶性缩小范围，证明单调性并用介值定理确认唯一零点。",
    "pitfalls": "只用介值定理证明存在而未证明唯一；漏掉负半轴对称根。"
  },
  "146": {
    "status": "verified",
    "questionKey": "1996-选择题-5",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-08-C"
    ],
    "rationale": "绕 y=m 旋转时外半径 m−g(x)、内半径 m−f(x)，体积微元为圆环面积。",
    "methods": "用垫片法写 π[(m−g)²−(m−f)²]dx 并展开因式分解。",
    "pitfalls": "内外半径顺序颠倒；误用圆柱壳法或漏掉平方。"
  },
  "147": {
    "status": "verified",
    "questionKey": "1996-解答题-1",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-I"
    ],
    "rationale": "令 t=√(1−e^(−2x))，将根式积分化为有理函数积分，原区间有限且可用换元处理。",
    "methods": "由 e^(−2x)=1−t² 求 dx= t/(1−t²)dt，调整积分上下限后拆分。",
    "pitfalls": "换元求 dx 时漏掉 t 因子；积分上限 t(ln2) 算错。"
  },
  "148": {
    "status": "verified",
    "questionKey": "1996-解答题-2",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-A"
    ],
    "rationale": "乘以 1−sin x 有理化，积分拆为 sec²x−sec x tan x。",
    "methods": "将 1/(1+sin x) 乘以 (1−sin x)/(1−sin x)，再逐项积分。",
    "pitfalls": "有理化后分子分母化简错误；sec x 的积分项符号弄错。"
  },
  "149": {
    "status": "verified",
    "questionKey": "1996-解答题-3",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-08-B"
    ],
    "rationale": "参数关系中 x′(t)=f(t²)，先求 dy/dx，再按 d/dx=(1/x′(t))d/dt 再求一次。",
    "methods": "计算 x′、y′，求 y′(x)，再对 t 求导并除以 x′。",
    "pitfalls": "把 d²y/dx² 当成对 t 的二阶导；漏除 x′(t)。"
  },
  "150": {
    "status": "verified",
    "questionKey": "1996-解答题-4",
    "primary": [
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-02-E"
    ],
    "rationale": "要求 n 阶麦克劳林式及拉格朗日余项，可将函数改写为 −1+2/(1+x)，利用几何级数结构或求导公式写余项。",
    "methods": "展开 1/(1+x) 到 n 阶，并用拉格朗日型余项表达 n+1 阶导数在 θx 处的值。",
    "pitfalls": "常数项符号错误；余项阶数、系数或 θ 区间写错。"
  },
  "151": {
    "status": "verified",
    "questionKey": "1996-解答题-5",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "齐次特征根为 0、−1，非齐次项 x² 取三次多项式特解，代入确定系数。",
    "methods": "先解齐次方程，再设 yp=ax³+bx²+cx，代回比较系数。",
    "pitfalls": "特征根 0 对应常数项漏掉；特解多项式次数或系数错误。"
  },
  "152": {
    "status": "verified",
    "questionKey": "1996-解答题-6",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-08-C"
    ],
    "rationale": "楔形体可按 y 方向切片，椭圆底面给出截面宽度，斜平面高度随 x 线性变化，形成三角形截面。",
    "methods": "由椭圆方程求 x(y)，建立截面三角形面积 A(y)，再在 [−b,b] 积分。",
    "pitfalls": "截面面积误当矩形；三角形面积的 1/2 或 tanα 因子遗漏。"
  },
  "153": {
    "status": "verified",
    "questionKey": "1997-填空题-1",
    "primary": [
      "CAL-03-A"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "连续性要求 a 等于 (cos x)^(1/x²) 在 0 处的极限，取对数后化为 ln(cos x)/x²。",
    "methods": "设极限为 L，取 ln 得 lim ln(cos x)/x²=−1/2，再指数还原。",
    "pitfalls": "忘记连续值等于极限；取对数后忘记最后取指数。"
  },
  "154": {
    "status": "verified",
    "questionKey": "1997-填空题-2",
    "primary": [
      "CAL-04-B"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "对数化简后 y=1/2[ln(1−x)−ln(1+x²)]，连续求两次导数并代 x=0。",
    "methods": "先利用对数性质拆项，求 y′、y″，再代入 0。",
    "pitfalls": "平方根带来的 1/2 系数遗漏；第二项求二阶导数错误。"
  },
  "155": {
    "status": "verified",
    "questionKey": "1997-填空题-3",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-A"
    ],
    "rationale": "积分分母 x(4−x) 可通过 x=u² 化为标准反三角函数积分。",
    "methods": "令 u=√x，dx=2u du，约去 u 后积分 2/√(4−u²)。",
    "pitfalls": "换元后 dx 系数 2 漏掉；反三角函数参数与系数错误。"
  },
  "156": {
    "status": "verified",
    "questionKey": "1997-填空题-4",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "上限为正无穷，属于反常积分；配方后成为反正切型积分并计算端点极限。",
    "methods": "配方 x²+4x+8=(x+2)²+4，使用 arctan 原函数并令上限趋于无穷。",
    "pitfalls": "忘记写反常积分极限；反正切原函数前系数 1/2 错误。"
  },
  "157": {
    "status": "verified",
    "questionKey": "1997-填空题-5",
    "primary": [
      "LA-03-C"
    ],
    "secondary": [
      "LA-02-B"
    ],
    "rationale": "三个四维向量组成的向量组秩为 2，需由矩阵初等变换或三阶子式全为零确定参数。",
    "methods": "将向量作为列组成矩阵，检查秩为 2 的条件并求参数 t。",
    "pitfalls": "仅令一个子式为零而未确认存在非零二阶子式。"
  },
  "158": {
    "status": "verified",
    "questionKey": "1997-选择题-1",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-05-D"
    ],
    "rationale": "tan x−x 的首个非零项为 x³/3，指数函数差 e^(tan x)−eˣ 因而为三阶无穷小。",
    "methods": "提取 eˣ，将 e^(tan x−x)−1 化为 tan x−x 的等价无穷小。",
    "pitfalls": "把 tan x−x 误判为二阶；忽略指数差中的高阶展开。"
  },
  "159": {
    "status": "verified",
    "questionKey": "1997-选择题-2",
    "primary": [
      "CAL-05-C"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "f′<0 使右端点矩形面积 S₂ 小于积分；f″>0 表明函数凸，曲线位于端点连线下方，故梯形面积 S₃ 大于积分。",
    "methods": "分别用单调性比较 S₂ 与 S₁，用凸函数弦线性质比较 S₁ 与 S₃。",
    "pitfalls": "把凸函数图像与弦线的位置关系弄反；混淆梯形面积和积分面积。"
  },
  "160": {
    "status": "verified",
    "questionKey": "1997-选择题-3",
    "primary": [
      "CAL-05-F"
    ],
    "secondary": [
      "CAL-05-E"
    ],
    "rationale": "二阶导数符号判极值；由题设得 $f^{\\prime\\prime}\\left(x_{0}\\right)=\\frac{1-e^{-x_{0}}}{x_{0}}$。无论 $x_{0}>0$ 或 $x_{0}<0$，均有 $f^{\\prime\\prime}\\left(x_{0}\\right)>0$，故 $f\\left(x_{0}\\right)$ 为极小值。",
    "methods": "驻点二阶导数判别极值；先由 f'(x₀)=0，再代入关系求 f''(x₀) 的符号。",
    "pitfalls": "不要把二阶导数正负与函数值正负混淆。"
  },
  "161": {
    "status": "verified",
    "questionKey": "1997-选择题-4",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-E"
    ],
    "rationale": "周期函数积分区间长度为周期；因 $e^{\\sin t}\\sin t$ 以 $2\\pi$ 为周期，所以 $F\\left(x\\right)$ 为常数。又 $F\\left(x\\right)=\\int_{0}^{\\pi}\\left(e^{\\sin t}-e^{-\\sin t}\\right)\\sin t\\mathrm{~d}t>0$，故为正常数。",
    "methods": "周期函数在一个周期上的定积分与起点无关；利用被积函数周期性，将积分区间平移到便于判断符号的位置。",
    "pitfalls": "周期积分为常数不代表积分为零，还需判断其正负。"
  },
  "162": {
    "status": "verified",
    "questionKey": "1997-选择题-5",
    "primary": [
      "CAL-01-A"
    ],
    "secondary": [
      "CAL-01-B"
    ],
    "rationale": "分段函数复合；当 $x<0$ 时，$f\\left(x\\right)=x^{2}>0$，故 $g\\left[f\\left(x\\right)\\right]=2+x^{2}$；当 $x\\ge 0$ 时，$f\\left(x\\right)=-x\\le 0$，故 $g\\left[f\\left(x\\right)\\right]=2+x$。",
    "methods": "分段函数的复合与分段区间判断；先判断内层函数 f(x) 的符号，再选择外层 g 的对应分支。",
    "pitfalls": "分段点 x=0 需单独归入正确区间。"
  },
  "163": {
    "status": "verified",
    "questionKey": "1997-解答题-1",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-01-G"
    ],
    "rationale": "无穷远极限与根式有理化；分子分母同除以 $\\left|x\\right|=-x$，得 $\\lim_{x \\to -\\infty}\\frac{\\sqrt{4+\\frac{1}{x}-\\frac{1}{x^{2}}}-1-\\frac{1}{x}}{\\sqrt{1+\\frac{\\sin x}{x^{2}}}}=1$。",
    "methods": "无穷远处根式极限与绝对值处理；x→−∞ 时先用 |x|=−x 规范化，再将根式除以 |x|。",
    "pitfalls": "不能把 √(x²) 直接写成 x；应写 |x|。"
  },
  "164": {
    "status": "verified",
    "questionKey": "1997-解答题-2",
    "primary": [
      "CAL-04-E"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "参数方程隐函数求导；对 $2y-ty^{2}+e^{t}=5$ 关于 $t$ 求导，得 $\\frac{\\mathrm{d}y}{\\mathrm{d}t}=\\frac{e^{t}-y^{2}}{2\\left(ty-1\\right)}$。又 $\\frac{\\mathrm{d}x}{\\mathrm{d}t}=\\frac{1}{1+t^{2}}$，所以 $y^{\\prime}=\\frac{\\left(e^{t}-y^{2}\\right)\\left(1+t^{2}\\right)}{2\\left(ty-1\\right)}$。",
    "methods": "参数方程确定函数的导数；分别求 dy/dt 与 dx/dt，再用 dy/dx=(dy/dt)/(dx/dt)。",
    "pitfalls": "注意参数导数的商序，不能颠倒。"
  },
  "165": {
    "status": "verified",
    "questionKey": "1997-解答题-3",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-D"
    ],
    "rationale": "指数乘积与三角恒等式积分；因为 $\\left(\\tan x+1\\right)^{2}=\\sec^{2}x+2\\tan x$，所以 $\\int e^{2x}\\left(\\tan x+1\\right)^{2}\\mathrm{~d}x=\\int e^{2x}\\left(\\sec^{2}x+2\\tan x\\right)\\mathrm{~d}x=e^{2x}\\tan x+C$。",
    "methods": "利用导数结构识别不定积分；展开三角恒等式，识别 e^(2x)tan x 的导数结构。",
    "pitfalls": "先验证被积函数是否恰为某个乘积的导数。"
  },
  "166": {
    "status": "verified",
    "questionKey": "1997-解答题-4",
    "primary": [
      "CAL-07-D"
    ],
    "secondary": [
      "CAL-07-A"
    ],
    "rationale": "全微分方程判定；令 $P=3x^{2}+2xy-y^{2}$，$Q=x^{2}-2xy$，则 $\\frac{\\partial P}{\\partial y}=\\frac{\\partial Q}{\\partial x}=2x-2y$，故为全微分方程。积分得通解 $x^{3}+x^{2}y-xy^{2}=C$，其中 $C$ 为任意常数。",
    "methods": "全微分方程的判定与求解；比较 M_y 与 N_x；相等时构造势函数并积分。",
    "pitfalls": "注意积分后补充另一变量的函数，再用 Q 校正。"
  },
  "167": {
    "status": "verified",
    "questionKey": "1997-解答题-5",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "二阶线性非齐次方程；由 $y_{1}-y_{3}=e^{-x}$，$y_{1}-y_{2}=e^{2x}-e^{-x}$，知对应齐次方程特征根为 $-1,2$，故齐次方程为 $y^{\\prime\\prime}-y^{\\prime}-2y=0$。以 $xe^{x}$ 为特解，代入得非齐次项为 $\\left(1-2x\\right)e^{x}$，故所求方程为 $y^{\\prime\\prime}-y^{\\prime}-2y=\\left(1-2x\\right)e^{x}$。",
    "methods": "由多个非齐次方程解反求方程；解的差给出齐次解，据此确定特征根；再代入一个特解求非齐次项。",
    "pitfalls": "不要将三个非齐次解直接当作齐次解。"
  },
  "168": {
    "status": "verified",
    "questionKey": "1997-解答题-6",
    "primary": [
      "LA-02-A"
    ],
    "secondary": [
      "LA-02-D"
    ],
    "rationale": "矩阵方程左乘可逆矩阵；由 $\\boldsymbol{A}^{2}-\\boldsymbol{A}\\boldsymbol{B}=\\boldsymbol{E}$，得 $\\boldsymbol{B}=\\boldsymbol{A}-\\boldsymbol{A}^{-1}$。又 $\\boldsymbol{A}^{-1}=\\begin{pmatrix}1 & -1 & -2\\\\0 & 1 & 1\\\\0 & 0 & -1\\end{pmatrix}$，所以 $\\boldsymbol{B}=\\begin{pmatrix}0 & 2 & 1\\\\0 & 0 & 0\\\\0 & 0 & 0\\end{pmatrix}$。",
    "methods": "矩阵方程与逆矩阵运算；由 A²−AB=E 提取 A(A−B)=E，利用 A 可逆解出 B。",
    "pitfalls": "矩阵乘法不可交换，整理时保持乘法顺序。"
  },
  "169": {
    "status": "verified",
    "questionKey": "1998-填空题-1",
    "primary": [
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "二阶泰勒展开求极限；由 $\\sqrt{1+x}=1+\\frac{1}{2}x-\\frac{1}{8}x^{2}+o\\left(x^{2}\\right)$，$\\sqrt{1-x}=1-\\frac{1}{2}x-\\frac{1}{8}x^{2}+o\\left(x^{2}\\right)$，得 $\\sqrt{1+x}+\\sqrt{1-x}-2=-\\frac{1}{4}x^{2}+o\\left(x^{2}\\right)$，故原极限为 $-\\frac{1}{4}$。",
    "methods": "麦克劳林展开求极限；将两个根式展开到 x² 项，合并后除以 x²。",
    "pitfalls": "保留到分母所需的最低非零阶，线性项会抵消。"
  },
  "170": {
    "status": "verified",
    "questionKey": "1998-填空题-2",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-E"
    ],
    "rationale": "曲线与坐标轴围面积；因为 $y=-x\\left(x+1\\right)\\left(x-2\\right)$，所以交点为 $x=-1,0,2$。当 $-1\\le x\\le 0$ 时，$y<0$；当 $0\\le x\\le 2$ 时，$y\\ge 0$。故 $A=-\\int_{-1}^{0}-x\\left(x+1\\right)\\left(x-2\\right)\\mathrm{~d}x+\\int_{0}^{2}-x\\left(x+1\\right)\\left(x-2\\right)\\mathrm{~d}x=\\frac{37}{12}$。",
    "methods": "曲线与 x 轴围成面积的定积分；求零点并分段判断函数符号，按几何面积取绝对值积分。",
    "pitfalls": "定积分的代数值不一定等于几何面积。"
  },
  "171": {
    "status": "verified",
    "questionKey": "1998-填空题-3",
    "primary": [
      "CAL-06-D"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "分部积分与三角积分；$\\int \\frac{\\ln \\left(\\sin x\\right)}{\\sin^{2}x}\\mathrm{~d}x=-\\int \\ln \\left(\\sin x\\right)\\mathrm{~d}\\left(\\cot x\\right)=-\\cot x\\ln \\left(\\sin x\\right)+\\int \\left(\\csc^{2}x-1\\right)\\mathrm{~d}x=-\\cot x\\ln \\left(\\sin x\\right)-\\cot x-x+C$。",
    "methods": "含对数与三角函数的分部积分；取 u=ln(sin x)，dv=csc²x dx，进行分部积分。",
    "pitfalls": "注意 d(cot x)=−csc²x dx 的负号。"
  },
  "172": {
    "status": "verified",
    "questionKey": "1998-填空题-4",
    "primary": [
      "CAL-06-F"
    ],
    "secondary": [
      "CAL-06-G"
    ],
    "rationale": "变限积分求导与换元；令 $u=x^{2}-t^{2}$，则 $\\int_{0}^{x}tf\\left(x^{2}-t^{2}\\right)\\mathrm{~d}t=\\frac{1}{2}\\int_{0}^{x^{2}}f\\left(u\\right)\\mathrm{~d}u$，因此 $\\frac{\\mathrm{d}}{\\mathrm{d}x}\\int_{0}^{x}tf\\left(x^{2}-t^{2}\\right)\\mathrm{~d}t=xf\\left(x^{2}\\right)$。",
    "methods": "变限积分求导与换元；先令 u=x²−t² 化为上限为 x² 的积分，再用链式法则求导。",
    "pitfalls": "上限 x² 求导会产生因子 2x，与前面的 1/2 抵消。"
  },
  "173": {
    "status": "verified",
    "questionKey": "1998-填空题-5",
    "primary": [
      "CAL-05-H"
    ],
    "secondary": [
      "CAL-05-C"
    ],
    "rationale": "斜渐近线；$\\lim_{x \\to +\\infty}\\frac{y}{x}=1$，且 $\\lim_{x \\to +\\infty}\\left(y-x\\right)=\\lim_{t \\to 0^{+}}\\frac{\\ln \\left(e+t\\right)-1}{t}=\\frac{1}{e}$，故斜渐近线为 $y=x+\\frac{1}{e}$。",
    "methods": "函数斜渐近线的求法；先求斜率 k=lim(y/x)，再求截距 b=lim(y−kx)。",
    "pitfalls": "两个极限都存在且有限才能得到斜渐近线。"
  },
  "174": {
    "status": "verified",
    "questionKey": "1998-选择题-1",
    "primary": [
      "CAL-02-A"
    ],
    "secondary": [
      "CAL-01-G"
    ],
    "rationale": "数列乘积趋零的推论；若 $\\left\\{\\frac{1}{x_{n}}\\right\\}$ 为无穷小，则 $\\left|x_{n}\\right|\\to \\infty$。又 $x_{n}y_{n}\\to 0$，所以 $y_{n}=\\left(x_{n}y_{n}\\right)\\frac{1}{x_{n}}\\to 0$，故选 D。",
    "methods": "数列乘积趋零与因子趋零的推理；利用 y_n=(x_n y_n)(1/x_n)，由两个因子趋零推出 y_n→0。",
    "pitfalls": "先确认 1/x_n→0 的条件意味着 x_n 的绝对值趋于无穷。"
  },
  "175": {
    "status": "verified",
    "questionKey": "1998-选择题-2",
    "primary": [
      "CAL-04-A"
    ],
    "secondary": [
      "CAL-03-B"
    ],
    "rationale": "绝对值函数不可导点；$f\\left(x\\right)=\\left(x+1\\right)\\left(x-2\\right)\\left|x\\right|\\left|x+1\\right|\\left|x-1\\right|$，只需考察 $x=-1,0,1$。其中 $x=-1$ 处可导，$x=0$ 与 $x=1$ 处左右导数不相等，故不可导点个数为 $2$。",
    "methods": "含绝对值函数在零点处的可导性；找出绝对值内部为零的点，逐点比较左右导数。",
    "pitfalls": "绝对值零点不一定都是不可导点，需检查外因子是否抵消尖点。"
  },
  "176": {
    "status": "verified",
    "questionKey": "1998-选择题-3",
    "primary": [
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "增量定义导数与初值；由题意得 $y^{\\prime}=\\frac{y}{1+x^{2}}$，解得 $y=Ce^{\\arctan x}$。由 $y\\left(0\\right)=\\pi$ 得 $C=\\pi$，故 $y\\left(1\\right)=\\pi e^{\\frac{\\pi}{4}}$。",
    "methods": "由增量关系建立并求解一阶微分方程；将增量式除以 Δx 取极限，得到 y'=y/(1+x²)，分离变量并用初值。",
    "pitfalls": "高阶无穷小项除以 Δx 后趋于零。"
  },
  "177": {
    "status": "verified",
    "questionKey": "1998-选择题-4",
    "primary": [
      "CAL-05-F"
    ],
    "secondary": [
      "CAL-05-E"
    ],
    "rationale": "极大值的邻域性质；因 $f\\left(a\\right)$ 为极大值，所以在 $a$ 的某邻域内 $f\\left(a\\right)\\ge f\\left(x\\right)$。当 $x\\ne a$ 时，$\\lim_{t \\to a}\\frac{f\\left(t\\right)-f\\left(x\\right)}{\\left(t-x\\right)^{2}}=\\frac{f\\left(a\\right)-f\\left(x\\right)}{\\left(a-x\\right)^{2}}\\ge 0$。",
    "methods": "极大值定义与邻域内函数值比较；由局部极大值定义得 f(x)≤f(a)，再代入所给极限。",
    "pitfalls": "平方分母为正；固定 x≠a 后再令 t→a。"
  },
  "178": {
    "status": "verified",
    "questionKey": "1998-选择题-5",
    "primary": [
      "LA-02-D"
    ],
    "secondary": [
      "LA-01-B"
    ],
    "rationale": "伴随矩阵的齐次性；伴随矩阵的元素是 $n-1$ 阶代数余子式，所以 $\\left(k\\boldsymbol{A}\\right)^{*}=k^{n-1}\\boldsymbol{A}^{*}$。",
    "methods": "伴随矩阵对数乘因子的齐次性；伴随矩阵元素是 n−1 阶代数余子式，整体缩放因子为 k^(n−1)。",
    "pitfalls": "不要误用 det(kA)=k^n det(A) 的指数 n。"
  },
  "179": {
    "status": "verified",
    "questionKey": "1999-填空题-1",
    "primary": [
      "CAL-04-E"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "参数曲线法线；点 $\\left(0,1\\right)$ 对应 $t=0$。由参数方程求导得\n\n$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{e^{t}\\cos t-e^{t}\\sin t}{e^{t}\\sin 2t+2e^{t}\\cos 2t}$。\n\n代入 $t=0$，得切线斜率为 $\\dfrac{1}{2}$，故法线斜率为 $-2$。所以法线方程为 $y-1=-2x$，即 $2x+y-1=0$。",
    "methods": "参数曲线切线与法线方程；先由点坐标确定参数，再计算 dy/dx，法线斜率取负倒数。",
    "pitfalls": "切线斜率为 1/2 时法线斜率为 −2。"
  },
  "180": {
    "status": "verified",
    "questionKey": "1999-填空题-2",
    "primary": [
      "CAL-04-D"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "隐函数求导；当 $x=0$ 时，由原方程得 $y=1$。两边对 $x$ 求导：\n\n$\\dfrac{2x+y^{\\prime}}{x^{2}+y}=3x^{2}+y^{\\prime}\\sin x+y\\cos x$。\n\n代入 $x=0,y=1$，得 $y^{\\prime}=1$。",
    "methods": "隐函数方程求导；对隐式方程两边关于 x 求导，解出 y' 后代入指定点。",
    "pitfalls": "含 y 的复合项求导时必须乘 y'。"
  },
  "181": {
    "status": "verified",
    "questionKey": "1999-填空题-3",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-D"
    ],
    "rationale": "有理函数积分配平方；因为 $x+5=\\left(x-3\\right)+8$，所以\n\n$\\int\\dfrac{x+5}{x^{2}-6x+13}\\mathrm{~d}x=\\int\\dfrac{x-3}{x^{2}-6x+13}\\mathrm{~d}x+8\\int\\dfrac{\\mathrm{d}x}{\\left(x-3\\right)^{2}+4}$。\n\n故\n\n$\\int\\dfrac{x+5}{x^{2}-6x+13}\\mathrm{~d}x=\\dfrac{1}{2}\\ln\\left(x^{2}-6x+13\\right)+4\\arctan\\dfrac{x-3}{2}+C$。",
    "methods": "有理函数不定积分的拆项与配方；将分子拆成分母导数与常数项，分母配方后分别积分。",
    "pitfalls": "对数项与反正切项系数要分别核对。"
  },
  "182": {
    "status": "verified",
    "questionKey": "1999-填空题-4",
    "primary": [
      "CAL-06-H"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "函数平均值；平均值为\n\n$\\overline{y}=\\dfrac{1}{\\frac{\\sqrt{3}}{2}-\\frac{1}{2}}\\int_{\\frac{1}{2}}^{\\frac{\\sqrt{3}}{2}}\\dfrac{x^{2}}{\\sqrt{1-x^{2}}}\\mathrm{~d}x$。\n\n令 $x=\\sin t$，得\n\n$\\overline{y}=\\dfrac{2}{\\sqrt{3}-1}\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{3}}\\sin^{2}t\\mathrm{~d}t=\\dfrac{\\left(\\sqrt{3}+1\\right)\\pi}{12}$。",
    "methods": "函数在区间上的平均值；平均值等于区间定积分除以区间长度，再作三角换元计算。",
    "pitfalls": "别漏掉区间长度因子。"
  },
  "183": {
    "status": "verified",
    "questionKey": "1999-填空题-5",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "常系数微分方程共振；齐次方程 $y^{\\prime\\prime}-4y=0$ 的特征根为 $\\lambda_{1}=2,\\lambda_{2}=-2$。又非齐次项为 $e^{2x}$，设特解 $y^{*}=Axe^{2x}$，代入得 $A=\\dfrac{1}{4}$。故通解为\n\n$y=C_{1}e^{-2x}+\\left(C_{2}+\\dfrac{1}{4}x\\right)e^{2x}$。",
    "methods": "二阶常系数非齐次线性微分方程；先解特征方程，再按右端与特征根共振的情形设特解。",
    "pitfalls": "右端 e^(2x) 对应特征根 2，特解需乘 x。"
  },
  "184": {
    "status": "verified",
    "questionKey": "1999-选择题-1",
    "primary": [
      "CAL-04-A"
    ],
    "secondary": [
      "CAL-03-A"
    ],
    "rationale": "分段函数在拼接点可导；因 $g\\left(x\\right)$ 有界，$\\lim_{x\\to 0^{-}}x^{2}g\\left(x\\right)=0$；又 $\\lim_{x\\to 0^{+}}\\dfrac{1-\\cos x}{\\sqrt{x}}=0$，故 $f\\left(x\\right)$ 在 $x=0$ 处连续。\n\n又\n\n$f_{+}^{\\prime}\\left(0\\right)=\\lim_{x\\to 0^{+}}\\dfrac{1-\\cos x}{x\\sqrt{x}}=0,\\quad f_{-}^{\\prime}\\left(0\\right)=\\lim_{x\\to 0^{-}}xg\\left(x\\right)=0$。\n\n所以 $f^{\\prime}\\left(0\\right)$ 存在，选 D。",
    "methods": "分段函数在拼接点的连续与可导；分别求左右函数值极限及左右导数，比较是否相等。",
    "pitfalls": "g 有界保证 x²g(x)/x→0，但必须按差商定义检查。"
  },
  "185": {
    "status": "verified",
    "questionKey": "1999-选择题-2",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-06-F"
    ],
    "rationale": "积分函数渐近阶；由洛必达法则，\n\n$\\lim_{x\\to 0}\\dfrac{\\alpha\\left(x\\right)}{\\beta\\left(x\\right)}=\\lim_{x\\to 0}\\dfrac{\\sin^{5}x}{\\frac{1}{5}\\cdot \\frac{x^{5}}{1+\\sin x}}=5$。\n\n极限为有限非零常数但不等于 $1$，故二者同阶但不等价，选 C。",
    "methods": "积分定义的函数比较无穷小阶；对 α/β 使用洛必达法则，或比较被积函数主阶后积分。",
    "pitfalls": "极限为 5 表示同阶但不等价，不是等价无穷小。"
  },
  "186": {
    "status": "verified",
    "questionKey": "1999-选择题-3",
    "primary": [
      "CAL-06-A"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "原函数奇偶性；原函数可写为 $F\\left(x\\right)=\\int_{0}^{x}f\\left(t\\right)\\mathrm{~d}t+C$。若 $f\\left(x\\right)$ 为奇函数，则\n\n$F\\left(-x\\right)=\\int_{0}^{-x}f\\left(t\\right)\\mathrm{~d}t+C=\\int_{0}^{x}f\\left(u\\right)\\mathrm{~d}u+C=F\\left(x\\right)$。\n\n所以 $F\\left(x\\right)$ 为偶函数，选 A。",
    "methods": "原函数的奇偶性；将原函数写为从 0 到 x 的积分加常数，利用奇函数积分性质。",
    "pitfalls": "任意原函数只相差常数，偶性结论仍成立。"
  },
  "187": {
    "status": "verified",
    "questionKey": "1999-选择题-4",
    "primary": [
      "CAL-01-D"
    ],
    "secondary": [
      "CAL-02-A"
    ],
    "rationale": "数列极限定义；该条件与数列极限定义等价。因为 $\\varepsilon\\in\\left(0,1\\right)$ 仍可任意小，且 $\\left|x_{n}-a\\right|\\le 2\\varepsilon$ 仍能保证 $\\left|x_{n}-a\\right|$ 任意小，所以是充分必要条件，选 C。",
    "methods": "数列收敛的 ε-N 定义等价形式；利用 ε 可任意小，将误差上界 2ε 与标准定义互相转换。",
    "pitfalls": "常数倍不改变任意小的性质。"
  },
  "188": {
    "status": "verified",
    "questionKey": "1999-选择题-5",
    "primary": [
      "LA-01-A"
    ],
    "secondary": [
      "LA-01-B"
    ],
    "rationale": "行列式行列变换；利用行列式性质化简可得 $f\\left(x\\right)=5x\\left(x-1\\right)$。故方程 $f\\left(x\\right)=0$ 有两个根 $x=0,x=1$，选 B。",
    "methods": "行列式化简与多项式方程根；利用行列式行列变换化简为多项式，再求其零点。",
    "pitfalls": "行变换对行列式的影响需同步记录。"
  },
  "189": {
    "status": "verified",
    "questionKey": "2000-填空题-1",
    "primary": [
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "反正切与对数展开；当 $x\\to 0$ 时，$\\arctan x=x-\\dfrac{x^{3}}{3}+o\\left(x^{3}\\right)$，$\\ln\\left(1+2x^{3}\\right)\\sim 2x^{3}$，故\n\n$\\lim_{x\\to 0}\\dfrac{\\arctan x-x}{\\ln\\left(1+2x^{3}\\right)}=-\\dfrac{1}{6}$。",
    "methods": "麦克劳林展开与高阶无穷小比较；分别展开 arctan x 与 ln(1+2x³)，比较最低非零阶。",
    "pitfalls": "分子首个非零项是 −x³/3，分母首项是 2x³。"
  },
  "190": {
    "status": "verified",
    "questionKey": "2000-填空题-2",
    "primary": [
      "CAL-04-D"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "隐函数微分；对 $2^{xy}=x+y$ 两边求微分，得 $2^{xy}\\ln 2\\left(x\\mathrm{d}y+y\\mathrm{d}x\\right)=\\mathrm{d}x+\\mathrm{d}y$。当 $x=0$ 时，由原方程得 $y=1$，代入得 $\\ln 2\\,\\mathrm{d}x=\\mathrm{d}x+\\mathrm{d}y$，故 $\\left.\\mathrm{d}y\\right|_{x=0}=\\left(\\ln 2-1\\right)\\mathrm{d}x$。",
    "methods": "隐函数全微分；对 2^(xy)=x+y 两边求全微分，再代入 x=0 时的 y 值。",
    "pitfalls": "指数函数求微分需乘 ln2，xy 的微分要用乘积法则。"
  },
  "191": {
    "status": "verified",
    "questionKey": "2000-填空题-3",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-06-G"
    ],
    "rationale": "反常积分换元；令 $x-2=t^{2}$，则 $x=t^{2}+2$，$\\mathrm{d}x=2t\\mathrm{~d}t$。于是\n\n$\\int_{2}^{+\\infty}\\dfrac{\\mathrm{d}x}{\\left(x+7\\right)\\sqrt{x-2}}=\\int_{0}^{+\\infty}\\dfrac{2\\mathrm{~d}t}{t^{2}+9}=\\dfrac{2}{3}\\left.\\arctan\\dfrac{t}{3}\\right|_{0}^{+\\infty}=\\dfrac{\\pi}{3}$。",
    "methods": "反常积分的换元计算；令 x−2=t²，将下端点与无穷上限同步换成 t 的范围。",
    "pitfalls": "换元后需保留反常上限并检查收敛。"
  },
  "192": {
    "status": "verified",
    "questionKey": "2000-填空题-4",
    "primary": [
      "CAL-05-H"
    ],
    "secondary": [
      "CAL-05-D"
    ],
    "rationale": "指数函数斜渐近线；设斜渐近线为 $y=kx+b$。由 $k=\\lim_{x\\to \\infty}\\dfrac{y}{x}=2$，$b=\\lim_{x\\to \\infty}\\left[y-2x\\right]=1$，故斜渐近线为 $y=2x+1$。",
    "methods": "含指数函数的斜渐近线；用 e^(1/x)=1+1/x+o(1/x) 求斜率和截距。",
    "pitfalls": "斜率取 lim y/x，截距取 lim(y−kx)。"
  },
  "193": {
    "status": "verified",
    "questionKey": "2000-填空题-5",
    "primary": [
      "LA-02-A"
    ],
    "secondary": [
      "LA-02-D"
    ],
    "rationale": "矩阵逆与 Cayley 变换；由 $\\boldsymbol{B}=\\left(\\boldsymbol{E}+\\boldsymbol{A}\\right)^{-1}\\left(\\boldsymbol{E}-\\boldsymbol{A}\\right)$，得\n\n$\\boldsymbol{E}+\\boldsymbol{B}=2\\left(\\boldsymbol{E}+\\boldsymbol{A}\\right)^{-1}$。\n\n故\n\n$\\left(\\boldsymbol{E}+\\boldsymbol{B}\\right)^{-1}=\\dfrac{1}{2}\\left(\\boldsymbol{E}+\\boldsymbol{A}\\right)=\\begin{bmatrix}1 & 0 & 0 & 0\\\\-1 & 2 & 0 & 0\\\\0 & -2 & 3 & 0\\\\0 & 0 & -3 & 4\\end{bmatrix}$。",
    "methods": "矩阵表达式与逆矩阵恒等变形；先化简 E+B=2(E+A)⁻¹，再整体取逆。",
    "pitfalls": "矩阵求逆时注意乘法顺序和标量因子。"
  },
  "194": {
    "status": "verified",
    "questionKey": "2000-选择题-1",
    "primary": [
      "CAL-03-A"
    ],
    "secondary": [
      "CAL-02-B"
    ],
    "rationale": "分母连续与无穷远；若 $a<0$，则分母 $a+e^{bx}$ 可能为 $0$，不满足连续性，故需 $a\\ge 0$。又要使 $\\lim_{x\\to -\\infty}\\dfrac{x}{a+e^{bx}}=0$，需 $b<0$，使 $e^{bx}\\to +\\infty$。故选 D。",
    "methods": "函数在全实轴连续与无穷远极限约束；连续性要求分母对所有实数不为零，极限条件再约束 b 的符号。",
    "pitfalls": "需同时使用连续性与 x→−∞ 的极限，不能只看其中一项。"
  },
  "195": {
    "status": "verified",
    "questionKey": "2000-选择题-2",
    "primary": [
      "CAL-05-G"
    ],
    "secondary": [
      "CAL-05-F"
    ],
    "rationale": "隐含微分方程判拐点；代入 $x=0$，得 $f^{\\prime\\prime}\\left(0\\right)=0$。对原式求导，得 $f^{\\prime\\prime\\prime}\\left(x\\right)+2f^{\\prime}\\left(x\\right)f^{\\prime\\prime}\\left(x\\right)=1$，故 $f^{\\prime\\prime\\prime}\\left(0\\right)=1$。所以 $f^{\\prime\\prime}\\left(x\\right)$ 在 $x=0$ 两侧变号，选 C。",
    "methods": "由高阶导数符号判定拐点；先由原式求 f''(0)=0，再对关系式求导得到 f'''(0)>0。",
    "pitfalls": "f'(0)=0 不代表极值；关键是 f'' 在点两侧变号。"
  },
  "196": {
    "status": "verified",
    "questionKey": "2000-选择题-3",
    "primary": [
      "CAL-05-E"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "商函数单调性；令 $F\\left(x\\right)=\\dfrac{f\\left(x\\right)}{g\\left(x\\right)}$，则 $F^{\\prime}\\left(x\\right)<0$，故 $F\\left(x\\right)$ 单调递减。于是当 $a<x<b$ 时，$F\\left(x\\right)>F\\left(b\\right)$，即 $f\\left(x\\right)g\\left(b\\right)>f\\left(b\\right)g\\left(x\\right)$，选 A。",
    "methods": "利用商函数导数判断单调性；令 F=f/g，利用给定不等式得到 F'<0，再比较 F(x) 与 F(b)。",
    "pitfalls": "g>0 才能安全交叉相乘并保持不等号方向。"
  },
  "197": {
    "status": "verified",
    "questionKey": "2000-选择题-4",
    "primary": [
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "三阶展开反推函数；当 $x\\to 0$ 时，$\\sin 6x=6x-36x^{3}+o\\left(x^{3}\\right)$。由 $\\sin 6x+xf\\left(x\\right)=o\\left(x^{3}\\right)$，得 $x\\left(6+f\\left(x\\right)\\right)-36x^{3}=o\\left(x^{3}\\right)$，所以 $6+f\\left(x\\right)\\sim 36x^{2}$，选 C。",
    "methods": "泰勒展开与极限条件反推函数；展开 sin(6x) 到 x³ 项，将已知极限为零的条件整理出 f(x)。",
    "pitfalls": "注意 sin(6x) 的三次项系数为 −36。"
  },
  "198": {
    "status": "verified",
    "questionKey": "2000-选择题-5",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "特征根与重根；由 $e^{-x}$ 与 $xe^{-x}$ 可知 $r=-1$ 是二重根；由 $e^{x}$ 可知 $r=1$ 是单根。因此特征方程为 $\\left(r+1\\right)^{2}\\left(r-1\\right)=0$，即 $r^{3}+r^{2}-r-1=0$。故选 B。",
    "methods": "常系数线性齐次微分方程的特征根重数；由 e^(−x)、xe^(−x)、e^x 识别特征根 −1（二重）与 1（单重）。",
    "pitfalls": "xe^(−x) 表示 −1 是二重根；当前卡片以二阶常系数方程为主，此题为三阶推广。"
  },
  "199": {
    "status": "verified",
    "questionKey": "2001-填空题-1",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-01-G"
    ],
    "rationale": "根式极限有理化；分母 $x^{2}+x-2=\\left(x+2\\right)\\left(x-1\\right)$，分子有理化得\n\n$\\dfrac{\\sqrt{3-x}-\\sqrt{1+x}}{x^{2}+x-2}=\\dfrac{2\\left(1-x\\right)}{\\left(x+2\\right)\\left(x-1\\right)\\left(\\sqrt{3-x}+\\sqrt{1+x}\\right)}=-\\dfrac{2}{\\left(x+2\\right)\\left(\\sqrt{3-x}+\\sqrt{1+x}\\right)}$。\n\n故原极限为 $-\\dfrac{2}{3\\cdot 2\\sqrt{2}}=-\\dfrac{\\sqrt{2}}{6}$。",
    "methods": "根式极限的有理化；分子乘共轭，分母因式分解约去 x−1 后代入极限点。",
    "pitfalls": "根式有理化后要同步处理分母因式与符号。"
  },
  "200": {
    "status": "verified",
    "questionKey": "2001-填空题-2",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "两边对 $x$ 求导，得\n\n$e^{2x+y}\\left(2+y^{\\prime}\\right)+\\sin\\left(xy\\right)\\left(y+xy^{\\prime}\\right)=0$。\n\n代入 $x=0$，$y=1$，得 $y^{\\prime}\\left(0\\right)=-2$，故法线斜率为 $\\dfrac{1}{2}$。法线方程为 $y-1=\\dfrac{1}{2}x$，即 $x-2y+2=0$。",
    "methods": "隐函数求导与法线方程；对隐式方程两边求导，代入点坐标求切线斜率，再取负倒数得到法线斜率。",
    "pitfalls": "注意法线斜率是切线斜率的负倒数。"
  },
  "201": {
    "status": "verified",
    "questionKey": "2001-填空题-3",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-E"
    ],
    "rationale": "在对称区间上，$x^{3}\\cos^{2}x$ 为奇函数，积分为 $0$。于是\n\n$\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}\\left(x^{3}+\\sin^{2}x\\right)\\cos^{2}x\\mathrm{~d}x=2\\int_{0}^{\\frac{\\pi}{2}}\\sin^{2}x\\cos^{2}x\\mathrm{~d}x$。\n\n又 $2\\sin^{2}x\\cos^{2}x=\\dfrac{1}{4}\\left(1-\\cos 4x\\right)$，故结果为 $\\dfrac{\\pi}{8}$。",
    "methods": "对称区间积分的奇偶性；拆分被积函数，奇函数部分在对称区间积分为零，偶函数部分化为两倍半区间积分。",
    "pitfalls": "先判断整个乘积的奇偶性，再使用对称区间性质。"
  },
  "202": {
    "status": "verified",
    "questionKey": "2001-填空题-4",
    "primary": [
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "因为 $\\left(y\\arcsin x\\right)^{\\prime}=y^{\\prime}\\arcsin x+\\dfrac{y}{\\sqrt{1-x^{2}}}$，所以原方程为 $\\left(y\\arcsin x\\right)^{\\prime}=1$。积分得 $y\\arcsin x=x+C$，代入 $\\left(\\dfrac{1}{2},0\\right)$ 得 $C=-\\dfrac{1}{2}$。",
    "methods": "由导数关系反求函数；识别 y' arcsin x+y/√(1−x²) 为乘积 y·arcsin x 的导数，积分后代入初值。",
    "pitfalls": "乘积求导的第二项来自 (arcsin x)'。"
  },
  "203": {
    "status": "verified",
    "questionKey": "2001-填空题-5",
    "primary": [
      "LA-04-D"
    ],
    "secondary": [
      "LA-02-B"
    ],
    "rationale": "方程组有无穷多个解，需满足系数矩阵与增广矩阵秩相等且小于未知量个数 $3$。对增广矩阵初等行变换可得最后一行与 $a+2$ 同因子，故必须有 $a=-2$。",
    "methods": "线性方程组无穷多解的秩条件；对增广矩阵作初等行变换，使系数矩阵秩等于增广矩阵秩且小于未知量数。",
    "pitfalls": "无穷多解需要相容且秩小于未知量个数。"
  },
  "204": {
    "status": "verified",
    "questionKey": "2001-选择题-1",
    "primary": [
      "CAL-01-A"
    ],
    "secondary": [
      "CAL-01-B"
    ],
    "rationale": "任意 $x$ 下，$f\\left(x\\right)$ 只可能为 $0$ 或 $1$，且 $0\\le 1$、$1\\le 1$，所以 $f\\left[f\\left(x\\right)\\right]=1$，从而 $f\\left\\{f\\left[f\\left(x\\right)\\right]\\right\\}=f\\left(1\\right)=1$。",
    "methods": "分段函数复合与函数值域；逐层计算 f(x)，利用其取值只可能为 0 或 1，继续代入外层函数。",
    "pitfalls": "复合函数应从最内层向外逐层求值。"
  },
  "205": {
    "status": "verified",
    "questionKey": "2001-选择题-2",
    "primary": [
      "CAL-01-G"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "当 $x\\to 0$ 时，$\\left(1-\\cos x\\right)\\ln\\left(1+x^{2}\\right)\\sim \\dfrac{x^{4}}{2}$，$x^{n}\\sin x\\sim x^{n+1}$，$e^{x^{2}}-1\\sim x^{2}$。由题意得 $4>n+1$ 且 $n+1>2$，所以 $n=2$。",
    "methods": "无穷小阶的比较；分别用标准等价无穷小求三项主阶，再将两个高阶条件转化为指数不等式。",
    "pitfalls": "高阶无穷小要求商趋于零，注意严格不等号。"
  },
  "206": {
    "status": "verified",
    "questionKey": "2001-选择题-3",
    "primary": [
      "CAL-05-G"
    ],
    "secondary": [
      "CAL-05-C"
    ],
    "rationale": "由 $y^{\\prime}=4\\left(x-1\\right)\\left(x-2\\right)\\left(x-3\\right)$，得 $y^{\\prime\\prime}=4\\left(3x^{2}-12x+11\\right)$。方程 $y^{\\prime\\prime}=0$ 有两个不同实根，且二阶导数在两根处变号，故有两个拐点。",
    "methods": "二阶导数变号与拐点；求二阶导数并解 f''(x)=0，检查每个根两侧凹凸性是否改变。",
    "pitfalls": "二阶导数为零只是候选条件，必须验证变号。"
  },
  "207": {
    "status": "verified",
    "questionKey": "2001-选择题-4",
    "primary": [
      "CAL-05-E"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "令 $F\\left(x\\right)=f\\left(x\\right)-x$，则 $F^{\\prime}\\left(x\\right)=f^{\\prime}\\left(x\\right)-f^{\\prime}\\left(1\\right)$。因 $f^{\\prime}\\left(x\\right)$ 严格单调减少，故 $F\\left(x\\right)$ 在 $x=1$ 处取极大值。又 $F\\left(1\\right)=0$，所以两侧均有 $F\\left(x\\right)<0$，即 $f\\left(x\\right)<x$。",
    "methods": "导函数单调性与函数差值比较；构造 F(x)=f(x)−x，由 f' 严格递减判断 F 在 x=1 取极大值。",
    "pitfalls": "利用 F(1)=0 和严格单调性确定两侧符号。"
  },
  "208": {
    "status": "verified",
    "questionKey": "2001-选择题-5",
    "primary": [
      "CAL-05-E"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "由原图可知，$y$ 轴左侧及 $y$ 轴右侧靠近 $y$ 轴处，曲线 $y=f\\left(x\\right)$ 均单调增加，故对应区间内 $f^{\\prime}\\left(x\\right)>0$。结合选项可排除 A、B、C，故选 D。",
    "methods": "由函数图像识别导函数符号；根据原函数图像各区间的增减性判断导数正负，再匹配导函数图像。",
    "pitfalls": "图像题需逐区间识别单调性及驻点。"
  },
  "209": {
    "status": "verified",
    "questionKey": "2002-填空题-1",
    "primary": [
      "CAL-03-A"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "当 $x\\to 0^{+}$ 时，$1-e^{\\tan x}\\sim -x$，$\\arcsin\\dfrac{x}{2}\\sim \\dfrac{x}{2}$，故 $\\lim_{x\\to 0^{+}}f\\left(x\\right)=-2$。又 $f\\left(0\\right)=a$，由连续性得 $a=-2$。",
    "methods": "分段函数连续性与等价无穷小；分别求左右极限，使用 tan x∼x、arcsin(x/2)∼x/2，令左右极限与函数值相等。",
    "pitfalls": "连续性需同时满足左右极限相等且等于函数值。"
  },
  "210": {
    "status": "verified",
    "questionKey": "2002-填空题-2",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "所求面积为 $S=\\int_{0}^{+\\infty}x e^{-x}\\mathrm{~d}x$。分部积分得 $S=\\left[-x e^{-x}\\right]_{0}^{+\\infty}+\\int_{0}^{+\\infty}e^{-x}\\mathrm{~d}x=1$。",
    "methods": "无界区域面积与反常积分；将面积写成从 0 到无穷的反常积分，使用分部积分计算。",
    "pitfalls": "先确认函数非负，再检查无穷上限的收敛性。"
  },
  "211": {
    "status": "verified",
    "questionKey": "2002-填空题-3",
    "primary": [
      "CAL-07-A"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "因为 $yy^{\\prime\\prime}+\\left(y^{\\prime}\\right)^{2}=\\left(yy^{\\prime}\\right)^{\\prime}$，所以 $yy^{\\prime}=C$。由初始条件得 $C=\\dfrac{1}{2}$，即 $\\left(y^{2}\\right)^{\\prime}=1$。积分得 $y^{2}=x+1$，又 $y\\left(0\\right)=1$，故 $y=\\sqrt{x+1}$。",
    "methods": "微分方程化为全导数并利用初值；识别 yy''+(y')²=(yy')'，积分一次并继续积分，最后使用初值选定分支。",
    "pitfalls": "两次积分常数需由两个初始条件确定。"
  },
  "212": {
    "status": "verified",
    "questionKey": "2002-填空题-4",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-E"
    ],
    "rationale": "由定积分定义，\n\n$\\lim_{n\\to \\infty}\\dfrac{1}{n}\\sum_{i=1}^{n}\\sqrt{1+\\cos\\dfrac{i\\pi}{n}}=\\dfrac{1}{\\pi}\\int_{0}^{\\pi}\\sqrt{1+\\cos x}\\mathrm{~d}x$。\n\n又 $1+\\cos x=2\\cos^{2}\\dfrac{x}{2}$，所以原式等于 $\\dfrac{\\sqrt{2}}{\\pi}\\int_{0}^{\\pi}\\cos\\dfrac{x}{2}\\mathrm{~d}x=\\dfrac{2\\sqrt{2}}{\\pi}$。",
    "methods": "数列极限与定积分定义；将和式识别为区间 [0,π] 上的黎曼和，再利用三角恒等式计算积分。",
    "pitfalls": "黎曼和前的步长系数为 π/n，不能遗漏区间长度。"
  },
  "213": {
    "status": "verified",
    "questionKey": "2002-填空题-5",
    "primary": [
      "LA-05-A"
    ],
    "secondary": [
      "LA-05-D"
    ],
    "rationale": "记该矩阵为 $\\boldsymbol{A}$。计算得 $\\left|\\lambda\\boldsymbol{E}-\\boldsymbol{A}\\right|=\\lambda^{2}\\left(\\lambda-4\\right)$，所以特征值为 $0,0,4$，非零特征值为 $4$。",
    "methods": "矩阵特征值与特征多项式；计算 det(λE−A)，由特征多项式的根确定特征值。",
    "pitfalls": "题目只问非零特征值，注意重根零值不需重复作答。"
  },
  "214": {
    "status": "verified",
    "questionKey": "2002-选择题-1",
    "primary": [
      "CAL-04-B"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "由 $y=f\\left(x^{2}\\right)$，得 $y^{\\prime}=2x f^{\\prime}\\left(x^{2}\\right)$。线性主部为 $y^{\\prime}\\left(-1\\right)\\Delta x=0.2f^{\\prime}\\left(1\\right)$，由题意 $0.2f^{\\prime}\\left(1\\right)=0.1$，故 $f^{\\prime}\\left(1\\right)=0.5$，选 D。",
    "methods": "复合函数导数与微分线性主部；对 y=f(x²) 求导，利用 Δy 的线性主部 y'Δx 建立方程。",
    "pitfalls": "线性主部使用导数乘自变量增量，注意 Δx 的负号。"
  },
  "215": {
    "status": "verified",
    "questionKey": "2002-选择题-2",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-E"
    ],
    "rationale": "设 $F\\left(x\\right)=\\int_{0}^{x}t\\left[f\\left(t\\right)+f\\left(-t\\right)\\right]\\mathrm{~d}t$。令 $t=-u$，可得 $F\\left(-x\\right)=F\\left(x\\right)$，故 D 为偶函数。",
    "methods": "积分定义函数的奇偶性；逐项判断选项，利用 x² 的偶性或变量替换验证积分函数的奇偶性。",
    "pitfalls": "积分上限为 x 时，不能仅凭被积函数奇偶性直接判断。"
  },
  "216": {
    "status": "verified",
    "questionKey": "2002-选择题-3",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "由方程和初始条件得 $y^{\\prime\\prime}\\left(0\\right)=1$。因此 $y\\left(x\\right)=\\dfrac{1}{2}x^{2}+o\\left(x^{2}\\right)$，而 $\\ln\\left(1+x^{2}\\right)\\sim x^{2}$，故极限为 $2$，选 C。",
    "methods": "微分方程初值与局部泰勒展开；由微分方程和初值求 y''(0)，得到 y(x) 的二阶主项，再与 ln(1+x²) 比较。",
    "pitfalls": "分子分母都为二阶无穷小时需比较二阶系数。"
  },
  "217": {
    "status": "verified",
    "questionKey": "2002-选择题-4",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-05-E"
    ],
    "rationale": "设 $\\lim_{x\\to +\\infty}f^{\\prime}\\left(x\\right)=A$。若 $A>0$ 或 $A<0$，由拉格朗日中值定理均可推出 $f\\left(x\\right)$ 无界，与题设矛盾。因此 $A=0$，选 B。",
    "methods": "导数极限与有界函数性质；设导数极限为 A，若 A 非零则由中值定理推出函数无界，与条件矛盾。",
    "pitfalls": "函数有界是关键条件，不能仅凭函数本身收敛推断导数收敛。"
  },
  "218": {
    "status": "verified",
    "questionKey": "2002-选择题-5",
    "primary": [
      "LA-03-B"
    ],
    "secondary": [
      "LA-03-A"
    ],
    "rationale": "若 A 中向量组线性相关，则 $k\\boldsymbol{\\beta}_{1}+\\boldsymbol{\\beta}_{2}$ 可由 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3}$ 线性表示。又 $\\boldsymbol{\\beta}_{1}$ 可由它们线性表示，从而 $\\boldsymbol{\\beta}_{2}$ 也可由它们线性表示，矛盾。故选 A。",
    "methods": "向量组线性表示与线性相关性；反设扩充向量组相关，推出 β₂ 可由原向量组表示，与题设矛盾。",
    "pitfalls": "把 β₁ 的可表示性与 β₂ 的不可表示性结合使用。"
  },
  "219": {
    "status": "verified",
    "questionKey": "2003-填空题-1",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-01-G"
    ],
    "rationale": "当 $x \\to 0$ 时，$\\left(1+u\\right)^{\\alpha}-1\\sim \\alpha u$，$\\sin x\\sim x$，故 $\\left(1-a x^{2}\\right)^{\\frac{1}{4}}-1\\sim -\\dfrac{a}{4}x^{2}$，$x\\sin x\\sim x^{2}$。由等价无穷小得 $-\\dfrac{a}{4}=1$，所以 $a=-4$。",
    "methods": "等价无穷小确定参数；展开 (1−ax²)^(1/4)−1 与 x sin x 的首项，比较系数求 a。",
    "pitfalls": "等价无穷小要求主项系数也相同。"
  },
  "220": {
    "status": "verified",
    "questionKey": "2003-填空题-2",
    "primary": [
      "CAL-04-D"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "对 $xy+2\\ln x=y^{4}$ 两边求导，得 $y+xy^{\\prime}+\\dfrac{2}{x}=4y^{3}y^{\\prime}$。代入 $x=1$，$y=1$，得 $y^{\\prime}=1$，故切线方程为 $y-1=x-1$，即 $x-y=0$。",
    "methods": "隐函数切线斜率；对隐式方程求导，代入指定点求 y'，写出点斜式切线方程。",
    "pitfalls": "幂函数 y⁴ 求导时包含 4y³y'。"
  },
  "221": {
    "status": "verified",
    "questionKey": "2003-填空题-3",
    "primary": [
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "因为 $y^{\\left(n\\right)}=2^{x}\\left(\\ln 2\\right)^{n}$，所以 $y^{\\left(n\\right)}\\left(0\\right)=\\left(\\ln 2\\right)^{n}$。故麦克劳林公式中 $x^{n}$ 项的系数为 $\\dfrac{y^{\\left(n\\right)}\\left(0\\right)}{n!}=\\dfrac{\\left(\\ln 2\\right)^{n}}{n!}$。",
    "methods": "指数函数麦克劳林展开系数；求 n 阶导数并在 x=0 处取值，再除以 n! 得到幂级数系数。",
    "pitfalls": "麦克劳林 x^n 项系数是 f^(n)(0)/n!。"
  },
  "222": {
    "status": "verified",
    "questionKey": "2003-填空题-4",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-08-F"
    ],
    "rationale": "极坐标面积公式为 $S=\\dfrac{1}{2}\\int_{\\alpha}^{\\beta}\\rho^{2}\\left(\\theta\\right)\\mathrm{~d}\\theta$，故 $S=\\dfrac{1}{2}\\int_{0}^{2\\pi}e^{2a\\theta}\\mathrm{~d}\\theta=\\dfrac{e^{4a\\pi}-1}{4a}$。",
    "methods": "极坐标曲线围成面积；使用极坐标面积公式 S=1/2∫ρ²dθ，代入指数形式积分。",
    "pitfalls": "面积公式中的 1/2 不可遗漏，积分区间为 0 到 2π。"
  },
  "223": {
    "status": "verified",
    "questionKey": "2003-填空题-5",
    "primary": [
      "LA-02-A"
    ],
    "secondary": [
      "LA-05-A"
    ],
    "rationale": "由 $\\boldsymbol{\\alpha}\\boldsymbol{\\alpha}^{T}=\\begin{bmatrix}1\\\\-1\\\\1\\end{bmatrix}\\begin{bmatrix}1 & -1 & 1\\end{bmatrix}$，可取 $\\boldsymbol{\\alpha}=\\begin{bmatrix}1\\\\-1\\\\1\\end{bmatrix}$。于是 $\\boldsymbol{\\alpha}^{T}\\boldsymbol{\\alpha}=1^{2}+\\left(-1\\right)^{2}+1^{2}=3$。",
    "methods": "向量外积矩阵与内积；从 ααᵀ 的秩一分解识别向量分量，再计算 αᵀα 的平方范数。",
    "pitfalls": "ααᵀ确定向量至多差整体符号，但内积不受整体符号影响。"
  },
  "224": {
    "status": "verified",
    "questionKey": "2003-填空题-6",
    "primary": [
      "LA-02-A"
    ],
    "secondary": [
      "LA-02-C"
    ],
    "rationale": "由 $\\boldsymbol{A}^{2}\\boldsymbol{B}-\\boldsymbol{A}-\\boldsymbol{B}=\\boldsymbol{E}$，得 $\\left(\\boldsymbol{A}^{2}-\\boldsymbol{E}\\right)\\boldsymbol{B}=\\boldsymbol{A}+\\boldsymbol{E}$，即 $\\left(\\boldsymbol{A}-\\boldsymbol{E}\\right)\\left(\\boldsymbol{A}+\\boldsymbol{E}\\right)\\boldsymbol{B}=\\boldsymbol{A}+\\boldsymbol{E}$。因 $\\boldsymbol{A}+\\boldsymbol{E}$ 可逆，故 $\\left(\\boldsymbol{A}-\\boldsymbol{E}\\right)\\boldsymbol{B}=\\boldsymbol{E}$。又 $\\left|\\boldsymbol{A}-\\boldsymbol{E}\\right|=2$，所以 $\\left|\\boldsymbol{B}\\right|=\\dfrac{1}{2}$。",
    "methods": "矩阵方程变形与行列式计算；提取 (A²−E)B=A+E，因式分解并利用可逆性化简，再取行列式。",
    "pitfalls": "矩阵乘法不可交换；约去矩阵因子需说明其可逆。"
  },
  "225": {
    "status": "verified",
    "questionKey": "2003-选择题-1",
    "primary": [
      "CAL-01-G"
    ],
    "secondary": [
      "CAL-02-A"
    ],
    "rationale": "若 $\\lim_{n \\to \\infty}b_{n}c_{n}=A$ 存在，则 $\\lim_{n \\to \\infty}c_{n}=\\lim_{n \\to \\infty}\\dfrac{b_{n}c_{n}}{b_{n}}=A$，与 $\\lim_{n \\to \\infty}c_{n}=\\infty$ 矛盾，故选 D。",
    "methods": "数列极限与无穷大因子矛盾；利用 b_n→1 将 b_nc_n 的假设极限反推 c_n 的极限，产生矛盾。",
    "pitfalls": "极限乘积的逆推需要分母 b_n 最终非零。"
  },
  "226": {
    "status": "verified",
    "questionKey": "2003-选择题-2",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "令 $u=1+x^{n}$，则 $\\mathrm{~d}u=nx^{n-1}\\mathrm{~d}x$，故 $a_{n}=\\dfrac{1}{n}\\left[\\left(1+\\left(\\dfrac{n}{n+1}\\right)^{n}\\right)^{\\frac{3}{2}}-1\\right]$。因此 $\\lim_{n \\to \\infty}n a_{n}=\\left(1+e^{-1}\\right)^{\\frac{3}{2}}-1$，选 B。",
    "methods": "含参数积分的换元与极限；令 u=1+x^n，将积分直接化为端点函数差，再求 n 次幂极限。",
    "pitfalls": "换元时 du=n x^(n−1)dx，注意外部系数。"
  },
  "227": {
    "status": "verified",
    "questionKey": "2003-选择题-3",
    "primary": [
      "CAL-07-D"
    ],
    "secondary": [
      "CAL-07-B"
    ],
    "rationale": "由 $y=\\dfrac{x}{\\ln x}$，得 $y^{\\prime}=\\dfrac{\\ln x-1}{\\left(\\ln x\\right)^{2}}$，且 $\\dfrac{y}{x}=\\dfrac{1}{\\ln x}$，$\\dfrac{x}{y}=\\ln x$。代入方程得 $\\varphi\\left(\\ln x\\right)=-\\dfrac{1}{\\left(\\ln x\\right)^{2}}$，故 $\\varphi\\left(\\dfrac{x}{y}\\right)=-\\dfrac{y^{2}}{x^{2}}$，选 A。",
    "methods": "由微分方程特解反求未知函数；将已知 y 及 y' 代入方程，整理出 φ(x/y) 并转换成 y²/x²。",
    "pitfalls": "注意 x/y 与 y/x 的倒数关系。"
  },
  "228": {
    "status": "verified",
    "questionKey": "2003-选择题-4",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-05-E"
    ],
    "rationale": "由导函数图形可知，三个驻点中第一个为极大值点，第二个和第三个为极小值点；导数不存在点 $x=0$ 左侧导数为正、右侧导数为负，故也是极大值点。因此共有两个极小值点和两个极大值点，选 C。",
    "methods": "由导函数图像判断极值点；根据导函数过零点及不可导点两侧符号变化，统计极大值和极小值。",
    "pitfalls": "不可导点也可能是极值点，需检查左右单调性。"
  },
  "229": {
    "status": "verified",
    "questionKey": "2003-选择题-5",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-E"
    ],
    "rationale": "在 $\\left(0,\\dfrac{\\pi}{4}\\right)$ 内，$\\tan x>x$，所以 $I_{1}>I_{2}$。又 $\\dfrac{\\tan x}{x}<\\sec^{2}x$，故 $I_{1}<\\int_{0}^{\\frac{\\pi}{4}}\\sec^{2}x\\mathrm{~d}x=1$。因此 $1>I_{1}>I_{2}$，选 B。",
    "methods": "定积分大小比较与函数不等式；利用区间内 x<tan x 及 tan x/x<sec²x，建立两个积分的大小界。",
    "pitfalls": "积分不等式需在整个积分区间成立。"
  },
  "230": {
    "status": "verified",
    "questionKey": "2003-选择题-6",
    "primary": [
      "LA-03-B"
    ],
    "secondary": [
      "LA-03-C"
    ],
    "rationale": "若向量组 I 可由向量组 II 线性表示，且 $r>s$，则向量组 I 必线性相关，故选 D。",
    "methods": "向量组线性表示与秩的关系；若 r>s，r 个向量由 s 个向量线性表示，则原向量组必线性相关。",
    "pitfalls": "区分被表示的向量组与用于表示的向量组。"
  },
  "231": {
    "status": "verified",
    "questionKey": "2004-填空题-1",
    "primary": [
      "CAL-02-A"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "当 $x=0$ 时，$f(0)=0$；当 $x\\ne0$ 时，$f(x)=x$。故 $\\lim_{x\\to0}f(x)=f(0)$，函数在 $x=0$ 连续。\n\n> **注：** 若原答案写作 $x=0$，则题干分式可能存在排版差异；此处按当前题干公式计算。",
    "methods": "函数极限与参数型数列极限；先对 n→∞ 求点态极限，分别讨论 x=0 与 x≠0，再检查拼接点连续性。",
    "pitfalls": "必须先确定极限函数的定义域和值，不能只代入特殊点。"
  },
  "232": {
    "status": "verified",
    "questionKey": "2004-填空题-2",
    "primary": [
      "CAL-05-C"
    ],
    "secondary": [
      "CAL-04-E"
    ],
    "rationale": "由\n$$\n\\dfrac{dy}{dx}=\\dfrac{t^{2}-1}{t^{2}+1},\\qquad\n\\dfrac{d^{2}y}{dx^{2}}=\\dfrac{4t}{3(t^{2}+1)^{3}}\n$$\n知向上凸时 $t<0$。又 $x=t^{3}+3t+1$ 单调递增，且 $t=0$ 时 $x=1$，故 $x<1$。",
    "methods": "参数方程二阶导数与凹凸性；先求 dy/dx，再用 (d/dt)(dy/dx)/(dx/dt) 求二阶导，判断符号并转换 t 到 x。",
    "pitfalls": "二阶导数的参数公式分母还需乘 dx/dt。"
  },
  "233": {
    "status": "verified",
    "questionKey": "2004-填空题-3",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "令 $x=\\sec t$，则 $dx=\\sec t\\tan t\\,dt$，且 $x:1\\to+\\infty$ 对应 $t:0\\to\\dfrac{\\pi}{2}$。原积分化为\n$$\n\\int_{0}^{\\pi/2}dt=\\frac{\\pi}{2}.\n$$",
    "methods": "反常积分的三角换元；令 x=sec t，将根式和积分上下限一并转换，化为常数积分。",
    "pitfalls": "无穷上限对应 t→π/2，按反常积分处理。"
  },
  "234": {
    "status": "verified",
    "questionKey": "2004-填空题-4",
    "primary": [
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "对方程分别求 $x,y$ 的偏导，解出 $z_x,z_y$ 后代入所求式，结合 $e^{2x-3z}=z-y^{2}$ 化简，得结果为 $2$。",
    "methods": "隐函数确定的二元函数偏导数；对隐式方程分别求 x、y 偏导，联立化简所求线性组合。",
    "pitfalls": "链式法则中的 z_x、z_y 项需移到同一侧。"
  },
  "235": {
    "status": "verified",
    "questionKey": "2004-填空题-5",
    "primary": [
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-07-A"
    ],
    "rationale": "原方程化为\n$$\ny'-\\frac{1}{2x}y=\\frac{1}{2}x^{2}.\n$$\n其通解为\n$$\ny=C\\sqrt{x}+\\frac{1}{5}x^{3}.\n$$\n由 $y(1)=\\dfrac65$ 得 $C=1$，故特解如上。",
    "methods": "一阶线性微分方程与初值；整理成 y'−(1/2x)y=x²/2，使用积分因子求通解并代入初值。",
    "pitfalls": "积分因子为 x^(−1/2)，注意定义区间与平方根分支。"
  },
  "236": {
    "status": "verified",
    "questionKey": "2004-填空题-6",
    "primary": [
      "LA-02-D"
    ],
    "secondary": [
      "LA-02-A"
    ],
    "rationale": "由题得\n$$\n(\\boldsymbol{A}-2\\boldsymbol{E})\\boldsymbol{B}\\boldsymbol{A}^{*}=\\boldsymbol{E}.\n$$\n取行列式：\n$$\n|\\boldsymbol{A}-2\\boldsymbol{E}|\\,|\\boldsymbol{B}|\\,|\\boldsymbol{A}^{*}|=1.\n$$\n又 $|\\boldsymbol{A}|=3,\\ |\\boldsymbol{A}^{*}|=9,\\ |\\boldsymbol{A}-2\\boldsymbol{E}|=1$，故 $|\\boldsymbol{B}|=\\dfrac19$。",
    "methods": "伴随矩阵与行列式乘法性质；对矩阵方程两边取行列式，使用 |A*|=|A|^(n−1) 求 |B|。",
    "pitfalls": "三阶矩阵的伴随行列式是 |A|²，不是 |A|。"
  },
  "237": {
    "status": "verified",
    "questionKey": "2004-选择题-7",
    "primary": [
      "CAL-01-G"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "当 $x\\to0^{+}$ 时，\n$$\n\\alpha\\sim x,\\qquad\n\\beta\\sim\\frac23x^{3},\\qquad\n\\gamma\\sim\\frac14x^{2}.\n$$\n故阶数依次为 $x,x^{2},x^{3}$，排列为 $\\alpha,\\gamma,\\beta$。",
    "methods": "积分型无穷小的主阶比较；用被积函数在零点的等价无穷小估计三个积分的主阶，再比较阶数。",
    "pitfalls": "变上限积分的主阶需同时考虑被积函数阶数和积分上限阶数。"
  },
  "238": {
    "status": "verified",
    "questionKey": "2004-选择题-8",
    "primary": [
      "CAL-05-G"
    ],
    "secondary": [
      "CAL-05-F"
    ],
    "rationale": "按分段函数讨论，$x=0$ 附近函数由减到增，故为极小值点；曲线在 $(0,0)$ 两侧凹凸性改变，故 $(0,0)$ 为拐点。",
    "methods": "绝对值分段函数的极值与拐点；按 x=1 分段写函数，检查 x=0 的左右单调性及二阶导数符号变化。",
    "pitfalls": "极值与拐点是不同概念，需分别验证。"
  },
  "239": {
    "status": "verified",
    "questionKey": "2004-选择题-9",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-E"
    ],
    "rationale": "原式为\n$$\n\\lim_{n\\to\\infty}\\frac1n\\sum_{i=1}^{n}2\\ln\\left(1+\\frac{i}{n}\\right)\n=\\int_{0}^{1}2\\ln(1+x)\\,dx\n=\\int_{1}^{2}2\\ln u\\,du.\n$$\n故选 B。",
    "methods": "乘积连乘极限转化为黎曼和；对 n 次根式取对数，将乘积转化为对数和，再识别黎曼和。",
    "pitfalls": "对数后需保留平方产生的系数 2，并正确平移积分区间。"
  },
  "240": {
    "status": "verified",
    "questionKey": "2004-选择题-10",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-05-E"
    ],
    "rationale": "由\n$$\nf'(0)=\\lim_{x\\to0}\\frac{f(x)-f(0)}{x}>0\n$$\n及极限保号性，知当 $0<x<\\delta$ 时 $\\dfrac{f(x)-f(0)}{x}>0$，从而 $f(x)>f(0)$。",
    "methods": "导数定义的局部保号性；由 f′(0)>0 及导数定义，取足够小邻域使差商为正，推出右侧 f(x)>f(0)。",
    "pitfalls": "导数在一点为正不代表整个邻域导数都为正，不能推出单调性。"
  },
  "241": {
    "status": "verified",
    "questionKey": "2004-选择题-11",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "对 $x^{2}+1$ 设特解 $ax^{2}+bx+c$；因 $\\sin x$ 与齐次方程特征根 $\\pm i$ 对应，需乘以 $x$，设为 $x(A\\sin x+B\\cos x)$。故选 A。",
    "methods": "二阶常系数非齐次方程待定系数法；多项式右端设同次数多项式特解；正弦项与齐次解共振，需乘 x。",
    "pitfalls": "先检查特征根是否与右端频率共振，再决定是否乘 x。"
  },
  "242": {
    "status": "verified",
    "questionKey": "2004-选择题-12",
    "primary": [
      "CAL-08-F"
    ],
    "secondary": [
      "CAL-08-E"
    ],
    "rationale": "区域为圆 $x^{2}+(y-1)^{2}\\le1$。极坐标下\n$$\n0\\le\\theta\\le\\pi,\\qquad 0\\le r\\le2\\sin\\theta,\n$$\n且 $xy=r^{2}\\sin\\theta\\cos\\theta$，面积元为 $r\\,dr\\,d\\theta$。故选 D。",
    "methods": "二重积分区域的极坐标表示；将圆域化为 0≤θ≤π、0≤r≤2sinθ，并把 xy 与面积元 r dr dθ 一并转换。",
    "pitfalls": "极坐标积分必须包含雅可比因子 r。"
  },
  "243": {
    "status": "verified",
    "questionKey": "2004-选择题-13",
    "primary": [
      "LA-02-A"
    ],
    "secondary": [
      "LA-02-B"
    ],
    "rationale": "列变换对应右乘初等矩阵。先交换第 1、2 列，再将第 2 列加到第 3 列，故\n$$\n\\boldsymbol{Q}\n=\n\\begin{pmatrix}0&1&0\\\\1&0&0\\\\0&0&1\\end{pmatrix}\n\\begin{pmatrix}1&0&0\\\\0&1&1\\\\0&0&1\\end{pmatrix}\n=\n\\begin{pmatrix}0&1&1\\\\1&0&0\\\\0&0&1\\end{pmatrix}.\n$$",
    "methods": "列变换对应右乘初等矩阵；将列交换与列倍加分别写成右乘初等矩阵，按变换先后顺序相乘。",
    "pitfalls": "列变换是右乘；矩阵乘积次序不能颠倒。"
  },
  "244": {
    "status": "verified",
    "questionKey": "2004-选择题-14",
    "primary": [
      "LA-03-B"
    ],
    "secondary": [
      "LA-02-E"
    ],
    "rationale": "设 $\\boldsymbol{A}$ 为 $m\\times n$ 矩阵，$\\boldsymbol{B}$ 为 $n\\times s$ 矩阵。由 $\\boldsymbol{A}\\boldsymbol{B}=0$ 得\n$$\n\\operatorname{rank}(\\boldsymbol{A})+\\operatorname{rank}(\\boldsymbol{B})\\le n.\n$$\n因二者非零，故 $\\operatorname{rank}(\\boldsymbol{A})<n,\\ \\operatorname{rank}(\\boldsymbol{B})<n$，即 $\\boldsymbol{A}$ 的列向量组、$\\boldsymbol{B}$ 的行向量组线性相关。",
    "methods": "零矩阵乘积与秩不等式；由 AB=0 得 Im(B)⊂Ker(A)，结合秩—零度定理推出 A 列向量组及 B 行向量组相关。",
    "pitfalls": "区分 A 的列向量与 B 的行向量，不能误判成两者列向量均相关。"
  },
  "245": {
    "status": "verified",
    "questionKey": "2004-解答题-15",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-01-H"
    ],
    "rationale": "令\n$$\nu=x\\ln\\frac{1+2\\cos x}{3}.\n$$\n则原式等于\n$$\n\\lim_{x\\to0}\\frac{e^{u}-1}{u}\\cdot\n\\lim_{x\\to0}\\frac{u}{x^{3}}.\n$$\n又\n$$\n\\ln\\frac{1+2\\cos x}{3}\n=\\ln\\left(1+\\frac{2(\\cos x-1)}{3}\\right)\n\\sim -\\frac{x^{2}}{3},\n$$\n故原极限为 $-\\dfrac13$。\n\n> **注：** 若原解析答案为 $-\\dfrac16$，则题式可能存在排版差异；此处按当前题干公式计算。",
    "methods": "对数等价无穷小与复合极限；令 u=x ln((1+2cosx)/3)，利用 (e^u−1)/u→1 及 ln(1+v)∼v。",
    "pitfalls": "先求括号内对数的二阶主项，再乘外层 x。"
  },
  "246": {
    "status": "verified",
    "questionKey": "2004-解答题-16",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-05-E"
    ],
    "rationale": "（Ⅰ）当 $-2\\le x\\le0$ 时，\n$$\nf(x)=kf(x+2)=k(x+2)\\big[(x+2)^2-4\\big]=kx(x+2)(x+4).\n$$\n\n（Ⅱ）右导数\n$$\nf'_+(0)=\\big[x(x^{2}-4)\\big]'_{x=0}=-4,\n$$\n左导数\n$$\nf'_-(0)=\\big[kx(x+2)(x+4)\\big]'_{x=0}=8k.\n$$\n可导需 $8k=-4$，故 $k=-\\dfrac12$。",
    "methods": "函数平移关系与左右导数；由 f(x)=k f(x+2) 求出左侧表达式，分别计算 x=0 左右导数并令其相等。",
    "pitfalls": "分段点可导要求函数连续且左右导数相等；本题先用关系式确定左段。"
  },
  "247": {
    "status": "verified",
    "questionKey": "2004-解答题-17",
    "primary": [
      "CAL-06-F"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "（Ⅰ）令 $t=u+\\pi$，有\n$$\nf(x+\\pi)=\\int_{x}^{x+\\pi/2}|\\sin(u+\\pi)|\\,du=f(x),\n$$\n故 $f(x)$ 以 $\\pi$ 为周期。\n\n（Ⅱ）只需考察 $[0,\\pi]$。由\n$$\nf'(x)=\\left|\\cos x\\right|-\\left|\\sin x\\right|,\n$$\n得驻点 $x=\\dfrac\\pi4,\\dfrac{3\\pi}4$。计算\n$$\nf(0)=f(\\pi)=1,\\quad\nf\\left(\\frac\\pi4\\right)=\\sqrt2,\\quad\nf\\left(\\frac{3\\pi}4\\right)=2-\\sqrt2.\n$$\n故值域为\n$$\n[\\,2-\\sqrt2,\\ \\sqrt2\\,].\n$$",
    "methods": "变上限积分函数的周期性与值域；利用 |sin(t+π)|=|sin t| 证明周期性，再在一个周期内求导并比较端点与驻点值。",
    "pitfalls": "周期性只需考察一个周期；求值域需包含端点和全部驻点。"
  },
  "248": {
    "status": "verified",
    "questionKey": "2004-解答题-18",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "（Ⅰ）有\n$$\nV(t)=\\pi\\int_0^t y^2\\,dx,\\qquad\nS(t)=2\\pi\\int_0^t y\\sqrt{1+(y')^2}\\,dx.\n$$\n因 $y=\\dfrac{e^x+e^{-x}}2,\\ y'=\\dfrac{e^x-e^{-x}}2$，所以 $\\sqrt{1+(y')^2}=y$。故\n$$\nS(t)=2V(t),\\qquad \\frac{S(t)}{V(t)}=2.\n$$\n\n（Ⅱ）$F(t)=\\pi y^2(t)$，因此\n$$\n\\frac{S(t)}{F(t)}\n=\\frac{2\\int_0^t y^2\\,dx}{y^2(t)}.\n$$\n用洛必达法则得\n$$\n\\lim_{t\\to+\\infty}\\frac{S(t)}{F(t)}=1.\n$$",
    "methods": "旋转曲面侧面积与旋转体体积；使用旋转侧面积公式 2π∫y√(1+y′²)dx 与体积公式 π∫y²dx，利用双曲余弦恒等式化简。",
    "pitfalls": "侧面积公式包含弧长因子，不能误用为圆柱侧面积。"
  },
  "249": {
    "status": "verified",
    "questionKey": "2004-解答题-19",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-05-E"
    ],
    "rationale": "题干区间 $e^{2}<a<b<e$ 为空，按原解析应为 $e<a<b<e^{2}$。令\n$$\n\\varphi(x)=\\ln^{2}x-\\frac{4}{e^{2}}x.\n$$\n则\n$$\n\\varphi'(x)=\\frac{2\\ln x}{x}-\\frac{4}{e^{2}},\\qquad\n\\varphi''(x)=\\frac{2(1-\\ln x)}{x^{2}}.\n$$\n在 $e<x<e^{2}$ 上，$\\varphi''(x)<0$，故 $\\varphi'(x)$ 递减；又 $\\varphi'(e^{2})=0$，所以 $\\varphi'(x)>0$。因此 $\\varphi$ 单调递增，若 $e<a<b<e^{2}$，则\n$$\n\\varphi(b)>\\varphi(a),\n$$\n即\n$$\n\\ln^{2}b-\\ln^{2}a>\\frac{4}{e^{2}}(b-a).\n$$",
    "methods": "构造辅助函数证明函数不等式；令 φ(x)=ln²x−4x/e²，分析 φ′、φ″ 的符号并用单调性比较端点。",
    "pitfalls": "先核对区间端点顺序；题库原文区间 e²<a<b<e 自相矛盾，应标记源数据勘误。"
  },
  "250": {
    "status": "verified",
    "questionKey": "2004-解答题-20",
    "primary": [
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-07-A"
    ],
    "rationale": "设速度为 $v$，滑行距离为 $x$。由牛顿第二定律\n$$\nm\\frac{dv}{dt}=-kv.\n$$\n又\n$$\n\\frac{dv}{dt}=v\\frac{dv}{dx},\n$$\n故\n$$\nm v\\frac{dv}{dx}=-kv,\\qquad\n\\frac{dv}{dx}=-\\frac{k}{m}.\n$$\n积分得\n$$\nx=\\frac{m}{k}(v_0-v).\n$$\n当 $v=0$ 时，\n$$\nx_{\\max}=\\frac{mv_0}{k}\n=\\frac{9000\\times700}{6.0\\times10^6}\n=1.05\\ \\mathrm{km}.\n$$",
    "methods": "一阶线性微分方程的积分因子；整理成 y′+2y/x=lnx，取积分因子 x²，积分并代入初值。",
    "pitfalls": "积分因子乘完整方程；定义域为 x>0。"
  },
  "251": {
    "status": "verified",
    "questionKey": "2004-解答题-21",
    "primary": [
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "令\n$$\nu=x^{2}-y^{2},\\qquad v=e^{xy}.\n$$\n则\n$$\n\\frac{\\partial z}{\\partial x}=2xf'_1+ye^{xy}f'_2,\n\\qquad\n\\frac{\\partial z}{\\partial y}=-2yf'_1+xe^{xy}f'_2.\n$$\n其中 $f'_1,f'_2$ 均在 $(x^{2}-y^{2},e^{xy})$ 处取值。继续对 $z_y$ 关于 $x$ 求偏导，得\n$$\n\\frac{\\partial^{2}z}{\\partial x\\partial y}\n=-4xyf''_{11}\n+2(x^{2}-y^{2})e^{xy}f''_{12}\n+xye^{2xy}f''_{22}\n+(1+xy)e^{xy}f'_2.\n$$",
    "methods": "二元复合函数的二阶混合偏导；设 u=x²−y²、v=e^(xy)，先用多元链式法则求一阶偏导，再对 y 偏导关于 x 求导。",
    "pitfalls": "混合二阶偏导含 f11、f12、f22 及 v 的二阶导项，注意乘积法则。"
  },
  "252": {
    "status": "verified",
    "questionKey": "2004-解答题-22",
    "primary": [
      "LA-04-B"
    ],
    "secondary": [
      "LA-04-A"
    ],
    "rationale": "由原解析结论，方程组有非零解当且仅当\n$$\na=0\\quad\\text{或}\\quad a=-10.\n$$\n\n#### 情形一：$a=0$\n\n方程组化为\n$$\nx_{1}+x_{2}+x_{3}+x_{4}=0.\n$$\n取 $x_2,x_3,x_4$ 为自由变量，通解为\n$$\n\\boldsymbol{x}\n=C_{1}\\begin{pmatrix}-1\\\\1\\\\0\\\\0\\end{pmatrix}\n+C_{2}\\begin{pmatrix}-1\\\\0\\\\1\\\\0\\end{pmatrix}\n+C_{3}\\begin{pmatrix}-1\\\\0\\\\0\\\\1\\end{pmatrix},\n$$\n其中 $C_1,C_2,C_3$ 为任意常数。\n\n#### 情形二：$a=-10$\n\n同解方程组为\n$$\n2x_1-x_2=0,\\qquad 3x_1-x_3=0,\\qquad 4x_1-x_4=0.\n$$\n故通解为\n$$\n\\boldsymbol{x}=C\\begin{pmatrix}1\\\\2\\\\3\\\\4\\end{pmatrix},\n$$\n其中 $C$ 为任意常数。",
    "methods": "齐次线性方程组非零解与行列式；非零解存在等价于系数矩阵行列式为零；对参数分情形求基础解系。",
    "pitfalls": "参数使秩下降时自由变量个数改变，通解维数也随之改变。"
  },
  "253": {
    "status": "verified",
    "questionKey": "2004-解答题-23",
    "primary": [
      "LA-05-B"
    ],
    "secondary": [
      "LA-05-A"
    ],
    "rationale": "特征多项式为\n$$\n|\\lambda\\boldsymbol{E}-\\boldsymbol{A}|\n=(\\lambda-2)(\\lambda^{2}-8\\lambda+18+3a).\n$$\n\n#### 情形一：$\\lambda=2$ 是二重根\n\n令\n$$\n2^{2}-8\\cdot2+18+3a=0,\n$$\n得 $a=-2$。此时特征值为 $2,2,6$，且\n$$\n\\operatorname{rank}(2\\boldsymbol{E}-\\boldsymbol{A})=1.\n$$\n故 $\\lambda=2$ 有 $2$ 个线性无关特征向量，$\\boldsymbol{A}$ 可相似对角化。\n\n#### 情形二：二次因子有二重根\n\n由\n$$\n\\lambda^{2}-8\\lambda+18+3a=(\\lambda-4)^{2}\n$$\n得 $a=-\\dfrac23$。此时特征值为 $2,4,4$，且\n$$\n\\operatorname{rank}(4\\boldsymbol{E}-\\boldsymbol{A})=2.\n$$\n故 $\\lambda=4$ 只有 $1$ 个线性无关特征向量，$\\boldsymbol{A}$ 不可相似对角化。\n\n综上：\n\n- $a=-2$ 时，$\\boldsymbol{A}$ 可相似对角化；\n- $a=-\\dfrac23$ 时，$\\boldsymbol{A}$ 不可相似对角化。",
    "methods": "重特征值与相似对角化判定；先因式分解特征多项式求参数，再比较重特征值的代数重数与特征子空间维数。",
    "pitfalls": "重根不自动意味着可对角化，必须核验几何重数。"
  },
  "254": {
    "status": "verified",
    "questionKey": "2005-填空题-1",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "由 $y=e^{x\\ln\\left(1+\\sin x\\right)}$，得 $y^{\\prime}=\\left(1+\\sin x\\right)^{x}\\left[\\ln\\left(1+\\sin x\\right)+\\frac{x\\cos x}{1+\\sin x}\\right]$。代入 $x=\\pi$，得 $y^{\\prime}\\left(\\pi\\right)=-\\pi$，故 $\\left.\\mathrm{d}y\\right|_{x=\\pi}=-\\pi\\mathrm{d}x$。",
    "methods": "对数求导与函数微分；对 y=(1+sinx)^x 取对数求导，计算 y′(π)，再用 dy=y′dx。",
    "pitfalls": "微分结果仍含 dx；代入点时底数为 1。"
  },
  "255": {
    "status": "verified",
    "questionKey": "2005-填空题-2",
    "primary": [
      "CAL-05-H"
    ],
    "secondary": [
      "CAL-05-C"
    ],
    "rationale": "设斜渐近线为 $y=ax+b$。有 $a=\\lim_{x\\to+\\infty}\\frac{\\sqrt{x^{2}+3x+1}}{x}=1$，$b=\\lim_{x\\to+\\infty}\\left(\\sqrt{x^{2}+3x+1}-x\\right)=\\frac{3}{2}$，故斜渐近线为 $y=x+\\frac{3}{2}$。",
    "methods": "无理函数斜渐近线；分别计算 y/x 的极限求斜率，再计算 y−ax 的极限求截距。",
    "pitfalls": "根式含 x²，需分别检查 x→+∞ 与 x→−∞；题给渐近线对应正无穷方向。"
  },
  "256": {
    "status": "verified",
    "questionKey": "2005-填空题-3",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-G"
    ],
    "rationale": "令 $x=\\sin t$，则\n\n$\\int_{0}^{1}\\frac{x}{\\left(2-x^{2}\\right)\\sqrt{1-x^{2}}}\\mathrm{~d}x=\\int_{0}^{\\frac{\\pi}{2}}\\frac{\\sin t}{2-\\sin^{2}t}\\mathrm{~d}t=\\int_{0}^{\\frac{\\pi}{2}}\\frac{\\sin t}{1+\\cos^{2}t}\\mathrm{~d}t$。\n\n再令 $u=\\cos t$，得 $\\int_{0}^{1}\\frac{1}{1+u^{2}}\\mathrm{~d}u=\\frac{\\pi}{4}$。",
    "methods": "定积分三角换元与有理积分；先令 x=sin t 消去根式，再令 u=cos t 化为 ∫du/(1+u²)。",
    "pitfalls": "换元时同步调整积分上下限和微分。"
  },
  "257": {
    "status": "verified",
    "questionKey": "2005-填空题-4",
    "primary": [
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "原方程化为 $y^{\\prime}+\\frac{2}{x}y=\\ln x$，积分因子为 $x^{2}$，故 $\\left(x^{2}y\\right)^{\\prime}=x^{2}\\ln x$。积分得 $x^{2}y=\\frac{x^{3}}{3}\\ln x-\\frac{x^{3}}{9}+C$。由 $y\\left(1\\right)=-\\frac{1}{9}$，得 $C=0$，故 $y=\\frac{1}{3}x\\ln x-\\frac{1}{9}x$。",
    "methods": "一阶线性微分方程初值问题；除以 x 后使用积分因子 x²，积分得到 x²y，再由 y(1) 确定常数。",
    "pitfalls": "积分 ∫x²lnx dx 要分部积分两次或正确套用公式。"
  },
  "258": {
    "status": "verified",
    "questionKey": "2005-填空题-5",
    "primary": [
      "CAL-01-G"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "有理化得\n\n$\\frac{\\beta\\left(x\\right)}{\\alpha\\left(x\\right)}=\\frac{1+x\\arcsin x-\\cos x}{kx^{2}\\left(\\sqrt{1+x\\arcsin x}+\\sqrt{\\cos x}\\right)}$。\n\n当 $x\\to 0$ 时，分母中根式和趋于 $2$，且 $\\frac{x\\arcsin x}{x^{2}}\\to 1$，$\\frac{1-\\cos x}{x^{2}}\\to \\frac{1}{2}$，故 $\\lim_{x\\to 0}\\frac{\\beta\\left(x\\right)}{\\alpha\\left(x\\right)}=\\frac{3}{4k}$。由等价无穷小得 $k=\\frac{3}{4}$。",
    "methods": "根式差的等价无穷小与参数；有理化后分别使用 x arcsin x∼x²、1−cosx∼x²/2，比较系数。",
    "pitfalls": "两个根式相减不能直接分别作等价替换，先有理化。"
  },
  "259": {
    "status": "verified",
    "questionKey": "2005-填空题-6",
    "primary": [
      "LA-01-E"
    ],
    "secondary": [
      "LA-01-A"
    ],
    "rationale": "因为\n\n$\\boldsymbol{B}=\\boldsymbol{A}\\left(\\begin{matrix}1 & 1 & 1\\\\ 1 & 2 & 3\\\\ 1 & 4 & 9\\end{matrix}\\right)$，\n\n所以 $\\left|\\boldsymbol{B}\\right|=\\left|\\boldsymbol{A}\\right|\\left|\\begin{matrix}1 & 1 & 1\\\\ 1 & 2 & 3\\\\ 1 & 4 & 9\\end{matrix}\\right|=1\\cdot 2=2$。",
    "methods": "矩阵乘积行列式与列向量线性组合；将 B 表示为 A 乘系数矩阵，利用行列式乘法公式。",
    "pitfalls": "注意系数矩阵列向量对应 α 的组合系数，行列式值为 2。"
  },
  "260": {
    "status": "verified",
    "questionKey": "2005-选择题-7",
    "primary": [
      "CAL-01-A"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "由极限可得\n\n$f\\left(x\\right)=\\left\\{\\begin{matrix}1, & \\left|x\\right|<1\\\\ \\left|x\\right|^{3}, & \\left|x\\right|\\geq 1\\end{matrix}\\right.$。\n\n该函数仅在 $x=\\pm 1$ 处不可导，故选 C。",
    "methods": "极限定义函数的分段表达与可导性；根据 n 次方根极限分别讨论 |x|≤1 与 |x|>1，得到分段函数并检查拼接点左右导数。",
    "pitfalls": "在 x=±1 处需比较左右导数，不能只看函数连续。"
  },
  "261": {
    "status": "verified",
    "questionKey": "2005-选择题-8",
    "primary": [
      "CAL-06-A"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "若 $F\\left(x\\right)$ 为偶函数，则由 $F\\left(-x\\right)=F\\left(x\\right)$ 两边求导得 $-F^{\\prime}\\left(-x\\right)=F^{\\prime}\\left(x\\right)$，即 $f\\left(-x\\right)=-f\\left(x\\right)$，故 $f\\left(x\\right)$ 为奇函数。反之，若 $f\\left(x\\right)$ 为奇函数，则 $F\\left(x\\right)=\\int_{0}^{x}f\\left(t\\right)\\mathrm{~d}t+C$ 为偶函数。",
    "methods": "原函数奇偶性与被积函数奇偶性；利用 F′=f，对 F(−x)=F(x) 求导可推出 f 为奇函数；反向由积分表示验证。",
    "pitfalls": "原函数相差常数，奇偶性结论需结合定义域对称及常数项。"
  },
  "262": {
    "status": "verified",
    "questionKey": "2005-选择题-9",
    "primary": [
      "CAL-04-E"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "由 $t^{2}+2t=3$ 得 $t=1$，对应点为 $\\left(3,\\ln 2\\right)$。又 $\\frac{\\mathrm{d}y}{\\mathrm{d}x}=\\frac{1}{2\\left(1+t\\right)^{2}}$，故切线斜率为 $\\frac{1}{8}$，法线斜率为 $-8$。法线方程为 $y-\\ln 2=-8\\left(x-3\\right)$，令 $y=0$，得 $x=3+\\frac{\\ln 2}{8}$。",
    "methods": "参数方程求导与法线截距；由 x=t²+2t 求出 t，再用 (dy/dt)/(dx/dt) 得切线斜率，写法线并令 y=0。",
    "pitfalls": "参数 t 需满足 x=3 的方程；法线斜率为切线斜率负倒数。"
  },
  "263": {
    "status": "verified",
    "questionKey": "2005-选择题-10",
    "primary": [
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-08-C"
    ],
    "rationale": "设原积分为 $I$。区域 $D$ 关于 $y=x$ 对称，交换 $x,y$ 后与原式相加，得\n\n$2I=\\iint_{D}\\left(a+b\\right)\\mathrm{~d}\\sigma=\\left(a+b\\right)\\pi$。\n\n因此 $I=\\frac{a+b}{2}\\pi$。",
    "methods": "对称区域二重积分的交换变量技巧；区域关于 y=x 对称，交换 x、y 后与原积分相加，分式化为常数。",
    "pitfalls": "被积函数需连同区域一起交换；对称性才允许等式成立。"
  },
  "264": {
    "status": "verified",
    "questionKey": "2005-选择题-11",
    "primary": [
      "CAL-08-A"
    ],
    "secondary": [
      "CAL-08-B"
    ],
    "rationale": "直接求二阶偏导可得\n\n$\\frac{\\partial^{2}u}{\\partial x^{2}}=\\varphi^{\\prime\\prime}\\left(x+y\\right)+\\varphi^{\\prime\\prime}\\left(x-y\\right)+\\psi^{\\prime}\\left(x+y\\right)-\\psi^{\\prime}\\left(x-y\\right)$，\n\n$\\frac{\\partial^{2}u}{\\partial y^{2}}=\\varphi^{\\prime\\prime}\\left(x+y\\right)+\\varphi^{\\prime\\prime}\\left(x-y\\right)+\\psi^{\\prime}\\left(x+y\\right)-\\psi^{\\prime}\\left(x-y\\right)$。\n\n故二者相等，选 B。",
    "methods": "含变上限积分的二阶偏导；分别对 x、y 求偏导，使用链式法则及变上限积分求导公式，再比较二阶偏导。",
    "pitfalls": "上下限分别依赖 x、y，求导时注意上下限导数符号。"
  },
  "265": {
    "status": "verified",
    "questionKey": "2005-选择题-12",
    "primary": [
      "CAL-03-B"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "当 $x\\to 0^{+}$ 时，$x^{\\frac{1}{x-1}}\\to+\\infty$，故 $x=0$ 是第二类间断点；当 $x\\to 1$ 时，$x^{\\frac{1}{x-1}}=\\left(1+\\left(x-1\\right)\\right)^{\\frac{1}{x-1}}\\to e$，故 $x=1$ 是第一类间断点。",
    "methods": "幂指函数在零点与一点处的间断分类；在 x→0+ 直接分析幂指极限，在 x→1 取对数化为标准重要极限。",
    "pitfalls": "区分函数定义域端点附近的无穷极限与可去型极限。"
  },
  "266": {
    "status": "verified",
    "questionKey": "2005-选择题-13",
    "primary": [
      "LA-05-E"
    ],
    "secondary": [
      "LA-05-A"
    ],
    "rationale": "因为\n\n$\\boldsymbol{A}\\left(\\boldsymbol{\\alpha}_{1}+\\boldsymbol{\\alpha}_{2}\\right)=\\lambda_{1}\\boldsymbol{\\alpha}_{1}+\\lambda_{2}\\boldsymbol{\\alpha}_{2}$，\n\n且 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2}$ 线性无关，所以 $\\boldsymbol{\\alpha}_{1}$ 与 $\\lambda_{1}\\boldsymbol{\\alpha}_{1}+\\lambda_{2}\\boldsymbol{\\alpha}_{2}$ 线性无关当且仅当 $\\lambda_{2}\\ne 0$。",
    "methods": "不同特征值特征向量的线性无关性；将 A(α1+α2) 写成 λ1α1+λ2α2，利用不同特征值对应特征向量线性无关判定。",
    "pitfalls": "判断与 α1 是否线性无关，关键看 α2 的系数 λ2 是否为零。"
  },
  "267": {
    "status": "verified",
    "questionKey": "2005-选择题-14",
    "primary": [
      "LA-02-D"
    ],
    "secondary": [
      "LA-01-E"
    ],
    "rationale": "设 $\\boldsymbol{E}_{12}$ 为交换第 1 行与第 2 行的初等矩阵，则 $\\boldsymbol{B}=\\boldsymbol{E}_{12}\\boldsymbol{A}$。由 $\\boldsymbol{B}^{*}=\\left|\\boldsymbol{B}\\right|\\boldsymbol{B}^{-1}$，且 $\\left|\\boldsymbol{B}\\right|=-\\left|\\boldsymbol{A}\\right|$，$\\boldsymbol{B}^{-1}=\\boldsymbol{A}^{-1}\\boldsymbol{E}_{12}$，得 $\\boldsymbol{B}^{*}=-\\boldsymbol{A}^{*}\\boldsymbol{E}_{12}$。故交换 $\\boldsymbol{A}^{*}$ 的第 1 列与第 2 列得 $-\\boldsymbol{B}^{*}$。",
    "methods": "行交换对伴随矩阵的影响；用 B=EA 及 A*=|A|A⁻¹，推出 B*=−A*E，解释为伴随矩阵对应列交换并乘负号。",
    "pitfalls": "行交换使行列式变号，且逆矩阵中的初等矩阵出现在右侧。"
  },
  "268": {
    "status": "verified",
    "questionKey": "2005-解答题-15",
    "primary": [
      "CAL-06-F"
    ],
    "secondary": [
      "CAL-06-G"
    ],
    "rationale": "对分母作变量代换 $u=x-t$，得 $\\int_{0}^{x}xf\\left(x-t\\right)\\mathrm{~d}t=x\\int_{0}^{x}f\\left(u\\right)\\mathrm{~d}u$。又\n\n$\\int_{0}^{x}\\left(x-t\\right)f\\left(t\\right)\\mathrm{~d}t=x\\int_{0}^{x}f\\left(t\\right)\\mathrm{~d}t-\\int_{0}^{x}tf\\left(t\\right)\\mathrm{~d}t$。\n\n由连续性，$\\int_{0}^{x}f\\left(t\\right)\\mathrm{~d}t\\sim xf\\left(0\\right)$，$\\int_{0}^{x}tf\\left(t\\right)\\mathrm{~d}t\\sim \\frac{x^{2}}{2}f\\left(0\\right)$，故原极限为 $\\frac{1}{2}$。",
    "methods": "积分表达式变量代换与连续函数极限；对分母作 u=x−t 换元，将分子拆成 x∫f−∫tf，再用连续性求两个积分主项。",
    "pitfalls": "分子分母均为二阶量，需保留积分核 t 带来的 1/2 系数。"
  },
  "269": {
    "status": "verified",
    "questionKey": "2005-解答题-16",
    "primary": [
      "CAL-06-F"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "由题意，\n\n$S_{1}\\left(x\\right)=\\int_{0}^{x}\\left[e^{t}-\\frac{1}{2}\\left(e^{t}+e^{-t}\\right)\\right]\\mathrm{~d}t=\\frac{1}{2}\\left(e^{x}+e^{-x}\\right)-1$。\n\n因 $M\\left(x,y\\right)$ 在 $C_{2}$ 上，故 $y=e^{x}$，于是 $S_{1}\\left(x\\right)=\\frac{1}{2}\\left(y+\\frac{1}{y}\\right)-1$。\n\n又 $S_{2}\\left(y\\right)=\\int_{1}^{y}\\left(\\ln t-\\varphi\\left(t\\right)\\right)\\mathrm{~d}t$。由 $S_{1}\\left(x\\right)=S_{2}\\left(y\\right)$ 两边对 $y$ 求导，得 $\\ln y-\\varphi\\left(y\\right)=\\frac{1}{2}\\left(1-\\frac{1}{y^{2}}\\right)$。故\n\n$x=\\varphi\\left(y\\right)=\\ln y-\\frac{1}{2}+\\frac{1}{2y^{2}}$。",
    "methods": "几何面积函数求导反求曲线；分别写出两块面积积分，利用 y=e^x 消去 x，再对面积恒等式求导求 φ(y)。",
    "pitfalls": "积分上下限和被积函数的几何上下关系决定正负号。"
  },
  "270": {
    "status": "verified",
    "questionKey": "2005-解答题-17",
    "primary": [
      "CAL-06-D"
    ],
    "secondary": [
      "CAL-05-G"
    ],
    "rationale": "由切线信息得 $f\\left(0\\right)=0,\\ f\\left(3\\right)=2,\\ f^{\\prime}\\left(0\\right)=2,\\ f^{\\prime}\\left(3\\right)=-2$，又拐点处 $f^{\\prime\\prime}\\left(3\\right)=0$。\n\n分部积分两次：\n\n$\\int_{0}^{3}\\left(x^{2}+x\\right)f^{\\prime\\prime\\prime}\\left(x\\right)\\mathrm{~d}x=-\\left[\\left(2x+1\\right)f^{\\prime}\\left(x\\right)\\right]_{0}^{3}+2\\left[f\\left(x\\right)\\right]_{0}^{3}$。\n\n代入数据得\n\n$-\\left[7\\cdot\\left(-2\\right)-2\\right]+2\\left(2-0\\right)=20$。",
    "methods": "分部积分与拐点条件；利用切线求 f(0)、f(3)、f′(0)、f′(3)，再由拐点得 f″(3)=0，对积分分部积分两次。",
    "pitfalls": "拐点只给出二阶导为零（在足够光滑前提下），还需正确使用边界项。"
  },
  "271": {
    "status": "verified",
    "questionKey": "2005-解答题-18",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "令 $x=\\cos t$，则 $y^{\\prime}=-\\frac{1}{\\sin t}\\frac{\\mathrm{d}y}{\\mathrm{d}t}$，代入原方程化为\n\n$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}t^{2}}+y=0$。\n\n其通解为 $y=C_{1}\\cos t+C_{2}\\sin t$，即 $y=C_{1}x+C_{2}\\sqrt{1-x^{2}}$。由 $\\left.y\\right|_{x=0}=1$ 得 $C_{2}=1$；由 $\\left.y^{\\prime}\\right|_{x=0}=2$ 得 $C_{1}=2$。故特解为\n\n$y=2x+\\sqrt{1-x^{2}}$。",
    "methods": "变量代换化简二阶微分方程；令 x=cos t，利用链式法则将方程化为 y_tt+y=0，再由初值确定常数。",
    "pitfalls": "将 y′、y″ 全部转换为 t 导数，避免漏掉系数。"
  },
  "272": {
    "status": "verified",
    "questionKey": "2005-解答题-19",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-05-E"
    ],
    "rationale": "（Ⅰ）令 $F\\left(x\\right)=f\\left(x\\right)+x-1$，则 $F\\left(0\\right)=-1<0$，$F\\left(1\\right)=1>0$。由介值定理，存在 $\\xi\\in\\left(0,1\\right)$，使 $F\\left(\\xi\\right)=0$，即 $f\\left(\\xi\\right)=1-\\xi$。\n\n（Ⅱ）在 $\\left[0,\\xi\\right]$ 与 $\\left[\\xi,1\\right]$ 上分别用拉格朗日中值定理，存在 $\\eta\\in\\left(0,\\xi\\right)$，$\\zeta\\in\\left(\\xi,1\\right)$，使\n\n$f^{\\prime}\\left(\\eta\\right)=\\frac{1-\\xi}{\\xi},\\quad f^{\\prime}\\left(\\zeta\\right)=\\frac{\\xi}{1-\\xi}$。\n\n故 $f^{\\prime}\\left(\\eta\\right)f^{\\prime}\\left(\\zeta\\right)=1$。",
    "methods": "介值定理与两段拉格朗日中值定理；构造 F=f+x−1 用介值定理找 ξ，再分别在 [0,ξ]、[ξ,1] 使用拉格朗日中值定理。",
    "pitfalls": "两个中值点分别落在 ξ 两侧，才能保证是不同点。"
  },
  "273": {
    "status": "verified",
    "questionKey": "2005-解答题-20",
    "primary": [
      "CAL-08-D"
    ],
    "secondary": [
      "CAL-08-C"
    ],
    "rationale": "由 $\\mathrm{d}z=2x\\mathrm{d}x-2y\\mathrm{d}y$，得 $f\\left(x,y\\right)=x^{2}-y^{2}+C$。由 $f\\left(1,1\\right)=2$ 得 $C=2$，故 $f\\left(x,y\\right)=x^{2}-y^{2}+2$。\n\n区域内部驻点为 $\\left(0,0\\right)$，函数值为 $2$。边界上 $x^{2}+\\frac{y^{2}}{4}=1$，即 $y^{2}=4\\left(1-x^{2}\\right)$，故\n\n$f\\left(x,y\\right)=x^{2}-4\\left(1-x^{2}\\right)+2=5x^{2}-2$。\n\n当 $x=0$ 时取最小值 $-2$；当 $x=\\pm 1$ 时取最大值 $3$。",
    "methods": "全微分确定函数与椭圆域最值；由偏导积分得 f=x²−y²+C，先求内部驻点，再将椭圆边界代入化为一元函数。",
    "pitfalls": "闭区域最值要比较内部驻点与整个边界，不可只检查驻点。"
  },
  "274": {
    "status": "verified",
    "questionKey": "2005-解答题-21",
    "primary": [
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-08-F"
    ],
    "rationale": "记 $D_{1}$ 为第一象限单位圆的四分之一。则\n\n$\\iint_{D}\\left|x^{2}+y^{2}-1\\right|\\mathrm{~d}\\sigma=2\\iint_{D_{1}}\\left(1-x^{2}-y^{2}\\right)\\mathrm{~d}\\sigma+\\iint_{D}\\left(x^{2}+y^{2}-1\\right)\\mathrm{~d}\\sigma$。\n\n其中\n\n$\\iint_{D_{1}}\\left(1-x^{2}-y^{2}\\right)\\mathrm{~d}\\sigma=\\int_{0}^{\\frac{\\pi}{2}}\\mathrm{d}\\theta\\int_{0}^{1}\\left(1-r^{2}\\right)r\\mathrm{~d}r=\\frac{\\pi}{8}$，\n\n且 $\\iint_{D}\\left(x^{2}+y^{2}-1\\right)\\mathrm{~d}\\sigma=\\frac{1}{3}+\\frac{1}{3}-1=-\\frac{1}{3}$。\n\n故原积分为 $\\frac{\\pi}{4}-\\frac{1}{3}$。",
    "methods": "含绝对值二重积分的区域拆分；以单位圆弧将正方形分成两部分，在圆内外分别去绝对值并用极坐标积分。",
    "pitfalls": "绝对值符号改变的曲线是 x²+y²=1，区域拆分不能遗漏。"
  },
  "275": {
    "status": "verified",
    "questionKey": "2005-解答题-22",
    "primary": [
      "LA-03-A"
    ],
    "secondary": [
      "LA-03-C"
    ],
    "rationale": "记 $\\boldsymbol{A}=\\left(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3}\\right)$。由题意，$\\boldsymbol{\\beta}_{1},\\boldsymbol{\\beta}_{2},\\boldsymbol{\\beta}_{3}$ 不能由 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3}$ 线性表示，因此 $\\operatorname{rank}\\left(\\boldsymbol{A}\\right)<3$，即\n\n$\\left|\\boldsymbol{A}\\right|=\\left|\\begin{matrix}a & 1 & 1\\\\ 1 & a & 1\\\\ 1 & 1 & a\\end{matrix}\\right|=\\left(a+2\\right)\\left(a-1\\right)^{2}=0$。\n\n故 $a=1$ 或 $a=-2$。当 $a=-2$ 时，$\\boldsymbol{\\alpha}_{2}$ 不能由 $\\boldsymbol{\\beta}_{1},\\boldsymbol{\\beta}_{2},\\boldsymbol{\\beta}_{3}$ 线性表示，不合题意；当 $a=1$ 时满足题意。故 $a=1$。",
    "methods": "向量组线性表示的秩条件；将 α 向量组组成矩阵，利用 β 不能由 α 表示推出 α 矩阵秩小于 3，再结合题设排除参数。",
    "pitfalls": "需同时检验两组向量的表示关系；秩小于 3 只是必要线索。"
  },
  "276": {
    "status": "verified",
    "questionKey": "2005-解答题-23",
    "primary": [
      "LA-04-B"
    ],
    "secondary": [
      "LA-04-A"
    ],
    "rationale": "由 $\\boldsymbol{A}\\boldsymbol{B}=\\boldsymbol{0}$ 可知，$\\boldsymbol{B}$ 的每一列都是方程组 $\\boldsymbol{A}\\boldsymbol{x}=\\boldsymbol{0}$ 的解。\n\n#### 情形一：$k\\ne 9$\n\n此时 $\\operatorname{rank}\\left(\\boldsymbol{B}\\right)=2$，故 $\\boldsymbol{A}\\boldsymbol{x}=\\boldsymbol{0}$ 至少有两个线性无关解。又 $\\boldsymbol{A}$ 第一行不全为零，所以 $\\operatorname{rank}\\left(\\boldsymbol{A}\\right)=1$。基础解系可取为\n\n$\\boldsymbol{\\xi}_{1}=\\left(1,2,3\\right)^{T},\\quad \\boldsymbol{\\xi}_{2}=\\left(3,6,k\\right)^{T}$。\n\n故通解为\n\n$\\boldsymbol{x}=C_{1}\\left(1,2,3\\right)^{T}+C_{2}\\left(3,6,k\\right)^{T}$，\n\n其中 $C_{1},C_{2}$ 为任意常数。\n\n#### 情形二：$k=9$\n\n此时 $\\operatorname{rank}\\left(\\boldsymbol{B}\\right)=1$。\n\n若 $\\operatorname{rank}\\left(\\boldsymbol{A}\\right)=2$，则基础解系可取为 $\\boldsymbol{\\xi}_{1}=\\left(1,2,3\\right)^{T}$，通解为\n\n$\\boldsymbol{x}=C\\left(1,2,3\\right)^{T}$，\n\n其中 $C$ 为任意常数。\n\n若 $\\operatorname{rank}\\left(\\boldsymbol{A}\\right)=1$，则方程组与 $ax_{1}+bx_{2}+cx_{3}=0$ 同解。当 $a\\ne 0$ 时，基础解系可取为\n\n$\\boldsymbol{\\xi}_{1}=\\left(-\\frac{b}{a},1,0\\right)^{T},\\quad \\boldsymbol{\\xi}_{2}=\\left(-\\frac{c}{a},0,1\\right)^{T}$。\n\n故通解为\n\n$\\boldsymbol{x}=C_{1}\\left(-\\frac{b}{a},1,0\\right)^{T}+C_{2}\\left(-\\frac{c}{a},0,1\\right)^{T}$，\n\n其中 $C_{1},C_{2}$ 为任意常数。",
    "methods": "矩阵乘积为零与齐次方程组通解；由 AB=0 得 B 的列向量属于 Ax=0 的解空间，按 B 的秩及 A 的秩分类讨论。",
    "pitfalls": "k=9 时 B 的秩下降，A 的秩可能为 1 或 2，需保留参数 a,b,c 的约束。"
  },
  "277": {
    "status": "verified",
    "questionKey": "2006-填空题-1",
    "primary": [
      "CAL-05-H"
    ],
    "secondary": [
      "CAL-02-A"
    ],
    "rationale": "因为\n\n$\\lim_{x\\to\\infty}\\frac{x+4\\sin x}{5x-2\\cos x}=\\lim_{x\\to\\infty}\\frac{1+\\frac{4\\sin x}{x}}{5-\\frac{2\\cos x}{x}}=\\frac{1}{5}$，\n\n所以水平渐近线为 $y=\\frac{1}{5}$。",
    "methods": "含有界振荡项的水平渐近线；将分子分母同除以 x，利用 sinx/x、cosx/x 趋于零求极限。",
    "pitfalls": "有界振荡项除以 x 后趋于零。"
  },
  "278": {
    "status": "verified",
    "questionKey": "2006-填空题-2",
    "primary": [
      "CAL-03-A"
    ],
    "secondary": [
      "CAL-06-F"
    ],
    "rationale": "由连续性，\n\n$a=\\lim_{x\\to 0}\\frac{\\int_{0}^{x}\\sin t^{2}\\mathrm{~d}t}{x^{3}}=\\lim_{x\\to 0}\\frac{\\sin x^{2}}{3x^{2}}=\\frac{1}{3}$。",
    "methods": "变上限积分商的连续性极限；由连续性和积分中值定理或洛必达法则求 ∫₀ˣsin(t²)dt 的三阶主项。",
    "pitfalls": "被积函数 sin(t²)∼t²，积分后主项为 x³/3。"
  },
  "279": {
    "status": "verified",
    "questionKey": "2006-填空题-3",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "$\\int_{0}^{+\\infty}\\frac{x}{\\left(1+x^{2}\\right)^{2}}\\mathrm{~d}x=-\\frac{1}{2}\\left[\\frac{1}{1+x^{2}}\\right]_{0}^{+\\infty}=\\frac{1}{2}$。",
    "methods": "反常积分的换元与收敛计算；令 u=1+x²，利用 du=2x dx 将积分化为幂函数积分并计算无穷端点极限。",
    "pitfalls": "先写成极限形式确认收敛，再代入上下限。"
  },
  "280": {
    "status": "verified",
    "questionKey": "2006-填空题-4",
    "primary": [
      "CAL-07-A"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "一阶方程可分离变量，积分后得到通解；需注意原方程定义域 x≠0 及常数解。",
    "methods": "分离变量，分别积分 ln|y|=ln|x|−x+C，再指数化并吸收符号。",
    "pitfalls": "漏写绝对值或忽略定义域；题解中 ln y 隐含 y>0，通解表达式可由常数覆盖相应分支。"
  },
  "281": {
    "status": "verified",
    "questionKey": "2006-填空题-5",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "由隐式方程确定 y(x)，要求在 x=0 处求导数，核心是隐函数求导与初值代入。",
    "methods": "先代 x=0 求 y(0)，对方程两边求导，再代入初值。",
    "pitfalls": "求导时漏掉 e^y·y' 的链式因子。"
  },
  "282": {
    "status": "verified",
    "questionKey": "2006-填空题-6",
    "primary": [
      "LA-01-C"
    ],
    "secondary": [
      "LA-02-A"
    ],
    "rationale": "将 BA=B+2E 改写为 B(A−E)=2E，再用行列式乘积定理求 |B|。",
    "methods": "移项因式分解，计算 |A−E|，利用 |2E|=2²。",
    "pitfalls": "误把 |2E| 算成 2；注意矩阵阶数为2。"
  },
  "283": {
    "status": "verified",
    "questionKey": "2006-选择题-7",
    "primary": [
      "CAL-04-A"
    ],
    "secondary": [
      "CAL-05-G"
    ],
    "rationale": "一阶微分给出切线增量，二阶导数为正表示函数严格凸，正向弦增量大于切线增量。",
    "methods": "用 dy=f'(x₀)Δx；由凸性比较 f(x₀+Δx) 与切线值。",
    "pitfalls": "把凸性下弦与切线的大小关系颠倒。"
  },
  "284": {
    "status": "verified",
    "questionKey": "2006-选择题-8",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-03-A"
    ],
    "rationale": "变上限积分函数连续，奇函数在对称区间积分后形成偶函数。",
    "methods": "令 F(x)=∫₀ˣf(t)dt，验证 F(−x)=F(x)，并用积分函数连续性。",
    "pitfalls": "把被积函数奇偶性直接等同于积分函数奇偶性；此处奇函数积分得到偶函数。"
  },
  "285": {
    "status": "verified",
    "questionKey": "2006-选择题-9",
    "primary": [
      "CAL-04-B"
    ],
    "secondary": [
      "CAL-02-D"
    ],
    "rationale": "复合指数函数求导后结合给定 h'(1)、g'(1) 反解 g(1)。",
    "methods": "写 h'=e^(1+g)g'，代入已知量后取对数。",
    "pitfalls": "漏乘 g'(x)，或对 ln(1/2) 的符号处理错误。"
  },
  "286": {
    "status": "verified",
    "questionKey": "2006-选择题-10",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "齐次通解的指数项确定特征根，代入特解 xe^x 求非齐次项。",
    "methods": "由 e^x、e^(−2x) 得特征多项式 (r−1)(r+2)，再代入 xe^x 验证算子结果。",
    "pitfalls": "只根据齐次项判断方程，未核对特解产生的右端项。"
  },
  "287": {
    "status": "verified",
    "questionKey": "2006-选择题-11",
    "primary": [
      "CAL-08-F"
    ],
    "secondary": [
      "CAL-08-E"
    ],
    "rationale": "极坐标扇形区域转换为直角坐标，并按先 x 后 y 的次序重写积分限。",
    "methods": "识别 0≤θ≤π/4、0≤r≤1，得到 0≤y≤√2/2、y≤x≤√(1−y²)。",
    "pitfalls": "把扇形边界 x=y 与圆弧边界混淆，或交换积分次序时漏掉边界。"
  },
  "288": {
    "status": "verified",
    "questionKey": "2006-选择题-12",
    "primary": [
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-08-D"
    ],
    "rationale": "约束 φ(x,y)=0 且 φ_y≠0 可局部确定 y(x)，约束极值满足复合函数导数为零。",
    "methods": "写 f_x+f_y y'=0，并用 φ_y≠0 及题设排除 f_x、f_y 中任一为零的情形。",
    "pitfalls": "把无约束极值条件 f_x=f_y=0 错套到约束极值。"
  },
  "289": {
    "status": "verified",
    "questionKey": "2006-选择题-13",
    "primary": [
      "LA-03-B"
    ],
    "secondary": [
      "LA-03-A"
    ],
    "rationale": "线性相关向量经同一线性变换 A 映射后仍线性相关。",
    "methods": "将原向量组的非零线性组合等于零，两边左乘 A。",
    "pitfalls": "误认为线性无关在任意矩阵映射下也保持；只有相关性必保持。"
  },
  "290": {
    "status": "verified",
    "questionKey": "2006-选择题-14",
    "primary": [
      "LA-02-B"
    ],
    "secondary": [
      "LA-05-F"
    ],
    "rationale": "左乘初等矩阵实施行变换，右乘其逆实施对应列变换，合成为相似变换。",
    "methods": "识别 B=PA；列操作对应右乘 P⁻¹，故 C=PAP⁻¹。",
    "pitfalls": "把右乘矩阵误写成 P，注意列变换方向与逆矩阵。"
  },
  "291": {
    "status": "verified",
    "questionKey": "2006-解答题-15",
    "primary": [
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-02-E"
    ],
    "rationale": "将 e^x 展开至三次项，与目标式比较 x、x²、x³ 系数确定 A、B、C。",
    "methods": "使用麦克劳林展开并逐次比较系数。",
    "pitfalls": "题目要求余项为 o(x³)，因此 x²、x³ 项系数均须为零。"
  },
  "292": {
    "status": "verified",
    "questionKey": "2006-解答题-16",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-G"
    ],
    "rationale": "先令 t=e^x 消去指数复合，再对 arcsin(t)/t² 分部积分并作根式代换。",
    "methods": "换元 t=e^x，分部积分后令 u=√(1−t²) 完成剩余积分。",
    "pitfalls": "定义域需满足 e^x≤1；分部积分边界项和对数绝对值不可漏。"
  },
  "293": {
    "status": "verified",
    "questionKey": "2006-解答题-17",
    "primary": [
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-08-F"
    ],
    "rationale": "半圆盘区域关于 x 轴对称，奇函数项 xy 积分为零，剩余径向函数用极坐标。",
    "methods": "先利用对称性消去 xy 项，再取 r、θ 积分。",
    "pitfalls": "半圆盘角度范围为 −π/2 到 π/2，不可误用整圆。"
  },
  "294": {
    "status": "verified",
    "questionKey": "2006-解答题-18",
    "primary": [
      "CAL-01-J"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "递推 xₙ₊₁=sin xₙ，利用 0<sin x<x 得单调有界收敛，再用小量展开求幂极限。",
    "methods": "先证明单调递减且下界为0；设极限 L 得 L=sin L；对数化后用 ln(sin t/t) 的二阶展开。",
    "pitfalls": "不能只凭 sin x<x 直接写极限；取对数后极限为 −1/6，最终指数为 e^(−1/6)。"
  },
  "295": {
    "status": "verified",
    "questionKey": "2006-解答题-19",
    "primary": [
      "CAL-05-E"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "构造 f(x)=x sin x+2cos x+πx，证明其导数在区间内为正，从而单调递增。",
    "methods": "求一、二阶导数，利用 f''<0 和 f'(π)=0 推出 f'>0。",
    "pitfalls": "f''<0 表示 f'递减，不代表 f 本身递减；还需检查 f'端点值。"
  },
  "296": {
    "status": "verified",
    "questionKey": "2006-解答题-20",
    "primary": [
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "径向函数 z=f(√(x²+y²)) 的二维拉普拉斯表达式化为 f''(u)+f'(u)/u。",
    "methods": "令 u=√(x²+y²)，分别求 z_x、z_y 再求二阶偏导相加；解一阶方程 f'=C/u。",
    "pitfalls": "链式求导时漏掉 u_x、u_y；使用初值确定积分常数。"
  },
  "297": {
    "status": "verified",
    "questionKey": "2006-解答题-21",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-05-C"
    ],
    "rationale": "参数曲线通过 dy/dx=(dy/dt)/(dx/dt) 求斜率，再求二阶导判断凹凸，并用切线条件确定参数。",
    "methods": "计算一、二阶参数导数；切线过给定点建立方程；最后按曲线与直线分段积分。",
    "pitfalls": "t=0 处 dx/dt=0 需单独看端点；面积积分必须按交点分段。"
  },
  "298": {
    "status": "verified",
    "questionKey": "2006-解答题-22",
    "primary": [
      "LA-04-A"
    ],
    "secondary": [
      "LA-04-C"
    ],
    "rationale": "非齐次方程组有三个线性无关解，解集差向量属于齐次解空间，故零空间维数至少2，结合前两行独立得秩2。",
    "methods": "由 rank-nullity 得 rank≤2，再用两行不成比例得 rank≥2；代入秩条件求参数与通解。",
    "pitfalls": "非齐次解向量本身不构成线性空间；应取解之差。"
  },
  "299": {
    "status": "verified",
    "questionKey": "2006-解答题-23",
    "primary": [
      "LA-05-C"
    ],
    "secondary": [
      "LA-05-A"
    ],
    "rationale": "实对称矩阵的行和给出特征向量 (1,1,1)，两个独立零空间向量给出二重特征值0，并正交化构造 Q。",
    "methods": "先确定特征值及特征子空间，再对零特征空间作 Gram–Schmidt 正交化并单位化。",
    "pitfalls": "实对称矩阵不同特征值的特征向量正交；同一特征空间内仍需正交化。"
  },
  "300": {
    "status": "verified",
    "questionKey": "2007-选择题-1",
    "primary": [
      "CAL-02-E"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "比较四个表达式与 √x 的等价阶，利用指数、对数及根式的基本等价无穷小判断。",
    "methods": "分别作 x→0⁺ 展开，只有对数项首项为 √x。",
    "pitfalls": "等价无穷小需比值趋于1，不能只比较同阶而忽略系数和符号。"
  },
  "301": {
    "status": "verified",
    "questionKey": "2007-选择题-2",
    "primary": [
      "CAL-03-B"
    ],
    "secondary": [
      "CAL-02-B"
    ],
    "rationale": "在 x=0 左右极限分别为不同有限值，属于跳跃间断；其余候选点不符合第一类间断。",
    "methods": "分别计算 x→0⁺ 与 x→0⁻ 的极限并比较。",
    "pitfalls": "第一类间断要求左右极限均存在且有限；左右不相等仍属第一类。"
  },
  "302": {
    "status": "verified",
    "questionKey": "2007-选择题-3",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-03-C"
    ],
    "rationale": "由图形判断 f 为奇函数，积分函数 F 为偶函数；利用半圆面积求 F(2)、F(3)。",
    "methods": "把积分解释为有向面积，利用奇偶性和半圆面积计算。",
    "pitfalls": "负向积分要注意积分上下限反向；不要把 F 的偶性判断反。"
  },
  "303": {
    "status": "verified",
    "questionKey": "2007-选择题-4",
    "primary": [
      "CAL-04-A"
    ],
    "secondary": [
      "CAL-02-B"
    ],
    "rationale": "选项 D 的对称差商极限存在并不保证导数存在，反例 f(x)=|x|；其他命题可由连续性和导数定义判断。",
    "methods": "逐项分析，构造绝对值函数检验 D。",
    "pitfalls": "对称差商不是标准导数定义，不能替代单侧差商一致收敛。"
  },
  "304": {
    "status": "verified",
    "questionKey": "2007-选择题-5",
    "primary": [
      "CAL-05-H"
    ],
    "secondary": [
      "CAL-01-B"
    ],
    "rationale": "分别考察 x→0⁺、x→−∞、x→+∞，得到铅直、水平和斜渐近线。",
    "methods": "计算函数在三种极限方向的发散、有限极限及 y/x、y−x 极限。",
    "pitfalls": "定义域分支要分左右；斜渐近线需同时验证斜率和截距极限。"
  },
  "305": {
    "status": "verified",
    "questionKey": "2007-选择题-6",
    "primary": [
      "CAL-05-E"
    ],
    "secondary": [
      "CAL-01-J"
    ],
    "rationale": "f''>0 使 f'严格递增；若 f(2)>f(1)，由中值定理得某点导数为正，之后函数值增量持续为正并发散。",
    "methods": "对每个区间 [n,n+1] 用拉格朗日中值定理，利用 f'单调性比较。",
    "pitfalls": "凸性本身不保证序列收敛；需结合首个区间增量为正推出后续递增。"
  },
  "306": {
    "status": "verified",
    "questionKey": "2007-选择题-7",
    "primary": [
      "CAL-08-A"
    ],
    "secondary": [
      "CAL-08-B"
    ],
    "rationale": "给定增量与距离之比趋于0，直接符合二元函数在该点可微的线性主部为零的定义。",
    "methods": "令 ρ=√(x²+y²)，将极限条件改写为 Δz=o(ρ)。",
    "pitfalls": "连续或偏导存在不足以保证可微；要识别可微定义中的全增量余项。"
  },
  "307": {
    "status": "verified",
    "questionKey": "2007-选择题-8",
    "primary": [
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-08-F"
    ],
    "rationale": "交换二重积分次序，原区域由 π/2≤x≤π、sin x≤y≤1 描述，改写为固定 y 的 x 区间。",
    "methods": "先确定 0≤y≤1；在右半区间 sin x≥y 对应 x≥π−arcsin y。",
    "pitfalls": "在 [π/2,π] 上 sin x 单调递减，边界是 π−arcsin y 而非 arcsin y。"
  },
  "308": {
    "status": "verified",
    "questionKey": "2007-选择题-9",
    "primary": [
      "LA-03-B"
    ],
    "secondary": [
      "LA-03-D"
    ],
    "rationale": "三个差向量之和为零，直接构成非平凡线性关系。",
    "methods": "将三个向量相加并验证结果为零。",
    "pitfalls": "无需额外假设向量具体坐标；线性相关定义即可。"
  },
  "309": {
    "status": "verified",
    "questionKey": "2007-选择题-10",
    "primary": [
      "LA-06-B"
    ],
    "secondary": [
      "LA-05-F"
    ],
    "rationale": "合同由实对称矩阵的惯性指数判定；相似则要求特征值相同。",
    "methods": "分别求特征值并比较；用正负惯性指数判断合同。",
    "pitfalls": "合同不等于相似；特征值不同排除相似，但不排除合同。"
  },
  "310": {
    "status": "verified",
    "questionKey": "2007-填空题-11",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-05-D"
    ],
    "rationale": "分别展开 arctan x 与 sin x 至三次项，首个非零差项为 −x³/6。",
    "methods": "使用麦克劳林展开后除以 x³ 取极限。",
    "pitfalls": "两函数的一次项抵消，必须保留三次项。"
  },
  "311": {
    "status": "verified",
    "questionKey": "2007-填空题-12",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-E"
    ],
    "rationale": "参数曲线法线斜率是切线斜率的负倒数，先由参数导数求 dy/dx。",
    "methods": "计算 x'(t)、y'(t)，代入 t=π/4，再取负倒数。",
    "pitfalls": "不要把切线斜率直接当法线斜率。"
  },
  "312": {
    "status": "verified",
    "questionKey": "2007-填空题-13",
    "primary": [
      "CAL-04-B"
    ],
    "secondary": [
      "CAL-05-D"
    ],
    "rationale": "将 y=(2x+3)⁻¹ 求 n 阶导数，利用幂函数链式求导规律。",
    "methods": "归纳得到 y⁽ⁿ⁾(x)=(-1)ⁿ2ⁿn!(2x+3)^(−n−1)，代入0。",
    "pitfalls": "每次求导都会再乘 −2，并使阶乘递增。"
  },
  "313": {
    "status": "verified",
    "questionKey": "2007-填空题-14",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "特征方程根为1、3，非齐次项 2e^(2x) 设同型特解并代回求系数。",
    "methods": "先求齐次通解，再设 Ae^(2x)，代入算出 A=−2。",
    "pitfalls": "特征根不含2，无共振，不需乘 x。"
  },
  "314": {
    "status": "verified",
    "questionKey": "2007-填空题-15",
    "primary": [
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "对 u=y/x、v=x/y 使用多元复合函数链式法则，分别求 z_x、z_y 后组合。",
    "methods": "先写 u_x、u_y、v_x、v_y，再代入 z_x=f₁u_x+f₂v_x 等式。",
    "pitfalls": "注意 f₁、f₂ 分别对应第一、第二个自变量，勿混淆。"
  },
  "315": {
    "status": "verified",
    "questionKey": "2007-填空题-16",
    "primary": [
      "LA-02-B"
    ],
    "secondary": [
      "LA-02-E"
    ],
    "rationale": "A³只有一个非零元素，故秩为1；可用幂次结构直接计算。",
    "methods": "连续计算 A²、A³，观察超对角线向右移动。",
    "pitfalls": "不要误把 A 的秩或幂次与秩简单相乘。"
  },
  "316": {
    "status": "verified",
    "questionKey": "2007-解答题-17",
    "primary": [
      "CAL-06-F"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "对积分等式两边求导，利用反函数恒等式 f⁻¹(f(x))=x，得到 f'并积分。",
    "methods": "微积分基本定理与链式法则求导，再用 f(0)=0 确定常数。",
    "pitfalls": "题目给定 f 单调可导，需保证反函数关系可用；积分上限求导要乘 f'(x)。"
  },
  "317": {
    "status": "verified",
    "questionKey": "2007-解答题-18",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "旋转体体积化为含参数 a 的反常积分，求出 V(a) 后对参数求极值。",
    "methods": "用圆盘法 V=π∫y²dx，计算指数型反常积分，再对 a 求导。",
    "pitfalls": "积分上限为无穷需先确认收敛；a>1 的约束影响极值讨论。"
  },
  "318": {
    "status": "verified",
    "questionKey": "2007-解答题-19",
    "primary": [
      "CAL-07-D"
    ],
    "secondary": [
      "CAL-07-A"
    ],
    "rationale": "令 p=y' 将二阶方程降阶为关于 x(p) 的一阶线性方程，再由初值恢复 y。",
    "methods": "化为 dx/dp−x/p=p，解得 x=p²+Cp；用初值确定 C，再积分 y'=√x。",
    "pitfalls": "降阶时要留意 p=0 分支；本题初值 p(1)=1 选取正支。"
  },
  "319": {
    "status": "verified",
    "questionKey": "2007-解答题-20",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-08-B"
    ],
    "rationale": "先由隐式方程求 y(0)、y'(0)、y''(0)，再对 z=f(u) 使用复合函数一、二阶求导。",
    "methods": "令 u=ln y−sin x，计算 u(0)、u'(0)、u''(0)，代入 z'=f'u'、z''=f''(u')²+f'u''。",
    "pitfalls": "因 u'(0)=0，二阶导中的 f'' 项消失；不能误把 f'(0) 与 f''(0) 混用。"
  },
  "320": {
    "status": "verified",
    "questionKey": "2007-解答题-21",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-05-E"
    ],
    "rationale": "令 φ=f−g。题设公共端点相等且 f、g 存在相等最大值，故 φ 在端点及某内点取零；两次罗尔定理推出 φ'' 在区间内为零。",
    "methods": "先由最大值相等找 η∈(a,b) 使 φ(η)=0；分别在 [a,η]、[η,b] 用罗尔定理得两个 φ' 零点，再对 φ' 用罗尔定理。",
    "pitfalls": "要区分“最大值相等”是存在相同函数值，不是两函数最大点相同；需确认 η 为内点。"
  },
  "321": {
    "status": "verified",
    "questionKey": "2007-解答题-22",
    "primary": [
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-08-F"
    ],
    "rationale": "积分区域由菱形 |x|+|y|≤1 与外层菱形环带组成，分区积分；内区积 x²，外环对 1/r 使用极坐标。",
    "methods": "按 D1、D2 拆分；内区利用四象限对称性，外环在第一象限写 r 上下限 1/(cosθ+sinθ) 至 2/(cosθ+sinθ)。",
    "pitfalls": "极坐标外环的径向边界不是常数；面积元 r dr dθ 与被积函数 1/r 抵消。"
  },
  "322": {
    "status": "verified",
    "questionKey": "2007-解答题-23",
    "primary": [
      "LA-04-A"
    ],
    "secondary": [
      "LA-04-D"
    ],
    "rationale": "将前三个齐次方程与附加非齐次方程联立，公共解存在等价于增广矩阵秩条件，参数只可能为 1 或 2。",
    "methods": "写四行增广矩阵作消元；分别代 a=1、a=2 求解并回代原方程组。",
    "pitfalls": "公共解必须同时满足两组方程；不要只检查齐次方程组非零解。"
  },
  "323": {
    "status": "verified",
    "questionKey": "2007-解答题-24",
    "primary": [
      "LA-05-A"
    ],
    "secondary": [
      "LA-05-C"
    ],
    "rationale": "实对称矩阵 A 的多项式 B=p(A) 保持 A 的特征向量，B 的特征值由 p(λ) 映射得到；正交特征基可重建 B。",
    "methods": "计算 p(1)、p(2)、p(−2)，利用实对称矩阵正交对角化；按给定正交特征向量组成 P，再算 P diag(−2,1,1)Pᵀ。",
    "pitfalls": "特征值 1 在 B 中重合后，B 的对应特征空间是 A 的两个特征子空间之和；不能只给出一个特征向量。"
  },
  "324": {
    "status": "verified",
    "questionKey": "2008-选择题-1",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-05-E"
    ],
    "rationale": "多项式在 0、1、2 处有零点，罗尔定理保证 (0,1)、(1,2) 各有一个导数零点，且 x=0 本身也是导数零点。",
    "methods": "先因式求导或用罗尔定理定位两个区间内零点，再检查 f'(0)=0 并确认导数次数。",
    "pitfalls": "罗尔定理只给出开区间内零点，不能漏掉端点 x=0 的导数零点。"
  },
  "325": {
    "status": "verified",
    "questionKey": "2008-选择题-2",
    "primary": [
      "CAL-06-D"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "积分 ∫x f'(x)dx 用分部积分转化为端点矩形面积减去曲边梯形面积，几何上对应曲边三角形面积。",
    "methods": "取 u=x、dv=f'(x)dx，得到 af(a)−∫₀ᵃf(x)dx。",
    "pitfalls": "不要把结果直接认作曲边梯形面积；应先识别端点乘积项。"
  },
  "326": {
    "status": "verified",
    "questionKey": "2008-选择题-3",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "给定三项通解对应特征根 1、±2i，特征多项式为 (r−1)(r²+4)，展开确定微分方程系数。",
    "methods": "从 e^x 得根 1，从 cos2x、sin2x 得共轭根 ±2i，构造特征方程。",
    "pitfalls": "三阶方程的特征多项式需包含一次实根与二次不可约因子；注意 r²+4 的符号。"
  },
  "327": {
    "status": "verified",
    "questionKey": "2008-选择题-4",
    "primary": [
      "CAL-03-B"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "在 x→0⁺ 时 x ln x 型极限为零，x=0 是可去间断；x→1 两侧因 |x−1| 符号不同，左右极限异号形成跳跃间断。",
    "methods": "分别求 x→0⁺、x→1⁻、x→1⁺ 的极限，按左右极限分类。",
    "pitfalls": "定义域 x>0，0 只需右极限；绝对值导致 x=1 两侧符号不同。"
  },
  "328": {
    "status": "verified",
    "questionKey": "2008-选择题-5",
    "primary": [
      "CAL-01-J"
    ],
    "secondary": [
      "CAL-02-A"
    ],
    "rationale": "f 单调且有界，x_n 单调时 f(x_n) 仍单调且有界，故收敛。",
    "methods": "利用单调函数保序性与有界性，直接应用单调有界数列收敛定理。",
    "pitfalls": "函数单调不代表严格单调；反向命题通常不成立。"
  },
  "329": {
    "status": "verified",
    "questionKey": "2008-选择题-6",
    "primary": [
      "CAL-08-F"
    ],
    "secondary": [
      "CAL-08-E"
    ],
    "rationale": "将扇形积分域写为极坐标 1≤r≤u、0≤θ≤v，雅可比 r 抵消被积函数分母，随后用变上限积分求偏导。",
    "methods": "先换极坐标得 F=v∫₁ᵘ f(r²)dr，再对 u 求偏导。",
    "pitfalls": "径向积分中 r 因子被雅可比抵消；不可把 f(r²) 误写成 f(r)。"
  },
  "330": {
    "status": "verified",
    "questionKey": "2008-选择题-7",
    "primary": [
      "LA-02-A"
    ],
    "secondary": [
      "LA-02-C"
    ],
    "rationale": "由 A³=O 构造 (E−A)(E+A+A²)=E 与 (E+A)(E−A+A²)=E，分别给出逆矩阵。",
    "methods": "利用有限几何级数直接写出 E±A 的逆矩阵。",
    "pitfalls": "A 非零不影响上述逆式；不要误以为幂零矩阵本身可逆。"
  },
  "331": {
    "status": "verified",
    "questionKey": "2008-选择题-8",
    "primary": [
      "LA-06-B"
    ],
    "secondary": [
      "LA-06-D"
    ],
    "rationale": "合同矩阵的惯性指数相同。原矩阵特征值为 3、−1，选项 D 特征值也为 3、−1，故惯性相同。",
    "methods": "分别求对称矩阵特征值符号，比较正、负特征值个数。",
    "pitfalls": "相同特征值是比合同更强的条件；判断合同应依据惯性而非逐个特征值。"
  },
  "332": {
    "status": "verified",
    "questionKey": "2008-填空题-9",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-02-E"
    ],
    "rationale": "由 sin x~x、e^(x²)−1~x²，将分子化为 x²f(x)²/2，极限条件确定连续函数在零点的值。",
    "methods": "先对 1−cos u 作二阶等价替换，令 u=xf(x)，再用 f 连续性取极限。",
    "pitfalls": "化简时需保留分母中的 f(x)；若 f(0)=0 会与给定极限不符。"
  },
  "333": {
    "status": "verified",
    "questionKey": "2008-填空题-10",
    "primary": [
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-07-A"
    ],
    "rationale": "原方程整理为 y'−y/x=xe^(−x)，是一阶线性微分方程，积分因子为 1/x。",
    "methods": "除以 −x 或整理标准形式，取积分因子 μ=1/x，解得 y=x(C−e^(−x))。",
    "pitfalls": "标准式符号容易错；积分因子为 exp∫(−1/x)dx=1/|x|，在不跨 x=0 的区间取 1/x。"
  },
  "334": {
    "status": "verified",
    "questionKey": "2008-填空题-11",
    "primary": [
      "CAL-04-D"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "曲线由 F(x,y)=0 确定，利用隐函数求导得到切线斜率，再代入点 (0,1)。",
    "methods": "对 sin(xy)+ln(y−x)=0 两边求导，解出 y' 并代点。",
    "pitfalls": "对 ln(y−x) 求导为 (y'−1)/(y−x)，不能漏掉内层导数。"
  },
  "335": {
    "status": "verified",
    "questionKey": "2008-填空题-12",
    "primary": [
      "CAL-05-G"
    ],
    "secondary": [
      "CAL-05-C"
    ],
    "rationale": "二阶导数符号在 x=−1 处改变，故该点为拐点；x=0 处二阶导不存在但不变号，不是拐点。",
    "methods": "求 f''，考察其在 −1、0 两侧的符号，再求 f(−1)。",
    "pitfalls": "二阶导不存在不自动构成拐点；必须检查凹凸性是否改变。"
  },
  "336": {
    "status": "verified",
    "questionKey": "2008-填空题-13",
    "primary": [
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "对 z=(y/x)^(x/y) 取对数，将幂函数转化为乘积后求偏导，再代入 (1,2)。",
    "methods": "写 ln z=(x/y)ln(y/x)，对 x 求偏导并乘回 z。",
    "pitfalls": "对数求导后要乘回 z；偏导时 y 视为常数。"
  },
  "337": {
    "status": "verified",
    "questionKey": "2008-填空题-14",
    "primary": [
      "LA-01-E"
    ],
    "secondary": [
      "LA-05-D"
    ],
    "rationale": "三阶矩阵满足 |2A|=2³|A|，且行列式等于特征值乘积 6λ，由此解出 λ。",
    "methods": "先用 |2A|=8|A|，再用 |A|=λ·2·3。",
    "pitfalls": "矩阵阶数为3，数乘行列式的系数是 2³ 而不是 2。"
  },
  "338": {
    "status": "verified",
    "questionKey": "2008-解答题-15",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-02-E"
    ],
    "rationale": "利用 sin u 的麦克劳林展开，比较 sin x 与 sin(sin x) 的首个非零差项，阶数为 x⁴。",
    "methods": "展开 sin x=x−x³/6+…，再把 sin x 代入 sin u 展开至四阶。",
    "pitfalls": "低阶项抵消，必须保留到 x⁴；不能只做 sin x~x 的一阶替换。"
  },
  "339": {
    "status": "verified",
    "questionKey": "2008-解答题-16",
    "primary": [
      "CAL-04-E"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "参数曲线的二阶导数由 (d/dt(dy/dx))/(dx/dt) 得到；先解初值微分方程求 x(t)。",
    "methods": "解 e^x=1+t²，计算 x'、y'，先求 dy/dx，再对 t 求导除以 x'。",
    "pitfalls": "二阶参数导数不是简单的 y''(t)/x'(t)；需对 dy/dx 再按 x 求导。"
  },
  "340": {
    "status": "verified",
    "questionKey": "2008-解答题-17",
    "primary": [
      "CAL-06-G"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "令 t=arcsin x 消去根式，积分化为 ∫t sin²t dt，再用分部积分求值。",
    "methods": "作 x=sin t，t∈[0,π/2]，将 sin²t 化为 (1−cos2t)/2。",
    "pitfalls": "换元后上下限同步变为 0、π/2；分部积分时注意端点项。"
  },
  "341": {
    "status": "verified",
    "questionKey": "2008-解答题-18",
    "primary": [
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-08-F"
    ],
    "rationale": "曲线 xy=1 将正方形区域分成 xy≤1 与 xy≥1 两块，按 x 分段建立累次积分。",
    "methods": "先求曲线与 y=2 的交点 x=1/2，再按 x∈[0,1/2]、[1/2,2] 分段积分。",
    "pitfalls": "max{xy,1} 的取值区域不能颠倒；分界曲线在正方形内只从 x=1/2 起进入。"
  },
  "342": {
    "status": "verified",
    "questionKey": "2008-解答题-19",
    "primary": [
      "CAL-07-A"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "由侧面积与体积对任意上限 t 相等的关系求导，得到一阶可分离方程 f'=√(f²−1)，结合初值求双曲余弦形式。",
    "methods": "分别写 S(t)、V(t)，对 S=2V 求导，分离变量并使用 f(0)=1。",
    "pitfalls": "f 单调增加且 f(0)=1，选择非负平方根；还要检验所得函数满足原积分恒等式。"
  },
  "343": {
    "status": "verified",
    "questionKey": "2008-解答题-20",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-05-E"
    ],
    "rationale": "第一问用最大最小值定理与介值定理证明积分中值定理；第二问由积分中值定理选取 η，再两次拉格朗日中值定理得到导数先正后负，推出二阶导数某处为负。",
    "methods": "先证明平均值位于 m、M 之间；再在 [1,2]、[2,η] 分别用拉格朗日定理，最后对 φ' 再用中值定理。",
    "pitfalls": "积分中值点 η 可能为端点，需结合严格不等式排除 η=2、3 的退化情形；导数点次序要按区间位置排列。"
  },
  "344": {
    "status": "verified",
    "questionKey": "2008-解答题-21",
    "primary": [
      "CAL-08-D"
    ],
    "secondary": [
      "CAL-08-C"
    ],
    "rationale": "两个约束可先消去 z，化为圆周约束下的函数极值问题；用拉格朗日乘数求驻点并比较函数值。",
    "methods": "由 z=x²+y² 与 x+y+z=4 得约束曲线，代入 u 后求驻点并比较。",
    "pitfalls": "需确认约束集合是否紧致、驻点是否穷尽；最大最小值不能只凭驻点名称断定。"
  },
  "345": {
    "status": "verified",
    "questionKey": "2008-解答题-22",
    "primary": [
      "LA-01-D"
    ],
    "secondary": [
      "LA-04-A"
    ],
    "rationale": "三对角行列式按末行展开得到二阶递推，归纳证明 D_n=(n+1)a^n；唯一解由行列式非零判断，a=0 时分析退化方程组。",
    "methods": "建立 D_n=2aD_{n−1}−a²D_{n−2}，用初值归纳；再用克莱姆法则求 x₁。",
    "pitfalls": "a=0 时矩阵奇异但仍需检查方程组相容性；不能把行列式为零直接等同于无穷多解。"
  },
  "346": {
    "status": "verified",
    "questionKey": "2008-解答题-23",
    "primary": [
      "LA-05-A"
    ],
    "secondary": [
      "LA-05-B"
    ],
    "rationale": "由 Aα₃=α₂+α₃ 得 α₃ 是广义特征向量；利用特征值 −1、1 的向量独立性证明三向量构成基，并写出 Jordan 形式。",
    "methods": "设线性组合为零，两边左乘 A 并相减；再按 A 对各列向量的作用写出 PAP⁻¹ 的列坐标矩阵。",
    "pitfalls": "α₃ 不是普通特征向量；第三列坐标为 (0,1,1)，因此 Jordan 块的超对角元为1。"
  },
  "347": {
    "status": "verified",
    "questionKey": "2009-选择题-1",
    "primary": [
      "CAL-03-B"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "分母在整数点为零，分子同时为零的整数点只有 −1、0、1；这些点经约分或极限均为可去间断点。",
    "methods": "先列出所有分母零点，再求分子零点集合并检查对应极限。",
    "pitfalls": "分母零点有无穷多个，但可去间断点只在分子也为零且极限有限的点。"
  },
  "348": {
    "status": "verified",
    "questionKey": "2009-选择题-2",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-02-E"
    ],
    "rationale": "等价无穷小要求两表达式首个非零项系数相同；展开 x−sin(ax) 与 x²ln(1−bx) 得到 a=1、b=−1/6。",
    "methods": "分别展开至三阶，比较 x 项与 x³ 项系数。",
    "pitfalls": "先令一次项抵消确定 a，再比较三次项；不能把 b 的负号遗漏。"
  },
  "349": {
    "status": "verified",
    "questionKey": "2009-选择题-3",
    "primary": [
      "CAL-08-D"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "全微分给出偏导 f_x=x、f_y=y，原点为驻点；Hessian 为单位矩阵正定，故原点为严格极小值点。",
    "methods": "由全微分读出一阶偏导，继续求二阶偏导并检验二元极值判别式。",
    "pitfalls": "仅凭一阶偏导为零不能判极值；需要二阶判别，且 A>0。"
  },
  "350": {
    "status": "verified",
    "questionKey": "2009-选择题-4",
    "primary": [
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-08-F"
    ],
    "rationale": "两个累次积分对应的区域可拼接成单一区域 1≤y≤2、1≤x≤4−y，按 y 先积即可。",
    "methods": "分别画出 y≤x≤2 与 y≤2、y≤x≤4−y 两块区域，合并后统一写成 y 外层。",
    "pitfalls": "核对第一项区域的边界 x≤2，第二项的上边界 4−y；不要误把外层变量写成 x。"
  },
  "351": {
    "status": "verified",
    "questionKey": "2009-选择题-5",
    "primary": [
      "CAL-05-G"
    ],
    "secondary": [
      "CAL-05-E"
    ],
    "rationale": "曲率圆在给定点的切线斜率确定 f'(1)=−1；由曲率圆位置及 f''不变号确定凹凸方向，推出 f'持续为负，再由中值定理得区间内有零点。",
    "methods": "由圆心和切点求切线斜率；判断 f''≤0，推出 f'≤−1；用 f(2)−f(1) 的估计和介值定理。",
    "pitfalls": "题目给的是曲率圆而非曲线本身；应先取圆在切点的切线方向，且 f''不变号需结合图示确定符号。"
  },
  "352": {
    "status": "verified",
    "questionKey": "2009-选择题-6",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-05-B",
      "CAL-03-B"
    ],
    "rationale": "原卷图显示f在[−1,0)为常数正值，在(0,1)为负，在(1,2)为正，在[2,3]为零。由F(x)=∫₀ˣf(t)dt，得x<0时F=x为负线段；(0,1)递减且为负；(1,2)递增；(2,3)保持常值。四个选项中只有D符合。",
    "methods": "利用变上限积分基本定理F′(x)=f(x)判断单调性；用定积分累积面积判断F的正负与连续性。",
    "pitfalls": "x<0时积分方向反转；即使f在0处间断，F仍连续。",
    "sourceUrl": "https://doc.kmf.com/ky_material/8b/1a/8b1ac02f8091b6be3d76dba35f00bfdc.pdf#page=1",
    "sourceLabel": "查看2009年原卷第6题图（PDF第1–2页）"
  },
  "353": {
    "status": "verified",
    "questionKey": "2009-选择题-7",
    "primary": [
      "LA-02-D"
    ],
    "secondary": [
      "LA-02-F"
    ],
    "rationale": "将分块矩阵 C 的逆写成交换位置的 A、B 逆块，再用 C*=|C|C⁻¹，利用二阶矩阵伴随关系得到所选结构。",
    "methods": "先求 |C|=|A||B|=6，再写 C⁻¹ 并乘以6，代入 A*=|A|A⁻¹、B*=|B|B⁻¹。",
    "pitfalls": "块矩阵逆的非零块位置会交换；系数 2、3 分别来自另一块矩阵的行列式。"
  },
  "354": {
    "status": "verified",
    "questionKey": "2009-选择题-8",
    "primary": [
      "LA-06-B"
    ],
    "secondary": [
      "LA-06-A"
    ],
    "rationale": "Q=P E，故 QᵀAQ=Eᵀ(PᵀAP)E；这是合同变换下的二次型矩阵变换。",
    "methods": "写出列变换矩阵 E，将给定对角矩阵左右分别乘 Eᵀ、E。",
    "pitfalls": "合同变换是 EᵀDE，不是 E⁻¹DE；不要与相似变换混淆。"
  },
  "355": {
    "status": "verified",
    "questionKey": "2009-填空题-9",
    "primary": [
      "CAL-04-E"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "参数曲线在 t=1 处通过原点，斜率为 (dy/dt)/(dx/dt)，由两导数之比得到切线。",
    "methods": "分别对两个参数表达式求导，代 t=1，求斜率并写过原点直线。",
    "pitfalls": "对积分上限 1−t 求导会出现负号；dy/dt 也要用乘积法则。"
  },
  "356": {
    "status": "verified",
    "questionKey": "2009-填空题-10",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "被积函数为偶函数，整个实轴积分化为两倍正半轴指数反常积分，收敛要求 k<0，再由积分值求 k。",
    "methods": "利用偶函数性质计算 2∫₀∞e^{kx}dx，并令结果等于1。",
    "pitfalls": "必须先给出 k<0 的收敛条件；k≥0 时积分发散。"
  },
  "357": {
    "status": "verified",
    "questionKey": "2009-填空题-11",
    "primary": [
      "CAL-06-D"
    ],
    "secondary": [
      "CAL-06-E"
    ],
    "rationale": "在有限区间上对 e^(−x)sin(nx) 分部积分或直接求原函数，得到分子有界、分母为 n²+1 的表达式，极限为零。",
    "methods": "对 sin(nx) 积分并分部积分，或计算精确表达式后估计 O(1/n)。",
    "pitfalls": "振荡项不能仅凭“振荡平均为零”作结论；需给出有界性或积分估计。"
  },
  "358": {
    "status": "verified",
    "questionKey": "2009-填空题-12",
    "primary": [
      "CAL-04-D"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "对隐式方程连续求两次导数，先由 x=0 得 y=0、y'=1，再代入二阶导数方程。",
    "methods": "第一次求导后再求导，保留 2y'、e^y(y')² 与 e^y y'' 项，最后代初值。",
    "pitfalls": "二次求导时 xy' 产生 y'+xy''，不可漏掉其中一个 y'。"
  },
  "359": {
    "status": "verified",
    "questionKey": "2009-填空题-13",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "对 y=x^(2x) 取对数得 ln y=2x ln x，求导确定唯一驻点 x=1/e，并结合端点与单调性确定最小值。",
    "methods": "对数求导得到 y'=x^(2x)(2ln x+2)，分析导数在 (0,1/e)、(1/e,1) 的符号。",
    "pitfalls": "区间左端 0 不属于定义域，需比较 x→0⁺ 的极限与驻点值；不能把 x=0 当可取端点。"
  },
  "360": {
    "status": "verified",
    "questionKey": "2009-填空题-14",
    "primary": [
      "LA-05-D"
    ],
    "secondary": [
      "LA-02-A"
    ],
    "rationale": "秩一外积矩阵的非零特征值等于迹，且 tr(αβᵀ)=βᵀα。",
    "methods": "利用相似不变量先读出特征值，再用迹等于特征值之和及外积迹公式求值。",
    "pitfalls": "不要把 αβᵀ 与 βᵀα 混为同阶矩阵；后者是标量。"
  },
  "361": {
    "status": "verified",
    "questionKey": "2009-解答题-15",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-01-G"
    ],
    "rationale": "分子由 1−cos x 与 x−ln(1+tan x) 的局部等价展开决定，分母 sin⁴x 与 x⁴ 等价。",
    "methods": "分别求两个因子的主阶：1−cos x~x²/2，x−ln(1+tan x)~x²/2，再相除。",
    "pitfalls": "必须展开到足以确定第二个因子的首个非零项，不能只用 tan x~x。"
  },
  "362": {
    "status": "verified",
    "questionKey": "2009-解答题-16",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-A"
    ],
    "rationale": "该不定积分先作根式代换，再用分部积分并进行有理函数部分分式分解。",
    "methods": "令 t=√((1+x)/x) 化简根式关系，对对数因子分部积分，最后部分分式积分并回代。",
    "pitfalls": "注意 x>0 的定义域及代换后的 t>1；回代时对数绝对值要结合定义域处理。"
  },
  "363": {
    "status": "verified",
    "questionKey": "2009-解答题-17",
    "primary": [
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "三元复合函数的两个中间变量分别为 x+y、x−y、xy，需用多元链式法则求一阶及混合二阶偏导。",
    "methods": "先列出各中间变量对 x、y 的偏导，再求 z_x、z_y；对 z_x 再关于 y 求导并合并二阶偏导项。",
    "pitfalls": "混合求导时不要漏掉系数 y 对 y 的导数所产生的 f₃′ 项。"
  },
  "364": {
    "status": "verified",
    "questionKey": "2009-解答题-18",
    "primary": [
      "CAL-07-D"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "先解二阶微分方程并利用过原点条件和面积积分确定常数，再用绕 y 轴旋转体积公式。",
    "methods": "令 p=y′，解 xp′−p+2=0 得 y=C₁+2x+C₂x²；代入边界及面积条件求常数，再用圆盘/垫片法积分。",
    "pitfalls": "旋转轴是 y 轴，半径应写成 x(y)；不能直接把 y 当半径。"
  },
  "365": {
    "status": "verified",
    "questionKey": "2009-解答题-19",
    "primary": [
      "CAL-08-F"
    ],
    "secondary": [
      "CAL-08-E"
    ],
    "rationale": "圆盘与半平面交域适合极坐标，面积元及被积函数需同步转换。",
    "methods": "设 x=r cosθ、y=r sinθ，由 y≥x 确定角域，由圆方程确定径向上界，再积分。",
    "pitfalls": "核对角域方向和径向边界；极坐标面积元包含 r。"
  },
  "366": {
    "status": "verified",
    "questionKey": "2009-解答题-20",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "左段由法线过原点得到一阶关系并积分；右段是二阶常系数非齐次方程，连接处用光滑条件确定常数。",
    "methods": "左段写法线斜率 −x/y=y′，积分得 x²+y²=C；右段解特征方程，并在 x=0 匹配函数值与一阶导数。",
    "pitfalls": "法线斜率是 −x/y，不是切线斜率 y/x；光滑连接至少匹配 y 与 y′。"
  },
  "367": {
    "status": "verified",
    "questionKey": "2009-解答题-21",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-03-C"
    ],
    "rationale": "第一问是拉格朗日中值定理；第二问将差商转化为区间内导数值并令端点趋近。",
    "methods": "构造减去割线的辅助函数用罗尔定理证明；第二问对 [0,x] 使用中值定理后取右极限。",
    "pitfalls": "需分别检查闭区间连续、开区间可导的条件，不能直接把导数极限当作端点导数。"
  },
  "368": {
    "status": "verified",
    "questionKey": "2009-解答题-22",
    "primary": [
      "LA-05-E"
    ],
    "secondary": [
      "LA-04-B"
    ],
    "rationale": "通过 Aξ₂=ξ₁、A²ξ₃=ξ₁ 构造广义特征向量链，并用行列式证明三向量线性无关。",
    "methods": "分别解两个线性方程组的通解，再把任意参数形式代入三阶行列式验证非零。",
    "pitfalls": "求 A²ξ₃ 时不能误写成 Aξ₃=ξ₁；需保留零空间中的任意参数。"
  },
  "369": {
    "status": "verified",
    "questionKey": "2009-解答题-23",
    "primary": [
      "LA-06-D"
    ],
    "secondary": [
      "LA-05-A"
    ],
    "rationale": "二次型矩阵为实对称矩阵，规范形的正负项数由特征值符号（惯性）决定。",
    "methods": "写出对称矩阵，求特征多项式与特征值；根据规范形有两个正项、一个零项筛选参数。",
    "pitfalls": "规范形系数的正负数目不等于特征值大小排序；零特征值必须单独检查。"
  },
  "370": {
    "status": "verified",
    "questionKey": "2010-选择题-1",
    "primary": [
      "CAL-03-B"
    ],
    "secondary": [
      "CAL-01-B"
    ],
    "rationale": "先确定定义域排除点，再比较各点左右极限以区分无穷间断点、跳跃间断点和可去间断点。",
    "methods": "因式约分后分别考察 x=0、1、−1 的单侧极限。",
    "pitfalls": "约分不代表原函数在被约掉的点有定义；左右极限必须分别判断。"
  },
  "371": {
    "status": "verified",
    "questionKey": "2010-选择题-2",
    "primary": [
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "两个非齐次特解的线性组合仍满足原方程需系数和为 1；组合成为齐次解需系数差为 0。",
    "methods": "利用线性微分算子作用于线性组合，分别比较非齐次项系数，解 λ=μ、λ+μ=1。",
    "pitfalls": "不要把齐次解空间的线性组合条件与非齐次方程特解条件混淆。"
  },
  "372": {
    "status": "verified",
    "questionKey": "2010-选择题-3",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "相切条件要求函数值相等且导数相等，联立确定切点与参数。",
    "methods": "分别求两曲线导数，令斜率相等，再代入两曲线方程求切点和 a。",
    "pitfalls": "只令导数相等不足以保证相切，还必须满足两曲线经过同一点。"
  },
  "373": {
    "status": "verified",
    "questionKey": "2010-选择题-4",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "反常积分的敛散性由两个端点的局部幂次/对数行为决定。",
    "methods": "在 x→0⁺ 用 ln(1−x)~−x 化为幂函数判别；在 x→1⁻ 用对数增长慢于任意负幂判断。",
    "pitfalls": "要分别检查 0 和 1 两个瑕点，不能只分析一个端点。"
  },
  "374": {
    "status": "verified",
    "questionKey": "2010-选择题-5",
    "primary": [
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "由 F(y/x,z/x)=0 隐式确定 z，需对 x、y 求偏导并组合成齐次函数的欧拉型关系。",
    "methods": "分别隐式求 z_x、z_y，代入 xz_x+yz_y，消去 F₁′ 项得到 z。",
    "pitfalls": "链式求导时 y/x、z/x 对 x 的导数均带负号，注意整理。"
  },
  "375": {
    "status": "verified",
    "questionKey": "2010-选择题-6",
    "primary": [
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-02-A"
    ],
    "rationale": "双重求和拆成两个一维黎曼和，极限转化为单位正方形上的二重积分。",
    "methods": "将 n/((n+i)(n²+j²)) 拆成 1/(n+i) 与 n/(n²+j²) 的乘积求和，分别识别黎曼和。",
    "pitfalls": "求和指标 i、j 各自归一化；区域是 [0,1]×[0,1]，不是三角形。"
  },
  "376": {
    "status": "verified",
    "questionKey": "2010-选择题-7",
    "primary": [
      "LA-03-A"
    ],
    "secondary": [
      "LA-03-C"
    ],
    "rationale": "向量组 I 可由向量组 II 线性表示，意味着 I 的秩不超过 II 的秩，进而不超过向量个数 s。",
    "methods": "用秩不等式 r(I)≤r(II)≤s；若 I 线性无关则 r(I)=r。",
    "pitfalls": "线性相关只说明秩小于向量个数，不推出 r>s。"
  },
  "377": {
    "status": "verified",
    "questionKey": "2010-选择题-8",
    "primary": [
      "LA-05-C"
    ],
    "secondary": [
      "LA-05-A"
    ],
    "rationale": "实对称矩阵可正交对角化，且 A²+A=0 限制特征值只能为 0 或 −1；秩确定非零特征值个数。",
    "methods": "对特征值代入 λ²+λ=0，再由秩为 3 确定三个 −1 和一个 0。",
    "pitfalls": "题干选项问相似标准形，不能误把特征值 −1 写成 +1。"
  },
  "378": {
    "status": "verified",
    "questionKey": "2010-填空题-9",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "三阶常系数齐次方程通过特征方程分解为一个实根和一对共轭复根。",
    "methods": "写特征多项式并因式分解，按实根与复根写出指数、正弦和余弦解。",
    "pitfalls": "复根 ±i 对应 cos x、sin x 两个实线性无关解。"
  },
  "379": {
    "status": "verified",
    "questionKey": "2010-填空题-10",
    "primary": [
      "CAL-05-H"
    ],
    "secondary": [
      "CAL-05-C"
    ],
    "rationale": "斜渐近线由 y/x 的极限确定斜率，再由 y−kx 的极限确定截距。",
    "methods": "先求 k=lim(y/x)，再求 b=lim(y−kx)。",
    "pitfalls": "不能只求斜率而漏掉截距；还需区分 x→+∞ 与 x→−∞。"
  },
  "380": {
    "status": "verified",
    "questionKey": "2010-填空题-11",
    "primary": [
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "对数函数的高阶导数可按递推/公式求得，代入 x=0 得麦克劳林系数对应的导数值。",
    "methods": "连续求导归纳得到 y⁽ⁿ⁾(x)=−2ⁿ(n−1)!/(1−2x)ⁿ，再令 x=0。",
    "pitfalls": "n 阶导数与麦克劳林展开系数相差 n!，不要混用。"
  },
  "381": {
    "status": "verified",
    "questionKey": "2010-填空题-12",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-04-E"
    ],
    "rationale": "极坐标曲线弧长使用 √(r²+(r′)²) 的积分公式。",
    "methods": "由 r=e^θ 得 r′=e^θ，代入 0 到 π 的弧长积分。",
    "pitfalls": "极坐标弧长不是简单积分 r；必须包含 r′ 项。"
  },
  "382": {
    "status": "verified",
    "questionKey": "2010-填空题-13",
    "primary": [
      "CAL-04-B"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "对角线长度由勾股关系表示，对时间求导使用隐式求导/相关变化率。",
    "methods": "设 S²=l²+w²，两边对 t 求导，代入 l′、w′ 和瞬时长宽。",
    "pitfalls": "速率单位统一为 cm/s；不要把边长变化率直接相加。"
  },
  "383": {
    "status": "verified",
    "questionKey": "2010-填空题-14",
    "primary": [
      "LA-01-E"
    ],
    "secondary": [
      "LA-02-A"
    ],
    "rationale": "利用矩阵因式分解及行列式乘法、逆矩阵行列式公式计算目标行列式。",
    "methods": "将 A+B⁻¹ 写为 A(A⁻¹+B)B⁻¹，再对乘积取行列式。",
    "pitfalls": "矩阵乘法顺序不可交换；|B⁻¹|=1/|B|。"
  },
  "384": {
    "status": "verified",
    "questionKey": "2010-解答题-15",
    "primary": [
      "CAL-06-F"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "含变上限积分的函数先用莱布尼茨公式求导，再通过导数符号判断单调区间和极值。",
    "methods": "对积分上限 x² 求导并结合外层因子求 f′，分区间判断符号，再计算候选点函数值。",
    "pitfalls": "积分上限为 x²，链式法则必须乘 2x；极值点还需比较左右符号。"
  },
  "385": {
    "status": "verified",
    "questionKey": "2010-解答题-16",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "先利用 0<ln(1+t)<t 建立被积函数比较，再用夹逼定理求数列极限。",
    "methods": "对 0<t<1 建立 n 次幂不等式，积分后用 ∫₀¹tⁿ|ln t|dt=1/(n+1)² 夹逼。",
    "pitfalls": "比较时因子 |ln t| 非负；端点奇异性需确认积分收敛。"
  },
  "386": {
    "status": "verified",
    "questionKey": "2010-解答题-17",
    "primary": [
      "CAL-04-E"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "参数方程的二阶导数公式把 ψ 的导数联系起来，随后解一阶线性方程并用初值积分。",
    "methods": "先写 dy/dx=ψ′/x′，再求 d²y/dx²=(1/x′)d/dt(dy/dx)，解 ψ′ 的方程并积分。",
    "pitfalls": "二阶参数导数还需再除以 dx/dt；不能把 d²y/dx² 误当成 d²y/dt²。"
  },
  "387": {
    "status": "verified",
    "questionKey": "2010-解答题-18",
    "primary": [
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "椭圆截面油量由截面积二重积分/定积分求出，再乘柱体长度与密度。",
    "methods": "由椭圆方程解出横向半宽，对高度变量积分求截面积，最后乘 lρ。",
    "pitfalls": "油面高度 3b/2 对应积分上限 y=b/2（以椭圆中心为原点），注意坐标原点位置。"
  },
  "388": {
    "status": "verified",
    "questionKey": "2010-解答题-19",
    "primary": [
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "线性变量替换下二阶偏导按链式法则展开，令 ξξ、ηη 项系数为零以消去纯二阶项。",
    "methods": "分别写 ∂x、∂y 的算子表达式，代入原方程，解两个特征方向对应的二次方程并选不同根。",
    "pitfalls": "a、b 必须取不同根，否则变换退化；还需保证 ξ、η 独立。"
  },
  "389": {
    "status": "verified",
    "questionKey": "2010-解答题-20",
    "primary": [
      "CAL-08-F"
    ],
    "secondary": [
      "CAL-08-E"
    ],
    "rationale": "将极坐标区域与被积函数换成直角坐标后，得到简单三角域上的二重积分。",
    "methods": "用 x=r cosθ、y=r sinθ，结合 r≤secθ 转为 0≤y≤x≤1，再按次序积分。",
    "pitfalls": "原式已写 dr dθ 而非 dxdy，转换时要核对雅可比 r 是否已包含在被积表达式中。"
  },
  "390": {
    "status": "verified",
    "questionKey": "2010-解答题-21",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-05-D"
    ],
    "rationale": "构造 F(x)=f(x)−x³/3，使端点函数值相等，再在两个半区间分别使用拉格朗日中值定理。",
    "methods": "分别在 [0,1/2]、[1/2,1] 应用中值定理，所得差商相加为零。",
    "pitfalls": "第二段差商的端点顺序要与区间方向一致；最后代回 F′=f′−x²。"
  },
  "391": {
    "status": "verified",
    "questionKey": "2010-解答题-22",
    "primary": [
      "LA-04-D"
    ],
    "secondary": [
      "LA-04-C"
    ],
    "rationale": "方程组有两个不同解意味着相容且系数矩阵秩小于未知数个数，利用秩判定与行化简求参数及通解。",
    "methods": "令 det A=0 求 λ，再代入相容条件求 a；对增广矩阵消元并保留自由变量。",
    "pitfalls": "det A=0 只是必要条件，仍要检查增广矩阵秩相等。"
  },
  "392": {
    "status": "verified",
    "questionKey": "2010-解答题-23",
    "primary": [
      "LA-05-C"
    ],
    "secondary": [
      "LA-05-A"
    ],
    "rationale": "实对称矩阵的正交对角化以标准正交特征向量为列，已知列向量先确定参数，再求其余特征向量。",
    "methods": "由 Av=λv 比较分量求 a、特征值；在正交补空间求其余特征向量并单位化。",
    "pitfalls": "特征向量需单位化且两两正交；列顺序决定对角矩阵中特征值顺序。"
  },
  "393": {
    "status": "verified",
    "questionKey": "2011-选择题-1",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-05-D"
    ],
    "rationale": "三角函数差可用三倍角恒等式化为 4sin³x，再与 x³ 比较主阶。",
    "methods": "使用 sin3x=3sinx−4sin³x，得到 f(x)=4sin³x~4x³。",
    "pitfalls": "不要只分别对两项使用 sin x~x 后相减，会丢失首个非零阶。"
  },
  "394": {
    "status": "verified",
    "questionKey": "2011-选择题-2",
    "primary": [
      "CAL-04-A"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "由 f 在 0 可导且 f(0)=0，将两个分式分别改写为导数定义中的差商。",
    "methods": "拆成 [f(x)−f(0)]/x−2[f(x³)−f(0)]/x³，分别取极限。",
    "pitfalls": "第二项分母是 x³，必须以变量 h=x³ 识别导数定义。"
  },
  "395": {
    "status": "verified",
    "questionKey": "2011-选择题-3",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "驻点由一阶导数为零确定，对数绝对值求导后转化为有理函数分子方程。",
    "methods": "利用 ln|u|′=u′/u，求和后解二次方程并排除函数无定义点。",
    "pitfalls": "驻点必须在定义域内；x=1、2、3 是函数无定义点，不是驻点。"
  },
  "396": {
    "status": "verified",
    "questionKey": "2011-选择题-4",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "右端指数项与齐次方程特征根重复，待定特解需乘 x 消除共振。",
    "methods": "求特征根 ±λ，按待定系数法对两个共振指数项分别乘 x。",
    "pitfalls": "两个指数项都与齐次解重复，不能只给其中一项乘 x。"
  },
  "397": {
    "status": "verified",
    "questionKey": "2011-选择题-5",
    "primary": [
      "CAL-08-D"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "z=f(x)g(y) 的二元极值由 Hessian 判别式决定，混合偏导为零。",
    "methods": "计算 z_xx=f″g、z_yy=fg″、z_xy=0，要求 z_xx>0 且 z_xx z_yy>0。",
    "pitfalls": "注意 g(0)<0，乘积符号会反转 f″ 的条件。"
  },
  "398": {
    "status": "verified",
    "questionKey": "2011-选择题-6",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-06-E"
    ],
    "rationale": "三个定积分的被积函数在区间内可逐点比较，积分保序；端点的对数奇异性仍可积。",
    "methods": "由 sin x<cos x<1<cot x 及 ln 单调性，逐点比较后积分。",
    "pitfalls": "区间端点 x=0 处存在对数奇异性，但为可积瑕点；比较不等式在开区间成立即可。"
  },
  "399": {
    "status": "verified",
    "questionKey": "2011-选择题-7",
    "primary": [
      "LA-02-B"
    ],
    "secondary": [
      "LA-02-A"
    ],
    "rationale": "列变换对应右乘初等矩阵，行交换对应左乘置换矩阵，反向还原得到 A。",
    "methods": "由 AP₁=B、P₂B=I 得 B=P₂，进而 A=P₂P₁⁻¹。",
    "pitfalls": "行变换和列变换的乘法方向相反，不能将 P₁ 与 P₂ 的次序互换。"
  },
  "400": {
    "status": "verified",
    "questionKey": "2011-选择题-8",
    "primary": [
      "LA-02-D"
    ],
    "secondary": [
      "LA-04-B"
    ],
    "rationale": "Ax=0 的基础解系给出 α₁+α₃=0 且零空间维数为1，故 rank(A)=3；伴随矩阵在 rank(A)=n−1 时秩为1，其零空间为 A 的列空间。",
    "methods": "由 rank(A)=3 得 rank(A*)=1；利用 AA*=0，A 的三列均属于 A* 的零空间，再选出三列线性无关者。",
    "pitfalls": "不能把 rank(A*)误判为3；伴随矩阵秩公式依赖 rank(A)=n−1。"
  },
  "401": {
    "status": "verified",
    "questionKey": "2011-填空题-9",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-02-D"
    ],
    "rationale": "幂指函数取对数后化为 ln(1+2x)/x 的极限，使用重要极限或等价无穷小。",
    "methods": "令 L 为原极限，取对数得 ln L=lim ln(1+2x)/x=2。",
    "pitfalls": "不能直接把底数趋于1、指数趋于无穷分别代入；需先取对数。"
  },
  "402": {
    "status": "verified",
    "questionKey": "2011-填空题-10",
    "primary": [
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "一阶线性非齐次微分方程使用积分因子 e^{−∫p(x)dx}，再由初值确定常数。",
    "methods": "方程 y′−y=eˣcosx 的积分因子为 e⁻ˣ，积分后代入 y(0)=0。",
    "pitfalls": "积分因子符号要正确；初值条件用于确定齐次解常数。"
  },
  "403": {
    "status": "verified",
    "questionKey": "2011-填空题-11",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-04-E"
    ],
    "rationale": "曲线由变上限积分定义，先用微积分基本定理求 y′，再套用直角坐标弧长公式。",
    "methods": "y′=tan x，弧长为 ∫₀^{π/4}√(1+y′²)dx=∫sec x dx。",
    "pitfalls": "弧长积分是 √(1+(y′)²)，不是只积分 y′。"
  },
  "404": {
    "status": "verified",
    "questionKey": "2011-填空题-12",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "分段函数使积分区间缩为 (0,+∞)，计算指数权函数的一阶矩，属于反常积分与分部积分。",
    "methods": "计算 ∫₀∞ xλe^{−λx}dx，分部积分或变量代换 u=λx。",
    "pitfalls": "注意 λ>0 保证积分收敛；不要遗漏密度函数前的 λ。"
  },
  "405": {
    "status": "verified",
    "questionKey": "2011-填空题-13",
    "primary": [
      "CAL-08-F"
    ],
    "secondary": [
      "CAL-08-E"
    ],
    "rationale": "区域由圆、直线及坐标轴围成，极坐标下边界和面积元可直接表达。",
    "methods": "将圆化为 r=2sinθ，角度范围 π/4 到 π/2，积分 xy=r²cosθsinθ 并乘雅可比 r。",
    "pitfalls": "极坐标面积元为 r dr dθ；直线 y=x 对应 θ=π/4。"
  },
  "406": {
    "status": "verified",
    "questionKey": "2011-填空题-14",
    "primary": [
      "LA-06-D"
    ],
    "secondary": [
      "LA-06-B"
    ],
    "rationale": "二次型正惯性指数等于其对称矩阵正特征值个数，也等于合同标准形中的正平方项数。",
    "methods": "写出对称矩阵并求特征值 0、1、4，数出正特征值个数。",
    "pitfalls": "正惯性指数不等于矩阵秩；零特征值不计入正惯性指数。"
  },
  "407": {
    "status": "verified",
    "questionKey": "2011-解答题-15",
    "primary": [
      "CAL-02-D"
    ],
    "secondary": [
      "CAL-06-I"
    ],
    "rationale": "两个端点极限分别由 x→0 的对数等价展开和 x→∞ 的增长阶比较确定 a 的双侧约束。",
    "methods": "x→0 时积分分子约为 x³/3，要求 a<3；x→∞ 时分子约为 x ln x，要求 a>1。",
    "pitfalls": "两个极限必须同时满足；无穷远处积分增长量级是 x ln x，而非 ln x。"
  },
  "408": {
    "status": "verified",
    "questionKey": "2011-解答题-16",
    "primary": [
      "CAL-04-E"
    ],
    "secondary": [
      "CAL-05-F"
    ],
    "rationale": "参数方程的 dy/dx、d²y/dx² 分别用于极值、凹凸性和拐点判断。",
    "methods": "先求 dy/dx=(dy/dt)/(dx/dt)，再求二阶导数并分析 t 的符号，最后映射回坐标。",
    "pitfalls": "参数二阶导数要除以 dx/dt；极值点和拐点要报告对应 (x,y)，并检查参数区间。"
  },
  "409": {
    "status": "verified",
    "questionKey": "2011-解答题-17",
    "primary": [
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "z=f(xy,yg(x)) 是二元复合函数，混合偏导需两次链式法则，并利用 g 在 x=1 取极值推出 g′(1)=0。",
    "methods": "设 u=xy、v=yg(x)，先求 z_x，再对 y 求导；代入 x=y=1、g=1、g′=0。",
    "pitfalls": "不能把 g′(1) 当作 g(1)；混合偏导时要保留 f₁′ 与 f₁₁″、f₁₂″ 项。"
  },
  "410": {
    "status": "verified",
    "questionKey": "2011-解答题-18",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-07-A"
    ],
    "rationale": "切线倾角满足 y′=tanα，给定 α′=y′ 后转化为关于 p=y′ 的一阶微分方程。",
    "methods": "由 α=arctan y′ 得 y″/(1+(y′)²)=y′，令 p=y′分离变量，再积分并用原点切线条件确定常数。",
    "pitfalls": "倾角导数公式含 1/(1+(y′)²)；还需同时使用 y(0)=0、y′(0)=1。"
  },
  "411": {
    "status": "verified",
    "questionKey": "2011-解答题-19",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-01-J"
    ],
    "rationale": "对 ln(1+x) 使用拉格朗日中值定理建立调和项与对数增量的不等式，再证明 a_n 单调有下界。",
    "methods": "在 [0,1/n] 用中值定理；随后计算 a_{n+1}−a_n 并用不等式证明为负，证明 a_n>0。",
    "pitfalls": "单调递减本身不足以证明收敛，还必须给出下界。"
  },
  "412": {
    "status": "verified",
    "questionKey": "2011-解答题-20",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-08-E"
    ],
    "rationale": "旋转容器体积由横截面圆盘面积积分；抽水做功由薄片重量乘提升距离积分。",
    "methods": "按 y=1/2 分段写旋转半径平方，体积积分 πr²；做功积分再乘 ρg(2−y)。",
    "pitfalls": "分段曲面对应不同半径表达式；做功距离是顶部 y=2 与薄片高度之差。"
  },
  "413": {
    "status": "verified",
    "questionKey": "2011-解答题-21",
    "primary": [
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-06-G"
    ],
    "rationale": "对二重积分中的 f_xy 先后分部积分，利用两条边界上的函数值为零消去边界项。",
    "methods": "先对 y 积分并分部积分，再对 x 积分分部积分，留下 ∬_D f=a。",
    "pitfalls": "分部积分边界项要分别代入 f(1,y)=0 与 f(x,1)=0，不能省略边界条件。"
  },
  "414": {
    "status": "verified",
    "questionKey": "2011-解答题-22",
    "primary": [
      "LA-03-A"
    ],
    "secondary": [
      "LA-03-C"
    ],
    "rationale": "向量能否由另一向量组线性表示由矩阵秩/增广矩阵秩判定；随后求表示系数是线性方程组求解。",
    "methods": "把 α、β 向量按列组成矩阵，比较秩确定参数 a，再分别解系数方程写出 β 的线性组合。",
    "pitfalls": "题目陈述的“不能由向量组β线性表示”对应 α 组；注意不要把表示方向颠倒。"
  },
  "415": {
    "status": "verified",
    "questionKey": "2011-解答题-23",
    "primary": [
      "LA-05-C"
    ],
    "secondary": [
      "LA-05-A"
    ],
    "rationale": "实对称矩阵不同特征值的特征向量正交；已知作用关系和秩可确定三个特征值及正交特征基。",
    "methods": "由两列向量分别读出特征值 −1、1；秩为2推出第三特征值0，取其正交补方向，单位化后谱分解求 A。",
    "pitfalls": "秩为2只说明恰有两个非零特征值；利用实对称性保证特征向量正交。"
  },
  "416": {
    "status": "verified",
    "questionKey": "2012-选择题-1",
    "primary": [
      "CAL-05-H"
    ],
    "secondary": [
      "CAL-03-B"
    ],
    "rationale": "垂直渐近线由分母零点附近函数趋于无穷判断，水平渐近线由 x→±∞ 的函数极限判断。",
    "methods": "分别检查 x=1 及 x→±∞，约分后可见垂直渐近线 x=1、水平渐近线 y=1。",
    "pitfalls": "x=−1 是可去点，不应额外计为垂直渐近线。"
  },
  "417": {
    "status": "verified",
    "questionKey": "2012-选择题-2",
    "primary": [
      "CAL-04-B"
    ],
    "secondary": [
      "CAL-05-D"
    ],
    "rationale": "乘积含 n 个因子且 x=0 时仅首因子为零，求导后只有对首因子求导的那一项不消失。",
    "methods": "用乘积求导法则，令 x=0，得到 eˣ−1 的导数值1乘其余常数因子 (−2)…(−n)。",
    "pitfalls": "注意因子从 eˣ−1 开始，首因子导数为1；符号为 (−1)^{n−1}。"
  },
  "418": {
    "status": "verified",
    "questionKey": "2012-选择题-3",
    "primary": [
      "CAL-02-A"
    ],
    "secondary": [
      "CAL-01-J"
    ],
    "rationale": "正项数列部分和单调递增；若部分和有界则级数收敛，通项趋于0；反向不成立。",
    "methods": "利用 S_n 单调有界推出 S_n 收敛，再由 a_n=S_n−S_{n−1}→0；用 a_n=1 作反例。",
    "pitfalls": "区分“数列 a_n 收敛”与“级数 Σa_n 收敛”，二者不是同一命题。"
  },
  "419": {
    "status": "verified",
    "questionKey": "2012-选择题-4",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "把积分上限 k 看作变量，变上限积分求导得到 I′(k)=eᵏsin k，在 1、2、3 所在区间为正。",
    "methods": "由牛顿—莱布尼茨公式求 I′(k)，利用 (0,π) 上 sin k>0 比较三个取值。",
    "pitfalls": "题目选项 A 与 D 文本相同但选项标记不同；按题库解析选择 D，源选项重复需注意。"
  },
  "420": {
    "status": "verified",
    "questionKey": "2012-选择题-5",
    "primary": [
      "CAL-08-A"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "偏导数符号确定二元函数分别关于 x 单调递增、关于 y 单调递减，比较两个点的坐标方向即可。",
    "methods": "先固定 y 比较 x，再固定 x 比较 y；x₁<x₂ 且 y₁>y₂ 时函数值严格增加。",
    "pitfalls": "不能只比较一个坐标；两次单调性比较方向必须一致。"
  },
  "421": {
    "status": "verified",
    "questionKey": "2012-选择题-6",
    "primary": [
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-06-E"
    ],
    "rationale": "区域关于 y 轴对称，而 x⁵y 关于 x 为奇函数，积分为零，剩余项为区域面积的相反数。",
    "methods": "利用对称性消去 ∬x⁵y，再计算区域 D 面积为 π。",
    "pitfalls": "对称性只消去奇函数部分；常数 −1 的积分仍等于负面积。"
  },
  "422": {
    "status": "verified",
    "questionKey": "2012-选择题-7",
    "primary": [
      "LA-03-B"
    ],
    "secondary": [
      "LA-03-A"
    ],
    "rationale": "三向量在三维空间线性相关等价于以它们为列的行列式为零；某一选项的前两行成比例。",
    "methods": "逐项考察三阶行列式，选项 C 中 α₁、α₃、α₄ 的第二行与第一行成比例，行列式恒为0。",
    "pitfalls": "题设 c_i 任意，判断必须对所有参数都成立，不能依赖某个特定 c 值。"
  },
  "423": {
    "status": "verified",
    "questionKey": "2012-选择题-8",
    "primary": [
      "LA-05-F"
    ],
    "secondary": [
      "LA-05-B"
    ],
    "rationale": "P、Q 是两组基底矩阵，Q=P S，故新基底下矩阵为 S⁻¹(P⁻¹AP)S；相似变换保持线性算子表示关系。",
    "methods": "写出 S 的列变换矩阵并计算 S⁻¹ diag(1,1,2) S，得到原对角矩阵不变。",
    "pitfalls": "不要误把 Q=P S 写成 S P；相似变换左右乘顺序不可颠倒。"
  },
  "424": {
    "status": "verified",
    "questionKey": "2012-填空题-9",
    "primary": [
      "CAL-04-D"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "隐函数二阶导数通过连续两次对方程求导得到，需先求 y(0) 和 y′(0)。",
    "methods": "代入 x=0 解 y=0；一阶求导得 y′=0，再二阶求导代值得 y″=1。",
    "pitfalls": "二阶求导时 eʸy′ 的导数需用乘积/链式法则，包含 eʸ(y′)² 与 eʸy″。"
  },
  "425": {
    "status": "verified",
    "questionKey": "2012-填空题-10",
    "primary": [
      "CAL-02-A"
    ],
    "secondary": [
      "CAL-06-E"
    ],
    "rationale": "表达式可整理为黎曼和 n⁻¹Σ[1/(1+(i/n)²)]，极限是区间 [0,1] 上的定积分。",
    "methods": "识别网格宽度 1/n 和函数 f(x)=1/(1+x²)，积分后为 arctan(1)−arctan(0)。",
    "pitfalls": "注意外部 n 与分母 n² 的配比，化成 1/n 的黎曼和。"
  },
  "426": {
    "status": "verified",
    "questionKey": "2012-填空题-11",
    "primary": [
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "z=f(u)，u=ln x+1/y，两个偏导由链式法则产生相反项，按题目系数加权后抵消。",
    "methods": "求 z_x=f′(u)/x、z_y=−f′(u)/y²，再分别乘 x、y² 相加。",
    "pitfalls": "第二项负号来自 d(1/y)/dy=−1/y²。"
  },
  "427": {
    "status": "verified",
    "questionKey": "2012-填空题-12",
    "primary": [
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "将 x 视为 y 的函数后得到一阶线性微分方程，积分因子为 y。",
    "methods": "整理 dx/dy+x/y=3y，乘以 y 后积分得 xy=y³+C，利用 x=y=1 确定 C=0。",
    "pitfalls": "初始条件写作 x=1 时 y=1；转换自变量后不要把 dx/dy 与 dy/dx 混淆。"
  },
  "428": {
    "status": "verified",
    "questionKey": "2012-填空题-13",
    "primary": [
      "CAL-05-G"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "曲率由 y′、y″ 决定，给定曲率后解出候选 x，再结合 x<0 选点。",
    "methods": "计算 y′=2x+1、y″=2，代入 |y″|/[1+(y′)²]^{3/2}，解方程并筛选定义区间。",
    "pitfalls": "曲率公式分母是 [1+(y′)²]^{3/2}；候选 x=0 被 x<0 排除。"
  },
  "429": {
    "status": "verified",
    "questionKey": "2012-填空题-14",
    "primary": [
      "LA-01-E"
    ],
    "secondary": [
      "LA-02-D"
    ],
    "rationale": "交换两行使行列式变号；伴随矩阵满足 AA*=|A|I，结合行列式乘法求积。",
    "methods": "B=E₁₂A，故 BA*=E₁₂(AA*)=3E₁₂；三阶矩阵整体乘3使行列式乘3³。",
    "pitfalls": "行交换矩阵行列式为−1；标量乘 n 阶矩阵的行列式乘标量的 n 次方。"
  },
  "430": {
    "status": "verified",
    "questionKey": "2012-解答题-15",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-05-D"
    ],
    "rationale": "先求函数极限，再用 sin x 的泰勒展开确定 f(x)−a 的首个非零阶。",
    "methods": "化简 f−1=(x−sin x)/(x sin x)，利用 x−sin x~x³/6、x sin x~x²，得到同阶于 x。",
    "pitfalls": "极限值 a 要先正确分离；同阶无穷小的阶数由首个非零项决定。"
  },
  "431": {
    "status": "verified",
    "questionKey": "2012-解答题-16",
    "primary": [
      "CAL-08-D"
    ],
    "secondary": [
      "CAL-08-C"
    ],
    "rationale": "二元函数极值先解驻点方程，再用 Hessian 二阶判别或函数结构确定极大、极小。",
    "methods": "求 f_x、f_y 得驻点 (±1,0)，计算二阶偏导判别并代入函数值。",
    "pitfalls": "指数因子始终为正；求 f_y=0 时需与 f_x=0 联立，不能遗漏 x=0 情形的检验。"
  },
  "432": {
    "status": "verified",
    "questionKey": "2012-解答题-17",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "切点由切线经过指定点确定，区域面积用曲线反函数积分，旋转体体积用圆盘/垫片积分。",
    "methods": "设切点 x₀，令切线过 (0,1) 求 x₀=e²；分别建立面积与绕 x 轴旋转体积积分。",
    "pitfalls": "注意切点坐标为 (e²,2)，曲线与 x 轴交点为 (1,0)；体积积分需区分内外边界。"
  },
  "433": {
    "status": "verified",
    "questionKey": "2012-解答题-18",
    "primary": [
      "CAL-08-F"
    ],
    "secondary": [
      "CAL-08-E"
    ],
    "rationale": "心形线极坐标区域直接按 r、θ 积分，xy 转换为 r²cosθsinθ 并乘面积元 r。",
    "methods": "代入 r 上限 1+cosθ，先对 r 积分，再计算角积分。",
    "pitfalls": "极坐标变换中 xy=r²cosθsinθ，dσ=r dr dθ，径向幂次为 r³。"
  },
  "434": {
    "status": "verified",
    "questionKey": "2012-解答题-19",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-05-G"
    ],
    "rationale": "先由二阶常系数齐次方程和附加关系确定 f(x)，再对复合积分表达式求二阶导数判断拐点。",
    "methods": "解特征方程得 f=C₁eˣ+C₂e⁻²ˣ，代入 f′+f=2eˣ；再求曲线 y′′ 并分析符号。",
    "pitfalls": "第二问的积分上限 x 和被积函数 e⁻ᵗ² 都要参与求导；拐点需验证凹凸性改变。"
  },
  "435": {
    "status": "verified",
    "questionKey": "2012-解答题-20",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "不等式证明可构造差函数，利用其偶/奇对称性及导数符号证明在零点取最小值。",
    "methods": "令 F(x) 为左边减右边，求导并证明 x>0 时 F′≥0、x<0 时 F′≤0，结合 F(0)=0。",
    "pitfalls": "导数符号需在两个区间分别证明；定义域为 −1<x<1。"
  },
  "436": {
    "status": "verified",
    "questionKey": "2012-解答题-21",
    "primary": [
      "CAL-03-C"
    ],
    "secondary": [
      "CAL-02-A"
    ],
    "rationale": "连续函数零点定理与严格单调性证明根存在唯一；再利用方程和单调有界性求根列极限。",
    "methods": "先比较 f(1/2)、f(1) 并证明 f′>0；再证明 x_n 单调有界，取极限代入几何级数关系。",
    "pitfalls": "极限过程中需说明 x_n^n→0 或从等式推出所需关系，不能直接把 n 次幂当作常数。"
  },
  "437": {
    "status": "verified",
    "questionKey": "2012-解答题-22",
    "primary": [
      "LA-01-A"
    ],
    "secondary": [
      "LA-04-D"
    ],
    "rationale": "无穷多解要求系数矩阵奇异且增广矩阵秩等于系数矩阵秩；参数由行列式和相容条件确定。",
    "methods": "计算 det A=1−a⁴，结合增广矩阵相容条件求 a=−1，再行化简求通解。",
    "pitfalls": "det A=0 不是充分条件；还要检验增广矩阵秩相等并写出自由变量。"
  },
  "438": {
    "status": "verified",
    "questionKey": "2012-解答题-23",
    "primary": [
      "LA-05-C"
    ],
    "secondary": [
      "LA-06-B"
    ],
    "rationale": "AᵀA 为实对称半正定矩阵，可正交对角化；二次型标准形由其非负特征值决定。",
    "methods": "利用 rank(AᵀA)=rank(A) 求 a，再求 B=AᵀA 的特征值和正交单位特征向量，构造 Q。",
    "pitfalls": "正交变换矩阵的列必须单位正交；特征值与特征向量列顺序必须一一对应。"
  },
  "439": {
    "status": "verified",
    "questionKey": "2013-选择题-1",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-01-G"
    ],
    "rationale": "由定义式求 sinα(x)/x 的极限，再利用 α→0 时 sinα~α，比较 α 与 x 的阶及等价性。",
    "methods": "两边除以 x² 得 sinα/x=(cosx−1)/x²→−1/2，推出 α/x→−1/2。",
    "pitfalls": "先由 sinα→0 且 |α|<π/2 推出 α→0，再使用 sinα~α；极限 −1/2 表示同阶但不等价。"
  },
  "440": {
    "status": "verified",
    "questionKey": "2013-选择题-2",
    "primary": [
      "CAL-04-C",
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-04-A",
      "CAL-02-C"
    ],
    "rationale": "方程隐式确定 y=f(x)，先在基点求 y 值，再对方程作隐函数求导得到 f'(0)，最后用导数定义型极限。",
    "methods": "先代 x=0 求 y=1；对 cos(xy)-ln y+x=1 两边求导；代入 (0,1) 求 f'(0)，将 n[f(2/n)-f(0)] 化为 2f'(0)。",
    "pitfalls": "隐函数求导时乘积 xy 要用乘积法则；ln y 的导数为 y'/y；不要把 n[f(2/n)-f(0)]误当作 f'(0)。"
  },
  "441": {
    "status": "verified",
    "questionKey": "2013-选择题-3",
    "primary": [
      "CAL-06-C",
      "CAL-03-A"
    ],
    "secondary": [
      "CAL-04-A",
      "CAL-03-B"
    ],
    "rationale": "变上限积分函数的连续性与可导性由被积函数在对应点的连续性决定；此题积分累积值连续，但左右被积函数极限不同，导致左右导数不同。",
    "methods": "分段积分写出 F(x)；分别计算 x→π 左右极限验证连续；用左右导数或积分平均变化率比较导数。",
    "pitfalls": "被积函数在 π 处跳跃不代表积分函数也跳跃；连续与可导必须分别判断。"
  },
  "442": {
    "status": "verified",
    "questionKey": "2013-选择题-4",
    "primary": [
      "CAL-06-I",
      "CAL-02-E"
    ],
    "secondary": [
      "CAL-06-A",
      "CAL-02-D"
    ],
    "rationale": "无穷区间积分与有限端点瑕积分须分别检验；两段分别化为幂函数型判敛条件，收敛要求同时成立。",
    "methods": "拆成 (1,e) 与 (e,+∞) 两段；第一段比较 (x-1)^(1-α)，第二段令 u=ln x 得到 ∫u^(-α-1)du；合并 α<2 与 α>0。",
    "pitfalls": "两端的敛散条件不能只检查一端；幂积分在零点和无穷远处的指数判据方向不同。"
  },
  "443": {
    "status": "verified",
    "questionKey": "2013-选择题-5",
    "primary": [
      "CAL-08-A",
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-04-B",
      "CAL-04-C"
    ],
    "rationale": "表达式含 y/x 与复合变量 xy，需分别对 x、y 求偏导，再按给定线性组合消去 f(xy) 项。",
    "methods": "固定另一变量求偏导；对 y/x 用商/乘积法则，对 f(xy) 用链式法则；代入组合并合并同类项。",
    "pitfalls": "偏导时另一变量视为常数；不要漏掉 y/x 对 x 求导产生的负项。"
  },
  "444": {
    "status": "verified",
    "questionKey": "2013-选择题-6",
    "primary": [
      "CAL-08-E",
      "CAL-08-F"
    ],
    "secondary": [
      "CAL-06-C",
      "CAL-08-C"
    ],
    "rationale": "圆域四象限积分适合极坐标；雅可比因子 r 与被积函数中的 r 合并后，符号由各象限角区间决定。",
    "methods": "令 x=r cosθ、y=r sinθ，dxdy=r drdθ；按四个象限分别积分 sinθ-cosθ，并比较正负。",
    "pitfalls": "极坐标面积元不能漏掉 r；不能仅凭象限判断 y-x 的符号，因为象限内部还会跨越 y=x。"
  },
  "445": {
    "status": "verified",
    "questionKey": "2013-选择题-7",
    "primary": [
      "LA-03-D",
      "LA-03-E"
    ],
    "secondary": [
      "LA-02-A",
      "LA-02-C"
    ],
    "rationale": "右乘可逆矩阵等价于对列向量组作可逆线性组合，因此 A 与 AB 的列向量组可相互线性表示，列向量组等价。",
    "methods": "由 C=AB 得 C 的列由 A 的列线性表示；再由 A=CB⁻¹ 得反向表示。",
    "pitfalls": "右乘影响列向量组；不要误把结论套到行向量组。"
  },
  "446": {
    "status": "verified",
    "questionKey": "2013-选择题-8",
    "primary": [
      "LA-05-B",
      "LA-05-F"
    ],
    "secondary": [
      "LA-05-A",
      "LA-05-C"
    ],
    "rationale": "相似矩阵具有相同特征多项式；第一矩阵实对称可对角化，比较特征值多重集即可得到参数条件。",
    "methods": "计算特征多项式并与目标对角矩阵的特征值集合比较；由括号中的二次因式恒等条件解出 a、b。",
    "pitfalls": "相似要求特征值及代数重数一致；不能只比较迹或行列式，也不能把实对称矩阵的正交对角化条件误用为任意矩阵。"
  },
  "447": {
    "status": "verified",
    "questionKey": "2013-填空题-9",
    "primary": [
      "CAL-02-C",
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-01-G",
      "CAL-02-D"
    ],
    "rationale": "这是 1^∞ 型极限，取对数后转化为商式；利用 ln(1+u) 与 ln(1+x) 的二阶展开提取二阶项。",
    "methods": "设极限为 L，取 ln；将底数写成 1+u(x)，再用 ln(1+u)~u；对 ln(1+x) 作展开求极限。",
    "pitfalls": "不能直接把底数趋于 2 后认为幂极限为 1；关键是底数与指数同时变化，需取对数。"
  },
  "448": {
    "status": "verified",
    "questionKey": "2013-填空题-10",
    "primary": [
      "CAL-06-F",
      "CAL-04-A"
    ],
    "secondary": [
      "CAL-01-C",
      "CAL-06-C"
    ],
    "rationale": "由微积分基本定理求 y'=f'(x)，再用反函数求导公式 dx/dy=1/(dy/dx)，并确定 y=0 对应 x=-1。",
    "methods": "先由积分下限确定 f(-1)=0；求 f'(x)=√(1-e^x)；在 x=-1 处取倒数。",
    "pitfalls": "反函数导数要在对应原函数点计算；不要把 y=0 错配为 x=0。"
  },
  "449": {
    "status": "verified",
    "questionKey": "2013-填空题-11",
    "primary": [
      "CAL-08-F",
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-08-E",
      "CAL-02-C"
    ],
    "rationale": "极坐标曲线围成面积使用 S=1/2∫r²dθ；对称区间可化简 cos² 的积分。",
    "methods": "代入 r=cos3θ，使用极坐标面积公式；利用偶函数对称性并用 cos²u=(1+cos2u)/2 积分。",
    "pitfalls": "面积公式含 1/2 和 r²；确认 θ 区间只描绘一次封闭图形。"
  },
  "450": {
    "status": "verified",
    "questionKey": "2013-填空题-12",
    "primary": [
      "CAL-04-E",
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-A",
      "CAL-05-C"
    ],
    "rationale": "参数曲线先用 dy/dx=(dy/dt)/(dx/dt) 求切线斜率，再取负倒数得到法线斜率。",
    "methods": "求 x(t)、y(t) 的导数；在 t=1 求点坐标和切线斜率；法线斜率取负倒数后写点斜式。",
    "pitfalls": "法线斜率不是切线斜率；参数方程中必须先求导数之比。"
  },
  "451": {
    "status": "verified",
    "questionKey": "2013-填空题-13",
    "primary": [
      "CAL-07-C",
      "CAL-07-D"
    ],
    "secondary": [
      "CAL-07-B",
      "CAL-05-B"
    ],
    "rationale": "三个给定解可识别齐次解与一个非齐次特解，通解由两个独立齐次解的线性组合加特解构成，再用初值确定常数。",
    "methods": "观察 e^(3x)、e^x 为齐次解，-xe^(2x) 为特解；写通解并代入 y(0)、y'(0) 解 C1、C2。",
    "pitfalls": "非齐次方程通解不能只写齐次解；特解前的符号要保留，两个初值要分别代入。"
  },
  "452": {
    "status": "verified",
    "questionKey": "2013-填空题-14",
    "primary": [
      "LA-01-B",
      "LA-02-D"
    ],
    "secondary": [
      "LA-01-A",
      "LA-01-C"
    ],
    "rationale": "元素与对应代数余子式满足 A_ij=-a_ij，可用行列式按行展开及伴随矩阵恒等式建立 det(A) 的方程。",
    "methods": "按固定行展开得 detA=-Σa_ij²；由 A^T=-A* 取行列式，结合 det(A*)=(detA)² 解出 detA。",
    "pitfalls": "伴随矩阵符号与转置关系要准确；非零矩阵保证平方和严格为正，排除 detA=0。"
  },
  "453": {
    "status": "verified",
    "questionKey": "2013-解答题-15",
    "primary": [
      "CAL-02-C",
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-02-E",
      "CAL-01-G"
    ],
    "rationale": "利用 1-cos(kx)~k²x²/2，乘积差拆成三项，首个非零阶均为 x²，系数相加。",
    "methods": "按 1-abc=(1-a)+a(1-b)+ab(1-c) 拆开；分别作等价无穷小替换，求出总系数 7。",
    "pitfalls": "不能把三个余弦因子直接相加；需使用乘积差分解，并确认高阶乘积项不影响二阶主项。"
  },
  "454": {
    "status": "verified",
    "questionKey": "2013-解答题-16",
    "primary": [
      "CAL-06-C",
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-08-F",
      "CAL-06-B"
    ],
    "rationale": "绕 x 轴用圆盘法，绕 y 轴用柱壳法，建立两个体积积分后由比例方程求 a。",
    "methods": "计算 Vx=π∫y²dx；Vy=2π∫x y dx；代入 y=x^(1/3)，令 Vy=10Vx 解 a。",
    "pitfalls": "旋转轴不同，积分变量与截面公式不同；柱壳法需有额外的半径因子 x。"
  },
  "455": {
    "status": "verified",
    "questionKey": "2013-解答题-17",
    "primary": [
      "CAL-08-E",
      "CAL-08-C"
    ],
    "secondary": [
      "CAL-06-C",
      "CAL-08-F"
    ],
    "rationale": "区域由两条射线和截线围成，需按边界切换点分段建立二重积分；被积函数 x² 对 y 积分可先简化。",
    "methods": "求直线交点及与 x+y=8 的交点；按 x=2 分段写 y 上下限；分别积分并相加。",
    "pitfalls": "分段点来自上边界切换；积分限次序与区域几何必须一致。"
  },
  "456": {
    "status": "verified",
    "questionKey": "2013-解答题-18",
    "primary": [
      "CAL-05-A",
      "CAL-05-E"
    ],
    "secondary": [
      "CAL-05-B",
      "CAL-03-C"
    ],
    "rationale": "第一问构造 F=f-x，利用奇函数 f(0)=0 和 f(1)=1 得端点相等，应用罗尔定理；第二问构造指数因子辅助函数再次应用罗尔定理。",
    "methods": "先在 [0,1] 对 F 使用罗尔定理；再利用 f' 为偶函数构造 G=e^x(f'-1)，在 [-ξ,ξ] 使用罗尔定理，并利用对称性把点定位到正半轴。",
    "pitfalls": "第二问罗尔定理先得到 η∈(-ξ,ξ)，还需借助 G' 的对称/符号论证保证题设结论在 (0,1)；注意原解析在此处存在逻辑跳步，建议标记解析待复核。"
  },
  "457": {
    "status": "verified",
    "questionKey": "2013-解答题-19",
    "primary": [
      "CAL-08-D",
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-05-B",
      "CAL-05-F"
    ],
    "rationale": "目标是约束曲线上的距离平方极值，可用拉格朗日乘数法求内部驻点，再结合边界端点比较。",
    "methods": "令 g=x²+y²，约束 h=x³-xy+y³=1；列 ∇g=λ∇h，结合 x,y≥0 化简候选点；检查边界端点并比较距离。",
    "pitfalls": "距离与距离平方极值点相同；驻点不能替代边界检查，约束曲线端点也要纳入。"
  },
  "458": {
    "status": "verified",
    "questionKey": "2013-解答题-20",
    "primary": [
      "CAL-05-B",
      "CAL-01-J"
    ],
    "secondary": [
      "CAL-05-E",
      "CAL-05-F"
    ],
    "rationale": "先由导数符号确定函数在 (0,1) 递减、(1,+∞) 递增且最小值为 1；再用题设不等式推出数列单调有界，取极限夹逼。",
    "methods": "求 f'=(x-1)/x²；利用 f(x)≥1 与题设条件确定数列所在区间和单调有界性；设极限 a 并代入连续函数不等式。",
    "pitfalls": "单调有界定理必须同时证明单调性和有界性；极限代入后得到等号时还要确认等号点唯一。"
  },
  "459": {
    "status": "verified",
    "questionKey": "2013-解答题-21",
    "primary": [
      "CAL-06-C",
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-05-B",
      "CAL-08-C"
    ],
    "rationale": "弧长由 ∫√(1+y'²)dx 求得；形心横坐标为区域对 y 轴的一次矩除以面积，均转化为定积分。",
    "methods": "先求 y'=x/2-1/(2x)，识别根式为 x/2+1/(2x)；再分别计算面积 A=∫y dx 与静矩 M_y=∫xy dx，求 M_y/A。",
    "pitfalls": "弧长根式化简需确认 x≥1；形心分母是面积而不是弧长，且需使用曲线下方区域的正面积。"
  },
  "460": {
    "status": "verified",
    "questionKey": "2013-解答题-22",
    "primary": [
      "LA-04-A",
      "LA-02-B"
    ],
    "secondary": [
      "LA-02-A",
      "LA-04-C"
    ],
    "rationale": "矩阵方程 AC-CA=B 对 C 的四个元素形成线性方程组，存在性等价于方程组相容。",
    "methods": "设 C=(x1,x2;x3,x4)，逐项比较矩阵元素；对方程组消元，得到 a=-1、b=0，再写通解。",
    "pitfalls": "矩阵乘法不可交换；展开 AC 和 CA 时要逐项核对，存在性参数条件不能只凭某几行方程判断。"
  },
  "461": {
    "status": "verified",
    "questionKey": "2013-解答题-23",
    "primary": [
      "LA-06-A",
      "LA-05-C"
    ],
    "secondary": [
      "LA-06-B",
      "LA-05-A"
    ],
    "rationale": "二次型可写为 xᵀ(2ααᵀ+ββᵀ)x；正交单位向量 α、β 分别成为矩阵特征向量，对应特征值 2、1，剩余正交方向特征值为 0。",
    "methods": "先把两个线性型平方改写为矩阵二次型；再计算 Aα、Aβ，利用秩不超过 2 得第三特征值为 0，使用正交变换对角化。",
    "pitfalls": "系数 2 只作用于 ααᵀ 项；正交对角化要求矩阵实对称，标准形还应保留零平方项可省略的说明。"
  },
  "462": {
    "status": "verified",
    "questionKey": "2014-选择题-1",
    "primary": [
      "CAL-01-G",
      "CAL-02-E"
    ],
    "secondary": [
      "CAL-02-C",
      "CAL-05-D"
    ],
    "rationale": "两类无穷小分别等价于常数乘 x^α 和 x^(2/α)，高于 x 阶要求幂指数均大于 1。",
    "methods": "分别使用 ln(1+2x)~2x、1-cosx~x²/2；比较 α>1 与 2/α>1 的交集。",
    "pitfalls": "“比 x 高阶”意味着商趋于 0，而不是同阶；注意第二项的幂指数是 1/α。"
  },
  "463": {
    "status": "verified",
    "questionKey": "2014-选择题-2",
    "primary": [
      "CAL-05-H",
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-05-C",
      "CAL-01-G"
    ],
    "rationale": "斜渐近线 y=kx+b 的判定可通过 y/x 与 y-kx 的极限；仅 C 项在 x→∞ 时满足 k=1、b=0。",
    "methods": "逐项考察 x→∞；C 项有 y/x→1 且 y-x=sin(1/x)→0，故渐近线 y=x。",
    "pitfalls": "振荡项有界不等于趋于零；斜渐近线要求差值极限存在且有限。"
  },
  "464": {
    "status": "verified",
    "questionKey": "2014-选择题-3",
    "primary": [
      "CAL-05-G",
      "CAL-05-C"
    ],
    "secondary": [
      "CAL-05-B",
      "CAL-05-A"
    ],
    "rationale": "g(x) 是端点弦线；f''≥0 表示函数凸（图像在弦线下方），故 f≤g。",
    "methods": "构造 h=f-g；h(0)=h(1)=0 且 h''=f''≥0，由凸函数弦线性质或中值定理推出 h≤0。",
    "pitfalls": "区分凹凸术语：二阶导数非负表示凸函数；结论是图像位于弦线下方。"
  },
  "465": {
    "status": "verified",
    "questionKey": "2014-选择题-4",
    "primary": [
      "CAL-04-E",
      "CAL-05-C"
    ],
    "secondary": [
      "CAL-04-C",
      "CAL-04-B"
    ],
    "rationale": "参数曲线曲率半径可先求 y'、y''，再用 R=(1+y'²)^(3/2)/|y''|；题目给定点 t=1。",
    "methods": "先由 dy/dx=(dy/dt)/(dx/dt) 得 y'=1+2/t；再求 y''=(dy'/dt)/(dx/dt)=-1/t³；代 t=1 求 R。",
    "pitfalls": "二阶导数需再除以 dx/dt；曲率半径是曲率的倒数，不能把 K 与 R 混淆。"
  },
  "466": {
    "status": "verified",
    "questionKey": "2014-选择题-5",
    "primary": [
      "CAL-05-A",
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-02-C",
      "CAL-05-F"
    ],
    "rationale": "由 f(x)=xf'(ξ) 得 f'(ξ)=arctan(x)/x；利用 arctan x 的泰勒展开求 ξ²/x² 的极限。",
    "methods": "先解出 ξ²=x/arctan x-1；将 arctan x=x-x³/3+o(x³) 代入并化简。",
    "pitfalls": "注意从 1/(1+ξ²)=arctan x/x 解 ξ² 时的代数变形；展开必须保留三阶项。"
  },
  "467": {
    "status": "verified",
    "questionKey": "2014-选择题-6",
    "primary": [
      "CAL-08-D",
      "CAL-08-A"
    ],
    "secondary": [
      "CAL-08-B",
      "CAL-05-F"
    ],
    "rationale": "闭区域连续函数必取最大最小值；内部驻点处 Hessian 行列式由 u_xx+u_yy=0、u_xy≠0 得负值，因此是鞍点而非极值。",
    "methods": "先用极值存在定理；若内部有极值则梯度为零，计算 D=u_xx u_yy-u_xy²=-(u_xx²+u_xy²)<0，矛盾，故极值点在边界。",
    "pitfalls": "需区分全局最大最小值存在性与内部驻点；判别式小于零说明鞍点。"
  },
  "468": {
    "status": "verified",
    "questionKey": "2014-选择题-7",
    "primary": [
      "LA-01-B",
      "LA-01-D"
    ],
    "secondary": [
      "LA-01-A",
      "LA-01-C"
    ],
    "rationale": "利用行列式按第一行展开，两个非零项的余子式进一步按结构化简，最终得到 -(ad-bc)²。",
    "methods": "按第一行展开并严格保留代数余子式符号；对两个三阶子式再按含零行/列展开。",
    "pitfalls": "展开时第二项的符号来自 (-1)^(1+3)，不要把两项符号写成相同。"
  },
  "469": {
    "status": "verified",
    "questionKey": "2014-选择题-8",
    "primary": [
      "LA-03-B",
      "LA-03-D"
    ],
    "secondary": [
      "LA-03-C",
      "LA-02-B"
    ],
    "rationale": "若三向量线性无关，则对任意 k,l，前两个向量加上第三向量的倍数后仍线性无关；逆命题可用第三向量为零反例否定。",
    "methods": "先把两个新向量表示为原向量组乘一个 3×2 矩阵；该矩阵列秩为 2；再构造 α3=0 的反例。",
    "pitfalls": "题干命题的方向是“对任意 k,l 均无关”；证明充分性时不能只取某一组参数。"
  },
  "470": {
    "status": "verified",
    "questionKey": "2014-填空题-9",
    "primary": [
      "CAL-06-I",
      "CAL-06-A"
    ],
    "secondary": [
      "CAL-06-B",
      "CAL-02-D"
    ],
    "rationale": "配方后得到标准反正切型反常积分，利用 arctan 的无穷远极限计算。",
    "methods": "配方 x²+2x+5=(x+1)²+4；令 u=(x+1)/2，写出原函数并代入上下限极限。",
    "pitfalls": "无穷下限的 arctan 极限为 -π/2；常数因子 1/2 不要遗漏。"
  },
  "471": {
    "status": "verified",
    "questionKey": "2014-填空题-10",
    "primary": [
      "CAL-06-A",
      "CAL-03-A"
    ],
    "secondary": [
      "CAL-05-B",
      "CAL-06-C"
    ],
    "rationale": "由导数在 [0,2] 上积分得到函数表达式，再结合奇函数与周期为 4 的性质把 f(7) 化到基本区间。",
    "methods": "积分 f'=2(x-1)，由奇性确定 f(0)=0；先求 f(1)，再用周期 f(7)=f(3)，奇性和周期关系化为 -f(1)。",
    "pitfalls": "周期平移与奇函数变号要分步处理；不要误把周期 4 当成周期 2。"
  },
  "472": {
    "status": "verified",
    "questionKey": "2014-填空题-11",
    "primary": [
      "CAL-08-B",
      "CAL-08-A"
    ],
    "secondary": [
      "CAL-04-C",
      "CAL-04-B"
    ],
    "rationale": "隐式方程定义 z(x,y)，全微分 dz=z_x dx+z_y dy；通过隐函数求导公式计算两个偏导。",
    "methods": "先代点求 z=0；对 F(x,y,z)=0 分别求 Fx、Fy、Fz；用 z_x=-Fx/Fz、z_y=-Fy/Fz。",
    "pitfalls": "计算 Fy 时要包含 2y 项和指数链式项；求偏导时把 z 看作隐函数但先按独立变量求 F 的偏导。"
  },
  "473": {
    "status": "verified",
    "questionKey": "2014-填空题-12",
    "primary": [
      "CAL-08-F",
      "CAL-04-E"
    ],
    "secondary": [
      "CAL-04-C",
      "CAL-04-A"
    ],
    "rationale": "极坐标曲线先转为参数方程 x=θcosθ、y=θsinθ，再求 dy/dx 并在 θ=π/2 处写切线。",
    "methods": "分别对 x(θ)、y(θ) 求导；求导数之比并代 θ=π/2；确认点坐标后用点斜式。",
    "pitfalls": "极坐标曲线斜率不能直接用 dr/dθ；必须通过 dx/dθ、dy/dθ 求比值。"
  },
  "474": {
    "status": "verified",
    "questionKey": "2014-填空题-13",
    "primary": [
      "CAL-06-C",
      "CAL-06-A"
    ],
    "secondary": [
      "CAL-05-B",
      "CAL-06-B"
    ],
    "rationale": "线密度函数的质心横坐标等于关于原点的一次矩除以总质量，即 ∫xρ(x)dx/∫ρ(x)dx。",
    "methods": "分别计算质量 M=∫₀¹ρ(x)dx 与力矩 M_y=∫₀¹xρ(x)dx，再求比值。",
    "pitfalls": "分母是总质量，分子需多乘一个 x；不能把均匀细棒的几何中点直接当质心。"
  },
  "475": {
    "status": "verified",
    "questionKey": "2014-填空题-14",
    "primary": [
      "LA-06-D",
      "LA-06-B"
    ],
    "secondary": [
      "LA-06-A",
      "LA-06-C"
    ],
    "rationale": "配方后得到两个正平方项、一个负平方项和系数 (4-a²) 的第三项；负惯性指数为 1 要求第三项非负。",
    "methods": "对 x1、x2 配方；按系数正负统计正负惯性指数，考虑第三项为零时秩下降但负指数仍为 1。",
    "pitfalls": "端点 a=±2 时第三项为零仍满足负惯性指数为 1；不要误写成严格不等式。"
  },
  "476": {
    "status": "verified",
    "questionKey": "2014-解答题-15",
    "primary": [
      "CAL-02-D",
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-02-C",
      "CAL-06-F"
    ],
    "rationale": "分母等价于 x；对分子积分与 x 作比使用洛必达，导数化为 x²(e^(1/x)-1)-x，再用指数展开取极限。",
    "methods": "先用 ln(1+1/x)~1/x；再对 ∫g(t)dt / x 使用洛必达；令 u=1/x，对 e^u 作二阶展开。",
    "pitfalls": "展开 e^(1/x) 时必须保留 1/(2x²) 项，否则主项 x 抵消后无法得到极限。"
  },
  "477": {
    "status": "verified",
    "questionKey": "2014-解答题-16",
    "primary": [
      "CAL-07-A",
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-07-B",
      "CAL-05-F"
    ],
    "rationale": "微分方程可分离变量，积分得到 y 的隐式表达式；再由 y'=(1-x²)/(1+y²) 判断驻点与极值类型。",
    "methods": "分离 (1+y²)dy=(1-x²)dx 并用初值定常数；令 y'=0 得 x=±1，代回隐式关系求 y，再看导数变号。",
    "pitfalls": "分母 1+y² 恒正，导数符号由 1-x² 决定；极大/极小值是 y 值，不是 x 坐标。"
  },
  "478": {
    "status": "verified",
    "questionKey": "2014-解答题-17",
    "primary": [
      "CAL-08-E",
      "CAL-08-F"
    ],
    "secondary": [
      "CAL-06-C",
      "CAL-08-C"
    ],
    "rationale": "第一象限四分之一圆环区域适合极坐标；利用 x/(x+y) 与交换 x、y 的对称性，将被积函数化为径向函数的一半。",
    "methods": "令 I 为原积分，交换 x、y 得到对应积分；两式相加化成 1/2∬sin(πr)；再用 r∈[1,2]、θ∈[0,π/2] 积分。",
    "pitfalls": "对称性必须建立在区域对 x、y 交换不变；极坐标面积元为 r dr dθ。"
  },
  "479": {
    "status": "verified",
    "questionKey": "2014-解答题-18",
    "primary": [
      "CAL-08-B",
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-08-A",
      "CAL-07-D"
    ],
    "rationale": "令 u=e^x cos y，计算 z_xx+z_yy 后二阶导数的 u_x²+u_y² 项组合为 e^(2x)，从 PDE 化为关于 f(u) 的二阶常系数非齐次 ODE。",
    "methods": "先求 u_x、u_y、u_xx、u_yy；利用 u_x²+u_y²=e^(2x)、u_xx+u_yy=0 得 f''(u)e^(2x)；解 f''-4f=u 并代初值。",
    "pitfalls": "链式法则中的 f'' 项和 f' 项都要计算；本题关键是调和函数性质使 f' 项抵消。"
  },
  "480": {
    "status": "verified",
    "questionKey": "2014-解答题-19",
    "primary": [
      "CAL-05-B",
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-03-A",
      "CAL-05-A"
    ],
    "rationale": "利用 0≤g≤1 得累积积分不超过区间长度，再以 f 单调递增比较两个变上限积分，构造差函数证明不等式。",
    "methods": "定义 F(x)=∫ₐˣfg−∫ₐ^{a+∫ₐˣg}f；求导得 F'=g(x)[f(x)-f(a+∫ₐˣg)]≥0，结合 F(a)=0。",
    "pitfalls": "比较 f 的自变量前，先用第一问证明 a+∫ₐˣg≤x；链式法则中的上限导数不能漏掉 g(x)。"
  },
  "481": {
    "status": "verified",
    "questionKey": "2014-解答题-20",
    "primary": [
      "CAL-06-C",
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-06-B",
      "CAL-05-B"
    ],
    "rationale": "函数迭代 f(x)=x/(1+x) 可归纳得到 f_n(x)=x/(1+nx)，面积转化为定积分后求数列极限。",
    "methods": "对迭代式作归纳；S_n=∫₀¹x/(1+nx)dx，积分后化为 1−ln(1+n)/n。",
    "pitfalls": "注意迭代次数 n 出现在分母的 nx；面积积分上限是 1，最终计算的是 nS_n。"
  },
  "482": {
    "status": "verified",
    "questionKey": "2014-解答题-21",
    "primary": [
      "CAL-08-A",
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-08-C",
      "CAL-06-B"
    ],
    "rationale": "由偏导 f_y 积分恢复 f(x,y)，利用对角线条件确定仅依赖 x 的函数，再把曲线方程化为绕 y=-1 的圆盘截面体积。",
    "methods": "对 y 积分得 f=y²+2y+C(x)；代 x=y 确定 C；令 f=0 得半径平方 (2−x)lnx，按 x∈[1,2] 积分 πr²。",
    "pitfalls": "积分偏导时积分常数是 x 的函数；旋转轴 y=-1，半径是 |y+1|，不能误用 |y|。"
  },
  "483": {
    "status": "verified",
    "questionKey": "2014-解答题-22",
    "primary": [
      "LA-04-B",
      "LA-04-C"
    ],
    "secondary": [
      "LA-02-B",
      "LA-03-A"
    ],
    "rationale": "齐次方程组基础解系由行最简形确定自由变量；AB=E 是对每一列分别求解非齐次线性方程组。",
    "methods": "对 A 行化简得到主元列 1、2、3，自由变量 x₄；求基础解系；再对增广矩阵 (A E) 同步行变换，写出 B 的三列通解。",
    "pitfalls": "A 是 3×4 矩阵，B 必须是 4×3；AB=E 的解有三个独立自由参数，不能误认为 A 可逆。"
  },
  "484": {
    "status": "verified",
    "questionKey": "2014-解答题-23",
    "primary": [
      "LA-05-B",
      "LA-05-F"
    ],
    "secondary": [
      "LA-05-E",
      "LA-03-C"
    ],
    "rationale": "两矩阵特征多项式相同且均可对角化，分别相似于 diag(n,0,…,0)，故彼此相似。",
    "methods": "对全 1 矩阵求特征值 n、0（重数 n−1），利用实对称性可对角化；对第二矩阵求特征空间维数，验证零特征值有 n−1 个线性无关特征向量。",
    "pitfalls": "仅有相同特征值不保证一般矩阵相似；必须补充可对角化或 Jordan 结构相同的论证。"
  },
  "485": {
    "status": "verified",
    "questionKey": "2015-选择题-1",
    "primary": [
      "CAL-06-I",
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-02-D",
      "CAL-02-C"
    ],
    "rationale": "四个无穷区间积分中，幂函数型与对数型前三项发散，指数衰减项 x e^{-x} 可积。",
    "methods": "分别比较 ∫x^{-1/2}、∫lnx/x、∫1/(xlnx) 的原函数增长；对 ∫xe^{-x} 分部积分并取无穷上限。",
    "pitfalls": "无穷区间积分不能只看被积函数趋于零；趋零速度决定敛散性。"
  },
  "486": {
    "status": "verified",
    "questionKey": "2015-选择题-2",
    "primary": [
      "CAL-03-B",
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-04-A",
      "CAL-01-G"
    ],
    "rationale": "对 x≠0 用 ln(1+u)~u 求得函数值 e^x；定义域中 x=0 处函数未定义但极限存在，故为可去间断点。",
    "methods": "对幂式取对数：x²/t·ln(1+sin t/x)→x；再求 x→0 时 e^x→1。",
    "pitfalls": "原函数在 x=0 不存在，不能称连续；先确定定义域再分类间断点。"
  },
  "487": {
    "status": "verified",
    "questionKey": "2015-选择题-3",
    "primary": [
      "CAL-04-A"
    ],
    "secondary": [
      "CAL-04-B",
      "CAL-03-A"
    ],
    "rationale": "由导数定义，f'(0)=lim x^(α−1)cos(1/x^β)=0，故 α>1。对 x>0 求导后，振荡项 βx^(α−β−1)sin(1/x^β) 连续趋零要求 α−β−1>0，即 α−β>1。因此选项A（α−β>0）必然成立；B、C、D均非必然结论。",
    "methods": "先用导数定义确定 α>1，再对 x>0 求导，利用振荡因子不趋于零，判断其幂次系数必须趋零。",
    "pitfalls": "题目问必然成立的选项，不要求选项给出充要条件；推得 α−β>1 后，A 是必然结论。"
  },
  "488": {
    "status": "verified",
    "questionKey": "2015-选择题-4",
    "primary": [
      "CAL-05-G"
    ],
    "secondary": [
      "CAL-05-C"
    ],
    "rationale": "原卷图中f''在左侧A点仅与x轴相切，符号不变；右侧B点穿过x轴，只有一次变号。因此f的凹凸性只改变一次，拐点个数为1，选B。",
    "methods": "拐点需检查二阶导数是否变号，不能只数f''(x)=0的点。",
    "pitfalls": "A点虽满足f''=0，但左右同号，不是拐点；B点才是拐点。",
    "sourceUrl": "https://math.mnnu.edu.cn/__local/9/6C/06/E40CA58379CB232AEBF10076867_080F66DF_608BF.pdf?e=.pdf#page=1",
    "sourceLabel": "查看2015年原卷第4题图（PDF第1页）"
  },
  "489": {
    "status": "pending",
    "questionKey": "2015-选择题-5",
    "reason": "已找到原卷扫描：题干确为f(x+y/x,y)=x²−y²。令(u,v)=(1,1)要求x+1/x=1，该方程无实数解，因此(1,1)不在参数映射像集中，无法由题设确定该点处两个偏导数；原卷题面疑有印刷/转录错误。暂不虚构答案或卡片关联。",
    "sourceUrl": "https://math.mnnu.edu.cn/__local/9/6C/06/E40CA58379CB232AEBF10076867_080F66DF_608BF.pdf?e=.pdf#page=2",
    "sourceLabel": "查看2015年原卷第5题（PDF第2页）"
  },
  "490": {
    "status": "verified",
    "questionKey": "2015-选择题-6",
    "primary": [
      "CAL-08-F",
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-08-C",
      "CAL-04-B"
    ],
    "rationale": "边界 xy=常数与射线 y=x、y=3x 在极坐标下分别变成径向上下限和角度区间，面积元带雅可比 r。",
    "methods": "设 x=r cosθ、y=r sinθ；由 xy=(r²/2)sin2θ 得 r 的上下限；射线给 θ∈[π/4,π/3]。",
    "pitfalls": "选项 A/B 与 C/D 存在重复文本，关键区别是是否含雅可比 r；按题解应选含 r 的形式。"
  },
  "491": {
    "status": "verified",
    "questionKey": "2015-选择题-7",
    "primary": [
      "LA-04-A",
      "LA-02-B"
    ],
    "secondary": [
      "LA-04-D",
      "LA-04-C"
    ],
    "rationale": "方程组有无穷多解等价于系数矩阵与增广矩阵秩相等且小于未知数个数；行化简得到两个因子同时为零。",
    "methods": "对 (A,b) 作初等行变换，最后一行要求 (a−1)(a−2)=0 且 (d−1)(d−2)=0。",
    "pitfalls": "无穷多解需同时满足相容和秩小于 3；不能只令 det(A)=0 而忽略增广列条件。"
  },
  "492": {
    "status": "verified",
    "questionKey": "2015-选择题-8",
    "primary": [
      "LA-06-B",
      "LA-05-C"
    ],
    "secondary": [
      "LA-06-D",
      "LA-06-A"
    ],
    "rationale": "正交变换矩阵 Q 相对 P 交换第二、三列并对一列变号，标准形的对应对角元素随坐标置换重新排列。",
    "methods": "写 Q=PC，计算 Cᵀdiag(2,1,−1)C，得到 diag(2,−1,1)。",
    "pitfalls": "列置换会重排平方项系数；列变号不改变对应平方项符号。"
  },
  "493": {
    "status": "verified",
    "questionKey": "2015-填空题-9",
    "primary": [
      "CAL-04-E",
      "CAL-04-B"
    ],
    "secondary": [
      "CAL-04-C",
      "CAL-05-D"
    ],
    "rationale": "参数方程二阶导数公式为 y''=(d/dt(dy/dx))/(dx/dt)，代入 t=1 得 48。",
    "methods": "先求 dy/dx=(3t²+1)(1+t²)，再对 t 求导并除以 dx/dt=1/(1+t²)，最后代 t=1。",
    "pitfalls": "二阶参数导数不能只对 dy/dx 求 t 导数，必须再除以 dx/dt。"
  },
  "494": {
    "status": "verified",
    "questionKey": "2015-填空题-10",
    "primary": [
      "CAL-04-B",
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-06-B",
      "CAL-01-G"
    ],
    "rationale": "乘积 x²·2^x 的 n 阶导数在 x=0 处仅保留 x² 的二阶导数项，得到 n(n−1)(ln2)^{n−2}。",
    "methods": "用莱布尼茨公式，只有对 x² 求二阶导的项非零；2^x 的 n−2 阶导数为 (ln2)^{n−2}。",
    "pitfalls": "组合系数与 2! 相乘为 n(n−1)，不要遗漏因子 2。"
  },
  "495": {
    "status": "verified",
    "questionKey": "2015-填空题-11",
    "primary": [
      "CAL-06-F",
      "CAL-04-B"
    ],
    "secondary": [
      "CAL-06-C",
      "CAL-08-A"
    ],
    "rationale": "对 φ(x)=x∫₀^{x²}f(t)dt 求导，结合 φ(1) 与 φ'(1) 两条件解出 f(1)。",
    "methods": "由 φ(1)=1 得积分值 1；乘积法则和变上限链式法则给 φ'(1)=1+2f(1)=5。",
    "pitfalls": "上限 x² 求导会产生 2x；不能漏掉链式因子 2。"
  },
  "496": {
    "status": "verified",
    "questionKey": "2015-填空题-12",
    "primary": [
      "CAL-07-C",
      "CAL-04-B"
    ],
    "secondary": [
      "CAL-07-D",
      "CAL-05-B"
    ],
    "rationale": "二阶常系数齐次方程特征根为 1、−2；在 x=0 取得极值 3 提供 y(0)=3、y'(0)=0。",
    "methods": "解特征方程 r²+r−2=0；写通解 C₁e^x+C₂e^{-2x}；用函数值和极值导数条件解常数。",
    "pitfalls": "极值条件是导数为零，不是只给出函数值；注意负根对应 e^{-2x}。"
  },
  "497": {
    "status": "verified",
    "questionKey": "2015-填空题-13",
    "primary": [
      "CAL-08-B",
      "CAL-08-A"
    ],
    "secondary": [
      "CAL-04-C",
      "CAL-04-B"
    ],
    "rationale": "隐式方程在原点确定 z=0，对方程全微分后解出 z_x、z_y，再写 dz。",
    "methods": "对 e^{x+2y+3z}+xyz=1 全微分；在 (0,0,0) 代入，得到 3dz+dx+2dy=0。",
    "pitfalls": "xyz 项在原点的一阶微分为零；指数项对 z 的偏导为 3，不能漏掉。"
  },
  "498": {
    "status": "verified",
    "questionKey": "2015-填空题-14",
    "primary": [
      "LA-05-A",
      "LA-01-C"
    ],
    "secondary": [
      "LA-05-D",
      "LA-01-E"
    ],
    "rationale": "矩阵多项式 B=A²−A+E 的特征值为 λ²−λ+1，B 的行列式等于这些特征值之积。",
    "methods": "将 A 的三个特征值代入多项式，得到 3、7、1，取乘积 21。",
    "pitfalls": "矩阵多项式的特征值映射适用；行列式是特征值乘积，不是特征值之和。"
  },
  "499": {
    "status": "verified",
    "questionKey": "2015-解答题-15",
    "primary": [
      "CAL-05-D",
      "CAL-02-E"
    ],
    "secondary": [
      "CAL-01-G",
      "CAL-02-C"
    ],
    "rationale": "ln(1+x) 与 x sinx 展开到三阶，令一次、二次项系数消失，三次项与 kx³ 匹配。",
    "methods": "展开 ln(1+x)=x−x²/2+x³/3+o(x³)，x sinx=x²+o(x³)；逐阶比较系数。",
    "pitfalls": "等价无穷小要求低阶项先消失；三次项系数 k 需保留符号。"
  },
  "500": {
    "status": "verified",
    "questionKey": "2015-解答题-16",
    "primary": [
      "CAL-06-C",
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-06-B",
      "CAL-08-C"
    ],
    "rationale": "绕 x 轴用圆盘法，绕 y 轴用柱壳法，分别计算体积并利用相等条件解 A。",
    "methods": "V₁=πA²∫₀^{π/2}sin²x dx；V₂=2πA∫₀^{π/2}x sinx dx；令二者相等且 A>0。",
    "pitfalls": "绕 y 轴柱壳半径是 x；积分 ∫x sinx dx 的分部积分结果为 1。"
  },
  "501": {
    "status": "verified",
    "questionKey": "2015-解答题-17",
    "primary": [
      "CAL-08-D",
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-05-B",
      "CAL-05-F"
    ],
    "rationale": "先由混合偏导积分恢复 f，再求一阶偏导定位驻点，利用 Hessian 判别式确定极小值。",
    "methods": "依次对 y、x 积分并用边界条件确定积分函数；解 fx=fy=0 得 (0,−1)，计算 D=AC−B²>0 且 A>0。",
    "pitfalls": "恢复函数时积分常数分别依赖另一变量；极值分类必须检查 Hessian，而非仅凭驻点。"
  },
  "502": {
    "status": "verified",
    "questionKey": "2015-解答题-18",
    "primary": [
      "CAL-08-E",
      "CAL-08-C"
    ],
    "secondary": [
      "CAL-08-F",
      "CAL-06-C"
    ],
    "rationale": "区域关于 y 轴对称，xy 项积分为零，剩余 x² 项利用上下半圆边界化为一元积分。",
    "methods": "拆分 x(x+y)=x²+xy；由对称性消去 xy；写 y 从 x² 到 √(2−x²)，x∈[−1,1]，再用偶性。",
    "pitfalls": "区域的交点为 x=±1；对称消去的是奇函数项 xy，不是 x² 项。"
  },
  "503": {
    "status": "verified",
    "questionKey": "2015-解答题-19",
    "primary": [
      "CAL-06-F",
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-06-C",
      "CAL-04-B"
    ],
    "rationale": "对两个变上限积分求导，导数符号由 2x−1 决定，函数先减后增；结合端点极限与最小值负值判断零点数。",
    "methods": "用牛顿—莱布尼茨公式和链式法则求 f'；证明唯一极小点 x=1/2，且两端趋于正无穷、极小值小于零。",
    "pitfalls": "第二个积分上限为 x²，求导必须乘 2x；要证明两侧各有一个零点还需连续性和两端极限。"
  },
  "504": {
    "status": "verified",
    "questionKey": "2015-解答题-20",
    "primary": [
      "CAL-07-A",
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-07-D",
      "CAL-05-B"
    ],
    "rationale": "牛顿冷却定律给出一阶可分离方程，温差按指数衰减；由前 30 分钟确定衰减常数，再求温度从 30 到 21 的额外时间。",
    "methods": "设 T−20=100e^{-kt}；用 t=0.5h、T=30 得 k=2ln10；令 T=21 解总时间 1h，减去已过 0.5h。",
    "pitfalls": "求得的是从初始时刻起的总时间，题目问还需时间，必须减去已冷却的 30 分钟。"
  },
  "505": {
    "status": "verified",
    "questionKey": "2015-解答题-21",
    "primary": [
      "CAL-05-A",
      "CAL-05-C"
    ],
    "secondary": [
      "CAL-05-B",
      "CAL-05-E"
    ],
    "rationale": "切线与 x 轴交点 x₀=b−f(b)/f'(b)；利用拉格朗日中值定理及 f''>0 推出 a<x₀<b。",
    "methods": "先由 f'>0 得 f(b)>0，故 x₀<b；再写 f(b)=f'(ξ)(b−a)，因 f' 严格递增，比较 f'(ξ) 与 f'(b) 得 x₀>a。",
    "pitfalls": "证明下界时分式变形要保持正分母；凸性意味着导数递增。"
  },
  "506": {
    "status": "verified",
    "questionKey": "2015-解答题-22",
    "primary": [
      "LA-02-A",
      "LA-02-C"
    ],
    "secondary": [
      "LA-02-B",
      "LA-04-A"
    ],
    "rationale": "A³=0 的幂零矩阵必有特征值全为零，故 detA=0；第二问可因式分解为 (E−A)X(E−A)=E 并用有限级数求逆。",
    "methods": "由 detA=0 得 a³=0；再用 (E−A)^{-1}=E+A+A²，计算 X=(E+A+A²)²。",
    "pitfalls": "A³=0 不意味着 A=0；逆矩阵级数截断来自幂零条件，矩阵乘法顺序需保持。"
  },
  "507": {
    "status": "verified",
    "questionKey": "2015-解答题-23",
    "primary": [
      "LA-05-B",
      "LA-05-A"
    ],
    "secondary": [
      "LA-05-F",
      "LA-05-E"
    ],
    "rationale": "相似矩阵有相同迹和行列式，先确定参数，再求 A 的特征值与特征向量构造对角化矩阵。",
    "methods": "由 trA=trB、detA=detB 解 a、b；对 A 求特征值 1（重数2）、5，分别求足够数量的线性无关特征向量组成 P。",
    "pitfalls": "重特征值对应的特征向量必须线性无关；仅有迹和行列式相等不足以证明相似，需利用题设相似关系。"
  },
  "508": {
    "status": "verified",
    "questionKey": "2016-选择题-1",
    "primary": [
      "CAL-01-G",
      "CAL-02-E"
    ],
    "secondary": [
      "CAL-05-D",
      "CAL-02-C"
    ],
    "rationale": "分别用 cos√x−1、ln(1+∛x)、(1+x)^{1/3}−1 的等价无穷小求三者阶数并排序。",
    "methods": "得到 a₁~−x²/2，a₂~x^{5/6}，a₃~x/3；对 0<x<1，指数越大阶越高。",
    "pitfalls": "低阶到高阶与幂指数从小到大一致；不要把系数正负影响误认为阶数变化。"
  },
  "509": {
    "status": "verified",
    "questionKey": "2016-选择题-2",
    "primary": [
      "CAL-06-A",
      "CAL-03-A"
    ],
    "secondary": [
      "CAL-03-B",
      "CAL-06-C"
    ],
    "rationale": "分段原函数分别积分，并利用原函数在分界点连续确定右段积分常数。",
    "methods": "左段积分为 (x−1)²+C₁，右段为 xlnx−x+C₂；匹配 x=1 处函数值确定常数差。",
    "pitfalls": "原函数只要求导数等于 f；分段积分常数需由跨分界点的连续性协调，不能直接各取零。"
  },
  "510": {
    "status": "verified",
    "questionKey": "2016-选择题-3",
    "primary": [
      "CAL-06-I",
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-02-D",
      "CAL-02-C"
    ],
    "rationale": "代换 u=1/x 后，负半轴一侧对应 u 从 −∞ 到 0 的指数积分收敛；正半轴一侧对应 u 从 +∞ 到 0 的积分发散。",
    "methods": "用 du=−dx/x²，原积分化为 −∫e^u du，分别按端点极限判断。",
    "pitfalls": "两积分在 x=0 与无穷端点的变换方向不同；不能仅因原函数相同就认为敛散性相同。"
  },
  "511": {
    "status": "verified",
    "questionKey": "2016-选择题-4",
    "primary": [
      "CAL-05-E"
    ],
    "secondary": [
      "CAL-05-G"
    ],
    "rationale": "原卷及配套解析确认答案B：f′的符号变化2次，对应f有2个极值点；f′的单调性改变3次，对应f的凹凸性改变3次，故有3个拐点。",
    "methods": "从f′图像读出符号变化判断极值；从f′的单调性变化判断f''的符号变化与拐点。",
    "pitfalls": "极值看f′是否变号；拐点看f′是否改变单调性，不能混为一谈。",
    "sourceUrl": "https://www.yqsjzs.com/__local/E/F1/4C/324245A19BF40287C299283A784_D59BAC21_643AB.pdf?e=.pdf#page=1",
    "sourceLabel": "查看2016年原卷第4题图（PDF第1页）"
  },
  "512": {
    "status": "verified",
    "questionKey": "2016-选择题-5",
    "primary": [
      "CAL-05-C",
      "CAL-05-G"
    ],
    "secondary": [
      "CAL-05-B",
      "CAL-05-D"
    ],
    "rationale": "两曲线有共同切线且二阶导数均负，局部位于切线下方；曲率大小比较结合相同切线斜率与凹向确定二阶导数大小。",
    "methods": "在 x₀ 作二阶泰勒展开；共同函数值和一阶导数相同，比较二阶项系数；f₁曲率较大对应更负的二阶导数。",
    "pitfalls": "曲率公式含 (1+f'²)^{3/2}；因两曲线在该点斜率相同，才可直接比较 |f''|。"
  },
  "513": {
    "status": "verified",
    "questionKey": "2016-选择题-6",
    "primary": [
      "CAL-08-A",
      "CAL-04-B"
    ],
    "secondary": [
      "CAL-08-B",
      "CAL-05-E"
    ],
    "rationale": "对 f=e^x/(x−y) 分别求偏导，二者相加后分子化简为 e^x(x−y)，即等于 f。",
    "methods": "固定 y 求 fx，固定 x 求 fy；通分后计算 fx+fy。",
    "pitfalls": "求 fy 时分母 (x−y)^{-1} 对 y 求导为正；偏导时另一变量固定。"
  },
  "514": {
    "status": "verified",
    "questionKey": "2016-选择题-7",
    "primary": [
      "LA-05-F",
      "LA-05-B"
    ],
    "secondary": [
      "LA-02-A",
      "LA-05-A"
    ],
    "rationale": "相似变换保持多项式函数、逆、转置等相应相似关系，但 Aᵀ+A 与 Bᵀ+B 一般不共享同一个相似变换矩阵。",
    "methods": "设 B=P⁻¹AP；逐项验证 B⁻¹、Bᵀ及 B⁻¹+B 的相似关系；指出转置项变为 PᵀAᵀP⁻ᵀ，通常不等于 P⁻¹AᵀP。",
    "pitfalls": "相似矩阵的转置仍相似，但“转置后再与原矩阵相加”不保持相似；不要混淆相似与合同。"
  },
  "515": {
    "status": "verified",
    "questionKey": "2016-选择题-8",
    "primary": [
      "LA-06-D",
      "LA-05-A"
    ],
    "secondary": [
      "LA-06-B",
      "LA-06-C"
    ],
    "rationale": "对称矩阵的特征值为 a+2、a−1、a−1；正惯性指数1、负惯性指数2 要求前者正、后两者负。",
    "methods": "写出矩阵并分解为 (a−1)I+J；利用全 1 矩阵特征值 3、0、0 得到三个特征值。",
    "pitfalls": "惯性指数统计严格正负特征值；边界 a=−2 或 1 会出现零特征值，不符合给定指数。"
  },
  "516": {
    "status": "verified",
    "questionKey": "2016-填空题-9",
    "primary": [
      "CAL-05-H",
      "CAL-05-C"
    ],
    "secondary": [
      "CAL-02-C",
      "CAL-05-D"
    ],
    "rationale": "斜渐近线由 a=lim y/x 与 b=lim(y−ax) 确定，分别得到 a=1、b=π/2。",
    "methods": "拆分 x³/(1+x²)=x−x/(1+x²)；第二项余量趋零，arctan(1+x²)→π/2。",
    "pitfalls": "不能只求 y/x；截距极限必须在减去 ax 后计算。"
  },
  "517": {
    "status": "verified",
    "questionKey": "2016-填空题-10",
    "primary": [
      "CAL-02-A",
      "CAL-06-E"
    ],
    "secondary": [
      "CAL-06-C",
      "CAL-02-C"
    ],
    "rationale": "求和式是区间 [0,1] 上函数 x sinx 的黎曼和，极限等于定积分。",
    "methods": "改写为 (1/n)Σ(k/n)sin(k/n)，识别积分 ∫₀¹xsinx dx，再分部积分。",
    "pitfalls": "注意原式中的 k 与外部 n² 合并为标准 1/n 权重；端点采样不影响极限。"
  },
  "518": {
    "status": "verified",
    "questionKey": "2016-填空题-11",
    "primary": [
      "CAL-07-B",
      "CAL-07-D"
    ],
    "secondary": [
      "CAL-07-C",
      "CAL-04-B"
    ],
    "rationale": "两个特解之差 e^x 是齐次解，确定齐次方程 y'−y=0；代入特解 x² 求非齐次项。",
    "methods": "由 y₁−y₂=e^x 得齐次解空间；代 y=x² 到 y'−y=q(x)，得 q=2x−x²。",
    "pitfalls": "非齐次方程的两个特解之差满足齐次方程；求 q 时需代入完整导数。"
  },
  "519": {
    "status": "verified",
    "questionKey": "2016-填空题-12",
    "primary": [
      "CAL-06-F",
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-04-B",
      "CAL-06-C"
    ],
    "rationale": "积分方程两边求导化为一阶线性微分方程 f'=2(x+1)+2f，再递推求高阶导数在零点的值。",
    "methods": "先令 x=0 求 f(0)=1；求导得 f'−2f=2x+2，代 x=0 得 f'(0)=4、f''(0)=10；对 n≥2 有 f^{(n)}=2^{n−2}f''。",
    "pitfalls": "求导后右侧 2(x+1) 的二阶及更高阶导数为零；n≥2 的递推关系要从 f'' 开始。"
  },
  "520": {
    "status": "verified",
    "questionKey": "2016-填空题-13",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "由 l=√(x²+x⁶) 对时间求导，使用链式法则并代入 x=1、dx/dt=v₀，属于曲线上动点距离变化率。",
    "methods": "先将距离表示为横坐标的函数，再求 dl/dt=(dl/dx)(dx/dt)，最后代入指定位置。",
    "pitfalls": "注意对根式整体求导，并区分 dx/dt 与 dl/dt。"
  },
  "521": {
    "status": "verified",
    "questionKey": "2016-填空题-14",
    "primary": [
      "LA-02-B"
    ],
    "secondary": [
      "LA-02-E"
    ],
    "rationale": "矩阵等价的判定依据是秩相等；先求右侧矩阵秩，再令含参数矩阵的行列式为零并排除秩不足情形。",
    "methods": "用行变换求固定矩阵秩；对参数矩阵计算行列式并分参数讨论秩。",
    "pitfalls": "行列式为零只说明秩小于满秩，不能直接认定秩恰为2；需检查低秩参数。"
  },
  "522": {
    "status": "verified",
    "questionKey": "2016-解答题-15",
    "primary": [
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "幂指型极限先取对数，将其转化为括号内表达式与 x⁴ 的比值，再用泰勒展开求首个非零项。",
    "methods": "令原极限为 e^L，展开 cos2x 与 2x sinx 至四阶，求 L。",
    "pitfalls": "展开阶数必须达到分母的 x⁴；二阶项相消后不能提前截断。"
  },
  "523": {
    "status": "verified",
    "questionKey": "2016-解答题-16",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "绝对值积分需按 t²−x² 的变号点分段，得到分段函数后求导并比较端点与驻点。",
    "methods": "按 x 与1的大小拆分积分区间，求 f'(x)，检查驻点 x=1/2 及边界行为。",
    "pitfalls": "分段边界 x=1 需检查连续与导数衔接；最小值不能只凭驻点断定。"
  },
  "524": {
    "status": "verified",
    "questionKey": "2016-解答题-17",
    "primary": [
      "CAL-08-D"
    ],
    "secondary": [
      "CAL-08-B"
    ],
    "rationale": "由隐函数方程分别求 z_x、z_y，令其为零确定驻点，再用二元函数二阶判别式判断极值类型。",
    "methods": "对隐式方程求偏导，解驻点方程；再计算 z_xx、z_xy、z_yy。",
    "pitfalls": "隐函数求导时分母包含对 z 的偏导；二阶判别需同时检查 AC−B² 与 A 的符号。"
  },
  "525": {
    "status": "verified",
    "questionKey": "2016-解答题-18",
    "primary": [
      "CAL-08-F"
    ],
    "secondary": [
      "CAL-08-E"
    ],
    "rationale": "被积函数含 x²+y² 且区域由 y=±x、y=1 围成，利用对称性消去奇函数项后可转极坐标或分区积分。",
    "methods": "先用关于 y 轴对称性消去 xy/(x²+y²)，再对剩余项按第一象限分区积分。",
    "pitfalls": "区域是上方三角形而非整圆；对称性只可消去关于 x 的奇函数项。"
  },
  "526": {
    "status": "verified",
    "questionKey": "2016-解答题-19",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "已知一个解 y₁=eˣ，以降阶/代入 y₂=μeˣ 求另一个线性无关解，再由两个解写二阶线性方程通解。",
    "methods": "代入 y₂=μeˣ 化为关于 μ' 的一阶方程，积分并用两个函数值确定常数。",
    "pitfalls": "恢复通解时要确认两个解线性无关，且分离变量过程不能漏掉常数因子。"
  },
  "527": {
    "status": "verified",
    "questionKey": "2016-解答题-20",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-04-E"
    ],
    "rationale": "旋转体体积与表面积分别由边界曲线绕 x 轴的旋转积分计算；参数曲线需使用参数微元。",
    "methods": "体积用圆盘/垫片法相减；表面积按两段边界分别写旋转曲面面积积分。",
    "pitfalls": "参数曲线的弧长微元不能误写成 dx；表面积是边界旋转面积之和，不是区域面积。"
  },
  "528": {
    "status": "verified",
    "questionKey": "2016-解答题-21",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "平均值由定积分除以区间长度；唯一零点证明依赖导数符号给出的先减后增及端点符号。",
    "methods": "用积分换序求平均值；再分析 f' 在 π/2 两侧符号，结合连续性和单调性证明唯一性。",
    "pitfalls": "端点处需结合连续延拓；存在性与唯一性分别依靠介值定理和单调性。"
  },
  "529": {
    "status": "verified",
    "questionKey": "2016-解答题-22",
    "primary": [
      "LA-04-A"
    ],
    "secondary": [
      "LA-02-B",
      "LA-04-C"
    ],
    "rationale": "Ax=β 无解先由系数矩阵奇异确定参数，再用秩判定排除有解情况；随后求正规方程的通解。",
    "methods": "计算 det(A)，逐个参数检查增广矩阵秩；代入后对 AᵀAx=Aᵀβ 作高斯消元。",
    "pitfalls": "正规方程有解不代表原方程有解；不要把最小二乘方程与原方程混为一谈。"
  },
  "530": {
    "status": "verified",
    "questionKey": "2016-解答题-23",
    "primary": [
      "LA-05-B"
    ],
    "secondary": [
      "LA-05-F",
      "LA-02-A"
    ],
    "rationale": "矩阵幂通过特征值与特征向量对角化计算；由 B²=BA 递推得到 B¹⁰⁰=BA⁹⁹。",
    "methods": "求特征多项式和特征向量构造 PΛP⁻¹，再计算 Λ⁹⁹；利用矩阵关系递推。",
    "pitfalls": "幂次作用于对角矩阵时逐个特征值取幂；注意零特征值与列向量线性组合的对应次序。"
  },
  "531": {
    "status": "verified",
    "questionKey": "2017-选择题-1",
    "primary": [
      "CAL-03-A"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "分段函数在零点连续要求右极限等于左侧函数值，使用 1−cos√x 的等价无穷小。",
    "methods": "计算 x→0⁺ 的极限并令其等于 b，得到 ab。",
    "pitfalls": "连续条件是极限等于函数值；等价无穷小需注意 √x 的平方为 x。"
  },
  "532": {
    "status": "verified",
    "questionKey": "2017-选择题-2",
    "primary": [
      "CAL-05-G"
    ],
    "secondary": [
      "CAL-06-E"
    ],
    "rationale": "f''>0 表示严格凸，函数图像位于端点弦线下方；分别在两半区间积分可判断总积分符号。",
    "methods": "利用凸函数弦线性质，比较 f 与分段弦线，再积分。",
    "pitfalls": "严格凸函数在区间内部低于端点连线；不要把凸与凹的图像位置记反。"
  },
  "533": {
    "status": "verified",
    "questionKey": "2017-选择题-3",
    "primary": [
      "CAL-01-A"
    ],
    "secondary": [
      "CAL-01-C",
      "CAL-01-I"
    ],
    "rationale": "数列收敛可将复合连续函数极限与数列极限联系；选项 D 利用 h(x)=x+sinx 严格单调且唯一零点为0。",
    "methods": "对各选项构造反例；对 D 用连续严格单调函数的逆向极限性质。",
    "pitfalls": "A 中 sin 的零点不唯一；B、C 存在非零根，不能只考察零点附近。"
  },
  "534": {
    "status": "verified",
    "questionKey": "2017-选择题-4",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "常系数非齐次方程特解按特征根与非齐次项形式设定；e²ˣ项不共振，e²ˣcos2x 项与特征根共振一次。",
    "methods": "先求特征根 2±2i，再分别对两类非齐次项构造待定系数形式。",
    "pitfalls": "只有发生共振的那一项乘 x；不能把整个特解统一乘 x。题库 B、D 选项文本重复但不影响 C 的形式判断。"
  },
  "535": {
    "status": "verified",
    "questionKey": "2017-选择题-5",
    "primary": [
      "CAL-08-A"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "偏导数符号分别决定函数沿 x、y 方向的单调性，逐步比较两个点的函数值。",
    "methods": "先固定 y 比较 x，再固定 x 比较 y，串联不等式。",
    "pitfalls": "比较点时每一步只改变一个坐标，并注意 y 方向是递减。"
  },
  "536": {
    "status": "verified",
    "questionKey": "2017-选择题-6",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "原卷图标出三段面积10、20、3，第一段[0,10]为v₁>v₂，第二段[10,25]为v₂>v₁。甲初始领先10m，第一段再领先10m，至t=10领先20m；第二段乙追回20m，恰在t=25追平。因此t₀=25，选C。",
    "methods": "写出位置差Δs(t)=10+∫₀ᵗ(v₁−v₂)dt，按图中速度差面积分段累加。",
    "pitfalls": "必须区分阴影面积的正负及其时间区间；原题正确答案不是B而是C。",
    "sourceUrl": "https://math.mnnu.edu.cn/__local/6/B2/21/08C5267AFAC0ECF0E3B08C5DB4A_01E9BA27_6FD2A.pdf?e=.pdf#page=2",
    "sourceLabel": "查看2017年原卷第6题图（PDF第2页）"
  },
  "537": {
    "status": "verified",
    "questionKey": "2017-选择题-7",
    "primary": [
      "LA-05-A"
    ],
    "secondary": [
      "LA-02-A"
    ],
    "rationale": "原卷矩阵为P⁻¹AP=diag(0,1,2)，旧题库把对角矩阵误录成3×1列向量。由AP=PΛ可得Aα₁=0、Aα₂=α₂、Aα₃=2α₃，故A(α₁+α₂+α₃)=α₂+2α₃，选B。",
    "methods": "将相似对角化等式右乘P，得到AP=PΛ，再按列向量逐列比较。",
    "pitfalls": "必须保留矩阵的3×3对角结构；不能把对角矩阵误读为列向量。",
    "sourceUrl": "https://math.mnnu.edu.cn/__local/6/B2/21/08C5267AFAC0ECF0E3B08C5DB4A_01E9BA27_6FD2A.pdf?e=.pdf#page=2",
    "sourceLabel": "查看2017年原卷第7题图（PDF第2页）"
  },
  "538": {
    "status": "verified",
    "questionKey": "2017-选择题-8",
    "primary": [
      "LA-05-B"
    ],
    "secondary": [
      "LA-05-E",
      "LA-05-F"
    ],
    "rationale": "相似矩阵不仅特征值相同，还需 Jordan 结构/特征子空间维数相同；是否可对角化可区分 A、B 与 C。",
    "methods": "比较特征值及特征值2的几何重数，判断能否与对角矩阵 C 相似。",
    "pitfalls": "相同特征值和代数重数并不足以推出相似。"
  },
  "539": {
    "status": "verified",
    "questionKey": "2017-填空题-9",
    "primary": [
      "CAL-05-H"
    ],
    "secondary": [
      "CAL-02-C"
    ],
    "rationale": "斜渐近线 y=kx+b 由 k=lim y/x、b=lim(y−kx) 求得，第二个极限使用 arcsin u 的小量等价。",
    "methods": "分别求斜率极限与截距极限。",
    "pitfalls": "计算截距时需保留 x·arcsin(2/x) 的乘积极限。"
  },
  "540": {
    "status": "verified",
    "questionKey": "2017-填空题-10",
    "primary": [
      "CAL-04-E"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "参数方程的二阶导数先求 dy/dx=(dy/dt)/(dx/dt)，再对 t 求导并除以 dx/dt。",
    "methods": "先求一阶导，再用 d²y/dx²=(d/dt(dy/dx))/(dx/dt)，代 t=0。",
    "pitfalls": "二阶导数不是简单对 dy/dx 关于 t 求导，还需再除以 dx/dt。"
  },
  "541": {
    "status": "verified",
    "questionKey": "2017-填空题-11",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "积分上限无穷，属于反常积分；通过换元和分部积分计算其收敛值。",
    "methods": "令 u=1+x，将积分化为 ∫₁∞ ln u/u² du，再分部积分。",
    "pitfalls": "分部积分时需验证边界项 ln u/u 在无穷远处趋于0。"
  },
  "542": {
    "status": "verified",
    "questionKey": "2017-填空题-12",
    "primary": [
      "CAL-08-A"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "全微分给出两个一阶偏导；先对 x 积分得到含 y 的积分常数，再由另一偏导确定该函数。",
    "methods": "由 f_x=yeʸ 积分得 f=xyeʸ+C(y)，再比较 f_y。",
    "pitfalls": "积分常数可依赖未积分的变量，不能直接视为普通常数。"
  },
  "543": {
    "status": "verified",
    "questionKey": "2017-填空题-13",
    "primary": [
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "积分区域由 0≤y≤x≤1 描述，交换积分次序后可消去内层 y 积分中的 x 因子。",
    "methods": "将积分区域改写为 0≤x≤1、0≤y≤x，换序后先积 y。",
    "pitfalls": "换序时必须同步改变积分上下限；原式外层变量与内层上下限不要混淆。"
  },
  "544": {
    "status": "verified",
    "questionKey": "2017-填空题-14",
    "primary": [
      "LA-05-A"
    ],
    "secondary": [
      "LA-05-E"
    ],
    "rationale": "已知特征向量，将矩阵乘以该向量并与 λ 倍向量逐分量比较，即可确定参数。",
    "methods": "直接计算 Aα，比较三个分量与 λα。",
    "pitfalls": "特征向量非零，三个分量必须对应同一个特征值。"
  },
  "545": {
    "status": "verified",
    "questionKey": "2017-解答题-15",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-02-D"
    ],
    "rationale": "分子为变上限积分且 x→0⁺，先换元将其写成小区间积分，再用洛必达或等价估计求极限。",
    "methods": "令 u=x−t，提出 eˣ，比较 ∫₀ˣ√u e⁻ᵘdu 与 x^{3/2} 的主阶。",
    "pitfalls": "积分变量换元后上下限和微分符号需一致；极限只在 x→0⁺ 下成立。"
  },
  "546": {
    "status": "verified",
    "questionKey": "2017-解答题-16",
    "primary": [
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "复合函数 y=f(eˣ,cosx) 的一阶、二阶导数由多元链式法则逐次求导。",
    "methods": "先写 y'=f_u u'+f_v v'，再对每一项求导并代 x=0。",
    "pitfalls": "二阶导包含二阶偏导项和一阶偏导乘内层二阶导项，不能遗漏 f_v v''。"
  },
  "547": {
    "status": "verified",
    "questionKey": "2017-解答题-17",
    "primary": [
      "CAL-06-E"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "该和式是黎曼和，极限转化为 ∫₀¹x ln(1+x)dx，再用分部积分求值。",
    "methods": "识别 Δx=1/n、x_k=k/n，写成定积分后分部积分。",
    "pitfalls": "注意 k/n²=(k/n)(1/n)，不能误识别为普通级数。"
  },
  "548": {
    "status": "verified",
    "questionKey": "2017-解答题-18",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "由隐函数方程求 y' 并令其为零，确定候选点；再用二阶导数符号判定极大、极小。",
    "methods": "隐式求导得到 y'，解 y'=0 并代回原方程，计算 y''。",
    "pitfalls": "驻点坐标必须满足原方程；二阶导数判别要在对应点代入。"
  },
  "549": {
    "status": "verified",
    "questionKey": "2017-解答题-19",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-03-C"
    ],
    "rationale": "先用极限条件确定 f(0)=0 且右侧邻域 f<0，再由零点定理得到根；构造 F=ff' 并两次使用罗尔定理。",
    "methods": "先证明 f 在 0 右侧为负；找 ξ 使 f(ξ)=0，再由罗尔定理找 η，最后对 F 分段应用罗尔定理。",
    "pitfalls": "第二问需要得到两个不同区间中的零点；必须验证 F 在三个端点处均为0。"
  },
  "550": {
    "status": "verified",
    "questionKey": "2017-解答题-20",
    "primary": [
      "CAL-08-F"
    ],
    "secondary": [
      "CAL-08-E"
    ],
    "rationale": "圆形区域 x²+y²≤2y 用极坐标表示为 0≤r≤2sinθ、0≤θ≤π；利用对称性拆分被积函数。",
    "methods": "展开 (x+1)²，奇函数项积分为0；余项用极坐标计算。",
    "pitfalls": "极坐标面积元必须包含 r；角度范围由圆心和区域位置决定。"
  },
  "551": {
    "status": "verified",
    "questionKey": "2017-解答题-21",
    "primary": [
      "CAL-07-A"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "切线、法线截距条件化为一阶齐次微分方程，再用 y=ux 代换分离变量求解。",
    "methods": "先写切线和法线的截距表达式，得到 (x+y)y'=y−x；令 u=y/x。",
    "pitfalls": "法线斜率为 −1/y'；推导截距时需避免符号错误，并使用 y(1)=0 确定积分常数。"
  },
  "552": {
    "status": "verified",
    "questionKey": "2017-解答题-22",
    "primary": [
      "LA-02-B"
    ],
    "secondary": [
      "LA-04-B",
      "LA-05-E"
    ],
    "rationale": "列向量存在非平凡线性关系，先得矩阵秩小于3；三个不同特征值保证可对角化且零特征值简单，从而秩为2。",
    "methods": "由列向量关系得 det A=0；再利用不同特征值和零特征值的代数重数确定秩，最后求非齐次方程特解与齐次基础解系。",
    "pitfalls": "列向量线性相关只能先推出秩至多2；秩至少2需要结合零特征值简单。"
  },
  "553": {
    "status": "verified",
    "questionKey": "2017-解答题-23",
    "primary": [
      "LA-05-C"
    ],
    "secondary": [
      "LA-06-A",
      "LA-06-B"
    ],
    "rationale": "实对称矩阵可正交对角化；标准型只有两个非零平方项说明矩阵秩为2，参数由行列式为零确定。",
    "methods": "构造二次型矩阵，令行列式为零求 a；求正交特征向量并单位化组成 Q。",
    "pitfalls": "交叉项系数要除以2放入对称矩阵；单位特征向量必须两两正交，且 QᵀAQ 对角项次序对应列向量。"
  },
  "554": {
    "status": "verified",
    "questionKey": "2018-选择题-1",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-01-G"
    ],
    "rationale": "幂指极限先取对数，要求指数中的差与 x² 相比趋于0；比较 eˣ 的一、二阶展开系数确定 a、b。",
    "methods": "令 u=eˣ+ax²+bx−1，考察 u/x²→0，依次令一次项和二次项系数为零。",
    "pitfalls": "要使 e^{u/x²}→1，需 u/x²→0；仅消去一次项还不够。"
  },
  "555": {
    "status": "verified",
    "questionKey": "2018-选择题-2",
    "primary": [
      "CAL-04-A"
    ],
    "secondary": [
      "CAL-01-F"
    ],
    "rationale": "在 x=0 处用导数定义检查差商；D 项的主项为 −|x|/(2x)，左右极限不同。",
    "methods": "分别展开各选项在0附近的函数增量，再除以 x 比较左右极限。",
    "pitfalls": "含 √|x| 的复合项要按主阶估计；左右极限相同才可导。"
  },
  "556": {
    "status": "verified",
    "questionKey": "2018-选择题-3",
    "primary": [
      "CAL-03-A"
    ],
    "secondary": [
      "CAL-03-B"
    ],
    "rationale": "分段函数和在两个拼接点连续，分别令左右极限与函数值相等，建立关于 a、b 的方程。",
    "methods": "先写出 f+g 的分段表达式，再在 x=−1、x=0 逐点匹配。",
    "pitfalls": "两个拼接点都必须检查；连续性不要求各分量函数分别连续。"
  },
  "557": {
    "status": "verified",
    "questionKey": "2018-选择题-4",
    "primary": [
      "CAL-05-G"
    ],
    "secondary": [
      "CAL-06-E"
    ],
    "rationale": "f''>0 表示严格凸，函数图像严格位于中点切线之上；积分切线不等式并利用积分为0可得 f(1/2)<0。",
    "methods": "在 x=1/2 处写切线下界并在[0,1]积分，线性项积分为0。",
    "pitfalls": "不能把凹凸性与单调性混淆；严格不等式来自 f'' 始终严格大于0。"
  },
  "558": {
    "status": "verified",
    "questionKey": "2018-选择题-5",
    "primary": [
      "CAL-06-E"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "M 的被积函数拆成常数加奇函数；N 利用 eˣ>1+x 比较，K 利用 √cosx≥0 且非零区间上严格为正比较。",
    "methods": "利用对称区间奇函数积分为0，分别与常数积分比较。",
    "pitfalls": "N 的被积函数为 (1+x)e⁻ˣ，区间内 1+x>0；比较时需确认不等式方向。"
  },
  "559": {
    "status": "verified",
    "questionKey": "2018-选择题-6",
    "primary": [
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-08-F"
    ],
    "rationale": "两个二重积分对应的区域关于 y 轴对称，xy 项为奇函数积分为0，剩余部分转化为区域面积。",
    "methods": "先识别合并区域，再利用对称性消去 xy 项；对称后计算区域面积。",
    "pitfalls": "两段积分的内层上下限不同，先合并区域再使用对称性；不能遗漏系数2。"
  },
  "560": {
    "status": "verified",
    "questionKey": "2018-选择题-7",
    "primary": [
      "LA-05-F"
    ],
    "secondary": [
      "LA-05-B"
    ],
    "rationale": "相似矩阵的判断不能只看特征值；本题可直接构造相似变换矩阵 P 并验证 P⁻¹AP 等于选项 A。",
    "methods": "按题给矩阵构造 P，计算 P⁻¹AP，与四个选项逐项比对。",
    "pitfalls": "相同特征值并不足以判定相似；需要相似变换或 Jordan 结构依据。"
  },
  "561": {
    "status": "verified",
    "questionKey": "2018-选择题-8",
    "primary": [
      "LA-02-B"
    ],
    "secondary": [
      "LA-02-E"
    ],
    "rationale": "分块矩阵 [A,AB]=A[I,B]，右乘矩阵不增加 A 的秩，同时分块矩阵包含 A 的列空间，因此秩相等。",
    "methods": "利用矩阵乘积秩不等式证明不超过 r(A)，再由包含 A 的列组证明不小于 r(A)。",
    "pitfalls": "区分 [A,AB] 与 [A,BA]；乘积左右次序不能互换。"
  },
  "562": {
    "status": "verified",
    "questionKey": "2018-填空题-9",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-02-D"
    ],
    "rationale": "arctan(x+1)−arctan x 可用拉格朗日中值定理表示为 1/(1+ξ²)，其中 ξ∈(x,x+1)，再求夹逼极限。",
    "methods": "对 arctan 在 [x,x+1] 使用中值定理，比较 x²/(1+ξ²)。",
    "pitfalls": "ξ 与 x 同阶且 ξ/x→1；不能把 ξ 直接当作 x+1 或 x。"
  },
  "563": {
    "status": "verified",
    "questionKey": "2018-填空题-10",
    "primary": [
      "CAL-05-G"
    ],
    "secondary": [
      "CAL-05-C"
    ],
    "rationale": "拐点由二阶导数变号确定，再求该点切线斜率与函数值。",
    "methods": "计算 y'、y''，解 y''=0 并验证凹凸性改变，写点斜式。",
    "pitfalls": "二阶导为零只是候选条件，必须验证两侧变号。"
  },
  "564": {
    "status": "verified",
    "questionKey": "2018-填空题-11",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "积分上限无穷，分母可因式分解并作部分分式，利用对数原函数计算收敛值。",
    "methods": "将分母分解为 (x−1)(x−3)，拆成两个简单分式后取上限极限。",
    "pitfalls": "分别的对数项在无穷远处发散，必须合并后取极限，不能拆开分别求值。"
  },
  "565": {
    "status": "verified",
    "questionKey": "2018-填空题-12",
    "primary": [
      "CAL-04-E"
    ],
    "secondary": [
      "CAL-05-C"
    ],
    "rationale": "参数方程曲率先由 dy/dx 与 d²y/dx² 求得，再代入曲率公式。",
    "methods": "先求参数一阶导和二阶导，再用 κ=|y''|/[1+(y')²]^(3/2)。",
    "pitfalls": "参数二阶导需除以 dx/dt；曲率分母是 3/2 次幂。"
  },
  "566": {
    "status": "verified",
    "questionKey": "2018-填空题-13",
    "primary": [
      "CAL-04-D"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "由隐函数 F(x,y,z)=0 求 z_x=−F_x/F_z，并先确认指定点对应 z=1。",
    "methods": "代入点求 z，再分别计算 F_x、F_z，使用隐函数求导公式。",
    "pitfalls": "F_z 不能漏掉 ln z 与 e^(z−1) 两部分的导数。"
  },
  "567": {
    "status": "verified",
    "questionKey": "2018-填空题-14",
    "primary": [
      "LA-05-A"
    ],
    "secondary": [
      "LA-01-A"
    ],
    "rationale": "以线性无关向量组为基，矩阵 A 在该基下的表示矩阵由三条作用关系的系数组成；相似矩阵行列式不变。",
    "methods": "令 P=(α₁,α₂,α₃)，写 AP=PC，故 |A|=|C|。",
    "pitfalls": "按每个 Aαⱼ 的系数作为表示矩阵第 j 列，不能把行列写反。"
  },
  "568": {
    "status": "verified",
    "questionKey": "2018-解答题-15",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-A"
    ],
    "rationale": "含 arctan 与指数复合项的不定积分，适合分部积分，余项再令 t=√(eˣ−1) 换元。",
    "methods": "取 u=arctan√(eˣ−1)、dv=e²ˣdx，分部积分后作根式换元。",
    "pitfalls": "求 du 时利用 1+(√(eˣ−1))²=eˣ 化简；最后别漏积分常数。"
  },
  "569": {
    "status": "verified",
    "questionKey": "2018-解答题-16",
    "primary": [
      "CAL-06-F"
    ],
    "secondary": [
      "CAL-07-B"
    ],
    "rationale": "先对卷积型积分换元并化为 F(x)=∫₀ˣf，求导得到一阶线性微分方程 F'+F=2ax。",
    "methods": "将第二积分换元为 xF(x)−∫₀ˣu f(u)du，再求导并解 F 方程。",
    "pitfalls": "换元后上下限与 x−t 的关系要准确；平均值为1且区间长度为1，所以积分也为1。"
  },
  "570": {
    "status": "verified",
    "questionKey": "2018-解答题-17",
    "primary": [
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-04-E",
      "CAL-06-C"
    ],
    "rationale": "区域由摆线参数方程与 x 轴围成，先对 y 积分，再用 t 参数化 x、y 及 dx。",
    "methods": "写成 ∫[xφ(x)+φ(x)²]dx，代入 x=t−sint、y=1−cost、dx=(1−cost)dt。",
    "pitfalls": "二重积分对 y 积分时上限为 φ(x)；参数换元需带 dx/dt。"
  },
  "571": {
    "status": "verified",
    "questionKey": "2018-解答题-18",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-05-A"
    ],
    "rationale": "构造 f 并研究导数符号：利用 g(x)=x−2lnx+2k 的单调区间与最小值证明 f 在1两侧的符号。",
    "methods": "求 f'=g/x，分 x<1 与 x>1 讨论 g 的单调性，再比较 f(x) 与 f(1)=0。",
    "pitfalls": "参数下界 k≥ln2−1 用于保证 g(2)≥0；需分别处理 x<1 和 x>1。"
  },
  "572": {
    "status": "verified",
    "questionKey": "2018-解答题-19",
    "primary": [
      "CAL-08-D"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "三段周长变量满足线性约束，总面积是正系数二次型；拉格朗日乘数法给出唯一内部极小值。",
    "methods": "分别写圆、正方形、正三角形面积，设周长 x+y+z=2，求约束极值。",
    "pitfalls": "检查长度非负约束与内部解；面积系数应分别为 1/(4π)、√3/36、1/16。"
  },
  "573": {
    "status": "verified",
    "questionKey": "2018-解答题-20",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "面积 S 表示为动点横坐标 x 的函数，利用链式法则求时间变化率。",
    "methods": "先由几何面积减去曲线下方面积得到 S(x)，再乘 dx/dt。",
    "pitfalls": "面积分割需避免重复或遗漏；最终代入 x=3、x'=4。"
  },
  "574": {
    "status": "verified",
    "questionKey": "2018-解答题-21",
    "primary": [
      "CAL-01-J"
    ],
    "secondary": [
      "CAL-01-A"
    ],
    "rationale": "由指数函数的中值定理证明 x_{n+1}=ln((e^{x_n}−1)/x_n) 位于0与x_n之间，进而单调有界收敛并求极限。",
    "methods": "先归纳正性，再用 e^{x_n}−1=x_n e^ξ 得 x_{n+1}=ξ∈(0,x_n)，最后令极限满足方程。",
    "pitfalls": "证明单调前需先证明各项为正；极限方程还需结合非负性排除其他根。"
  },
  "575": {
    "status": "verified",
    "questionKey": "2018-解答题-22",
    "primary": [
      "LA-06-B"
    ],
    "secondary": [
      "LA-06-A",
      "LA-06-D"
    ],
    "rationale": "二次型是三个线性表达式的平方和，f=0 等价于齐次线性方程组；规范形由系数矩阵秩及正惯性指数确定。",
    "methods": "将三个线性式作为新变量，计算变换矩阵行列式/秩，区分 a=2 与 a≠2。",
    "pitfalls": "平方和保证非负；变换可逆时规范形有三个正平方项，退化时只有两个。"
  },
  "576": {
    "status": "verified",
    "questionKey": "2018-解答题-23",
    "primary": [
      "LA-02-B"
    ],
    "secondary": [
      "LA-03-E",
      "LA-02-A"
    ],
    "rationale": "初等列变换保持秩，先比较 A、B 的秩确定参数，再解矩阵方程 AP=B 并从通解中选可逆解。",
    "methods": "分别求 A、B 的秩条件，代入 a 后解 A P=B，检查 det P≠0。",
    "pitfalls": "秩相等只是可解的必要结构条件，求出的 P 还必须满足可逆性。"
  },
  "577": {
    "status": "verified",
    "questionKey": "2019-选择题-1",
    "primary": [
      "CAL-01-G"
    ],
    "secondary": [
      "CAL-05-D"
    ],
    "rationale": "tan x 的泰勒展开首个非零差项为 x³/3，因此 x−tanx 与 x³ 同阶。",
    "methods": "展开 tanx=x+x³/3+o(x³)，比较无穷小阶数。",
    "pitfalls": "同阶看首个非零项；符号不影响阶数。"
  },
  "578": {
    "status": "verified",
    "questionKey": "2019-选择题-2",
    "primary": [
      "CAL-05-G"
    ],
    "secondary": [
      "CAL-05-C"
    ],
    "rationale": "对 y=x sinx+2cosx 求二阶导，检查 y'' 在区间内零点两侧是否变号。",
    "methods": "求 y''=−x sinx，确定 x=π 是区间内部变号点并求函数值。",
    "pitfalls": "端点不属于给定开区间；二阶导为零仍需验证变号。"
  },
  "579": {
    "status": "verified",
    "questionKey": "2019-选择题-3",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "反常积分敛散性可通过原函数或比较判别；D 项 x/(1+x²) 的原函数为半对数并趋于无穷。",
    "methods": "分别检查四个积分，D 项直接积分得 1/2 ln(1+x²)。",
    "pitfalls": "不能仅因区间无穷就判断发散；需检查被积函数衰减速度。"
  },
  "580": {
    "status": "verified",
    "questionKey": "2019-选择题-4",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "通解中的 (C₁+C₂x)e^(−x) 表明特征根 −1 为二重根；代入特解 eˣ 确定右端系数。",
    "methods": "由特征方程 (λ+1)² 求 a、b，再代 y=eˣ 求 c。",
    "pitfalls": "不要把齐次解中的指数根与非齐次特解指数混淆。"
  },
  "581": {
    "status": "verified",
    "questionKey": "2019-选择题-5",
    "primary": [
      "CAL-08-F"
    ],
    "secondary": [
      "CAL-08-E"
    ],
    "rationale": "区域内 r=√(x²+y²) 不超过 π/2，逐点比较 1−cosr、sinr、r，再用积分保序性比较三个积分。",
    "methods": "证明 0<r≤π/2 时 1−cosr<sinr<r，对区域积分。",
    "pitfalls": "比较函数需在整个区域成立；原点处等号不影响严格积分不等式。"
  },
  "582": {
    "status": "verified",
    "questionKey": "2019-选择题-6",
    "primary": [
      "CAL-05-C"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "若差商极限为0，二阶泰勒展开表明函数值、一阶导数和二阶导数在 a 处相同，从而切线与曲率相同；反向不成立。",
    "methods": "令 h=f−g，利用 h(x)/(x−a)²→0 推出 h(a)=h'(a)=h''(a)=0；再构造反例说明非必要。",
    "pitfalls": "曲率相等只约束二阶导绝对值（在相同切线斜率下），不能保证二阶导数相等。"
  },
  "583": {
    "status": "verified",
    "questionKey": "2019-选择题-7",
    "primary": [
      "LA-02-D"
    ],
    "secondary": [
      "LA-02-E"
    ],
    "rationale": "四阶矩阵齐次方程基础解系有2个向量，故秩为2；当秩小于 n−1 时伴随矩阵为零矩阵。",
    "methods": "由 nullity=2 得 r(A)=4−2=2，再用伴随矩阵秩定理。",
    "pitfalls": "伴随矩阵秩的分段结论依赖矩阵阶数及 r(A)；本题 r=2<3。"
  },
  "584": {
    "status": "verified",
    "questionKey": "2019-选择题-8",
    "primary": [
      "LA-06-D"
    ],
    "secondary": [
      "LA-05-C",
      "LA-06-A"
    ],
    "rationale": "实对称矩阵可正交对角化，特征值满足 λ²+λ−2=0；结合行列式确定特征值重数与正负惯性指数。",
    "methods": "解特征值方程得1、−2，利用三阶行列式为4确定谱为(1,−2,−2)。",
    "pitfalls": "规范形的正负平方项数量由正负特征值个数决定，不能只看行列式符号。"
  },
  "585": {
    "status": "verified",
    "questionKey": "2019-填空题-9",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-01-G"
    ],
    "rationale": "幂指型极限取对数，将其转化为 2 ln(x+2ˣ)/x，再用一阶展开求指数极限。",
    "methods": "写成 exp(2 ln(x+2ˣ)/x)，对 x+2ˣ 在0处作一阶展开。",
    "pitfalls": "底数趋于1且保持正值；取对数后需正确处理 2ˣ=e^(x ln2)。"
  },
  "586": {
    "status": "verified",
    "questionKey": "2019-填空题-10",
    "primary": [
      "CAL-04-E"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "摆线参数方程在指定 t 处先求坐标与 dy/dx，再写切线方程并读取轴截距。",
    "methods": "计算 dx/dt、dy/dt，得到斜率 sin t/(1−cos t)，代入 t=3π/2。",
    "pitfalls": "轴截距是令 y=0 后得到的 x 值；注意参数点横坐标包含 +1。"
  },
  "587": {
    "status": "verified",
    "questionKey": "2019-填空题-11",
    "primary": [
      "CAL-08-A"
    ],
    "secondary": [
      "CAL-08-B"
    ],
    "rationale": "对 z=y f(y²/x) 求偏导并组合 2x z_x+y z_y，链式法则中的 f' 项相消，剩余项为 z。",
    "methods": "设 u=y²/x，分别求 z_x、z_y 后代入目标组合。",
    "pitfalls": "两个偏导中的 f'(u) 项系数相反，避免漏掉外层因子 y。"
  },
  "588": {
    "status": "verified",
    "questionKey": "2019-填空题-12",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-04-E"
    ],
    "rationale": "弧长公式 L=∫√(1+(y')²)dx，y'=−tanx，积分化为 secx 的原函数。",
    "methods": "先求导，再利用 √(1+tan²x)=secx（区间内 secx>0）积分。",
    "pitfalls": "根号取正值；本题区间 [0,π/6] 上 secx 为正。"
  },
  "589": {
    "status": "verified",
    "questionKey": "2019-填空题-13",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-08-E"
    ],
    "rationale": "含变上限积分的外层积分可交换积分次序，将三角函数积分化为 sin(t²) 的直接换元。",
    "methods": "改写积分区域 0≤x≤t≤1，交换次序后先积 x，再令 u=t²。",
    "pitfalls": "原内积分从1到x方向相反，换序时必须带负号。"
  },
  "590": {
    "status": "verified",
    "questionKey": "2019-填空题-14",
    "primary": [
      "LA-01-B"
    ],
    "secondary": [
      "LA-01-A"
    ],
    "rationale": "行列式按第一行展开，第一行只有前两项非零，正好得到 A₁₁−A₁₂。",
    "methods": "直接按第一行拉普拉斯展开，与给出的代数余子式组合对照。",
    "pitfalls": "代数余子式已包含符号因子，不能再次重复加负号。"
  },
  "591": {
    "status": "verified",
    "questionKey": "2019-解答题-15",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-04-A",
      "CAL-03-A"
    ],
    "rationale": "分段函数分别求导并制作符号表；x=0 处函数连续但不可导，需结合左右单调性判断局部极值。",
    "methods": "对 x>0、x<0 分别求导，求驻点 −1、1/e，并检查拼接点0。",
    "pitfalls": "x=0 处导数不存在但仍可能是极值点；需比较两侧函数值趋势。"
  },
  "592": {
    "status": "verified",
    "questionKey": "2019-解答题-16",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-A"
    ],
    "rationale": "有理函数先作部分分式分解，再分别积分得到对数项与有理项。",
    "methods": "将分母分解为 (x−1)²(x²+x+1)，求部分分式系数后积分。",
    "pitfalls": "二次不可约因子分子应匹配其导数；注意 (x−1)² 项的积分符号。"
  },
  "593": {
    "status": "verified",
    "questionKey": "2019-解答题-17",
    "primary": [
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "一阶线性微分方程用积分因子 e^(−x²/2) 求解，再用初值确定常数；旋转体体积用圆盘法。",
    "methods": "求通解 y=e^(x²/2)(√x+C)，代初值得 C=0；再计算 π∫₁²y²dx。",
    "pitfalls": "积分因子符号要与 y'−xy 的系数匹配；旋转体体积需平方半径。"
  },
  "594": {
    "status": "verified",
    "questionKey": "2019-解答题-18",
    "primary": [
      "CAL-08-F"
    ],
    "secondary": [
      "CAL-08-E"
    ],
    "rationale": "区域条件转极坐标后得到 π/4≤θ≤3π/4、0≤r≤sin²θ；利用对称性消去 cosθ 部分。",
    "methods": "将两个区域不等式分别换成角度和半径限制，写出极坐标面积元 r dr dθ。",
    "pitfalls": "被积函数除以 r 后与面积元相乘仍有 r；区域是上半平面扇形曲边区域。"
  },
  "595": {
    "status": "verified",
    "questionKey": "2019-解答题-19",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "面积积分含 |sinx|，按每个长度 π 的区间分段，形成等比数列，再求无穷和。",
    "methods": "将积分拆成 kπ 到(k+1)π，利用周期符号和 e^(−kπ) 提取公比。",
    "pitfalls": "面积必须取绝对值；不能把正负波瓣直接抵消。"
  },
  "596": {
    "status": "verified",
    "questionKey": "2019-解答题-20",
    "primary": [
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "指数因子代换 u=v e^(ax+by) 后展开二阶偏导，令 v_x、v_y 的系数分别为零消去一阶偏导项。",
    "methods": "计算 u_x、u_xx、u_y、u_yy，收集 v_x、v_y 系数并解线性方程。",
    "pitfalls": "二阶项的链式展开会产生 2a、2b 系数；不要只代一阶导数。"
  },
  "597": {
    "status": "verified",
    "questionKey": "2019-解答题-21",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-05-G"
    ],
    "rationale": "积分中值定理给出内部点 a 使 f(a)=1，再用 f(a)=f(1) 的罗尔定理结论；第二问用内部最大值点和二阶泰勒公式。",
    "methods": "先由平均值确定取值1的点，再用罗尔定理；以最大值点为中心分别向两端作二阶泰勒展开。",
    "pitfalls": "第二问需要利用最大值严格大于1及两个泰勒余项点的较小二阶导数；不可将最大值点误当端点。"
  },
  "598": {
    "status": "verified",
    "questionKey": "2019-解答题-22",
    "primary": [
      "LA-03-D"
    ],
    "secondary": [
      "LA-03-A",
      "LA-03-C"
    ],
    "rationale": "两组向量等价等价于它们张成同一子空间；对合并矩阵行化简比较秩，并求 β₃ 的线性表示。",
    "methods": "把两组向量拼成矩阵，行化简分参数讨论，再解 α 系数方程。",
    "pitfalls": "a=1 时向量组秩下降，表示不唯一；a=−1 时两组张成空间不同。"
  },
  "599": {
    "status": "verified",
    "questionKey": "2019-解答题-23",
    "primary": [
      "LA-05-F"
    ],
    "secondary": [
      "LA-05-A",
      "LA-02-A"
    ],
    "rationale": "相似矩阵具有相同特征多项式，先比较特征值确定 x、y，再构造由对应特征向量组成的相似变换矩阵。",
    "methods": "计算 A、B 的特征多项式，确定参数后求 B 的特征向量并解 AP=PB。",
    "pitfalls": "特征值相同是必要非充分条件；构造 P 后应验证 P 可逆及 P⁻¹AP=B。"
  },
  "600": {
    "status": "verified",
    "questionKey": "2020-选择题-1",
    "primary": [
      "CAL-02-E"
    ],
    "secondary": [
      "CAL-06-F"
    ],
    "rationale": "A与C均为x³阶，B为x^(5/2)阶；D中√(sin³t)∼t^(3/2)，积分上限1−cos x∼x²/2，故D积分主阶为x⁵，趋零最快，阶最高。 由此应选D。",
    "methods": "分别对被积函数作等价无穷小替换，并结合积分上限的阶数计算积分主阶；比较A、B、C、D。",
    "pitfalls": "A与C同为x³阶；D的积分上限是1−cos x，阶为x²，不能误判为x。"
  },
  "601": {
    "status": "verified",
    "questionKey": "2020-选择题-2",
    "primary": [
      "CAL-03-B"
    ],
    "secondary": [
      "CAL-02-B"
    ],
    "rationale": "检查x=−1、0、1、2四处：对数因子发散、e^x−1为零、指数因子在1非有限、x−2为零，均为第二类间断点，共4处。",
    "methods": "找出表达式无定义点，逐一考察左右极限是否有限。",
    "pitfalls": "区分可去间断点与第二类间断点；x=1需独立判断指数因子。"
  },
  "602": {
    "status": "verified",
    "questionKey": "2020-选择题-3",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "令u=arcsin√x，积分化为2∫₀^{π/2}u du=π²/4。",
    "methods": "整体换元消去反三角函数和根式。",
    "pitfalls": "换元后区间为[0,π/2]，勿漏dx的雅可比因子。"
  },
  "603": {
    "status": "verified",
    "questionKey": "2020-选择题-4",
    "primary": [
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "由ln(1−x)=−∑x^k/k，乘x²后x^n系数为−1/(n−2)，故f⁽ⁿ⁾(0)=−n!/(n−2)。",
    "methods": "用麦克劳林级数读取系数，再乘n!。",
    "pitfalls": "注意乘x²造成幂次平移。"
  },
  "604": {
    "status": "verified",
    "questionKey": "2020-选择题-5",
    "primary": [
      "CAL-08-A"
    ],
    "secondary": [
      "CAL-08-B",
      "CAL-03-A"
    ],
    "rationale": "结论1成立：f(x,0)=x，故 f_x(0,0)=1。结论2不成立：对 x≠0，点(x,0)处 y 偏导的差商为(xh−x)/h，不存在有限极限。结论3成立，因 xy 区域内 xy→0，坐标轴上的函数值也趋于0。结论4成立，按题目所给迭代顺序内层极限为0。因此恰有3项正确，选B。",
    "methods": "逐项按偏导定义、二元极限定义和迭代极限顺序计算；混合偏导需先检查内层偏导函数是否存在。",
    "pitfalls": "不能只计算 f_y(0,0) 就认定混合偏导存在；混合偏导要求相应偏导函数在邻域内可定义。"
  },
  "605": {
    "status": "verified",
    "questionKey": "2020-选择题-6",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "f′>f>0推出(ln f)′>1；积分得ln[f(b)/f(a)]>b−a，逐项比较区间长度和函数比值。",
    "methods": "对正函数取对数，将微分不等式积分。",
    "pitfalls": "严格不等号和区间端点顺序不可颠倒。"
  },
  "606": {
    "status": "verified",
    "questionKey": "2020-选择题-7",
    "primary": [
      "LA-02-D"
    ],
    "secondary": [
      "LA-04-A"
    ],
    "rationale": "A奇异且A12代数余子式非零，说明删除第1行第2列所得三阶子式非零，故列向量α1、α3、α4线性无关。又A* A=det(A)I=0且rank(A)=3，因此A*的零空间等于A的列空间，维数为3，通解由α1、α3、α4张成，选C。",
    "methods": "先由非零代数余子式确定三列线性无关，再利用A*A=0及rank(A*)=1确定零空间等于A的列空间。",
    "pitfalls": "A*的零空间不是A的零空间；非零余子式对应删除的行列要准确识别。"
  },
  "607": {
    "status": "verified",
    "questionKey": "2020-选择题-8",
    "primary": [
      "LA-05-E"
    ],
    "secondary": [
      "LA-05-B"
    ],
    "rationale": "P的列向量需依次属于特征值1、−1、1的特征空间；选项D的列为α1+α2、−α3、α2，且线性无关。",
    "methods": "逐列核对特征值关系并验证列向量组可逆。",
    "pitfalls": "列顺序必须匹配目标对角阵；不同特征值的特征向量不可随意相加。"
  },
  "608": {
    "status": "verified",
    "questionKey": "2020-填空题-9",
    "primary": [
      "CAL-04-E"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "参数方程二阶导使用d²y/dx²=(d/dt(y′/x′))/x′；先求x′、y′再代入t=1。",
    "methods": "先求dy/dx，再对参数t求导并除以dx/dt。",
    "pitfalls": "不能把参数二阶导误写为y″(t)/x″(t)。"
  },
  "609": {
    "status": "verified",
    "questionKey": "2020-填空题-10",
    "primary": [
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "积分区域√y≤x≤1等价于0≤y≤x²、0≤x≤1；换序后为∫₀¹x²√(x³+1)dx，再令u=x³+1。",
    "methods": "画出区域后交换积分次序，再作幂函数代换。",
    "pitfalls": "边界是y≤x²，不是y≤x。"
  },
  "610": {
    "status": "verified",
    "questionKey": "2020-填空题-11",
    "primary": [
      "CAL-08-A"
    ],
    "secondary": [
      "CAL-08-B"
    ],
    "rationale": "令u=xy+sin(x+y)，dz=du/(1+u²)；在(0,π)处u=0，du=(π−1)dx−dy。",
    "methods": "用复合函数全微分链式法则。",
    "pitfalls": "外层arctan导数为1/(1+u²)，且cosπ=−1。"
  },
  "611": {
    "status": "verified",
    "questionKey": "2020-填空题-12",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-E"
    ],
    "rationale": "水深y处压强ρgy，三角形水平微元宽度随深度线性变化；对压强乘微元面积沿深度积分求合力。",
    "methods": "建立深度坐标和水平微元宽度，积分压强分布。",
    "pitfalls": "先确认三角形顶点与水面的相对位置；压力是面分布积分。"
  },
  "612": {
    "status": "verified",
    "questionKey": "2020-填空题-13",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-06-I"
    ],
    "rationale": "特征方程(r+1)²=0，初值解得y=xe^(−x)，故∫₀∞xe^(−x)dx=1。",
    "methods": "解重根二阶常系数方程，再计算反常积分。",
    "pitfalls": "重根通解含(A+Bx)e^(−x)，并确认积分收敛。"
  },
  "613": {
    "status": "verified",
    "questionKey": "2020-填空题-14",
    "primary": [
      "LA-01-A"
    ],
    "secondary": [
      "LA-01-B"
    ],
    "rationale": "利用矩阵的对称结构作行列变换或按行列展开，将四阶行列式化为低阶多项式。",
    "methods": "观察相同行/列组合，使用初等行变换并追踪行列式因子。",
    "pitfalls": "交换行、倍乘行、行倍加对行列式的影响不同。"
  },
  "614": {
    "status": "verified",
    "questionKey": "2020-解答题-15",
    "primary": [
      "CAL-05-H"
    ],
    "secondary": [
      "CAL-05-D"
    ],
    "rationale": "取对数展开：ln y=ln x−1+1/(2x)+O(x⁻²)，故y=x/e+1/(2e)+o(1)，斜渐近线为y=x/e+1/(2e)。",
    "methods": "先取对数作无穷远处展开，再求斜率和截距。",
    "pitfalls": "求截距必须保留1/x项，不能只求等价无穷大。"
  },
  "615": {
    "status": "verified",
    "questionKey": "2020-解答题-16",
    "primary": [
      "CAL-06-F"
    ],
    "secondary": [
      "CAL-06-H"
    ],
    "rationale": "换元得g(x)=x⁻¹∫₀ˣf(u)du；求导为[xf(x)−∫₀ˣf]/x²。由f(x)/x→1得g′(x)→1/2，且g′(0)=1/2。",
    "methods": "用变上限积分求导和商法则，0点另用极限证明连续。",
    "pitfalls": "x=0须单独按导数定义处理。"
  },
  "616": {
    "status": "verified",
    "questionKey": "2020-解答题-17",
    "primary": [
      "CAL-08-D"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "求驻点解3x²−y=0、24y²−x=0，再用二阶偏导构成Hessian判断各驻点类型。",
    "methods": "求一阶偏导、解驻点方程、用二阶判别法。",
    "pitfalls": "驻点不必然是极值；判别式为零时需进一步分析。"
  },
  "617": {
    "status": "verified",
    "questionKey": "2020-解答题-18",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-F"
    ],
    "rationale": "将函数方程中的x换成1/x，联立消元求f(x)；再由给定水平线确定积分区间，用圆盘/垫片法计算旋转体体积。",
    "methods": "函数方程代换消元，随后用π∫f(x)²dx计算体积。",
    "pitfalls": "注意互换后x²系数；明确旋转轴和积分区间。"
  },
  "618": {
    "status": "verified",
    "questionKey": "2020-解答题-19",
    "primary": [
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-08-F"
    ],
    "rationale": "区域1≤x≤2、0≤y≤x；可令y=xt，积分被积项化为√(1+t²)，dy=xdt。",
    "methods": "作变量代换y=xt将三角区域化为矩形区域。",
    "pitfalls": "雅可比因子为x，不能遗漏。"
  },
  "619": {
    "status": "verified",
    "questionKey": "2020-解答题-20",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-06-H"
    ],
    "rationale": "第一问构造辅助函数并用端点异号及介值定理；第二问对正连续权函数应用积分中值定理。",
    "methods": "构造辅助函数验证端点符号，使用积分中值定理。",
    "pitfalls": "端点异号必须严格；积分中值定理中的权函数不能漏。"
  },
  "620": {
    "status": "verified",
    "questionKey": "2020-解答题-21",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-07-B"
    ],
    "rationale": "将曲线与x轴围成的面积写为积分，切线与x轴交点由切线方程确定；面积比给出积分方程，求导后化为一阶微分方程。",
    "methods": "把几何条件代数化，建立积分方程后求导降阶。",
    "pitfalls": "切线截距与面积比方向要准确。"
  },
  "621": {
    "status": "verified",
    "questionKey": "2020-解答题-22",
    "primary": [
      "LA-06-A"
    ],
    "secondary": [
      "LA-06-B"
    ],
    "rationale": "写出两侧二次型矩阵，利用合同变换保持秩与惯性指数的性质确定参数，再由PᵀAP=B求可逆变换。",
    "methods": "比较秩、正负惯性指数等合同不变量，再解矩阵方程。",
    "pitfalls": "合同不等于相似；合同不保持特征值逐项相等。"
  },
  "622": {
    "status": "verified",
    "questionKey": "2020-解答题-23",
    "primary": [
      "LA-05-F"
    ],
    "secondary": [
      "LA-05-B"
    ],
    "rationale": "若(α,Aα)不可逆则Aα与α相关，α将为特征向量，与题设矛盾；第二问以(α,Aα)为基计算A的表示矩阵并求其特征值。",
    "methods": "用循环向量构造基，求A作用于基向量的坐标。",
    "pitfalls": "表示矩阵的列对应各基向量的像，注意列坐标顺序。"
  },
  "623": {
    "status": "verified",
    "questionKey": "2021-选择题-1",
    "primary": [
      "CAL-02-E"
    ],
    "secondary": [
      "CAL-06-F"
    ],
    "rationale": "e^t−1∼t，积分主阶为∫₀^{x²}t dt=x⁴/2，故相对于x⁷为高阶无穷小。",
    "methods": "等价无穷小替换后积分比较幂次。",
    "pitfalls": "上限是x²，积分结果主阶为x⁴。"
  },
  "624": {
    "status": "verified",
    "questionKey": "2021-选择题-2",
    "primary": [
      "CAL-02-E"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "函数在0处连续；由导数定义lim[(e^x−1−x)/x²]=1/2，故可导且导数非零。",
    "methods": "先求连续性，再用导数定义和指数函数展开。",
    "pitfalls": "不能把x≠0时的表达式直接求导后代入0。"
  },
  "625": {
    "status": "verified",
    "questionKey": "2021-选择题-3",
    "primary": [
      "CAL-04-B"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "对V=πr²h、S=2πrh+2πr²关于时间求导，代入r=10、h=5、r′=2、h′=−3得V′=−100π、S′=40π。",
    "methods": "对复合量作相关变化率求导。",
    "pitfalls": "保留半径和高度变化率的正负号。"
  },
  "626": {
    "status": "verified",
    "questionKey": "2021-选择题-4",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-05-E"
    ],
    "rationale": "f′=a−b/x，极小点x=b/a；两个零点要求极小值严格小于0，即b[1−ln(b/a)]<0，故b/a>e。",
    "methods": "求极小点并用极小值符号判断零点个数。",
    "pitfalls": "极小值等于0时只有一个零点，不满足两个零点。"
  },
  "627": {
    "status": "verified",
    "questionKey": "2021-选择题-5",
    "primary": [
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "sec(0)=1、sec′(0)=0、sec″(0)=1，二阶Taylor多项式为1+x²/2。",
    "methods": "使用二阶Taylor公式计算函数值及前两阶导数。",
    "pitfalls": "二次项系数为f″(0)/2!。"
  },
  "628": {
    "status": "verified",
    "questionKey": "2021-选择题-6",
    "primary": [
      "CAL-08-A"
    ],
    "secondary": [
      "CAL-08-B"
    ],
    "rationale": "原卷第一式右端是x(x+1)²，而非旧题库误录的x²(x+1)。对第一式求导并取x=0，得fₓ(1,1)+fᵧ(1,1)=1；第二式求导并取x=1，得fₓ(1,1)+2fᵧ(1,1)=2。解得fₓ=0、fᵧ=1，故df(1,1)=dy，选C。",
    "methods": "对两条参数曲线分别使用多元链式法则，选取分别经过(1,1)的参数值建立关于两个偏导的线性方程组。",
    "pitfalls": "注意原卷右端的括号位置：x(x+1)²；误录成x²(x+1)会改变导数方程。",
    "sourceUrl": "https://edu.xaiu.edu.cn/__local/D/5F/F6/88A32B7ECE68D893E18592D39FE_D23856BD_4735B.pdf#page=1",
    "sourceLabel": "查看2021年原卷第6题（PDF第1页）"
  },
  "629": {
    "status": "verified",
    "questionKey": "2021-选择题-7",
    "primary": [
      "CAL-06-E"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "将[0,1]等分n份，步长1/n，中点为(2k−1)/(2n)，相应中点黎曼和权重为1/n。",
    "methods": "按黎曼和定义匹配分割长度和取样点。",
    "pitfalls": "中点位置正确时，权重仍应为每段长度1/n。"
  },
  "630": {
    "status": "verified",
    "questionKey": "2021-选择题-8",
    "primary": [
      "LA-06-D"
    ],
    "secondary": [
      "LA-06-B"
    ],
    "rationale": "展开二次型得到对称矩阵，特征值为−1、0、3，因此正惯性指数1、负惯性指数1。",
    "methods": "写出对称矩阵并求特征值符号或合同标准形。",
    "pitfalls": "零特征值不计入正、负惯性指数；交叉项系数要平分。"
  },
  "631": {
    "status": "verified",
    "questionKey": "2021-选择题-9",
    "primary": [
      "LA-03-A"
    ],
    "secondary": [
      "LA-03-D"
    ],
    "rationale": "向量组可由B组线性表出意味着A=BP；若Bᵀx=0，则Aᵀx=PᵀBᵀx=0。",
    "methods": "将线性表示写成矩阵分解，再转置并作用于向量。",
    "pitfalls": "转置会反转乘法次序；注意解集包含方向。"
  },
  "632": {
    "status": "verified",
    "questionKey": "2021-选择题-10",
    "primary": [
      "LA-02-B"
    ],
    "secondary": [
      "LA-02-A"
    ],
    "rationale": "左乘给定下三角矩阵实施行消元，右乘上三角矩阵实施列消元，验证选项C使PAQ为对角矩阵。",
    "methods": "逐项计算PAQ并检查P、Q可逆。",
    "pitfalls": "左乘对应行变换，右乘对应列变换。"
  },
  "633": {
    "status": "verified",
    "questionKey": "2021-填空题-11",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "被积函数为偶函数，原积分化为2∫₀∞x3^(−x²)dx；令u=x²，得到∫₀∞3^(−u)du=1/ln3。",
    "methods": "利用偶函数对称性和u=x²换元。",
    "pitfalls": "du=2x dx，系数抵消后仍需除以ln3。"
  },
  "634": {
    "status": "verified",
    "questionKey": "2021-填空题-12",
    "primary": [
      "CAL-04-E"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "先求x′=2eᵗ+1、y′=4teᵗ+2t，再用d²y/dx²=(d/dt(y′/x′))/x′，t=0得2/3。",
    "methods": "参数一阶导后再对t求导并除以x′。",
    "pitfalls": "不能把参数二阶导简化为y″/x″。"
  },
  "635": {
    "status": "verified",
    "questionKey": "2021-填空题-13",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-08-B"
    ],
    "rationale": "先代入(0,2)求z=1，再对隐式方程关于x求偏导并代入，解得zx=1。",
    "methods": "先求指定点的隐函数值，再作隐函数偏导。",
    "pitfalls": "arctan(2xy)的导数需用链式法则。"
  },
  "636": {
    "status": "verified",
    "questionKey": "2021-填空题-14",
    "primary": [
      "CAL-06-F"
    ],
    "secondary": [
      "CAL-06-G"
    ],
    "rationale": "先用微积分基本定理对外层变上限积分求导，得到内层含参积分；再交换积分次序/换元计算并代入t=π/2。",
    "methods": "先处理外层上限，再处理内层参数积分。",
    "pitfalls": "内层被积函数仍含参数，不能漏掉参数依赖。"
  },
  "637": {
    "status": "verified",
    "questionKey": "2021-填空题-15",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "特征方程r³−1=0，根为1和−1/2±(√3/2)i，按一实根与一对共轭复根写出三阶常系数方程通解。",
    "methods": "求特征根并按实根、复根形式构造通解。",
    "pitfalls": "本题为三阶方程，需把常系数特征方程法从二阶推广。"
  },
  "638": {
    "status": "verified",
    "questionKey": "2021-填空题-16",
    "primary": [
      "LA-01-B"
    ],
    "secondary": [
      "LA-01-D"
    ],
    "rationale": "沿第一列作代数余子式展开，收集各子式产生的x³项，系数合计−1−4=−5。",
    "methods": "按行列式展开并只保留目标次数项。",
    "pitfalls": "注意代数余子式符号和各子式次数。"
  },
  "639": {
    "status": "verified",
    "questionKey": "2021-解答题-17",
    "primary": [
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-02-C",
      "CAL-02-E"
    ],
    "rationale": "通分分子应为 sin x·(1+I(x))−(e^x−1)，其中 I(x)=∫₀ˣe^(t²)dt=x+x³/3+o(x³)。于是 sin x(1+I)=x+x²+x³/6+o(x³)，e^x−1=x+x²/2+x³/6+o(x³)，分子为x²/2+o(x²)；分母为x²+o(x²)，极限为1/2。题库化简过程错误，但最终答案正确。",
    "methods": "严格通分后分别展开 sin x、e^x 与积分项，比较分子分母最低非零阶。",
    "pitfalls": "不能沿用题库中将分子写成 sin x−x−I(x) 的错误化简；遗漏了 sin x·I(x) 项。"
  },
  "640": {
    "status": "verified",
    "questionKey": "2021-解答题-18",
    "primary": [
      "CAL-05-C"
    ],
    "secondary": [
      "CAL-05-H"
    ],
    "rationale": "x>0 时 f=x²/(1+x)=x−1+1/(1+x)，故正无穷斜渐近线 y=x−1；x<0 时 f=−x²/(1+x)=−x+1−1/(1+x)，故负无穷斜渐近线 y=−x+1。垂直渐近线为 x=−1。题库负无穷方向的截距符号错误，现按正确结果修正。",
    "methods": "分 x>0、x<0 求二阶导数；分别计算两端斜率极限和截距极限确定斜渐近线。",
    "pitfalls": "负无穷方向 lim(f(x)+x)=1，故斜渐近线为 y=−x+1，而非 y=−x−1。"
  },
  "641": {
    "status": "verified",
    "questionKey": "2021-解答题-19",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-E"
    ],
    "rationale": "由不定积分等式两边求导得f(x)/√x=x/3−1，从而f(x)=x^(3/2)/3−√x；弧长公式与绕x轴旋转曲面面积公式分别积分。",
    "methods": "先由微积分基本定理恢复f，再计算f′、弧长积分和旋转曲面面积积分。",
    "pitfalls": "旋转面积公式含半径f(x)及弧长微元；需确认曲线在区间内位于x轴上方。"
  },
  "642": {
    "status": "verified",
    "questionKey": "2021-解答题-20",
    "primary": [
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "方程化为一阶线性方程，积分因子法得y=1+x⁶/3；法线斜率为−1/y′，截距函数Iy=y+x/y′，再求最小值。",
    "methods": "求通解并用初值定常数，再将法线方程与y轴交点写成x的函数求极值。",
    "pitfalls": "法线斜率是切线斜率的负倒数；截距表达式须保留符号并考虑x正负。"
  },
  "643": {
    "status": "verified",
    "questionKey": "2021-解答题-21",
    "primary": [
      "CAL-08-F"
    ],
    "secondary": [
      "CAL-08-E"
    ],
    "rationale": "极坐标下曲线化为r²=cos2θ，第一象限区域角度0≤θ≤π/4；xy=r²sinθcosθ，面积元rdrdθ，积分得1/48。",
    "methods": "将边界和被积函数转为极坐标，带入雅可比r并确定角度范围。",
    "pitfalls": "不要漏掉面积元中的r；角度上限由cos2θ≥0确定。"
  },
  "644": {
    "status": "verified",
    "questionKey": "2021-解答题-22",
    "primary": [
      "LA-05-A"
    ],
    "secondary": [
      "LA-05-B"
    ],
    "rationale": "特征多项式为(λ−b)(λ−3)(λ−1)，仅两个不同特征值要求b=1或3；重特征值对应特征子空间维数必须为2，分别推出(a,b)=(-1,3)或(1,1)，再拼接特征向量构造P。",
    "methods": "求特征多项式，分类重根情形，计算特征空间维数并构造可逆特征向量矩阵。",
    "pitfalls": "仅有两个不同特征值不自动保证可对角化；必须检查重根几何重数。"
  },
  "645": {
    "status": "verified",
    "questionKey": "2022-选择题-1",
    "primary": [
      "CAL-02-E"
    ],
    "secondary": [
      "CAL-01-G"
    ],
    "rationale": "①等价无穷小平方后仍等价；②取a=−β即可反例；③由(a−β)/a→0；④由β/a=1−(a−β)/a→1。故真命题①③④。",
    "methods": "逐条按等价无穷小定义转化为比值极限，构造反例否定逆命题。",
    "pitfalls": "平方等价不能反推原函数等价，因为符号可能相反。"
  },
  "646": {
    "status": "verified",
    "questionKey": "2022-选择题-2",
    "primary": [
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "积分区域为0≤y≤x≤2，交换次序后先对y积分，化为(1/2)∫₀²x²/√(1+x³)dx，换元u=1+x³得2/3。",
    "methods": "画区域交换积分次序，再作u=1+x³代换。",
    "pitfalls": "交换次序后外层x范围为[0,2]，内层y范围为[0,x]。"
  },
  "647": {
    "status": "verified",
    "questionKey": "2022-选择题-3",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-05-G"
    ],
    "rationale": "A可用f(x)=x³在0处反例；B由f′(x₀)>0及导数连续性（存在二阶导数保证f′在邻域连续）得局部递增；C常数函数反例；D二阶导正表示局部凸而非凹。",
    "methods": "分别利用导数定义、导数连续性和二阶导数判别凹凸。",
    "pitfalls": "单调递增不保证某点导数严格正；凹凸术语的符号约定需一致。"
  },
  "648": {
    "status": "verified",
    "questionKey": "2022-选择题-4",
    "primary": [
      "CAL-06-F"
    ],
    "secondary": [
      "CAL-08-B"
    ],
    "rationale": "令s=x−y，则F(x,y)=G(s)，故Fx=G′、Fy=−G′，Fxx=Fyy=G″=f(x−y)。选C。",
    "methods": "先识别函数只依赖组合变量x−y，再用链式法则求一、二阶偏导。",
    "pitfalls": "二阶对y求导时负号平方后消失，因此Fxx=Fyy。"
  },
  "649": {
    "status": "verified",
    "questionKey": "2022-选择题-5",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-02-E"
    ],
    "rationale": "x→0时被积函数同阶于lnx/x^p，收敛要求p<1；x→1时lnx∼−(1−x)，被积函数同阶于−(1−x)^p，收敛要求p>−1。",
    "methods": "分开考察两个端点，分别用等价无穷小化为幂函数反常积分。",
    "pitfalls": "两个端点的条件需取交集；p=±1端点均发散。"
  },
  "650": {
    "status": "verified",
    "questionKey": "2022-选择题-6",
    "primary": [
      "CAL-02-A"
    ],
    "secondary": [
      "CAL-01-I"
    ],
    "rationale": "cos x_n∈[0,1]且sin在[0,1]严格单调，sin(cos x_n)收敛可推出cos x_n收敛；但x_n可在±π/2间振荡。",
    "methods": "利用连续严格单调函数在紧区间上的逆映射连续性，并构造交替数列反例。",
    "pitfalls": "函数复合值收敛不一定推出原数列收敛；注意cos在给定区间不是单射。"
  },
  "651": {
    "status": "verified",
    "questionKey": "2022-选择题-7",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-06-E"
    ],
    "rationale": "对0<x<1有ln(1+x)>x/2，故I2>I1；又ln(1+x)<x且1+cosx>1、1+sinx<2，得I2的被积函数<x< I3的被积函数，故I1<I2<I3。",
    "methods": "先建立逐点不等式，再在相同积分区间积分比较。",
    "pitfalls": "比较被积函数时需确认分母正且不等式方向不变。"
  },
  "652": {
    "status": "verified",
    "questionKey": "2022-选择题-8",
    "primary": [
      "LA-05-F"
    ],
    "secondary": [
      "LA-05-B"
    ],
    "rationale": "矩阵具有特征值1、−1、0当且仅当其与Λ=diag(1,−1,0)相似，即存在可逆P使A=PΛP⁻¹。",
    "methods": "使用相似矩阵特征值不变性及相似定义。",
    "pitfalls": "正交相似或合同分解是更强条件，不是一般矩阵特征值相同的必要条件。"
  },
  "653": {
    "status": "verified",
    "questionKey": "2022-选择题-9",
    "primary": [
      "LA-04-D"
    ],
    "secondary": [
      "LA-04-A"
    ],
    "rationale": "detA=(a−1)(b−1)(b−a)。行列式非零时唯一解；行列式为零时分a=1、b=1或a=b讨论，增广列右端不满足相同线性关系，故无解。",
    "methods": "先用行列式判可逆情形，再对奇异参数逐类比较系数矩阵与增广矩阵秩。",
    "pitfalls": "detA=0只说明非唯一可逆，不足以直接判断无解；必须检查增广秩。"
  },
  "654": {
    "status": "verified",
    "questionKey": "2022-选择题-10",
    "primary": [
      "LA-03-B"
    ],
    "secondary": [
      "LA-03-C"
    ],
    "rationale": "两组三向量等价等价于秩相同。计算两组行列式分别为(λ−1)²(λ+2)与(λ−1)²(λ+1)²；除λ=−1、−2外秩相同，λ=1时两组秩均为1。",
    "methods": "分别求两组向量组的秩，比较行列式非零及退化参数情形。",
    "pitfalls": "行列式同时为零时仍须比较秩，不能直接判不等价。"
  },
  "655": {
    "status": "verified",
    "questionKey": "2022-填空题-11",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-05-D"
    ],
    "rationale": "取对数后lnL=lim cotx·ln((1+eˣ)/2)；括号内对数∼x/2且tanx∼x，故lnL=1/2，L=√e。",
    "methods": "对幂指型极限取对数，使用指数与对数的一阶展开。",
    "pitfalls": "先求对数极限，最后还原指数；避免把极限直接当成1/2。"
  },
  "656": {
    "status": "verified",
    "questionKey": "2022-填空题-12",
    "primary": [
      "CAL-04-D"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "先由x=1代入得y(1)=1；一次求导得y′(1)=−3/4；再次求导并代入得y″(1)=−31/32。",
    "methods": "对隐式方程连续两次求导，保留y′与y″项后代入点值。",
    "pitfalls": "二次求导时xy项产生2y′，y³项产生6y(y′)²+3y²y″。"
  },
  "657": {
    "status": "verified",
    "questionKey": "2022-填空题-13",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-D"
    ],
    "rationale": "将分子拆为(2x−1)+4，前项为ln(x²−x+1)在0到1的端点差为0；后项配方成反正切积分，得8√3π/9。",
    "methods": "分子拆成分母导数倍数与常数，再配方积分。",
    "pitfalls": "分母配方为(x−1/2)²+3/4；反正切上下限差为π/3。"
  },
  "658": {
    "status": "verified",
    "questionKey": "2022-填空题-14",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "特征方程r³−2r²+5r=r(r²−2r+5)=0，根为0、1±2i，通解为C1+eˣ(C2cos2x+C3sin2x)。",
    "methods": "建立特征方程并按实根与共轭复根写三阶常系数方程通解。",
    "pitfalls": "三阶方程需包含三个独立常数；复根实部决定指数因子。"
  },
  "659": {
    "status": "verified",
    "questionKey": "2022-填空题-15",
    "primary": [
      "CAL-08-F"
    ],
    "secondary": [
      "CAL-08-E"
    ],
    "rationale": "极坐标面积S=(1/2)∫₀^{π/3}sin²(3θ)dθ=π/12。",
    "methods": "使用极坐标曲边扇形面积公式并作三角恒等变换。",
    "pitfalls": "面积公式有1/2系数；积分区间对应完整花瓣边界。"
  },
  "660": {
    "status": "verified",
    "questionKey": "2022-填空题-16",
    "primary": [
      "LA-02-A"
    ],
    "secondary": [
      "LA-02-C"
    ],
    "rationale": "把交换行和列倍加分别表示为左乘、右乘初等矩阵，写出B=P1AP2，故A⁻¹=P2B⁻¹P1；计算迹为−1。",
    "methods": "还原行列初等变换的矩阵乘法关系，再求逆矩阵并取迹。",
    "pitfalls": "左乘与右乘次序不能互换；逆矩阵乘积次序反转。"
  },
  "661": {
    "status": "verified",
    "questionKey": "2022-解答题-17",
    "primary": [
      "CAL-04-A"
    ],
    "secondary": [
      "CAL-02-E"
    ],
    "rationale": "极限存在先要求常数项f(1)−3f(1)=0，得f(1)=0；利用e^{x²}−1∼x²、sin²x∼x²及f在1可导，极限为f′(1)−3f′(1)=2，得f′(1)=−1。",
    "methods": "先消去常数项，再按可导定义把复合增量换成x²阶。",
    "pitfalls": "不能直接对f求二阶导；题设只保证一阶可导。"
  },
  "662": {
    "status": "verified",
    "questionKey": "2022-解答题-18",
    "primary": [
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "线性方程积分因子为x⁻²，解得y=x²/4−(1/2)lnx；于是1+(y′)²=(x/2+1/(2x))²，弧长积分得(e²+1)/4。",
    "methods": "用积分因子解一阶线性方程，再利用完全平方简化弧长根式。",
    "pitfalls": "积分区间x≥1，根式取正号；初值用于确定齐次解常数。"
  },
  "663": {
    "status": "verified",
    "questionKey": "2022-解答题-19",
    "primary": [
      "CAL-08-F"
    ],
    "secondary": [
      "CAL-08-E"
    ],
    "rationale": "区域由y轴、圆x²+y²=4及直线x=y−2围成，转极坐标后需按直线与圆弧交界分段；被积函数化为(cosθ−sinθ)²，积分结果2π−2。",
    "methods": "先画区域，求直线的极坐标边界并按径向上界变化分段积分。",
    "pitfalls": "直线边界r=2/(sinθ−cosθ)只在分母为正的角域有效；须分段确定r上限。"
  },
  "664": {
    "status": "verified",
    "questionKey": "2022-解答题-20",
    "primary": [
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-08-D"
    ],
    "rationale": "令g(x,y)=f(x,y−x)，链式法则给gx=fu−fv=(4x−2y)e⁻ʸ；积分得g，再由边界f(u,0)确定函数，最终f=(u²+v²)e^{−(u+v)}，分析驻点及极值。",
    "methods": "用变量替换把偏微分方程转为关于x的一元积分，再用边界条件确定任意函数。",
    "pitfalls": "链式法则中v=y−x产生负号；驻点不自动都是极值点。"
  },
  "665": {
    "status": "verified",
    "questionKey": "2022-解答题-21",
    "primary": [
      "CAL-05-G"
    ],
    "secondary": [
      "CAL-06-H"
    ],
    "rationale": "若f″≥0，则f凸，切线支撑不等式积分后得到中点函数值不超过区间平均值；反之若某点f″<0，由连续性可取小区间使其严格凹，与条件矛盾。",
    "methods": "用凸函数切线不等式证明必要性，反设局部凹函数构造反例证明充分性。",
    "pitfalls": "充分性需利用f″连续性把单点负值扩展为邻域；区间端点应按a<b处理。"
  },
  "666": {
    "status": "verified",
    "questionKey": "2022-解答题-22",
    "primary": [
      "LA-05-C"
    ],
    "secondary": [
      "LA-06-D"
    ],
    "rationale": "二次型矩阵为[[3,0,1],[0,4,0],[1,0,3]]，特征值4、4、2；取标准正交特征向量构成Q，正交对角化后最小Rayleigh商为最小特征值2。",
    "methods": "求实对称矩阵特征值和正交特征向量，使用Rayleigh商最小值定理。",
    "pitfalls": "正交矩阵列向量须单位正交；最小值对应最小特征值2。"
  },
  "667": {
    "status": "verified",
    "questionKey": "2023-选择题-1",
    "primary": [
      "CAL-05-H"
    ],
    "secondary": [
      "CAL-05-D"
    ],
    "rationale": "斜率lim(y/x)=1；截距lim(y−x)=lim x[ln(e+1/(x−1))−1]=1/e，故渐近线y=x+1/e。",
    "methods": "按斜渐近线定义分别求斜率和截距，使用ln(1+u)∼u。",
    "pitfalls": "对数展开中的小量约为1/[e(x−1)]，乘x后极限为1/e。"
  },
  "668": {
    "status": "verified",
    "questionKey": "2023-选择题-2",
    "primary": [
      "CAL-06-A"
    ],
    "secondary": [
      "CAL-03-A"
    ],
    "rationale": "分段积分后左侧原函数为ln(√(1+x²)+x)+C1，右侧为(x+1)sinx+cosx+C2；在x=0连续要求C1=1、C2=0，选D。",
    "methods": "分别求两段原函数，再用原函数在分界点连续确定常数。",
    "pitfalls": "分段原函数不仅要分别求导正确，还须在连接点连续；本题两侧导数也与f(0)相符。"
  },
  "669": {
    "status": "verified",
    "questionKey": "2023-选择题-3",
    "primary": [
      "CAL-02-A"
    ],
    "secondary": [
      "CAL-01-G"
    ],
    "rationale": "两数列均正且递减趋零；由y_{n+1}/x_{n+1}=(y_n/x_n)(x_n/sinx_n)y_n，且x_n/sinx_n→1、y_n→0，可得y_n/x_n→0。",
    "methods": "先证明两个数列趋零，再建立相邻项比值递推并证明比值趋零。",
    "pitfalls": "需说明递推乘子最终小于某个小于1的常数，不能仅凭形式乘积断言极限。"
  },
  "670": {
    "status": "verified",
    "questionKey": "2023-选择题-4",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "特征根必须使所有实解在整个实轴有界；唯一可能是纯虚共轭根±iβ，故a=0、b>0。",
    "methods": "分类讨论特征方程实根、重根和复根实部，排除指数增长及线性项。",
    "pitfalls": "全实轴有界比单侧有界严格得多；零根或重根会产生常数/线性组合，需审慎处理。"
  },
  "671": {
    "status": "verified",
    "questionKey": "2023-选择题-5",
    "primary": [
      "CAL-04-E"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "由参数式分t正负解出分段函数；两侧一阶导数在0趋于0且f′(0)=0，故f′连续；但f′差商左右极限分别−2与2/9，二阶导不存在。",
    "methods": "按参数符号消去t，得到分段函数后逐阶检查导数及连接点左右极限。",
    "pitfalls": "参数式在t=0两侧的x与y表达不同，不能直接套单一参数导数公式跨过绝对值点。"
  },
  "672": {
    "status": "verified",
    "questionKey": "2023-选择题-6",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "令u=lnx，积分化为∫_{ln2}∞u^{−a−1}du=(ln2)^{−a}/a（a>0）；求导令零得a0=−1/ln(ln2)，并核查为极小值。",
    "methods": "先换元确定收敛参数域，再对参数函数求导找极值。",
    "pitfalls": "积分收敛要求a>0；不能在参数函数定义域外讨论极小值。"
  },
  "673": {
    "status": "verified",
    "questionKey": "2023-选择题-7",
    "primary": [
      "CAL-05-F"
    ],
    "secondary": [
      "CAL-05-G"
    ],
    "rationale": "f′=(x²+2x+a)eˣ，无极值要求二次因子不变号，a≥1；f″=(x²+4x+a+2)eˣ，有拐点要求二次因子有两个不同实根，a<2，合并得[1,2)。",
    "methods": "分别把无极值和有拐点转化为二次多项式判别式条件。",
    "pitfalls": "a=1时f′有重零点但不变号；拐点要求凹凸性改变，故a=2不取。"
  },
  "674": {
    "status": "verified",
    "questionKey": "2023-选择题-8",
    "primary": [
      "LA-02-D"
    ],
    "secondary": [
      "LA-02-F"
    ],
    "rationale": "分块上三角矩阵行列式为|A||B|，逆矩阵为[[A⁻¹,−A⁻¹B⁻¹],[0,B⁻¹]]；伴随矩阵=det(M)M⁻¹，得到选项D。",
    "methods": "先求分块矩阵逆，再利用M*=|M|M⁻¹转为伴随矩阵表达式。",
    "pitfalls": "矩阵乘法不可交换，右上块次序是−A⁻¹B⁻¹，转成伴随形式为−A*B*。"
  },
  "675": {
    "status": "verified",
    "questionKey": "2023-选择题-9",
    "primary": [
      "LA-06-D"
    ],
    "secondary": [
      "LA-06-B"
    ],
    "rationale": "对应对称矩阵特征值为3、−7、0，故秩2且惯性指数(1,1)，规范形为y1²−y2²。",
    "methods": "写出二次型对称矩阵，求特征值符号并应用惯性定理。",
    "pitfalls": "规范形系数按正负惯性指数归一化；零特征值对应零平方项。"
  },
  "676": {
    "status": "verified",
    "questionKey": "2023-选择题-10",
    "primary": [
      "LA-03-C"
    ],
    "secondary": [
      "LA-03-B"
    ],
    "rationale": "γ属于两组向量张成空间的交，令两种线性表示相等组成齐次方程组，消元得公共向量方向为(1,5,8)，故γ=k(1,5,8)。",
    "methods": "将两个线性表示相等，解系数方程组并代回求交空间生成向量。",
    "pitfalls": "公共向量需同时属于两组张成空间；参数解代回任一组核验。"
  },
  "677": {
    "status": "verified",
    "questionKey": "2023-填空题-11",
    "primary": [
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-02-E"
    ],
    "rationale": "展开f=(a+1)x+(b−1/2)x²+o(x²)，g=(3/2)x²+o(x²)；等价要求a=−1、b=2，故ab=−2。",
    "methods": "对ln(1+x)、e^{x²}和cosx作二阶展开，比较首个非零项。",
    "pitfalls": "等价无穷小要求首个非零阶系数相同，先消去一次项。"
  },
  "678": {
    "status": "verified",
    "questionKey": "2023-填空题-12",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-F"
    ],
    "rationale": "由微积分基本定理y′=√(3−x²)，弧长为∫_{−√3}^{√3}√(4−x²)dx，计算得4π/3+√3。",
    "methods": "先求导函数，再代入弧长公式，利用圆弓形积分或三角代换计算。",
    "pitfalls": "积分区间是[−√3,√3]，根式为√(4−x²)，半径为2。"
  },
  "679": {
    "status": "verified",
    "questionKey": "2023-填空题-13",
    "primary": [
      "CAL-04-D"
    ],
    "secondary": [
      "CAL-08-B"
    ],
    "rationale": "先由点(1,1)代入确定z=0；一次偏导得zx=1，再对x求导得e^z(zx)²+e^zzxx+2zx+xzxx=0，解得zxx=−3/2。",
    "methods": "对隐式方程连续两次求x偏导，逐步代入点值。",
    "pitfalls": "二次求导时xz项产生2zx；不要漏掉e^z(zx)²项。"
  },
  "680": {
    "status": "verified",
    "questionKey": "2023-填空题-14",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "由隐式方程求出 dy/dx=9/11，再用法线斜率为切线斜率负倒数，得到 -11/9。",
    "methods": "先代入 x=1 求对应点 (1,1)，对方程两边求导，再取负倒数。",
    "pitfalls": "不要把切线斜率直接当作法线斜率；法线斜率是 -1/y'。"
  },
  "681": {
    "status": "verified",
    "questionKey": "2023-填空题-15",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-E"
    ],
    "rationale": "利用 f(x+2)=f(x)+x 将区间 [2,3] 平移到 [0,1]，再用 [0,2] 上积分为零消去 f 的积分项。",
    "methods": "拆分积分区间，对第二段作变量代换 u=x-2，再代入函数递推关系。",
    "pitfalls": "平移积分时同步变换被积函数；不能把 f(u+2) 直接当成 f(u)。"
  },
  "682": {
    "status": "verified",
    "questionKey": "2023-填空题-16",
    "primary": [
      "LA-04-D"
    ],
    "secondary": [
      "LA-01-D",
      "LA-01-B"
    ],
    "rationale": "四元增广矩阵行列式为零的展开关系，结合已知三阶行列式值，直接得到目标三阶行列式为 8。",
    "methods": "由方程组有解建立增广矩阵秩条件，按最后一列展开四阶行列式。",
    "pitfalls": "按列展开时注意代数余子式符号；首列/末列展开的符号不能混淆。"
  },
  "683": {
    "status": "verified",
    "questionKey": "2023-解答题-17",
    "primary": [
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "切线在 y 轴截距为 y-xy'，结合题设距离条件及经过点 (e²,0)，得到一阶线性微分方程 y'-(1/x)y=-1。",
    "methods": "先写切线方程并令横坐标为零求截距，再解一阶线性方程并代入初值。",
    "pitfalls": "题设是截距的距离；需结合连续性和给定点确定正号分支，不能无条件省略绝对值。"
  },
  "684": {
    "status": "verified",
    "questionKey": "2023-解答题-1",
    "primary": [
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-04-C"
    ],
    "rationale": "将切线 y 轴截距写为 y-xy'，由题设取正分支得到 y'-(1/x)y=-1，积分因子法给出 y=x(C-ln x)，初值确定 C=2。",
    "methods": "使用积分因子 μ=1/x，解线性方程并代入 (e²,0)。",
    "pitfalls": "检查积分因子乘法后的导数形式；常数由 ln(e²)=2 决定。"
  },
  "685": {
    "status": "verified",
    "questionKey": "2023-解答题-2",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "切线与坐标轴截距分别为 x/(ln x-1) 和 x，三角形面积为 x²/[2(ln x-1)]；求导得最小点 x=e^(3/2)，最小面积 e³。",
    "methods": "分别令切线方程中的 X=0、Y=0 求截距，再对面积函数求极值并检验单调性。",
    "pitfalls": "需确保 x>e 时截距符号与面积取绝对值一致；最小面积不是把 x=e^(3/2) 直接代入分母而漏掉 1/2。"
  },
  "686": {
    "status": "verified",
    "questionKey": "2023-解答题-18",
    "primary": [
      "CAL-08-D"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "求两个一阶偏导得到驻点，再用 Hessian 判别式 AC-B² 判断；(−e,2kπ) 为极小点，另一族为鞍点。",
    "methods": "先解 fx=fy=0，分驻点计算二阶偏导及判别式。",
    "pitfalls": "驻点不等于极值点；AC-B²<0 时为鞍点，>0 时还要看 fxx 符号。"
  },
  "687": {
    "status": "verified",
    "questionKey": "2023-解答题-19",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "区域面积和绕 x 轴旋转体体积均化为无穷区间反常积分，核心是建立正确积分表达式并判断收敛。",
    "methods": "分别使用面积积分 ∫y dx 和圆盘法体积 π∫y² dx。",
    "pitfalls": "上限为无穷，必须按反常积分定义处理；体积公式中半径要平方。"
  },
  "688": {
    "status": "verified",
    "questionKey": "2023-解答题-1",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "面积积分 ∫₁∞[x√(1+x²)]⁻¹dx 经 x=tan t 化为 csc t 的积分，结果 ln(1+√2)。",
    "methods": "作三角代换 x=tan t，化简被积函数并计算端点极限。",
    "pitfalls": "无穷上限对应 t→π/2 的极限；原函数对数表达式要正确处理绝对值。"
  },
  "689": {
    "status": "verified",
    "questionKey": "2023-解答题-2",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-06-C",
      "CAL-06-B"
    ],
    "rationale": "旋转体体积为 π∫₁∞1/[x²(1+x²)]dx，部分分式拆成 1/x²−1/(1+x²)，得到 π(1−π/4)。",
    "methods": "先用圆盘法建立体积积分，再部分分式积分并取无穷上限极限。",
    "pitfalls": "不要遗漏 π；反常积分上限需取极限，且第二项积分为 π/4。"
  },
  "690": {
    "status": "verified",
    "questionKey": "2023-解答题-20",
    "primary": [
      "CAL-08-F"
    ],
    "secondary": [
      "CAL-08-E"
    ],
    "rationale": "极坐标将两条二次曲线化为径向边界、两条直线化为角度范围；被积函数含雅可比 r，径向积分给出 ln√2。",
    "methods": "写出 r、θ 的上下限，代入 dxdy=r drdθ，再先对 r 积分。",
    "pitfalls": "分母 3x²+y² 应变为 r²(3cos²θ+sin²θ)，不能漏掉雅可比因子 r。"
  },
  "691": {
    "status": "verified",
    "questionKey": "2023-解答题-21",
    "primary": [
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-05-A"
    ],
    "rationale": "两部分证明都以二阶 Taylor 中值余项为核心，结合 f'' 连续性或极值点处 f'=0 建立所需估计。",
    "methods": "围绕 0 或极值点作二阶 Taylor 展开，再相加/相减并使用连续性与三角不等式。",
    "pitfalls": "第二问要利用 |a−c|²+|a+c|²=2(a²+c²)≤4a²；不能把两个余项的中间点误认为相同。"
  },
  "692": {
    "status": "verified",
    "questionKey": "2023-解答题-1",
    "primary": [
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-05-A"
    ],
    "rationale": "分别在 0 处向 ±a 作带 Lagrange 余项的二阶展开，相加后由 f'' 连续及介值定理得到指定 ξ。",
    "methods": "写出 f(a)、f(−a) 的二阶 Taylor 公式，消去一阶项并应用介值定理。",
    "pitfalls": "两侧余项点 ξ₁、ξ₂ 一般不同；需用连续函数 f'' 的介值性，而非直接令两者相等。"
  },
  "693": {
    "status": "verified",
    "questionKey": "2023-解答题-2",
    "primary": [
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-05-A",
      "CAL-05-B"
    ],
    "rationale": "在极值点 c 处 f'(c)=0，分别向两端作二阶 Taylor 展开，相减并以两个二阶导数绝对值的较大者估计。",
    "methods": "选取 |f''(η₁)|、|f''(η₂)| 中较大者，利用平方和上界推出结论。",
    "pitfalls": "平方和为 2(a²+c²)≤4a²；最终系数是 1/(2a²)，不是 1/a²。"
  },
  "694": {
    "status": "verified",
    "questionKey": "2023-解答题-22",
    "primary": [
      "LA-05-B"
    ],
    "secondary": [
      "LA-05-A"
    ],
    "rationale": "由线性变换对任意向量的表达式读出矩阵 A，再求特征值和特征向量构造 P、Λ 实现相似对角化。",
    "methods": "按各分量对 x₁、x₂、x₃ 的系数写矩阵列/行，再解特征方程。",
    "pitfalls": "矩阵按输出分量的系数排列；P 的列向量应按 Λ 对角元顺序放置。"
  },
  "695": {
    "status": "verified",
    "questionKey": "2023-解答题-1",
    "primary": [
      "LA-02-A"
    ],
    "secondary": [
      "LA-05-A"
    ],
    "rationale": "线性映射的三个输出分量分别给出矩阵的三行，故 A 的行向量由各分量系数直接确定。",
    "methods": "逐个读取 x₁、x₂、x₃ 在每个输出分量中的系数。",
    "pitfalls": "不要把按变量系数排列的行误写成列；本题矩阵为 [[1,1,1],[2,-1,1],[0,1,-1]]。"
  },
  "696": {
    "status": "verified",
    "questionKey": "2023-解答题-2",
    "primary": [
      "LA-05-A"
    ],
    "secondary": [
      "LA-05-B",
      "LA-05-E"
    ],
    "rationale": "特征多项式分解为 (λ+2)(λ+1)(λ−2)，三个互异特征值对应线性无关特征向量，组成 P 后可对角化。",
    "methods": "分别解 (A−λI)α=0，按特征值顺序将特征向量作为 P 的列。",
    "pitfalls": "核对每个特征向量满足 Aα=λα；P 的列顺序必须与 Λ 对角线顺序一致。"
  },
  "697": {
    "status": "verified",
    "questionKey": "2024-选择题-1",
    "primary": [
      "CAL-03-B"
    ],
    "secondary": [
      "CAL-01-F"
    ],
    "rationale": "可能间断点为 0、1、2；x→1 时函数极限为 e 且函数值缺失，属于可去间断点；0、2 处至少一侧无穷或极限不匹配，属第二类。",
    "methods": "先找底数/指数失定义点，再对正底数取对数计算左右极限。",
    "pitfalls": "第一类间断点要求左右极限有限；无穷间断点不能计入第一类。"
  },
  "698": {
    "status": "verified",
    "questionKey": "2024-选择题-2",
    "primary": [
      "CAL-04-E"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "参数方程在 x=2 对应 t=1，dy/dx=(dy/dt)/(dx/dt)=2e/3；原极限是 2f'(2)，故为 4e/3。",
    "methods": "先由 x=1+t³ 求 t，再用参数求导公式，最后套导数定义型极限。",
    "pitfalls": "极限中的增量是 2/x，外部还乘 x，因此结果为 2f'(2)，不能漏掉系数 2。"
  },
  "699": {
    "status": "verified",
    "questionKey": "2024-选择题-3",
    "primary": [
      "CAL-01-A"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "h(x)=∫₀ˣsin(t³)dt 为偶函数，f(x)=h(sin x)仍为偶函数，偶函数从 0 到 x 的积分 g 为奇函数。",
    "methods": "先判断被积函数奇偶性，再用变上限积分的奇偶性逐层判断复合函数。",
    "pitfalls": "积分上限反号会改变积分方向；不要把“偶函数的原函数”误判为偶函数。"
  },
  "700": {
    "status": "verified",
    "questionKey": "2024-选择题-4",
    "primary": [
      "CAL-02-A"
    ],
    "secondary": [
      "CAL-01-C"
    ],
    "rationale": "φ(x)=eˣ−e⁻ˣ 在实数域连续严格递增且可逆；若 φ(aₙ) 收敛，则 aₙ=φ⁻¹(φ(aₙ)) 收敛，反证 D。",
    "methods": "逐项分析反例排除 A、B、C；对 D 利用严格单调连续双射的逆函数连续性。",
    "pitfalls": "发散序列的连续变换未必发散；必须证明该变换存在连续逆函数。"
  },
  "701": {
    "status": "verified",
    "questionKey": "2024-选择题-5",
    "primary": [
      "CAL-08-A"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "用 |f(x,y)|≤x²+y² 得原点处可微且偏导数为零；但一般点的 fx 含振荡项，沿适当路径极限不存在。",
    "methods": "分别按可微定义估计增量，再求一般点偏导并构造趋近路径检验连续性。",
    "pitfalls": "可微不意味着偏导数连续；需区分偏导存在、函数可微和偏导连续。"
  },
  "702": {
    "status": "verified",
    "questionKey": "2024-选择题-6",
    "primary": [
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-08-C"
    ],
    "rationale": "积分区域由 π/6≤x≤π/2、sin x≤y≤1 描述，换序后 y∈[1/2,1]、x∈[π/6,arcsin y]，对应 A。",
    "methods": "先画出区域，固定 y 后重新确定 x 的左右边界。",
    "pitfalls": "换序时外层 y 的范围是 [1/2,1]，内层下限始终 π/6；不能误用 arcsin y 作内层下限。"
  },
  "703": {
    "status": "verified",
    "questionKey": "2024-选择题-7",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "命题(1)可用 f=1/(1+x) 反例否定；(2)由 x^p f(x) 有有限极限推出 f=O(x⁻ᵖ) 从而积分收敛；(3)给出的对数型函数否定统一幂次渐近结论。",
    "methods": "逐项判定：构造反例、比较 p-积分、再检查第三命题中任意 p>1 的极限。",
    "pitfalls": "(2)使用的是极限有限从而最终有界；(3)不能把积分收敛误认为存在某个固定幂次的点态衰减率。"
  },
  "704": {
    "status": "verified",
    "questionKey": "2024-选择题-8",
    "primary": [
      "LA-02-A"
    ],
    "secondary": [
      "LA-02-C"
    ],
    "rationale": "由 P 可逆，从 PᵀAP²=M 左右乘相应逆矩阵可解出 A，矩阵乘法化简后为 diag(a,b,c)，对应 C。",
    "methods": "计算 A=(Pᵀ)⁻¹M(P²)⁻¹，按矩阵乘法顺序逐步化简。",
    "pitfalls": "矩阵乘法不可交换；左右逆矩阵的位置必须与原等式对应。"
  },
  "705": {
    "status": "verified",
    "questionKey": "2024-选择题-9",
    "primary": [
      "LA-02-D"
    ],
    "secondary": [
      "LA-02-E"
    ],
    "rationale": "若 A 可逆会推出 A=A* 与题设矛盾；故 detA=0，利用 AA*=det(A)I 得 A²=0，进而 2r(A)≤4 且 A 非零。",
    "methods": "先排除可逆情形，再由伴随矩阵恒等式推出幂零关系并使用秩不等式。",
    "pitfalls": "n=4 时 A* 的伴随恒等式适用；A≠A* 只能推出 A 非零，结合 A²=0 得秩为 1 或 2。"
  },
  "706": {
    "status": "verified",
    "questionKey": "2024-选择题-10",
    "primary": [
      "LA-05-B"
    ],
    "secondary": [
      "LA-05-E"
    ],
    "rationale": "A 有两个不同特征值时其特征向量构成二维基；AB=BA 保证 B 保持 A 的两个一维特征子空间，故 B 可对角化。反向用 A=B=I 反例。",
    "methods": "证明充分性时对 A 的特征向量应用交换关系，必要性用反例否定。",
    "pitfalls": "不要把“B 可对角化”反推为 A 有两个不同特征值；单位矩阵即反例。"
  },
  "707": {
    "status": "verified",
    "questionKey": "2024-填空题-11",
    "primary": [
      "CAL-04-A"
    ],
    "secondary": [
      "CAL-05-C"
    ],
    "rationale": "将曲线改写为 x=y²，以 y 为参数计算曲率 κ=2，曲率半径 1/2；曲率中心沿法线方向为 (1/2,0)。",
    "methods": "使用平面曲线参数形式的曲率公式，确定曲率中心方向后写圆方程。",
    "pitfalls": "曲线 y²=x 在原点切线为 y 轴，法线沿 x 轴；曲率中心位于 x 正向，不能误取负向。"
  },
  "708": {
    "status": "verified",
    "questionKey": "2024-填空题-12",
    "primary": [
      "CAL-08-D"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "解 fx=fy=0 得 (1,1)、(2,1)；Hessian 在 (1,1) 处正判别且 fxx<0，为极大点，在 (2,1) 处判别式为负。",
    "methods": "求驻点后逐点计算二阶偏导和 Hessian 判别式。",
    "pitfalls": "题目问极值点而非极小点；本题 (1,1) 实际为极大点，驻点 (2,1) 是鞍点。"
  },
  "709": {
    "status": "verified",
    "questionKey": "2024-填空题-13",
    "primary": [
      "CAL-07-A"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "令 u=x+y 将方程化为 u'=1+u⁻²，分离变量积分得到 x=u−arctan u+C，再用 y(1)=0 确定常数。",
    "methods": "作代换 u=x+y，分离变量积分并回代隐式变量。",
    "pitfalls": "代换后 y'=u'−1；初值对应 u(1)=1，常数 C=π/4。"
  },
  "710": {
    "status": "verified",
    "questionKey": "2024-填空题-14",
    "primary": [
      "CAL-04-B"
    ],
    "secondary": [
      "CAL-05-D"
    ],
    "rationale": "对 x²(eˣ−1) 使用 Leibniz 求导公式，五阶导数为 (x²+10x+20)eˣ，代入 x=1 得 31e。",
    "methods": "将 f=x²eˣ−x²，利用乘积高阶求导公式计算。",
    "pitfalls": "多项式 x² 的五阶导数为零；指数项的系数需按二项式系数累加。"
  },
  "711": {
    "status": "verified",
    "questionKey": "2024-填空题-15",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "平均速度等于位移除以时间，即 (1/3)∫₀³v(t)dt；积分 sin(πt) 后解得 k=3π/2。",
    "methods": "建立定积分平均值方程，分别计算 t 项和正弦项积分。",
    "pitfalls": "平均速度不是速度函数在端点的算术平均；注意区间长度为 3。"
  },
  "712": {
    "status": "verified",
    "questionKey": "2024-填空题-16",
    "primary": [
      "LA-03-C"
    ],
    "secondary": [
      "LA-03-B"
    ],
    "rationale": "三个四维向量线性相关且任意两向量无关，故列向量组秩恰为 2；行化简给出 a=−2、b=2，乘积 −4。",
    "methods": "将三个向量作为矩阵列，利用秩为 2 的条件令化简后的独立约束为零。",
    "pitfalls": "“任意两个线性无关”排除秩 1；不能仅由行列式为零就忽略秩恰为 2 的条件。"
  },
  "713": {
    "status": "verified",
    "questionKey": "2024-解答题-17",
    "primary": [
      "CAL-08-F"
    ],
    "secondary": [
      "CAL-08-E"
    ],
    "rationale": "区域关于 y=x 对称，积分 x−y 抵消，原积分化为区域面积；极坐标边界给出面积 (8/3)ln3。",
    "methods": "先利用对称性简化被积函数，再用极坐标描述双曲线边界并计算面积。",
    "pitfalls": "角度范围为 arctan(1/3) 至 arctan3；径向上下限来自 xy=1/3 与 xy=3，面积元必须含 r。"
  },
  "714": {
    "status": "verified",
    "questionKey": "2024-解答题-18",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "这是 Cauchy–Euler 方程，令 x=eᵗ 后化为 y_tt−9y=0；初值确定 y=2x³。",
    "methods": "使用 x=eᵗ，将 x²y''+xy' 转化为 y_tt，再解常系数方程。",
    "pitfalls": "二阶导数变换含 −y_t 项，和 xy' 项合并后才得到 y_tt；不能漏掉链式法则项。"
  },
  "715": {
    "status": "verified",
    "questionKey": "2024-解答题-1",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "换元后常系数方程通解为 C₁x³+C₂x⁻³，结合 y(1)=2、y'(1)=6 得 C₁=2、C₂=0。",
    "methods": "先写 Euler 方程通解，再将两个初值代入联立求常数。",
    "pitfalls": "y'(1)=3C₁−3C₂；与 y(1)=C₁+C₂ 联立，避免把导数条件误写成 6C₁。"
  },
  "716": {
    "status": "verified",
    "questionKey": "2024-解答题-2",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "代入 y=2x³ 后令 u=4−x²，将积分转为 ∫₀³(4−u)u^(1/2)du，结果 22√3/5。",
    "methods": "先代入已求函数，再作根式常用代换并计算幂函数积分。",
    "pitfalls": "换元后上下限由 x=1、2 对应 u=3、0，反向积分需同步改变符号。"
  },
  "717": {
    "status": "verified",
    "questionKey": "2024-解答题-19",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-05-B"
    ],
    "rationale": "圆盘法得 V(t)=π∫ₜ²ᵗ xe⁻²ˣdx；求导得到 V'(t)=πt e⁻²ᵗ(4e⁻²ᵗ−1)，在 t=ln2 由增转减。",
    "methods": "用 Leibniz 公式对变上下限积分求导，再判断导数符号并代回求最大值。",
    "pitfalls": "上限为 2t，求导必须乘上链式因子 2；最大值表达式要同时代入两个积分端点。"
  },
  "718": {
    "status": "verified",
    "questionKey": "2024-解答题-20",
    "primary": [
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "对 u=2x+y、v=3x−y 使用二元复合函数二阶链式法则，题设线性组合中 fuu、fvv 系数抵消，得到 25fuv=1。",
    "methods": "先求 gx、gy，再求 gxx、gxy、gyy 并按题设系数组合。",
    "pitfalls": "混合二阶项的系数需计入两个交叉项；本题组合为 25fuv，不能误写成 13 或 24。"
  },
  "719": {
    "status": "verified",
    "questionKey": "2024-解答题-1",
    "primary": [
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "对 g(x,y)=f(2x+y,3x−y) 连续使用链式法则，得到 gxx、gxy、gyy 的二阶表达式，并由线性组合解出 fuv=1/25。",
    "methods": "先列 u、v 对 x、y 的一阶偏导，再逐次求二阶偏导并代入约束。",
    "pitfalls": "混合偏导系数来自两组链式项；需核对 gxy 中 fuv 系数以及 −6gyy 的贡献。"
  },
  "720": {
    "status": "verified",
    "questionKey": "2024-解答题-2",
    "primary": [
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "由已求得 f_uv=1/25，先对 u 积分并用 f_u(u,0)=ue^{-u}确定函数项，再由 f(0,v)确定仅依赖 v 的积分函数。",
    "methods": "先恢复 f_u，再对 u 积分，最后代入 v=0 的边界条件。",
    "pitfalls": "积分常数可依赖另一变量；不能把 ψ(v) 当作数值常数。"
  },
  "721": {
    "status": "verified",
    "questionKey": "2024-解答题-21",
    "primary": [
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-05-A",
      "CAL-06-C"
    ],
    "rationale": "利用 |f''|≤1 与端点导数相等构造误差函数，得到函数与端点线性插值的误差界；积分后即为梯形公式误差界 1/12。",
    "methods": "构造 g=f−线性插值±x(1−x)/2，利用二阶导数符号和端点零值证明夹逼，再积分。",
    "pitfalls": "二阶导数有界要分别构造上下界；积分 x(1−x)/2 得 1/12。"
  },
  "722": {
    "status": "verified",
    "questionKey": "2024-解答题-1",
    "primary": [
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-05-A"
    ],
    "rationale": "构造 g(x) 后 g(0)=g(1)=0 且 g''=f''+1≥0，凸性推出 g≤0；对另一侧构造函数得反向界。",
    "methods": "用反证结合两段拉格朗日中值定理，或直接利用凸函数弦线性质。",
    "pitfalls": "凸函数位于端点连线下方；符号方向要与 g''≥0 对应。"
  },
  "723": {
    "status": "verified",
    "questionKey": "2024-解答题-2",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-05-D"
    ],
    "rationale": "对第 1 问的点态误差不等式在 [0,1] 积分，端点线性插值的积分等于端点函数值平均，误差上界积分为 1/12。",
    "methods": "对不等式逐项积分并计算 ∫₀¹x(1−x)/2 dx。",
    "pitfalls": "端点线性插值积分为 (f(0)+f(1))/2，不能遗漏系数 1/2。"
  },
  "724": {
    "status": "verified",
    "questionKey": "2024-解答题-22",
    "primary": [
      "LA-06-B"
    ],
    "secondary": [
      "LA-03-A",
      "LA-02-B"
    ],
    "rationale": "两个齐次方程组的解空间包含关系且不相同，结合 A 的秩为 2 可确定堆叠矩阵秩仍为 2，进而求 a、b。",
    "methods": "把 A 与 Bᵀ 纵向拼接，利用核空间包含关系转化为行空间/秩条件并行化简。",
    "pitfalls": "注意题干是“Ax=0 的解是 Bᵀx=0 的解”，方向不可颠倒；不同解意味着核空间包含为真包含。"
  },
  "725": {
    "status": "verified",
    "questionKey": "2024-解答题-1",
    "primary": [
      "LA-02-B"
    ],
    "secondary": [
      "LA-03-D",
      "LA-04-D"
    ],
    "rationale": "将 A 与 Bᵀ 纵向拼接后，其行空间不增加，秩仍为 2；行化简给出 a=1、b=2。",
    "methods": "利用同解条件 r([A;Bᵀ])=r(A)，再对拼接矩阵消元。",
    "pitfalls": "同解条件不仅是两矩阵秩相等，还需利用原方程组解空间包含关系确定拼接秩。"
  },
  "726": {
    "status": "verified",
    "questionKey": "2024-解答题-2",
    "primary": [
      "LA-06-A"
    ],
    "secondary": [
      "LA-05-C",
      "LA-06-B"
    ],
    "rationale": "代入 a=1、b=2 得 BA 为对称秩一矩阵 (1,1,2)ᵀ(1,1,2)，其唯一非零特征值为 6，正交对角化后标准形为 6y₁²。",
    "methods": "先计算 BA 并识别秩一外积，再构造单位特征向量及其正交补。",
    "pitfalls": "二次型由 xᵀBAx 决定，需确认 BA 对称；正交矩阵列向量必须单位且两两正交。"
  },
  "727": {
    "status": "verified",
    "questionKey": "2025-选择题-1",
    "primary": [
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-04-D"
    ],
    "rationale": "对隐式方程分别关于 x、y 求偏导，积分上限与下限贡献相反符号，相加得到 z_x+z_y=z/(z+1)(e^{-x²}−e^{-y²})。",
    "methods": "使用隐函数求导和变上限积分求导公式，分别求 z_x、z_y 后相加。",
    "pitfalls": "对下限 y 求导会带负号；外层方程中 ln z 的导数为 z_y/z。"
  },
  "728": {
    "status": "verified",
    "questionKey": "2025-选择题-2",
    "primary": [
      "CAL-06-F"
    ],
    "secondary": [
      "CAL-05-F",
      "CAL-05-G"
    ],
    "rationale": "f'(0)=0、f''(0)=1>0，故 f 在 0 处取极小；g 的首个非零局部项为 x³/3，故原点为 g 的拐点。",
    "methods": "用变上限积分求导判断 f 的极值；对 g 求导或作局部展开判断拐点。",
    "pitfalls": "g''(0)=0 本身不能判定拐点，需确认二阶导数变号或首个非零奇次项。"
  },
  "729": {
    "status": "verified",
    "questionKey": "2025-选择题-3",
    "primary": [
      "CAL-07-C"
    ],
    "secondary": [
      "CAL-06-I"
    ],
    "rationale": "特征根均需严格为负，才能保证任意齐次解组合的无穷积分绝对收敛；由根和 2a<0、根积 a+2>0 得 −2<a<0。",
    "methods": "写特征方程并要求两根实部均为负；本题二阶实系数条件化为根和、根积约束。",
    "pitfalls": "若有零实部或正实部，存在对应解使积分不收敛；不能只检查根积。"
  },
  "730": {
    "status": "verified",
    "questionKey": "2025-选择题-4",
    "primary": [
      "CAL-01-G"
    ],
    "secondary": [
      "CAL-02-E",
      "CAL-02-C"
    ],
    "rationale": "已知 f=o(g)，又 e^g−1∼g，故 f/(e^g−1)=(f/g)·[g/(e^g−1)]→0，只有 C 必然成立。",
    "methods": "把高阶无穷小定义写成 f/g→0，再使用指数函数在零点的等价无穷小。",
    "pitfalls": "A 的比值趋于 1 而非 0；D 需要额外控制 g，不能从 f=o(g) 推出 f=o(g²)。"
  },
  "731": {
    "status": "verified",
    "questionKey": "2025-选择题-5",
    "primary": [
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-08-C"
    ],
    "rationale": "原卷积分上限为4。区域为−2≤x≤2且4−x²≤y≤4。固定y∈[0,4]时，x位于抛物线外侧两段[−2,−√(4−y)]与[√(4−y),2]，因此换序后正是选项A。旧题库把积分上限4误录为2，导致区域与选项矛盾。",
    "methods": "先根据原卷确定积分上下限，再画出抛物线y=4−x²与水平线y=4围成的区域，按固定y分成左右两段。",
    "pitfalls": "积分上限4不能误读为2；换序时区域在每条水平线上是左右两个不连通区间。",
    "sourceUrl": "https://edu.xaiu.edu.cn/__local/3/0D/19/B4D5520F03FC57305C10AE7A14F_A8C628A7_45CE3.pdf#page=2",
    "sourceLabel": "查看2025年原卷第5题图（PDF第2页）"
  },
  "732": {
    "status": "verified",
    "questionKey": "2025-选择题-6",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "万有引力大小 G/(x²+1)，沿运动方向的分力乘以方向余弦 x/√(x²+1)，故功积分为 ∫₀¹Gx/(x²+1)^{3/2}dx。",
    "methods": "先写引力矢量大小，再投影到 x 轴方向并对位移积分。",
    "pitfalls": "功由力在位移方向的分量决定，不能直接积分引力大小；方向余弦为 x/r。"
  },
  "733": {
    "status": "verified",
    "questionKey": "2025-选择题-7",
    "primary": [
      "CAL-04-A"
    ],
    "secondary": [
      "CAL-03-A",
      "CAL-03-B"
    ],
    "rationale": "四个极限条件均可借连续性分情形推出 f(0) 正负或为零，再将绝对值在邻域内去掉，或由左右极限一致推出导数存在。",
    "methods": "分别讨论 f(0)>0、=0、<0，利用连续性固定 |f| 符号；条件③用左右极限比较。",
    "pitfalls": "条件③中左右商分别为 L 与 −L，极限存在迫使 L=0；不能只用单侧极限。"
  },
  "734": {
    "status": "verified",
    "questionKey": "2025-选择题-8",
    "primary": [
      "LA-05-D"
    ],
    "secondary": [
      "LA-05-C",
      "LA-06-E"
    ],
    "rationale": "矩阵为对称分块矩阵，特征值由 2×2 块与标量 b 构成；2×2 块一正一负要求行列式 a−4<0，再由总惯性指标得 b<0。",
    "methods": "计算 2×2 主块的特征值符号，利用迹/行列式及整体正负特征值个数确定 a、b。",
    "pitfalls": "特征值个数是一个正、两个负；不能仅凭 a<4 就忘记 b 必须为负。"
  },
  "735": {
    "status": "verified",
    "questionKey": "2025-选择题-9",
    "primary": [
      "LA-02-B"
    ],
    "secondary": [
      "LA-02-E"
    ],
    "rationale": "初等行变换保持行等价，目标矩阵秩为 2 且行空间由两行生成；选项 B 经行变换可得到给定阶梯形矩阵。",
    "methods": "比较各选项的行秩及行空间，或直接对候选矩阵作初等行变换。",
    "pitfalls": "初等变换不改变秩；仅秩相同不足以证明行等价，还要确认行空间一致。"
  },
  "736": {
    "status": "verified",
    "questionKey": "2025-选择题-10",
    "primary": [
      "LA-02-E"
    ],
    "secondary": [
      "LA-04-A",
      "LA-04-B"
    ],
    "rationale": "令 r(BA)=r，则 r≤2，且 r(AB)=r+1。若 B 可逆，则 r(AB)=r(A)=r(BA)，与题设矛盾，故 B 奇异，存在非零 x∈ker(B)。于是 BAx=0，故 ABAx=A(BAx)=0；又 Bx=0，故 BABx=BA(Bx)=0。同一个非零 x 满足两方程，D 恒成立。",
    "methods": "先由秩关系证明 B 必不可逆，再取 B 的非零零空间向量，直接代入两个三重乘积验证。",
    "pitfalls": "仅用反例排除其他选项不足以证明D；关键是证明 B 必奇异并从 ker(B) 构造公共非零解。"
  },
  "737": {
    "status": "verified",
    "questionKey": "2025-填空题-11",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-06-B"
    ],
    "rationale": "部分分式积分得到 ln|2x/(2x+a)| 的端点差，方程给出 a=2 或 −6；a=−6 会在积分区间内产生奇点，故仅 a=2。",
    "methods": "拆成 1/x−2/(2x+a)，计算广义积分并排除区间内分母为零的参数。",
    "pitfalls": "求对数方程时需保留绝对值并检查被积函数在 [1,∞) 的奇点；不能直接只取正根。"
  },
  "738": {
    "status": "verified",
    "questionKey": "2025-填空题-12",
    "primary": [
      "CAL-05-H"
    ],
    "secondary": [
      "CAL-05-C"
    ],
    "rationale": "对立方根函数计算 y/x→1 且 y−x→−1，得到斜渐近线 y=x−1。",
    "methods": "用斜渐近线判定公式分别求斜率 a 与截距 b。",
    "pitfalls": "需检查 x→±∞ 两端；本式两端同样给出斜率 1、截距 −1。"
  },
  "739": {
    "status": "verified",
    "questionKey": "2025-填空题-13",
    "primary": [
      "CAL-06-E"
    ],
    "secondary": [
      "CAL-06-C"
    ],
    "rationale": "表达式是 x ln x 在 [0,1] 上的黎曼和，极限等于定积分 ∫₀¹x ln x dx=−1/4。",
    "methods": "识别 Δx=1/n、采样点 k/n，将和式转成黎曼积分。",
    "pitfalls": "端点 x=0 处按连续延拓 x ln x→0；求积分可用分部积分或参数积分。"
  },
  "740": {
    "status": "verified",
    "questionKey": "2025-填空题-14",
    "primary": [
      "CAL-04-E"
    ],
    "secondary": [
      "CAL-04-C",
      "CAL-08-B"
    ],
    "rationale": "由 x=ln(1+2t) 得 x=0 对应 t=0；隐式方程对 t 求导得 y_t=2e，且 x_t=2，故 dy/dx=e。",
    "methods": "先求参数对应点，再对隐式积分方程求 t 导数，最后用参数求导公式。",
    "pitfalls": "上限 y+t² 的导数为 y_t+2t；代入 t=0 后再除以 dx/dt。"
  },
  "741": {
    "status": "verified",
    "questionKey": "2025-填空题-15",
    "primary": [
      "CAL-07-A"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "方程齐次，令 u=y/x 得可分离变量方程；积分后得到 5y²−4xy+3x²=C，初值给 C=4。",
    "methods": "先化为 dy/dx 的齐次函数，令 y=ux，再分离变量并代回。",
    "pitfalls": "代换时 y'=u+xu'；分离后分母二次式 5u²−4u+3 无实根，积分可写为对数形式。"
  },
  "742": {
    "status": "verified",
    "questionKey": "2025-填空题-16",
    "primary": [
      "LA-04-C"
    ],
    "secondary": [
      "LA-04-B",
      "LA-03-C"
    ],
    "rationale": "前三个向量线性无关且 α₄=α₁+α₂−α₃，故列秩为 3、齐次解空间维数为 1；给定特解与基础解系组合成通解。",
    "methods": "先用向量关系写出 α₄，再验证齐次向量 (1,1,−1,−1)ᵀ 与特解 (1,0,0,4)ᵀ。",
    "pitfalls": "通解需包含一个特解加齐次通解；参数向量顺序必须与 A 的列顺序一致。"
  },
  "743": {
    "status": "verified",
    "questionKey": "2025-解答题-17",
    "primary": [
      "CAL-06-B"
    ],
    "secondary": [
      "CAL-06-A"
    ],
    "rationale": "有理函数分母分解为一次因子与不可约二次因子，部分分式后分别积分为对数项与反正切项，结果 3/10 ln2+π/10。",
    "methods": "设 A/(1+x)+(Bx+C)/(x²−2x+2)，比较系数后拆分成分母导数项与 arctan 项。",
    "pitfalls": "二次分母配方为 (x−1)²+1；积分上下限代入时注意对数项的符号。"
  },
  "744": {
    "status": "verified",
    "questionKey": "2025-解答题-18",
    "primary": [
      "CAL-04-A"
    ],
    "secondary": [
      "CAL-05-D",
      "CAL-02-D"
    ],
    "rationale": "将分母化为 ln(1−x²)∼−x²，先由连续性求 f(0)=2，再分离出差商并用指数复合展开求出 f'(0)=5。",
    "methods": "先化简对数分母的二阶等价无穷小，再把分子写成 x[f(x)−f(0)] 加已知光滑项。",
    "pitfalls": "证明可导的关键是从整体极限存在推出差商极限存在；不能仅凭连续性断言可导。"
  },
  "745": {
    "status": "verified",
    "questionKey": "2025-解答题-19",
    "primary": [
      "CAL-08-D"
    ],
    "secondary": [
      "CAL-08-A",
      "CAL-08-B"
    ],
    "rationale": "由全微分读出 fx、fy，积分恢复 f(x,y)=e^{-y}(−x²+y+2)，驻点 (0,−1) 的 Hessian 正定判别式且 fxx<0，故为极大点。",
    "methods": "先对 x 积分并保留 C(y)，再用 fy 确定 C(y)，最后求驻点和二阶判别。",
    "pitfalls": "积分“常数”是 y 的函数；极值判别要同时检查 AC−B² 与 fxx 符号。"
  },
  "746": {
    "status": "verified",
    "questionKey": "2025-解答题-20",
    "primary": [
      "CAL-08-F"
    ],
    "secondary": [
      "CAL-08-E"
    ],
    "rationale": "区域关于 y=x 对称，被积函数 (x−y)² 也对称；取一半区域用极坐标，径向边界 r≤4sinθ，计算得到 12π−112/3。",
    "methods": "利用交换 x、y 的对称性折半，设 x=r cosθ、y=r sinθ，含雅可比 r 积分。",
    "pitfalls": "选取 0≤θ≤π/4 的半区域时边界来自 x²+y²≤4y，即 r≤4sinθ；别误用另一圆的边界。"
  },
  "747": {
    "status": "verified",
    "questionKey": "2025-解答题-21",
    "primary": [
      "CAL-05-A"
    ],
    "secondary": [
      "CAL-05-B",
      "CAL-05-G"
    ],
    "rationale": "必要性由拉格朗日中值定理直接得到。充分性：任取 c1<c2 及 c1<x<c2，题设给出左段割线斜率小于右段割线斜率；令 x→c1+、x→c2−，分别得到 f'(c1)≤[f(c2)−f(c1)]/(c2−c1)≤f'(c2)，故 f' 非减。若 f'(c1)=f'(c2)，则 f' 在 [c1,c2] 上恒定，拉格朗日中值定理推出 f 在该区间为线性函数，与任取三点时割线斜率严格不等矛盾。因此 f' 严格递增。",
    "methods": "必要性用两段拉格朗日中值定理；充分性对 c1<x<c2 使用三点割线斜率不等式，分别令 x 趋近 c1、c2 得导数与整段割线斜率的夹逼，再用反证排除导数在不同点取相同值。",
    "pitfalls": "仅由夹逼先得到的是 f' 非减，严格性还需排除 f' 在某区间恒定；不能把开区间端点 a、b 当作已知可取到的函数值。"
  },
  "748": {
    "status": "verified",
    "questionKey": "2025-解答题-22",
    "primary": [
      "LA-06-B"
    ],
    "secondary": [
      "LA-05-C",
      "LA-06-D"
    ],
    "rationale": "A、B 合同保持惯性指标；由 B 的零对角元知 detA=0，求得 a=4，A 特征值为 3、6、0，故 k>0；若正交相似则特征值顺序强制 k=3。",
    "methods": "先用合同不变量确定参数范围，再用实对称矩阵正交对角化求特征值和正交特征向量。",
    "pitfalls": "合同只保持正负惯性指数，不保持具体特征值；k=3 是第二问正交相似条件才推出。"
  },
  "749": {
    "status": "verified",
    "questionKey": "2026-选择题-1",
    "primary": [
      "CAL-05-D"
    ],
    "secondary": [
      "CAL-02-E",
      "CAL-01-G"
    ],
    "rationale": "展开 arcsin x=x+x³/6+…，立方根项 (1+x²)^{1/3}−1∼x²/3；匹配等价无穷小先消去一次项得 b=−1，再得 a=1/3。",
    "methods": "将两边展开到 x² 阶，比较一次项和二次项系数。",
    "pitfalls": "arcsin x 的二次项系数为零；必须先消掉 x 项，才能比较 x² 系数。"
  },
  "750": {
    "status": "verified",
    "questionKey": "2026-选择题-2",
    "primary": [
      "CAL-07-D"
    ],
    "secondary": [
      "CAL-07-C"
    ],
    "rationale": "两个特解的线性组合要成为原非齐次方程解，系数和须为 1；成为对应齐次方程解，系数和须为 0，解得 λ=2/5、μ=1/5。",
    "methods": "利用非齐次方程特解差为齐次解、齐次解线性组合封闭的结构列两条系数方程。",
    "pitfalls": "不要把特解的任意线性组合视为特解；系数和为 1 才保持非齐次项。"
  },
  "751": {
    "status": "verified",
    "questionKey": "2026-选择题-3",
    "primary": [
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-04-D"
    ],
    "rationale": "对 x−az−e^{y+az}=0 分别隐式求导，得到 z_x=1/[a(1+e^{y+az})]、z_y=−e^{y+az}/[a(1+e^{y+az})]，两者相减为 1/a。",
    "methods": "设 F(x,y,z)=0，使用 z_x=−F_x/F_z、z_y=−F_y/F_z。",
    "pitfalls": "F_z=−a(1+e^{y+az})；求 z_y 时分子负号不可漏。"
  },
  "752": {
    "status": "verified",
    "questionKey": "2026-选择题-4",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-04-A"
    ],
    "rationale": "对称微元的水平引力分量抵消，竖直分量为 Gm dx/(1+x²)^{3/2}，两侧积分得到选项 D。",
    "methods": "取右半棒微元，先算万有引力，再投影到竖直方向并乘 2。",
    "pitfalls": "微元引力大小为 Gm dx/(1+x²)，竖直方向余弦为 1/√(1+x²)，不可遗漏投影因子。"
  },
  "753": {
    "status": "verified",
    "questionKey": "2026-选择题-5",
    "primary": [
      "CAL-05-B"
    ],
    "secondary": [
      "CAL-05-G"
    ],
    "rationale": "A、B 的单调性与极小值互推均可用在单点修改函数值的反例否定；凹函数的割线斜率性质推出 C，D 的逆命题有反例。",
    "methods": "逐项使用定义与反例；C 可由凹函数弦斜率随区间位置的单调性证明。",
    "pitfalls": "单调性只在开区间成立不能控制端点函数值；割线斜率单调的逆推也不足以保证二阶凹性。"
  },
  "754": {
    "status": "verified",
    "questionKey": "2026-选择题-6",
    "primary": [
      "CAL-06-F"
    ],
    "secondary": [
      "CAL-01-C",
      "CAL-04-A"
    ],
    "rationale": "f(1)=0，故反函数 g(0)=1；由变上限积分求 f'(1)=3e/2，反函数导数 g'(0)=1/f'(1)=2/(3e)。",
    "methods": "先求 f(1)，再求 f'(x)，最后套反函数求导公式。",
    "pitfalls": "反函数导数的自变量对应 f(1)=0，因此应计算 g'(0)，不是 g'(1)。"
  },
  "755": {
    "status": "verified",
    "questionKey": "2026-选择题-7",
    "primary": [
      "CAL-08-E"
    ],
    "secondary": [
      "CAL-06-E"
    ],
    "rationale": "被积函数满足 f(x,y)=f(y,x)，正方形积分可化为对角线下方三角形积分的两倍；选项 D 的网格面积系数等于该倍数。",
    "methods": "利用对称性将区域沿 y=x 分成两半，再识别三角形上的黎曼和。",
    "pitfalls": "网格边长为 1/(2n)，单格面积 1/(4n²)，乘 2 后系数为 1/(2n²)。"
  },
  "756": {
    "status": "verified",
    "questionKey": "2026-选择题-8",
    "primary": [
      "LA-02-D"
    ],
    "secondary": [
      "LA-01-C",
      "LA-01-E"
    ],
    "rationale": "置换矩阵正交，逆矩阵等于转置且仍为置换矩阵；伴随矩阵等于 det(A)A⁻¹，det 可为 ±1，故不总是置换矩阵。",
    "methods": "使用置换矩阵 AᵀA=I 与伴随矩阵恒等式 A*=det(A)A⁻¹。",
    "pitfalls": "不能把 A*=A⁻¹ 当恒等式，只有 det(A)=1 时才成立。"
  },
  "757": {
    "status": "verified",
    "questionKey": "2026-选择题-9",
    "primary": [
      "LA-04-A"
    ],
    "secondary": [
      "LA-03-A",
      "LA-02-B"
    ],
    "rationale": "AB=C 要求 C 的每一列属于 A 的列空间；分别解两组线性方程得到 a=b=−1。",
    "methods": "对 C 的两列分别解 Ax=c，利用行约束求末分量。",
    "pitfalls": "矩阵方程有解等价于逐列方程组有解；不能只检验列向量个数或秩。"
  },
  "758": {
    "status": "verified",
    "questionKey": "2026-选择题-10",
    "primary": [
      "LA-02-A"
    ],
    "secondary": [
      "LA-05-A",
      "LA-05-E"
    ],
    "rationale": "原式等价于 (A−B)²=0，因此差矩阵是平方零幂零矩阵，所有特征值为零，但零特征空间维数不必为 1，故 D 错。",
    "methods": "移项因式分解得到 (A−B)²=0，再分析幂零矩阵的特征值和零空间。",
    "pitfalls": "平方为零只能推出特征值全为零，不代表几何重数固定为 1；三阶非零平方零矩阵秩可为 1。"
  },
  "759": {
    "status": "verified",
    "questionKey": "2026-填空题-11",
    "primary": [
      "CAL-06-I"
    ],
    "secondary": [
      "CAL-02-E",
      "CAL-01-G"
    ],
    "rationale": "x→0⁺ 时 arctan x∼x，被积函数等价 x^{1−p}，要求 p<2；x→∞ 时 arctan x→π/2，被积函数等价 x^{−p−1}，要求 p>0。",
    "methods": "分别对 0 与无穷远两端作等价比较，套用 p-积分敛散判别。",
    "pitfalls": "两端条件需同时满足；p=0 或 p=2 均为对数发散边界。"
  },
  "760": {
    "status": "verified",
    "questionKey": "2026-填空题-12",
    "primary": [
      "CAL-02-C"
    ],
    "secondary": [
      "CAL-01-G"
    ],
    "rationale": "通分后分子为 sin x−ln(1+x)。展开得 x²/2+o(x²)，分母 x sin x=x²+o(x²)，故极限为 1/2，与题库答案一致。",
    "methods": "对 sin x 与 ln(1+x) 作同阶展开，保留到二阶；分母用 sin x∼x。",
    "pitfalls": "不能分别把两个原项取极限；两项均含 1/x 量级，必须先合并或展开后比较。"
  },
  "761": {
    "status": "verified",
    "questionKey": "2026-填空题-13",
    "primary": [
      "CAL-04-C"
    ],
    "secondary": [
      "CAL-05-C"
    ],
    "rationale": "隐式求导得 y'(0)=−√3；再次求导得 y''(0)=2。曲率为 |y''|/[1+(y')²]^(3/2)=1/4，曲率半径为 4。",
    "methods": "将曲线在点附近视作 y(x)，对隐式方程连续求两次导数，再代入曲率公式。",
    "pitfalls": "曲率半径是曲率的倒数；二阶求导时须对 2√3xy 与 y² 使用乘积法则。"
  },
  "762": {
    "status": "verified",
    "questionKey": "2026-填空题-14",
    "primary": [
      "CAL-08-B"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "全微分给出 f_x(0,0)=π、f_y(0,0)=3。链式法则代入 x=1，得到 π+3π cosπ=−2π。",
    "methods": "先由全微分读取两个偏导，再对复合函数 f(ln x,sinπx) 使用多元链式法则。",
    "pitfalls": "第二个内层函数求导为 πcosπx；不要漏掉该因子或把 cosπ 误作 1。"
  },
  "763": {
    "status": "verified",
    "questionKey": "2026-填空题-15",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-06-E"
    ],
    "rationale": "区间 [0,2] 上函数平均值为 (1/2)∫₀²ln(2+x)dx，原函数为 (2+x)ln(2+x)−(2+x)，计算得 3ln2−1。",
    "methods": "使用连续函数在区间上的平均值公式，随后令 u=2+x 计算定积分。",
    "pitfalls": "平均值需要除以区间长度 2；不要把积分值直接当作平均值。"
  },
  "764": {
    "status": "verified",
    "questionKey": "2026-填空题-16",
    "primary": [
      "LA-02-E"
    ],
    "secondary": [
      "LA-06-A"
    ],
    "rationale": "AAᵀ 的秩等于 A 的秩。二次型规范形仅有一个平方项，故 rank(A)=1，两行成比例。比较首末分量得 a=1，再比较中间分量得 b=1，因此 a+b=2。",
    "methods": "利用 rank(AAᵀ)=rank(A)，令 A 两行成比例并逐分量比较系数。",
    "pitfalls": "规范形只有一个非零平方项表示秩为 1；比例关系应对整行统一使用同一比例系数。"
  },
  "765": {
    "status": "verified",
    "questionKey": "2026-解答题-17",
    "primary": [
      "CAL-08-F"
    ],
    "secondary": [
      "CAL-08-E"
    ],
    "rationale": "区域由 y≥|x| 与 x²+y²≤2 围成，极坐标范围为 π/4≤θ≤3π/4、0≤r≤√2。含雅可比因子后积分分离，结果为 4sin√2−2√2。",
    "methods": "先将区域边界转为极坐标，再用 dA=rdrdθ，并将径向与角向积分分离。",
    "pitfalls": "被积函数中的 y 与面积元 r 相乘后为 r²sinθ；不能遗漏雅可比因子 r。"
  },
  "766": {
    "status": "verified",
    "questionKey": "2026-解答题-18",
    "primary": [
      "CAL-06-F"
    ],
    "secondary": [
      "CAL-04-B"
    ],
    "rationale": "x≠0 时换元 u=xt 得 f(x)=x⁻¹∫₀^{x³}g(u)du，求导得到题库表达式。连续性保证积分均值项为 xg(ξx)，故 f'(0)=0 且 f'(x)→0。",
    "methods": "先作变量代换把变上限写成 x³，再用乘积法则与牛顿—莱布尼茨公式；在零点用导数定义和积分中值定理。",
    "pitfalls": "公式含 x⁻² 不能直接代 x=0；零点导数必须由定义单独求，再验证两侧极限。"
  },
  "767": {
    "status": "verified",
    "questionKey": "2026-解答题-19",
    "primary": [
      "CAL-08-D"
    ],
    "secondary": [
      "CAL-08-A"
    ],
    "rationale": "由 f_y=0 得 y=0，再由 f_x=0 得 x=0 或 −2。原点处 Hessian 判别式为负，是鞍点；(−2,0) 处判别式为 8e⁻⁴>0 且 f_xx<0，是极大值点，极大值 8/e²。",
    "methods": "先联立一阶偏导求驻点，再计算二阶偏导构成 Hessian 判别式 AC−B²。",
    "pitfalls": "判别式小于零对应鞍点；判别式大于零后还需检查 f_xx 符号才能区分极大与极小。"
  },
  "768": {
    "status": "verified",
    "questionKey": "2026-解答题-20",
    "primary": [
      "CAL-06-C"
    ],
    "secondary": [
      "CAL-05-G",
      "CAL-06-I"
    ],
    "rationale": "拐点由 y''=0 得 x₀=1/√3、y₀=3/4，直线 OM 斜率为 3√3/4。旋转体按 [0,x₀] 的直线边界和 [x₀,∞) 的曲线边界分段用圆盘法，积分收敛并得 V=π²/6−√3π/16。",
    "methods": "先求拐点和 OM 方程，再按边界切换点分段建立 π∫(半径)²dx，第二段计算反常积分。",
    "pitfalls": "无界区域不等于体积发散；分段时旋转半径取区域上边界，且两段不能重复或遗漏。"
  },
  "769": {
    "status": "verified",
    "questionKey": "2026-解答题-21",
    "primary": [
      "CAL-07-B"
    ],
    "secondary": [
      "CAL-07-D"
    ],
    "rationale": "令 p=y' 将二阶方程降为一阶，再令 z=1/p 化为线性方程 z'+2z/x=−1/x²。由 p(3)=−9 得 z=−1/x+2/x²，积分并用 y(3)=1/2 定常数，所得解与题库表达式一致。",
    "methods": "识别方程不显含 y，先降阶；对 p 的 Bernoulli 型方程作倒数代换，解线性方程后积分恢复 y。",
    "pitfalls": "倒数代换时 z'=−p'/p²，符号容易出错；积分 ln(x−2) 在 x>2 上无需绝对值。"
  },
  "770": {
    "status": "verified",
    "questionKey": "2026-解答题-22",
    "primary": [
      "LA-03-C"
    ],
    "secondary": [
      "LA-02-A",
      "LA-02-B"
    ],
    "rationale": "直接验证 α₃=−α₁+α₂、α₄=α₁−α₂，且 α₁、α₂ 线性无关，故构成极大无关组。于是 A=GH，HG=[[1,−1],[0,1]]，其 9 次幂为 [[1,−9],[0,1]]，由 (GH)^10=G(HG)^9H 得题库所列 A^10。",
    "methods": "先用向量线性表示证明秩为 2 并构造 H，再用 (GH)^n=G(HG)^(n−1)H 降低矩阵幂的阶数。",
    "pitfalls": "A 是 4×4 而 H、G 分别为 2×4 与 4×2；乘法顺序不能颠倒，幂次公式中 HG 的指数是 n−1。"
  }
};
