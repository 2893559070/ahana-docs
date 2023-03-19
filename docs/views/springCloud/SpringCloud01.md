# SpringCloud01

## 微服务架构

  <img :src="$withBase('/springcloud/01.png')" alt="foo">

"微服务”一词源于 Martin Fowler的名为 Microservices 的博文,可以在他的官方博客上找到<http://martinfowler.com/articles/microservices.html>
微服务是系统架构上的一种设计风格,它的主旨是将一个原本独立的系统拆分成多个小型服务,这些小型服务都在各自独立的进程中运行,服务之间一般通过 HTTP 的 RESTfuL API 进行通信协作。
被拆分成的每一个小型服务都围绕着系统中的某一项或些耦合度较高的业务功能进行构建,并且每个服务都维护着白身的数据存储、业务开发自动化测试案例以及独立部署机制。
由于有了轻量级的通信协作基础,所以这些微服务可以使用不同的语言来编写。

  <img :src="$withBase('/springcloud/02.png')" alt="foo">

### 走进 Spring Cloud

Spring Cloud 是一系列框架的有序集合。
Spring Cloud 并没有重复制造轮子，它只是将目前各家公司开发的比较成熟、经得起实际考验的服务框架组合起来。
通过 Spring Boot 风格进行再封装屏蔽掉了复杂的配置和实现原理，最终给开发者留出了一套简单易懂、易部署和易维护的分布式系统开发工具包。
它利用Spring Boot的开发便利性巧妙地简化了分布式系统基础设施的开发，如服务发现注册、配置中心、消息总线、负载均衡、 断路器、数据监控等，都可以用Spring Boot的开发风格做到一键启动和部署。
Spring Cloud项目官方网址：<https://spring.io/projects/spring-cloud>

Spring Cloud 版本命名方式采用了伦敦地铁站的名称，同时根据字母表的顺序来对应版本时间顺序，比如：最早的Release版本：Angel，第二个Release版本：Brixton，然后是Camden、Dalston、Edgware，Finchley，Greenwich，Hoxton...

### Spring Cloud 与 Dubbo 对比

- Spring Cloud  与 Dubbo 都是实现微服务有效的工具。
- Dubbo 只是实现了服务治理，而 Spring Cloud 子项目分别覆盖了微服务架构下的众多部件。
- Dubbo 使用 RPC 通讯协议，Spring Cloud 使用 RESTful 完成通信，Dubbo 效率略高于 Spring Cloud。
  <img :src="$withBase('/springcloud/03.png')" alt="foo">

### 小结

微服务就是将项目的各个模块拆分为可独立运行、部署、测试的架构设计风格。
Spring 公司将其他公司中微服务架构常用的组件整合起来，并使用 SpringBoot 简化其开发、配置。称为 Spring Cloud
Spring Cloud  与 Dubbo都是实现微服务有效的工具。Dubbo 性能更好，而 Spring Cloud 功能更全面。

## Spring Cloud 服务治理

### Eureka

- Eureka 是 Netflix 公司开源的一个服务注册与发现的组件 。
- Eureka 和其他 Netflix 公司的服务组件（例如负载均衡、熔断器、网关等） 一起，被 Spring Cloud 社区整合为Spring-Cloud-Netflix 模块。
- Eureka 包含两个组件：Eureka Server (注册中心) 和 Eureka Client (服务提供者、服务消费者)。
  <img :src="$withBase('/springcloud/04.png')" alt="foo">

#### Eureka – 搭建服务

1. 搭建 Provider  和 Consumer 服务。
2. 使用 RestTemplate 完成远程调用。

- Spring提供的一种简单便捷的模板类，用于在 java 代码里访问 restful 服务。
- 其功能与 HttpClient 类似，但是 RestTemplate 实现更优雅，使用更方便。

3. 搭建 Eureka Server 服务。

- 创建 eureka-server 模块
- 引入 SpringCloud 和 euraka-server 相关依赖
- 完成 Eureka Server 相关配置
- 启动该模块

