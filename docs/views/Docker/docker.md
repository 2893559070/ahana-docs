# Docker

## 初识 Docker

我们写的代码会接触到好几个环境：开发环境、测试环境以及生产环境：

  <img :src="$withBase('/docker/01.png')" alt="foo">
  <img :src="$withBase('/docker/02.png')" alt="foo">

### docker概念

Docker 是一个开源的应用容器引擎
诞生于 2013 年初，基于 Go 语言实现， dotCloud 公司出品（后改名为Docker Inc）
Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上。
容器是完全使用沙箱机制，相互隔离
容器性能开销极低。
Docker 从 17.03 版本之后分为 CE（Community Edition: 社区版） 和 EE（Enterprise Edition: 企业版）

### 安装docker

Docker可以运行在MAC、Windows、CentOS、UBUNTU等操作系统上，本课程基于CentOS 7 安装Docker。官网：<https://www.docker.com>

### docker架构

**镜像（Image）**：Docker 镜像（Image），就相当于是一个 root 文件系统。比如官方镜像 ubuntu:16.04 就包含了完整的一套 Ubuntu16.04 最小系统的 root 文件系统。

**容器（Container）**：镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的类和对象一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。

**仓库（Repository）**：仓库可看成一个代码控制中心，用来保存镜像。

  <img :src="$withBase('/docker/03.png')" alt="foo">

### 配置 Docker 镜像加速器

默认情况下，将来从docker hub（<https://hub.docker.com/）上下载docker>镜像，太慢。一般都会配置镜像加速器：

- USTC：中科大镜像加速器（<https://docker.mirrors.ustc.edu.cn>）
- 阿里云 （每个人的加速器都是不一样的）
    <img :src="$withBase('/docker/04.png')" alt="foo">
- 网易云
- 腾讯云

## Docker 命令

- Docker 进程相关命令
  - 启动docker服务
    - systemctl start docker
  - 停止docker服务
    - systemctl stop docker
  - 重启docker服务
    - systemctl restart docker
  - 查看docker服务状态
    - systemctl status docker
  - 开机启动docker服务
    - systemctl enable docker

- Docker 镜像相关命令
- 查看镜像
  - docker images
  - docker images –q # 查看所用镜像的id
- 搜索镜像 : 从网络中查找需要的镜像
  - docker search 镜像名称
- 拉取镜像 : 从Docker仓库下载镜像到本地，镜像名称格式为 名称:版本号，如果版本号不指定则是最新的版本。如果不知道镜像版本，可以去docker hub 搜索对应镜像查看。
  docker pull 镜像名称
- 删除镜像 : 删除本地镜像
  - docker rmi 镜像id # 删除指定本地镜像
  - docker rmi -f 镜像id
  - docker rmi `docker images -q`  # 删除所有本地镜像

- Docker 容器相关命令
- 查看容器
  - docker ps # 查看正在运行的容器
  - docker ps –a # 查看所有容器

- 创建容器
  - docker run 参数

  - docker run -it --name=c1 centos:7 /bin/bash
  - docker run -id --name=c1 centos:7

  参数说明：
  - -i：保持容器运行。通常与 -t 同时使用。加入it这两个参数后，容器创建后自动进入容器中，退出容器后，容器自动关闭。
  - -t：为容器重新分配一个伪输入终端，通常与 -i 同时使用。
  - -d：以守护（后台）模式运行容器。创建一个容器在后台运行，需要使用docker exec 进入容器。退出后，容器不会关闭。
  - -it 创建的容器一般称为交互式容器，-id 创建的容器一般称为守护式容器
  - --name：为创建的容器命名。

- 进入容器
  - docker exec 参数 # 退出容器，容器不会关闭
  - docker exec -it c2 /bin/bash
  - docker exec -it 容器ID /bin/bash

- 启动容器
  - docker start 容器名称

- 停止容器
  - docker stop 容器名称

- 删除容器 ：如果容器是运行状态则删除失败，需要停止容器才能删除
  - docker rm 容器名称

- 查看容器信息
  - docker inspect 容器名称

## Docker 容器数据卷

### 数据卷概念及作用

思考：

- Docker 容器删除后，在容器中产生的数据也会随之销毁
- Docker 容器和外部机器可以直接交换文件吗？
- 容器之间想要进行数据交互？

- 数据卷
  - 数据卷是宿主机中的一个目录或文件
  - 当容器目录和数据卷目录绑定后，对方的修改会立即同步
  - 一个数据卷可以被多个容器同时挂载
  - 一个容器也可以被挂载多个数据卷

- 数据卷作用
  - 容器数据持久化
  - 外部机器和容器间接通信
  - 容器之间数据交换

<img :src="$withBase('/docker/05.png')" alt="foo">

### 配置数据卷

