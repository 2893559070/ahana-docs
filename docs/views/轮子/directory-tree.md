# directory-tree 目录树

### 安装
```js
  npm install directory-tree
```

### 用法
```js
  const dirTree = require("directory-tree");
  const tree = dirTree("/some/path");
```

### 您还可以通过扩展正则表达式进行过滤：这对于仅包含某些类型的文件很有用。
```js
  const dirTree = require("directory-tree");
  const filteredTree = dirTree("/some/path", { extensions: /\.txt/ });
```

### 使用 Regex 过滤多个扩展名的示例。
```js
  const dirTree = require("directory-tree");
  const filteredTree = dirTree("/some/path", {
    extensions: /\.(md|js|html|java|py|rb)$/
  });
```

### 您还可以使用正则表达式从树中排除路径：
```js
  const dirTree = require("directory-tree");
  const filteredTree = dirTree("/some/path", { exclude: /some_path_to_exclude/ });
```

### 您还可以指定您希望在每个文件/目录中包含哪些附加属性：
```js
  const dirTree = require('directory-tree');
  const filteredTree = dirTree('/some/path', {attributes:['mode', 'mtime']});
```

### 默认属性[name, path]用于文件和[name, path, children]目录
#### 可以使用与提供的扩展名匹配的每个文件执行回调函数：
```js
  const PATH = require('path');
  const dirTree = require('directory-tree');

  const tree = dirTree('./test/test_data', {extensions:/\.txt$/}, (item, PATH, stats) => {
    console.log(item);
  });
```

### 回调函数采用目录项（具有路径、名称、大小和扩展名）以及节点路径的实例和节点 FS.stats的实例。

#### 您还可以为目录传递回调函数：
```js
  const PATH = require('path');
  const dirTree = require('directory-tree');

  const tree = dirTree('./test/test_data', {extensions:/\.txt$/}, null, (item, PATH, stats) => {
    console.log(item);
  });
```

### 选项
  ```js
  exclude: RegExp|RegExp[]- 一个 RegExp 或 RegExp 数组，用于测试是否排除目录。

  extensions: RegExp- 一个正则表达式，用于测试排除具有匹配扩展名的文件。

  attributes: string[]- FS.stats属性数组。

  normalizePath: Boolean- 如果为 true，windows 样式路径将被规范化为 unix 样式路径（/ 而不是 \）。
  ```

### 结果
#### 给定一个结构如下的目录：
```js
  photos
  ├── summer
  │   └── june
  │       └── windsurf.jpg
  └── winter
      └── january
          ├── ski.png
          └── snowboard.jpg
```
#### directory-treewithattributes: ["size", "type", "extension"] 将返回这个 JS 对象：
```js
  {
    "path": "photos",
    "name": "photos",
    "size": 600,
    "type": "directory",
    "children": [
      {
        "path": "photos/summer",
        "name": "summer",
        "size": 400,
        "type": "directory",
        "children": [
          {
            "path": "photos/summer/june",
            "name": "june",
            "size": 400,
            "type": "directory",
            "children": [
              {
                "path": "photos/summer/june/windsurf.jpg",
                "name": "windsurf.jpg",
                "size": 400,
                "type": "file",
                "extension": ".jpg"
              }
            ]
          }
        ]
      },
      {
        "path": "photos/winter",
        "name": "winter",
        "size": 200,
        "type": "directory",
        "children": [
          {
            "path": "photos/winter/january",
            "name": "january",
            "size": 200,
            "type": "directory",
            "children": [
              {
                "path": "photos/winter/january/ski.png",
                "name": "ski.png",
                "size": 100,
                "type": "file",
                "extension": ".png"
              },
              {
                "path": "photos/winter/january/snowboard.jpg",
                "name": "snowboard.jpg",
                "size": 100,
                "type": "file",
                "extension": ".jpg"
              }
            ]
          }
        ]
      }
    ]
  }
```