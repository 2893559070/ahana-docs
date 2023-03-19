# react相关组件

[create-react-app](https://create-react-app.bootcss.com/docs/getting-started)

## react-virtualized
基于 可视区域渲染 原理进行开发
[react-virtualized](https://github.com/bvaughn/react-virtualized)

- List
    [List](https://github.com/bvaughn/react-virtualized/blob/master/docs/README.md)
    ```jsx
    import { List } from 'react-virtualized';
    import 'react-virtualized/styles.css';

    const list = Array(100).fill('Brian Vaughn');

    function rowRenderer({
    key, // Unique key within array of rows
    index, // 索引号
    isScrolling, // 当前是否在滚动中
    isVisible, // 当前项在List中是可见的
    style, // 重点属性 一定要给每一行数据添加该样式！作用：指定每一行的位置
    }) {
    return (
        <div key={key} style={style}>
        {list[index]} {isScrolling + ''}
        </div>
    );
    }

    <List
        width={300}
        height={300}
        rowCount={list.length} // 多少行
        rowHeight={20} // 每行高度
        rowRenderer={rowRenderer} // 渲染每一行的函数
    />
    ```
	- measureAllRows
		- 点击屏幕滚动不准问题

- AutoSizer
    让list组件占满屏幕
    [AutoSizer](https://github.com/bvaughn/react-virtualized/blob/master/docs/AutoSizer.md)

## CSS IN JS
- styled-components
    [styled-components](https://styled-components.com/)
- CSS Modules (React脚手架已经集成，可以直接使用)
    [CSS Modules](https://github.com/css-modules/css-modules/blob/master/README.md)

    - 实现方式
        webpack的css-loader 插件

    - BEM 
        Block块 Element元素 Modifier 三个部分组成 命名规范
    - 在React脚手架中演化成：文件名、雷鸣、hash（随机） 三部分， 只需要指定类名即可
    ```js
        // 自动生成的类名
        [filename]_[classname]_[hash]

        // 类名
        .error {
            .Button_error__ax7yz {}
        }
    ```
    - 在项目中的使用
        [name].module.css
        
        ```js
            // 创建文件
            test.module.css
                .testStyle {
                    color: #333;
                }

                // 全局类名 root 顶级标签
                :global(.testStyle) {}
                :root :global(.testStyle) {}
            // 引入文件
            import test from './test.module.css'

            // 使用文件
            <div className={test.test_style}></div>
        ```

