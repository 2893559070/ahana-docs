import { defineUserConfig, defaultTheme } from 'vuepress';
import path from 'node:path'
const sideBar = require('./utils/sideBar')
const sidebar = sideBar(path.resolve(__dirname, "../views"), '.md', 'docs');

export default defineUserConfig({
    base: '/ahana-docs/',
    lang: 'zh-CN',
    title: '啊涵的笔记',
    description: '技术随记',
    theme: defaultTheme({
        navbar: [
            {
                text: 'views',
                children: [
                    {
                        text: 'Home',
                        link: '/views/home/',
                        // 该元素将一直处于激活状态
                        activeMatch: '^/views/home/',
                    },
                    {
                        text: 'About',
                        link: '/views/about/',
                        activeMatch: '^/views/foo/',
                    },
                ]
            }
        ],
        sidebar
    })
});



