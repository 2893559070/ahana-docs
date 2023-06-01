import{_ as n,o as s,c as a,a as t}from"./app-676abf65.js";const e={},p=t(`<h1 id="骚操作" tabindex="-1"><a class="header-anchor" href="#骚操作" aria-hidden="true">#</a> 骚操作</h1><h2 id="vue-util-definereactive" tabindex="-1"><a class="header-anchor" href="#vue-util-definereactive" aria-hidden="true">#</a> Vue.util.defineReactive</h2><p>Vue.util.defineReactive，它就是Vue监听current变量重要执行者</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  ar test<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token literal-property property">testa</span><span class="token operator">:</span><span class="token string">&#39;计时开始&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//设置定时器</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    test<span class="token punctuation">.</span>testa<span class="token operator">=</span><span class="token string">&#39;计时结束&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span>

  a<span class="token punctuation">.</span><span class="token function-variable function">install</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">vue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//监听testa，只要有变化就会触发重新渲染</span>
    Vue<span class="token punctuation">.</span>util<span class="token punctuation">.</span><span class="token function">defineReactive</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span><span class="token string">&#39;testa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//全局混入vue实例</span>
    vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">beforeCreate</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>test<span class="token operator">=</span>test<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">//全局生命周期注入</span>
      <span class="token function-variable function">created</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//console.log(this)</span>
      <span class="token punctuation">}</span>
      
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>test<span class="token punctuation">.</span>testa <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","骚操作.html.vue"]]);export{r as default};
