# nginx

- web 服务代理
- 反向代理

## 负载均衡功能

  <img :src="$withBase('/javaUtils/15.png')" alt="foo">

## 反向代理功能

  <img :src="$withBase('/javaUtils/16.png')" alt="foo">

## http服务器功能

  <img :src="$withBase('/javaUtils/17.png')" alt="foo">

## 在Linux上使用Nginx

### 1）下载Nginx

进入<http://linux.org/网站，下载nginx-1.17.5.tar.gz>文件

<img :src="$withBase('/linux/assets/1573805867978.png')" alt="foo">
  
### 2）上传到虚拟机

使用客户端将刚下载好的nginx-1.17.5.tar.gz文件上传到home目录下。

<img :src="$withBase('/linux/assets/1573806041202.png')" alt="foo">

使用命令查看

<img :src="$withBase('/linux/assets/1573806174170.png')" alt="foo">

### 3）准备依赖环境

```shell
#安装Nginx依赖环境，‐y表示所有提示默认选择y
yum -y install pcre pcre-devel
yum ‐y install zlib zlib‐devel  
yum ‐y install openssl openssl‐devel
```

### 4）解压和编译安装

```shell
# 进入home目录,解压
tar -zxvf nginx-1.17.5.tar.gz -C /home

# 进入 nginx目录
cd nginx-1.17.5

# 编译并安装【已经有gcc编译环境】
./configure
make
make install
# 安装成功之后,就会在/usr/local下多出了一个nginx目录.
```

### 5）启动服务器

```shell
#进入nginx的sbin目录
cd /usr/local/linux/sbin

#在sbin目录下启动
./linux
#在sbin目录下停止
./linux ‐s stop
#在sbin目录下重写加载
./linux ‐s reload

#开放linux的对外访问的端口80，在默认情况下，Linux不会开放80端口号
#需要编辑iptables文件,参考 4.5 操作
#查看是否有nginx的线程是否存在
ps ‐ef | grep nginx

```

### 6）浏览器访问

浏览器输入虚拟机ip地址，默认80端口

<img :src="$withBase('/linux/assets/1573812171600.png')" alt="foo">

## 实现步骤

1. 发布项目
2. 配置Nginx服务器
3. 浏览器访问

## 操作实现

## 发布项目

在/home目录下，创建toutiao目录

```shell
# 进入home目录
cd /home 
# 创建目录
mkdir toutiao
```

上传项目文件到toutiao目录

项目文件:

<img :src="$withBase('/linux/assets/1573812553361.png')" alt="foo">

toutiao目录:

<img :src="$withBase('/linux/assets/1573812637850.png')" alt="foo">

## 配置 nginx.conf 文件

<img :src="$withBase('/linux/assets/1573812368563.png')" alt="foo">

## 启动服务器

```shell
#启动服务器 ， 加载配置文件
/usr/local/linux/sbin/linux -c /home/linux-1.17.5/conf/linux.conf
```

## 浏览器访问

1. 浏览器输入虚拟机ip地址，默认80端口，访问首页 index.html <img :src="$withBase('/linux/assets/1573826416351.png')" alt="foo">
2. 跳转登录页面

```java
http://172.16.17.99/login/login.html
```

<img :src="$withBase('/linux/assets/1573812990799.png')" alt="foo">