创建启动容器时，使用 –v 参数 设置数据卷

```bash
  docker run ... –v 宿主机目录(文件):容器内目录(文件) ... 

  docker run -it --name=c1 -v /root/data:/root/data_container centos:7 /bin/bash
```

- 注意事项：
  1. 目录必须是绝对路径
  2. 如果目录不存在，会自动创建
  3. 可以挂载多个数据卷

<img :src="$withBase('/docker/06.png')" alt="foo">

### 配置数据卷容器

多容器进行数据交换

  1. 多个容器挂载同一个数据卷
  2. 数据卷容器

<img :src="$withBase('/docker/07.png')" alt="foo">

创建启动c3数据卷容器，使用 –v 参数 设置数据卷

```bash
docker run -it --name=c3 –v /volume centos:7 /bin/bash 
```

创建启动 c1 c2 容器，使用 –-volumes-from 参数 设置数据卷

```bash
docker run -it --name=c1 --volumes-from c3 centos:7 /bin/bash

docker run -it --name=c2 --volumes-from c3 centos:7 /bin/bash
```

### 数据卷小结

- 数据卷概念
  - 宿主机的一个目录或文件
- 数据卷作用
  - 容器数据持久化
  - 客户端和容器数据交换
  - 容器间数据交换
- 数据卷容器
  - 创建一个容器，挂载一个目录，让其他容器继承自该容器( --volume-from )。
  - 通过简单方式实现数据卷配置

## Docker 应用部署

容器内的网络服务和外部机器不能直接通信
外部机器和宿主机可以直接通信
宿主机和容器可以直接通信
当容器中的网络服务需要被外部机器访问时，可以将容器中提供服务的端口映射到宿主机的端口上。外部机器访问宿主机的该端口，从而间接访问容器的服务。
这种操作称为：端口映射

<img :src="$withBase('/docker/09.png')" alt="foo">

[docker应用部署](docker%E5%BA%94%E7%94%A8%E9%83%A8%E7%BD%B2.md)

## Dockerfile

### Docker 镜像原理

- 思考：
  - Docker 镜像本质是什么？
  - Docker 中一个centos镜像为什么只有200MB，而一个centos操作系统的iso文件要几个个G？
  - Docker 中一个tomcat镜像为什么有500MB，而一个tomcat安装包只有70多MB？

  <img :src="$withBase('/docker/10.png')" alt="foo">

- 操作系统组成部分：
  - 进程调度子系统
  - 进程通信子系统
  - 内存管理子系统
  - 设备管理子系统
  - 文件管理子系统
  - 网络通信子系统
  - 作业控制子系统

- Linux文件系统由bootfs和rootfs两部分组成
  - bootfs：包含bootloader（引导加载程序）和 kernel（内核）
  - rootfs： root文件系统，包含的就是典型 Linux 系统中的/dev，/proc，/bin，/etc等标准目录和文件
  - 不同的linux发行版，bootfs基本一样，而rootfs不同，如ubuntu，centos等

  <img :src="$withBase('/docker/11.png')" alt="foo">

- Docker镜像是由特殊的文件系统叠加而成
- 最底端是 bootfs，并使用宿主机的bootfs
- 第二层是 root文件系统rootfs,称为base image
- 然后再往上可以叠加其他的镜像文件
- 统一文件系统（Union File System）技术能够将不同的层整合成一个文件系统，为这些层提供了一个统一的视角，这样就隐藏了多层的存在，在用户的角度看来，只存在一个文件系统。
- 一个镜像可以放在另一个镜像的上面。位于下面的镜像称为父镜像，最底部的镜像成为基础镜像。
- 当从一个镜像启动容器时，Docker会在最顶层加载一个读写文件系统作为容器

  <img :src="$withBase('/docker/12.png')" alt="foo">

- 思考：
  1. Docker 镜像本质是什么？
    是一个分层文件系统
  2. Docker 中一个centos镜像为什么只有200MB，而一个centos操作系统的iso文件要几个个G？
    Centos的iso镜像文件包含bootfs和rootfs，而docker的centos镜像复用操作系统的bootfs，只有rootfs和其他镜像层
  3. Docker 中一个tomcat镜像为什么有500MB，而一个tomcat安装包只有70多MB？
    由于docker中镜像是分层的，tomcat虽然只有70多MB，但他需要依赖于父镜像和基础镜像，所有整个对外暴露的tomcat镜像大小500多MB

### 镜像制作

Docker 镜像如何制作？

- 容器转为镜像

  ```bash
  docker commit 容器id 镜像名称:版本号

  docker commit 4ae1c12213c7 docker_tomcat:1.0

  # -------

  docker save -o 压缩文件名称 镜像名称:版本号

  docker save -o docker_tomcat.tar docker_tomcat:1.0

  # -------

  docker load –i 压缩文件名称

  docker load -i docker_tomcat.tar
  ```

