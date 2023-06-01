import{_ as i,r as c,o,c as p,b as n,d as s,e as l,a as e}from"./app-676abf65.js";const u={},r=n("h1",{id:"elasticsearch-集群",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#elasticsearch-集群","aria-hidden":"true"},"#"),s(" ElasticSearch 集群")],-1),d=n("h2",{id:"_1-1-搭建集群",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-1-搭建集群","aria-hidden":"true"},"#"),s(" 1.1 搭建集群")],-1),k=n("p",null,"Elasticsearch如果做集群的话Master节点至少三台服务器或者三个Master实例加入相同集群，三个Master节点最多只能故障一台Master节点，如果故障两个Master节点，Elasticsearch将无法组成集群.会报错，Kibana也无法启动，因为Kibana无法获取集群中的节点信息。",-1),m=n("p",null,"由于，我们使用只有一台虚拟机，所以我们在虚拟机中安装三个ES实例，搭建伪集群，而ES启动比较耗内存，所以先设置虚拟机的内存3G和CPU个数4个",-1),v=["src"],h=n("h4",{id:"_1-1-1-整体步骤",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-1-1-整体步骤","aria-hidden":"true"},"#"),s(" 1.1.1 整体步骤")],-1),b=n("p",null,"步骤如下：",-1),g=n("li",null,[n("p",null,"拷贝opt目录下的elasticsearch-7.4.0安装包3个，分别命名："),n("p",null,"elasticsearch-7.4.0-ahan1"),n("p",null,"elasticsearch-7.4.0-ahan2"),n("p",null,"elasticsearch-7.4.0-ahan3")],-1),_=n("li",null,[n("p",null,"然后修改elasticsearch.yml文件件。")],-1),y=n("li",null,[n("p",null,"然后启动启动ahan1、ahan2、ahan3三个节点。")],-1),q={href:"http://192.168.149.135:9200/_cat/health?v",target:"_blank",rel:"noopener noreferrer"},f=e(`<p><strong>在此，需要我们特别注意的是，像本文这样单服务器多节点（ 3 个节点）的情况，仅供测试使用</strong>，集群环境如下：</p><table><thead><tr><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td>cluster name</td><td>node name</td><td>IP Addr</td><td>http端口 / 通信端口</td></tr><tr><td>ahan-es</td><td>ahan1</td><td>192.168.149.135</td><td>9201 / 9700</td></tr><tr><td>ahan-es</td><td>ahan2</td><td>192.168.149.135</td><td>9202 / 9800</td></tr><tr><td>ahan-es</td><td>ahan3</td><td>192.168.149.135</td><td>9203 / 9900</td></tr></tbody></table><h4 id="_1-1-2-拷贝副本" tabindex="-1"><a class="header-anchor" href="#_1-1-2-拷贝副本" aria-hidden="true">#</a> 1.1.2 拷贝副本</h4><p>拷贝opt目录下的elasticsearch-7.4.0安装包3个，打开虚拟机到opt目录</p><p>执行 拷贝三份</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt
<span class="token function">cp</span> <span class="token parameter variable">-r</span>  elasticsearch-7.4.0   elasticsearch-7.4.0-ahan1
<span class="token function">cp</span> <span class="token parameter variable">-r</span>  elasticsearch-7.4.0   elasticsearch-7.4.0-ahan2
<span class="token function">cp</span> <span class="token parameter variable">-r</span>  elasticsearch-7.4.0   elasticsearch-7.4.0-ahan3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1-3-修改elasticsearch-yml配置文件" tabindex="-1"><a class="header-anchor" href="#_1-1-3-修改elasticsearch-yml配置文件" aria-hidden="true">#</a> 1.1. 3 修改elasticsearch.yml配置文件</h4><p><strong>1)、创建日志目录</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt
<span class="token function">mkdir</span> logs
<span class="token function">mkdir</span>  data
<span class="token comment"># 授权给ahana用户</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> ahana:ahana ./logs
<span class="token function">chown</span> <span class="token parameter variable">-R</span> ahana:ahana ./data

<span class="token function">chown</span> <span class="token parameter variable">-R</span> ahana:ahana ./elasticsearch-7.4.0-ahan1
<span class="token function">chown</span> <span class="token parameter variable">-R</span> ahana:ahana ./elasticsearch-7.4.0-ahan2
<span class="token function">chown</span> <span class="token parameter variable">-R</span> ahana:ahana ./elasticsearch-7.4.0-ahan3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开elasticsearch.yml配置，分别配置下面三个节点的配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /opt/elasticsearch-7.4.0-ahan1/config/elasticsearch.yml 
<span class="token function">vim</span> /opt/elasticsearch-7.4.0-ahan2/config/elasticsearch.yml 
<span class="token function">vim</span> /opt/elasticsearch-7.4.0-ahan3/config/elasticsearch.yml 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2)、下面是elasticsearch-7.4.0-ahan1配置文件</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> ahan<span class="token punctuation">-</span>es
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> ahan<span class="token punctuation">-</span><span class="token number">1</span> 
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">node.max_local_storage_nodes</span><span class="token punctuation">:</span> <span class="token number">3</span> 
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9201</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9700</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;localhost:9700&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;localhost:9800&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;localhost:9900&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ahan-1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ahan-2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;ahan-3&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">path.data</span><span class="token punctuation">:</span> /opt/data
<span class="token key atrule">path.logs</span><span class="token punctuation">:</span> /opt/logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#集群名称</span>
<span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> ahan<span class="token punctuation">-</span>es
<span class="token comment">#节点名称</span>
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> ahan<span class="token punctuation">-</span><span class="token number">1</span> 
<span class="token comment">#是不是有资格主节点</span>
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#是否存储数据</span>
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#最大集群节点数</span>
<span class="token key atrule">node.max_local_storage_nodes</span><span class="token punctuation">:</span> <span class="token number">3</span> 
<span class="token comment">#ip地址</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token comment">#端口</span>
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9201</span>
<span class="token comment">#内部节点之间沟通端口</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9700</span>
<span class="token comment">#es7.x 之后新增的配置，节点发现 es所在服务器的ip</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;localhost:9700&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;localhost:9800&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;localhost:9900&quot;</span><span class="token punctuation">]</span>
<span class="token comment">#es7.x 之后新增的配置，初始化一个新的集群时需要此配置来选举master</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ahan-1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ahan-2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;ahan-3&quot;</span><span class="token punctuation">]</span> 
<span class="token comment">#数据和存储路径</span>
<span class="token key atrule">path.data</span><span class="token punctuation">:</span> /opt/data
<span class="token key atrule">path.logs</span><span class="token punctuation">:</span> /opt/logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3)、下面是elasticsearch-7.4.0-ahan2配置文件</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> ahan<span class="token punctuation">-</span>es
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> ahan<span class="token punctuation">-</span><span class="token number">2</span> 
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">node.max_local_storage_nodes</span><span class="token punctuation">:</span> <span class="token number">3</span> 
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9202</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9800</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;localhost:9700&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;localhost:9800&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;localhost:9900&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ahan-1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ahan-2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;ahan-3&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">path.data</span><span class="token punctuation">:</span> /opt/data
<span class="token key atrule">path.logs</span><span class="token punctuation">:</span> /opt/logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#集群名称</span>
<span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> ahan<span class="token punctuation">-</span>es
<span class="token comment">#节点名称</span>
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> ahan<span class="token punctuation">-</span><span class="token number">2</span> 
<span class="token comment">#是不是有资格主节点</span>
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#是否存储数据</span>
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#最大集群节点数</span>
<span class="token key atrule">node.max_local_storage_nodes</span><span class="token punctuation">:</span> <span class="token number">3</span> 
<span class="token comment">#ip地址</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token comment">#端口</span>
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9202</span>
<span class="token comment">#内部节点之间沟通端口</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9800</span>
<span class="token comment">#es7.x 之后新增的配置，节点发现</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;localhost:9700&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;localhost:9800&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;localhost:9900&quot;</span><span class="token punctuation">]</span>
<span class="token comment">#es7.x 之后新增的配置，初始化一个新的集群时需要此配置来选举master</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ahan-1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ahan-2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;ahan-3&quot;</span><span class="token punctuation">]</span> 
<span class="token comment">#数据和存储路径</span>
<span class="token key atrule">path.data</span><span class="token punctuation">:</span> /opt/data
<span class="token key atrule">path.logs</span><span class="token punctuation">:</span> /opt/logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4)、下面是elasticsearch-7.4.0-ahan3 配置文件</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> ahan<span class="token punctuation">-</span>es
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> ahan<span class="token punctuation">-</span><span class="token number">3</span> 
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">node.max_local_storage_nodes</span><span class="token punctuation">:</span> <span class="token number">3</span> 
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9203</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9900</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;localhost:9700&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;localhost:9800&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;localhost:9900&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ahan-1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ahan-2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;ahan-3&quot;</span><span class="token punctuation">]</span> 
<span class="token key atrule">path.data</span><span class="token punctuation">:</span> /opt/data
<span class="token key atrule">path.logs</span><span class="token punctuation">:</span> /opt/logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#集群名称</span>
<span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> ahan<span class="token punctuation">-</span>es
<span class="token comment">#节点名称</span>
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> ahan<span class="token punctuation">-</span><span class="token number">3</span> 
<span class="token comment">#是不是有资格主节点</span>
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#是否存储数据</span>
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#最大集群节点数</span>
<span class="token key atrule">node.max_local_storage_nodes</span><span class="token punctuation">:</span> <span class="token number">3</span> 
<span class="token comment">#ip地址</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token comment">#端口</span>
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9203</span>
<span class="token comment">#内部节点之间沟通端口</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9900</span>
<span class="token comment">#es7.x 之后新增的配置，节点发现</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;localhost:9700&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;localhost:9800&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;localhost:9900&quot;</span><span class="token punctuation">]</span>
<span class="token comment">#es7.x 之后新增的配置，初始化一个新的集群时需要此配置来选举master</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ahan-1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ahan-2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;ahan-3&quot;</span><span class="token punctuation">]</span> 
<span class="token comment">#数据和存储路径</span>
<span class="token key atrule">path.data</span><span class="token punctuation">:</span> /opt/data
<span class="token key atrule">path.logs</span><span class="token punctuation">:</span> /opt/logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1-4-执行授权" tabindex="-1"><a class="header-anchor" href="#_1-1-4-执行授权" aria-hidden="true">#</a> 1.1.4 执行授权</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>在root用户下执行
<span class="token function">chown</span> <span class="token parameter variable">-R</span> ahana:ahana /opt/elasticsearch-7.4.0-ahan1
<span class="token function">chown</span> <span class="token parameter variable">-R</span> ahana:ahana /opt/elasticsearch-7.4.0-ahan2
<span class="token function">chown</span> <span class="token parameter variable">-R</span> ahana:ahana /opt/elasticsearch-7.4.0-ahan3
如果有的日志文件授权失败，可使用<span class="token punctuation">(</span>也是在root下执行<span class="token punctuation">)</span>
<span class="token builtin class-name">cd</span> /opt/elasticsearch-7.4.0-ahan1/logs
<span class="token function">chown</span> <span class="token parameter variable">-R</span> ahana:ahana ./* 
<span class="token builtin class-name">cd</span> /opt/elasticsearch-7.4.0-ahan2/logs
<span class="token function">chown</span> <span class="token parameter variable">-R</span> ahana:ahana ./* 
<span class="token builtin class-name">cd</span> /opt/elasticsearch-7.4.0-ahan3/logs
<span class="token function">chown</span> <span class="token parameter variable">-R</span> ahana:ahana ./* 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1-5-启动三个节点" tabindex="-1"><a class="header-anchor" href="#_1-1-5-启动三个节点" aria-hidden="true">#</a> 1.1.5 启动三个节点</h4><p>启动之前，设置ES的JVM占用内存参数，防止内存不足错误</p>`,24),x=["src"],w=["src"],E=e(`<p>可以发现，ES启动时加载/config/jvm.options文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /opt/elasticsearch-7.4.0-ahan1/config/jvm.options
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),S=["src"],B=e(`<p>默认情况下，ES启动JVM最小内存1G，最大内存1G</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-Xms:最小内存
-Xmx:最大内存
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改为256m</p>`,3),$=["src"],R=n("p",null,"启动成功访问节点一：",-1),K=["src"],M=n("p",null,"可以从日志中看到：master not discovered yet。还没有发现主节点",-1),V=n("p",null,[s("访问集群状态信息 "),n("code",null,"http://192.168.159.131:9201/_cat/health?v"),s(" 不成功")],-1),N=["src"],G=n("p",null,"启动成功访问节点二:",-1),I=["src"],j=n("p",null,"可以从日志中看到：master not discovered yet。还没有发现主节点master node changed.已经选举出主节点ahan-2",-1),C=n("p",null,[s("访问集群状态信息 "),n("code",null,"http://192.168.159.131:9201/_cat/health?v"),s(" 成功")],-1),J=["src"],L=e(`<div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>健康状况结果解释：

cluster 集群名称
status 集群状态 
 green代表健康；
 yellow代表分配了所有主分片，但至少缺少一个副本，此时集群数据仍旧完整；
 red 代表部分主分片不可用，可能已经丢失数据。
node.total代表在线的节点总数量
node.data代表在线的数据节点的数量
shards 存活的分片数量
pri 存活的主分片数量 正常情况下 shards的数量是pri的两倍。
relo迁移中的分片数量，正常情况为 0
init 初始化中的分片数量 正常情况为 0
unassign未分配的分片 正常情况为 0
pending_tasks准备中的任务，任务指迁移分片等 正常情况为 0
max_task_wait_time任务最长等待时间
active_shards_percent正常分片百分比 正常情况为 100<span class="token comment">%</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动成功访问节点三</p>`,2),P={href:"http://192.168.149.135:9201/_cat/health?v",target:"_blank",rel:"noopener noreferrer"},X=["src"],A=e(`<p>可以看到节点已经变为3个，至此，ES集群已经搭建成功~</p><h2 id="_1-2-使用kibana配置和管理集群" tabindex="-1"><a class="header-anchor" href="#_1-2-使用kibana配置和管理集群" aria-hidden="true">#</a> 1.2 使用Kibana配置和管理集群</h2><h4 id="_1-2-1-集群配置" tabindex="-1"><a class="header-anchor" href="#_1-2-1-集群配置" aria-hidden="true">#</a> 1.2.1 集群配置</h4><p>因为之前我们在单机演示的时候也使用到了Kibana，我们先复制出来一个Kibana，然后修改它的集群配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/
<span class="token function">cp</span> <span class="token parameter variable">-r</span> kibana-7.4.0-linux-x86_64 kibana-7.4.0-linux-x86_64-cluster
<span class="token comment"># 由于 kibana 中文件众多，此处会等待大约1分钟的时间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改Kibana的集群配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span>  kibana-7.4.0-linux-x86_64-cluster/config/kibana.yml
加入下面的配置
elasticsearch.hosts: <span class="token punctuation">[</span><span class="token string">&quot;http://localhost:9201&quot;</span>,<span class="token string">&quot;http://localhost:9202&quot;</span>,<span class="token string">&quot;http://localhost:9203&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动Kibana</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> kibana --allow-root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),T=["src"],U=n("h4",{id:"_1-2-2-管理集群",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-2-2-管理集群","aria-hidden":"true"},"#"),s(" 1.2.2 管理集群")],-1),z=n("p",null,"1、打开Kibana，点开 Stack Monitoring 集群监控",-1),D=["src"],F=["src"],H=n("p",null,"2、点击【Nodes】查看节点详细信息",-1),O=["src"],Q=["src"],W=n("p",null,"在上图可以看到，第一个红框处显示【Green】，绿色，表示集群处理健康状态",-1),Y=n("p",null,"第二个红框是我们集群的三个节点，注意，ahan-3旁边是星星，表示是主节点",-1);function Z(a,nn){const t=c("ExternalLinkIcon");return o(),p("div",null,[r,d,k,m,n("img",{src:a.$withBase("/ElasticSearch/img/1575626474666.png"),alt:"foo"},null,8,v),h,b,n("ul",null,[g,_,y,n("li",null,[n("p",null,[s("打开浏览器输⼊："),n("a",q,[s("http://192.168.149.135:9200/_cat/health?v"),l(t)]),s(" ,如果返回的node.total是3，代表集 群搭建成功")])])]),f,n("img",{src:a.$withBase("/ElasticSearch/img/1575630754009.png"),alt:"foo"},null,8,x),s(" ```shell vim /opt/elasticsearch-7.4.0-ahan1/bin/elasticsearch ``` "),n("img",{src:a.$withBase("/ElasticSearch/img/1575631078654.png"),alt:"foo"},null,8,w),E,s(),n("img",{src:a.$withBase("/ElasticSearch/img/1575630948133.png"),alt:"foo"},null,8,S),B,n("img",{src:a.$withBase("/ElasticSearch/img/1575631033297.png"),alt:"foo"},null,8,$),R,n("img",{src:a.$withBase("/ElasticSearch/img/1575628494844.png"),alt:"foo"},null,8,K),M,V,n("img",{src:a.$withBase("/ElasticSearch/img/1575628567827.png"),alt:"foo"},null,8,N),G,n("img",{src:a.$withBase("/ElasticSearch/img/1575628735672.png"),alt:"foo"},null,8,I),j,C,n("img",{src:a.$withBase("/ElasticSearch/img/1575628812009.png"),alt:"foo"},null,8,J),L,n("p",null,[s("访问集群状态信息 "),n("a",P,[s("http://192.168.149.135:9201/_cat/health?v"),l(t)]),s(" 成功")]),n("img",{src:a.$withBase("/ElasticSearch/img/1575628972101.png"),alt:"foo"},null,8,X),A,s(),n("img",{src:a.$withBase("/ElasticSearch/img/1575629869248.png"),alt:"foo"},null,8,T),U,z,n("img",{src:a.$withBase("/ElasticSearch/img/1575630589113.png"),alt:"foo"},null,8,D),n("img",{src:a.$withBase("/ElasticSearch/img/1575631125143.png"),alt:"foo"},null,8,F),H,n("img",{src:a.$withBase("/ElasticSearch/img/1575631203718.png"),alt:"foo"},null,8,O),n("img",{src:a.$withBase("/ElasticSearch/img/1575631303974.png"),alt:"foo"},null,8,Q),W,Y])}const an=i(u,[["render",Z],["__file","ElasticSearch集群搭建.html.vue"]]);export{an as default};
