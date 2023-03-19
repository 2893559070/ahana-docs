import{_ as n,p as a,q as s,a1 as e}from"./framework-5866ffd3.js";const t={},p=e(`<h1 id="vue相关" tabindex="-1"><a class="header-anchor" href="#vue相关" aria-hidden="true">#</a> vue相关</h1><h3 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token doc-comment comment">/**
   * <span class="token keyword">@func</span> 递归
   * <span class="token keyword">@desc</span> 向上查找父组件 触发方法或者更改变量
   */</span>
  <span class="token function">findParentMethod</span><span class="token punctuation">(</span><span class="token parameter">parent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> param <span class="token operator">=</span> parent <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$parent<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>param <span class="token operator">&amp;&amp;</span> param<span class="token punctuation">.</span>$data <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> param<span class="token punctuation">.</span>$data <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 找到对应的父组件进行处理</span>
      <span class="token comment">// 处理区域</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findParentMethod</span><span class="token punctuation">(</span>param<span class="token punctuation">.</span>$parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(i,l){return a(),s("div",null,o)}const u=n(t,[["render",c],["__file","递归找组件.html.vue"]]);export{u as default};
