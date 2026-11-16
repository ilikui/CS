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
