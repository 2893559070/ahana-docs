# Java 开发环境配置

## window系统安装java

### 下载JDK

[下载地址](https://www.oracle.com/java/technologies/downloads/)

`下载后 JDK 的安装根据提示进行，还有安装 JDK 的时候也会安装 JRE，一并安装就可以了。安装JDK，安装过程中可以自定义安装目录等信息，例如我们选择安装目录为 C:\Program Files (x86)\Java\jdk1.8.0_91。`

### 配置环境变量

1. 安装完成后，右击"我的电脑"，点击"属性"，选择"高级系统设置"；

2. 选择"高级"选项卡，点击"环境变量"；

3. 在 "系统变量" 中设置 3 项属性，JAVA_HOME、PATH、CLASSPATH(大小写无所谓),若已存在则点击"编辑"，不存在则点击"新建"。

   - 变量名：**JAVA_HOME**     

   - 变量值：**C:\Program Files (x86)\Java\jdk1.8.0_91**     // 要根据自己的实际路径配置

   - 变量名：**CLASSPATH**    // 这是 Java 的环境配置，配置完成后，你可以启动 Eclipse 来编写代码，它会自动完成java环境的配置

   - 变量值：**.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;**     //记得前面有个"."

   - 变量名：**Path**

   - 变量值：**%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;**

     - :::tip

       **注意：***在 Windows10 中，Path 变量里是分条显示的，我们需要将* **%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;** *分开添加，否则无法识别：*
       :::

       ```
       %JAVA_HOME%\bin;
       %JAVA_HOME%\jre\bin;
       ```

[Windows 10 配置Java 环境变量](https://www.runoob.com/w3cnote/windows10-java-setup.html)



### 测试JDK是否安装成功

1. "开始"->"运行"，键入"cmd"；
2. 键入命令: **java -version**、**java**、**javac** 几个命令，出现以下信息，说明环境变量配置成功；