```xml
<!-- 父工程 -->
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.example</groupId>
    <artifactId>Eureka</artifactId>
    <packaging>pom</packaging>
    <version>1.0-SNAPSHOT</version>
    <modules>
        <module>eureka-provider</module>
        <module>eureka-consumer</module>
        <module>eureka-server</module>
    </modules>

    <!--引入一个爹 spring-boot环境-->
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.1.0.RELEASE</version>
        <relativePath/>
    </parent>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        <java.version>1.8</java.version>
        <!--spring cloud 版本-->
        <spring-cloud.version>Greenwich.RELEASE</spring-cloud.version>
    </properties>

    <!--引入Spring Cloud 依赖-->
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-dependencies</artifactId>
                <version>${spring-cloud.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>

</project>

<!-- eureka-server -->
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>Eureka</artifactId>
        <groupId>org.example</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <modelVersion>4.0.0</modelVersion>

    <artifactId>eureka-server</artifactId>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!-- eureka-server -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
        </dependency>
    </dependencies>
</project>
```

- EurekaApp.java

```java
@SpringBootApplication
/** 启用 EurekaServer **/
@EnableEurekaServer
public class EurekaApp {
    public static void main(String[] args) {
        SpringApplication.run(EurekaApp.class, args);
    }
}
```

- application.yml

```yml
server:
  port: 8761 # eureka默认服务端口

# eureka 配置
eureka:
  instance:
    hostname: localhost # 主机名
  dashboard:
    path: /
    enabled: true

  client:
    service-url:
      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka # eureka服务端地址，与客户端通信
    register-with-eureka: false # 是否将自己的路径，注册到eureka上： server 不需要， provider 需要
    fetch-registry: false # 是否需要从eureka中抓取路径： server 不需要， client 需要
```

4. 改造 Provider  和 Consumer 称为 Eureka Client。

- 引 eureka-client 相关依赖
- 完成 eureka client 相关配置
- 启动 测试

```xml
<!-- Provider Consumer -->
  <dependencies>
      <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-web</artifactId>
      </dependency>
      
      <!-- eureka-client -->
      <dependency>
          <groupId>org.springframework.cloud</groupId>
          <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
      </dependency>
  </dependencies>
```

- ProviderApp.java

```java
@SpringBootApplication
@EnableEurekaClient
public class ProviderApp {
    public static void main(String[] args) {
        SpringApplication.run(ProviderApp.class, args);
    }
}
```

- ConsumerApp.java

```java
@SpringBootApplication
@EnableEurekaClient
@EnableDiscoveryClient
public class ConsumerApp {
    public static void main(String[] args) {
        SpringApplication.run(ConsumerApp.class, args);
    }
}
```

- Provider application.yml

```yml
server:
  port: 8000

# eureka 配置
eureka:
  instance:
    hostname: localhost # 主机名
    prefer-ip-address: true # 将当前实例的ip注册到 eurekaServer中，默认是false
    ip-address: 127.0.0.1 # 设置当前实例ip
    instance-id: ${eureka.instance.ip-address}:${spring.application.name}:${server.port} # 设置web控制台显示的实例id
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka # eureka服务端地址，与客户端通信
    register-with-eureka: true # 是否将自己的路径，注册到eureka上： server 不需要， provider 需要
    fetch-registry: true # 是否需要从eureka中抓取路径： server 不需要， client 需要

spring:
  application:
    name: eureka-provider # 应用名称，可以获取访问路径
```

- Consumer application.yml

```yml
server:
  port: 9000

# eureka 配置
eureka:
  instance:
    hostname: localhost # 主机名

  client:
    service-url:
      defaultZone: http://localhost:8761/eureka # eureka服务端地址，与客户端通信
    register-with-eureka: true # 是否将自己的路径，注册到eureka上： server 不需要， provider 需要
    fetch-registry: true # 是否需要从eureka中抓取路径： server 不需要， client 需要

spring:
  application:
    name: eureka-consumer # 应用名称，可以获取访问路径
```

