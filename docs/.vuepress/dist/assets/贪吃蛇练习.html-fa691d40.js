import{_ as n,r as i,o as l,c as t,b as e,d as a,e as r,a as p}from"./app-676abf65.js";const o={},c=p(`<h1 id="贪吃蛇练习" tabindex="-1"><a class="header-anchor" href="#贪吃蛇练习" aria-hidden="true">#</a> 贪吃蛇练习</h1><p>使用TypeScript + Webpack + Less实现贪吃蛇的例子；</p><h3 id="项目依赖" tabindex="-1"><a class="header-anchor" href="#项目依赖" aria-hidden="true">#</a> 项目依赖</h3><ul><li><p>TypeScript：</p><ul><li>typescript；</li><li>ts-loader；</li><li>Webpack：</li></ul></li><li><p>TypeScript：</p><ul><li>typescript；</li><li>ts-loader；</li></ul></li><li><p>Webpack：</p><ul><li>webpack；</li><li>webpack-cli；</li><li>webpack-dev-server；</li><li>html-webpack-plugin；</li><li>clean-webpack-plugin；</li></ul></li><li><p>Babel：</p><ul><li>core-js；</li><li>babel-loader；</li><li>@babel/core；</li><li>@babel/preset-env；</li></ul></li><li><p>Less &amp; CSS资源：</p><ul><li>style-loader；</li><li>css-loader；</li><li>less；</li><li>less-loader；</li><li>postcss；</li><li>postcss-loader；</li><li>postcss-preset-env；</li></ul></li></ul><h3 id="项目使用" tabindex="-1"><a class="header-anchor" href="#项目使用" aria-hidden="true">#</a> 项目使用</h3><h4 id="编译运行" tabindex="-1"><a class="header-anchor" href="#编译运行" aria-hidden="true">#</a> 编译运行</h4><p>在确保已经正确安装node和npm的前提下： 分别执行下面的命令安装依赖并编译项目：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 安装依赖
npm i
# 编译打包
npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译完成后，使用浏览器打开dist目录下的index.html即可游玩；</p><h4 id="继续开发" tabindex="-1"><a class="header-anchor" href="#继续开发" aria-hidden="true">#</a> 继续开发</h4><p>使用npm run start进入开发模式；</p><p>默认使用Chrome浏览器打开，可以修改package.json中的值：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack serve --open chrome.exe&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3>`,14),d={href:"https://www.bilibili.com/video/BV1Xy4y1v7S2?p=22",target:"_blank",rel:"noopener noreferrer"};function u(h,b){const s=i("ExternalLinkIcon");return l(),t("div",null,[c,e("ul",null,[e("li",null,[a("视频讲解： "),e("ul",null,[e("li",null,[e("a",d,[a("尚硅谷2021版TypeScript教程（李立超老师TS新课）"),r(s)])])])])])])}const m=n(o,[["render",u],["__file","贪吃蛇练习.html.vue"]]);export{m as default};
