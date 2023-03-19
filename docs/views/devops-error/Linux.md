# Linux

## 中文文件名乱码

有时候将文件传输到Linux 目录里中文文件名会出现乱码，这是因为你的中文文件格式和Linux 系统格式不一致导致的，下面就来解决这个问题。

1. 安装 convmv 文件转码工具

```bash
  yum install convmv -y
```

2. 转换要操作的文件名，将文件编码转换和Linux系统对应编码即可

```bash
  convmv -f gbk -t utf-8 -r --notest /home/要操作的文件名
```

3. 以下为 convmv 常用参数:

```bash
  -f enc     源编码
  -t enc     新编码
  -r         递归处理子文件夹
  -i         交互文向转换
  --list     显示所有可用编码
  --nosmart  如果是utf8文件，忽略
  --notest   直接转换不测试
  --replace  文件相同直接替换
  --unescape 可以做一下转义，比如把%20变成空格
  --upper    全部转换成大写
  --lower    全部转换成小定
```
