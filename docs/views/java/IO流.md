# I/O流

## 输入流和输出流的类层次图。

<img :src="$withBase('/java/iostream2xx.png')" alt="foo">

字节流的类通常以stream结尾

## 字节输入流

- #### InputStream 

- #### FileInputStream

- ### BufferedInputStream

> ### 区别与用途
>
> - InputStream是字节输入流的抽象基类 ,InputStream作为基类，给它的基类定义了几个通用的函数：
>
>   - read(byte[] b)：从流中读取b的长度个字节的数据存储到b中，返回结果是读取的字节个数（当再次读时，如果返回-1说明到了结尾，没有了数据）
>
>   - read(byte[] b, int off, int len)：从流中从off的位置开始读取len个字节的数据存储到b中，返回结果是实际读取到的字节个数（当再次读时，如果返回-1说明到了结尾，没有了数据）
>
>   - close()：关闭流，释放资源。
>
>   - text
>
>     ```java
>     // 第1步、使用File类找到一个文件
>     File f= new File("d:" + File.separator + "test.txt") ;  
>     // 第2步、通过子类实例化父类对象
>     InputStream input = new FileInputStream(f)
>     // 第3步、进行读操作
>     byte b[] = new byte[(int)f.length()] ;        // 数组大小由文件决定
>     for(int i=0;i<b.length;i++){
>         b[i] = (byte)input.read() ;        // 读取内容
>     }
>     // 第4步、关闭输出流
>     input.close();
>     System.out.println("内容为：" + new String(b)) ;    // 把byte数组变为字符串输出
>     
>     /* 第二总方式 */
>     byte b[] = new byte[1024] ;        // 数组大小由文件决定
>     int len = 0 ;
>      while((len=input.read(b))!=-1){
>          // 表示还有内容，文件没有读完
>          System.out.println("内容为：" + new String(b,0,len)) ; 
>      }
>     input.close() ; 
>     ```
>
>     
>
> - FileInputStream主要用来操作文件输入流，它除了可以使用基类定义的函数外,它还实现了基类的read()函数（无参的）
>
>   - read():从流中读取1个字节的数据，返回结果是一个int，（如果编码是以一个字节一个字符的，可以尝试转成char，用来查看数据）。
>
>   - test
>
>     ```java
>     //1. 创建流
>     File file=new File("xxxxxxxx");
>     FileInputStream file =new FileInputStream(file)
>         
>     byte[] b = new byte[2];
>     int len;
>     while (-1!=(len = fis.read(b))) {
>         System.out.println(new String(b,0,len));
>     }
>      file.close();
>     ```
>
>     
>
> - BufferedInputStream带有缓冲的意思，普通的读是从硬盘里面读，而带有缓冲区之后，BufferedInputStream已经提前将数据封装到内存中，内存中操作数据要快，所以它的效率要要非缓冲的要高。它除了可以使用基类定义的函数外,它还实现了基类的read()函数（无参的）
>
>   - read():从流中读取1个字节的数据，返回结果是一个int，（如果编码是以一个字节一个字符的，可以尝试转成char，用来查看数据）
>
>   - test
>
>     ```java
>     //构造一个字节缓冲输入流对象
>     BufferedInputStream bis = new BufferedInputStream(new FileInputStream("bos.txt"));
>     //一次读取一个字节数组
>     byte[] bys = new byte[1024];
>     int len = 0;
>     while((len=bis.read(bys))!=-1) {
>             System.out.println(new String(bys, 0, len));  //通过使用平台的默认字符集解码指定的 byte 子数组，构造一个新的 String。
>     }
>     //释放资源
>     bis.close();
>     ```
>
>     

## 字节输出流

- #### OutputStream  

  OutputStream是抽象基类，所以它不能实例化，但它可以用于接口化编程。

- #### FileOutputStream

- #### BufferedOutputStream

