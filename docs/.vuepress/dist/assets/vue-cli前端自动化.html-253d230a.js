import{_ as n,o as s,c as a,a as e}from"./app-fdb0ca41.js";const p={},t=e(`<h1 id="vue-cli前端自动化" tabindex="-1"><a class="header-anchor" href="#vue-cli前端自动化" aria-hidden="true">#</a> vue-cli前端自动化</h1><h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h2><p>可以配置npm下载源</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  - 根目录
    - .npmrc

    <span class="token assign-left variable">registry</span><span class="token operator">=</span>https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="scss配置文件的引入" tabindex="-1"><a class="header-anchor" href="#scss配置文件的引入" aria-hidden="true">#</a> scss配置文件的引入</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// vue.config.js 配置</span>
  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// css预设器配置项</span>
      <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// pass options to sass-loader</span>
          <span class="token literal-property property">sass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">// 引入全局变量样式,@使我们设置的别名,执行src目录</span>
              <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
                  @import &quot;@/style/theme.scss&quot;;
              </span><span class="token template-punctuation string">\`</span></span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置代码压缩" tabindex="-1"><a class="header-anchor" href="#配置代码压缩" aria-hidden="true">#</a> 配置代码压缩</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// 安装</span>
  npm install uglifyjs<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin

  <span class="token comment">// 在vue.config.js文件中添加配置</span>
  <span class="token function-variable function">configureWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 为生产环境修改配置...</span>
          config<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
              <span class="token comment">//生产环境自动删除console</span>
              <span class="token keyword">new</span> <span class="token class-name">UglifyJsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                  <span class="token literal-property property">uglifyOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                      <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                          <span class="token literal-property property">warnings</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                          <span class="token literal-property property">drop_debugger</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                          <span class="token literal-property property">drop_console</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                      <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">parallel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[t];function l(i,c){return s(),a("div",null,o)}const u=n(p,[["render",l],["__file","vue-cli前端自动化.html.vue"]]);export{u as default};
