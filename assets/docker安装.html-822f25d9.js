import{_ as e,o as n,c as a,a as s}from"./app-fdb0ca41.js";const c={},i=s(`<h1 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装Docker</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1、yum 包更新到最新 </span>
yum update
<span class="token comment"># 2、安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的 </span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2
<span class="token comment"># 3、 设置yum源</span>
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
<span class="token comment"># 4、 安装docker，出现输入的界面都按 y </span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce
<span class="token comment"># 5、 查看docker版本，验证是否验证成功</span>
<span class="token function">docker</span> <span class="token parameter variable">-v</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[i];function l(r,o){return n(),a("div",null,d)}const m=e(c,[["render",l],["__file","docker安装.html.vue"]]);export{m as default};
