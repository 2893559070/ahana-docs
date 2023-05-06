# Kubernetes（k8s）

## 学习计划
  <img :src="$withBase('/k8s/zhishi/1.png')" alt="foo">

## 知识点

- Pod: k8s最小部署单元，一组容器的集合
- Deployment: 最常见的控制器，用于更高几倍部署和管理Pod
- Service: 为一组Pod提供负载均衡，对外提供统一访问入口
- Label: 标签，附加到某个资源上，用于关联对象，查询和筛选
  <img :src="$withBase('/k8s/zhishi/2.png')" alt="foo">

## 集群组件

### 架构图
  <img :src="$withBase('/k8s/zhishi/3.png')" alt="foo">

### Master组件
- kube-apiserver
    - Kubernetes APl,集群的统⼀⼊⼝，各组件协调者，以RESTful API提供接⼝服务，所有对象资源的增改查和监听操作都交给APIServer处理后再提交给Etcd存储
- kube-controller-manager
    - 处理集群中常规后台任务，⼀个资源对应⼀个控制器，⽽ControllerManagers就是负责管理这些控制器的。例如Deployment、Service
- kube-scheduler
    - 根据调度算法为新建的Pod选择⼀个Node节点，可以任意部署，可以部署在同⼀个节点上，也可以部署在不同的节点上
- etcd
    - 分布式键值存储系统。⽤于保存集群状态数据，⽐如Pod、Service等对象信息

### Node组件
- kubelet
    - kubelet是Master在Node节点上的Agent,管理本机运⾏容器的⽣命周期，⽐如创建容器、Pod挂线数据卷、下载secret、获取容器和节点状态等⼯作。kubelet将每个Pod转换成⼀组容器
- kube-proxy
    - 在Node节点上实现Pod⽹络代理，组护⽹络规则和四层负载均衡⼯作
- 第三⽅容器引擎，例如docker、containerd、podman容器引擎，运⾏容器

## kubectl命令⾏管理⼯具

### 基础命令

- <font color="#ffae37">create</font> 通过⽂件名或标准输⼊创建资源
- <font color="#ffae37">expose</font> 为Deployment，Pod创建Service
- <font color="#ffae37">run</font> 在集群中运⾏⼀个特定的镜像
- <font color="#ffae37">set</font> 在对象上设置特定的功能
- <font color="#ffae37">explain</font> ⽂档参考资料
- <font color="#ffae37">get</font> 显示⼀个或多个资源
- <font color="#ffae37">edit</font> 使⽤系统编辑器编辑⼀个资源
- <font color="#ffae37">delete</font> 通过⽂件名、标准输⼊、资源名称或标签选择器来删除资源

### 部署命令
- <font color="#ffae37">rollout</font> 管理Deployment，Daemonset资源的发布（例如状态、发布记录、回滚等）
- <font color="#ffae37">scale</font> 对Deployment、ReplicaSet、RC或Job资源扩容或缩容Pod数量
- <font color="#ffae37">autoscale</font> 为Deploy, RS, RC配置⾃动伸缩规则（依赖metrics-server和hpa）

### 集群管理命令
- <font color="#ffae37">certificate</font> 修改证书资源
- <font color="#ffae37">cluster-info</font> 显示集群信息
- <font color="#ffae37">top</font> 查看资源利⽤率（依赖metrics-server）
- <font color="#ffae37">cordon</font> 标记节点不可调度
- <font color="#ffae37">uncordon</font> 标记节点可调度
- <font color="#ffae37">drain</font> 驱逐节点上的应⽤，准备下线维护
- <font color="#ffae37">taint</font> 修改节点taint标记

### 故障诊断和调试命令
- <font color="#ffae37">describe</font> 显示资源详细信息
- <font color="#ffae37">logs</font> 查看Pod内容器⽇志，如果Pod有多个容器，-c参数指定容器名称
- <font color="#ffae37">attach</font> 附加到Pod内的⼀个容器
- <font color="#ffae37">exec</font> 在容器内执⾏命令
- <font color="#ffae37">port-forward</font> 为Pod创建本地端⼝映射
- <font color="#ffae37">proxy</font> 为Kubernetes API server创建代理
- <font color="#ffae37">cp</font> p 拷⻉⽂件或⽬录到容器中，或者从容器内向外拷⻉
- <font color="#ffae37">auth</font> 检查授权
- <font color="#ffae37">debug</font> 创建调试会话，⽤于排查⼯作负载和⼯作节点故障

### ⾼级命令
- <font color="#ffae37">diff</font> 将在线配置与指定的⽂件对⽐
- <font color="#ffae37">apply</font> 从⽂件名或标准输⼊对资源创建/更新
- <font color="#ffae37">patch</font> 使⽤补丁⽅式修改、更新资源的某些字段
- <font color="#ffae37">replace</font> 从⽂件名或标准输⼊替换⼀个资源
- <font color="#ffae37">kustomize</font> 从⽬录或者URL构建kustomization⽬标

