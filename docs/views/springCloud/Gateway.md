# Gateway (网关)

Gateway:是Spring官方基于Spring Spring Boot和Project Reactor等技术开发的网关，Gateway旨在为微服务架构提供一种简单而有效的统一的API路由管理方式。Gateway作为Spring Cloud生态系中的网关，目标是替代ZUUL，其不仅提供统一的路由方式，并且基于Filter链的方式提供了关基本的功能，例如：安全，监控/埋点，和限流等。

## Route

- 名字
- 地址
- 谓词
- 过滤器

（名字 + 地址） + 谓词的映射规则  = 集合

  <img :src="$withBase('/Gateway/1.png')" alt="foo">
  <img :src="$withBase('/Gateway/0.png')" alt="foo">
  <img :src="$withBase('/Gateway/2.png')" alt="foo">
  <img :src="$withBase('/Gateway/3.png')" alt="foo">
  <img :src="$withBase('/Gateway/4.png')" alt="foo">
