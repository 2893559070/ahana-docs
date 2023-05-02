import{_ as t,p as d,q as r,a1 as e}from"./framework-5866ffd3.js";const a={},o=e('<h1 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h1><ul><li>Dockerfile</li></ul><table><thead><tr><th>关键字</th><th>作用</th><th>备注</th></tr></thead><tbody><tr><td>FROM</td><td>指定父镜像</td><td>指定 dockerfile 基于那个 image 构建</td></tr><tr><td>MAINTAINER</td><td>作者信息</td><td>用来标明这个 dockerfile 谁写的</td></tr><tr><td>LABEL</td><td>标签</td><td>用来标明 dockerfile 的标签 可以使用 Label 代替 Maintainer 最终都是在 docker image 基本信息中可以查看</td></tr><tr><td>RUN</td><td>执行命令</td><td>执行一段命令 默认是/bin/sh 格式: RUN command 或者 RUN [&quot;command&quot; , &quot;param1&quot;,&quot;param2&quot;]</td></tr><tr><td>CMD</td><td>容器启动命令</td><td>提供启动容器时候的默认命令 和 ENTRYPOINT 配合使用.格式 CMD command param1 param2 或者 CMD [&quot;command&quot; , &quot;param1&quot;,&quot;param2&quot;]</td></tr><tr><td>ENTRYPOINT</td><td>入口</td><td>一般在制作一些执行就关闭的容器中会使用</td></tr><tr><td>COPY</td><td>复制文件</td><td>build 的时候复制文件到 image 中</td></tr><tr><td>ADD</td><td>添加文件</td><td>build 的时候添加文件到 image 中 不仅仅局限于当前 build 上下文 可以来源于远程服务</td></tr><tr><td>ENV</td><td>环境变量</td><td>指定 build 时候的环境变量 可以在启动的容器的时候 通过-e 覆盖 格式 ENV name=value</td></tr><tr><td>ARG</td><td>构建参数</td><td>构建参数 只在构建的时候使用的参数 如果有 ENV 那么 ENV 的相同名字的值始终覆盖 arg 的参数</td></tr><tr><td>VOLUME</td><td>定义外部可以挂载的数据卷</td><td>指定 build 的 image 那些目录可以启动的时候挂载到文件系统中 启动容器的时候使用 -v 绑定 格式 VOLUME [&quot;目录&quot;]</td></tr><tr><td>EXPOSE</td><td>暴露端口</td><td>定义容器运行的时候监听的端口 启动容器的使用-p 来绑定暴露端口 格式: EXPOSE 8080 或者 EXPOSE 8080/udp</td></tr><tr><td>WORKDIR</td><td>工作目录</td><td>指定容器内部的工作目录 如果没有创建则自动创建 如果指定/ 使用的是绝对地址 如果不是/开头那么是在上一条 workdir 的路径的相对路径</td></tr><tr><td>USER</td><td>指定执行用户</td><td>指定 build 或者启动的时候 用户 在 RUN CMD ENTRYPONT 执行的时候的用户</td></tr><tr><td>HEALTHCHECK</td><td>健康检查</td><td>指定监测当前容器的健康监测的命令 基本上没用 因为很多时候 应用本身有健康监测机制</td></tr><tr><td>ONBUILD</td><td>触发器</td><td>当存在 ONBUILD 关键字的镜像作为基础镜像的时候 当执行 FROM 完成之后 会执行 ONBUILD 的命令 但是不影响当前镜像 用处也不怎么大</td></tr><tr><td>STOPSIGNAL</td><td>发送信号量到宿主机</td><td>该 STOPSIGNAL 指令设置将发送到容器的系统调用信号以退出。</td></tr><tr><td>SHELL</td><td>指定执行脚本的 shell</td><td>指定 RUN CMD ENTRYPOINT 执行命令的时候 使用的 shell</td></tr></tbody></table>',3),i=[o];function l(c,u){return d(),r("div",null,i)}const N=t(a,[["render",l],["__file","dockerfile.html.vue"]]);export{N as default};