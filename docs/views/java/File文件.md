# File类

## 创建目录及文件

- ### public boolean createFileNext 

  创建文件，如果存在此文件，就不用创建

- ### public boolean mkdir

  创建文件夹，如果存在此文件夹，就不用创建

- ### public boolean mkdirs

  创建文件夹，如果父文件不存在，会帮你把他创建出来

- ### public boolean delete()

  如果文件/目录被其他程序占用，不能删除。如果此路径名表示一个目录，则该目录必须为空才能删除（目录里不能有目录或者文件）。

```java
File file = new File("bbb.txt");
file.createFileNext();

File file1 = new File("bbb");
file1.mkdir()
    
File file2 = new File("bbb\\ccc");
file2.mkdirs()
    
File file2 = new File("bbb\\ccc");
file2.delete()
```

- ### File 方法

  - #### public boolean isDirection
    判断是否为目录

  - #### public  boolean isFile

    判断是否为文件

  - #### public boolean  isHidden

    判断是否隐藏

  - #### public boolean  exit

    判断是否存在

  - #### public boolean  canRead

    判断是否可读

  - #### public boolean  canWrite

    判断是否可写

  - #### public String getAbsoultePath

    获取文件的绝对路径

  - #### public String getPath

    获取文件路径

  - #### public String getName

    获取文件名称

  - #### public long length

    获取文件长度

  - #### public long lastMethodFiled

    获取文件最后修改时间

  - #### public String [] list

    获取文件目录，或者文件数组名

  - #### public String [] listFile

    获取指定目录下的所有文件，或者数组文件

