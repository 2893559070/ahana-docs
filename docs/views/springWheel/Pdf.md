# Pdf
- 概述
在企业级应用开发中，报表生成、报表打印下载是其重要的一个环节。在之前的课程中我们已经学习了报表中比较重要的一种：Excel报表。其实除了Excel报表之外，PDF报表也有广泛的应用场景，必须用户详细资料，用户简历等。
- 常见PDF报表的制作方式
    1. iText PDF：iText是著名的开放项目，是用于生成PDF文档的一个java类库。通过iText不仅可以生成PDF或rtf的文档，而且可以将XML、Html文件转化为PDF文件。
    2. Openoffice：openoffice是开源软件且能在windows和linux平台下运行，可以灵活的将word或者Excel转化为PDF文档。
    3. Jasper Report：是一个强大、灵活的报表生成工具，能够展示丰富的页面内容，并将之转换成PDF

## JasperReport
JasperReport是一个强大、灵活的报表生成工具，能够展示丰富的页面内容，并将之转换成PDF，HTML，或者XML格式。该库完全由Java写成，可以用于在各种Java应用程序，包括J2EE，Web应用程序中生成动态内容。只需要将JasperReport引入工程中即可完成PDF报表的编译、显示、输出等工作。

- 在开源的JAVA报表工具中，JASPER Report发展是比较好的，比一些商业的报表引擎做得还好，如支持了十字交叉报表、统计报表、图形报表，支持多种报表格式的输出，如PDF、RTF、XML、CSV、XHTML、TEXT、DOCX以及OpenOffice。
- 数据源支持更多，常用 JDBC SQL查询、XML文件、CSV文件 、HQL（Hibernate查询），HBase，JAVA集合等。还允许你义自己的数据源，通过JASPER文件及数据源，JASPER就能生成最终用户想要的文档格式。

### 1. JasperReport生命周期
通常我们提到PDF报表的时候,浮现在脑海中的是最终的PDF文档文件。在JasperReports中，这只是报表生命周期的最后阶段。通过JasperReports生成PDF报表一共要经过三个阶段，我们称之为 JasperReport的生命周期，这三个阶段为：设计（Design）阶段、执行（Execution）阶段以及输出（Export）阶段，如下图所示：

 <img :src="$withBase('/pdf/1.png')" alt="foo">

1. 设计阶段（Design）：所谓的报表设计就是创建一些模板，模板包含了报表的布局与设计，包括执行计算的
复杂公式、可选的从数据源获取数据的查询语句、以及其它的一些信息。模板设计完成之后，我们将模板保
存为JRXML文件（JR代表JasperReports）,其实就是一个XML文件。
2. 执行阶段（Execution）：使用以JRXML文件编译为可执行的二进制文件（即.Jasper文件）结合数据进行执
行，填充报表数据
3. 输出阶段（Export）：数据填充结束，可以指定输出为多种形式的报表

### 2. JasperReport原理简述
 <img :src="$withBase('/pdf/2.png')" alt="foo">

1. JRXML:报表填充模板，本质是一个XML.
JasperReport已经封装了一个dtd，只要按照规定的格式写这个xml文件，那么jasperReport就可以将其解析最终生成报表，但是jasperReport所解析的不是我们常见的.xml文件，而是.jrxml文件，其实跟xml是一样的，只是后缀不一样。
2. Jasper:由JRXML模板编译生成的二进制文件，用于代码填充数据。解析完成后JasperReport就开始编译.jrxml文件，将其编译成.jasper文件，因为JasperReport只可以对.jasper文件进行填充数据和转换，这步操作就跟我们java中将java文件编译成class文件是一样的
3. Jrprint:当用数据填充完Jasper后生成的文件，用于输出报表。这一步才是JasperReport的核心所在，它会根据你在xml里面写好的查询语句来查询指定是数据库，也可以控制在后台编写查询语句，参数，数据库。在报表填充完后，会再生成一个.jrprint格式的文件（读取jasper文件进行填充，然后生成一个jrprint文件）
4. Exporter:决定要输出的报表为何种格式，报表输出的管理类。
5. Jasperreport可以输出多种格式的报表文件，常见的有Html,PDF,xls等

### 3. 开发流程概述
- 制作报表模板
- 模板编译
- 构造数据
- 填充模板数据

