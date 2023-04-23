# Kubeadm高可用安装基本说明

## 1基本环境配置

<img :src="$withBase('/k8s/安装/1.png')" alt="foo">

[K8S官网](https://kubermetes.ioldocs/setup/)

[最新版︰高可用安装](https:/kubernetes.io/ldocs/setup/production-environment/tools/kubeadm/high-availability)

1. Kubectl debug设置一个临时容器
2. Sidecar
3. volume。更改目录权限，fsSroups
4. ConfigMap_和 Secretc

### 高可用Kubernetes集群规划表

|  主机多   | P地址  |  说明 |
|  ----  | ----  | ---- |
| k8s-master  | 192.168.1.18~20 |    mastex.节点*3  |
| k8s-master-lb | 192.168.1.100 |    kespalved.虚拟ip  |
| k8s-node01 ~02  | 192.168.1.21~22 |    worker.节点*2  |

- 所有节点配置hosts，修改`/etc/hosts` 如下

```bash
cat /etc/hosts
192.168.12.10 k8s-master01
192.168.12.11 k8a-master02
192.168.0.200 k8s-master-lb
192.168.12.12 k8s-node01
192.168.12.13 k8s-node02
```

<img :src="$withBase('/k8s/安装/2.png')" alt="foo">

- 所有节点关闭防火墙、selinux、dnsmasg、swap。服务器配置如下

```bash
systemctl disable --now firewalld
systemctl disable --now dnsmasg
systemctl disable --now NetworkManager # CentOS8无需关闭
setenforce 0

vim /etc/sysconfig/selinux # 修改 SELINUX=disabled

swapoff -a && sysctl -w vm.swappiness=0 # 开启会影响k8s性能，所以关闭

vim /etc/fstab  # 注释带有swap的  /dev/mapper/cl-swap
```

### 将服务器时区同步

```bash
ntpdate time2.aliyun.com # 设置时间服务器

crontab -e # 开机自启动
  */5 * * * * ntpdate time2.aliyun.com # 5分钟更新下时间

/etc/rc.local # 加入到开机自动同步
  ntpdate time2.aliyun.com
```

### 所有节点设置ulimit

```bash
ulimit -SHn 65535
```

### 密钥配置

Master01节点免密钥登录其他节点,安装过程中生成配置文件和证书均在 Master01上操作，集群管理也在Master01上操作，阿里云或者AWS上需要单独一台kubectl服务器。密钥配置如下:

```bash
ssh-keygen -t rsa

for i in k8s-master01 k8s-master02 k8s-node01 k8s-node02; do ssh-copy-id -i .ssh/id_rsa.pub $i; done
```
