import{_ as n,o as s,c as a,a as e}from"./app-676abf65.js";const p={},t=e(`<h1 id="typescript打包" tabindex="-1"><a class="header-anchor" href="#typescript打包" aria-hidden="true">#</a> TypeScript打包</h1><h3 id="webpack整合" tabindex="-1"><a class="header-anchor" href="#webpack整合" aria-hidden="true">#</a> webpack整合</h3><p>通常情况下，实际开发中我们都需要使用构建工具对代码进行打包； TS同样也可以结合构建工具一起使用，下边以webpack为例介绍一下如何结合构建工具使用TS； 步骤如下：</p><h3 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h3><p>进入项目根目录，执行命令 npm init -y，创建package.json文件</p><h3 id="下载构建工具" tabindex="-1"><a class="header-anchor" href="#下载构建工具" aria-hidden="true">#</a> 下载构建工具</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i <span class="token operator">-</span><span class="token constant">D</span> webpack webpack<span class="token operator">-</span>cli webpack<span class="token operator">-</span>dev<span class="token operator">-</span>server typescript ts<span class="token operator">-</span>loader clean<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="共安装了7个包" tabindex="-1"><a class="header-anchor" href="#共安装了7个包" aria-hidden="true">#</a> 共安装了7个包:</h3><ul><li>webpack：构建工具webpack</li><li>webpack-cli：webpack的命令行工具</li><li>webpack-dev-server：webpack的开发服务器</li><li>typescript：ts编译器</li><li>ts-loader：ts加载器，用于在webpack中编译ts文件</li><li>html-webpack-plugin：webpack中html插件，用来自动创建html文件</li><li>clean-webpack-plugin：webpack中的清除插件，每次构建都会先清除目录</li></ul><h3 id="配置webpack" tabindex="-1"><a class="header-anchor" href="#配置webpack" aria-hidden="true">#</a> 配置webpack</h3><p>根目录下创建webpack的配置文件webpack.config.js：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;html-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;clean-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">optimization</span><span class="token operator">:</span><span class="token punctuation">{</span>
       <span class="token literal-property property">minimize</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 关闭代码压缩，可选</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.ts&quot;</span><span class="token punctuation">,</span>

   <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&quot;inline-source-map&quot;</span><span class="token punctuation">,</span>

   <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token string">&#39;./dist&#39;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;bundle.js&quot;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">environment</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token literal-property property">arrowFunction</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 关闭webpack的箭头函数，可选</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.js&quot;</span><span class="token punctuation">]</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
           <span class="token punctuation">{</span>
               <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ts$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
               <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                   <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;ts-loader&quot;</span>     
               <span class="token punctuation">}</span><span class="token punctuation">,</span>
               <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
           <span class="token punctuation">}</span>
       <span class="token punctuation">]</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
       <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
           <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;TS测试&#39;</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置ts编译选项" tabindex="-1"><a class="header-anchor" href="#配置ts编译选项" aria-hidden="true">#</a> 配置TS编译选项</h3><p>根目录下创建tsconfig.json，配置可以根据自己需要</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
   <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES2015&quot;</span><span class="token punctuation">,</span>
       <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES2015&quot;</span><span class="token punctuation">,</span>
       <span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改package-json配置" tabindex="-1"><a class="header-anchor" href="#修改package-json配置" aria-hidden="true">#</a> 修改package.json配置</h3><p>修改package.json添加如下配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
   <span class="token operator">...</span>
   <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
       <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>
       <span class="token string-property property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack serve --open chrome.exe&quot;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="项目使用" tabindex="-1"><a class="header-anchor" href="#项目使用" aria-hidden="true">#</a> 项目使用</h3><p>在src下创建ts文件，并在并命令行执行npm run build对代码进行编译； 或者执行npm start来启动开发服务器；</p><h3 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> Babel</h3><p>除了webpack，开发中还经常需要结合babel来对代码进行转换； 以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将babel引入到项目中；</p><blockquote><p>虽然TS在编译时也支持代码转换，但是只支持简单的代码转换； 对于例如：Promise等ES6特性，TS无法直接转换，这时还要用到babel来做转换；</p></blockquote><p>安装依赖包：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i <span class="token operator">-</span><span class="token constant">D</span> @babel<span class="token operator">/</span>core @babel<span class="token operator">/</span>preset<span class="token operator">-</span>env babel<span class="token operator">-</span>loader core<span class="token operator">-</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>共安装了4个包，分别是：</p><ul><li>@babel/core：babel的核心工具</li><li>@babel/preset-env：babel的预定义环境</li><li>@babel-loader：babel在webpack中的加载器</li><li>core-js：core-js用来使老版本的浏览器支持新版ES语法</li></ul><p>修改webpack.config.js配置文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ts$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
                        <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            <span class="token punctuation">[</span>
                                <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
                                <span class="token punctuation">{</span>
                                    <span class="token string-property property">&quot;targets&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                        <span class="token string-property property">&quot;chrome&quot;</span><span class="token operator">:</span> <span class="token string">&quot;58&quot;</span><span class="token punctuation">,</span>
                                        <span class="token string-property property">&quot;ie&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11&quot;</span>
                                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                    <span class="token string-property property">&quot;corejs&quot;</span><span class="token operator">:</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
                                    <span class="token string-property property">&quot;useBuiltIns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;usage&quot;</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">]</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;ts-loader&quot;</span><span class="token punctuation">,</span>

                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如此一来，使用ts编译后的文件将会再次被babel处理； 使得代码可以在大部分浏览器中直接使用； 同时可以在配置选项的targets中指定要兼容的浏览器版本；</p>`,30),o=[t];function l(r,i){return s(),a("div",null,o)}const u=n(p,[["render",l],["__file","TypeScript打包.html.vue"]]);export{u as default};