## 模板工具Jaspersoft Studio
Jaspersoft Studio是JasperReports库和JasperReports服务器的基于Eclipse的报告设计器; 它可以作为Eclipse插件或作为独立的应用程序使用。Jaspersoft Studio允许您创建包含图表，图像，子报表，交叉表等的复杂布局。您可以通过JDBC，TableModels，JavaBeans，XML，Hibernate，大数据（如Hive），CSV，XML / A以及自定义来源等各种来源访问数据，然后将报告发布为PDF，RTF， XML，XLS，CSV，HTML，XHTML，文本，DOCX或OpenOffice。
Jaspersoft Studio 是一个可视化的报表设计工具,使用该软件可以方便地对报表进行可视化的设计，设计结果为格式.jrxml 的 XML 文件，并且可以把.jrxml 文件编译成.jasper 格式文件方便 JasperReport 报表引擎解析、显示。

### 1. 安装配置
到JasperReport官网下载 https://community.jaspersoft.com/community-download
下载 Library Jar包（传统导入jar包工程需下载）和模板设计器Jaspersoft studio。并安装Jaspersoft studio，安装的过程比较简单，一直下一步直至安装成功即可。

### 2. 面板介绍
 <img :src="$withBase('/pdf/3.png')" alt="foo">

- Report editing area （主编辑区域）中，您直观地通过拖动，定位，对齐和通过 Designer palette（设计器调色板）对报表元素调整大小。JasperSoft Studio 有一个多标签编辑器，Design,Source 和 Preview：
    - Design tab：当你打开一个报告文件，它允许您以图形方式创建报表选中
    - Source tab： 包含用于报表的 JRXML 源代码。
    - Preview tab： 允许在选择数据源和输出格式后，运行报表预览。
- Repository Explorer view：包含 JasperServer 生成的连接和可用的数据适配器列表
- Project Explorer view：包含 JasperReports 的工程项目清单
- Outline view：在大纲视图中显示了一个树的形式的方式报告的完整结构。
- Properties view：通常是任何基于 Eclipse 的产品/插件的基础之一。它通常被填充与实际所选元素的属性的信息。这就是这样，当你从主设计区域（即：一个文本字段）选择一个报表元素或从大纲，视图显示了它的信息。其中一些属性可以是只读的，但大部分都是可编辑的，对其进行修改，通常会通知更改绘制的元素（如：元素的宽度或高度）。
- Problems view：显示的问题和错误，例如可以阻断报告的正确的编译。
- Report state summary 提供了有关在报表编译/填充/执行统计用户有用的信息。错误会显示在这里

### 3. 基本使用
1. 模板制作
    1. 打开Jaspersoft Studio ，新建一个project, 步骤： File -> New -> Project-> JasperReports Project
    <img :src="$withBase('/pdf/4.png')" alt="foo">

    2. 新建一个Jasper Report模板，在 Stidio的左下方Project Explorer 找到刚才新建的Project (我这里新建的是DemoReport),步骤：项目右键 -> New -> Jasper Report
    <img :src="$withBase('/pdf/5.png')" alt="foo">

    3. 选择 Blank A4 (A4纸大小的模板)，然后 Next 命名为DemoReport1.jrxml
    <img :src="$withBase('/pdf/6.png')" alt="foo">
    如图所示，报表模板被垂直的分层，每一个部分都是一个Band,每一个Band的特点不同：
    <img :src="$withBase('/pdf/7.png')" alt="foo">

    - Title(标题)：只在整个报表的第一页的最上端显示。只在第一页显示，其他页面均不显示。
    - Page Header(页头)：在整个报表中每一页都会显示。在第一页中，出现的位置在 Title Band的下面。在除了第一页的其他页面中Page Header 的内容均在页面的最上端显示。
    - Page Footer(页脚)：在整个报表中每一页都会显示。显示在页面的最下端。一般用来显示页码。
    - Detail 1(详细)：报表内容，每一页都会显示。
    - Column Header(列头)：Detail中打印的是一张表的话，这Column Header就是表中列的列头。
    - Column Footer(列脚)：Detail中打印的是一张表的话，这Column Footer就是表中列的列脚。
    - Summary(统计)：表格的合计段，出现在整个报表的最后一页中，在Detail 1 Band后面。主要是用来做报表的合计显示。

