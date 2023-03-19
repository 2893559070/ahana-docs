import{_ as u,M as a,p as n,q as t,R as l,t as e,N as p,a1 as r}from"./framework-5866ffd3.js";const o={},s=r('<h1 id="euraka配置详解" tabindex="-1"><a class="header-anchor" href="#euraka配置详解" aria-hidden="true">#</a> Euraka配置详解</h1><p>Eureka包含四个部分的配置</p><ol><li>instance：当前Eureka Instance实例信息配置</li><li>client：Eureka Client客户端特性配置</li><li>server：Eureka Server注册中心特性配置</li><li>dashboard：Eureka Server注册中心仪表盘配置</li></ol><h2 id="eureka-instance实例信息配置" tabindex="-1"><a class="header-anchor" href="#eureka-instance实例信息配置" aria-hidden="true">#</a> Eureka Instance实例信息配置</h2><p>Eureka Instance的配置信息全部保存在org.springframework.cloud.netflix.eureka.EurekaInstanceConfigBean配置类里，实际上它是com.netflix.appinfo.EurekaInstanceConfig的实现类，替代了netflix的com.netflix.appinfo.CloudInstanceConfig的默认实现。</p><p>Eureka Instance的配置信息全部以eureka.instance.xxx的格式配置。</p><p><strong>配置列表</strong></p><ul><li>appname = unknown</li></ul><p>应用名，首先获取spring.application.name的值，如果取值为空，则取默认unknown。</p><ul><li>appGroupName = null</li></ul><p>应用组名</p><ul><li>instanceEnabledOnit = false</li></ul><p>实例注册到Eureka上是，是否立刻开启通讯。有时候应用在准备好服务之前需要一些预处理。</p><ul><li>nonSecurePort = 80</li></ul><p>非安全的端口</p><ul><li>securePort = 443</li></ul><p>安全端口</p><ul><li>nonSecurePortEnabled = true</li></ul><p>是否开启非安全端口通讯</p><ul><li>securePortEnabled = false</li></ul><p>是否开启安全端口通讯</p><ul><li>leaseRenewalIntervalInSeconds = 30</li></ul><p>实例续约间隔时间</p><ul><li>leaseExpirationDurationInSeconds = 90</li></ul><p>实例超时时间，表示最大leaseExpirationDurationInSeconds秒后没有续约，Server就认为他不可用了，随之就会将其剔除。</p><ul><li>virtualHostName = unknown</li></ul><p>虚拟主机名，首先获取spring.application.name的值，如果取值为空，则取默认unknown。</p><ul><li>instanceId</li></ul><p>注册到eureka上的唯一实例ID，不能与相同appname的其他实例重复。</p><ul><li>secureVirtualHostName = unknown</li></ul><p>安全虚拟主机名，首先获取spring.application.name的值，如果取值为空，则取默认unknown。</p><ul><li>metadataMap = new HashMap();</li></ul><p>实例元数据，可以供其他实例使用。比如spring-boot-admin在监控时，获取实例的上下文和端口。</p><ul><li>dataCenterInfo = new MyDataCenterInfo(DataCenterInfo.Name.MyOwn);</li></ul><p>实例部署的数据中心。如AWS、MyOwn。</p><ul><li>ipAddress=null</li></ul><p>实例的IP地址</p><ul><li>statusPageUrlPath = &quot;/actuator/info&quot;</li></ul><p>实例状态页相对url</p><ul><li>statusPageUrl = null</li></ul><p>实例状态页绝对URL</p><ul><li>homePageUrlPath = &quot;/&quot;</li></ul><p>实例主页相对URL</p><ul><li>homePageUrl = null</li></ul><p>实例主页绝对URL</p><ul><li>healthCheckUrlUrlPath = &quot;/actuator/health&quot;</li></ul><p>实例健康检查相对URL</p><ul><li>healthCheckUrl = null</li></ul><p>实例健康检查绝对URL</p><ul><li>secureHealthCheckUrl = null</li></ul><p>实例安全的健康检查绝对URL</p><ul><li>namespace = &quot;eureka&quot;</li></ul><p>配置属性的命名空间（Spring Cloud中被忽略）</p><ul><li>hostname = null</li></ul><p>主机名,不配置的时候讲根据操作系统的主机名来获取</p><ul><li>preferIpAddress = false</li></ul><p>是否优先使用IP地址作为主机名的标识</p><h2 id="eureka-client客户端特性配置" tabindex="-1"><a class="header-anchor" href="#eureka-client客户端特性配置" aria-hidden="true">#</a> Eureka Client客户端特性配置</h2><p>Eureka Client客户端特性配置是对作为Eureka客户端的特性配置，包括Eureka注册中心，本身也是一个Eureka Client。</p><p>Eureka Client特性配置全部在org.springframework.cloud.netflix.eureka.EurekaClientConfigBean中，实际上它是com.netflix.discovery.EurekaClientConfig的实现类，替代了netxflix的默认实现。</p><p>Eureka Client客户端特性配置全部以eureka.client.xxx的格式配置。</p><p><strong>配置列表</strong></p><ul><li>enabled=true</li></ul><p>是否启用Eureka client。</p><ul><li>registryFetchIntervalSeconds=30</li></ul><p>定时从Eureka Server拉取服务注册信息的间隔时间</p><ul><li>instanceInfoReplicationIntervalSeconds=30</li></ul><p>定时将实例信息（如果变化了）复制到Eureka Server的间隔时间。（InstanceInfoReplicator线程）</p><ul><li>initialInstanceInfoReplicationIntervalSeconds=40</li></ul><p>首次将实例信息复制到Eureka Server的延迟时间。（InstanceInfoReplicator线程）</p><ul><li>eurekaServiceUrlPollIntervalSeconds=300</li></ul><p>拉取Eureka Server地址的间隔时间（Eureka Server有可能增减）</p><ul><li>proxyPort=null</li></ul><p>Eureka Server的代理端口</p><ul><li>proxyHost=null</li></ul><p>Eureka Server的代理主机名</p><ul><li>proxyUserName=null</li></ul><p>Eureka Server的代理用户名</p><ul><li>proxyPassword=null</li></ul><p>Eureka Server的代理密码</p><ul><li>eurekaServerReadTimeoutSeconds=8</li></ul><p>从Eureka Server读取信息的超时时间</p><ul><li>eurekaServerConnectTimeoutSeconds=5</li></ul><p>连接Eureka Server的超时时间</p><ul><li>backupRegistryImpl=null</li></ul><p>Eureka Client第一次启动时获取服务注册信息的调用的回溯实现。Eureka Client启动时首次会检查有没有BackupRegistry的实现类，如果有实现类，则优先从这个实现类里获取服务注册信息。</p><ul><li>eurekaServerTotalConnections=200</li></ul><p>Eureka client连接Eureka Server的链接总数</p><ul><li>eurekaServerTotalConnectionsPerHost=50</li></ul><p>Eureka client连接单台Eureka Server的链接总数</p><ul><li>eurekaServerURLContext=null</li></ul>',91),c={href:"http://xxxx/eureka",target:"_blank",rel:"noopener noreferrer"},k=r('<ul><li>eurekaServerPort=null</li></ul><p>当Eureka server的列表在DNS中时，Eureka Server的端口。</p><ul><li>eurekaServerDNSName=null</li></ul><p>当Eureka server的列表在DNS中时，且要通过DNSName获取Eureka Server列表时，DNS名字。</p><ul><li>region=&quot;us-east-1&quot;</li></ul><p>实例所属区域。</p><ul><li>eurekaConnectionIdleTimeoutSeconds = 30</li></ul><p>Eureka Client和Eureka Server之间的Http连接的空闲超时时间。</p><ul><li>heartbeatExecutorThreadPoolSize=2</li></ul><p>心跳（续约）执行器线程池大小。</p><ul><li>heartbeatExecutorExponentialBackOffBound=10</li></ul><p>心跳执行器在续约过程中超时后的再次执行续约的最大延迟倍数。默认最大延迟时间=10 * eureka.instance.leaseRenewalIntervalInSeconds</p><ul><li>cacheRefreshExecutorThreadPoolSize=2</li></ul><p>cacheRefreshExecutord的线程池大小（获取注册信息）</p><ul><li>cacheRefreshExecutorExponentialBackOffBound=10</li></ul><p>cacheRefreshExecutord的再次执行的最大延迟倍数。默认最大延迟时间=10 *eureka.client.registryFetchIntervalSeconds</p><ul><li>serviceUrl= new HashMap();serviceUrl.put(DEFAULT_ZONE, DEFAULT_URL);</li></ul><p>Eureka Server的分区地址。默认添加了一个defualtZone。也就是最常用的配置eureka.client.service-url.defaultZone=xxx</p><ul><li>registerWithEureka=true</li></ul><p>是否注册到Eureka Server。</p><ul><li>preferSameZoneEureka=true</li></ul><p>是否使用相同Zone下的Eureka server。</p><ul><li>logDeltaDiff=false</li></ul><p>是否记录Eureka Server和Eureka Client之间注册信息的差异</p><ul><li>disableDelta=false</li></ul><p>是否开启增量同步注册信息。</p><ul><li>fetchRemoteRegionsRegistry=null</li></ul><p>获取注册服务的远程地区，以逗号隔开。</p><ul><li>availabilityZones=new HashMap()</li></ul><p>可用分区列表。用逗号隔开。</p><ul><li>filterOnlyUpInstances = true</li></ul><p>是否只拉取UP状态的实例。</p><ul><li>fetchRegistry=true</li></ul><p>是否拉取注册信息。</p><ul><li>shouldUnregisterOnShutdown = true</li></ul><p>是否在停止服务的时候向Eureka Server发起Cancel指令。</p><ul><li>shouldEnforceRegistrationAtInit = false</li></ul><p>是否在初始化过程中注册服务。</p><h2 id="eureka-server注册中心端配置" tabindex="-1"><a class="header-anchor" href="#eureka-server注册中心端配置" aria-hidden="true">#</a> Eureka Server注册中心端配置</h2><p>Eureka Server注册中心端的配置是对注册中心的特性配置。Eureka Server的配置全部在org.springframework.cloud.netflix.eureka.server.EurekaServerConfigBean里，实际上它是com.netflix.eureka.EurekaServerConfig的实现类，替代了netflix的默认实现。</p><p>Eureka Server的配置全部以eureka.server.xxx的格式进行配置。</p><p><strong>配置列表</strong></p><ul><li>enableSelfPreservation=true</li></ul><p>是否开启自我保护</p><ul><li>renewalPercentThreshold = 0.85</li></ul><p>自我保护续约百分比阀值因子。如果实际续约数小于续约数阀值，则开启自我保护</p><ul><li>renewalThresholdUpdateIntervalMs = 15 <em>60</em> 1000</li></ul><p>续约数阀值更新频率。</p><ul><li>peerEurekaNodesUpdateIntervalMs = 10 <em>60</em> 1000</li></ul><p>Eureka Server节点更新频率。</p><ul><li>enableReplicatedRequestCompression = false</li></ul><p>是否启用复制请求压缩。</p><ul><li>waitTimeInMsWhenSyncEmpty=5 <em>60</em> 1000</li></ul><p>当从其他节点同步实例信息为空时等待的时间。</p><ul><li>peerNodeConnectTimeoutMs=200</li></ul><p>节点间连接的超时时间。</p><ul><li>peerNodeReadTimeoutMs=200</li></ul><p>节点间读取信息的超时时间。</p><ul><li>peerNodeTotalConnections=1000</li></ul><p>节点间连接总数。</p><ul><li>peerNodeTotalConnectionsPerHost = 500;</li></ul><p>单个节点间连接总数。</p><ul><li>peerNodeConnectionIdleTimeoutSeconds = 30;</li></ul><p>节点间连接空闲超时时间。</p><ul><li>retentionTimeInMSInDeltaQueue = 3 * MINUTES;</li></ul><p>增量队列的缓存时间。</p><ul><li>deltaRetentionTimerIntervalInMs = 30 * 1000;</li></ul><p>清理增量队列中过期的频率。</p><ul><li>evictionIntervalTimerInMs = 60 * 1000;</li></ul><p>剔除任务频率。</p><ul><li>responseCacheAutoExpirationInSeconds = 180;</li></ul><p>注册列表缓存超时时间（当注册列表没有变化时）</p><ul><li>responseCacheUpdateIntervalMs = 30 * 1000;</li></ul><p>注册列表缓存更新频率。</p><ul><li>useReadOnlyResponseCache = true;</li></ul><p>是否开启注册列表的二级缓存。</p><ul><li>disableDelta=false。</li></ul><p>是否为client提供增量信息。</p><ul><li>maxThreadsForStatusReplication = 1;</li></ul><p>状态同步的最大线程数。</p><ul><li>maxElementsInStatusReplicationPool = 10000;</li></ul><p>状态同步队列的最大容量。</p><ul><li>syncWhenTimestampDiffers = true;</li></ul><p>当时间差异时是否同步。</p><ul><li>registrySyncRetries = 0;</li></ul><p>注册信息同步重试次数。</p><ul><li>registrySyncRetryWaitMs = 30 * 1000;</li></ul><p>注册信息同步重试期间的时间间隔。</p><ul><li>maxElementsInPeerReplicationPool = 10000;</li></ul><p>节点间同步事件的最大容量。</p><ul><li>minThreadsForPeerReplication = 5;</li></ul><p>节点间同步的最小线程数。</p><ul><li>maxThreadsForPeerReplication = 20;</li></ul><p>节点间同步的最大线程数。</p><ul><li>maxTimeForReplication = 30000;</li></ul><p>节点间同步的最大时间，单位为毫秒。</p><ul><li>disableDeltaForRemoteRegions = false；</li></ul><p>是否启用远程区域增量。</p><ul><li>remoteRegionConnectTimeoutMs = 1000;</li></ul><p>远程区域连接超时时间。</p><ul><li>remoteRegionReadTimeoutMs = 1000;</li></ul><p>远程区域读取超时时间。</p><ul><li>remoteRegionTotalConnections = 1000;</li></ul><p>远程区域最大连接数</p><ul><li>remoteRegionTotalConnectionsPerHost = 500;</li></ul><p>远程区域单机连接数</p><ul><li>remoteRegionConnectionIdleTimeoutSeconds = 30;</li></ul><p>远程区域连接空闲超时时间。</p><ul><li>remoteRegionRegistryFetchInterval = 30;</li></ul><p>远程区域注册信息拉取频率。</p><ul><li>remoteRegionFetchThreadPoolSize = 20;</li></ul><p>远程区域注册信息线程数。</p><h2 id="eureka-server注册中心仪表盘配置" tabindex="-1"><a class="header-anchor" href="#eureka-server注册中心仪表盘配置" aria-hidden="true">#</a> <strong>Eureka Server注册中心仪表盘配置</strong></h2><p>注册中心仪表盘的配置主要是控制注册中心的可视化展示。以eureka.dashboard.xxx的格式配置。</p><ul><li>path=&quot;/&quot;</li></ul><p>仪表盘访问路径</p><ul><li>enabled=true</li></ul><p>是否启用仪表盘</p>',118);function d(h,E){const i=a("ExternalLinkIcon");return n(),t("div",null,[s,l("p",null,[e("当Eureka server的列表在DNS中时，Eureka Server的上下文路径。如"),l("a",c,[e("http://xxxx/eureka"),p(i)]),e("。")]),k])}const m=u(o,[["render",d],["__file","Euraka配置详解.html.vue"]]);export{m as default};
