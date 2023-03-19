# RabbitMQ Windows 安装

## 一、安装Erlang

1. 双击资料中提供的 **otp_win64_22.1.exe** ，选择对应安装目录，一路下一步，完成安装。

2. 设置Erlang环境变量

   （1）新建ERLANG_HOME

  <img :src="$withBase('/springcloud/1585755246863.png')" alt="foo">

​ （2）修改环境变量path，增加Erlang变量至path，%ERLANG_HOME%\bin;

  <img :src="$withBase('/springcloud/1585755661841.png')" alt="foo">

​ （3）打开cmd命令框，输入erl，如果能看到版本号，则Erlang安装完成。

  <img :src="$withBase('/springcloud/1585755758154.png')" alt="foo">

## 二、安装RabbitMQ

1. 双击资料中提供的 **rabbitmq-server-3.7.7.exe** ，选择对应安装目录，一路下一步，完成安装。

2. 设置环境变量

   (1) 新建RABBITMQ_HOME

  <img :src="$withBase('/springcloud/1585756035623.png')" alt="foo">

​ （2）修改环境变量path，增加rabbitmq变量至path，%RABBITMQ_HOME%\sbin

  <img :src="$withBase('/springcloud/1585756139616.png')" alt="foo">

3. 查看信息。打开cmd命令框，切换至D:\Program Files\rabbitmq_server-3.7.7\sbin目录下，输入rabbitmqctl status

  <img :src="$withBase('/springcloud/1585756373625.png')" alt="foo">

4. 安装插件，命令：rabbitmq-plugins.bat enable rabbitmq_management。出现下面信息表示插件安装成功。

  <img :src="$withBase('/springcloud/1585756546472.png')" alt="foo">

## 三、启动RabbitMQ

1. 启动RabbitMQ：rabbitmq-server -detached 后台启动

2. 停止RabbitMQ：rabbitmqctl stop

3. rabbitmq启动成功，浏览器中[http://localhost:15672](http://localhost:15672/),默认用户名和密码 都是 guest

  <img :src="$withBase('/springcloud/1585756891269.png')" alt="foo">

至此，rabbitMQ安装部署完成。
