import{_ as e,o as i,c as l,b as a,a as n}from"./app-fdb0ca41.js";const c={},t=n(`<h1 id="docker-应用部署" tabindex="-1"><a class="header-anchor" href="#docker-应用部署" aria-hidden="true">#</a> Docker 应用部署</h1><h2 id="一、部署mysql" tabindex="-1"><a class="header-anchor" href="#一、部署mysql" aria-hidden="true">#</a> 一、部署MySQL</h2><ol><li>搜索mysql镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> search mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>拉取mysql镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql:5.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>创建容器，设置端口映射、目录映射</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在/root目录下创建mysql目录用于存储mysql数据信息</span>
<span class="token function">mkdir</span> ~/mysql
<span class="token builtin class-name">cd</span> ~/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-id</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">3307</span>:3306 <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span><span class="token operator">=</span>c_mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> <span class="token environment constant">$PWD</span>/conf:/etc/mysql/conf.d <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> <span class="token environment constant">$PWD</span>/logs:/logs <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> <span class="token environment constant">$PWD</span>/data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
mysql:5.6

<span class="token comment"># $PWD 相当于 pwd， -e ENV 环境的意思</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>参数说明： <ul><li><strong>-p 3307:3306</strong>：将容器的 3306 端口映射到宿主机的 3307 端口。</li><li><strong>-v $PWD/conf:/etc/mysql/conf.d</strong>：将主机当前目录下的 conf/my.cnf 挂载到容器的 /etc/mysql/my.cnf。配置目录</li><li><strong>-v $PWD/logs:/logs</strong>：将主机当前目录下的 logs 目录挂载到容器的 /logs。日志目录</li><li><strong>-v $PWD/data:/var/lib/mysql</strong> ：将主机当前目录下的data目录挂载到容器的 /var/lib/mysql 。数据目录</li><li>**-e MYSQL_ROOT_PASSWORD=123456：**初始化 root 用户的密码。</li></ul></li></ul><ol start="4"><li>进入容器，操作mysql</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> c_mysql /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>使用外部机器连接容器中的mysql</li></ol>`,13),o=["src"],r=n(`<h3 id="二、部署tomcat" tabindex="-1"><a class="header-anchor" href="#二、部署tomcat" aria-hidden="true">#</a> 二、部署Tomcat</h3><ol><li>搜索tomcat镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> search tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>拉取tomcat镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>创建容器，设置端口映射、目录映射</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在/root目录下创建tomcat目录用于存储tomcat数据信息</span>
<span class="token function">mkdir</span> ~/tomcat
<span class="token builtin class-name">cd</span> ~/tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-id</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>c_tomcat <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> <span class="token environment constant">$PWD</span>:/usr/local/tomcat/webapps <span class="token punctuation">\\</span>
tomcat 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>参数说明： <ul><li><p>**-p 8080:8080：**将容器的8080端口映射到主机的8080端口</p><p>**-v $PWD:/usr/local/tomcat/webapps：**将主机中当前目录挂载到容器的webapps</p></li></ul></li></ul><ol start="4"><li>使用外部机器访问tomcat</li></ol>`,10),d=["src"],p=n(`<h3 id="三、部署nginx" tabindex="-1"><a class="header-anchor" href="#三、部署nginx" aria-hidden="true">#</a> 三、部署Nginx</h3><ol><li>搜索nginx镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> search nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>拉取nginx镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>创建容器，设置端口映射、目录映射</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在/root目录下创建nginx目录用于存储nginx数据信息</span>
<span class="token function">mkdir</span> ~/nginx
<span class="token builtin class-name">cd</span> ~/nginx
<span class="token function">mkdir</span> conf
<span class="token builtin class-name">cd</span> conf
<span class="token comment"># 在~/nginx/conf/下创建nginx.conf文件,粘贴下面内容</span>
<span class="token function">vim</span> nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
user  nginx<span class="token punctuation">;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

error_log  /var/log/nginx/error.log warn<span class="token punctuation">;</span>
pid        /var/run/nginx.pid<span class="token punctuation">;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


http <span class="token punctuation">{</span>
    include       /etc/nginx/mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>

    log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

    access_log  /var/log/nginx/access.log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>

    include /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-id</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>c_nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> <span class="token environment constant">$PWD</span>/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> <span class="token environment constant">$PWD</span>/logs:/var/log/nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> <span class="token environment constant">$PWD</span>/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>参数说明： <ul><li><strong>-p 80:80</strong>：将容器的 80端口映射到宿主机的 80 端口。</li><li><strong>-v $PWD/conf/nginx.conf:/etc/nginx/nginx.conf</strong>：将主机当前目录下的 /conf/nginx.conf 挂载到容器的 :/etc/nginx/nginx.conf。配置目录</li><li><strong>-v $PWD/logs:/var/log/nginx</strong>：将主机当前目录下的 logs 目录挂载到容器的/var/log/nginx。日志目录</li></ul></li></ul><ol start="4"><li>使用外部机器访问nginx</li></ol>`,11),u=["src"],v=n(`<h3 id="四、部署redis" tabindex="-1"><a class="header-anchor" href="#四、部署redis" aria-hidden="true">#</a> 四、部署Redis</h3><ol><li>搜索redis镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> search redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>拉取redis镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull redis:5.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>创建容器，设置端口映射</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-id</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>c_redis <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 redis:5.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>使用外部机器连接redis</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./redis-cli.exe <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.149.135 <span class="token parameter variable">-p</span> <span class="token number">6379</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9);function m(s,b){return i(),l("div",null,[t,a("img",{src:s.$withBase("/docker/1573636765632.png"),alt:"foo"},null,8,o),r,a("img",{src:s.$withBase("/docker/1573649804623.png"),alt:"foo"},null,8,d),p,a("img",{src:s.$withBase("/docker/1573652396669.png"),alt:"foo"},null,8,u),v])}const k=e(c,[["render",m],["__file","docker应用部署.html.vue"]]);export{k as default};
