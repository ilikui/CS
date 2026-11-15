# 22408

四合一考研复习工具：数学二 + 英语 + 政治 + 408计算机。浏览器直接打开，零依赖，离线可用。

## 包含科目

### 📐 数学二
- 武忠祥高数基础篇知识点（脑图、公式、易错点）
- 1987-2026年全部真题，共771道
- 按年份、题型筛选，分页加载
- 答案解析完整，MathJax 公式渲染

### 📖 英语词汇
- 6551个考研大纲词汇
- 按必考词（26单元）、基础词（30单元）、简单词（2单元）、超纲词分类
- 搜索单词和释义，收藏功能，进度自动保存
- 侧边栏默认折叠，方向键翻页，底部导航按钮

### 📕 政治
- 五大板块知识库：马原、毛中特、史纲、思法、形策
- 知识点可折叠展开，支持搜索
- 题库含单选、多选、分析题，按板块和题型筛选
- 分值分布和复习建议

### 💻 408 计算机学科专业基础综合
- 四门课知识点复习：数据结构、计算机组成原理、操作系统、计算机网络
- 114个知识卡片，代码高亮，对比表格
- 2009-2025年全部真题，共799道
- 按年份、题型、科目筛选，含答案解析

## 使用方式

直接用浏览器打开 `index.html` 即可。

```
website/
├── index.html                    # 首页入口（4科卡片）
├── math/                         # 数学模块
│   ├── index.html
│   ├── exam_data.js              # 771题题库数据
│   └── exam_bank.js              # 题库控制器
├── english/                      # 英语模块
│   ├── index.html
│   └── english_data.js           # 6551词词汇数据
├── politics/                     # 政治模块
│   ├── index.html
│   └── politics_data.js          # 知识库+题库
├── 408/                          # 计算机模块
│   ├── index.html                # 408入口页
│   ├── review.html               # 知识点复习（侧边栏）
│   ├── review_data.js            # 114个知识卡片数据
│   ├── questions.html            # 真题题库（799题）
│   └── questions_data.js         # 题库数据
├── data/                         # 源数据/参考文档
│   ├── math-exams/               # 历年真题md (39份)
│   ├── politics-reference.md     # 政治考点参考
│   └── politics_questions.json   # 备用题库
└── README.md
```

## 设计风格

- 浅色暖白主题，红色强调色
- 首页使用 Aceternity UI 风格特效（Spotlight、3D卡片、粒子动画）
- 所有动画使用弹性曲线，无线性过渡
- 响应式布局，支持移动端

## 技术栈

- 纯 HTML / CSS / JavaScript
- MathJax 3（数学公式，CDN加载）
- localStorage 本地存储（进度、收藏、状态）
- 无框架，无构建工具，无后端

## 参考资源

本项目用到的数据和参考资料来自以下开源项目，特此感谢：

| 资源 | 来源 |
|------|------|
| 政治题库 (questions.json) | [jrskippy/CN_NationalPostgraduateEntranceExaminationTools](https://github.com/jrskippy/CN_NationalPostgraduateEntranceExaminationTools) |
| 政治考点知识库 | [jrskippy/CN_NationalPostgraduateEntranceExaminationTools](https://github.com/jrskippy/CN_NationalPostgraduateEntranceExaminationTools) |
| 政治知识点 | [zhaokaifengcom/kysx2-zt](https://github.com/zhaokaifengcom/kysx2-zt) |
| 英语词汇数据 | [yuanyuan12123/my-vocab-app](https://github.com/yuanyuan12123/my-vocab-app) |
| 英语大纲词汇 JSON | [3056810551/2027-kaoyan-english-redbook-json](https://github.com/3056810551/2027-kaoyan-english-redbook-json) |
| 数学二复习资料 | [jiasiqi312/kaoyan-math2](https://github.com/jiasiqi312/kaoyan-math2) |
| 408 知识点复习 (幻灯片) | [Keith9922/408-review](https://github.com/Keith9922/408-review) |
| 408 真题题库 | [kaichan-kc/408-questions](https://github.com/kaichan-kc/408-questions) |