> ### 区别与用途
>
> - OutputStream是字节输出流的基类， OutputStream作为基类，给它的基类定义了几个通用的函数
>
>   - write(byte[] b):将b的长度个字节数据写到输出流中。
>   - write(byte[] b,int off,int len):从b的off位置开始，获取len个字节数据，写到输出流中。
>   - flush():刷新输出流，把数据马上写到输出流中。
>   - close():关闭流，释放系统资源。
>
> - FileOutputStream是用于写文件的输出流，它除了可以使用基类定义的函数外,还实现了OutputStream的抽象函数write(int b)
>
>   - write(int b):将b转成一个字节数据，写到输出流中。
>
>   - test
>
>     ```java
>     File file=new File("C:\\Users\\Administrator\\Desktop");
>     // 构造函数第二个参数为真，意味着追加内容到末尾
>     FileOutputStream out=new FileOutputStream(file, false);
>     out.write("content".getBytes());
>     //out.write(bytes,0,length);
>     ```
>
>     
>
> - BufferedOutputStream像上面那个BufferedInputStream一样，都可以提高效率。它除了可以使用基类定义的函数外,它还实现了OutputStream的抽象函数write(int b):
>
>   - write(int b):将b转成一个字节数据，写到输出流中。
>
>   - test
>
>     ```java
>     // //符合Java一种设计模式:装饰者设计模式(过滤器:Filter)
>     BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("bos.txt"));
>     // 写数据
>     bos.write("hello".getBytes());
>     // bos.write(bytes,0,length);
>     // 释放资源
>     bos.close();
>     ```
>
> - 案例整合
>
>   ```java
>   // 为文件字节流 添加缓冲区功能， 一次读写一个字节数据，但内部缓冲区数组已经填满
>       private static void copyFile1(String src, String dest) throws IOException {
>           //1. 创建流
>           InputStream in = new BufferedInputStream(new FileInputStream(src));
>           OutputStream os = new BufferedOutputStream(new FileOutputStream(dest));
>           //2. 读写数据
>           int data = in.read();
>           while (data != -1) {
>               os.write(data);
>               data = in.read();
>           }
>           //3. 关闭流
>           in.close();
>           os.close();
>       }
>   
>       // 为文件字节流 添加缓冲区功能， 一次读写一个字节数组数据，但内部缓冲区数组已经填满
>       private static void copyFile2(String src, String dest) throws IOException {
>           //1. 创建流
>           InputStream in = new BufferedInputStream(new FileInputStream(src));
>           OutputStream os = new BufferedOutputStream(new FileOutputStream(dest));
>           //2. 读写数据
>           byte[] buffer = new byte[2048];
>           int len = in.read(buffer);
>           while (len != -1) {
>               os.write(buffer, 0, len);
>               len = in.read(buffer);
>           }
>           //3. 关闭流
>           in.close();
>           os.close();
>       }
>   ```



## 字符输入流

- #### Reader

  Reader 是一个抽象基类，不能实例化，但可以用于接口化编程。

- #### InputStreamReader

- #### FileReader

- #### BufferedReader

> ### 区别与用途
>
> - Reader是字符输入流的抽象基类 ,它定义了以下几个函数
>
>   - read() ：读取单个字符，返回结果是一个int，需要转成char;到达流的末尾时，返回-1
>   - read(char[] cbuf):读取cbuf的长度个字符到cbuf这种，返回结果是读取的字符数，到达流的末尾时，返回-1
>   - close() ：关闭流，释放占用的系统资源。
>
> - InputStreamReader需要一个字节输入流对象作为实例化参数。还可以指定第二个参数，第二个参数是字符编码方式，可以是编码方式的字符串形式，也可以是一个字符集对象。
>
>   - read(char[] cbuf, int offset, int length) ：从offset位置开始，读取length个字符到cbuf中，返回结果是实际读取的字符数，到达流的末尾时，返回-1
>
>   - test
>
>     ```java
>     // 创建InputStreamReader对象,构造方法中传递字节输入流和指定的编码表名称
>     InputStreamReader isr = new InputStreamReader(new FileInputStream("E:\\gbk.txt"),"UTF-8");
>      //2.使用InputStreamReader对象中的方法read读取文件
>     int len = 0;
>      while((len = isr.read())!=-1){
>       System.out.println((char)len);
>      }
>      //3.释放资源
>      isr.close();
>     ```
>
> - FileReader 可以把FileInputStream中的字节数据转成根据字符编码方式转成字符数据流。
>
>   - test
>
>     ```java
>     FileReader fr = new FileReader("FileWrite_test.txt");
>     int ch;
>     //这样写可以防止最后取值到-1的情况
>     while((ch=fr.read()) != -1){
>         System.out.print((char) ch);    //char就可以把原本是数字的文件翻译回来
>     }
>     fr.close();
>     
>     //数组自定长度一次性读取
>     char[] buf = new char[6];
>     int len;
>     while((len=fr2.read(buf)) != -1){
>         String str = new String(buf,0,len);
>         System.out.print(str);
>     }
>     fr.close();
>     ```
>
> - BufferedReader可以把字符输入流进行封装，将数据进行缓冲，提高读取效率。它除了可以使用基类定义的函数，它自己还实现了以下函数
>
>   - read(char[] cbuf, int offset, int length) ：从offset位置开始，读取length个字符到cbuf中，返回结果是实际读取的字符数，到达流的末尾时，返回-1
>
>   - readLine() ：读取一个文本行，以行结束符作为末尾，返回结果是读取的字符串。如果已到达流末尾，则返回 null
>
>   - test
>
>     ```java
>     // 创建字符缓冲输入流对象
>     BufferedReader br = new BufferedReader(new FileReader("D:/1.txt"));
>     //一次读取一个字符数组
>     char[] chs = new char[1024];
>     int len = 0;
>     while((len=br.read(chs))!=-1) {
>            System.out.println(new String(chs,0,len));
>     }
>     //释放资源
>     br.close();
>     ```