2. 编译模板
右键单机模板文件 -> compile Report 对模板进行编译，生成.jasper文件
    <img :src="$withBase('/pdf/8.png')" alt="foo">

### 4. 整合工程
1. 新建SpringBoot工程引入坐标
    ```maven
       <dependency>
          <groupId>net.sf.jasperreports</groupId>
          <artifactId>jasperreports</artifactId>
          <version>6.5.0</version>
      </dependency>
    ```
2. 导入生成的.jasper文件、创建测试controller
    ```java
    @RestController
    public class JasperController {
       @GetMapping("/testJasper")
       public void createHtml(HttpServletResponse response, HttpServletRequest
    request)throws Exception{
           //引入jasper文件。由JRXML模板编译生成的二进制文件，用于代码填充数据
           Resource resource = new ClassPathResource("templates/test01.jasper");
           //加载jasper文件创建inputStream
           FileInputStream isRef = new FileInputStream(resource.getFile());
           ServletOutputStream sosRef = response.getOutputStream();
           try {
               //创建JasperPrint对象
               JasperPrint jasperPrint = JasperFillManager.fillReport(isRef, new HashMap<>
    (),new JREmptyDataSource());
               //写入pdf数据
               JasperExportManager.exportReportToPdfStream(jasperPrint,sosRef);
          } finally {
               sosRef.flush();
               sosRef.close();
          }
      }
    }
    ```

### 4. 中文处理
1. 设计阶段需要指定中文样式
    <img :src="$withBase('/pdf/9.png')" alt="foo">
2. 通过手动指定中文字体的形式解决中文不现实
    - 添加properties文件：
        ```properties
            net.sf.jasperreports.extension.registry.factory.simple.font.families=net.sf.jasperreports.engine.fonts.SimpleFontExtensionsRegistryFactorynet.sf.jasperreports.extension.simple.font.families.lobstertwo=stsong/fonts.xml
        ```
    - 指定中文配置文件fonts.xml
        ```xml
            <?xml version="1.0" encoding="UTF-8"?>
            <fontFamilies>
               <fontFamily name="华文宋体">
                   <normal>stsong/stsong.TTF</normal>
                   <bold>stsong/stsong.TTF</bold>
                   <italic>stsong/stsong.TTF</italic>
                   <boldItalic>stsong/stsong.TTF</boldItalic>
                   <pdfEncoding>Identity-H</pdfEncoding>
                   <pdfEmbedded>true</pdfEmbedded>
                   <exportFonts>
                       <export key="net.sf.jasperreports.html">'华文宋体', Arial, Helvetica, sans-serif</export>
                       <export key="net.sf.jasperreports.xhtml">'华文宋体', Arial, Helvetica, sans-serif</export>
                   </exportFonts>
                   <!--
                   <locales>
                       <locale>en_US</locale>
                       <locale>de_DE</locale>
                   </locales>
                   -->
               </fontFamily>
            </fontFamilies>
        ```
    - 引入字体库stsong.TTF


## PDF报表

### 1. 数据填充
使用JasperReport来生成简单的文本报表，正式企业开发中动态数据展示也是报表中最重要的一环，接下来我们共同研究的就是填充动态数据到PDF报表中。
```java
/**
* 填充数据构造JasperPrint
* is: 文件输入流
* parameters：参数
* dataSource：数据源
*/
public static JasperPrint fillReport(InputStream is, Map<String, Object> parameters, 
JRDataSource dataSource) throws JRException {
    //...
}
```
通过这段填充数据的源代码得知，JasperReport对报表模板中的数据填充有很多中方式，最典型的有以下两种：
- Parameters（参数）填充
- DataSource（数据源）填充

#### 1.1 参数Map填充数据
Parameters通常是用来在打印的时候从程序里传值到报表里。也就是说parameters通常的是起参数传递的作用。他们可以被用在一些特定的场合(比如应用中SQL 查询的条件),如report中任何一个需要从外部传入的变量等(如一个Image对象所包括的char或报表title的字符串)。parameters也需要在创建的时候定义它的数据类型。parameters的数据类型是标准的java的Object。

