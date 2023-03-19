import{_ as t,M as o,p as i,q as c,R as s,t as n,N as r,a1 as e}from"./framework-5866ffd3.js";const l={},d=e(`<h1 id="搭建个人文档" tabindex="-1"><a class="header-anchor" href="#搭建个人文档" aria-hidden="true">#</a> 搭建个人文档</h1><h3 id="使用技术栈vuepress-and-gitee" tabindex="-1"><a class="header-anchor" href="#使用技术栈vuepress-and-gitee" aria-hidden="true">#</a> 使用技术栈VuePress and gitee</h3><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  npm install <span class="token operator">-</span><span class="token constant">D</span> vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建目录结构" tabindex="-1"><a class="header-anchor" href="#创建目录结构" aria-hidden="true">#</a> 创建目录结构</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token punctuation">.</span>
  ├── docs
  │   ├── <span class="token punctuation">.</span><span class="token function">vuepress</span> <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>
  │   │   ├── <span class="token function">components</span> <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>
  │   │   ├── <span class="token function">theme</span> <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>
  │   │   │   └── Layout<span class="token punctuation">.</span>vue
  │   │   ├── <span class="token keyword">public</span> <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>
  │   │   ├── <span class="token function">styles</span> <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>
  │   │   │   ├── index<span class="token punctuation">.</span>styl
  │   │   │   └── palette<span class="token punctuation">.</span>styl
  │   │   ├── <span class="token function">templates</span> <span class="token punctuation">(</span>可选的<span class="token punctuation">,</span> 谨慎配置<span class="token punctuation">)</span>
  │   │   │   ├── dev<span class="token punctuation">.</span>html
  │   │   │   └── ssr<span class="token punctuation">.</span>html
  │   │   ├── config<span class="token punctuation">.</span><span class="token function">js</span> <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>
  │   │   └── enhanceApp<span class="token punctuation">.</span><span class="token function">js</span> <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span>
  │   │ 
  │   ├── <span class="token constant">README</span><span class="token punctuation">.</span>md
  │   ├── guide
  │   │   └── <span class="token constant">README</span><span class="token punctuation">.</span>md
  │   └── config<span class="token punctuation">.</span>md
  │ 
  └── <span class="token keyword">package</span><span class="token punctuation">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目录结构说明" tabindex="-1"><a class="header-anchor" href="#目录结构说明" aria-hidden="true">#</a> 目录结构说明</h3>`,7),u={href:"https://vuepress.vuejs.org/zh/guide/directory-structure.html#%E9%BB%98%E8%AE%A4%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1",target:"_blank",rel:"noopener noreferrer"},v=e(`<h3 id="示例结构" tabindex="-1"><a class="header-anchor" href="#示例结构" aria-hidden="true">#</a> 示例结构</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token operator">|</span><span class="token operator">--</span> dist <span class="token comment">// 文件打包目录</span>
  <span class="token operator">|</span><span class="token operator">--</span> dics
    <span class="token operator">|</span><span class="token operator">--</span> <span class="token punctuation">.</span>vuepress
      <span class="token operator">|</span><span class="token operator">--</span> <span class="token keyword">public</span>
        <span class="token operator">|</span><span class="token operator">--</span> vuepress<span class="token operator">-</span>logo<span class="token punctuation">.</span>png
      <span class="token operator">|</span><span class="token operator">--</span> config<span class="token punctuation">.</span>js
    <span class="token operator">|</span><span class="token operator">--</span> chapter1
      <span class="token operator">|</span><span class="token operator">--</span> 01_初识Vuepress<span class="token punctuation">.</span>md
      <span class="token operator">|</span><span class="token operator">--</span> 02_安装Vuepress<span class="token punctuation">.</span>md
    <span class="token operator">|</span><span class="token operator">--</span> chapter2
      <span class="token operator">|</span><span class="token operator">--</span> 1_type<span class="token punctuation">.</span>md
    <span class="token operator">|</span><span class="token operator">--</span> <span class="token constant">README</span><span class="token punctuation">.</span>md
  <span class="token operator">|</span><span class="token operator">--</span> <span class="token keyword">package</span><span class="token punctuation">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新建docs-vuepress-config-js进行配置" tabindex="-1"><a class="header-anchor" href="#新建docs-vuepress-config-js进行配置" aria-hidden="true">#</a> 新建docs/.vuepress/config.js进行配置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// 注意: base的值为github仓库的名称</span>
  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/my-learning-documents/&#39;</span> <span class="token comment">/* 基础虚拟路径: */</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token string">&#39;dist&#39;</span> <span class="token comment">/* 打包文件基础路径, 在命令所在目录下 */</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;VuePress 入门&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 标题</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;学习使用 VuePress&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 标题下的描述</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 主题配置</span>
      <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 左侧导航</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;初识 VuePress&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 标题</span>
          <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 下级列表不可折叠</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// 下级列表</span>
            <span class="token string">&#39;chapter1/01_初识VuePress&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;chapter1/02_安装VuePress&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;VuePress 常用语法&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;chapter2/1_type&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="增加-docs-readme-md" tabindex="-1"><a class="header-anchor" href="#增加-docs-readme-md" aria-hidden="true">#</a> 增加 docs/README.md</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token operator">--</span><span class="token operator">-</span>
  #首页
  <span class="token literal-property property">home</span><span class="token operator">:</span> <span class="token boolean">true</span>
  # 图标
  <span class="token literal-property property">heroImage</span><span class="token operator">:</span> <span class="token operator">/</span>VuePress<span class="token operator">-</span>logo<span class="token punctuation">.</span>png
  # 按钮文本
  <span class="token literal-property property">actionText</span><span class="token operator">:</span> 开始学习 →
  # 按钮点击跳转路径
  <span class="token literal-property property">actionLink</span><span class="token operator">:</span> <span class="token operator">/</span>chapter1<span class="token operator">/</span>01_初识VuePress
  <span class="token operator">--</span><span class="token operator">-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改-package-json" tabindex="-1"><a class="header-anchor" href="#修改-package-json" aria-hidden="true">#</a> 修改 package.json</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;doc:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;doc:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发布到gitee" tabindex="-1"><a class="header-anchor" href="#发布到gitee" aria-hidden="true">#</a> 发布到gitee</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  # 执行打包命令
  yarn doc<span class="token operator">:</span>build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新建仓库-文件名要与docs-vuepress-config-js的base的value一致" tabindex="-1"><a class="header-anchor" href="#新建仓库-文件名要与docs-vuepress-config-js的base的value一致" aria-hidden="true">#</a> 新建仓库 （文件名要与docs/.vuepress/config.js的base的value一致）</h3><h3 id="将打包后的文件提交至新建仓库" tabindex="-1"><a class="header-anchor" href="#将打包后的文件提交至新建仓库" aria-hidden="true">#</a> 将打包后的文件提交至新建仓库</h3>`,12),k=["src"],m=s("h3",{id:"点服务选择gitee-pages",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#点服务选择gitee-pages","aria-hidden":"true"},"#"),n(" 点服务选择Gitee Pages")],-1),h=["src"],b=s("h3",{id:"选择需要部署的分支-默认选择-master-启动服务",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#选择需要部署的分支-默认选择-master-启动服务","aria-hidden":"true"},"#"),n(" 选择需要部署的分支，默认选择 Master 启动服务")],-1),g=["src"],y=s("h3",{id:"访问生成的网站地址-即可以查看你部署的静态页面啦",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#访问生成的网站地址-即可以查看你部署的静态页面啦","aria-hidden":"true"},"#"),n(" 访问生成的网站地址，即可以查看你部署的静态页面啦")],-1);function f(a,_){const p=o("ExternalLinkIcon");return i(),c("div",null,[d,s("p",null,[s("a",u,[n("目录结构说明"),r(p)])]),v,s("img",{src:a.$withBase("/dbwj.png"),alt:"foo"},null,8,k),m,s("img",{src:a.$withBase("/tjzck.png"),alt:"foo"},null,8,h),b,s("img",{src:a.$withBase("/tjbs.png"),alt:"foo"},null,8,g),y])}const x=t(l,[["render",f],["__file","搭建个人在线文档.html.vue"]]);export{x as default};