5. Consumer 服务 通过从 Eureka Server 中抓取 Provider 地址 完成 远程调用
  <img :src="$withBase('/springcloud/05.png')" alt="foo">

```java
@RestController
@RequestMapping("/order")
public class OrderController {
  @Autowired
  private DiscoveryClient discoveryClient;

  @Autowired
  private RestTemplate restTemplate;

  @RequestMapping("/goods/{id}")
  public Goods findGoodById(@PathVariable("id") int id) {
      /**
        * 动态获取 EurekaServer 中的 provider的ip和端口
        * 1. 注入 DiscoveryClient 对象, 激活 （入口配置）
        * 2. 调用方法
        * */

      List<ServiceInstance> instances = discoveryClient.getInstances("EUREKA-PROVIDER");

      // 判断集合是否有数据
      if(instances.size() <= 0 || instances == null) {
          return null;
      }
      ServiceInstance instance = instances.get(0);
      String host = instance.getHost();
      int port = instance.getPort();
      String url = "http://"+ host +":" + port +"/goods/findOne/" + id;
      Goods goods = restTemplate.getForObject(url, Goods.class);
      return goods;
  }
}
```

#### Eureka 属性

eureka 一共有4部分 配置

- server : eureka 的服务端配置
- client : eureka 的客户端配置
- instance : eureka 的实例配置
- dashboard : eureka 的web控制台配置

- eureka-server application.yml

```yml
server:
  port: 8761 # eureka默认服务端口

# eureka 配置
eureka:
  instance:
    hostname: localhost # 主机名
  dashboard:
    path: / # 设置eureka web控制台默认访问路径
    enabled: true # 是否启用eureka web控制台

  client:
    service-url:
      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka # eureka服务端地址，与客户端通信
    register-with-eureka: false # 是否将自己的路径，注册到eureka上： server 不需要， provider 需要
    fetch-registry: false # 是否需要从eureka中抓取路径： server 不需要， client 需要
+ server:
+   enable-self-preservation: false # 关闭自我保护机制 关闭后可以删除不可用服务
+   eviction-interval-timer-in-ms: 3000 # 检测服务时间间隔
```

- eureka-provider application.yml

```yml
server:
  port: 8000

# eureka 配置
eureka:
  instance:
    hostname: localhost # 主机名
    prefer-ip-address: true # 将当前实例的ip注册到 eurekaServer中，默认是false
    ip-address: 127.0.0.1 # 设置当前实例ip
    instance-id: ${eureka.instance.ip-address}:${spring.application.name}:${server.port} # 设置web控制台显示的实例id
+   lease-renewal-interval-in-seconds: 3 # 3秒发一次心跳包
+   lease-expiration-duration-in-seconds: 9 # 9秒没有发心跳包，就把我干掉

  client:
    service-url:
      defaultZone: http://localhost:8761/eureka # eureka服务端地址，与客户端通信
    register-with-eureka: true # 是否将自己的路径，注册到eureka上： server 不需要， provider 需要
    fetch-registry: true # 是否需要从eureka中抓取路径： server 不需要， client 需要

spring:
  application:
    name: eureka-provider # 应用名称，可以获取访问路径
```

#### Eureka 高可用

1. 准备两个Eureka Server
2. 分别进行配置，相互注册
3. Eureka Client 分别注册到这两个 Eureka Server中

  <img :src="$withBase('/springcloud/06.png')" alt="foo">

- eureka-server01 application.yml

```yml
server:
  port: 8762 # eureka默认服务端口

# eureka 配置
eureka:
  instance:
    hostname: eureka-server01 # 主机名

  client:
    service-url:
      defaultZone: http://eureka-server02:8763/eureka # eureka服务端地址，与eureka-server02客户端通信
    register-with-eureka: false # 是否将自己的路径，注册到eureka上： server 不需要， provider 需要
    fetch-registry: false # 是否需要从eureka中抓取路径： server 不需要， client 需要
  server:
    enable-self-preservation: false # 关闭自我保护机制
    eviction-interval-timer-in-ms: 3000 # 检测服务时间间隔

spring:
  application:
    name: eureka-server-ha # 集群服务名（需要一样）
```