- 1.1.1 模板制作
    - （1） 创建新模板，删除不需要的Band
            <img :src="$withBase('/pdf/10.png')" alt="foo">

    - （2）创建Parameter
        在outline面板中找到Parameters,右键 -> Create Parameter,新建一个Parameter(生成一个Paramerter1)
            <img :src="$withBase('/pdf/11.png')" alt="foo">
        右键 Paramete1 -> Show Properties. 设置Name为title、Class为java.lang.String.这里要注意名字要认真取不能重复，因为传入的参数的key就是这个参数名，以此来进行一一对应
            <img :src="$withBase('/pdf/12.png')" alt="foo">
    - （3）模板参数设置
        将设置好的参数直接拖入表格中对应的位置，并设置好大小与对齐方式。
            <img :src="$withBase('/pdf/13.png')" alt="foo">
- 1.1.2 PDF输出
    ```java
         @GetMapping("/testJasper02")
       public void createPdf(HttpServletRequest request, HttpServletResponse response) 
    throws IOException {
           //1.引入jasper文件
           Resource resource = new ClassPathResource("templates/parametersTest.jasper");
           FileInputStream fis = new FileInputStream(resource.getFile());
           //2.创建JasperPrint,向jasper文件中填充数据
           ServletOutputStream os = response.getOutputStream();
           try {
               /**
                * parameters集合中传递的key需要和设计模板中使用的name一致
                */
               HashMap parameters = new HashMap();
               parameters.put("title","用户详情");
               parameters.put("username","李四");
               parameters.put("companyName","你猜猜");
               parameters.put("mobile","120");
               parameters.put("departmentName","猜猜你");
               JasperPrint print = JasperFillManager.fillReport(fis, parameters,new JREmptyDataSource());
               //3.将JasperPrint已PDF的形式输出
               JasperExportManager.exportReportToPdfStream(print,os);
               response.setContentType("application/pdf");
          } catch (JRException e) {
               e.printStackTrace();
          }finally {
               os.flush();
          }
      }
    ```

#### 1.2 数据源填充数据

- 1.2.1 JDBC数据源
    - 1.2.1.1 配置数据连接
            使用JDBC数据源填充数据：使用Jaspersoft Studio 先要配置一个数据库连接
                <img :src="$withBase('/pdf/14.png')" alt="foo">
            配置数据库信息
                <img :src="$withBase('/pdf/15.png')" alt="foo">
                这一步，需要： （1）给创建的这个数据连接起个名字； （2）根据数据库选择驱动类型； Jaspersoft Studio 已经内置了很多常用数据库的驱动，使用的时候直接选就可以了。当然，如果这还满足不了你的话，你还可以添加你指定的 JDBC 驱动 jar 包。
    - 1.2.1.2 模板制作
        - （1）制作空白模板
        - （2）将数据库用户字段配置到模块中
            为了方便的进行模板制作，可以将需要数据库表中的字段添加到Studio中。在outline中右键模板，选择dataset and query
                <img :src="$withBase('/pdf/16.png')" alt="foo">
            用户可以在 SQL 查询语句输入窗口中，输入需要查询数据的查询语句，点击右上角的“Read Fields”按钮，界面下方的字段列表中，就会显示此查询语句中所涵盖的所有字段的列表。在后面的报表设计中，我们就可以直接使用这些字段了。
                <img :src="$withBase('/pdf/17.png')" alt="foo">
            在“Fields”列表中，只保留报表中使用的字段，其他用不到的字段最好用“Delete”删掉，防止由于数据表变化，导致报表模板中的字段设置与数据表对应不上，导致报表报错。输入完毕后，点击“OK”按钮，系统即会把查询语句保存在报表模板中。
                <img :src="$withBase('/pdf/18.png')" alt="foo">
        - （3）填充Filed
            将id,mobile，username等拖入到 Detail Band中设计模板如下：
                <img :src="$withBase('/pdf/19.png')" alt="foo">
    - 1.2.1.3 PDF输出
        ```java
             //测试JDBC连接数据源
           @GetMapping("/testJasper03")
           public void createPdf(HttpServletRequest request, HttpServletResponse response) 
        throws Exception {
               //1.引入jasper文件
               Resource resource = new ClassPathResource("templates/testConn.jasper");
               FileInputStream fis = new FileInputStream(resource.getFile());
               //2.创建JasperPrint,向jasper文件中填充数据
               ServletOutputStream os = response.getOutputStream();
               try {
                   /**
                    * 1.jasper文件流
                    * 2.参数列表
                    * 3.数据库连接
                    */
                   HashMap parameters = new HashMap();
        JasperPrint print = JasperFillManager.fillReport(fis, 
        parameters,getConnection());
                   //3.将JasperPrint已PDF的形式输出
                   JasperExportManager.exportReportToPdfStream(print,os);
                   response.setContentType("application/pdf");
              } catch (JRException e) {
                   e.printStackTrace();
              }finally {
                   os.flush();
              }
          }
           //创建数据库Connection
           public Connection getConnection() throws Exception {
               String url = "jdbc:mysql://localhost/ihrm";
               Class.forName("com.mysql.jdbc.Driver");
               Connection conn = DriverManager.getConnection(url, "root", "111111");
               return conn;
          }
        ```