### 设置命令
- <font color="#ffae37">label</font> 给资源设置、更新标签
- <font color="#ffae37">annotate</font> 给资源设置、更新注解
- <font color="#ffae37">completion</font> n kubectl⼯具⾃动补全，source<(kubectl completion bash) （依赖软件包 bash-completion）

### 其他命令
- <font color="#ffae37">api-resources</font> 查看所有资源
- <font color="#ffae37">api-versions</font> 打印受⽀持的API版本
- <font color="#ffae37">config</font> 修改kubeconfig⽂件（⽤于访问API，⽐如配置认证信息）
- <font color="#ffae37">version</font> 查看kubectl和k8s版本

[官方文档参考地址](https://kubernetes.io/zh-cn/docs/reference/kubectl/)

## 安装步骤
[视频链接](https://www.bilibili.com/video/BV1aL411t7UF/?p=1)

1. 关闭防⽕墙 #全部
    - systemctl stop firewalld
    - systemctl disable firewalld
2. 关闭selinux #全部
    - sed -i 's/enforcing/disabled/' /etc/selinux/config #永久
    - setenforce 0 #临时
3. 关闭swap #全部
    - swapoff -a #临时
    - sudo sed -ri 's/.*swap.*/#&/' /etc/fstab #永久
4. 根据规划设置主机名 #全部
    - hostnamectl set-hostname
5. 在master添加hosts #master
    ```bash
        cat >> /etc/hosts << EOF
            @master内⽹地址 k8s-master1
            @node内⽹地址 k8s-node1
            @node内⽹地址 k8s-node2
        EOF
    ```
6. 将桥接的IPv4流量传递到iptables的链 #全部
    ```bash
        cat > /etc/sysctl.d/k8s.conf << EOF
            net.bridge.bridge-nf-call-ip6tables = 1
            net.bridge.bridge-nf-call-iptables = 1
        EOF
        sysctl --system #⽣效
    ```

7. 时间同步 #全部
    - yum install ntpdate -y
    - ntpdate time.windows.com

8. 安装Docker #全部
    - 安装命令1：curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
    - 安装命令2
        - wget https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo -O
        - yum -y install docker-ce
        - systemctl enable docker && systemctl start docker
    - 配置镜像下载加速器：自己的阿里云镜像服务找
    - 可能出现问题：
        - 2022年1⽉1⽇起CentOS官⽅将不再对CentOS8提供服务⽀持，使⽤yum命令的时候报错：Cannot download repomd.xml，可[参考](https://blog.csdn.net/burgerh/article/details/123098751)
    - 解决⽅法：
        1. 执⾏如下命令先将之前的yum⽂件备份：
            - rename '.repo' '.repo.bak' /etc/yum.repos.d/*.repo
        2. 运⾏以下命令下载最新的repo⽂件：
            ```bash
                wget https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo -O /etc/yum.repos.d/Centos-vault-8.5.2111.repo

                wget https://mirrors.aliyun.com/repo/epel-archive-8.repo -O /etc/yum.repos.d/epel-archive-8.repo
            ```
        3. 运⾏以下命令替换repo⽂件中的链接：
            ```bash
                sed -i
                's/mirrors.cloud.aliyuncs.com/url_tmp/g'
                /etc/yum.repos.d/Centos-vault-
                8.5.2111.repo && sed -i
                's/mirrors.aliyun.com/mirrors.cloud.aliyu
                ncs.com/g' /etc/yum.repos.d/Centos-vault-8.5.2111.repo && sed -i
                's/url_tmp/mirrors.aliyun.com/g'
                /etc/yum.repos.d/Centos-vault-
                8.5.2111.repo

                sed -i
                's/mirrors.aliyun.com/mirrors.cloud.aliyu
                ncs.com/g' /etc/yum.repos.d/epel-archive-8.repo
            ```
        4. 运⾏以下命令重新创建缓存,若没报错,则正常了
            - yum clean all && yum makecache

9. 添加阿⾥云YUM软件源 #全部
    ```bash
        cat > /etc/yum.repos.d/kubernetes.repo << EOF
            [kubernetes]
            name=Kubernetes
            baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
            enabled=1
            gpgcheck=0
            repo_gpgcheck=0
            gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
            https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
        EOF
    ```

10. 安装kubeadm，kubelet和kubectl#全部
- 由于版本更新频繁，这⾥指定版本号部署：
- yum install -y kubelet-1.20.0 #master #node
- yum install -y kubeadm-1.20.0 #master #node
- yum install -y kubectl-1.20.0 #master
- systemctl enable kubelet #master #node

11. 部署Kubernetes Master #master