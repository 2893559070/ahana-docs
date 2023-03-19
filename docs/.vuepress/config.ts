import { defineUserConfig, defaultTheme } from 'vuepress';
import path from 'node:path'
const sideBar = require('./utils/sideBar')
const navbar = require("./utils/navbar");
const sidebar = sideBar(path.resolve(__dirname, "../views"), '.md', 'docs');

export default defineUserConfig({
    base: '/ahana-docs/',
    lang: 'zh-CN',
    title: '啊涵的笔记',
    description: '技术随记',
    theme: defaultTheme({
        navbar,
        sidebar
    })
});

// console.log(sidebar);

Object.keys(sidebar).forEach(key => {
    // console.log(sidebar[key][0].children);
})




