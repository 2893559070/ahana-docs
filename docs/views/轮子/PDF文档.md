# 生成 PDF 文档

PDF（便携式文件格式，Portable Document Format）是由 Adobe Systems 在 1993 年用于文件交换所发展出的文件格式。在浏览器端，利用一些现成的开源库，比如 jsPDF，我们也可以方便地生成 PDF 文档。

## 安装

```js
npm install pdfjs-dist
```

## 引入

```js
import PDFJS from 'pdfjs-dist'
PDFJS.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker.js'
```

## 介绍

- getDocument()：用于异步获取PDf文档，发送多个Ajax请求以块的形式下载文档。它返回一个Promise，该Promise的成功回调传递一个对象，该对象包含PDF文档的-信息，该回调中的代码将在完成PDf文档获取时执行。
- getPage()：用于获取PDF文档中的各个页面。
- getViewport()：针对提供的展示比例，返回PDf文档的页面尺寸。
- render()：渲染PDF。

## 使用

### 渲染PDF

```html
  <!-- 首先，我们需要在HTML中添加<canvas>元素以渲染PDF -->
  <canvas id="pdf-canvas"></canvas>

  <!-- 然后添加渲染PDF的js代码： -->

  <script>
    var url = 'Helloworld.pdf';

    PDFJS.getDocument(url).then((pdf) => {
        return pdf.getPage(1);
    }).then((page) => {
        // 设置展示比例
        var scale = 1.5;
        // 获取pdf尺寸
        var viewport = page.getViewport(scale);
        // 获取需要渲染的元素
        var canvas = document.getElementById('pdf-canvas');
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        var renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        
        page.render(renderContext);
    });
    // 现在，PDF已经成功渲染在界面上了。我们来分析一下使用到的函数：

  </script>
```

### 渲染PDF复制

 使用Text-Layers渲染
 PDF.js支持在使用Canvas渲染的PDF页面上渲染文本图层。然而，这个功能需要用到额外的两个文件：text_layer_builder.js和text_layer_builder.css。

 ```js
 import { TextLayerBuilder } from 'pdfjs-dist/web/pdf_viewer';
 import 'pdfjs-dist/web/pdf_viewer.css';
 ```

 开始

 ```html
 <!-- 创建渲染需要用到DOM节点 -->
 <div id="container"></div>
 <!-- div#container为最外层节点，在该div中，我们会为PDF的每个页面创建自己的div，在每个页面的div中，都会有Canvas元素。 -->

 <script>
  var container, pageDiv;

  function getPDF(url) {
      PDFJS.getDocument(url).then((pdf) => {
          pdfDoc = pdf;
          container = document.getElementById('container');
          for (var i = 1; i<= pdf.numPages; i++) {
              renderPDF(i);
          }
      })
  }

  function renderPDF(num) {
      PDFJS.getPage(num).then((page) => {
          var scale = 1.5;
          var viewport = page.getViewport(scale);
          pageDiv = document.createElement('div');
          pageDiv.setAttribute('id', 'page-' + (page.pageIndex + 1));
          pageDiv.setAttribute('style', 'position: relative');
          container.appendChild(pageDiv);
          var canvas = document.createElement('canvas');
          pageDiv.appendChild(canvas);
          var context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = view.width;
          
          var renderContext = {
              canvasContext: context,
              viewport: viewport
          };
          
          page.render(renderContext);
      });
  }
 </script>
 ```

 以上代码只是实现了多页渲染，接下来，开始渲染文本图层。我们需要将page.render(renderContext)修改为以下代码：

 ```js
  page.render(renderContext).then(() => {
      return page.getTextContent();
  }).then((textContent) => {
      // 创建文本图层div
      const textLayerDiv = document.createElement('div');
      textLayerDiv.setAttribute('class', 'textLayer');
      // 将文本图层div添加至每页pdf的div中
      pageDiv.appendChild(textLayerDiv);
      
      // 创建新的TextLayerBuilder实例
      var textLayer = new TextLayerBuilder({
          textLayerDiv: textLayerDiv,
          pageIndex: page.pageIndex,
          viewport: viewport
      });
      
      textLayer.setTextContent(textContent);
      
      textLayer.render();
  });
 ```

 关键函数

- page.render()：该函数返回一个当PDF页面成功渲染到界面上时解析的promise，我们可以使用成功回调来渲染文本图层。
- page.getTextContent()：该函数的成功回调会返回PDF页面上的文本片段。
- TextLayerBuilder：该类的实例有两个重要的方法。setTextContent()用于设置page.getTextContent()函数返回的文本片段；render()用于渲染文本图层。

## 在网页中加载并显示PDF

把项目部署到nginx或者IIS，直接在浏览器中访问viewer.html即可预览我们的pdf

- 当文件和viewer.html不同路径时（千万注意文件路径，否则无法正常预览）
- 当文件为远程服务器上的文件，我们有文件的路径时，需要将http路径进行转码：

```js
  // 方式一 本地
  window.open("./js/pdfJS/web/viewer.html?file=AngularJS权威指南.pdf");

  // 方式二 服务器
  // viewer.html 路径 （服务器下的viewer.html）  ?  文件名
  let fileUrl = encodeURIComponent('http://10.162.201.40:8005/dev/leck/2022/0215/11_.122qqq_1_092319.pdf') // 将路径转码
  window.open(`http://10.162.201.40:8005/dev?file=${fileUrl}`);

  // 方式三 createObjectURL不支持IE11
  const downloadHref = url.createObjectURL(blob)
  window.open(`./js/pdfJS/web/viewer.html?file=${downloadHref}`);
```

[更加深入了解PDF.js || 下载文件](http://mozilla.github.io/pdf.js/)
