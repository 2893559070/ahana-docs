# 数据同步解决方案-canal

## 1. canal

### 1.1 canal简介

canal可以用来监控数据库数据的变化，从而获得新增数据，或者修改的数据。
canal是应阿里巴巴存在杭州和美国的双机房部署，存在跨机房同步的业务需求而提出的。
阿里系公司开始逐步的尝试基于数据库的日志解析，获取增量变更进行同步，由此衍生出了增量订阅&消费的业务。

  <img :src="$withBase('/javaUtils/27.png')" alt="foo">

原理相对比较简单：

1. canal模拟mysql slave的交互协议，伪装自己为mysql slave，向mysql master发送dump协议
2. mysql master收到dump请求，开始推送binary log给slave(也就是canal)
3. canal解析binary log对象(原始为byte流)

### 1.2 环境部署

#### 1.2.1 mysql开启binlog模式

（1）查看当前mysql是否开启binlog模式。

```bash
# 如果log_bin的值为OFF是未开启，为ON是已开启。
SHOW VARIABLES LIKE '%log_bin%'
```

（2）修改/etc/my.cnf 需要开启binlog模式。

```bash
binlog-format=ROW # 更改参数
server_id=1
```

(3) 进入mysql

```bash
mysql -h localhost -u root -p
```

（4）创建账号 用于测试使用
使用root账号创建用户并授予权限

```bash
create user canal@'%' IDENTIFIED by 'canal'; GRANT SELECT, REPLICATION SLAVE, REPLICATION CLIENT,SUPER ON *.* TO 'canal'@'%'; FLUSH PRIVILEGES;
```

#### 1.2.2 canal服务端安装配置

（1）下载地址canal

```bash
https://github.com/alibaba/canal/releases/tag/canal-1.0.24
```

  <img :src="$withBase('/javaUtils/28.png')" alt="foo">

（2）下载之后 上传到linux系统中，解压缩到指定的目录/usr/local/canal
解压缩之后的目录结构如下：

  <img :src="$withBase('/javaUtils/29.png')" alt="foo">

（3）修改 exmaple下的实例配置

```bash
vi conf/example/instance.properties
```

  <img :src="$withBase('/javaUtils/30.png')" alt="foo">
修改如图所示的几个参数。

（3）指定读取位置
进入mysql中执行下面语句查看binlog所在位置

```sql
mysql>showmasterstatus;
显示如下:
+------------------+----------+--------------+------------------+-------------------+
|File      |Position|Binlog_Do_DB|Binlog_Ignore_DB|Executed_Gtid_Set|
+------------------+----------+--------------+------------------+-------------------+
|mysql-bin.000001|   120|        |                |                 |
+------------------+----------+--------------+------------------+-------------------+
1rowinset(0.00sec)
```

如果file中binlog文件不为 mysql-bin.000001 可以重置mysql

```bash
mysql> reset master;
```

查看canal配置文件

```bash
vim /usr/local/canal/conf/example/meta.dat
```

找到对应的binlog信息更改一致即可

```bash
"journalName":"mysql-bin.000001","position":120,"
```

注意：如果不一致，可能导致以下错误

```bash
2019-06-1719:35:20.918[NewI/Oserverworker#1-2]ERROR
c.a.otter.canal.server.netty.handler.SessionHandler-something goes wrong with channel:[id:0x7f2e9be3,/192.168.200.56:52225=>/192.168.200.128:11111],
exception=java.io.IOException:Connectionresetbypeer
```

（4）启动服务：

```bash
[root@localhost canal]# ./bin/startup.sh
```

（5）查看日志：

```bash
cat /usr/local/canal/logs/canal/canal.log
```

  <img :src="$withBase('/javaUtils/31.png')" alt="foo">
这样就表示启动成功了。

### 1.3 数据监控微服务

当用户执行数据库的操作的时候，binlog 日志会被canal捕获到，并解析出数据。我们就可以将解析出
来的数据进行相应的逻辑处理。
我们这里使用的一个开源的项目，它实现了springboot与canal的集成。比原生的canal更加优雅。
<https://github.com/chenqian56131/spring-boot-starter-canal>
使用前需要将starter-canal安装到本地仓库。
我们可以参照它提供的canal-test，进行代码实现。

#### 1.3.1 微服务搭建

（1）创建工程模块xxx_canal，pom引入依赖

```xml
<dependency>
  <groupId>com.xpand</groupId>
  <artifactId>starter-canal</artifactId>
  <version>0.0.1-SNAPSHOT</version>
</dependency>
```

（2）创建包com.xxx.canal ，包下创建启动类

```java
@SpringBootApplication
@EnableCanalClient//声明当前的服务是canal的客户端
publicclassCanalApplication{
  publicstaticvoidmain(String[]args){
    SpringApplication.run(CanalApplication.class,args);
  }
}
```

