import{_ as i,r as p,o,c as l,b as n,d as s,e as c,a as t}from"./app-fdb0ca41.js";const u={},r=n("h1",{id:"rabbitmq集群搭建",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rabbitmq集群搭建","aria-hidden":"true"},"#"),s(" RabbitMQ集群搭建")],-1),d=n("p",null,"摘要：实际生产应用中都会采用消息队列的集群方案，如果选择RabbitMQ那么有必要了解下它的集群方案原理",-1),b=n("p",null,"一般来说，如果只是为了学习RabbitMQ或者验证业务工程的正确性那么在本地环境或者测试环境上使用其单实例部署就可以了，但是出于MQ中间件本身的可靠性、并发性、吞吐量和消息堆积能力等问题的考虑，在生产环境上一般都会考虑使用RabbitMQ的集群方案。",-1),m=n("h2",{id:"_3-1-集群方案的原理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-1-集群方案的原理","aria-hidden":"true"},"#"),s(" 3.1 集群方案的原理")],-1),v=n("p",null,"RabbitMQ这款消息队列中间件产品本身是基于Erlang编写，Erlang语言天生具备分布式特性（通过同步Erlang集群各节点的magic cookie来实现）。因此，RabbitMQ天然支持Clustering。这使得RabbitMQ本身不需要像ActiveMQ、Kafka那样通过ZooKeeper分别来实现HA方案和保存集群的元数据。集群是保证可靠性的一种方式，同时可以通过水平扩展以达到增加消息吞吐量能力的目的。",-1),k=["src"],g=n("h2",{id:"_3-2-单机多实例部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-2-单机多实例部署","aria-hidden":"true"},"#"),s(" 3.2 单机多实例部署")],-1),h=n("p",null,"由于某些因素的限制，有时候你不得不在一台机器上去搭建一个rabbitmq集群，这个有点类似zookeeper的单机版。真实生成环境还是要配成多机集群的。有关怎么配置多机集群的可以参考其他的资料，这里主要论述如何在单机中配置多个rabbitmq实例。",-1),q={href:"https://www.rabbitmq.com/clustering.html",target:"_blank",rel:"noopener noreferrer"},_=t(`<p>首先确保RabbitMQ运行没有问题</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@super ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl status</span>
Status of <span class="token function">node</span> rabbit@super <span class="token punctuation">..</span>.
<span class="token punctuation">[</span><span class="token punctuation">{</span>pid,10232<span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>running_applications,
     <span class="token punctuation">[</span><span class="token punctuation">{</span>rabbitmq_management,<span class="token string">&quot;RabbitMQ Management Console&quot;</span>,<span class="token string">&quot;3.6.5&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>rabbitmq_web_dispatch,<span class="token string">&quot;RabbitMQ Web Dispatcher&quot;</span>,<span class="token string">&quot;3.6.5&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>webmachine,<span class="token string">&quot;webmachine&quot;</span>,<span class="token string">&quot;1.10.3&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>mochiweb,<span class="token string">&quot;MochiMedia Web Server&quot;</span>,<span class="token string">&quot;2.13.1&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>rabbitmq_management_agent,<span class="token string">&quot;RabbitMQ Management Agent&quot;</span>,<span class="token string">&quot;3.6.5&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>rabbit,<span class="token string">&quot;RabbitMQ&quot;</span>,<span class="token string">&quot;3.6.5&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>os_mon,<span class="token string">&quot;CPO  CXC 138 46&quot;</span>,<span class="token string">&quot;2.4&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>syntax_tools,<span class="token string">&quot;Syntax tools&quot;</span>,<span class="token string">&quot;1.7&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>inets,<span class="token string">&quot;INETS  CXC 138 49&quot;</span>,<span class="token string">&quot;6.2&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>amqp_client,<span class="token string">&quot;RabbitMQ AMQP Client&quot;</span>,<span class="token string">&quot;3.6.5&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>rabbit_common,<span class="token punctuation">[</span><span class="token punctuation">]</span>,<span class="token string">&quot;3.6.5&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>ssl,<span class="token string">&quot;Erlang/OTP SSL application&quot;</span>,<span class="token string">&quot;7.3&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>public_key,<span class="token string">&quot;Public key infrastructure&quot;</span>,<span class="token string">&quot;1.1.1&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>asn1,<span class="token string">&quot;The Erlang ASN1 compiler version 4.0.2&quot;</span>,<span class="token string">&quot;4.0.2&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>ranch,<span class="token string">&quot;Socket acceptor pool for TCP protocols.&quot;</span>,<span class="token string">&quot;1.2.1&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>mnesia,<span class="token string">&quot;MNESIA  CXC 138 12&quot;</span>,<span class="token string">&quot;4.13.3&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>compiler,<span class="token string">&quot;ERTS  CXC 138 10&quot;</span>,<span class="token string">&quot;6.0.3&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>crypto,<span class="token string">&quot;CRYPTO&quot;</span>,<span class="token string">&quot;3.6.3&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>xmerl,<span class="token string">&quot;XML parser&quot;</span>,<span class="token string">&quot;1.3.10&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>sasl,<span class="token string">&quot;SASL  CXC 138 11&quot;</span>,<span class="token string">&quot;2.7&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>stdlib,<span class="token string">&quot;ERTS  CXC 138 10&quot;</span>,<span class="token string">&quot;2.8&quot;</span><span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>kernel,<span class="token string">&quot;ERTS  CXC 138 10&quot;</span>,<span class="token string">&quot;4.2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>os,<span class="token punctuation">{</span>unix,linux<span class="token punctuation">}</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>erlang_version,
     <span class="token string">&quot;Erlang/OTP 18 [erts-7.3] [source] [64-bit] [async-threads:64] [hipe] [kernel-poll:true]<span class="token entity" title="\\n">\\n</span>&quot;</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>memory,
     <span class="token punctuation">[</span><span class="token punctuation">{</span>total,56066752<span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>connection_readers,0<span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>connection_writers,0<span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>connection_channels,0<span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>connection_other,2680<span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>queue_procs,268248<span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>queue_slave_procs,0<span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>plugins,1131936<span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>other_proc,18144280<span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>mnesia,125304<span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>mgmt_db,921312<span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>msg_index,69440<span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>other_ets,1413664<span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>binary,755736<span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>code,27824046<span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>atom,1000601<span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>other_system,4409505<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>alarms,<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>listeners,<span class="token punctuation">[</span><span class="token punctuation">{</span>clustering,25672,<span class="token string">&quot;::&quot;</span><span class="token punctuation">}</span>,<span class="token punctuation">{</span>amqp,5672,<span class="token string">&quot;::&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>vm_memory_high_watermark,0.4<span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>vm_memory_limit,411294105<span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>disk_free_limit,50000000<span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>disk_free,13270233088<span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>file_descriptors,
     <span class="token punctuation">[</span><span class="token punctuation">{</span>total_limit,924<span class="token punctuation">}</span>,<span class="token punctuation">{</span>total_used,6<span class="token punctuation">}</span>,<span class="token punctuation">{</span>sockets_limit,829<span class="token punctuation">}</span>,<span class="token punctuation">{</span>sockets_used,0<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>processes,<span class="token punctuation">[</span><span class="token punctuation">{</span>limit,1048576<span class="token punctuation">}</span>,<span class="token punctuation">{</span>used,262<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>run_queue,0<span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>uptime,43651<span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>kernel,<span class="token punctuation">{</span>net_ticktime,60<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>停止rabbitmq服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@super sbin<span class="token punctuation">]</span><span class="token comment"># service rabbitmq-server stop</span>
Stopping rabbitmq-server: rabbitmq-server.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动第一个节点：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@super sbin<span class="token punctuation">]</span><span class="token comment"># RABBITMQ_NODE_PORT=5673 RABBITMQ_NODENAME=rabbit1 rabbitmq-server start</span>

              RabbitMQ <span class="token number">3.6</span>.5. Copyright <span class="token punctuation">(</span>C<span class="token punctuation">)</span> <span class="token number">2007</span>-2016 Pivotal Software, Inc.
  <span class="token comment">##  ##      Licensed under the MPL.  See http://www.rabbitmq.com/</span>
  <span class="token comment">##  ##</span>
  <span class="token comment">######  Logs: /var/log/rabbitmq/rabbit1.log</span>
  <span class="token comment">###  ##        /var/log/rabbitmq/rabbit1-sasl.log</span>
  <span class="token comment">######</span>
              Starting broker<span class="token punctuation">..</span>.
 completed with <span class="token number">6</span> plugins.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动第二个节点：</p><blockquote><p>web管理插件端口占用,所以还要指定其web插件占用的端口号。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@super ~<span class="token punctuation">]</span><span class="token comment"># RABBITMQ_NODE_PORT=5674 RABBITMQ_SERVER_START_ARGS=&quot;-rabbitmq_management listener [{port,15674}]&quot; RABBITMQ_NODENAME=rabbit2 rabbitmq-server start</span>

              RabbitMQ <span class="token number">3.6</span>.5. Copyright <span class="token punctuation">(</span>C<span class="token punctuation">)</span> <span class="token number">2007</span>-2016 Pivotal Software, Inc.
  <span class="token comment">##  ##      Licensed under the MPL.  See http://www.rabbitmq.com/</span>
  <span class="token comment">##  ##</span>
  <span class="token comment">######  Logs: /var/log/rabbitmq/rabbit2.log</span>
  <span class="token comment">###  ##        /var/log/rabbitmq/rabbit2-sasl.log</span>
  <span class="token comment">######</span>
              Starting broker<span class="token punctuation">..</span>.
 completed with <span class="token number">6</span> plugins.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结束命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rabbitmqctl <span class="token parameter variable">-n</span> rabbit1 stop
rabbitmqctl <span class="token parameter variable">-n</span> rabbit2 stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>rabbit1操作作为主节点：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@super ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl -n rabbit1 stop_app  </span>
Stopping <span class="token function">node</span> rabbit1@super <span class="token punctuation">..</span>.
<span class="token punctuation">[</span>root@super ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl -n rabbit1 reset  </span>
Resetting <span class="token function">node</span> rabbit1@super <span class="token punctuation">..</span>.
<span class="token punctuation">[</span>root@super ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl -n rabbit1 start_app</span>
Starting <span class="token function">node</span> rabbit1@super <span class="token punctuation">..</span>.
<span class="token punctuation">[</span>root@super ~<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rabbit2操作为从节点：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@super ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl -n rabbit2 stop_app</span>
Stopping <span class="token function">node</span> rabbit2@super <span class="token punctuation">..</span>.
<span class="token punctuation">[</span>root@super ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl -n rabbit2 reset</span>
Resetting <span class="token function">node</span> rabbit2@super <span class="token punctuation">..</span>.
<span class="token punctuation">[</span>root@super ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl -n rabbit2 join_cluster rabbit1@&#39;super&#39; ##&#39;&#39;内是主机名换成自己的</span>
Clustering <span class="token function">node</span> rabbit2@super with rabbit1@super <span class="token punctuation">..</span>.
<span class="token punctuation">[</span>root@super ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl -n rabbit2 start_app</span>
Starting <span class="token function">node</span> rabbit2@super <span class="token punctuation">..</span>.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看集群状态：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@super ~]# rabbitmqctl cluster_status -n rabbit1
Cluster status of node rabbit1@super ...
[{nodes,[{disc,[rabbit1@super,rabbit2@super]}]},
 {running_nodes,[rabbit2@super,rabbit1@super]},
 {cluster_name,&lt;&lt;&quot;rabbit1@super&quot;&gt;&gt;},
 {partitions,[]},
 {alarms,[{rabbit2@super,[]},{rabbit1@super,[]}]}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>web监控：</p>`,18),x=["src"],f=t('<h2 id="_3-3-集群管理" tabindex="-1"><a class="header-anchor" href="#_3-3-集群管理" aria-hidden="true">#</a> 3.3 集群管理</h2><p><strong>rabbitmqctl join_cluster {cluster_node} [–ram]</strong> 将节点加入指定集群中。在这个命令执行前需要停止RabbitMQ应用并重置节点。</p><p><strong>rabbitmqctl cluster_status</strong> 显示集群的状态。</p><p><strong>rabbitmqctl change_cluster_node_type {disc|ram}</strong> 修改集群节点的类型。在这个命令执行前需要停止RabbitMQ应用。</p><p><strong>rabbitmqctl forget_cluster_node [–offline]</strong> 将节点从集群中删除，允许离线执行。</p><p><strong>rabbitmqctl update_cluster_nodes {clusternode}</strong></p><p>在集群中的节点应用启动前咨询clusternode节点的最新信息，并更新相应的集群信息。这个和join_cluster不同，它不加入集群。考虑这样一种情况，节点A和节点B都在集群中，当节点A离线了，节点C又和节点B组成了一个集群，然后节点B又离开了集群，当A醒来的时候，它会尝试联系节点B，但是这样会失败，因为节点B已经不在集群中了。</p><p><strong>rabbitmqctl cancel_sync_queue [-p vhost] {queue}</strong> 取消队列queue同步镜像的操作。</p><p><strong>rabbitmqctl set_cluster_name {name}</strong> 设置集群名称。集群名称在客户端连接时会通报给客户端。Federation和Shovel插件也会有用到集群名称的地方。集群名称默认是集群中第一个节点的名称，通过这个命令可以重新设置。</p><h2 id="_3-4-rabbitmq镜像集群配置" tabindex="-1"><a class="header-anchor" href="#_3-4-rabbitmq镜像集群配置" aria-hidden="true">#</a> 3.4 RabbitMQ镜像集群配置</h2><blockquote><p>上面已经完成RabbitMQ默认集群模式，但并不保证队列的高可用性，尽管交换机、绑定这些可以复制到集群里的任何一个节点，但是队列内容不会复制。虽然该模式解决一项目组节点压力，但队列节点宕机直接导致该队列无法应用，只能等待重启，所以要想在队列节点宕机或故障也能正常应用，就要复制队列内容到集群里的每个节点，必须要创建镜像队列。</p><p>镜像队列是基于普通的集群模式的，然后再添加一些策略，所以你还是得先配置普通集群，然后才能设置镜像队列，我们就以上面的集群接着做。</p></blockquote><p><strong>设置的镜像队列可以通过开启的网页的管理端Admin-&gt;Policies，也可以通过命令。</strong></p><blockquote><p>rabbitmqctl set_policy my_ha &quot;^&quot; &#39;{&quot;ha-mode&quot;:&quot;all&quot;}&#39;</p></blockquote>',13),y=["src"],R=t(`<blockquote><ul><li>Name:策略名称</li><li>Pattern：匹配的规则，如果是匹配所有的队列，是^.</li><li>Definition:使用ha-mode模式中的all，也就是同步所有匹配的队列。问号链接帮助文档。</li></ul></blockquote><h2 id="_3-5-负载均衡-haproxy" tabindex="-1"><a class="header-anchor" href="#_3-5-负载均衡-haproxy" aria-hidden="true">#</a> 3.5 负载均衡-HAProxy</h2><p>HAProxy提供高可用性、负载均衡以及基于TCP和HTTP应用的代理，支持虚拟主机，它是免费、快速并且可靠的一种解决方案,包括Twitter，Reddit，StackOverflow，GitHub在内的多家知名互联网公司在使用。HAProxy实现了一种事件驱动、单一进程模型，此模型支持非常大的并发连接数。</p><h3 id="_3-5-1-安装haproxy" tabindex="-1"><a class="header-anchor" href="#_3-5-1-安装haproxy" aria-hidden="true">#</a> 3.5.1 安装HAProxy</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//下载依赖包
yum <span class="token function">install</span> gcc <span class="token function">vim</span> <span class="token function">wget</span>
//上传haproxy源码包
//解压
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> haproxy-1.6.5.tar.gz <span class="token parameter variable">-C</span> /usr/local
//进入目录、进行编译、安装
<span class="token builtin class-name">cd</span> /usr/local/haproxy-1.6.5
<span class="token function">make</span> <span class="token assign-left variable">TARGET</span><span class="token operator">=</span>linux31 <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span>/usr/local/haproxy
<span class="token function">make</span> <span class="token function">install</span> <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span>/usr/local/haproxy
//赋权
<span class="token function">groupadd</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-g</span> <span class="token number">149</span> haproxy
<span class="token function">useradd</span> <span class="token parameter variable">-g</span> haproxy <span class="token parameter variable">-r</span> <span class="token parameter variable">-s</span> /sbin/nologin <span class="token parameter variable">-u</span> <span class="token number">149</span> haproxy
//创建haproxy配置文件
<span class="token function">mkdir</span> /etc/haproxy
<span class="token function">vim</span> /etc/haproxy/haproxy.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-2-配置haproxy" tabindex="-1"><a class="header-anchor" href="#_3-5-2-配置haproxy" aria-hidden="true">#</a> 3.5.2 配置HAProxy</h3><p>配置文件路径：/etc/haproxy/haproxy.cfg</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#logging options</span>
global
 log <span class="token number">127.0</span>.0.1 local0 info
 maxconn <span class="token number">5120</span>
 <span class="token function">chroot</span> /usr/local/haproxy
 uid <span class="token number">99</span>
 gid <span class="token number">99</span>
 daemon
 quiet
 nbproc <span class="token number">20</span>
 pidfile /var/run/haproxy.pid

defaults
 log global
 
 mode tcp

 option tcplog
 option dontlognull
 retries <span class="token number">3</span>
 option redispatch
 maxconn <span class="token number">2000</span>
 contimeout 5s
   
     clitimeout 60s

     srvtimeout 15s 
<span class="token comment">#front-end IP for consumers and producters</span>

listen rabbitmq_cluster
 <span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0:5672
 
 mode tcp
 <span class="token comment">#balance url_param userid</span>
 <span class="token comment">#balance url_param session_id check_post 64</span>
 <span class="token comment">#balance hdr(User-Agent)</span>
 <span class="token comment">#balance hdr(host)</span>
 <span class="token comment">#balance hdr(Host) use_domain_only</span>
 <span class="token comment">#balance rdp-cookie</span>
 <span class="token comment">#balance leastconn</span>
 <span class="token comment">#balance source //ip</span>
 
 balance roundrobin
 
        server node1 <span class="token number">127.0</span>.0.1:5673 check inter <span class="token number">5000</span> rise <span class="token number">2</span> fall <span class="token number">2</span>
        server node2 <span class="token number">127.0</span>.0.1:5674 check inter <span class="token number">5000</span> rise <span class="token number">2</span> fall <span class="token number">2</span>

listen stats
 <span class="token builtin class-name">bind</span> <span class="token number">172.16</span>.98.133:8100
 mode http
 option httplog
 stats <span class="token builtin class-name">enable</span>
 stats uri /rabbitmq-stats
 stats refresh 5s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动HAproxy负载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/local/haproxy/sbin/haproxy <span class="token parameter variable">-f</span> /etc/haproxy/haproxy.cfg
//查看haproxy进程状态
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> haproxy

访问如下地址对mq节点进行监控
http://172.16.98.133:8100/rabbitmq-stats

<span class="token comment"># haproxy在线重启命令:</span>
<span class="token function">service</span> haproxy reload

<span class="token comment"># haproxy直接重启命令:</span>
systemctl restart haproxy

<span class="token comment"># haproxy状态查询命令:</span>
systemctl status haproxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码中访问mq集群地址，则变为访问haproxy地址 ip: HAProxy 配置所在服务，端口：5672</p>`,11);function M(a,w){const e=p("ExternalLinkIcon");return o(),l("div",null,[r,d,b,m,v,n("img",{src:a.$withBase("/springboot/pic/1566073768274.png"),alt:"foo"},null,8,k),g,h,n("p",null,[s("主要参考官方文档："),n("a",q,[s("https://www.rabbitmq.com/clustering.html"),c(e)])]),_,n("img",{src:a.$withBase("/springboot/pic/1566065096459.png"),alt:"foo"},null,8,x),f,n("img",{src:a.$withBase("/springboot/pic/1566072300852.png"),alt:"foo"},null,8,y),R])}const C=i(u,[["render",M],["__file","RabbitMQ集群搭建.html.vue"]]);export{C as default};
