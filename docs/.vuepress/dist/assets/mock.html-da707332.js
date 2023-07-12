import{_ as e,r as p,o as t,c as o,b as n,d as i,e as c,a as s}from"./app-fdb0ca41.js";const r={},l=s(`<h1 id="mock" tabindex="-1"><a class="header-anchor" href="#mock" aria-hidden="true">#</a> mock</h1><h3 id="开始-安装" tabindex="-1"><a class="header-anchor" href="#开始-安装" aria-hidden="true">#</a> 开始 &amp; 安装</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 安装
npm install mockjs

<span class="token comment">// 使用 Mock</span>
<span class="token keyword">var</span> Mock <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mockjs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> data <span class="token operator">=</span> Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 属性 list 的值是一个数组，其中含有 1 到 10 个元素</span>
    <span class="token string-property property">&#39;list|1-10&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token comment">// 属性 id 是一个自增数，起始值为 1，每次增 1</span>
        <span class="token string-property property">&#39;id|+1&#39;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 输出结果</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语法规范" tabindex="-1"><a class="header-anchor" href="#语法规范" aria-hidden="true">#</a> 语法规范</h3><h4 id="数据模板定义规范-dtd" tabindex="-1"><a class="header-anchor" href="#数据模板定义规范-dtd" aria-hidden="true">#</a> 数据模板定义规范 DTD</h4><h5 id="数据模板中的每个属性由-3-部分构成-属性名、生成规则、属性值" tabindex="-1"><a class="header-anchor" href="#数据模板中的每个属性由-3-部分构成-属性名、生成规则、属性值" aria-hidden="true">#</a> 数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值：</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 属性名   name</span>
<span class="token comment">// 生成规则 rule</span>
<span class="token comment">// 属性值   value</span>
<span class="token string-property property">&#39;name|rule&#39;</span><span class="token operator">:</span> value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span> 属性值是字符串 String
  <span class="token string-property property">&#39;name|min-max&#39;</span><span class="token operator">:</span> string
  通过重复 string 生成一个字符串，重复次数大于等于 min，小于等于 max。

  <span class="token string-property property">&#39;name|count&#39;</span><span class="token operator">:</span> string
  通过重复 string 生成一个字符串，重复次数等于 count。

<span class="token number">2.</span> 属性值是数字 Number
  <span class="token string-property property">&#39;name|+1&#39;</span><span class="token operator">:</span> number
  属性值自动加 <span class="token number">1</span>，初始值为 number。

  <span class="token string-property property">&#39;name|min-max&#39;</span><span class="token operator">:</span> number
  生成一个大于等于 min、小于等于 max 的整数，属性值 number 只是用来确定类型。

  <span class="token string-property property">&#39;name|min-max.dmin-dmax&#39;</span><span class="token operator">:</span> number
  生成一个浮点数，整数部分大于等于 min、小于等于 max，小数部分保留 dmin 到 dmax 位。

  Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token string-property property">&#39;number1|1-100.1-10&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;number2|123.1-10&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;number3|123.3&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;number4|123.10&#39;</span><span class="token operator">:</span> <span class="token number">1.123</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// =&gt;</span>
  <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;number1&quot;</span><span class="token operator">:</span> <span class="token number">12.92</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;number2&quot;</span><span class="token operator">:</span> <span class="token number">123.51</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;number3&quot;</span><span class="token operator">:</span> <span class="token number">123.777</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;number4&quot;</span><span class="token operator">:</span> <span class="token number">123.1231091814</span>
  <span class="token punctuation">}</span>

<span class="token number">3.</span> 属性值是布尔型 Boolean
  <span class="token string-property property">&#39;name|1&#39;</span><span class="token operator">:</span> boolean
  随机生成一个布尔值，值为 <span class="token boolean">true</span> 的概率是 <span class="token number">1</span><span class="token operator">/</span><span class="token number">2</span>，值为 <span class="token boolean">false</span> 的概率同样是 <span class="token number">1</span><span class="token operator">/</span><span class="token number">2</span>。

  <span class="token string-property property">&#39;name|min-max&#39;</span><span class="token operator">:</span> value
  随机生成一个布尔值，值为 value 的概率是 min <span class="token operator">/</span> <span class="token punctuation">(</span>min <span class="token operator">+</span> max<span class="token punctuation">)</span>，值为 <span class="token operator">!</span>value 的概率是 max <span class="token operator">/</span> <span class="token punctuation">(</span>min <span class="token operator">+</span> max<span class="token punctuation">)</span>。

<span class="token number">4.</span> 属性值是对象 Object
  <span class="token string-property property">&#39;name|count&#39;</span><span class="token operator">:</span> object
  从属性值 object 中随机选取 count 个属性。

  <span class="token string-property property">&#39;name|min-max&#39;</span><span class="token operator">:</span> object
  从属性值 object 中随机选取 min 到 max 个属性。

<span class="token number">5.</span> 属性值是数组 Array
  <span class="token string-property property">&#39;name|1&#39;</span><span class="token operator">:</span> array
  从属性值 array 中随机选取 <span class="token number">1</span> 个元素，作为最终值。

  <span class="token string-property property">&#39;name|+1&#39;</span><span class="token operator">:</span> array
  从属性值 array 中顺序选取 <span class="token number">1</span> 个元素，作为最终值。

  <span class="token string-property property">&#39;name|min-max&#39;</span><span class="token operator">:</span> array
  通过重复属性值 array 生成一个新数组，重复次数大于等于 min，小于等于 max。

  <span class="token string-property property">&#39;name|count&#39;</span><span class="token operator">:</span> array
  通过重复属性值 array 生成一个新数组，重复次数为 count。

<span class="token number">6.</span> 属性值是函数 Function
  <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span>
  执行函数 <span class="token keyword">function</span>，取其返回值作为最终的属性值，函数的上下文为属性 <span class="token string">&#39;name&#39;</span> 所在的对象。

<span class="token number">7.</span> 属性值是正则表达式 RegExp
  <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> regexp
  根据正则表达式 regexp 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。
  Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token string-property property">&#39;regexp1&#39;</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z][A-Z][0-9]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;regexp2&#39;</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\w\\W\\s\\S\\d\\D</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;regexp3&#39;</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d{5,10}</span><span class="token regex-delimiter">/</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// =&gt;</span>
  <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;regexp1&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pJ7&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;regexp2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;F)\\fp1G&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;regexp3&quot;</span><span class="token operator">:</span> <span class="token string">&quot;561659409&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h3>`,9),u={href:"http://mockjs.com/examples.html",target:"_blank",rel:"noopener noreferrer"},d=s(`<h3 id="结合vue框架使用" tabindex="-1"><a class="header-anchor" href="#结合vue框架使用" aria-hidden="true">#</a> 结合vue框架使用</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 1、在 src下创建 mock/index 文件
 * 2. 将创建的data导出
 * 3、在vue.config.js中进行配置
 * 4. 发送请求
 * */</span> 

<span class="token comment">// 1.</span>
<span class="token keyword">var</span> Mock <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mockjs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> data <span class="token operator">=</span> Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 属性 list 的值是一个数组，其中含有 1 到 10 个元素</span>
    <span class="token string-property property">&#39;list|1-10&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token comment">// 属性 id 是一个自增数，起始值为 1，每次增 1</span>
        <span class="token string-property property">&#39;id|+1&#39;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 2.</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;dataurl&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">met</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">mockData</span><span class="token operator">:</span> data <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token comment">// 3.</span>
<span class="token keyword">const</span> mockJs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@/mock&#39;</span><span class="token punctuation">)</span>
<span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">before</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    mockJs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      app<span class="token punctuation">[</span>item<span class="token punctuation">.</span>met<span class="token punctuation">]</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">mockData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 4. 注意请求地址需要与导出定义的url相对应</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;dataurl&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function k(m,v){const a=p("ExternalLinkIcon");return t(),o("div",null,[l,n("p",null,[n("a",u,[i("mock使用示例"),c(a)])]),d])}const g=e(r,[["render",k],["__file","mock.html.vue"]]);export{g as default};
