import{_ as t,r as i,o as l,c,b as n,d as o,e as p,a}from"./app-9d6e6088.js";const r={},u=a('<h1 id="源码分析" tabindex="-1"><a class="header-anchor" href="#源码分析" aria-hidden="true">#</a> 源码分析</h1><h2 id="虚拟的dom" tabindex="-1"><a class="header-anchor" href="#虚拟的dom" aria-hidden="true">#</a> 虚拟的DOM</h2><p>常见问题：react virual dom是什么？说一说diff算法</p><p>虚拟dom是编程概念也，就是一个js对象，将属性、配置、方法等临时存储在js对象中</p><h3 id="传统dom渲染过程" tabindex="-1"><a class="header-anchor" href="#传统dom渲染过程" aria-hidden="true">#</a> 传统dom渲染过程</h3>',5),d=["src"],v=a('<h2 id="jsx" tabindex="-1"><a class="header-anchor" href="#jsx" aria-hidden="true">#</a> JSX</h2><p><a href="">jsx</a></p><ol><li>什么是JSX</li></ol><ul><li>语法糖 React 使⽤ JSX 来替代常规的 JavaScript。 JSX 是⼀个看起来很像 XML 的 JavaScript 语法扩展。</li></ul><ol start="2"><li>为什么需要JSX</li></ol><ul><li>开发效率：使⽤ JSX 编写模板简单快速。 执⾏效率：JSX编译为 JavaScript 代码后进⾏了优化，执⾏更快</li><li>类型安全：在编译过程中就能发现错误</li></ul><ol start="3"><li>原理：babel-loader会预编译JSX为</li></ol><ul><li>React.createElement(...)</li></ul><ol start="4"><li>与vue的异同：</li></ol><ul><li>react中虚拟dom+jsx的设计⼀开始就有，vue则是演进过程中才出现的</li><li>jsx本来就是js扩展，转义过程简单直接的多；vue把template编译为render函数的过程需要复杂的编译器转换字符串-ast-js函数字符串</li></ul><h2 id="react的核心组件" tabindex="-1"><a class="header-anchor" href="#react的核心组件" aria-hidden="true">#</a> React的核心组件</h2>',11),m={href:"https://github.com/facebook/react/blob/master/packages/react/src/React.js",target:"_blank",rel:"noopener noreferrer"},k=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> React <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">Children</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      map<span class="token punctuation">,</span>
      foreach<span class="token punctuation">,</span>
      count<span class="token punctuation">,</span>
      toArray<span class="token punctuation">,</span>
      only
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    createRef<span class="token punctuation">,</span>
    Component<span class="token punctuation">,</span>
    PureComponent<span class="token punctuation">,</span>

    crateContext<span class="token punctuation">,</span>
    forwardRef<span class="token punctuation">,</span>
    lazy<span class="token punctuation">,</span>
    memo<span class="token punctuation">,</span>

    useCallback<span class="token punctuation">,</span>
    useContext<span class="token punctuation">,</span>
    useEffect<span class="token punctuation">,</span>
    useImpreativeHandle<span class="token punctuation">,</span>
    userDebugValue<span class="token punctuation">,</span>
    useLayoutEffect<span class="token punctuation">,</span>
    useMemo<span class="token punctuation">,</span>
    useReducer<span class="token punctuation">,</span>
    useRef<span class="token punctuation">,</span>
    useState<span class="token punctuation">,</span>

    <span class="token literal-property property">Fragment</span><span class="token operator">:</span> <span class="token constant">REACT_FRAGMENT_TYPE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">Profiler</span><span class="token operator">:</span> <span class="token constant">REACT_FRAGMENT_TYPE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">StrictMode</span><span class="token operator">:</span> <span class="token constant">REACT_STRICT_MODE_TYPE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">Suspense</span><span class="token operator">:</span> <span class="token constant">REACT_SUSPENSE_TYPE</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b=["src"];function h(s,_){const e=i("ExternalLinkIcon");return l(),c("div",null,[u,n("img",{src:s.$withBase("/react/8.png"),alt:"foo"},null,8,d),v,n("p",null,[n("a",m,[o("React"),p(e)])]),k,n("img",{src:s.$withBase("/react/9.png"),alt:"foo"},null,8,b)])}const E=t(r,[["render",h],["__file","源码分析.html.vue"]]);export{E as default};
