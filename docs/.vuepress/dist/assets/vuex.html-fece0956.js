import{_ as n,o as s,c as a,a as t}from"./app-fdb0ca41.js";const e={},p=t(`<h1 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> vuex</h1><h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2><ul><li>在项目的根目录下新增一个store文件夹，在该文件夹内创建index.js</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>│  App<span class="token punctuation">.</span>vue
│  main<span class="token punctuation">.</span>js
│
├─assets
│      logo<span class="token punctuation">.</span>png
│
├─components
│      HelloWorld<span class="token punctuation">.</span>vue
│
├─router
│      index<span class="token punctuation">.</span>js
│
└─store
       index<span class="token punctuation">.</span>js
       actions<span class="token punctuation">.</span>js
       getters<span class="token punctuation">.</span>js
       mutations<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuex中的核心内容" tabindex="-1"><a class="header-anchor" href="#vuex中的核心内容" aria-hidden="true">#</a> VueX中的核心内容</h2><ul><li><p>state 存放状态</p><ul><li>引用方式</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 直接使用： </span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>

<span class="token comment">// map辅助函数</span>
 <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
   <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
   <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&#39;新名字&#39;</span><span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// modules中</span>
 <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
   <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token string">&#39;模块名&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
   <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token string">&#39;模块名&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;新名字&#39;</span><span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>增删state中的成员 为了配合Vue的响应式数据，我们在Mutations的方法中，应当使用Vue提供的方法来进行操作。如果使用delete或者xx.xx = xx的形式去删或增，则Vue不能对数据进行实时响应。</p><ul><li>Vue.set 为某个对象设置成员的值，若不存在则新增</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 例如对state对象中添加一个age成员</span>
Vue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Vue.delete 删除成员</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token comment">// 将刚刚添加的age成员删除</span>
 Vue<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>mutations 操作 state</p><ul><li><p>mutation传值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 单个值提交时: 方式1</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;edit&#39;</span><span class="token punctuation">,</span>实参<span class="token punctuation">)</span>
<span class="token comment">// 当需要多参提交时，推荐把他们放在一个对象中来提交:</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;edit&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 模块</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;模块名/mutation名&#39;</span><span class="token punctuation">,</span> 参数<span class="token punctuation">)</span>

<span class="token comment">// 方式2 </span>
<span class="token comment">// 非模块</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;mutation名&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// 模块</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token string">&#39;模块名&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 另一种提交方式</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&#39;edit&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">payload</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">&#39;男&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>getters 加工state成员给外界 可以对state中的成员加工后传递给外界 Getters中的方法有两个默认参数</p><ul><li>state 当前VueX对象中的状态对象</li><li>getters 当前getters对象，用于将getters下的其他getter拿来用</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token literal-property property">getters</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">nameInfo</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;姓名:&quot;</span><span class="token operator">+</span>state<span class="token punctuation">.</span>name
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">fullInfo</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span>getters</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> getters<span class="token punctuation">.</span>nameInfo<span class="token operator">+</span><span class="token string">&#39;年龄:&#39;</span><span class="token operator">+</span>state<span class="token punctuation">.</span>age
    <span class="token punctuation">}</span>  
  <span class="token punctuation">}</span>

  <span class="token comment">// 组件中调用</span>
  <span class="token comment">// 方式1</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>fullInfo
  <span class="token comment">// 模块</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>模块名<span class="token punctuation">.</span>xxx
  <span class="token comment">// 方式2</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span>mapGetters<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;fullInfo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 动态计算属性，相当于this.$store.getters.fullInfo</span>
      <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token string">&#39;模块名&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;fullInfo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 动态计算属性，相当于this.$store.getters.fullInfo</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>actions 异步操作 mutations 由于直接在mutation方法中进行异步操作，将会引起数据失效。所以提供了Actions来专门进行异步操作，最终提交mutation方法。 Actions中的方法有两个默认参数</p><ul><li>context 上下文(相当于箭头函数中的this)对象</li><li>payload 挂载参数</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">actions</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">aEdit</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span>payload</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;edit&#39;</span><span class="token punctuation">,</span>payload<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在组件中调用:</span>
<span class="token comment">// 方式1</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;aEdit&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">15</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 模块</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;模块名/action名&#39;</span><span class="token punctuation">,</span> 参数<span class="token punctuation">)</span>

<span class="token comment">// 方式2</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>mapActions<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span> <span class="token comment">// 语法糖</span>
        <span class="token punctuation">[</span><span class="token string">&#39;aEdit&#39;</span><span class="token punctuation">]</span> <span class="token comment">// 相当于this.$store.dispatch(&#39;modifyName&#39;),提交这个方法</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span> <span class="token comment">// 语法糖</span>
        <span class="token string">&#39;模块名&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&#39;aEdit&#39;</span><span class="token punctuation">]</span> <span class="token comment">// 相当于this.$store.dispatch(&#39;modifyName&#39;),提交这个方法</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

<span class="token comment">// 改进:  由于是异步操作，所以我们可以为我们的异步操作封装为一个Promise对象</span>
  <span class="token function">aEdit</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span>payload</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;edit&#39;</span><span class="token punctuation">,</span>payload<span class="token punctuation">)</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>modules 模块化状态管理</p></li></ul><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h3 id="非模块化" tabindex="-1"><a class="header-anchor" href="#非模块化" aria-hidden="true">#</a> 非模块化</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. index.js</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token comment">// *as的意思是 导入这个文件里面的所有内容，就不用一个个实例来导入了。</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> getters <span class="token keyword">from</span> <span class="token string">&#39;./getters&#39;</span> <span class="token comment">// 导入响应的模块，*相当于引入了这个组件下所有导出的事例</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> actions <span class="token keyword">from</span> <span class="token string">&#39;./actions&#39;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> mutations <span class="token keyword">from</span> <span class="token string">&#39;./mutations&#39;</span>
 
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>
<span class="token comment">// 首先声明一个需要全局维护的状态 state,比如 我这里举例的resturantName</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">resturantName</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span> <span class="token comment">// 默认值</span>
    <span class="token comment">// id: xxx  如果还有全局状态也可以在这里添加</span>
    <span class="token comment">// name:xxx</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 注册上面引入的各大模块</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    state<span class="token punctuation">,</span>    <span class="token comment">// 共同维护的一个状态，state里面可以是很多个全局状态</span>
    getters<span class="token punctuation">,</span>  <span class="token comment">// 获取数据并渲染</span>
    actions<span class="token punctuation">,</span>  <span class="token comment">// 数据的异步操作</span>
    mutations  <span class="token comment">// 处理数据的唯一途径，state的改变或赋值只能在这里</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
 
<span class="token keyword">export</span> <span class="token keyword">default</span> store  <span class="token comment">// 导出store并在 main.js中引用注册。</span>

<span class="token comment">// 2. mutations</span>
<span class="token comment">// 提交 mutations是更改Vuex状态的唯一合法方法</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">modifyAName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// A组件点击更改餐馆名称为 A餐馆</span>
    state<span class="token punctuation">.</span>resturantName <span class="token operator">=</span> name <span class="token comment">// 把方法传递过来的参数，赋值给state中的resturantName</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">modifyBName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// B组件点击更改餐馆名称为 B餐馆</span>
    state<span class="token punctuation">.</span>resturantName <span class="token operator">=</span> name
<span class="token punctuation">}</span>

<span class="token comment">// 3. actions</span>
<span class="token comment">// 给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutations中处理</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">modifyAName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>commit<span class="token punctuation">}</span><span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// commit 提交；name即为点击后传递过来的参数，此时是 &#39;A餐馆&#39;</span>
    <span class="token keyword">return</span> <span class="token function">commit</span> <span class="token punctuation">(</span><span class="token string">&#39;modifyAName&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">modifyBName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>commit<span class="token punctuation">}</span><span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">commit</span> <span class="token punctuation">(</span><span class="token string">&#39;modifyBName&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// ES6精简写法</span>
<span class="token comment">// export const modifyAName = ({commit},name) =&gt; commit(&#39;modifyAName&#39;, name)</span>

<span class="token comment">// 4. mutations</span>
<span class="token comment">// 提交 mutations是更改Vuex状态的唯一合法方法</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">modifyAName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// A组件点击更改餐馆名称为 A餐馆</span>
    state<span class="token punctuation">.</span>resturantName <span class="token operator">=</span> name <span class="token comment">// 把方法传递过来的参数，赋值给state中的resturantName</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">modifyBName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// B组件点击更改餐馆名称为 B餐馆</span>
    state<span class="token punctuation">.</span>resturantName <span class="token operator">=</span> name
<span class="token punctuation">}</span>

<span class="token comment">// 5. getters</span>
<span class="token comment">// 获取最终的状态信息</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">resturantName</span> <span class="token operator">=</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>resturantName

<span class="token comment">// 6.将store挂载到当前项目的Vue实例当中去</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  router<span class="token punctuation">,</span>
  store<span class="token punctuation">,</span>  <span class="token comment">//store:store 和router一样，将我们创建的Vuex实例挂载到这个vue实例中</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ... 省略引入</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    state<span class="token punctuation">,</span>    <span class="token comment">// 共同维护的一个状态，state里面可以是很多个全局状态</span>
    getters<span class="token punctuation">,</span>  <span class="token comment">// 获取数据并渲染</span>
    actions<span class="token punctuation">,</span>  <span class="token comment">// 数据的异步操作</span>
    <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      modulex<span class="token punctuation">,</span>
      moduley<span class="token punctuation">,</span>
      modulez
    <span class="token punctuation">}</span>  <span class="token comment">// 处理数据的唯一途径，state的改变或赋值只能在这里</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// modulex moduley modulez</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">xMutation</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>counter <span class="token operator">+=</span> payload<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","vuex.html.vue"]]);export{r as default};