- dockerfile
  - Dockerfile 概念
    - Dockerfile 是一个文本文件
    - 包含了一条条的指令
    - 每一条指令构建一层，基于基础镜像，最终构建出一个新的镜像
    - 对于开发人员：可以为开发团队提供一个完全一致的开发环境
    - 对于测试人员：可以直接拿开发时所构建的镜像或者通过Dockerfile文件构建一个新的镜像开始工作了
    - 对于运维人员：在部署时，可以实现应用的无缝移植
  - Dochub网址：<https://hub.docker.com>

  <img :src="$withBase('/docker/13.png')" alt="foo">

  [Dockerfile 关键字](./dockerfile.md)

  - Dockerfile 案例
    - 需求 （centos7使用官方的，自己定义只是学习）
      - 自定义centos7镜像。要求：
        1. 默认登录路径为 /usr
        2. 可以使用vim
    - 实现步骤
      1. 定义父镜像：FROM centos:7
      2. 定义作者信息：MAINTAINER  itheima <itheima@itcast.cn>
      3. 执行安装vim命令： RUN yum install -y vim
      4. 定义默认的工作目录：WORKDIR /usr
      5. 定义容器启动执行的命令：CMD /bin/bash
      6. 通过dockerfile构建镜像：docker bulid –f dockerfile文件路径 –t 镜像名称:版本

      ```bash
        # 创建文件 将实现步骤添加到此文件中
        vim docker-centos-file

        # 执行文件创建自定义镜像
        docker build -f ./docker-centos-file -t han_centos:1 .
      ```

    - 需求
      - 定义dockerfile，发布springboot项目
    - 实现步骤
      - 定义父镜像：FROM java:8
      - 定义作者信息：MAINTAINER  itheima <itheima@itcast.cn>
      - 将jar包添加到容器： ADD springboot.jar app.jar
      - 定义容器启动执行的命令：CMD java–jar app.jar
      - 通过dockerfile构建镜像：docker bulid –f dockerfile文件路径 –t 镜像名称:版本

      ```bash
        # 创建文件 将实现步骤添加到此文件中
        vim springboot-dockerfile

        # 执行文件创建自定义镜像
        docker build -f ./springboot-dockerfile -t app:1 .

        # 执行镜像
        docker run -id -p 9000:8080 app:1
      ```

## Docker 服务编排

### 服务编排概念

微服务架构的应用系统中一般包含若干个微服务，每个微服务一般都会部署多个实例，如果每个微服务都要手动启停，维护的工作量会很大。

- 要从Dockerfile build image 或者去dockerhub拉取image
- 要创建多个container
- 要管理这些container（启动停止删除）

**服务编排:** 按照一定的业务规则批量管理容器

### Docker Compose 概述

Docker Compose是一个编排多容器分布式部署的工具，提供命令集管理容器化应用的完整开发周期，包括服务构建，启动和停止。使用步骤：

  1. 利用 Dockerfile 定义运行环境镜像
  2. 使用 docker-compose.yml 定义组成应用的各服务
  3. 运行 docker-compose up 启动应用

  <img :src="$withBase('/docker/14.png')" alt="foo">

  [DockerCompose](./docker-compose.md)

## Docker 私有仓库

Docker官方的Docker hub（<https://hub.docker.com>）是一个用于管理公共镜像的仓库，我们可以从上面拉取镜像 到本地，也可以把我们自己的镜像推送上去。但是，有时候我们的服务器无法访问互联网，或者你不希望将自己的镜 像放到公网当中，那么我们就需要搭建自己的私有仓库来存储和管理自己的镜像。

[私有仓库](./docker%20%E7%A7%81%E6%9C%89%E4%BB%93%E5%BA%93.md)

## Docker相关概念

### docker容器虚拟化 与 传统虚拟机比较

容器就是将软件打包成标准化单元，以用于开发、交付和部署。

- 容器镜像是轻量的、可执行的独立软件包 ，包含软件运行所需的所有内容：代码、运行时环境、系统工具、系统库和设置。
- 容器化软件在任何环境中都能够始终如一地运行。
- 容器赋予了软件独立性，使其免受外在环境差异的影响，从而有助于减少团队间在相同基础设施上运行不同软件时的冲突。

  <img :src="$withBase('/docker/15.png')" alt="foo">

- 相同：
  - 容器和虚拟机具有相似的资源隔离和分配优势
- 不同：
  - 容器虚拟化的是操作系统，虚拟机虚拟化的是硬件。
  - 传统虚拟机可以运行不同的操作系统，容器只能运行同一类型操作系统

  <img :src="$withBase('/docker/16.png')" alt="foo">
  <img :src="$withBase('/docker/17.png')" alt="foo">
