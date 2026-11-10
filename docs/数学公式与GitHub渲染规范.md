# GitHub Markdown 数学公式规范

> 适用于本仓库所有 Markdown 笔记。目标是在 GitHub 仓库文件页、README 和支持数学表达式的 Markdown 页面中获得一致的公式渲染。

## 1. 行内公式

使用单个美元符号包围公式：

`$f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$`

示例：函数 $f(x)=x^2$ 的导数为 $f'(x)=2x$。

## 2. 独立公式

公式单独成行，使用一对双美元符号：

```markdown
$$
\int_a^b f(x)\,dx=F(b)-F(a)
$$
```

## 3. 多行公式与对齐

使用 LaTeX 的 aligned 环境：

```markdown
$$
\begin{aligned}
(a+b)^2 &= a^2+2ab+b^2 \\
(a-b)^2 &= a^2-2ab+b^2
\end{aligned}
$$
```

## 4. 分段函数、矩阵与常用结构

分段函数：

```markdown
$$
f(x)=
\begin{cases}
x^2,&x\ge0\\
-x,&x<0
\end{cases}
$$
```

矩阵：

```markdown
$$
A=\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
$$
```

## 5. 不推荐的定界符

在本仓库 Markdown 正文中，不使用以下形式作为公式定界符：

- `\(...\)`
- `\[...\]`

统一替换为：

- 行内：`$...$`
- 独立：`$$...$$`

## 6. 代码块中的公式

代码块用于展示源代码或原样 Markdown 示例。代码块内部的公式不会作为数学表达式渲染；需要展示公式效果时，应在代码块外另写一份真实公式。

## 7. 编辑检查清单

- [ ] 行内公式使用单美元符号，且不要与正文字符粘连造成歧义
- [ ] 独立公式前后留空行，使用独立的 `$$` 行
- [ ] LaTeX 花括号、下划线、反斜杠成对闭合
- [ ] 多行公式使用 `aligned` 等环境并正确换行
- [ ] 代码示例中的美元符号已正确转义或放在代码块中
- [ ] 提交后在 GitHub 文件页面检查实际渲染结果

## 8. 参考

- [GitHub Docs｜Writing mathematical expressions](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions)
- [LaTeX Project](https://www.latex-project.org/)