## 字符输出流

- #### Writer

  Writer 是一个抽象基类，不能实例化，但可以用于接口化编程。

- #### OutputStreamWriter

- #### FileWriter

- #### BufferedWriter

> ### 区别与用途
>
> - Writer是字符输出流的抽象基类， ,它定义了以下几个函数
>
>   - write(char[] cbuf) :往输出流写入一个字符数组。
>   - write(int c) ：往输出流写入一个字符。
>   - write(String str) ：往输出流写入一串字符串。
>   - write(String str, int off, int len) :往输出流写入字符串的一部分。
>   - close() ：关闭流，释放资源。 【这个还是抽象的，写出来是说明有这个关闭功能】
>   - flush()：刷新输出流，把数据马上写到输出流中。 【这个还是抽象的，写出来是说明有这个关闭功能】
>
> - OutputStreamWriter可以使我们直接往流中写字符串数据，它里面会帮我们根据字符编码方式来把字符数据转成字节数据再写给输出流，它相当于一个中介\桥梁。
>
>   ```java
>   // 创建对象
>   OutputStreamWriter osw = new OutputStreamWriter(new FileOutputStream("fos.txt"),"UTF-8");
>   // 写一个字符
>   osw.write('a');
>   //写一个字符数组
>   char[] chs = {'q','w','e','r','t'};
>   //写一个字符数组的一部分
>   osw.write(chs,1,3);
>   // 刷新缓冲区
>   osw.flush();
>   // 释放资源
>   osw.close();
>   ```
>
> - FileWriter与OutputStreamWriter功能类似，我们可以直接往流中写字符串数据，FileWriter内部会根据字符编码方式来把字符数据转成字节数据再写给输出流。
>
>   ```java
>   FileWriter fw = new FileWriter("FileWrite_test.txt");
>   //数字对应的写法
>   fw.write(48);
>   //字符串对应的写法
>   fw.write("hello world!!!");
>   //字符串截取的部分注意第一个数字是从哪开始截取，第二个数字是截取的长度(不是结束位置)
>   fw.write("东方不亮西方亮,在哪都是一样浪!",9,7);
>   //字符数组里面既可以放ASCII码还可以放单个字符(注意这里不是字符串强调这里是单个字符)
>   char[] array = {48,49,50,51,52,53,54,55,56,57,'J','a','v','a','!'};
>   fw.write(array);
>   fw.close();
>   ```
>
> - BufferedWriter比FileWriter还高级一点，它利用了缓冲区来提高写的效率。它还多出了一个函数：
>
>   - newLine() ：写入一个换行符。
>
>   - test
>
>     ```java
>     //创建一个字符缓冲输出流对象
>     BufferedWriter bw = new BufferedWriter(new FileWriter("bw.txt"));
>     for(int i=0;i<10;i++) {
>         bw.write("你可以随着我的步伐，轻轻柔柔的踩，将美丽的回忆慢慢重来");
>         bw.newLine();//换行
>         bw.flush();
>     }
>     bw.close();
>     ```