- eureka-server02 application.yml

```yml
server:
  port: 8763 # eureka默认服务端口

# eureka 配置
eureka:
  instance:
    hostname: eureka-server02 # 主机名

  client:
    service-url:
      defaultZone: http://eureka-server01:8762/eureka # eureka服务端地址，与eureka-server01客户端通信
    register-with-eureka: false # 是否将自己的路径，注册到eureka上： server 不需要， provider 需要
    fetch-registry: false # 是否需要从eureka中抓取路径： server 不需要， client 需要
  server:
    enable-self-preservation: false # 关闭自我保护机制
    eviction-interval-timer-in-ms: 3000 # 检测服务时间间隔

spring:
  application:
    name: eureka-server-ha # 集群服务名（需要一样）
```

- eureka-provider application.yml

```yml

# defaultZone: http://eureka-server02:8763/eureka,http://eureka-server01:8762/eureka # eureka服务端地址，与客户端通信
server:
  port: 8000

# eureka 配置
eureka:
  instance:
    hostname: localhost # 主机名
    prefer-ip-address: true # 将当前实例的ip注册到 eurekaServer中，默认是false
    ip-address: 127.0.0.1 # 设置当前实例ip
    instance-id: ${eureka.instance.ip-address}:${spring.application.name}:${server.port} # 设置web控制台显示的实例id
    lease-renewal-interval-in-seconds: 3 # 3秒发一次心跳包
    lease-expiration-duration-in-seconds: 9 # 9秒没有发心跳包，就把我干掉

  client:
    service-url:
      defaultZone: http://eureka-server02:8763/eureka,http://eureka-server01:8762/eureka # eureka服务端地址，与客户端通信
    register-with-eureka: true # 是否将自己的路径，注册到eureka上： server 不需要， provider 需要
    fetch-registry: true # 是否需要从eureka中抓取路径： server 不需要， client 需要

spring:
  application:
    name: eureka-provider # 应用名称，可以获取访问路径
```

- eureka-consumer application.yml

```yml

# defaultZone: http://eureka-server02:8763/eureka,http://eureka-server01:8762/eureka # eureka服务端地址，与客户端通信
server:
  port: 9000

# eureka 配置
eureka:
  instance:
    hostname: localhost # 主机名
    lease-renewal-interval-in-seconds: 3 # 3秒发一次心跳包
    lease-expiration-duration-in-seconds: 9 # 9秒没有发心跳包，就把我干掉

  client:
    service-url:
      defaultZone: http://eureka-server02:8763/eureka,http://eureka-server01:8762/eureka # eureka服务端地址，与客户端通信
    register-with-eureka: true # 是否将自己的路径，注册到eureka上： server 不需要， provider 需要
    fetch-registry: true # 是否需要从eureka中抓取路径： server 不需要， client 需要

spring:
  application:
    name: eureka-consumer # 应用名称，可以获取访问路径
```

### Consul

Consul 是由 HashiCorp 基于 Go 语言开发的，支持多数据中心，分布式高可用的服务发布和注册服务软件。
用于实现分布式系统的服务发现与配置。
使用起来也较 为简单。具有天然可移植性(支持Linux、windows和Mac OS X)；安装包仅包含一个可执行文件，方便部署 。
官网地址： <https://www.consul.io>

```cmd
.\consul.exe agent -dev # 打开 8500
```

  <img :src="$withBase('/springcloud/07.png')" alt="foo">

- consul-consumer

```yml
server:
  port: 9000
spring:
  cloud:
    consul:
      host: localhost # consul 服务端的ip
      port: 8500 # consul 服务端的 端口号
      discovery:
        service-name: ${spring.application.name} # 当前应用注册到consul的名称
        prefer-ip-address: true # 注册ip
  application:
    name: consul-consumer # 应用名称
```

- OrderController.java

