import { defineUserConfig, defaultTheme } from 'vuepress';
import path from 'node:path'
const sideBar = require('./utils/sideBar')
const navbar = require("./utils/navbar");
const sidebar = sideBar(path.resolve(__dirname, "../views"), '.md', 'docs');

export default defineUserConfig({
  base: '/ahana-docs/',
  lang: 'zh-CN',
  title: '啊涵的笔记（网上资料总结，个人笔记，非商用，如有侵权联系 qq: 2893559070 删除）',
  description: '技术随记',
  theme: defaultTheme({
    navbar,
    sidebar
  })
});




