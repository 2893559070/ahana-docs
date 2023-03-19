import{_ as t,M as r,p as o,q as p,R as s,t as n,N as i,a1 as e}from"./framework-5866ffd3.js";const c={},d=s("h1",{id:"安装mysql",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装mysql","aria-hidden":"true"},"#"),n(" 安装mysql")],-1),m=s("p",null,"部署MySQL数据库有多种部署方式，常用的部署方式就有三种：yum安装、rpm安装以及编译安装。每一种安装方式都有自己的优势，那么企业当中通常情况下采用的是rpm和二进制安装的方式。",-1),u={href:"https://downloads.mysql.com/archives/community/",target:"_blank",rel:"noopener noreferrer"},v=e(`<h2 id="yum安装" tabindex="-1"><a class="header-anchor" href="#yum安装" aria-hidden="true">#</a> yum安装</h2><p>从CentOS 7.0发布以来，yum源中开始使用Mariadb来代替MySQL的安装(这里什么是mariadb,和mysql有什么区别，有兴趣的小伙伴可以自行查阅）。即使你输入的是yum install -y mysql , 显示的也是Mariadb的安装内容。如果想安装Mysql就必须使用Mysql官方的yum源。</p><p><strong>1. 编写yum源配置文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#配置好yum源，包括epel源</span>
 <span class="token number">1</span>. <span class="token function">curl</span> <span class="token parameter variable">-o</span> /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
 <span class="token number">2</span>. <span class="token function">wget</span> <span class="token parameter variable">-O</span> /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo
 <span class="token number">3</span>. yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">vim</span> <span class="token function">wget</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),b={href:"https://dev.mysql.com/downloads/repo/yum/",target:"_blank",rel:"noopener noreferrer"},k=["src"],g=["src"],y=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://dev.mysql.com/get/mysql80-community-release-el7-4.noarch.rpm <span class="token comment">## 复制下来的链接</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),h=["src"],f=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> mysql80-community-release-el7-4.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2. 生成yum源缓存</strong> 每次编写了，都需要生成yum缓存，以免安装错误。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code> 1. yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3. 检查安装的yum源是否存在</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token number">1</span>. yum repolist enabled <span class="token operator">|</span> <span class="token function">grep</span> mysql
 
<span class="token comment"># 选择默认安装的版本  默认的是8.0 版本</span>
<span class="token comment"># 安装 YUM 管理工具包，此包提供了 yum-config-manager 命令工具</span>
 <span class="token number">1</span>. yum <span class="token parameter variable">-y</span> <span class="token function">install</span> yum-utils
 <span class="token number">2</span>. yum-config-manager <span class="token parameter variable">--disable</span> mysql80-community 
 <span class="token number">3</span>. yum-config-manager <span class="token parameter variable">--enable</span> mysql57-community
 <span class="token number">4</span>. yum repolist enabled <span class="token operator">|</span> <span class="token function">grep</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),q=["src"],_=e(`<p><strong>4. 安装MySQL服务</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> yum <span class="token function">install</span> <span class="token parameter variable">-y</span>  mysql-community-server  <span class="token comment"># 然后等待安装即可</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>5. 启动MySQL服务</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动mysqld 服务端</span>
<span class="token number">1</span>. systemctl start mysqld
<span class="token comment"># 查看是否启动</span>
<span class="token number">2</span>. systemctl status mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),w=["src"],S=e(`<p><strong>6. 初始化</strong> MySQL服务器初始化（从MySQL 5.7开始）</p><p>在 MySQL 服务器初始启动时，如果服务器的数据目录为空，则会发生以下情况：</p><ul><li>MySQL 服务器已初始化。</li><li>在数据目录中生成SSL证书和密钥文件。</li><li>安装并启用该 validate_password 插件。</li><li>将创建一个超级用户 帐户’root’@‘localhost’。并会设置超级用户的密码，将其存储在错误日志文件/var/log/mysqld.log中。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token string">&#39;temporary password&#39;</span> /var/log/mysqld.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),M=["src"],x=e(`<p><strong>7. 连接mysql修改默认密码</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> -p<span class="token string">&#39;goUaahghs8?r&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 出现以下错误的原因是需要修改初始化密码</span>
<span class="token number">1</span>. show databases<span class="token punctuation">;</span>
ERROR <span class="token number">1820</span> <span class="token punctuation">(</span>HY000<span class="token punctuation">)</span>: You must reset your password using ALTER <span class="token environment constant">USER</span> statement before executing this statement.

<span class="token number">2</span>. alter user   root@localhost   identified  by  <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
ERROR <span class="token number">1819</span> <span class="token punctuation">(</span>HY000<span class="token punctuation">)</span>: Your password does not satisfy the current policy requirements

<span class="token comment">#太过简单的密码会失败，因为不满足密码复杂度的要求</span>

<span class="token comment"># 修改密码</span>
<span class="token number">1</span>. alter user   root@localhost   identified  by  <span class="token string">&#39;MySQL@666&#39;</span><span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
<span class="token comment"># 刷新权限</span>
<span class="token number">2</span>.  FLUSH PRIVILEGES<span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

<span class="token comment"># 要设置比较简单的密码就需要取消密码复杂度，编辑 /etc/my.cnf配置文件, 在 [mysqld]配置块儿中添加如下内容(企业生成环境不建议使用这种配置)</span>
plugin-load<span class="token operator">=</span>validate_password.so 
validate-password<span class="token operator">=</span>OFF

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>8. 远程连接</strong> 远程登录还需要授权远程登录 Mysql默认不允许远程登录，我们需要设置关闭selinux或者防火墙，不关防火墙就开放3306端口；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 允许本地用户链接</span>
<span class="token number">1</span>. grant all privileges on *.* to root@localhost identified by <span class="token string">&#39;密码&#39;</span><span class="token punctuation">;</span>
 Query OK, <span class="token number">0</span> rows affected, <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

<span class="token comment"># 允许任意IP连接</span>
<span class="token number">2</span>. grant all privileges on *.* to root@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;密码&#39;</span><span class="token punctuation">;</span>
 Query OK, <span class="token number">0</span> rows affected, <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

 <span class="token comment"># 以上如果报错可以试下</span>
 use mysql<span class="token punctuation">;</span>
 <span class="token keyword">select</span> user,host from user<span class="token punctuation">;</span>
 update user <span class="token builtin class-name">set</span> <span class="token assign-left variable">host</span><span class="token operator">=</span><span class="token string">&#39;%&#39;</span> where user <span class="token operator">=</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>
 <span class="token keyword">select</span> user,host from user<span class="token punctuation">;</span>
 flush privileges<span class="token punctuation">;</span>

 <span class="token comment"># 添加开放3306端口的iptables规则</span>
 iptables <span class="token parameter variable">-t</span> filter <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">3306</span> <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>9. 卸载已经安装的MySQL</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//rpm包安装方式卸载
查包名：rpm -qa<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-i</span> mysql
删除命令：rpm <span class="token parameter variable">-e</span> –nodeps 包名
 
//yum安装方式下载
<span class="token number">1</span>.查看已安装的mysql
命令：rpm <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> mysql
<span class="token number">2</span>.卸载mysql
命令：yum remove mysql-community-server-5.6.36-2.el7.x86_64
查看mysql的其它依赖：rpm <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> mysql
 
//卸载依赖
yum remove mysql-libs
yum remove mysql-server
yum remove perl-DBD-MySQL
yum remove mysql

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function L(a,Q){const l=r("ExternalLinkIcon");return o(),p("div",null,[d,m,s("p",null,[s("a",u,[n("downloads.mysql"),i(l)])]),v,s("ul",null,[s("li",null,[s("p",null,[n("使用官方yum仓库 "),s("a",b,[n("官方yum仓库"),i(l)])]),s("img",{src:a.$withBase("/mysql/01.png"),alt:"foo"},null,8,k),s("img",{src:a.$withBase("/mysql/02.png"),alt:"foo"},null,8,g)])]),y,n(),s("img",{src:a.$withBase("/mysql/03.png"),alt:"foo"},null,8,h),f,n(),s("img",{src:a.$withBase("/mysql/04.png"),alt:"foo"},null,8,q),_,n(),s("img",{src:a.$withBase("/mysql/05.png"),alt:"foo"},null,8,w),S,n(),s("img",{src:a.$withBase("/mysql/06.png"),alt:"foo"},null,8,M),x])}const E=t(c,[["render",L],["__file","安装mysql.html.vue"]]);export{E as default};
