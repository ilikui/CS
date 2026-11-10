# GitHub Markdown 数学公式规范

> 适用于本仓库所有 Markdown 笔记。统一以 GitHub 仓库文件页面的数学表达式支持为准。

## 1. 行内公式

使用单个美元符号包围公式，例如：

~~~markdown
$f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$
~~~

正文示例：函数 $f(x)=x^2$ 的导数为 $f'(x)=2x$。

## 2. 独立公式

公式单独成行，前后留空行，使用双美元符号：

~~~markdown
$$
\int_a^b f(x)\,dx=F(b)-F(a)
$$
~~~

不要把多行公式写成单美元符号包裹的多行内容。

## 3. 多行公式与对齐

使用 aligned 环境；每个公式行单独书写，换行使用两个反斜杠：

~~~markdown
$$
\begin{aligned}
(a+b)^2 &= a^2+2ab+b^2 \\
(a-b)^2 &= a^2-2ab+b^2
\end{aligned}
$$
~~~

## 4. 分段函数

cases 环境必须放在独立公式块中。每个分支单独一行，条件与表达式之间用 & 对齐，分支之间使用两个反斜杠：

~~~markdown
$$
f(x)=
\begin{cases}
x^2, & x\geq 0,\\
-x, & x<0.
\end{cases}
$$
~~~

正确渲染效果应为：

$$
f(x)=
\begin{cases}
x^2, & x\geq 0,\\
-x, & x<0.
\end{cases}
$$

## 5. 矩阵

~~~markdown
$$
A=\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
$$
~~~

## 6. 不推荐的定界符

正文中不要使用 `\(...\)` 或 `\[...\]` 作为公式定界符。

统一替换为：
- 行内：$...$
- 独立：$$...$$

## 7. 代码块中的公式

代码块用于展示原始 Markdown 或 LaTeX 源码，内部公式不会作为数学表达式渲染。需要展示效果时，应在代码块外另写实际公式。

## 8. 提交前检查清单

- [ ] 行内公式使用单美元符号。
- [ ] 独立公式使用单独成行的双美元符号，且前后留空行。
- [ ] 分段函数每个分支独立成行，使用两个反斜杠换行。
- [ ] 多行公式的对齐符 & 和环境起止标签成对。
- [ ] 反斜杠没有重复转义；正确命令是 `\frac`，不能写成 `\\frac`。
- [ ] 花括号、上下标和公式定界符成对闭合。
- [ ] 代码块中的公式源码与正文实际渲染公式明确区分。
- [ ] 提交后在 GitHub 文件页面检查实际显示效果。

## 9. 参考

- [GitHub Docs｜Writing mathematical expressions](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions)
- [LaTeX Project](https://www.latex-project.org/)
