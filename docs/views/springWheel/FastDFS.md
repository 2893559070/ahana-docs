# 分布式文件存储-FastDFS

## FastDFS简介

### FastDFS体系结构

FastDFS是一个开源的轻量级[分布式文件系统](https://baike.baidu.com/item/%E5%88%86%E5%B8%83%E5%BC%8F%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F/1250388)，它对文件进行管理，功能包括：文件存 储、文件同步、文件访问（文件上传、文件下载）等，解决了大容量存储和负载均衡的 问题。特别适合以文件为载体的在线服务，如相册网站、视频网站等等。 FastDFS为互联网量身定制，充分考虑了冗余备份、负载均衡、线性扩容等机制，并注重 高可用、高性能等指标，使用FastDFS很容易搭建一套高性能的文件服务器集群提供文件 上传、下载等服务。

FastDFS 架构包括 Tracker server 和 Storage server。客户端请求 Tracker server 进行 文件上传、下载，通过Tracker server 调度最终由 Storage server 完成文件上传和下载。

Tracker server 作用是负载均衡和调度，通过 Tracker server 在文件上传时可以根据一 些策略找到Storage server 提供文件上传服务。可以将 tracker 称为追踪服务器或调度服 务器。Storage server 作用是文件存储，客户端上传的文件最终存储在 Storage 服务器 上，Storageserver 没有实现自己的文件系统而是利用操作系统的文件系统来管理文件。 可以将storage称为存储服务器。

<img :src="$withBase('/javaUtils/1.png')" alt="foo">

### 上传流程

<img :src="$withBase('/javaUtils/02.png')" alt="foo">

客户端上传文件后存储服务器将文件 ID 返回给客户端，此文件 ID 用于以后访问该文件 的索引信息。文件索引信息包括：组名，虚拟磁盘路径，数据两级目录，文件名。
<img :src="$withBase('/javaUtils/03.png')" alt="foo">
组名：文件上传后所在的 storage 组名称，在文件上传成功后有storage 服务器返回，需 要客户端自行保存。 虚拟磁盘路径：storage 配置的虚拟路径，与磁盘选项store_path*对应。如果配置了 store_path0 则是 M00，如果配置了 store_path1 则是 M01，以此类推。 数据两级目录：storage 服务器在每个虚拟磁盘路径下创建的两级目录，用于存储数据 文件。 文件名：与文件上传时不同。是由存储服务器根据特定信息生成，文件名包含：源存储 服务器 IP 地址、文件创建时间戳、文件大小、随机数和文件拓展名等信息。

## FastDFS搭建

使用Docker搭建FastDFS的开发环境

- 拉取镜像

```bash
docker pull morunchang/fastdfs
```

- 运行tracker

```bash
docker run ‐d ‐‐name tracker ‐‐net=host morunchang/fastdfs sh tracker.sh
```

- 运行storage
  - 使用的网络模式是–net=host, 替换为你机器的Ip即可
  - 是组名，即storage的组 如果想要增加新的storage- 服务器，再次运行该命令，注意更换 新组名

  ````bash
  docker run ‐d ‐‐name storage ‐‐net=host ‐e TRACKER_IP=<your tracker server address>:22122 ‐e GROUP_NAME=<group name> morunchang/fastdfs sh storage.sh
  ````

- 修改nginx的配置

```bash
# 进入storage的容器内部，修改nginx.conf
docker exec ‐it storage /bin/bash

# 进入后
vi /data/nginx/conf/nginx.conf

# 添加以下内容
location /group1/M00 { 
  proxy_next_upstream http_502 http_504 error timeout invalid_header; proxy_cache http‐cache; proxy_cache_valid 200 304 12h; proxy_cache_key $uri$is_args$args; proxy_pass http://fdfs_group1; expires 30d; 
}
```

- 退出容器

```bash
  exit
```

- 重启storage容器

```bash
  docker restart storage
```

## 文件存储微服务

创建文件管理微服务xxx_service_file，该工程主要用于实现文件上传以及文件删 除等功能

### 修改pom.xml，引入依赖

```xml
<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring‐boot‐starter‐web</artifactId>
  </dependency>
  <dependency>
    <groupId>net.oschina.zcx7878</groupId>
    <artifactId>fastdfs‐client‐java</artifactId>
    <version>1.27.0.0</version>
  </dependency> 
  <dependency> 
    <groupId>com.changgou</groupId>
    <artifactId>changgou_common</artifactId>
    <version>1.0‐SNAPSHOT</version> 
  </dependency> 
</dependencies>
```

### 在resources文件夹下创建fasfDFS的配置文件fdfs_client.conf

```conf
  connect_timeout = 60
  network_timeout = 60
  charset = UTF‐8
  http.tracker_http_port = 8080
  tracker_server = 192.168.200.128:22122
```

connect_timeout：连接超时时间，单位为秒。
network_timeout：通信超时时间，单位为秒。发送或接收数据时。假设在超时时间后 还不能发送或接收数据，则本次网络通信失败
charset： 字符集
http.tracker_http_port ：.tracker的http端口
tracker_server： tracker服务器IP和端口设置

### 在resources文件夹下创建application.yml

```xml
spring:
  servlet:
    multipart:
      max‐file‐size: 10MB
      max‐request‐size: 10MB
server:
  port: 9008
eureka:
  client:
    service‐url:
      defaultZone: http://127.0.0.1:6868/eureka
  instance:
    prefer‐ip‐address: true
feign:
  hystrix:
    enabled: true
```

max-file-size是单个文件大小，max-request-size是设置总上传的数据大小

### 创建com.changgou.file包，创建启动类FileApplication

```java
@SpringBootApplication
@EnableEurekaClient
public class FileApplication {
    public static void main(String[] args) {
        SpringApplication.run(FileApplication.class);    
    }
}
```

## 文件上传

### 文件信息封装

文件上传一般都有文件的名字、文件的内容、文件的扩展名、文件的md5值、文件的作 者等相关属性，我们可以创建一个对象封装这些属性，代码如下：

```java
package com.changgou.file.util;

public class FastDFSFile {
    //文件名字
    private String name;
    //文件内容
    private byte[] content;
    //文件扩展名
    private String ext;
    //文件MD5摘要值
    private String md5;
    //文件创建作者
    private String author;

    public FastDFSFile(String name, byte[] content, String ext, String height,
                       String width, String author) {
        super();
        this.name = name;
        this.content = content;
        this.ext = ext;
        this.author = author;
    }

    public FastDFSFile(String name, byte[] content, String ext) {
        super();
        this.name = name;
        this.content = content;
        this.ext = ext;
    }

    // getter and setter ...
}
```

### 文件操作

创建FastDFSClient类,放在com.xxx.file.util下在该类中实现FastDFS信息获取以及 文件的相关操作

```java
package com.changgou.file.util;

import org.csource.common.NameValuePair;
import org.csource.fastdfs.*;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;

public class FastDFSClient {

    private static org.slf4j.Logger logger = LoggerFactory.getLogger(FastDFSClient.class);

    /***
     * 初始化加载FastDFS的TrackerServer配置
     */
    static {
        try {
            String filePath = new ClassPathResource("fdfs_client.conf").getFile().getAbsolutePath();
            ClientGlobal.init(filePath);
        } catch (Exception e) {
            logger.error("FastDFS Client Init Fail!",e);
        }
    }

    /***
     * 文件上传
     * @param file
     * @return 1.文件的组名  2.文件的路径信息
     */
    public static String[] upload(FastDFSFile file) {
        //获取文件的作者
        NameValuePair[] meta_list = new NameValuePair[1];
        meta_list[0] = new NameValuePair("author", file.getAuthor());

        //接收返回数据
        String[] uploadResults = null;
        StorageClient storageClient=null;
        try {
            //创建StorageClient客户端对象
            storageClient = getTrackerClient();

            /***
             * 文件上传
             * 1)文件字节数组
             * 2)文件扩展名
             * 3)文件作者
             */
            uploadResults = storageClient.upload_file(file.getContent(), file.getExt(), meta_list);
        } catch (Exception e) {
            logger.error("Exception when uploadind the file:" + file.getName(), e);
        }

        if (uploadResults == null && storageClient!=null) {
            logger.error("upload file fail, error code:" + storageClient.getErrorCode());
        }
        //获取组名
        String groupName = uploadResults[0];
        //获取文件存储路径
        String remoteFileName = uploadResults[1];
        return uploadResults;
    }

    /***
     * 获取文件信息
     * @param groupName:组名
     * @param remoteFileName：文件存储完整名
     * @return
     */
    public static FileInfo getFile(String groupName, String remoteFileName) {
        try {
            StorageClient storageClient = getTrackerClient();
            return storageClient.get_file_info(groupName, remoteFileName);
        } catch (Exception e) {
            logger.error("Exception: Get File from Fast DFS failed", e);
        }
        return null;
    }

    /***
     * 文件下载
     * @param groupName
     * @param remoteFileName
     * @return
     */
    public static InputStream downFile(String groupName, String remoteFileName) {
        try {
            //创建StorageClient
            StorageClient storageClient = getTrackerClient();

            //下载文件
            byte[] fileByte = storageClient.download_file(groupName, remoteFileName);
            InputStream ins = new ByteArrayInputStream(fileByte);
            return ins;
        } catch (Exception e) {
            logger.error("Exception: Get File from Fast DFS failed", e);
        }
        return null;
    }

    /***
     * 文件删除
     * @param groupName
     * @param remoteFileName
     * @throws Exception
     */
    public static void deleteFile(String groupName, String remoteFileName)
            throws Exception {
        //创建StorageClient
        StorageClient storageClient = getTrackerClient();

        //删除文件
        int i = storageClient.delete_file(groupName, remoteFileName);
    }

    /***
     * 获取Storage组
     * @param groupName
     * @return
     * @throws IOException
     */
    public static StorageServer[] getStoreStorages(String groupName)
            throws IOException {
        //创建TrackerClient
        TrackerClient trackerClient = new TrackerClient();
        //获取TrackerServer
        TrackerServer trackerServer = trackerClient.getConnection();
        //获取Storage组
        return trackerClient.getStoreStorages(trackerServer, groupName);
    }

    /***
     * 获取Storage信息,IP和端口
     * @param groupName
     * @param remoteFileName
     * @return
     * @throws IOException
     */
    public static ServerInfo[] getFetchStorages(String groupName,
                                                String remoteFileName) throws IOException {
        TrackerClient trackerClient = new TrackerClient();
        TrackerServer trackerServer = trackerClient.getConnection();
        return trackerClient.getFetchStorages(trackerServer, groupName, remoteFileName);
    }

    /***
     * 获取Tracker服务地址
     * @return
     * @throws IOException
     */
    public static String getTrackerUrl() throws IOException {
        return "http://"+getTrackerServer().getInetSocketAddress().getHostString()+":"+ClientGlobal.getG_tracker_http_port()+"/";
    }

    /***
     * 获取Storage客户端
     * @return
     * @throws IOException
     */
    private static StorageClient getTrackerClient() throws IOException {
        TrackerServer trackerServer = getTrackerServer();
        StorageClient storageClient = new StorageClient(trackerServer, null);
        return  storageClient;
    }

    /***
     * 获取Tracker
     * @return
     * @throws IOException
     */
    private static TrackerServer getTrackerServer() throws IOException {
        TrackerClient trackerClient = new TrackerClient();
        TrackerServer trackerServer = trackerClient.getConnection();
        return  trackerServer;
    }
}
```

### 文件上传

创建一个FileController，在该控制器中实现文件上传操作，代码如下：

```java
package com.changgou.file.controller;

import com.changgou.entity.Result;
import com.changgou.entity.StatusCode;
import com.changgou.file.util.FastDFSClient;
import com.changgou.file.util.FastDFSFile;
import org.apache.commons.lang.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/file")
public class FileController {

    @PostMapping("/upload")
    public Result uploadFile(MultipartFile file){
        try{
            //判断文件是否存在
            if (file == null){
                throw new RuntimeException("文件不存在");
            }
            //获取文件的完整名称
            String originalFilename = file.getOriginalFilename();
            if (StringUtils.isEmpty(originalFilename)){
                throw new RuntimeException("文件不存在");
            }

            //获取文件的扩展名称  abc.jpg   jpg
            String extName = originalFilename.substring(originalFilename.lastIndexOf(".") + 1);

            //获取文件内容
            byte[] content = file.getBytes();

            //创建文件上传的封装实体类
            FastDFSFile fastDFSFile = new FastDFSFile(originalFilename,content,extName);

            //基于工具类进行文件上传,并接受返回参数  String[]
            String[] uploadResult = FastDFSClient.upload(fastDFSFile);

            //封装返回结果
            String url = FastDFSClient.getTrackerUrl()+uploadResult[0]+"/"+uploadResult[1];
            return new Result(true,StatusCode.OK,"文件上传成功",url);
        }catch (Exception e){
            e.printStackTrace();
        }
        return new Result(false, StatusCode.ERROR,"文件上传失败");
    }
}
```

### Postman测试文件上传

步骤：

1. 选择post请求方式，输入请求地址 <http://localhost:9008/upload>
2. 填写Headers

  ```json
    Key：Content‐Type
    Value：multipart/form‐data
  ```

3. 填写body 选择form-data 然后选择文件file 点击添加文件，最后发送即可。
