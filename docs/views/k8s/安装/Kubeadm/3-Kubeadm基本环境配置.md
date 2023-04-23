# Kubeadm基本环境配置

## 所有节点配置hosts，修改`/etc/hosts` 如下

```bash
cat /etc/hosts
192.168.12.10 k8s-master01
192.168.12.11 k8a-master02
192.168.0.200 k8s-master-lb
192.168.12.12 k8s-node01
192.168.12.13 k8s-node02
```

## yum源配置

```bash
curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
yum install -y yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
cat <<EOF > /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF
sed -i -e '/mirrors.cloud.aliyuncs.com/d' -e '/mirrors.aliyuncs.com/d' /etc/yum.repos.d/CentOS-Base.repo
```

## 必备工具安装

```bash
yum install wget jq psmisc vim net-tools telnet yum-utils device-mapper-persistent-data lvm2 git -y
```

## 所有节点关闭防火墙、selinux、dnsmasq、swap。服务器配置如下

```bash
systemctl disable --now firewalld 
systemctl disable --now dnsmasq
systemctl disable --now NetworkManager

setenforce 0
sed -i 's#SELINUX=enforcing#SELINUX=disabled#g' /etc/sysconfig/selinux
sed -i 's#SELINUX=enforcing#SELINUX=disabled#g' /etc/selinux/config
```

## 关闭swap分区

```bash
swapoff -a && sysctl -w vm.swappiness=0
sed -ri '/^[^#]*swap/s@^@#@' /etc/fstab
```

## 安装ntpdate

```bash
rpm -ivh http://mirrors.wlnmp.com/centos/wlnmp-release-centos.noarch.rpm
yum install ntpdate -y
```

## 所有节点同步时间。时间同步配置如下

```bash
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
echo 'Asia/Shanghai' >/etc/timezone
ntpdate time2.aliyun.com
```

## 加入到crontab

```bash
crontab -e # 开机自启动
*/5 * * * * ntpdate time2.aliyun.com
```

## 所有节点配置limit

```bash
ulimit -SHn 65535

vim /etc/security/limits.conf
# 末尾添加如下内容
* soft nofile 655360
* hard nofile 131072
* soft nproc 655350
* hard nproc 655350
* soft memlock unlimited
* hard memlock unlimited
```

## Master01节点免密钥登录其他节点

```bash
ssh-keygen -t rsa
for i in k8s-master01 k8s-master02 k8s-node01 k8s-node02;do ssh-copy-id -i .ssh/id_rsa.pub $i;done
```

## 下载安装所有的源码文件

```bash
cd /root/ ; git clone https://github.com/dotbalo/k8s-ha-install.git
```

## 所有节点升级系统并重启

```bash
yum update -y  && reboot
```
