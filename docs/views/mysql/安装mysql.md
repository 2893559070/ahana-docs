# 安装mysql

部署MySQL数据库有多种部署方式，常用的部署方式就有三种：yum安装、rpm安装以及编译安装。每一种安装方式都有自己的优势，那么企业当中通常情况下采用的是rpm和二进制安装的方式。

[downloads.mysql](https://downloads.mysql.com/archives/community/)

## yum安装

从CentOS 7.0发布以来，yum源中开始使用Mariadb来代替MySQL的安装(这里什么是mariadb,和mysql有什么区别，有兴趣的小伙伴可以自行查阅）。即使你输入的是yum install -y mysql , 显示的也是Mariadb的安装内容。如果想安装Mysql就必须使用Mysql官方的yum源。

**1. 编写yum源配置文件**

```bash
#配置好yum源，包括epel源
 1. curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
 2. wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo
 3. yum -y install vim wget
```

- 使用官方yum仓库
[官方yum仓库](https://dev.mysql.com/downloads/repo/yum/)

  <img :src="$withBase('/mysql/01.png')" alt="foo">
  <img :src="$withBase('/mysql/02.png')" alt="foo">

```bash
wget https://dev.mysql.com/get/mysql80-community-release-el7-4.noarch.rpm ## 复制下来的链接
```

  <img :src="$withBase('/mysql/03.png')" alt="foo">

```bash
yum install mysql80-community-release-el7-4.noarch.rpm
```

**2. 生成yum源缓存**
每次编写了，都需要生成yum缓存，以免安装错误。

```Bash
 1. yum makecache
```

**3. 检查安装的yum源是否存在**

```bash
 1. yum repolist enabled | grep mysql
 
# 选择默认安装的版本  默认的是8.0 版本
# 安装 YUM 管理工具包，此包提供了 yum-config-manager 命令工具
 1. yum -y install yum-utils
 2. yum-config-manager --disable mysql80-community 
 3. yum-config-manager --enable mysql57-community
 4. yum repolist enabled | grep mysql
```

  <img :src="$withBase('/mysql/04.png')" alt="foo">

**4. 安装MySQL服务**

```bash
 yum install -y  mysql-community-server  # 然后等待安装即可
```

**5. 启动MySQL服务**

```bash
# 启动mysqld 服务端
1. systemctl start mysqld
# 查看是否启动
2. systemctl status mysqld
```

  <img :src="$withBase('/mysql/05.png')" alt="foo">

**6. 初始化**
MySQL服务器初始化（从MySQL 5.7开始）

在 MySQL 服务器初始启动时，如果服务器的数据目录为空，则会发生以下情况：

- MySQL 服务器已初始化。
- 在数据目录中生成SSL证书和密钥文件。
- 安装并启用该 validate_password 插件。
- 将创建一个超级用户 帐户’root’@‘localhost’。并会设置超级用户的密码，将其存储在错误日志文件/var/log/mysqld.log中。

```bash
grep 'temporary password' /var/log/mysqld.log
```

  <img :src="$withBase('/mysql/06.png')" alt="foo">

**7. 连接mysql修改默认密码**

```bash
mysql -uroot -p'goUaahghs8?r'
```

```bash
# 出现以下错误的原因是需要修改初始化密码
1. show databases;
ERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement.

2. alter user   root@localhost   identified  by  '123456';
ERROR 1819 (HY000): Your password does not satisfy the current policy requirements

#太过简单的密码会失败，因为不满足密码复杂度的要求

# 修改密码
1. alter user   root@localhost   identified  by  'MySQL@666';
Query OK, 0 rows affected (0.00 sec)
# 刷新权限
2.  FLUSH PRIVILEGES;
Query OK, 0 rows affected (0.00 sec)

# 要设置比较简单的密码就需要取消密码复杂度，编辑 /etc/my.cnf配置文件, 在 [mysqld]配置块儿中添加如下内容(企业生成环境不建议使用这种配置)
plugin-load=validate_password.so 
validate-password=OFF

```

**8. 远程连接**
远程登录还需要授权远程登录
Mysql默认不允许远程登录，我们需要设置关闭selinux或者防火墙，不关防火墙就开放3306端口；

```bash
# 允许本地用户链接
1. grant all privileges on *.* to root@localhost identified by '密码';
 Query OK, 0 rows affected, 1 warning (0.00 sec)

# 允许任意IP连接
2. grant all privileges on *.* to root@'%' identified by '密码';
 Query OK, 0 rows affected, 1 warning (0.00 sec)

 # 以上如果报错可以试下
 use mysql;
 select user,host from user;
 update user set host='%' where user = 'root';
 select user,host from user;
 flush privileges;

 # 添加开放3306端口的iptables规则
 iptables -t filter -I INPUT -p tcp --dport 3306 -j ACCEPT
```

**9. 卸载已经安装的MySQL**

```bash
//rpm包安装方式卸载
查包名：rpm -qa|grep -i mysql
删除命令：rpm -e –nodeps 包名
 
//yum安装方式下载
1.查看已安装的mysql
命令：rpm -qa | grep -i mysql
2.卸载mysql
命令：yum remove mysql-community-server-5.6.36-2.el7.x86_64
查看mysql的其它依赖：rpm -qa | grep -i mysql
 
//卸载依赖
yum remove mysql-libs
yum remove mysql-server
yum remove perl-DBD-MySQL
yum remove mysql

```