- 1.2.2 JavaBean数据源
    -  1.2.2.1 创建Filed
        - （1）创建Filed
            <img :src="$withBase('/pdf/20.png')" alt="foo">
        - （2）构造模板
            <img :src="$withBase('/pdf/21.png')" alt="foo">
    - 1.2.2.2 PDF输出
        - （1）配置实体类
            ```java
            package cn.itcast.bean;
            public class User {
               private String id;
               private String username;
               private String mobile;
               private String companyName;
               private String departmentName;
               public User(String id, String username, String mobile, String companyName, String
            departmentName) {
                   this.id = id;
                   this.username = username;
                   this.mobile = mobile;
                   this.companyName = companyName;
                   this.departmentName = departmentName;
              }
               public String getId() {
                   return id;
              }
               public void setId(String id) {
                   this.id = id;
              }
               public String getUsername() {
                   return username;
              }
             public void setUsername(String username) {
                   this.username = username;
              }
               public String getMobile() {
                   return mobile;
              }
               public void setMobile(String mobile) {
                   this.mobile = mobile;
              }
               public String getCompanyName() {
                   return companyName;
              }
               public void setCompanyName(String companyName) {
                   this.companyName = companyName;
              }
               public String getDepartmentName() {
                   return departmentName;
              }
               public void setDepartmentName(String departmentName) {
                   this.departmentName = departmentName;
              }
            }
            ```
        - （2）使用javaBean数据源
            ```java
                 //测试javaBean数据源
               @GetMapping("/testJasper04")
               public void createPdf(HttpServletRequest request, HttpServletResponse response) 
            throws Exception {
                   //1.引入jasper文件
                   Resource resource = new ClassPathResource("templates/testJavaBean.jasper");
                   FileInputStream fis = new FileInputStream(resource.getFile());
                   //2.创建JasperPrint,向jasper文件中填充数据
                   ServletOutputStream os = response.getOutputStream();
                   try {
                       HashMap parameters = new HashMap();
                       //构造javaBean数据源
                       JRBeanCollectionDataSource ds = new
            JRBeanCollectionDataSource(getUserList());
                       /**
                        * 1.jasper文件流
                        * 2.参数列表
                        * 3.JRBeanCollectionDataSource
                        */
                       JasperPrint print = JasperFillManager.fillReport(fis, parameters,ds);
                         //3.将JasperPrint已PDF的形式输出
                       JasperExportManager.exportReportToPdfStream(print,os);
                       response.setContentType("application/pdf");
                  } catch (JRException e) {
                       e.printStackTrace();
                  }finally {
                       os.flush();
                  }
              }
               //创建数据库Connection
               public List<User> getUserList() throws Exception {
                   List<User> list = new ArrayList<>();
                   for (int i=1;i<=5;i++) {
                       User user = new User(i+"", "testName"+i, "10"+i, "企业"+i, "部门"+i);
                       list.add(user);
                  }
                   return list;
              }
            ```

### 2. 分组报表
有两种情况会使用分组报表：
- 美观和好看的显示。
- 当数据分为两层表时，经常需要批量打印子表的数据。打印时，常常需要按照父表的外键或关联值进行自动分组，即每一条父表记录所属的子表记录打印到一组报表中，每组报表都单独计数及计算页数。
在应用中，可以通过选择需要打印的父表记录，将父表记录的 ID 传入，由报表自动进行分组。

#### 1. 设置分组属性
- （1）新建模板
    使用用户列表模板完成分组案例