```java
@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private DiscoveryClient discoveryClient;

    @RequestMapping("/goods/{id}")
    public Goods findGoodById(@PathVariable("id") int id) {

        System.out.println(id + "findGoodById");

        List<ServiceInstance> instances = discoveryClient.getInstances("consul-provider");

        if (instances == null || instances.size() == 0) {
            return null;
        }

        ServiceInstance instance = instances.get(0);

        String host = instance.getHost();
        int port = instance.getPort();

        String url = "http://"+ host +":" + port  +"/goods/findOne/" + id;
        System.out.println("url" + url);

        Goods goods = restTemplate.getForObject(url, Goods.class);

        return goods;
    }
}
```

- consul-provider

```yml
server:
  port: 8000
spring:
  cloud:
    consul:
      host: localhost # consul 服务端的ip
      port: 8500 # consul 服务端的 端口号
      discovery:
        service-name: ${spring.application.name} # 当前应用注册到consul的名称
        prefer-ip-address: true # 注册ip
  application:
    name: consul-provider # 应用名称
```

### Nacos

Nacos（Dynamic Naming and Configuration Service） 是阿里巴巴2018年7月开源的项目。
它专注于服务发现和配置管理领域 致力于帮助您发现、配置和管理微服务。Nacos 支持几乎所有主流类型的“服务”的发现、配置和管理。
一句话概括就是Nacos = Spring Cloud注册中心 + Spring Cloud配置中心。
官网：<https://nacos.io/>
下载地址： <https://github.com/alibaba/nacos/releases>

- nacos-provider application.yml

```yml
server:
  port: 8000

spring:
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848  # 配置nacos 服务端地址
  application:
    name: nacos-provider # 服务名
```

- nacos-consumer application.yml

```yml
server:
  port: 9000

spring:
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848  # 配置nacos 服务端地址
  application:
    name: nacos-consumer # 服务名
```

- ConsumerApp.java

```java
@SpringBootApplication
@EnableDiscoveryClient
public class ConsumerApp {
    public static void main(String[] args) {
        SpringApplication.run(ConsumerApp.class, args);
    }
}

```

- OrderController.java

```java
/**
 * 服务调用方
 * */

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private DiscoveryClient discoveryClient;

    @RequestMapping("/goods/{id}")
    public Goods findGoodById(@PathVariable("id") int id) {

        System.out.println(id + "findGoodById");

        List<ServiceInstance> instances = discoveryClient.getInstances("nacos-provider");

        if (instances == null || instances.size() == 0) {
            return null;
        }

        ServiceInstance instance = instances.get(0);

        String host = instance.getHost();
        int port = instance.getPort();

        String url = "http://"+ host +":"+ port +"/goods/findOne/" + id;
        System.out.println("url" + url);

        Goods goods = restTemplate.getForObject(url, Goods.class);

        return goods;
    }
}
```

## Ribbon 客户端负载均衡

### Ribbon 概述

Ribbon是 Netflix 提供的一个基于HTTP和TCP的客户端负载均衡工具。
Ribbon主要有两个功能：

  1. 简化远程调用
  2. 负载均衡

- 服务端负载均衡
  - 负载均衡算法在服务端
  - 由负载均衡器维护服务地址列表
- 客户端负载均衡
  - 负载均衡算法在客户端
  - 客户端维护服务地址列表

  <img :src="$withBase('/springcloud/08.png')" alt="foo">

Ribbon 可以与 简化 RestTemplate 的远程调用

- Ribbon 负责均衡策略：
  - 随机 ：RandomRule
  - 轮询 ：RoundRobinRule
  - 最小并发：BestAvailableRule
  - 过滤：AvailabilityFilteringRule
  - 响应时间：WeightedResponseTimeRule
  - 轮询重试：RetryRule
  - 性能可用性：ZoneAvoidanceRule

- 设置负载均衡策略
    1. 编码
    2. 配置

```yml
user-service: # 生产者服务名称  
  ribbon:
    NFloadBalancerRuleClassName: XxxRule # 负载均衡策略类
```

