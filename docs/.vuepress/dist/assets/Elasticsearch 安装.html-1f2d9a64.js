import{_ as t,r as c,o as r,c as o,d as a,b as s,e as l,a as e}from"./app-676abf65.js";const d={},p=e(`<h1 id="elasticsearch-安装" tabindex="-1"><a class="header-anchor" href="#elasticsearch-安装" aria-hidden="true">#</a> ElasticSearch 安装</h1><h2 id="_1-1-elasticsearch安装" tabindex="-1"><a class="header-anchor" href="#_1-1-elasticsearch安装" aria-hidden="true">#</a> 1.1 ElasticSearch安装</h2><p><strong>1、上传ElasticSearch安装包</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>alt+p <span class="token comment"># 打开sftp窗口</span>
<span class="token comment"># 上传es安装包</span>
put e:/software/elasticsearch-7.4.0-linux-x86_64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),u=["src"],h=e(`<p><strong>2、执行解压操作 ，如下图</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token comment"># 将elasticsearch-7.4.0-linux-x86_64.tar.gz解压到opt文件夹下. -C 大写</span>
 <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> elasticsearch-7.4.0-linux-x86_64.tar.gz  <span class="token parameter variable">-C</span> /opt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3、创建普通用户</strong></p><p>因为安全问题，Elasticsearch 不允许root用户直接运行，所以要创建新用户，在root用户中创建新用户,执行如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">useradd</span> ahana  <span class="token comment"># 新增ahana用户</span>
<span class="token function">passwd</span>  ahana  <span class="token comment"># 为ahana用户设置密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5、为新用户授权，如下图</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chown</span> <span class="token parameter variable">-R</span> ahana:ahana /opt/elasticsearch-7.4.0 <span class="token comment">#文件夹所有者</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),m=["src"],v=e(`<p>将 /opt/elasticsearch-7.4.0文件夹授权给ahana用户，由上图可见，我们的文件夹权限赋给了ahana</p><p><strong>6、修改elasticsearch.yml文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /opt/elasticsearch-7.4.0/config/elasticsearch.yml 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ======================== Elasticsearch Configuration =========================</span>
cluster.name: my-application
node.name: node-1
network.host: <span class="token number">0.0</span>.0.0
http.port: <span class="token number">9200</span>
cluster.initial_master_nodes: <span class="token punctuation">[</span><span class="token string">&quot;node-1&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cluster.name：配置elasticsearch的集群名称，默认是elasticsearch。建议修改成一个有意义的名称</p><p>node.name：节点名，elasticsearch会默认随机指定一个名字，建议指定一个有意义的名称，方便管理</p><p>network.host：设置为0.0.0.0允许外网访问</p><p>http.port：Elasticsearch的http访问端口</p><p>cluster.initial_master_nodes：初始化新的集群时需要此配置来选举master</p><p><strong>7、修改配置文件</strong></p><p>新创建的ahana用户最大可创建文件数太小，最大虚拟内存太小，切换到root用户，编辑下列配置文件， 添加类似如下内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换到root用户</span>
<span class="token function">su</span> root 

<span class="token comment">#1. ===最大可创建文件数太小=======</span>
<span class="token function">vim</span> /etc/security/limits.conf 
<span class="token comment"># 在文件末尾中增加下面内容</span>
ahana soft nofile <span class="token number">65536</span>
ahana hard nofile <span class="token number">65536</span>
<span class="token comment"># =====</span>
<span class="token function">vim</span> /etc/security/limits.d/20-nproc.conf
<span class="token comment"># 在文件末尾中增加下面内容</span>
ahana soft nofile <span class="token number">65536</span>
ahana hard nofile <span class="token number">65536</span>
*  hard    nproc     <span class="token number">4096</span>
<span class="token comment"># 注：* 代表Linux所有用户名称 </span>

<span class="token comment">#2. ===最大虚拟内存太小=======</span>
<span class="token function">vim</span> /etc/sysctl.conf
<span class="token comment"># 在文件中增加下面内容</span>
<span class="token assign-left variable">vm.max_map_count</span><span class="token operator">=</span><span class="token number">655360</span>
<span class="token comment"># 重新加载，输入下面命令：</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-p</span>




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>8、启动elasticsearch</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">su</span> ahana  <span class="token comment"># 切换到ahana用户启动</span>
<span class="token builtin class-name">cd</span> /opt/elasticsearch-7.4.0/bin
./elasticsearch <span class="token comment">#启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),b=["src"],g=e(`<p>通过上图我们可以看到elasticsearch已经成功启动</p><h2 id="_1-2-访问elasticsearch" tabindex="-1"><a class="header-anchor" href="#_1-2-访问elasticsearch" aria-hidden="true">#</a> <strong>1.2 访问elasticsearch</strong></h2><p><strong>1、在访问elasticsearch前，请确保防火墙是关闭的，执行命令：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#暂时关闭防火墙</span>
systemctl  stop  firewalld

<span class="token comment"># 或者</span>

<span class="token comment">#永久设置防火墙状态</span>
systemctl <span class="token builtin class-name">enable</span> firewalld.service  <span class="token comment">#打开防火墙永久性生效，重启后不会复原 </span>
systemctl disable firewalld.service <span class="token comment">#关闭防火墙，永久性生效，重启后不会复原 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),k={href:"http://192.168.149.135:9200/",target:"_blank",rel:"noopener noreferrer"},_=["src"],f=e(`<p>此时elasticsearch已成功启动：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>重点几个关注下即可:
number&quot; : &quot;7.4.0&quot;   表示elasticsearch版本
lucene_version&quot; : &quot;8.2.0&quot;  表示lucene版本
name ： 默认启动的时候指定了 ES 实例名称
cluster_name ： 默认名为 elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-elasticsearch辅助插件安装" tabindex="-1"><a class="header-anchor" href="#_2-elasticsearch辅助插件安装" aria-hidden="true">#</a> 2 Elasticsearch辅助插件安装</h1><h2 id="_2-1-postman安装" tabindex="-1"><a class="header-anchor" href="#_2-1-postman安装" aria-hidden="true">#</a> 2.1 Postman安装</h2><p><strong>1、什么是Postman</strong></p><p>Postman是一个http模拟请求的工具。</p><p>官网介绍：“Modern software is built on APIs，Postman helps you develop APIs faster”</p><p>看得出来，它是一个专门测试 API 的工具，Postman 提供功能强大的 Web API 和 HTTP 请求的调试，它能够发送任何类型的HTTP 请求 (GET, POST, PUT, DELETE…)，并且能附带任何数量的参数和 Headers。不仅如此，它还提供测试数据和环境配置数据的导入导出。</p><p><a href="www.getpostman.com">进入官网</a>，下载</p><h2 id="_2-2-kibana安装" tabindex="-1"><a class="header-anchor" href="#_2-2-kibana安装" aria-hidden="true">#</a> 2.2 Kibana安装</h2><p><strong>1、什么是Kibana</strong></p><p>Kibana是一个针对Elasticsearch的开源分析及可视化平台，用来搜索、查看交互存储在Elasticsearch索引中的数据。使用Kibana，可以通过各种图表进行高级数据分析及展示。</p><p>Kibana让海量数据更容易理解。它操作简单，基于浏览器的用户界面可以快速创建仪表板（dashboard）实时显示Elasticsearch查询动态。</p><p><strong>2、上传kibana</strong></p><p>CRT中克隆一个窗口，上传Kibana</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>put E:<span class="token punctuation">\\</span>software<span class="token punctuation">\\</span>kibana-7.4.0-linux-x86_64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2、解压kibana</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xzf</span> kibana-7.4.0-linux-x86_64.tar.gz <span class="token parameter variable">-C</span> /opt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解压到当前目录（/opt）下</p><p><strong>3、修改kibana配置</strong></p><p><strong>ES与Java是强依赖关系 推荐使用内部的Java</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /opt/kibana-7.4.0-linux-x86_64/config/kibana.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server.port: <span class="token number">5601</span>
server.host: <span class="token string">&quot;0.0.0.0&quot;</span>
server.name: <span class="token string">&quot;kibana-itcast&quot;</span>
elasticsearch.hosts: <span class="token punctuation">[</span><span class="token string">&quot;http://127.0.0.1:9200&quot;</span><span class="token punctuation">]</span>
elasticsearch.requestTimeout: <span class="token number">99999</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>server.port：http访问端口</p><p>server.host：ip地址，0.0.0.0表示可远程访问</p><p>server.name：kibana服务名</p><p>elasticsearch.hosts：elasticsearch地址</p><p>elasticsearch.requestTimeout：请求elasticsearch超时时间，默认为30000，此处可根据情况设置</p><p><strong>4、启动kibana</strong></p><p>由于kibana不建议使用root用户启动，如果用root启动，需要加--allow-root参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换到kibana的bin目录</span>
<span class="token builtin class-name">cd</span> /opt/kibana-7.4.0-linux-x86_64/bin
<span class="token comment"># 启动</span>
./kibana --allow-root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),x=["src"],E=s("p",null,"启动成功。",-1),w=s("p",null,[s("strong",null,"5、访问kibana")],-1),S={href:"http://192.168.149.135:5601/",target:"_blank",rel:"noopener noreferrer"},q=s("div",{class:"language-text line-numbers-mode","data-ext":"text"},[s("pre",{class:"language-text"},[s("code",null,`http://192.168.149.135:5601/
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),T=["src"],B=e('<p>看到这个界面，说明Kibanan已成功安装。</p><p><code>Discover</code>：可视化查询分析器 <code>Visualize</code>：统计分析图表 <code>Dashboard</code>：自定义主面板（添加图表） <code>Timelion</code>：Timelion是一个kibana时间序列展示组件（暂时不用） <code>Dev Tools</code>：Console控制台（同CURL/POSTER，操作ES代码工具，代码提示，很方便） <code>Management</code>：管理索引库(index)、已保存的搜索和可视化结果(save objects)、设置 kibana 服务器属性。</p><h2 id="_2-3-head安装" tabindex="-1"><a class="header-anchor" href="#_2-3-head安装" aria-hidden="true">#</a> 2.3 head安装</h2><blockquote><p>Tips: 课后扩展内容</p></blockquote><p><strong>head简介</strong></p><p>ead插件是ES的一个可视化管理插件，用来监视ES的状态，并通过head客户端和ES服务进行交互，比如创建映射、创建索引等。</p>',6),P={href:"http://10.82.25.183:9100/",target:"_blank",rel:"noopener noreferrer"},$=s("h3",{id:"_2-3-1-node安装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-3-1-node安装","aria-hidden":"true"},"#"),a(" 2.3.1 Node安装")],-1),N=s("ol",null,[s("li",null,"什么是Node")],-1),y={href:"https://developers.google.com/v8/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},C=e(`<ol start="2"><li>下载Node</li></ol><p>上一节我们已经安装好了Elasticsearch，接下来我们来安装head插件，由于elasticsearch-head插件是由nodejs语言编写，所以安装elasticsearch-head前需要先安装nodejs。 首先，执行以下命令安装nodejs和grunt</p><p>打开虚拟机，执行wget命令下载Node，如下图：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://nodejs.org/dist/v10.15.2/node-v10.15.2-linux-x64.tar.xz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),z=["src"],I=e(`<p>3）解压Node包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> xvf node-v10.15.2-linux-x64.tar.xz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),H=["src"],K=e(`<p>4）设置软连接</p><p>解压文件的 bin 目录底下包含了 node、npm 等命令，我们可以使用 ln 命令来设置软连接：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">ln</span> <span class="token parameter variable">-s</span> bin/npm /usr/local/bin/

 <span class="token function">ln</span> <span class="token parameter variable">-s</span> bin/node /usr/local/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在/etc/profile中配置好path环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> ~/.bash_profile

<span class="token builtin class-name">export</span> <span class="token assign-left variable">NODE_HOME</span><span class="token operator">=</span>/opt/nodejs/node-v10.15.2-linux-x64

<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$NODE_HOME</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存退出，使文件生效</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看node安装版本，执行 node -v 验证安装如下图：</p>`,8),O=["src"],A=e(`<h3 id="_2-3-2-grunt安装" tabindex="-1"><a class="header-anchor" href="#_2-3-2-grunt安装" aria-hidden="true">#</a> <strong>2.3.2 grunt安装</strong></h3><p>安装grunt（运行在Node.js上面的任务管理器（task runner）），为了获得Grunt的更多产品特性，需要全局安装Grunt&#39;s 命令行接口（CLI），使用npm进行安装，如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> grunt-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),D=["src"],L=s("p",null,"查看grunt版本",-1),V=["src"],J=e(`<p>输出grunt版本信息，表示安装成功。</p><h3 id="_2-3-3-head安装" tabindex="-1"><a class="header-anchor" href="#_2-3-3-head安装" aria-hidden="true">#</a> <strong>2.3.3 head安装</strong></h3><ol><li>执行命令安装git</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> yum <span class="token function">install</span> <span class="token function">git</span> <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),M=["src"],R=e(`<ol start="2"><li>切换到/opt目录下,执行下面的克隆命令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone git://github.com/mobz/elasticsearch-head.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),G=["src"],U=e(`<ol start="3"><li>进入到elasticsearch-head目录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> elasticsearch-head
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>运行</li></ol><p>在运行之前我们需要修改下elasticsearch.yml，因为ES默认不开启跨域访问，需要添加以下配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#开启cors跨域访问支持，默认为false </span>
http.cors.enabled: <span class="token boolean">true</span>
<span class="token comment">#跨域访问允许的域名地址，(允许所有域名)以上使用正则</span>
http.cors.allow-origin: <span class="token string">&quot;*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后开始执行运行命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),W=["src"],F=s("ol",{start:"5"},[s("li",null,"访问head")],-1),Q=s("p",null,"浏览器输入ip:port:9100，如下图",-1),X=["src"],Y=s("p",null,"看到这个界面说明我们的head插件成功安装并且成功连接Elasticsearch。",-1);function Z(n,ss){const i=c("ExternalLinkIcon");return r(),o("div",null,[p,a(),s("img",{src:n.$withBase("/ElasticSearch/img/1574607430115.png"),alt:"foo"},null,8,u),h,a(),s("img",{src:n.$withBase("/ElasticSearch/img/1574607864042.png"),alt:"foo"},null,8,m),v,a(),s("img",{src:n.$withBase("/ElasticSearch/img/1574609255103.png"),alt:"foo"},null,8,b),g,s("p",null,[a("浏览器输入"),s("a",k,[a("http://192.168.149.135:9200/"),l(i)]),a("，如下图")]),s("img",{src:n.$withBase("/ElasticSearch/img/1574609539550.png"),alt:"foo"},null,8,_),f,a(),s("img",{src:n.$withBase("/ElasticSearch/img/1574610511959.png"),alt:"foo"},null,8,x),E,w,s("p",null,[a("1.浏览器输入"),s("a",S,[a("http://192.168.149.135:5601/"),l(i)]),a("，如下图：")]),q,a(),s("img",{src:n.$withBase("/ElasticSearch/img/1574610669598.png"),alt:"foo"},null,8,T),B,s("p",null,[a("在登陆和访问head插件地址和ElasticSearch前需要事先在服务器上安装和配置好ElasticSearch以及head插件。安装完后，默认head插件的web端口为9100，ElasticSearch服务的端口为9200，使用浏览器访问head地址，如"),s("a",P,[a("http://IP地址:9100/"),l(i)]),a("，推荐使用Chrome浏览器，head插件对Chrome浏览器兼容更佳。进入head页面后将ElasticSearch连接输入框中填写正确的ElasticSearch服务地址，就可以监控ElasticSearch运行信息")]),$,N,s("p",null,[a("简单的说 Node.js 就是运行在服务端的 JavaScript。Node.js 是一个基于 "),s("a",y,[a("Chrome V8"),l(i)]),a(" 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。Node.js 的包管理器 "),s("a",j,[a("npm"),l(i)]),a("，是全球最大的开源库生态系统。")]),C,a(),s("img",{src:n.$withBase("/ElasticSearch/img/1571160484991.png"),alt:"foo"},null,8,z),I,a(),s("img",{src:n.$withBase("/ElasticSearch/img/1571160606899.png"),alt:"foo"},null,8,H),K,s("img",{src:n.$withBase("/ElasticSearch/img/1571160954958.png"),alt:"foo"},null,8,O),A,a(),s("img",{src:n.$withBase("/ElasticSearch/img/1571161497433.png"),alt:"foo"},null,8,D),L,s("img",{src:n.$withBase("/ElasticSearch/img/1571161600969.png"),alt:"foo"},null,8,V),J,a(),s("img",{src:n.$withBase("/ElasticSearch/img/1571161083235.png"),alt:"foo"},null,8,M),R,a(),s("img",{src:n.$withBase("/ElasticSearch/img/1571193736229.png"),alt:"foo"},null,8,G),U,a(),s("img",{src:n.$withBase("/ElasticSearch/img/1571163304853.png"),alt:"foo"},null,8,W),F,Q,s("img",{src:n.$withBase("/ElasticSearch/img/1571163462191.png"),alt:"foo"},null,8,X),Y])}const ns=t(d,[["render",Z],["__file","Elasticsearch 安装.html.vue"]]);export{ns as default};