- （2）新建报表群组
    选中报表名称点击右键，选择菜单中的“Create Group”。
        <img :src="$withBase('/pdf/22.png')" alt="foo">
    需要设置分组的名称、分组字段。也可以设置按照指定的函数、方法处理后进行分组
        <img :src="$withBase('/pdf/23.png')" alt="foo">
    按照字段“companyName”进行分组。设置完毕，点击“Next”。系统显示细节设置界面。此处可以设置是否加入“group header”和“group footer”区。建议保持默认选中，加入这两个区域，这样可以控制在每组报表的结尾，打印相应的信息，例如统计信息等。
        <img :src="$withBase('/pdf/24.png')" alt="foo">
- （3）放置报表数据
    将companyName拖入 Group Header中 ，会跳出 TextField Wizard框，选中 NoCalculation Function
        <img :src="$withBase('/pdf/25.png')" alt="foo">
    双击 $F{deptId} 会弹出Expression editor框
        <img :src="$withBase('/pdf/26.png')" alt="foo">

#### 2. 添加分组Band
将需要作为表头打印的内容拖入 CompanyGroup Header1 栏，将字段拖入 detail 栏，将每个分组结尾需要打印的内容放入 Companygroup footer 栏，将页脚需要打印的内容放入 Page Footer栏，如下图。
        <img :src="$withBase('/pdf/27.png')" alt="foo">

#### 3. PDF输出
```java
 //测试分组
    @GetMapping("/testJasper05")
    public void createPdf(HttpServletRequest request, HttpServletResponse response) 
throws Exception {
        //1.引入jasper文件
        Resource resource = new ClassPathResource("templates/testGroup.jasper");
        FileInputStream fis = new FileInputStream(resource.getFile());
        //2.创建JasperPrint,向jasper文件中填充数据
        ServletOutputStream os = response.getOutputStream();
        try {
            HashMap parameters = new HashMap();
            //构造javaBean数据源
            JRBeanCollectionDataSource ds = new
JRBeanCollectionDataSource(getUserList());
            /**
             * 1.jasper文件流
             * 2.参数列表
             * 3.JRBeanCollectionDataSource
             */
            JasperPrint print = JasperFillManager.fillReport(fis, parameters,ds);
            //3.将JasperPrint已PDF的形式输出
            JasperExportManager.exportReportToPdfStream(print,os);
            response.setContentType("application/pdf");
       } catch (JRException e) {
            e.printStackTrace();
       }finally {
            os.flush();
       }
   }
 //创建数据库Connection
    public List<User> getUserList() throws Exception {
     List<User> list = new ArrayList<>();
        for(int i=1;i<=3;i++) {
            User user = new User("ahana"+i, "haha"+i, "1380000000"+i, "你猜猜", "猜猜他");
            list.add(user);
       }
        for(int i=1;i<=3;i++) {
            User user = new User("ahana"+i, "haha"+i, "1880000000"+i, "他猜猜", "猜猜他");
            list.add(user);
       }
        return list;
   }
```
<img :src="$withBase('/pdf/28.png')" alt="foo">

### 3. Chart图表

1. 创建模板
    - （1）创建模板，删除不需要的band，保留title和summary。
        <img :src="$withBase('/pdf/29.png')" alt="foo">
    - （2）创建fileds
        <img :src="$withBase('/pdf/30.png')" alt="foo">
    - （3）创建chart图标
        - 第一步：palette面板找到chart图表，拖拽到band中
        - 第二步：选择需要的图表类型
            <img :src="$withBase('/pdf/31.png')" alt="foo">
        - 第三步：设置图表参数
            <img :src="$withBase('/pdf/32.png')" alt="foo">
            - Key： 圆饼图的内容是什么，也就是下面的 First，Second…的内容
            - Value：这个圆饼图的比例依据，根据 Value 属性来显示每个 Key 占的比例
            - Label：显示标签
