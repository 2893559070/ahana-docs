# spring boot

springboot

- 是什么
- 配置如何编写 yaml
- 自动装配原理：重要，谈资
- 集成web开发：业务的核心
- 集成 数据库 Druid
- 分布式开发：Dubbo + zookeeper
- swagger：接口文档
- 任务调度
- SpringSecurity：Shiro  （aop 横切）
- linux部署

springcloud

- 微服务
- springcloud入门
- Restful风格
- Eureka
- Ribbon
- Feign
- HyStrix
- Zuul路由网关
- springCloud config ： 操作git

banner 自定义启动输出

```xml
  - resources
    - banner.txt
```

## 原理初探

- pom.xml
  - spring-boot-dependencies : 核心依赖在父工程中
  - 我们在写或者引入一些springboot依赖的时候，不需要指定版本，就因为有这些版本仓库
  - 启动器
    - 就是springboot的启动场景

      ```xml
        <artfactId>spring-boot-starter</artfactId>
      ```

    - 比如spring-boot-starter-web，他就会帮我们自动导入web环境所有的依赖
    - springboot会将所有的功能场景，都变成一个个的启动器
    - 我们要使用什么功能，就只需要找到对应的启动器就可以了 starter

- 主程序
  - 注解
    - @SpringBootApplication
      标注这个类是一个springboot的应用

      ```java
        @SpringBootConfiguration // springboot的配置
          @Configuration // spring配置类
          @Component // 说明这也是一个spring的组件
        
        @EnableAutoConfiguration // 自动配置
          @AutoConfigurationPackage // 自动配置包
            @Import(AutoConfigurationPackafes.Registrar.class) // 自动配置包注册
          @Import(AutoConfigurationImportSelector.class) // 自动配置导入选择
            List<String> configuratios = getCandidateConfigurations(){}
      ```

    <img :src="$withBase('/spring5/6-1.png')" alt="foo">
    <img :src="$withBase('/spring5/6-1-1.png')" alt="foo">

  - SpringApplication.run()
    将springboot应用启动
