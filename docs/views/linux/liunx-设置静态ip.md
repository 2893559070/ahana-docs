# Linux设置静态IP

## 1.设置步骤

/etc/sysconfig/network-scripts 目录下 有一个 “ifcfg- ” 开头的几个配置文件。

- ifcfg-ens33：网卡ens33的配置文件
- ifcfg-lo：网卡lo的配置文件

设置静态ip，我们就需要修改 /etc/sysconfig/network-scripts/ifcfg-ens33 配置文件。

输入命令：

```bash
[root@localhost ~]# cd /etc/sysconfig/network-scripts/
[root@localhost network-scripts]# ls
[root@localhost network-scripts]# vi ifcfg-ens33 
```

(1) 将 BOOTPROTO = dhcp   改成  BOOTPROTO = static，也就是将动态ip，改成静态ip

```bash
 # 静态IP地址(这里要确定前三个字段是不动的但是每个人的都不一样这里要先进行查询,改最后一位字段，也就是把100改为别的)
 
IPADDR="192.168.138.100"      
NETMASK="255.255.255.0"         # 子网掩码
GATEWAY="192.168.138.2"         # 网关地址
DNS1="192.168.138.2"            # DNS服务器
```

(这是修改完的内容，修改的把dhcp改成static)内容如下（这里加注释便于理解）：

```bash
#类型
​​​​​​​TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
#是否启动DPCH：none为禁止使用；static是使用静态ip；DPCH为使用DPCH服务​​​​​​
​​​​​​​#如果要设定多网口绑定bond，必须为none
BOOTPROTO=static
# 设置的静态IP地址
IPADDR="192.168.138.100"        
# 子网掩码
NETMASK="255.255.255.0"      
 # 网关地址   
GATEWAY="192.168.138.2"      
# DNS服务器  
DNS1="192.168.138.2" 
#default route  是否把这个网卡设置为ipv4默认路由         
DEFROUTE=yes
#如果ipv4设置失败则禁用设备
IPV4_FAILURE_FATAL=no
#是否使用ipv6
IPV6INIT=yes
#ipv6自动配置
IPV6_AUTOCONF=yes
#是否把这个网卡设置为ipv6默认路由
IPV6_DEFROUTE=yes
#如果ipv6设置失败则禁用设备
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
#网络连接的名字
NAME=ens33
#随机的唯一标识
UUID=afd0baa3-8bf4-4e26-8d20-5bc426b75fd6
#网卡名称
DEVICE=ens33
#启动或重启是否启动该设备
ONBOOT=yes
ZONE=public
```

## 2.如何查看自己的IP格式，子网掩码，网关地址与DNS服务

### (1).获取ip地址和 子网掩码与网关

<img :src="$withBase('/linux/assets/1.png')" alt="foo">
<img :src="$withBase('/linux/assets/2.png')" alt="foo">
<img :src="$withBase('/linux/assets/3.png')" alt="foo">
<img :src="$withBase('/linux/assets/4.png')" alt="foo">

### (2). 重启网络服务

ip地址修改完毕之后，需要重启网络服务，执行如下指令：

```bash
systemctl restart network
```

注：重启完网络服务后ip地址已经发生了改变，此时FinalShell已经连接不上Linux系统，需要创建一个新连接才能连接到Linux。如果你没有使用远程连接，直接重启然后输入查看ip即可。

再次连接上Linux之后，我们再次查看IP地址，就可以看到我们所设置的静态IP：

```bash
ip addr
```

问题：ip ad s 查看网络以前的旧ip还存在，新的ip虽然可以使用但会出现丢失的情况
<img :src="$withBase('/linux/assets/5.png')" alt="foo">

解决

```bash
ip addr flush dev ens33

ifdown ens33
ifup ens33
```
