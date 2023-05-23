var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// docs/.vuepress/utils/sideBar.ts
import fs from "node:fs";
var require_sideBar = __commonJS({
  "docs/.vuepress/utils/sideBar.ts"(exports, module) {
    var siderAll = {};
    var sider = {
      key: "",
      title: "",
      path: ""
    };
    function readDirSync({
      dirPath,
      fileType,
      splitStr
    }, root = true) {
      const dirAll = fs.readdirSync(dirPath);
      dirAll.forEach((dir, index) => {
        var info = fs.statSync(`${dirPath}/${dir}`);
        const dirArr = dirPath.split(`\\${splitStr}`);
        const filePath = dirArr[dirArr.length - 1].replace(/\\/g, "/");
        if (root)
          sider.key = filePath.split("/")[1] + "/" + dir;
        if (root)
          sider.title = dir;
        if (info.isDirectory()) {
          const newPath = dirPath + "\\" + dir;
          if (root)
            sider.path = dir;
          return readDirSync({
            dirPath: newPath,
            fileType,
            splitStr
          }, false);
        } else {
          if (dir.includes(fileType)) {
            const dirArr2 = dirPath.split(`\\${splitStr}`);
            const filePath2 = dirArr2[dirArr2.length - 1].replace(/\\/g, "/");
            sider.path = `${filePath2}/${dir}`;
            if (!siderAll[`/${sider.key}/`])
              siderAll[`/${sider.key}/`] = [{
                text: sider.title[0].toLocaleUpperCase() + sider.title.substring(1),
                children: []
              }];
            siderAll[`/${sider.key}/`][0].children.push(sider.path);
          }
        }
      });
      return siderAll;
    }
    module.exports = (pathStr = "./", fileType = ".md", splitStr = "") => {
      return readDirSync({
        dirPath: pathStr,
        fileType,
        splitStr
      });
    };
  }
});

