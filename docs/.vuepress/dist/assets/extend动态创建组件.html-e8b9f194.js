import{_ as n,o as s,c as a,a as t}from"./app-676abf65.js";const e={},p=t(`<h1 id="extend" tabindex="-1"><a class="header-anchor" href="#extend" aria-hidden="true">#</a> extend</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 0. 创建组件
 1. 引入组件
 2. 使用extend将组件创建成实例
 3. 创建标签并指定内容
 4. 向外导出
 5. 引入到入口文件进行全局注册
*/</span>

<span class="token comment">// 0 </span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;show&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;toast&quot;</span><span class="token operator">&gt;</span>
  <span class="token punctuation">{</span><span class="token punctuation">{</span> text <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
 #toast <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> pink<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

<span class="token comment">// 1 - 4</span>
<span class="token keyword">import</span> Toast <span class="token keyword">from</span> <span class="token string">&#39;./toast.vue&#39;</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> dom <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>Toast<span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">showToast</span><span class="token punctuation">(</span>text <span class="token operator">=</span> <span class="token string">&#39;请输入内容&#39;</span><span class="token punctuation">,</span> show <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> duration <span class="token operator">=</span> <span class="token number">1500</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token constant">DOM</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">dom</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          text<span class="token punctuation">,</span>
          show
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token constant">DOM</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span>

  <span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token constant">DOM</span><span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> duration<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> showToast

<span class="token comment">// 5 index.js 入口文件 挂载到实例上</span>
<span class="token keyword">import</span> showToast <span class="token keyword">from</span> <span class="token string">&#39;./components/show.js&#39;</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$showToast <span class="token operator">=</span> showToast

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件实例创建的另一种解决方案" tabindex="-1"><a class="header-anchor" href="#组件实例创建的另一种解决方案" aria-hidden="true">#</a> 组件实例创建的另一种解决方案</h2><h3 id="_1" tabindex="-1"><a class="header-anchor" href="#_1" aria-hidden="true">#</a> 1</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Ctor <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span> 
<span class="token keyword">const</span> comp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ctor</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">propsData</span><span class="token operator">:</span> props<span class="token punctuation">}</span><span class="token punctuation">)</span> 
comp<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>comp<span class="token punctuation">.</span>$el<span class="token punctuation">)</span> 
comp<span class="token punctuation">.</span><span class="token function-variable function">remove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 
  <span class="token comment">// 移除dom </span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>comp<span class="token punctuation">.</span>$el<span class="token punctuation">)</span> 
  <span class="token comment">// 销毁组件 </span>
  comp<span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2" tabindex="-1"><a class="header-anchor" href="#_2" aria-hidden="true">#</a> 2</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Notice <span class="token keyword">from</span> <span class="token string">&#39;@/components/Notice.vue&#39;</span> 
<span class="token comment">//... </span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> 
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$notice</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token keyword">return</span> <span class="token function">create</span><span class="token punctuation">(</span>Notice<span class="token punctuation">,</span> options<span class="token punctuation">)</span> 
    <span class="token punctuation">}</span> 
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","extend动态创建组件.html.vue"]]);export{r as default};
