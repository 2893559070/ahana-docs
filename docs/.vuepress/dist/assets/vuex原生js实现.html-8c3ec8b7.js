import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const e={},p=t(`<h1 id="vuex原生js实现" tabindex="-1"><a class="header-anchor" href="#vuex原生js实现" aria-hidden="true">#</a> vuex原生js实现</h1><h2 id="文件夹" tabindex="-1"><a class="header-anchor" href="#文件夹" aria-hidden="true">#</a> 文件夹</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code> -store
  -index.js
  -store.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="index-js" tabindex="-1"><a class="header-anchor" href="#index-js" aria-hidden="true">#</a> index.js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;./store.js&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">doubleCounter</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>counter <span class="token operator">*</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>counter<span class="token operator">++</span>
      <span class="token comment">// this.state</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 结构上下文</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="store-js" tabindex="-1"><a class="header-anchor" href="#store-js" aria-hidden="true">#</a> store.js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> Vue<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Store</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">option <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>option <span class="token operator">=</span> option
   <span class="token comment">// 将 store 通过创建 Vue 实例的方式 创建值至实例</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>_vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">//  data: { state: option }</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">state</span><span class="token operator">:</span> option<span class="token punctuation">.</span>state <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 获取 state 触发</span>
  <span class="token keyword">get</span> <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_vm<span class="token punctuation">.</span>state
  <span class="token punctuation">}</span>
  <span class="token comment">// 更改 state 触发</span>
  <span class="token keyword">set</span> <span class="token function">state</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;无法支持直接赋值请使用commit方法&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span> 
   
  <span class="token comment">/*
   注意 使用 commit、dispatch 注意作用域，不要丢失this
  */</span>
  <span class="token comment">// 同步修改 state</span>
  <span class="token function-variable function">commit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> val <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取传入的 方法名称、数据</span>
    <span class="token keyword">const</span> method <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>option<span class="token punctuation">.</span>mutations<span class="token punctuation">[</span>type<span class="token punctuation">]</span>
    <span class="token function">method</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_vm<span class="token punctuation">.</span>state<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">dispatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> val <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取传入的 方法名称、数据</span>
    <span class="token keyword">const</span> method <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>option<span class="token punctuation">.</span>actions<span class="token punctuation">[</span>type<span class="token punctuation">]</span>
    <span class="token comment">// 将自身 传入能够得到 commit 方法</span>
    <span class="token function">method</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">vue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  Vue <span class="token operator">=</span> vue
  <span class="token comment">// 通过 mixin 添加只每个实例组件 创建共享</span>
  Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">beforeCreate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 使每个组件 都执行 beforeCreate 获取每个组件的数据</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">$options</span><span class="token operator">:</span> options <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
      <span class="token comment">// 入口文件已挂载 store 后才进行程序</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>store<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将 挂载的 store 添加到 Vue实例</span>
        <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$sotre <span class="token operator">=</span> options<span class="token punctuation">.</span>store
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  Store<span class="token punctuation">,</span>
  install
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="将-index-js-引入入口文件-main-js-进行挂载" tabindex="-1"><a class="header-anchor" href="#将-index-js-引入入口文件-main-js-进行挂载" aria-hidden="true">#</a> 将 index.js 引入入口文件 main.js 进行挂载</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store/index.js&#39;</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  store<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","vuex原生js实现.html.vue"]]);export{r as default};