// docs/.vuepress/utils/navbar.ts
var require_navbar = __commonJS({
  "docs/.vuepress/utils/navbar.ts"(exports, module) {
    module.exports = [
      {
        text: "\u524D\u7AEF",
        children: [
          {
            text: "Git",
            link: "/views/Git/git.html",
            activeMatch: "^/views/Git/"
          },
          {
            text: "Node",
            link: "/views/node/express.html",
            activeMatch: "^/views/node/"
          },
          {
            text: "React",
            link: "/views/React/\u5165\u95E8.html",
            activeMatch: "^/views/React/"
          },
          {
            text: "React Native",
            link: "/views/React Native/React Native.html",
            activeMatch: "^/views/React Native/"
          },
          {
            text: "TS",
            link: "/views/TS/ts.html",
            activeMatch: "^/views/TS/"
          },
          {
            text: "Uniapp",
            link: "/views/uniapp/uniapp.html",
            activeMatch: "^/views/uniapp/"
          },
          {
            text: "Vue",
            link: "/views/vue/vue1.0\u5B9E\u73B0.html",
            activeMatch: "^/views/vue/"
          },
          {
            text: "VueCli",
            link: "/views/vue-cli/vue-cli\u524D\u7AEF\u81EA\u52A8\u5316.html",
            activeMatch: "^/views/vue-cli/"
          },
          {
            text: "WebPack",
            link: "/views/webPack/\u6982\u5FF5.html",
            activeMatch: "^/views/webPack/"
          },
          {
            text: "\u65B9\u6CD5",
            link: "/views/\u65B9\u6CD5/js\u65B9\u6CD5.html",
            activeMatch: "^/views/\u65B9\u6CD5/"
          },
          {
            text: "\u8F6E\u5B50",
            link: "/views/\u8F6E\u5B50/context.html",
            activeMatch: "^/views/\u8F6E\u5B50/"
          },
          {
            text: "\u9A9A\u64CD\u4F5C",
            link: "/views/\u9A9A\u64CD\u4F5C/ES6.html",
            activeMatch: "^/views/\u9A9A\u64CD\u4F5C/"
          },
          {
            text: "\u5FAE\u524D\u7AEF",
            link: "/views/\u5FAE\u524D\u7AEF/\u5FAE\u524D\u7AEF.html",
            activeMatch: "^/views/\u5FAE\u524D\u7AEF/"
          },
          {
            text: "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F",
            link: "/views/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/\u5C0F\u7A0B\u5E8F\u57FA\u7840.html",
            activeMatch: "^/views/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/"
          }
        ]
      },
      {
        text: "\u540E\u7AEF",
        children: [
          {
            text: "Java\u57FA\u7840",
            link: "/views/java/\u53D8\u91CF.html",
            activeMatch: "^/views/java/"
          },
          {
            text: "Mysql",
            link: "/views/mysql/Mysql-SQL.html",
            activeMatch: "^/views/mysql/"
          },
          {
            text: "Maven",
            link: "/views/maven/base.html",
            activeMatch: "^/views/maven/"
          },
          {
            text: "SSM\u6846\u67B6",
            link: "/views/ssm/1-spring/1.\u7B80\u4ECB.html",
            activeMatch: "^/views/ssm/"
          },
          {
            text: "Spring",
            link: "/views/spring/note.html",
            activeMatch: "^/views/spring/"
          },
          {
            text: "SpringBoot",
            link: "/views/springBoot/spring-boot01.html",
            activeMatch: "^/views/springBoot/"
          },
          {
            text: "SpringCloud",
            link: "/views/springCloud/SpringCloud01.html",
            activeMatch: "^/views/springCloud/"
          },
          {
            text: "SpringWheel",
            link: "/views/springWheel/\u7528\u6237\u8BA4\u8BC1.md",
            activeMatch: "^/views/springWheel/"
          }
        ]
      },
      {
        text: "\u8FD0\u7EF4",
        children: [
          {
            text: "\u90E8\u7F72",
            link: "/views/deployment/\u524D\u7AEF\u90E8\u7F72.html",
            activeMatch: "^/views/deployment/"
          },
          {
            text: "Docker",
            link: "/views/Docker/docker.html",
            activeMatch: "^/views/Docker/"
          },
          {
            text: "k8s",
            link: "/views/k8s/\u77E5\u8BC6\u70B9/Kubernetes\uFF08k8s\uFF09.html",
            activeMatch: "^/views/k8s/"
          },
          {
            text: "ElasticSearch",
            link: "/views/ElasticSearch/Elasticsearch \u5B89\u88C5.html",
            activeMatch: "^/views/ElasticSearch/"
          },
          {
            text: "Linux",
            link: "/views/linux/Linux01.html",
            activeMatch: "^/views/linux/"
          },
          {
            text: "Nginx",
            link: "/views/nginx/nginx.html",
            activeMatch: "^/views/nginx/"
          }
        ]
      },
      {
        text: "\u9519\u8BEF\u6536\u96C6",
        children: [
          {
            text: "\u540E\u7AEF",
            link: "/views/back-error/mysql.html",
            activeMatch: "^/views/back-error/"
          },
          {
            text: "\u8FD0\u7EF4",
            link: "/views/devops-error/Linux.html",
            activeMatch: "^/views/devops-error/"
          },
          {
            text: "\u524D\u7AEF",
            link: "/views/front-error/vue.html",
            activeMatch: "^/views/front-error/"
          }
        ]
      }
    ];
  }
});

