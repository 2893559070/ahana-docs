import{_ as a,p as e,q as s,a1 as n}from"./framework-5866ffd3.js";const i={},l=n(`<h1 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h1><h2 id="中文文件名乱码" tabindex="-1"><a class="header-anchor" href="#中文文件名乱码" aria-hidden="true">#</a> 中文文件名乱码</h2><p>有时候将文件传输到Linux 目录里中文文件名会出现乱码，这是因为你的中文文件格式和Linux 系统格式不一致导致的，下面就来解决这个问题。</p><ol><li>安装 convmv 文件转码工具</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  yum <span class="token function">install</span> convmv <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>转换要操作的文件名，将文件编码转换和Linux系统对应编码即可</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  convmv <span class="token parameter variable">-f</span> gbk <span class="token parameter variable">-t</span> utf-8 <span class="token parameter variable">-r</span> <span class="token parameter variable">--notest</span> /home/要操作的文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>以下为 convmv 常用参数:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token parameter variable">-f</span> enc     源编码
  <span class="token parameter variable">-t</span> enc     新编码
  <span class="token parameter variable">-r</span>         递归处理子文件夹
  <span class="token parameter variable">-i</span>         交互文向转换
  <span class="token parameter variable">--list</span>     显示所有可用编码
  <span class="token parameter variable">--nosmart</span>  如果是utf8文件，忽略
  <span class="token parameter variable">--notest</span>   直接转换不测试
  <span class="token parameter variable">--replace</span>  文件相同直接替换
  <span class="token parameter variable">--unescape</span> 可以做一下转义，比如把%20变成空格
  <span class="token parameter variable">--upper</span>    全部转换成大写
  <span class="token parameter variable">--lower</span>    全部转换成小定
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),r=[l];function t(c,d){return e(),s("div",null,r)}const v=a(i,[["render",t],["__file","Linux.html.vue"]]);export{v as default};
