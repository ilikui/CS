# 核心词汇｜从“认识”到“会用”

## 学习目标
不以孤立中文释义作为掌握标准。一个词至少要掌握：拼写、发音、核心义、常见词性、典型搭配、语境义和派生词。

## 词汇卡模板
| 字段 | 记录方式 |
|---|---|
| headword | 词形、音标、词性 |
| core meaning | 最常见核心义 |
| context meaning | 语境中的具体含义 |
| collocation | 高频搭配/介词 |
| word family | 派生词、词形变化 |
| example | 自编英文例句及准确翻译 |
| confusion | 易混词、熟词僻义 |
| review | 初学、复习中、熟练 |

## 记忆方法
1. **先核心义，再语境义**：不要把一个词的所有中文义项一次性塞进记忆。
2. **搭配成块记忆**：make a decision、pose a threat、play a role。
3. **词族联想**：动词—名词—形容词—副词一起整理。
4. **主动回忆**：遮住释义，根据英文回忆意义；再反向根据中文回忆英文。
5. **间隔复习**：当天、次日、第 3 天、第 7 天、第 14 天回看；根据遗忘情况调整。

## 高频词族示例
- analyze (v.) 分析 → analysis (n.) 分析 → analytical (adj.) 分析的
- benefit (n./v.) 益处/使受益 → beneficial (adj.) 有益的
- vary (v.) 变化 → various (adj.) 各种各样的 → variation (n.) 变化
- respond (v.) 回应 → response (n.) 回应 → responsible (adj.) 负责的
- consume (v.) 消耗/消费 → consumer (n.) 消费者 → consumption (n.) 消费

## 易混辨析
- affect (v.) 影响；effect (n.) 影响、效果
- economic (adj.) 经济的；economical (adj.) 节约的
- historic (adj.) 有历史意义的；historical (adj.) 与历史有关的
- assure (v.) 向某人保证；ensure (v.) 确保；insure (v.) 投保

## 自测
1. distinguish A from B 的意思是什么？
2. be exposed to 后面通常接什么形式？
3. affect 与 effect 在词性上最常见的区别是什么？
4. 用 significant 和 significance 分别造句。

已有 [Unit 1](./Unit1.md)。后续单元按社会、教育、科技、环境、经济、健康、文化等阅读主题扩充；词汇来源与例句需可追溯，不把自编例句标为真题原句。

## 词汇背诵工具

已新增 [交互式词汇背诵室](./背诵/index.html)：支持单词主动回忆、浏览全部词条、短语搭配与例句浏览、浏览器发音、错词分级复习、本地进度保存，以及 JSON / CSV 词库导入与进度导出。

### 导入 CHNragdoll / Anki 词库

- 上游项目：[CHNragdoll/anki-pipeline](https://github.com/CHNragdoll/anki-pipeline)；[公开发行包](https://github.com/CHNragdoll/anki-pipeline/releases)。其中包含 2027 红宝书真题例句词卡等 Anki 资源。
1. 从 CHNragdoll 的 Anki 发布包下载并导入 Anki 客户端；该项目发布的 APKG 属于可导入的学习卡包，网页背诵工具不会直接读取 APKG 二进制文件。
2. 在 Anki 中选择对应牌组，导出为字段分隔文本（制表符）或 CSV（建议包含单词、音标、词性、释义、搭配、例句、译文、来源）。
3. 在背诵室点击「导入词库」，选择 CSV / 制表符文本；也可按 JSON 数组导入，字段名支持 `word`、`phonetic`、`pos`、`meaning`、`collocations`、`family`、`example`、`translation`、`source`。
4. 导入内容会追加到当前词库；复习记录保存在当前浏览器。导出进度文件可用于备份，不等同于 Anki 原生复习记录同步。

> 来源边界：当前页面默认读取本仓库 Unit 1 的词条；Unit 1 例句为自编学习例句。CHNragdoll 发布包中的真题词卡应通过用户合法获取的 APKG 导出后导入，不能把演示词条标成真题原文。