// docs/.vuepress/config.ts
import { defineUserConfig, defaultTheme } from "vuepress";
import path from "node:path";
var __vite_injected_original_dirname = "E:/\u5B66\u4E60/ahana-docs/docs/.vuepress";
var sideBar = require_sideBar();
var navbar = require_navbar();
var sidebar = sideBar(path.resolve(__vite_injected_original_dirname, "../views"), ".md", "docs");
var config_default = defineUserConfig({
  base: "/ahana-docs/",
  lang: "zh-CN",
  title: "\u554A\u6DB5\u7684\u7B14\u8BB0\uFF08\u7F51\u4E0A\u8D44\u6599\u603B\u7ED3\uFF0C\u4E2A\u4EBA\u7B14\u8BB0\uFF0C\u975E\u5546\u7528\uFF0C\u5982\u6709\u4FB5\u6743\u8054\u7CFB qq: 2893559070 \u5220\u9664\uFF09",
  description: "\u6280\u672F\u968F\u8BB0",
  theme: defaultTheme({
    navbar,
    sidebar
  })
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvdXRpbHMvc2lkZUJhci50cyIsICJkb2NzLy52dWVwcmVzcy91dGlscy9uYXZiYXIudHMiLCAiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovXHU1QjY2XHU0RTYwL2FoYW5hLWRvY3MvZG9jcy8udnVlcHJlc3MvdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFx1NUI2Nlx1NEU2MFxcXFxhaGFuYS1kb2NzXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXHV0aWxzXFxcXHNpZGVCYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6LyVFNSVBRCVBNiVFNCVCOSVBMC9haGFuYS1kb2NzL2RvY3MvLnZ1ZXByZXNzL3V0aWxzL3NpZGVCYXIudHNcIjtpbXBvcnQgZnMgZnJvbSAnbm9kZTpmcydcclxuY29uc3Qgc2lkZXJBbGwgPSB7fVxyXG5jb25zdCBzaWRlciA9IHtcclxuICAgIGtleTogJycsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBwYXRoOiAnJyxcclxufVxyXG5mdW5jdGlvbiByZWFkRGlyU3luYyh7XHJcbiAgICBkaXJQYXRoLFxyXG4gICAgZmlsZVR5cGUsXHJcbiAgICBzcGxpdFN0clxyXG59LCByb290ID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgZGlyQWxsID0gIGZzLnJlYWRkaXJTeW5jKGRpclBhdGgpXHJcbiAgICBkaXJBbGwuZm9yRWFjaCgoZGlyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHZhciBpbmZvID0gZnMuc3RhdFN5bmMoYCR7ZGlyUGF0aH0vJHtkaXJ9YClcclxuICAgICAgICBjb25zdCBkaXJBcnIgPSBkaXJQYXRoLnNwbGl0KGBcXFxcJHtzcGxpdFN0cn1gKTsgICAgICAgICAgICBcclxuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGRpckFycltkaXJBcnIubGVuZ3RoIC0gMV0ucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xyXG4gICAgICAgIGlmKHJvb3QpIHNpZGVyLmtleSA9IGZpbGVQYXRoLnNwbGl0KCcvJylbMV0gKyAnLycgKyBkaXJcclxuICAgICAgICBpZihyb290KSBzaWRlci50aXRsZSA9IGRpclxyXG4gICAgICAgIGlmKGluZm8uaXNEaXJlY3RvcnkoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQYXRoID0gZGlyUGF0aCArICdcXFxcJyArIGRpcjtcclxuICAgICAgICAgICAgaWYocm9vdCkgc2lkZXIucGF0aCA9IGRpclxyXG4gICAgICAgICAgICByZXR1cm4gcmVhZERpclN5bmMoe1xyXG4gICAgICAgICAgICAgICAgZGlyUGF0aDogbmV3UGF0aCxcclxuICAgICAgICAgICAgICAgIGZpbGVUeXBlLFxyXG4gICAgICAgICAgICAgICAgc3BsaXRTdHJcclxuICAgICAgICAgICAgfSwgZmFsc2UpXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBpZihkaXIuaW5jbHVkZXMoZmlsZVR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJBcnIgPSBkaXJQYXRoLnNwbGl0KGBcXFxcJHtzcGxpdFN0cn1gKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZGlyQXJyW2RpckFyci5sZW5ndGggLSAxXS5yZXBsYWNlKC9cXFxcL2csICcvJyk7XHJcbiAgICAgICAgICAgICAgICBzaWRlci5wYXRoID0gYCR7ZmlsZVBhdGh9LyR7ZGlyfWA7XHJcbiAgICAgICAgICAgICAgICBpZighc2lkZXJBbGxbYC8ke3NpZGVyLmtleX0vYF0pIHNpZGVyQWxsW2AvJHtzaWRlci5rZXl9L2BdID0gW3tcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBzaWRlci50aXRsZVswXS50b0xvY2FsZVVwcGVyQ2FzZSgpICsgc2lkZXIudGl0bGUuc3Vic3RyaW5nKDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxyXG4gICAgICAgICAgICAgICAgfV07XHJcbiAgICAgICAgICAgICAgICBzaWRlckFsbFtgLyR7c2lkZXIua2V5fS9gXVswXS5jaGlsZHJlbi5wdXNoKHNpZGVyLnBhdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gc2lkZXJBbGw7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKHBhdGhTdHIgPSAnLi8nLCBmaWxlVHlwZSA9ICcubWQnLCBzcGxpdFN0ciA9ICcnKSA9PiB7XHJcbiAgICByZXR1cm4gcmVhZERpclN5bmMoe1xyXG4gICAgICAgIGRpclBhdGg6IHBhdGhTdHIsXHJcbiAgICAgICAgZmlsZVR5cGUsXHJcbiAgICAgICAgc3BsaXRTdHJcclxuICAgIH0pXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9cdTVCNjZcdTRFNjAvYWhhbmEtZG9jcy9kb2NzLy52dWVwcmVzcy91dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcXHU1QjY2XHU0RTYwXFxcXGFoYW5hLWRvY3NcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcdXRpbHNcXFxcbmF2YmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi8lRTUlQUQlQTYlRTQlQjklQTAvYWhhbmEtZG9jcy9kb2NzLy52dWVwcmVzcy91dGlscy9uYXZiYXIudHNcIjttb2R1bGUuZXhwb3J0cyA9IFtcclxuICB7XHJcbiAgICB0ZXh0OiAnXHU1MjREXHU3QUVGJyxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnR2l0JyxcclxuICAgICAgICBsaW5rOiAnL3ZpZXdzL0dpdC9naXQuaHRtbCcsXHJcbiAgICAgICAgYWN0aXZlTWF0Y2g6ICdeL3ZpZXdzL0dpdC8nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ05vZGUnLFxyXG4gICAgICAgIGxpbms6ICcvdmlld3Mvbm9kZS9leHByZXNzLmh0bWwnLFxyXG4gICAgICAgIGFjdGl2ZU1hdGNoOiAnXi92aWV3cy9ub2RlLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnUmVhY3QnLFxyXG4gICAgICAgIGxpbms6ICcvdmlld3MvUmVhY3QvXHU1MTY1XHU5NUU4Lmh0bWwnLFxyXG4gICAgICAgIGFjdGl2ZU1hdGNoOiAnXi92aWV3cy9SZWFjdC8nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1JlYWN0IE5hdGl2ZScsXHJcbiAgICAgICAgbGluazogJy92aWV3cy9SZWFjdCBOYXRpdmUvUmVhY3QgTmF0aXZlLmh0bWwnLFxyXG4gICAgICAgIGFjdGl2ZU1hdGNoOiAnXi92aWV3cy9SZWFjdCBOYXRpdmUvJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdUUycsXHJcbiAgICAgICAgbGluazogJy92aWV3cy9UUy90cy5odG1sJyxcclxuICAgICAgICBhY3RpdmVNYXRjaDogJ14vdmlld3MvVFMvJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdVbmlhcHAnLFxyXG4gICAgICAgIGxpbms6ICcvdmlld3MvdW5pYXBwL3VuaWFwcC5odG1sJyxcclxuICAgICAgICBhY3RpdmVNYXRjaDogJ14vdmlld3MvdW5pYXBwLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnVnVlJyxcclxuICAgICAgICBsaW5rOiAnL3ZpZXdzL3Z1ZS92dWUxLjBcdTVCOUVcdTczQjAuaHRtbCcsXHJcbiAgICAgICAgYWN0aXZlTWF0Y2g6ICdeL3ZpZXdzL3Z1ZS8nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1Z1ZUNsaScsXHJcbiAgICAgICAgbGluazogJy92aWV3cy92dWUtY2xpL3Z1ZS1jbGlcdTUyNERcdTdBRUZcdTgxRUFcdTUyQThcdTUzMTYuaHRtbCcsXHJcbiAgICAgICAgYWN0aXZlTWF0Y2g6ICdeL3ZpZXdzL3Z1ZS1jbGkvJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdXZWJQYWNrJyxcclxuICAgICAgICBsaW5rOiAnL3ZpZXdzL3dlYlBhY2svXHU2OTgyXHU1RkY1Lmh0bWwnLFxyXG4gICAgICAgIGFjdGl2ZU1hdGNoOiAnXi92aWV3cy93ZWJQYWNrLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHU2NUI5XHU2Q0Q1JyxcclxuICAgICAgICBsaW5rOiAnL3ZpZXdzL1x1NjVCOVx1NkNENS9qc1x1NjVCOVx1NkNENS5odG1sJyxcclxuICAgICAgICBhY3RpdmVNYXRjaDogJ14vdmlld3MvXHU2NUI5XHU2Q0Q1LycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHU4RjZFXHU1QjUwJyxcclxuICAgICAgICBsaW5rOiAnL3ZpZXdzL1x1OEY2RVx1NUI1MC9jb250ZXh0Lmh0bWwnLFxyXG4gICAgICAgIGFjdGl2ZU1hdGNoOiAnXi92aWV3cy9cdThGNkVcdTVCNTAvJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdcdTlBOUFcdTY0Q0RcdTRGNUMnLFxyXG4gICAgICAgIGxpbms6ICcvdmlld3MvXHU5QTlBXHU2NENEXHU0RjVDL0VTNi5odG1sJyxcclxuICAgICAgICBhY3RpdmVNYXRjaDogJ14vdmlld3MvXHU5QTlBXHU2NENEXHU0RjVDLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHU1RkFFXHU1MjREXHU3QUVGJyxcclxuICAgICAgICBsaW5rOiAnL3ZpZXdzL1x1NUZBRVx1NTI0RFx1N0FFRi9cdTVGQUVcdTUyNERcdTdBRUYuaHRtbCcsXHJcbiAgICAgICAgYWN0aXZlTWF0Y2g6ICdeL3ZpZXdzL1x1NUZBRVx1NTI0RFx1N0FFRi8nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1NUZBRVx1NEZFMVx1NUMwRlx1N0EwQlx1NUU4RicsXHJcbiAgICAgICAgbGluazogJy92aWV3cy9cdTVGQUVcdTRGRTFcdTVDMEZcdTdBMEJcdTVFOEYvXHU1QzBGXHU3QTBCXHU1RThGXHU1N0ZBXHU3ODQwLmh0bWwnLFxyXG4gICAgICAgIGFjdGl2ZU1hdGNoOiAnXi92aWV3cy9cdTVGQUVcdTRGRTFcdTVDMEZcdTdBMEJcdTVFOEYvJyxcclxuICAgICAgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdcdTU0MEVcdTdBRUYnLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdKYXZhXHU1N0ZBXHU3ODQwJyxcclxuICAgICAgICBsaW5rOiAnL3ZpZXdzL2phdmEvXHU1M0Q4XHU5MUNGLmh0bWwnLFxyXG4gICAgICAgIGFjdGl2ZU1hdGNoOiAnXi92aWV3cy9qYXZhLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnTXlzcWwnLFxyXG4gICAgICAgIGxpbms6ICcvdmlld3MvbXlzcWwvTXlzcWwtU1FMLmh0bWwnLFxyXG4gICAgICAgIGFjdGl2ZU1hdGNoOiAnXi92aWV3cy9teXNxbC8nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ01hdmVuJyxcclxuICAgICAgICBsaW5rOiAnL3ZpZXdzL21hdmVuL2Jhc2UuaHRtbCcsXHJcbiAgICAgICAgYWN0aXZlTWF0Y2g6ICdeL3ZpZXdzL21hdmVuLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnU1NNXHU2ODQ2XHU2N0I2JyxcclxuICAgICAgICBsaW5rOiAnL3ZpZXdzL3NzbS8xLXNwcmluZy8xLlx1N0I4MFx1NEVDQi5odG1sJyxcclxuICAgICAgICBhY3RpdmVNYXRjaDogJ14vdmlld3Mvc3NtLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnU3ByaW5nJyxcclxuICAgICAgICBsaW5rOiAnL3ZpZXdzL3NwcmluZy9ub3RlLmh0bWwnLFxyXG4gICAgICAgIGFjdGl2ZU1hdGNoOiAnXi92aWV3cy9zcHJpbmcvJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdTcHJpbmdCb290JyxcclxuICAgICAgICBsaW5rOiAnL3ZpZXdzL3NwcmluZ0Jvb3Qvc3ByaW5nLWJvb3QwMS5odG1sJyxcclxuICAgICAgICBhY3RpdmVNYXRjaDogJ14vdmlld3Mvc3ByaW5nQm9vdC8nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1NwcmluZ0Nsb3VkJyxcclxuICAgICAgICBsaW5rOiAnL3ZpZXdzL3NwcmluZ0Nsb3VkL1NwcmluZ0Nsb3VkMDEuaHRtbCcsXHJcbiAgICAgICAgYWN0aXZlTWF0Y2g6ICdeL3ZpZXdzL3NwcmluZ0Nsb3VkLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnU3ByaW5nV2hlZWwnLFxyXG4gICAgICAgIGxpbms6ICcvdmlld3Mvc3ByaW5nV2hlZWwvXHU3NTI4XHU2MjM3XHU4QkE0XHU4QkMxLm1kJyxcclxuICAgICAgICBhY3RpdmVNYXRjaDogJ14vdmlld3Mvc3ByaW5nV2hlZWwvJyxcclxuICAgICAgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdcdThGRDBcdTdFRjQnLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdcdTkwRThcdTdGNzInLFxyXG4gICAgICAgIGxpbms6ICcvdmlld3MvZGVwbG95bWVudC9cdTUyNERcdTdBRUZcdTkwRThcdTdGNzIuaHRtbCcsXHJcbiAgICAgICAgYWN0aXZlTWF0Y2g6ICdeL3ZpZXdzL2RlcGxveW1lbnQvJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdEb2NrZXInLFxyXG4gICAgICAgIGxpbms6ICcvdmlld3MvRG9ja2VyL2RvY2tlci5odG1sJyxcclxuICAgICAgICBhY3RpdmVNYXRjaDogJ14vdmlld3MvRG9ja2VyLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnazhzJyxcclxuICAgICAgICBsaW5rOiAnL3ZpZXdzL2s4cy9cdTc3RTVcdThCQzZcdTcwQjkvS3ViZXJuZXRlc1x1RkYwOGs4c1x1RkYwOS5odG1sJyxcclxuICAgICAgICBhY3RpdmVNYXRjaDogJ14vdmlld3MvazhzLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnRWxhc3RpY1NlYXJjaCcsXHJcbiAgICAgICAgbGluazogJy92aWV3cy9FbGFzdGljU2VhcmNoL0VsYXN0aWNzZWFyY2ggXHU1Qjg5XHU4OEM1Lmh0bWwnLFxyXG4gICAgICAgIGFjdGl2ZU1hdGNoOiAnXi92aWV3cy9FbGFzdGljU2VhcmNoLycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnTGludXgnLFxyXG4gICAgICAgIGxpbms6ICcvdmlld3MvbGludXgvTGludXgwMS5odG1sJyxcclxuICAgICAgICBhY3RpdmVNYXRjaDogJ14vdmlld3MvbGludXgvJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdOZ2lueCcsXHJcbiAgICAgICAgbGluazogJy92aWV3cy9uZ2lueC9uZ2lueC5odG1sJyxcclxuICAgICAgICBhY3RpdmVNYXRjaDogJ14vdmlld3MvbmdpbngvJyxcclxuICAgICAgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdcdTk1MTlcdThCRUZcdTY1MzZcdTk2QzYnLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdcdTU0MEVcdTdBRUYnLFxyXG4gICAgICAgIGxpbms6ICcvdmlld3MvYmFjay1lcnJvci9teXNxbC5odG1sJyxcclxuICAgICAgICBhY3RpdmVNYXRjaDogJ14vdmlld3MvYmFjay1lcnJvci8nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1OEZEMFx1N0VGNCcsXHJcbiAgICAgICAgbGluazogJy92aWV3cy9kZXZvcHMtZXJyb3IvTGludXguaHRtbCcsXHJcbiAgICAgICAgYWN0aXZlTWF0Y2g6ICdeL3ZpZXdzL2Rldm9wcy1lcnJvci8nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1NTI0RFx1N0FFRicsXHJcbiAgICAgICAgbGluazogJy92aWV3cy9mcm9udC1lcnJvci92dWUuaHRtbCcsXHJcbiAgICAgICAgYWN0aXZlTWF0Y2g6ICdeL3ZpZXdzL2Zyb250LWVycm9yLycsXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgfVxyXG5dIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9cdTVCNjZcdTRFNjAvYWhhbmEtZG9jcy9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcXHU1QjY2XHU0RTYwXFxcXGFoYW5hLWRvY3NcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi8lRTUlQUQlQTYlRTQlQjklQTAvYWhhbmEtZG9jcy9kb2NzLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnLCBkZWZhdWx0VGhlbWUgfSBmcm9tICd2dWVwcmVzcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcclxuY29uc3Qgc2lkZUJhciA9IHJlcXVpcmUoJy4vdXRpbHMvc2lkZUJhcicpXHJcbmNvbnN0IG5hdmJhciA9IHJlcXVpcmUoXCIuL3V0aWxzL25hdmJhclwiKTtcclxuY29uc3Qgc2lkZWJhciA9IHNpZGVCYXIocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuLi92aWV3c1wiKSwgJy5tZCcsICdkb2NzJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcclxuICBiYXNlOiAnL2FoYW5hLWRvY3MvJyxcclxuICBsYW5nOiAnemgtQ04nLFxyXG4gIHRpdGxlOiAnXHU1NTRBXHU2REI1XHU3Njg0XHU3QjE0XHU4QkIwXHVGRjA4XHU3RjUxXHU0RTBBXHU4RDQ0XHU2NTk5XHU2MDNCXHU3RUQzXHVGRjBDXHU0RTJBXHU0RUJBXHU3QjE0XHU4QkIwXHVGRjBDXHU5NzVFXHU1NTQ2XHU3NTI4XHVGRjBDXHU1OTgyXHU2NzA5XHU0RkI1XHU2NzQzXHU4MDU0XHU3Q0ZCIHFxOiAyODkzNTU5MDcwIFx1NTIyMFx1OTY2NFx1RkYwOScsXHJcbiAgZGVzY3JpcHRpb246ICdcdTYyODBcdTY3MkZcdTk2OEZcdThCQjAnLFxyXG4gIHRoZW1lOiBkZWZhdWx0VGhlbWUoe1xyXG4gICAgbmF2YmFyLFxyXG4gICAgc2lkZWJhclxyXG4gIH0pXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7O0FBQWdULE9BQU8sUUFBUTtBQUEvVDtBQUFBO0FBQ0EsUUFBTSxXQUFXLENBQUM7QUFDbEIsUUFBTSxRQUFRO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsSUFDVjtBQUNBLGFBQVMsWUFBWTtBQUFBLE1BQ2pCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNKLEdBQUcsT0FBTyxNQUFNO0FBQ1osWUFBTSxTQUFVLEdBQUcsWUFBWSxPQUFPO0FBQ3RDLGFBQU8sUUFBUSxDQUFDLEtBQUssVUFBVTtBQUMzQixZQUFJLE9BQU8sR0FBRyxTQUFTLEdBQUcsV0FBVyxLQUFLO0FBQzFDLGNBQU0sU0FBUyxRQUFRLE1BQU0sS0FBSyxVQUFVO0FBQzVDLGNBQU0sV0FBVyxPQUFPLE9BQU8sU0FBUyxDQUFDLEVBQUUsUUFBUSxPQUFPLEdBQUc7QUFDN0QsWUFBRztBQUFNLGdCQUFNLE1BQU0sU0FBUyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksTUFBTTtBQUNwRCxZQUFHO0FBQU0sZ0JBQU0sUUFBUTtBQUN2QixZQUFHLEtBQUssWUFBWSxHQUFHO0FBQ25CLGdCQUFNLFVBQVUsVUFBVSxPQUFPO0FBQ2pDLGNBQUc7QUFBTSxrQkFBTSxPQUFPO0FBQ3RCLGlCQUFPLFlBQVk7QUFBQSxZQUNmLFNBQVM7QUFBQSxZQUNUO0FBQUEsWUFDQTtBQUFBLFVBQ0osR0FBRyxLQUFLO0FBQUEsUUFDWixPQUFNO0FBQ0YsY0FBRyxJQUFJLFNBQVMsUUFBUSxHQUFHO0FBQ3ZCLGtCQUFNQSxVQUFTLFFBQVEsTUFBTSxLQUFLLFVBQVU7QUFDNUMsa0JBQU1DLFlBQVdELFFBQU9BLFFBQU8sU0FBUyxDQUFDLEVBQUUsUUFBUSxPQUFPLEdBQUc7QUFDN0Qsa0JBQU0sT0FBTyxHQUFHQyxhQUFZO0FBQzVCLGdCQUFHLENBQUMsU0FBUyxJQUFJLE1BQU0sTUFBTTtBQUFHLHVCQUFTLElBQUksTUFBTSxNQUFNLElBQUksQ0FBQztBQUFBLGdCQUMxRCxNQUFNLE1BQU0sTUFBTSxDQUFDLEVBQUUsa0JBQWtCLElBQUksTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUFBLGdCQUNsRSxVQUFVLENBQUM7QUFBQSxjQUNmLENBQUM7QUFDRCxxQkFBUyxJQUFJLE1BQU0sTUFBTSxFQUFFLENBQUMsRUFBRSxTQUFTLEtBQUssTUFBTSxJQUFJO0FBQUEsVUFDMUQ7QUFBQSxRQUNKO0FBQUEsTUFDSixDQUFDO0FBRUQsYUFBTztBQUFBLElBQ1g7QUFFQSxXQUFPLFVBQVUsQ0FBQyxVQUFVLE1BQU0sV0FBVyxPQUFPLFdBQVcsT0FBTztBQUNsRSxhQUFPLFlBQVk7QUFBQSxRQUNmLFNBQVM7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLE1BQ0osQ0FBQztBQUFBLElBQ0w7QUFBQTtBQUFBOzs7QUNsREE7QUFBQTtBQUE4UyxXQUFPLFVBQVU7QUFBQSxNQUM3VDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLGFBQWE7QUFBQSxVQUNmO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sYUFBYTtBQUFBLFVBQ2Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixhQUFhO0FBQUEsVUFDZjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLGFBQWE7QUFBQSxVQUNmO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sYUFBYTtBQUFBLFVBQ2Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixhQUFhO0FBQUEsVUFDZjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLGFBQWE7QUFBQSxVQUNmO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sYUFBYTtBQUFBLFVBQ2Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixhQUFhO0FBQUEsVUFDZjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLGFBQWE7QUFBQSxVQUNmO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sYUFBYTtBQUFBLFVBQ2Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixhQUFhO0FBQUEsVUFDZjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLGFBQWE7QUFBQSxVQUNmO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sYUFBYTtBQUFBLFVBQ2Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixhQUFhO0FBQUEsVUFDZjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLGFBQWE7QUFBQSxVQUNmO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sYUFBYTtBQUFBLFVBQ2Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixhQUFhO0FBQUEsVUFDZjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLGFBQWE7QUFBQSxVQUNmO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sYUFBYTtBQUFBLFVBQ2Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixhQUFhO0FBQUEsVUFDZjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLGFBQWE7QUFBQSxVQUNmO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUjtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sYUFBYTtBQUFBLFVBQ2Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixhQUFhO0FBQUEsVUFDZjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLGFBQWE7QUFBQSxVQUNmO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sYUFBYTtBQUFBLFVBQ2Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixhQUFhO0FBQUEsVUFDZjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLGFBQWE7QUFBQSxVQUNmO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUjtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sYUFBYTtBQUFBLFVBQ2Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixhQUFhO0FBQUEsVUFDZjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLGFBQWE7QUFBQSxVQUNmO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDaEwyUixTQUFTLGtCQUFrQixvQkFBb0I7QUFDMVUsT0FBTyxVQUFVO0FBRGpCLElBQU0sbUNBQW1DO0FBRXpDLElBQU0sVUFBVTtBQUNoQixJQUFNLFNBQVM7QUFDZixJQUFNLFVBQVUsUUFBUSxLQUFLLFFBQVEsa0NBQVcsVUFBVSxHQUFHLE9BQU8sTUFBTTtBQUUxRSxJQUFPLGlCQUFRLGlCQUFpQjtBQUFBLEVBQzlCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLE9BQU8sYUFBYTtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLEVBQ0YsQ0FBQztBQUNILENBQUM7IiwKICAibmFtZXMiOiBbImRpckFyciIsICJmaWxlUGF0aCJdCn0K
