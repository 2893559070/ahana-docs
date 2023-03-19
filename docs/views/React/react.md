# react 开始

## ui库
[mobile.ant](https://mobile.ant.design/zh/guide/quick-start)

## 创建 react

```js
npm install -g create-react-app

create-react-app my-app

cd my-app

npm start

// 入口文件
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

## 构造组件

```jsx
import React from 'react';

class Welcome extends React.Component {
  // 通过以下方式将 props 传递到父类的构造函数中：
  constructor(props) {
    // Class 组件应该始终使用 props 参数来调用父类的构造函数。
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    return <h1>Hello, {this.props.name}, { this.state.date }</h1>;
  }
}

```

## 函数组件

```jsx
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

```

## 组件通信
- 父 -> 子
  ```jsx
    class Fu extends React.Component {
      state = {
        name: '王'
      }

      render() {
        return (
          <div>
            <Zi name={this.state.name} />
          </div>
        )
      }
    }

    class Zi extends React.Component {
      render() {
        return (
          <div>
            { this.props.name }
          </div>
        )
      }
    }
  ```

- 子 -> 父
  - 父组件提供回调函数（接收数据） 子组件调用（提供数据）
  ```jsx
    class Fu extends React.Component {
      getZi = data => {
        console.log(data, '获取子传入的数据')
      }

      render() {
        return (
          <div>
            <Zi getZi={this.getZi} />
          </div>
        )
      }
    }

    class Zi extends React.Component {

      getFu = data => {
        this.props.getZi('子传父信息')
      }

      render() {
        return (
          <div onClick={this.getFu}> 子 </div>
        )
      }
    }
  ```

- 兄弟组件
  - 共享数据提升最近的父组件管理状态 （状态提升）
  ```jsx
    class Fu extends React.Component {
      state = {
        count: 0
      }

      getFuCount = () => {
        this.setState({
          count: this.state.count + 1
        })
      }

      render() {
        return (
          <div>
            <Zi1 conut={this.state.count} getFuCount={this.getFuCount} />
            <Zi2 conut={this.state.count} />
          </div>
        )
      }
    }

    class Zi1 extends React.Component {
      render() {
        return (
          <button onClick={_ => this.getFuCount()}> 子1修改数据 </button>
        )
      }
    }

    class Zi2 extends React.Component {
      render() {
        return (
          <div> 子2接收的数据 { this.props.conut } </div>
        )
      }
    }
  ```

- Context
  - 跨组件传递数据（比如：主题、语言等）
  - React。createContext() 创建Provider（提供） 和 Consumer（消费）两个组件
  ```jsx
    const { Provider, Consumer } = React.create.Context();
    class App extends React.Component {
      state = {
        count: 0
      }

      getFuCount = () => {
        this.setState({
          count: this.state.count + 1
        })
      }

      render() {
        return (
          <Provider value='pink'>
            <div>
              <Node />
            </div>
          </Provider>
        )
      }
    }

    const Node = (props) => {
      return <Child></Child>
    }

    const Child = () => {
      return <div> <Consumer> { data => <span> { data } </span> } </Consumer> </div>
    }
  ```

- Children 属性
  - 标签的子节点 (任意值)
  ```jsx
    class App extends React.Component {
      state = {
        count: 0
      }

      render() {
        return (
          <div>
            <Node> Children 文本 </Node> 
          </div>
        )
      }
    }

    const Node = (props) => {
      return <div> 获得子节点 { this.props.children } </div>
    }
  ```

## props 校验
- prop-types （安装包）
  - 约束规则
    - 常见类型：array bool func number object string
    - React元素类型：element
    - 必填项：isRequired
    - 特定结构：shape({  })
  - 
    ```jsx
      import PropTypes from 'prop-types';

      class App extends React.Component {
        render() {
          return (
            <div>
              { this.props.num }
            </div>
          )
        }
      }
      
      // 设置 props 校验
      App.propTypes = {
        num: PropTypes.number,
        fn: PropTypes.func.isRequired,
        filter: PropTypes.shape({
          num: PropTypes.number,
          price: PropTypes.string
        })
      }

    ```

- props默认值
  ```jsx
    class App extends React.Component {
      render() {
        return (
          <div>
            { this.props.pageSize }
          </div>
        )
      }
    }
    
    // 可以不传入 默认值为 10
    App.defaultProps = {
      pageSize: 10
    }
  ```

## 组件生命周期
- 组件生命周期 （类组件才有生命周期）
  - 三个阶段  创建时、更新时、卸载时
    - 创建时
      - constructor 创建时触发
        - 初始化 state
        - 为事件绑定this
      - render 创建时与组件更新时执行 后进行diff操作
        - 不能使用this.setState()
      - componentDidMount 组件挂载后
        - 网络请求
        - 获取dom
    - 更新时
      - render 创建时与组件更新时执行
      - componentDidUpdate 更新完成后
        - 网络请求
        - 获取dom
        - 注意 this.setState() （必须放在if条件里不然会导致递归更新 内存溢出）
          ```jsx
            componentDidUpdate(prevProps, prevState) {
              // 新旧值对比
              if(prevProps !== this.props || prevState !== this.state) {
                this.setState({})
              }
            }
          ```
      - 更新时机
        - this.setState
        - props
      - 强制更新
        - forceUpdate()
    - 卸载时
      - componentWillUnmount 组件从页面消失触发
      - 用于清理工作

    - 不常用钩子函数
      - 自行了解

## render-props 和 高阶组件
- render-props
  - props
    ```jsx
      <Mouse render={(mouse) => {
        <p> 鼠标位置: { mouse.x } - { mouse.y } </p>
      }} />

      class Mouse extends React.Component {
        state = {
          x: 0,
          y: 0
        }

        handleMousemove = (e) => {
          this.setState({
            x: e.clientX,
            y: e.clientY
          })
        }

        componentDidMount() {
          widdow.addEventListener('mousemove', this.handleMousemove)
        }

        componentWillUnmount() {
          widdow.removeEventListener('mousemove', this.handleMousemove)
        }

        render() {
          return this.props.render(this.state)
        }
      }
    ```
  - children
    ```jsx
      <Mouse>  {
        mouse => {
          return (
            <p> 鼠标位置: { mouse.x } - { mouse.y }</p>
          )
        }
      } </Mouse>

      class Mouse extends React.Component {
        state = {
          x: 0,
          y: 0
        }

        handleMousemove = (e) => {
          this.setState({
            x: e.clientX,
            y: e.clientY
          })
        }

        componentDidMount() {
          widdow.addEventListener('mousemove', this.handleMousemove)
        }

        componentWillUnmount() {
          widdow.removeEventListener('mousemove', this.handleMousemove)
        }

        render() {
          return this.props.children(this.state)
        }
      }
    ```

- 高阶组件
  - 用一个函数 接收包装组件，增强组件功能
  - 设置displayName 用于区分组件名字 （便于调试）
  - 使用步骤
    - 创建函数 约定以 with 开头
    - 指定函数参数， 一大写字母开头（作为渲染的组件）
    - 在函数内部创建一个类组件，提供复用的状态逻辑代码，并返回
    - 在该组件中，渲染参数组件，同时将状态通过prop传递给参数组件
    ```jsx
      // 公用包裹组件
      function WithMouse(WrappedComponent) {
        class Mouse extends React.Component {
          state = {
            x: 0,
            y: 0
          }

          // 控制鼠标状态的逻辑
          handleMousemove = () => {
            this.setState({
              x: e.clientX,
              y: e.clientY
            })
          }

          componentDidMount() {
            widdow.addEventListener('mousemove', this.handleMousemove)
          }

          componentWillUnmount() {
            widdow.removeEventListener('mousemove', this.handleMousemove)
          }

          render() {
            return <WrappedComponent {...this.state} {...this.props}></WrappedComponent>
          }
        }

        return Mouse.dispayName = `WithMouse${getDisplayName(WrappedComponent)}`
      }

      // 设置 displayName
      function getDisplayName(WrappedComponent) {
          return WrappedComponent.dispayName || WrappedComponent.name ||  'Component'
      }

      // 组件
      const Postions = props => (
        <p> 鼠标当前位置： (x: { props.x }, y: { props.y }) </p>
      )
      // 获取增强后组件 (包装后)
      const WithPostions = WithMouse(Postions)
    ```

## 异步问题
- this.setSate({})
  - 后面的setSate不能使用前面的setSate
  - 多次调用setSate reander 只更新一次
  - 推荐语法
    ```jsx
      // 这样每次更新 state 都可以获取到最新的值
      this.setSate((state, props) => {
        return {
          count: state.count + 1
        }
      })

      // 第二参数
      this.setSate((state, props) => {
        return {
          count: state.count + 1
        }
      }, () => {
        console.log('数据更新完成执行');
      })
    ```

## jsx语法
- jsx 是 createElement() 语法糖（简化写法）
- jsx 语法被 @babel/preset-react 插件编译为 createElement() 方法
- jsx -> createElement() -> react
  <img :src="$withBase('/react/jsx.png')" alt="foo">

## 组件更新机制
- 父组件更新时，也会重新渲染当前组件的所有子组件

## 组件性能优化
- 减轻state
  - 减轻state：值存储于组件渲染相关的数据
  - 其他与组件渲染无关的数据 挂载到this上
- 避免不必要的重新渲染
  - 父组件 影响 子组件更新 （子组件没有变化也会更新）
  - shouldCompontUpdate(nextProps, nextState)
    - nextProps、nextState（最新），this.props、this.state（更新前的状态）
    - shouldCompontUpdate -> render
      - 返回true更新
      - 返回false拒绝更新
    ```jsx
      class Test extends React.Component {

        shouldCompontUpdate(nextProps, nextState) {
          if(nextProps !== this.props || nextState !== this.state) {
            return true;
          }
          return false;
        }

        render() {
          return (
            <div>
              { this.props.num }
            </div>
          )
        }
      }
    ```

- 纯组件
  - PureComponent
  - 在Component增加了自动实现shouldCompontUpdate不需要手动比较
  ```jsx
    class Hell extends React.PureComponent {
        render() {
          return <p> Hello </p>
        }
    }
  ```
  - 浅层对比
    - 纯组件内部的对比是 shallow compare（浅层对比）
    - 引用类型：比较对象地址是否相同
    ```jsx
      class Hell extends React.PureComponent {
        // 不改变地址 直接更改数据 程序会不执行渲染
        state = { obj: { num: 1 } }
        state.obj.num = 2
        this.setState((state) => {
            obj: state.obj
        })

        // 使用浅拷贝 更改地址 程序会执行渲染
        const newObj = { ...this.state }
        newObj.obj.num = 2
        this.setState((state) => {
            obj: newObj.obj
        })

        render() {
          return <p> Hello </p>
        }
      }
    ```

## React 路由基础
- react-router-dom
  - BrowserRouter as Router, Route, Link
  - Route 都是组件
  - 使用 Router 包裹整个应用
    - 一个React应用只需要使用一次
    - HashRouter 和 BrowserRouter（推荐）
      - HashRouter 使用URL的哈希值实现
      - BrowserRouter 使用H5的history API 实现
  - Link
    - 导航菜单（申明式导航） 路由入口 to
  - Route
    - 配置路由出口 path
  - 执行过程
    1. 点击 Link 修改浏览器URL地址栏地址
    2. 路由监听地址栏的变化
    3. 遍历 Route 组件 使用路由规则 path 与 pathname进行匹配
    4. 路由规则 path 与 pathname 匹配成功 渲染匹配上的组件
  
  - 编程式导航
    - 通过js代码来实现页面跳转
    - history 是 React 路由提供的，用于浏览器历史记录的相关信息
    - this.props.history.push() 去往对应的页面
    - this.props.history.go() -1 返回上个页面
    ```jsx
      class Login extends Component {
        this.props.history.push('/home')
      }
    ```

  - 默认路由
    - 模糊匹配
      - 默认情况下 React路由是模糊匹配模式
    - 精确匹配
      - exact
    ```jsx
      class Hell extends React.Component {
        ...
        render() {
          return <>
              <Route exact path='/' component={Home}><Route>
              <Route exact path='/login' component={Login}><Route>
          </>
        }
      }
    ```
    - 嵌套路由
      - 嵌套子路由的path 格式以副路由path开头（父组件展示，子组件才能展示）
    - 路由重定向
      - Redirect
        ```jsx
          <Route exact path='/' render={() => <Redirect to='/home'></Redirect>}></Route>
        ```

## 懒加载
- Supense + lazy
  - 分开打包 懒加载
  - 懒加载未进入页面前 使用 Loading 页面
    ```jsx
      
      const Home = lazy(() => import('./home'))
      import Loading from '/loading'

      <Supense fallback={<Loading />}>
        <Switch>
          <Route path='/home' component={Home}></Route>
        </Switch>
      </Supense>
    ```
