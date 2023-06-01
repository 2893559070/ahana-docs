import{_ as n,o as s,c as a,a as e}from"./app-676abf65.js";const i={},c=e(`<h1 id="docker-私有仓库" tabindex="-1"><a class="header-anchor" href="#docker-私有仓库" aria-hidden="true">#</a> Docker 私有仓库</h1><h2 id="一、私有仓库搭建" tabindex="-1"><a class="header-anchor" href="#一、私有仓库搭建" aria-hidden="true">#</a> 一、私有仓库搭建</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1、拉取私有仓库镜像 </span>
<span class="token function">docker</span> pull registry
<span class="token comment"># 2、启动私有仓库容器 </span>
<span class="token function">docker</span> run <span class="token parameter variable">-id</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>registry <span class="token parameter variable">-p</span> <span class="token number">5000</span>:5000 registry
<span class="token comment"># 3、打开浏览器 输入地址http://私有仓库服务器ip:5000/v2/_catalog，看到{&quot;repositories&quot;:[]} 表示私有仓库 搭建成功</span>
<span class="token comment"># 4、修改daemon.json   </span>
<span class="token function">vim</span> /etc/docker/daemon.json    
<span class="token comment"># 在上述文件中添加一个key，保存退出。此步用于让 docker 信任私有仓库地址；注意将私有仓库服务器ip修改为自己私有仓库服务器真实ip </span>
<span class="token punctuation">{</span><span class="token string">&quot;insecure-registries&quot;</span>:<span class="token punctuation">[</span><span class="token string">&quot;私有仓库服务器ip:5000&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span> 
<span class="token comment"># 5、重启docker 服务 </span>
systemctl restart <span class="token function">docker</span>
<span class="token function">docker</span> start registry

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、将镜像上传至私有仓库" tabindex="-1"><a class="header-anchor" href="#二、将镜像上传至私有仓库" aria-hidden="true">#</a> 二、将镜像上传至私有仓库</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1、标记镜像为私有仓库的镜像     </span>
<span class="token function">docker</span> tag centos:7 私有仓库服务器IP:5000/centos:7
 
<span class="token comment"># 2、上传标记的镜像     </span>
<span class="token function">docker</span> push 私有仓库服务器IP:5000/centos:7

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、-从私有仓库拉取镜像" tabindex="-1"><a class="header-anchor" href="#三、-从私有仓库拉取镜像" aria-hidden="true">#</a> 三、 从私有仓库拉取镜像</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#拉取镜像 </span>
<span class="token function">docker</span> pull 私有仓库服务器ip:5000/centos:7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[c];function r(d,l){return s(),a("div",null,t)}const p=n(i,[["render",r],["__file","docker-私有仓库.html.vue"]]);export{p as default};