- server

```yml
server:
  port: 8761 # eureka默认服务端口

# eureka 配置
eureka:
  instance:
    hostname: localhost # 主机名
  dashboard:
    path: /
    enabled: true

  client:
    service-url:
      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka # eureka服务端地址，与客户端通信
    register-with-eureka: false # 是否将自己的路径，注册到eureka上： server 不需要， provider 需要
    fetch-registry: false # 是否需要从eureka中抓取路径： server 不需要， client 需要
  server:
    enable-self-preservation: false # 关闭自我保护机制
    eviction-interval-timer-in-ms: 3000 # 检测服务时间间隔
```

- provider

```yml
server:
  port: 8000

# eureka 配置
eureka:
  instance:
    hostname: localhost # 主机名
    prefer-ip-address: true # 将当前实例的ip注册到 eurekaServer中，默认是false
    ip-address: 127.0.0.1 # 设置当前实例ip
    instance-id: ${eureka.instance.ip-address}:${spring.application.name}:${server.port} # 设置web控制台显示的实例id
    lease-renewal-interval-in-seconds: 3 # 3秒发一次心跳包
    lease-expiration-duration-in-seconds: 9 # 9秒没有发心跳包，就把我干掉

  client:
    service-url:
#      defaultZone: http://eureka-server02:8763/eureka,http://eureka-server01:8762/eureka # eureka服务端地址，与客户端通信
      defaultZone: http://localhost:8761/eureka # eureka服务端地址，与客户端通信
    register-with-eureka: true # 是否将自己的路径，注册到eureka上： server 不需要， provider 需要
    fetch-registry: true # 是否需要从eureka中抓取路径： server 不需要， client 需要

spring:
  application:
    name: eureka-provider # 应用名称，可以获取访问路径
```

- consumer

```yml
server:
  port: 9000

# eureka 配置
eureka:
  instance:
    hostname: localhost # 主机名
    lease-renewal-interval-in-seconds: 3 # 3秒发一次心跳包
    lease-expiration-duration-in-seconds: 9 # 9秒没有发心跳包，就把我干掉

  client:
    service-url:
#      defaultZone: http://eureka-server02:8763/eureka,http://eureka-server01:8762/eureka # eureka服务端地址，与客户端通信
      defaultZone: http://localhost:8761/eureka # eureka服务端地址，与客户端通信
    register-with-eureka: true # 是否将自己的路径，注册到eureka上： server 不需要， provider 需要
    fetch-registry: true # 是否需要从eureka中抓取路径： server 不需要， client 需要

spring:
  application:
    name: eureka-consumer # 应用名称，可以获取访问路径

# 配置负载均衡策略 骚操作
EUREKA-PROVIDER:
  rabbon:
    NFloadBalancerRuleClassName: com.netflix.loadbalancer.RandomRule
```

- config/MyRule.java

```java
@Configuration
public class MyRule {

    @Bean
    public IRule rule() {
        return new RandomRule();
    }
}
```

- ConsumerApp.java

```java
@SpringBootApplication
@EnableEurekaClient
@EnableDiscoveryClient // 激活 DiscoveryClient
/***
 * 配置Ribbon的负载均衡策略
 *  1. name：设置服务提供方的应用名称
 *  2. configuration：设置负载均衡策略 , @RibbonClient(name = "EUREKA-PROVIDER", configuration = MyRule.class)
 */
@RibbonClient(name = "EUREKA-PROVIDER", configuration = MyRule.class)
public class ConsumerApp {
    public static void main(String[] args) {
        SpringApplication.run(ConsumerApp.class, args);
    }
}
```

- OrderController.java

```java
@RestController
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private RestTemplate restTemplate;
    @RequestMapping("/goods/{id}")
    public Object findGoodById(@PathVariable("id") int id) {
        System.out.println(id + "findGoodById");
        String url = "http://EUREKA-PROVIDER/goods/findOne/" + id;
        Goods goods = restTemplate.getForObject(url, Goods.class);
        return goods;
    }
}
```
