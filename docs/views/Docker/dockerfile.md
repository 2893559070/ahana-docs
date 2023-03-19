# Dockerfile

- Dockerfile

| 关键字      | 作用                     | 备注                                                                                                                          |
| ----------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| FROM        | 指定父镜像               | 指定 dockerfile 基于那个 image 构建                                                                                           |
| MAINTAINER  | 作者信息                 | 用来标明这个 dockerfile 谁写的                                                                                                |
| LABEL       | 标签                     | 用来标明 dockerfile 的标签 可以使用 Label 代替 Maintainer 最终都是在 docker image 基本信息中可以查看                          |
| RUN         | 执行命令                 | 执行一段命令 默认是/bin/sh 格式: RUN command 或者 RUN ["command" , "param1","param2"]                                         |
| CMD         | 容器启动命令             | 提供启动容器时候的默认命令 和 ENTRYPOINT 配合使用.格式 CMD command param1 param2 或者 CMD ["command" , "param1","param2"]     |
| ENTRYPOINT  | 入口                     | 一般在制作一些执行就关闭的容器中会使用                                                                                        |
| COPY        | 复制文件                 | build 的时候复制文件到 image 中                                                                                               |
| ADD         | 添加文件                 | build 的时候添加文件到 image 中 不仅仅局限于当前 build 上下文 可以来源于远程服务                                              |
| ENV         | 环境变量                 | 指定 build 时候的环境变量 可以在启动的容器的时候 通过-e 覆盖 格式 ENV name=value                                              |
| ARG         | 构建参数                 | 构建参数 只在构建的时候使用的参数 如果有 ENV 那么 ENV 的相同名字的值始终覆盖 arg 的参数                                       |
| VOLUME      | 定义外部可以挂载的数据卷 | 指定 build 的 image 那些目录可以启动的时候挂载到文件系统中 启动容器的时候使用 -v 绑定 格式 VOLUME ["目录"]                    |
| EXPOSE      | 暴露端口                 | 定义容器运行的时候监听的端口 启动容器的使用-p 来绑定暴露端口 格式: EXPOSE 8080 或者 EXPOSE 8080/udp                           |
| WORKDIR     | 工作目录                 | 指定容器内部的工作目录 如果没有创建则自动创建 如果指定/ 使用的是绝对地址 如果不是/开头那么是在上一条 workdir 的路径的相对路径 |
| USER        | 指定执行用户             | 指定 build 或者启动的时候 用户 在 RUN CMD ENTRYPONT 执行的时候的用户                                                          |
| HEALTHCHECK | 健康检查                 | 指定监测当前容器的健康监测的命令 基本上没用 因为很多时候 应用本身有健康监测机制                                               |
| ONBUILD     | 触发器                   | 当存在 ONBUILD 关键字的镜像作为基础镜像的时候 当执行 FROM 完成之后 会执行 ONBUILD 的命令 但是不影响当前镜像 用处也不怎么大    |
| STOPSIGNAL  | 发送信号量到宿主机       | 该 STOPSIGNAL 指令设置将发送到容器的系统调用信号以退出。                                                                      |
| SHELL       | 指定执行脚本的 shell     | 指定 RUN CMD ENTRYPOINT 执行命令的时候 使用的 shell                                                                           |