（3）添加配置文件application.properties

```properties
canal.client.instances.example.host=192.168.200.128 canal.client.instances.example.port=11111
canal.client.instances.example.batchSize=1000
spring.rabbitmq.host=192.168.200.128
```

（4）创建com.xxx.canal.listener包，包下创建类

```java
@CanalEventListener//声明当前的类是canal的监听类
public class BusinessListener{
  @Autowired
  private RabbitTemplate rabbitTemplate;
  /**
  *
  *@parameventType当前操作数据库的类型
  *@paramrowData当前操作数据库的数据
  */
  @ListenPoint(schema="xxx_business",table="tb_ad")
  publicvoidadUpdate(CanalEntry.EventTypeeventType,CanalEntry.RowData rowData){
    System.out.println("广告表数据发生改变");
    //获取改变之前的数据
    rowData.getBeforeColumnsList().forEach((c)->System.out.println("改变前的数据:"+c.getName()+"::"+c.getValue()));

    //获取改变之后的数据
    rowData.getAfterColumnsList().forEach((c)->System.out.println("改变之后的数据:"+c.getName()+"::"+c.getValue()));
  }
}
```

测试：启动数据监控微服务，修改数据库的数据表，观察控制台输出。

## 2. 首页广告缓存更新

### 2.1 需求分析

当tb_ad（广告）表的数据发生变化时，更新redis中的广告数据。

### 2.2 实现思路

（1）修改数据监控微服务，监控tb_ad表，当发生增删改操作时，提取position值（广告位置key），发送到rabbitmq
（2）从rabbitmq中提取消息，通过OkHttpClient调用ad_update来实现对广告缓存数据的更新。
  <img :src="$withBase('/javaUtils/32.png')" alt="foo">
  
### 2.3 代码实现
#### 2.3.1 发送消息到mq
**（1）在rabbitmq管理后台创建队列 ad_update_queue ，用于接收广告更新通知**
  <img :src="$withBase('/javaUtils/33.png')" alt="foo">
**（2）引入rabbitmq起步依赖**

```xml
<dependency>
	<groupId>org.springframework.amqp</groupId>
	<artifactId>spring-rabbit</artifactId>
</dependency>
```

**（3）配置文件application.properties 添加内容**
```bash
spring.rabbitmq.host=192.168.200.128
```

**（4）新增rabbitMQ配置类**

```java
@Configuration
publicclassRabbitMQConfig{
  //定义队列名称
  publicstaticfinalStringAD_UPDATE_QUEUE="ad_update_queue"; 
  //声明队列
  @Bean
  publicQueuequeue(){
	    returnnewQueue(AD_UPDATE_QUEUE);
  }
}
```

**（5）修改BusinessListener类**

```java
@CanalEventListener//声明当前的类是canal的监听类
public class BusinessListener{
  @Autowired
  privateRabbitTemplaterabbitTemplate;
  /**
  *
  *@parameventType当前操作数据库的类型
  *@paramrowData当前操作数据库的数据
  */
  @ListenPoint(schema="xxx_business",table="tb_ad")
  public void adUpdate(CanalEntry.EventTypeeventType,CanalEntry.RowData rowData){
    System.out.println("广告表数据发生改变");
    	for(CanalEntry.Columncolumn:rowData.getAfterColumnsList()){
      	if("position".equals(column.getName())){
        	System.out.println("发送最新的数据到MQ:"+column.getValue());
        	//发送消息
        	rabbitTemplate.convertAndSend("",
				RabbitMQConfig.AD_UPDATE_QUEUE,column.getValue());
			}
		}
	}
}
```

**（6）测试，运行数据监控微服务canal，新增、修改或删除tb_ad表数据，修改后观察控制台输出和rabbitmq管理界面中ad_update_queue是否接收到消息**
  <img :src="$withBase('/javaUtils/34.png')" alt="foo">

#### 2.3.2 从mq中提取消息执行更新

**（1）xxx_service_business工程pom.xml引入依赖**
```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```

**（2）在spring节点下添加rabbitmq配置**
```bash
host:192.168.200.128
```

**（3）com.xxx.business包下创建listener包，包下创建类**
```java
@Component
publicclassAdListener{
  @RabbitListener(queues="ad_update_queue")
  publicvoidreceiveMessage(Stringmessage){
    System.out.println("接收到的消息为:"+message);
    //发起远程调用
    OkHttpClientokHttpClient=newOkHttpClient();
    Stringurl="http://192.168.200.128/ad_update?position="+message;
	Requestrequest=newRequest.Builder().url(url).build();
    Callcall=okHttpClient.newCall(request);
    call.enqueue(newCallback(){
      @Override
      publicvoidonFailure(Callcall,IOExceptione){
        //请求失败
        e.printStackTrace();
	  }
	  
	  @Override
      publicvoidonResponse(Callcall,Responseresponse)throws IOException{
        //请求成功
        System.out.println("请求成功:"+response.message());
	  }
	})
  }
}
```
** （4）测试，启动eureka和business微服务，观察控制台输出和数据同步效果。**

