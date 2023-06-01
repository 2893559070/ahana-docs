import{_ as t,o as p,c as e,b as n,d as a,a as o}from"./app-676abf65.js";const i={},c=o(`<h1 id="vue3学习" tabindex="-1"><a class="header-anchor" href="#vue3学习" aria-hidden="true">#</a> vue3学习</h1><h2 id="项目创建" tabindex="-1"><a class="header-anchor" href="#项目创建" aria-hidden="true">#</a> 项目创建</h2><ul><li><p>Vue-cli</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli

  vue create name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Vite</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">npm</span> init vite-app name
  <span class="token builtin class-name">cd</span> name
  <span class="token function">npm</span> <span class="token function">install</span>
  <span class="token function">npm</span> run dev

  <span class="token function">yarn</span> create vite-app name
  <span class="token builtin class-name">cd</span> name
  <span class="token function">yarn</span>
  <span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h2><ul><li><p>注意点：</p><ul><li>尽量vue2与vue3setup 不要进行混用 vue2可以访问到setup中的属性方法</li><li>setup中不能访问到vue2中的在配置</li><li>有重名setup优先</li><li>setup不能是一个async函数，因为返回值不再是return的对象，而是被promise包裹的对象，模板看不到return对象中的属性</li></ul></li><li><p>setup</p><ul><li>执行时机：在beforeCreate之前执行一次，this是undefined</li><li>参数 <ul><li>props: 值为对象，包含：组件外部传递过来，且组件每部声明接收了的属性 <ul><li>声明后不用会给警告</li></ul></li><li>context: 上下文对象 <ul><li>attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明属性，相当于this.$attrs</li><li>slots: 收到的插槽内容，相当于this.$slots</li><li>emit: 分发自定义事件的函数，相当于this.$emit</li></ul></li></ul></li></ul></li><li><p>watch</p><ul><li>监视reactive定义的数据，无法正确的获取oldValue</li><li>强制开启深度监听，无法关闭</li><li>使用函数监听单个属性，此属性是多层对象，需要开启deep深度监听</li><li>ref基本数据类型不加value</li></ul></li></ul><h3 id="常用使用方式" tabindex="-1"><a class="header-anchor" href="#常用使用方式" aria-hidden="true">#</a> 常用使用方式</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- vue3 Composition API 经典steup --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      data
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- vue3 Composition API steup 语法糖 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- vue3 Composition API steup 语法糖 加ts --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">leng</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

  <span class="token keyword">interface</span> <span class="token class-name">DataType</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">userInfo</span><span class="token operator">:</span> object<span class="token punctuation">,</span>
    code<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token literal-property property">data</span><span class="token operator">:</span> DataType <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">userInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="proxy响应式" tabindex="-1"><a class="header-anchor" href="#proxy响应式" aria-hidden="true">#</a> Proxy响应式</h3><ul><li>通过Proxy（代理）：拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性的删除等。</li><li>通过Reflect（反射）：对源对象的属性进行操作</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义数据源</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义代理实现响应式 window.Proxy</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">读取</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>propName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>target<span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token comment">// return target[propName];</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">设置</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>propName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>target<span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token comment">// target[propName] = value;</span>
    Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">deleteProperty</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> propName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">删除</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>propName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">属性</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token comment">// return delete target[propName]</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// Reflect 反射对象，程序出错不用捕获，不影响后面代码的执行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hook函数" tabindex="-1"><a class="header-anchor" href="#hook函数" aria-hidden="true">#</a> hook函数</h3><ul><li>hook本质是一个函数，把setup函数中使用的Composition API进行了封装。</li><li>类似于vue2的mixin</li><li>自定义hook的优势：服用代码，让setup中的逻辑更清楚易懂</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> onBeforeUnmount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//实现鼠标“打点”相关的数据</span>
 <span class="token keyword">let</span> point <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">0</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
 <span class="token comment">//实现鼠标“打点”相关的方法</span>
 <span class="token keyword">function</span> <span class="token function">savePoint</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  point<span class="token punctuation">.</span>x <span class="token operator">=</span> event<span class="token punctuation">.</span>pageX
  point<span class="token punctuation">.</span>y <span class="token operator">=</span> event<span class="token punctuation">.</span>pageY
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>pageX<span class="token punctuation">,</span> event<span class="token punctuation">.</span>pageY<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 
 <span class="token comment">//实现鼠标“打点”相关的生命周期钩子</span>
 <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> savePoint<span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
 <span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> savePoint<span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
 <span class="token keyword">return</span> point
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>我是Test组件<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>坐标为：x：<span class="token punctuation">{</span><span class="token punctuation">{</span> point<span class="token punctuation">.</span>x <span class="token punctuation">}</span><span class="token punctuation">}</span>，y：<span class="token punctuation">{</span><span class="token punctuation">{</span> point<span class="token punctuation">.</span>y <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
 
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> usePoint <span class="token keyword">from</span> <span class="token string">&quot;../hooks/usePoint&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> point <span class="token operator">=</span> <span class="token function">usePoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> point <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="toref-torefs" tabindex="-1"><a class="header-anchor" href="#toref-torefs" aria-hidden="true">#</a> toRef toRefs</h3><ul><li>创建一个ref对象，其value值指向另一个对象中的某个属性</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">userInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
      <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> name1 <span class="token operator">=</span> userInfo<span class="token punctuation">.</span>username<span class="token punctuation">;</span> <span class="token comment">// 丢失proxy代理，无法形成响应式</span>
  <span class="token keyword">const</span> name2 <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">,</span> <span class="token string">&#39;username&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 通过refImpl实例将name2进行代理，形成响应式</span>
  <span class="token keyword">const</span> addressA <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">.</span>address<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 通过refImpl实例将addressA进行代理，形成响应式</span>

  <span class="token comment">// 代理区别</span>
  <span class="token function">toRef</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">.</span>address<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// userInfo.address.a 更改（与userInfo元数据保持同步，引用关系）</span>
  <span class="token function">toRef</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">.</span>address<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// userInfo.address.a 没更改（与userInfo元数据分离了，复制重新生成）</span>

  <span class="token doc-comment comment">/**
   * 统一代理
   * <span class="token punctuation">{</span>
      userInfo: <span class="token punctuation">{</span>
        username: &#39;name&#39;,
        password: 123,
        address: <span class="token punctuation">{</span>
          a: 1,
          b: 2
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
   * */</span> 
  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    data<span class="token punctuation">,</span>
    name1<span class="token punctuation">,</span>
    name2<span class="token punctuation">,</span>
    addressA<span class="token punctuation">,</span>
    <span class="token operator">...</span>user
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),l=["src"],u=["src"],r=["src"],d=["src"],k=n("h3",{id:"vue3对全局api的调整",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue3对全局api的调整","aria-hidden":"true"},"#"),a(" vue3对全局API的调整")],-1),v=["src"];function m(s,b){return p(),e("div",null,[c,n("img",{src:s.$withBase("/ts+vue3/vue31.png"),alt:"foo"},null,8,l),n("img",{src:s.$withBase("/ts+vue3/vue3-2.png"),alt:"foo"},null,8,u),n("img",{src:s.$withBase("/ts+vue3/vue3-3.png"),alt:"foo"},null,8,r),n("ul",null,[n("li",null,[a("动态加载组件 "),n("img",{src:s.$withBase("/ts+vue3/vue3-4.png"),alt:"foo"},null,8,d)])]),k,n("img",{src:s.$withBase("/ts+vue3/vue3-5.png"),alt:"foo"},null,8,v)])}const f=t(i,[["render",m],["__file","vue3.html.vue"]]);export{f as default};