2. PDF输出
    - 实体类
        ```java
        public class UserCount {
           private String companyName;
           private Integer count;
           public UserCount(String companyName, Integer count) {
               this.companyName = companyName;
               this.count = count;
          }
           public String getCompanyName() {
               return companyName;
          }
           public void setCompanyName(String companyName) {
               this.companyName = companyName;
          }
           public Integer getCount() {
               return count;
        }
           public void setCount(Integer count) {
               this.count = count;
          }
        }
        ```
    - PDF输出
        ```java
            //测试图表
           @GetMapping("/testJasper06")
           public void createPdf(HttpServletRequest request, HttpServletResponse response) 
        throws Exception {
               //1.引入jasper文件
               Resource resource = new ClassPathResource("templates/testChart.jasper");
               FileInputStream fis = new FileInputStream(resource.getFile());
               //2.创建JasperPrint,向jasper文件中填充数据
               ServletOutputStream os = response.getOutputStream();
               try {
                   HashMap parameters = new HashMap();
                   //parameters.put("userCountList",getUserList());
                   //构造javaBean数据源
                   JRBeanCollectionDataSource ds = new
        JRBeanCollectionDataSource(getUserList());
                   /**
                    * 1.jasper文件流
                    * 2.参数列表
                    * 3.JRBeanCollectionDataSource
                    */
                   JasperPrint print = JasperFillManager.fillReport(fis, parameters,ds);
                   //3.将JasperPrint已PDF的形式输出
                   JasperExportManager.exportReportToPdfStream(print,os);
                   response.setContentType("application/pdf");
              } catch (JRException e) {
                   e.printStackTrace();
              }finally {
                   os.flush();
              }
          }
           //创建数据库Connection
           public List<UserCount> getUserList() throws Exception {
               List<UserCount> list = new ArrayList<>();
               UserCount uc1 = new UserCount("传智播客",10);
               UserCount uc2 = new UserCount("黑马程序员",10);
               list.add(uc1);
               list.add(uc2);
               return list;
          }
        ```

### 4. 父子报表
复杂报表或数据内容较多的时候，可以使用子报表解决。

- 制作父报表
    首先制作父报表，就是调用子报表的一个基础报表。主报表的作用有如下两种：
    - 父报表中需要显示数据，使用子报表弥补studio设计的不足
    - 父报表不需要显示任何数据，只是作为子报表的载体。适用于复杂报表的设计
- 制作子报表
点击组件面板上的“Subreport”按钮，拖动到报表工作区上。
    <img :src="$withBase('/pdf/33.png')" alt="foo">
系统会自动弹出子报表选择窗口。可以选择创建一个新报表，还是使用一个已有的报表作为子报表。
    <img :src="$withBase('/pdf/34.png')" alt="foo">
    选择“Create a new report”，可以立即制作新的子报表；如果选择“Select an existing report”，则可以调用已经有的报表作为子报表；如果选择“Just create the subreport element”，系统会生成一个子报表区，可以在之后挂接需要的子报表。

- 参数传递
    <img :src="$withBase('/pdf/35.png')" alt="foo">

- 代码
```java
    //测试父子模板
    @GetMapping("/testJasper07")
    public void createPdf(HttpServletRequest request, HttpServletResponse response) 
    throws Exception {
           //1.引入jasper文件
           Resource resource = new ClassPathResource("templates/main.jasper");
           FileInputStream fis = new FileInputStream(resource.getFile());
           //2.创建JasperPrint,向jasper文件中填充数据
           ServletOutputStream os = response.getOutputStream();
           try {
               HashMap parameters = new HashMap();
               Resource subResource = new ClassPathResource("templates/sub-group.jasper");
               parameters.put("subpath",subResource.getFile().getPath());
               parameters.put("sublist",getUserList());
               parameters.put("sublist",getUserList());
               JRBeanCollectionDataSource ds = new
    JRBeanCollectionDataSource(getUserList());
               JasperPrint print = JasperFillManager.fillReport(fis, parameters,new
    JREmptyDataSource());
               //3.将JasperPrint已PDF的形式输出
               JasperExportManager.exportReportToPdfStream(print,os);
               response.setContentType("application/pdf");
          } catch (JRException e) {
               e.printStackTrace();
          }finally {
               os.flush();
          }
      }
       //创建数据库Connection
       public List<User> getUserList() throws Exception {
           List<User> list = new ArrayList<>();
           for(int i=1;i<=3;i++) {
               User user = new User("aaa"+i, "aaa"+i, "aaa"+i, "aaa", "aaa");
               list.add(user);
          }
           for(int i=1;i<=3;i++) {
               User user = new User("aaa"+i, "aaa"+i, "aaa"+i, "aaa", "aaa");
               list.add(user);
          }
           return list;
      }
```