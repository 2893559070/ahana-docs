import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},o=e(`<h1 id="正则" tabindex="-1"><a class="header-anchor" href="#正则" aria-hidden="true">#</a> 正则</h1><h2 id="元字符" tabindex="-1"><a class="header-anchor" href="#元字符" aria-hidden="true">#</a> 元字符</h2><p>字符 | 描述</p><ul><li>| :-: \\d | 匹配一个数字字符。等价于 [0-9] \\D | 匹配一个非数字字符。等价于 [^0-9] \\w | 匹配字母、数字、下划线。等价于&#39;[A-Za-z0-9_]&#39; \\W | 匹配非字母、数字、下划线。等价于 &#39;[^A-Za-z0-9_]&#39; \\s | 匹配任何空白字符，包括空格、制表符、换页符 \\S | 匹配任何非空白字符。等价于 [^ \\f\\n\\r\\t\\v] \\f | 匹配一个换页符 \\n | 匹配一个换行符 \\r | 匹配一个回车符 \\t | 匹配一个制表符 \\v | 匹配一个垂直制表符 ^ | 匹配输入字符串开始的位置 $ | 匹配输入字符串结尾的位置 \\b | 匹配一个单词边界，也就是指单词和空格间的位置。例如， &#39;er\\b&#39; 可以匹配&quot;never&quot; 中的 &#39;er&#39;，但不能匹配 &quot;verb&quot; 中的 &#39;er&#39; \\B | 与 \\b 相反：er\\B&#39; 能匹配 &quot;verb&quot; 中的 &#39;er&#39;，但不能匹配 &quot;never&quot; 中的 &#39;er&#39; . | 匹配除换行符（\\n、\\r）之外的任何单个字符</li></ul><h2 id="区间" tabindex="-1"><a class="header-anchor" href="#区间" aria-hidden="true">#</a> 区间</h2><p>字符 | 描述</p><ul><li>| :-: [0-9] | 匹配 0-9 之间的数字 [A-Z] | 匹配 A-Z 之间的字母，也可以组合 [A-Za-z0-9]</li></ul><h2 id="限定符" tabindex="-1"><a class="header-anchor" href="#限定符" aria-hidden="true">#</a> 限定符</h2><p>字符 | 描述</p><ul><li>| :-:</li></ul><ul><li>| 匹配前面的子表达式零次或多次。例如，zo* 能匹配 &quot;z&quot; 以及 &quot;zoo&quot;。* 等价于{0,}</li></ul><ul><li>| 匹配前面的子表达式一次或多次。例如，&#39;zo+&#39; 能匹配 &quot;zo&quot; 以及 &quot;zoo&quot;，但不能匹配 &quot;z&quot;。+ 等价于 {1,} ? | 匹配前面的子表达式零次或一次。例如，&quot;do(es)?&quot; 可以匹配 &quot;do&quot; 、 &quot;does&quot; 中的 &quot;does&quot; 、 &quot;doxy&quot; 中的 &quot;do&quot; 。? 等价于 {0,1} {n} | n 是一个非负整数。匹配确定的 n 次。例如，&#39;o{2}&#39; 不能匹配 &quot;Bob&quot; 中的 &#39;o&#39;，但是能匹配 &quot;food&quot; 中的两个 o {n,} | n 是一个非负整数。至少匹配n 次。例如，&#39;o{2,}&#39; 不能匹配 &quot;Bob&quot; 中的 &#39;o&#39;，但能匹配 &quot;foooood&quot; 中的所有 o。&#39;o{1,}&#39; 等价于 &#39;o+&#39;。&#39;o{0,}&#39; 则等价于 &#39;o*&#39; {n,m} | m 和 n 均为非负整数，其中n &lt;= m。最少匹配 n 次且最多匹配 m 次。例如，&quot;o{1,3}&quot; 将匹配 &quot;fooooood&quot; 中的前三个 o。&#39;o{0,1}&#39; 等价于 &#39;o?&#39;。请注意在逗号和两个数之间不能有空格</li></ul><h2 id="转义" tabindex="-1"><a class="header-anchor" href="#转义" aria-hidden="true">#</a> 转义</h2><p>但由于符号 /、.、(、) 等等在正则是特殊字符，所以需要用转义符 \\ 转义</p><h2 id="贪婪" tabindex="-1"><a class="header-anchor" href="#贪婪" aria-hidden="true">#</a> 贪婪</h2><p>字符 | 描述</p><ul><li>| :-: *? | 重复多次，但尽可能少重复 +? | 重复1次、多次，但尽可能少重复 ?? | 重复0次、1次，但尽可能少重复 {n,m}? | 重复n~m次，但尽可能少重复 {n,}? | 重复n次以上，但尽可能少重复</li></ul><h2 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法" aria-hidden="true">#</a> 常用方法</h2><ul><li><p>test()</p><ul><li>规则：正则表达式搜索字符串指定的值，从而去匹配字符串。如果匹配成功就返回 true，如果匹配失败就返回 false。</li><li>用法：正则.test(字符串)</li><li>案例：<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;123abc&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\D</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span> <span class="token comment">// 匹配非数字</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;不全是数字！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;全是数字！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>search()</p><ul><li>规则：正则去匹配字符串，如果匹配成功，就返回匹配成功的位置，如果匹配失败就返回 -1</li><li>用法：字符串.search(正则)</li><li>案例：<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;abcdef&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> re1 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">d</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">;</span>
<span class="token keyword">var</span> re2 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">h</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>re1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>re2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>match()</p><ul><li>规则：正则去匹配字符串，如果匹配成功，就返回匹配成功的数组，如果匹配不成，就返回 null</li><li>用法：字符串.match(正则)</li><li>案例：<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;123fadf321dfadf4fadf1&quot;</span><span class="token punctuation">;</span> <span class="token comment">//(4) [&quot;123&quot;, &quot;321&quot;, &quot;4&quot;, &quot;1&quot;]</span>
<span class="token keyword">var</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>re<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;123&quot;, &quot;321&quot;, &quot;4&quot;, &quot;1&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>exec()</p><ul><li>规则：将返回一个数组，其中存放匹配的结果。如果为找到匹配结果，则返回 null。</li><li>用法：字符串.exec(正则)</li><li><code>全局匹配时，match会返回所有匹配上的内容；而exec仅匹配单次匹配上的内容 全局匹配且进行多次匹配时，exe会从上次匹配结束的下一位开始匹配，返回本次匹配上的内容，直至无可以匹配的内容，返回null</code></li><li>案例：<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;123fadf321dfadf4fadf1&quot;</span><span class="token punctuation">;</span> <span class="token comment">//(4) [&quot;123&quot;, &quot;321&quot;, &quot;4&quot;, &quot;1&quot;]</span>
<span class="token keyword">var</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>re<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;123&quot;, &quot;321&quot;, &quot;4&quot;, &quot;1&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>replace()</p><ul><li>规则：正则去匹配字符串，匹配成功的字符串去替换成新的字符串。函数的第一个参数，是匹配成功的字符；第二个参数：可以是字符串，也可以是一个回调函数。</li><li>用法：字符串.replace(正则,新的字符串)</li><li>案例：<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;aaa&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>re<span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// b</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>RegExp</p><ul><li>语法: new RegExp(pattern[, flags])</li><li>参数 pattern 是一个字符串, 指定了正则表达式字符串或其他的正则表达式对象.</li><li>参数 flags 是一个可选的字符串, 包含属性 “g”、”i” 和 “m”, 分别用于指定全局匹配、区分大小写的匹配和多行匹配. 如果pattern 是正则表达式, 而不是字符串, 则必须省略该参数.</li><li>案例：<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;esfsesfsfsdgfsd1234&#39;</span>
<span class="token keyword">var</span> pattern <span class="token operator">=</span> <span class="token string">&quot;[0-9]&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>pattern<span class="token punctuation">,</span><span class="token string">&quot;g&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 上述创建正则表达式对象,可以用对象字面量形式代替,也推荐下面这种</span>
<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[0-9]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>

str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&#39;这些是数字&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul>`,19),p=[o];function l(c,i){return s(),a("div",null,p)}const r=n(t,[["render",l],["__file","正则.html.vue"]]);export{r as default};
