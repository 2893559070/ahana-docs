import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const p={},e=t(`<h1 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h1><h2 id="java-中泛型标记符" tabindex="-1"><a class="header-anchor" href="#java-中泛型标记符" aria-hidden="true">#</a> java 中泛型标记符</h2><ul><li><strong>E</strong> - Element (在集合中使用，因为集合中存放的是元素)</li><li><strong>T</strong> - Type（Java 类）</li><li><strong>K</strong> - Key（键）</li><li><strong>V</strong> - Value（值）</li><li><strong>N</strong> - Number（数值类型）</li><li><strong>？</strong> - 表示不确定的 java 类型</li></ul><h3 id="不同类型的数组元素" tabindex="-1"><a class="header-anchor" href="#不同类型的数组元素" aria-hidden="true">#</a> 不同类型的数组元素：</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GenericMethodTest</span><span class="token punctuation">{</span>
   <span class="token comment">// 泛型方法 printArray                         </span>
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">E</span> <span class="token punctuation">&gt;</span></span> <span class="token keyword">void</span> <span class="token function">printArray</span><span class="token punctuation">(</span> <span class="token class-name">E</span><span class="token punctuation">[</span><span class="token punctuation">]</span> inputArray <span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// 输出数组元素            </span>
         <span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token class-name">E</span> element <span class="token operator">:</span> inputArray <span class="token punctuation">)</span><span class="token punctuation">{</span>        
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span> <span class="token string">&quot;%s &quot;</span><span class="token punctuation">,</span> element <span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span> <span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 创建不同类型数组： Integer, Double 和 Character</span>
        <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> intArray <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">Double</span><span class="token punctuation">[</span><span class="token punctuation">]</span> doubleArray <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1.1</span><span class="token punctuation">,</span> <span class="token number">2.2</span><span class="token punctuation">,</span> <span class="token number">3.3</span><span class="token punctuation">,</span> <span class="token number">4.4</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">Character</span><span class="token punctuation">[</span><span class="token punctuation">]</span> charArray <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token char">&#39;H&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;E&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;L&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;L&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;O&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
 
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> <span class="token string">&quot;整型数组元素为:&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printArray</span><span class="token punctuation">(</span> intArray  <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 传递一个整型数组</span>
 
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> <span class="token string">&quot;\\n双精度型数组元素为:&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printArray</span><span class="token punctuation">(</span> doubleArray <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 传递一个双精度型数组</span>
 
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> <span class="token string">&quot;\\n字符型数组元素为:&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printArray</span><span class="token punctuation">(</span> charArray <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 传递一个字符型数组</span>
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义一个泛型类" tabindex="-1"><a class="header-anchor" href="#定义一个泛型类" aria-hidden="true">#</a> 定义一个泛型类:</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Box</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
   
  <span class="token keyword">private</span> <span class="token class-name">T</span> t<span class="token punctuation">;</span>
 
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>t <span class="token operator">=</span> t<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 
  <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> t<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Box</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> integerBox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Box</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Box</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> stringBox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Box</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    integerBox<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stringBox<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;菜鸟教程&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;整型值为 :%d\\n\\n&quot;</span><span class="token punctuation">,</span> integerBox<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;字符串为 :%s\\n&quot;</span><span class="token punctuation">,</span> stringBox<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型通配符" tabindex="-1"><a class="header-anchor" href="#类型通配符" aria-hidden="true">#</a> 类型通配符</h3><p>类型通配符一般是使用 <strong>?</strong> 代替具体的类型参数。例如 <strong><code>List&lt;?&gt;</code></strong> 在逻辑上是 <strong><code>List&lt;String&gt;,List&lt;Integer&gt;</code></strong> 等所有 <strong><code>List&lt;具体类型实参&gt;</code></strong> 的父类。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GenericTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> name <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> age <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> number <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        name<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;icon&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        age<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        number<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">314</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token function">getData</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">getData</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">getData</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;data :&quot;</span> <span class="token operator">+</span> data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[e];function o(l,u){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","泛型.html.vue"]]);export{k as default};