具体代码详见git仓库 xxx_canal 服务 与 xxx_service_business 服务

## 3. 商品上架索引库导入数据

### 3.1 需求分析

商品上架将商品的sku列表导入或更新索引库。

### 3.2 实现思路
（1）在数据监控微服务中监控tb_spu表的数据，当tb_spu发生更改且is_marketable为1时，表示商品上架，将spu的id发送到rabbitmq。
（2）在rabbitmq管理后台创建商品上架交换器（fanout）。使用分列模式的交换器是考虑商品上架会有很多种逻辑需要处理，导入索引库只是其中一项，另外还有商品详细页静态化等操作。这样我们可以创建导入索引库的队列和商品详细页静态化队列并与商品上架交换器进行绑定。
（3）搜索微服务从rabbitmq的导入索引库的队列中提取spu的id，通过feign调用商品微服务得到sku的列表，并且通过调用elasticsearch的高级restAPI 将sku列表导入到索引库。

  <img :src="$withBase('/javaUtils/35.png')" alt="foo">
  
### 3.3 代码实现

#### 3.3.1 发送消息到mq
（1）在rabbitmq后台创建交换器goods_up_exchange（类型为fanout），创建队列search_add_queue绑定交换器goods_up_exchange,更新rabbitmq配置类
（2）数据监控微服务新增SpuListener

#### 3.3.2 索引库环境准备
搭设虚拟机elasticsearch镜像

#### 3.3.3 创建索引结构
新建xxx_service_search_api模块,并添加索引库实体类

(1) 添加依赖

#### 3.3.4 搜索微服务搭建
（1）创建xxx_service_search模块，pom.xml引入依赖
（2）xxx_service_search的application.yml
（3）创建com.xxx包，包下创建SearchApplication
(4) 将rabbitmq配置类放入该模块下

#### 3.3.5 商品服务查询商品信息
(1) SkuController新增方法
(2) xxx_service_goods_api新增common依赖
(3) 定义skuFegin接口

#### 3.3.6 搜索微服务批量导入数据逻辑
(1) 创建 com.xxx.search.dao包,并新增ESManagerMapper接口
(2) 创建 com.xxx.search.service包，包下创建接口EsManagerService
(3) 创建com.xxx.search.controller.定义ESManagerController

#### 3.3.7 接收mq消息执行导入

#### 3.3.8 测试
（1）启动环境 eureka 、elasticsearch 、canal服务端、canal数据监控微服务、rabbitmq
（2）启动商品微服务、搜索微服务
（3）修改tb_spu某记录的is_marketable值为1，观察控制台输出，启动kibana查询记录是否导入成功

## 4. 商品下架索引库删除数据

### 4.1 需求分析
商品下架后将商品从索引库中移除。

### 4.2 实现思路
与商品上架的实现思路非常类似。
（1）在数据监控微服务中监控tb_spu表的数据，当tb_spu发生更改且is_marketable为0时，表示商品
下架，将spu的id发送到rabbitmq。
（2）在rabbitmq管理后台创建商品下架交换器（fanout）。使用分列模式的交换器是考虑商品下架会
有很多种逻辑需要处理，索引库删除数据只是其中一项，另外还有删除商品详细页等操作。
（3）搜索微服务从rabbitmq的的队列中提取spu的id，通过调用elasticsearch的高级restAPI 将相关的
sku列表从索引库删除。
  <img :src="$withBase('/javaUtils/36.png')" alt="foo">
  
### 4.3 代码实现

#### 4.3.1 创建交换器与队列
完成商品下架交换器的创建，队列的创建与绑定，将spuId发送消息到mq
商品下架交换器：goods_down_exchange
队列名称： search_delete_queue
绑定 search_delete_queue到goods_down_exchange

#### 4.3.2 canal监听下架
修改xxx_canal的SpuListener的spuUpdate方法，添加以下代码

#### 4.3.3 根据spuId删除索引数据
编写业务逻辑，实现根据spuId删除索引库数据的方法。
（1）ESManagerService新增方法定义
（2）ESManagerServiceImpl实现方法

#### 4.3.4 接收mq消息，执行索引库删除
从rabbitmq中提取消息，调动根据spuId删除索引库数据的方法 xxx_service_search新增监听类
具体代码详见git仓库 xxx_canal 服务 与 xxx_service_business 服务