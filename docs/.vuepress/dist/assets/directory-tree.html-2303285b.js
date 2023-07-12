import{_ as n,o as s,c as a,a as t}from"./app-fdb0ca41.js";const e={},p=t(`<h1 id="directory-tree-目录树" tabindex="-1"><a class="header-anchor" href="#directory-tree-目录树" aria-hidden="true">#</a> directory-tree 目录树</h1><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  npm install directory<span class="token operator">-</span>tree
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> dirTree <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;directory-tree&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token function">dirTree</span><span class="token punctuation">(</span><span class="token string">&quot;/some/path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="您还可以通过扩展正则表达式进行过滤-这对于仅包含某些类型的文件很有用。" tabindex="-1"><a class="header-anchor" href="#您还可以通过扩展正则表达式进行过滤-这对于仅包含某些类型的文件很有用。" aria-hidden="true">#</a> 您还可以通过扩展正则表达式进行过滤：这对于仅包含某些类型的文件很有用。</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> dirTree <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;directory-tree&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> filteredTree <span class="token operator">=</span> <span class="token function">dirTree</span><span class="token punctuation">(</span><span class="token string">&quot;/some/path&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.txt</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-regex-过滤多个扩展名的示例。" tabindex="-1"><a class="header-anchor" href="#使用-regex-过滤多个扩展名的示例。" aria-hidden="true">#</a> 使用 Regex 过滤多个扩展名的示例。</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> dirTree <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;directory-tree&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> filteredTree <span class="token operator">=</span> <span class="token function">dirTree</span><span class="token punctuation">(</span><span class="token string">&quot;/some/path&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(md|js|html|java|py|rb)$</span><span class="token regex-delimiter">/</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="您还可以使用正则表达式从树中排除路径" tabindex="-1"><a class="header-anchor" href="#您还可以使用正则表达式从树中排除路径" aria-hidden="true">#</a> 您还可以使用正则表达式从树中排除路径：</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> dirTree <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;directory-tree&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> filteredTree <span class="token operator">=</span> <span class="token function">dirTree</span><span class="token punctuation">(</span><span class="token string">&quot;/some/path&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">some_path_to_exclude</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="您还可以指定您希望在每个文件-目录中包含哪些附加属性" tabindex="-1"><a class="header-anchor" href="#您还可以指定您希望在每个文件-目录中包含哪些附加属性" aria-hidden="true">#</a> 您还可以指定您希望在每个文件/目录中包含哪些附加属性：</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> dirTree <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;directory-tree&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> filteredTree <span class="token operator">=</span> <span class="token function">dirTree</span><span class="token punctuation">(</span><span class="token string">&#39;/some/path&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">attributes</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;mode&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mtime&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="默认属性-name-path-用于文件和-name-path-children-目录" tabindex="-1"><a class="header-anchor" href="#默认属性-name-path-用于文件和-name-path-children-目录" aria-hidden="true">#</a> 默认属性[name, path]用于文件和[name, path, children]目录</h3><h4 id="可以使用与提供的扩展名匹配的每个文件执行回调函数" tabindex="-1"><a class="header-anchor" href="#可以使用与提供的扩展名匹配的每个文件执行回调函数" aria-hidden="true">#</a> 可以使用与提供的扩展名匹配的每个文件执行回调函数：</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> <span class="token constant">PATH</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> dirTree <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;directory-tree&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token function">dirTree</span><span class="token punctuation">(</span><span class="token string">&#39;./test/test_data&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">extensions</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.txt$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> <span class="token constant">PATH</span><span class="token punctuation">,</span> stats</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="回调函数采用目录项-具有路径、名称、大小和扩展名-以及节点路径的实例和节点-fs-stats的实例。" tabindex="-1"><a class="header-anchor" href="#回调函数采用目录项-具有路径、名称、大小和扩展名-以及节点路径的实例和节点-fs-stats的实例。" aria-hidden="true">#</a> 回调函数采用目录项（具有路径、名称、大小和扩展名）以及节点路径的实例和节点 FS.stats的实例。</h3><h4 id="您还可以为目录传递回调函数" tabindex="-1"><a class="header-anchor" href="#您还可以为目录传递回调函数" aria-hidden="true">#</a> 您还可以为目录传递回调函数：</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> <span class="token constant">PATH</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> dirTree <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;directory-tree&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token function">dirTree</span><span class="token punctuation">(</span><span class="token string">&#39;./test/test_data&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">extensions</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.txt$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> <span class="token constant">PATH</span><span class="token punctuation">,</span> stats</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">exclude</span><span class="token operator">:</span> RegExp<span class="token operator">|</span>RegExp<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">-</span> 一个 RegExp 或 RegExp 数组，用于测试是否排除目录。

<span class="token literal-property property">extensions</span><span class="token operator">:</span> RegExp<span class="token operator">-</span> 一个正则表达式，用于测试排除具有匹配扩展名的文件。

<span class="token literal-property property">attributes</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">-</span> <span class="token constant">FS</span><span class="token punctuation">.</span>stats属性数组。

<span class="token literal-property property">normalizePath</span><span class="token operator">:</span> Boolean<span class="token operator">-</span> 如果为 <span class="token boolean">true</span>，windows 样式路径将被规范化为 unix 样式路径（<span class="token operator">/</span> 而不是 \\）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h3><h4 id="给定一个结构如下的目录" tabindex="-1"><a class="header-anchor" href="#给定一个结构如下的目录" aria-hidden="true">#</a> 给定一个结构如下的目录：</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  photos
  ├── summer
  │   └── june
  │       └── windsurf<span class="token punctuation">.</span>jpg
  └── winter
      └── january
          ├── ski<span class="token punctuation">.</span>png
          └── snowboard<span class="token punctuation">.</span>jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="directory-treewithattributes-size-type-extension-将返回这个-js-对象" tabindex="-1"><a class="header-anchor" href="#directory-treewithattributes-size-type-extension-将返回这个-js-对象" aria-hidden="true">#</a> directory-treewithattributes: [&quot;size&quot;, &quot;type&quot;, &quot;extension&quot;] 将返回这个 JS 对象：</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;photos&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;photos&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;directory&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;photos/summer&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;summer&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;directory&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;photos/summer/june&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;june&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;directory&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;photos/summer/june/windsurf.jpg&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;windsurf.jpg&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;extension&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.jpg&quot;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;photos/winter&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;winter&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;directory&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;photos/winter/january&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;january&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;directory&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;photos/winter/january/ski.png&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ski.png&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;extension&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.png&quot;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;photos/winter/january/snowboard.jpg&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;snowboard.jpg&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;extension&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.jpg&quot;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),o=[p];function r(i,c){return s(),a("div",null,o)}const u=n(e,[["render",r],["__file","directory-tree.html.vue"]]);export{u as default};