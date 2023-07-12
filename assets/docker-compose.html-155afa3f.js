import{_ as s,o as n,c as e,a}from"./app-9d6e6088.js";const i={},l=a(`<h1 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> Docker Compose</h1><h2 id="一、安装docker-compose" tabindex="-1"><a class="header-anchor" href="#一、安装docker-compose" aria-hidden="true">#</a> 一、安装Docker Compose</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Compose目前已经完全支持Linux、Mac OS和Windows，在我们安装Compose之前，需要先安装Docker。下面我 们以编译好的二进制包方式安装在Linux系统中。</span>
<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/docker/compose/releases/download/1.22.0/docker-compose-<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">\`</span></span>-<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">\`</span></span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose
<span class="token comment"># 设置文件可执行权限</span>
<span class="token function">chmod</span> +x /usr/local/bin/docker-compose
<span class="token comment"># 查看版本信息 </span>
<span class="token function">docker-compose</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、卸载docker-compose" tabindex="-1"><a class="header-anchor" href="#二、卸载docker-compose" aria-hidden="true">#</a> 二、卸载Docker Compose</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 二进制包方式安装的，删除二进制文件即可</span>
<span class="token function">rm</span> /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、-使用docker-compose编排nginx-springboot项目" tabindex="-1"><a class="header-anchor" href="#三、-使用docker-compose编排nginx-springboot项目" aria-hidden="true">#</a> 三、 使用docker compose编排nginx+springboot项目</h2><ol><li>创建docker-compose目录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> ~/docker-compose
<span class="token builtin class-name">cd</span> ~/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>编写 docker-compose.yml 文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&#39;3&#39;</span>
services:
  nginx:
   image: nginx
   ports:
    - <span class="token number">80</span>:80
   links:
    - app
   volumes:
    - ./nginx/conf.d:/etc/nginx/conf.d
  app:
    image: app <span class="token comment"># 注意版本 最新的可以不加 有版本序列号的一定要加</span>
    expose:
      - <span class="token string">&quot;8080&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>创建./nginx/conf.d目录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ./nginx/conf.d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>在./nginx/conf.d目录下 编写 ceshi.conf 文件</li></ol><ul><li>注意 .conf 文件 的名字千万不要用驼峰 不然会报错</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    access_log off<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        proxy_pass http://app:8080<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>在~/docker-compose 目录下 使用docker-compose 启动容器</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>测试访问</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http://192.168.149.135/hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),o=[l];function c(d,r){return n(),e("div",null,o)}const t=s(i,[["render",c],["__file","docker-compose.html.vue"]]);export{t as default};
