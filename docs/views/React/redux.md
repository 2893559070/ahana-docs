# redux react-redux

## 推荐npm包

- immer
  视图有不可变数据时，触发页面更新
    差量拷贝，避免引用，脱离与原对象的关系

## redux

```md'

# 安装
yarn add redux react-redux redux-thunk -s

# 文件夹格式
- src
 - redux   # 状态管理
  - action   # 设置行为
  - reducer   # 设置行为触发的处理程序
  - store   # 向外导出
```

### action 设置行为

```js
const CESHI1 = value => ({
  type: 'CESHI1',
  value
})
const CESHI2 = value => ({
  type: 'CESHI2',
  value
})

module.exports = {
  CESHI1,
  CESHI2
}
```

### reducer 设置行为触发的处理程序

```js
const oldState = { 
  name: '张三',
  age: 19
}

function counter (state = oldState, action) {
  const { type, value } = action
  switch (type) {
    case 'CESHI1':
      return {...state, age: state.age + value}
    case 'CESHI2':
      return {...state, age: state.age + value}
  default:
    return state;
  }
}

module.exports = {
  counter
}
```

### store 向外导出

```js
import { createStore, applyMiddleware } from 'redux'; // applyMiddleware 运行中间件程序
import thunk from 'redux-thunk' // 处理异步中间件
const { counter } = require('../reducer/index')

/* 同步 */
// let store = createStore(counter);

/* 异步 */
let store = createStore(counter, applyMiddleware(thunk));

export default store
```

### 使用页面一（注入）

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store/index'
import App from './App';
import { ConfigProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
moment.locale('zh-cn');

ReactDOM.render(
  // 严格模式
  // <React.StrictMode>
    <ConfigProvider locale={zhCN}>
    <BrowserRouter>
      <Provider store={store}> {/*重点 将状态混入至整个app中间中 使用props进行调用*/}
        <App />
      </Provider >
      </BrowserRouter>
    </ConfigProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
```

### 使用页面二（消费）

```js
import { connect } from 'react-redux'
import {bindActionCreators} from "redux";
import store from '../../../redux/store/index'  // 测试引用 不在本页面逻辑内
let a = 2
let b = 3

const Home2 = (props) => { 

  const addBtn = () => { 
    props.sendAdd('CESHI1', a)
  }

  const addAsyncBtn = () => { 
    props.AsyncSendAdd('CESHI1', b)

    // store.dispatch(
    //   dispatch => { 
    //     setTimeout(() => { 
    //       dispatch({type: 'CESHI1', value: 2})
    //     }, 1000)
    //   }
    // )
  }

  return (
    <>
      <h1>Home2</h1>
      <h2>{ props.name } --- { props.age }</h2>
      <button onClick={addBtn}>增加</button>
      <button onClick={addAsyncBtn}>异步增加</button>
    </>
  )
}

// 获取store中的state实例
const mapStateToProps = state => { 
  return state
}

// 进行dispatch操作
// 对象or函数 （二选一）
const mapDispatchToProps = { 
  sendAdd: (type, value) => ({type, value})
  sendDEL: (type, value) => ({type, value})
}

// 函数（二选一）
const mapDispatchToProps = dispatch => { 

  let res = {add: () => ({type: "ADD"}), minus: () => ({type: "MINUS"})};
  // 将 dispatch 注入到每个对象中
  res = bindActionCreators(res, dispatch);
  return {
    dispatch,
    ...res,
    // 手动关联，不使用注入
    AsyncSendAdd: (type, value) => (
      setTimeout(() => { 
        dispatch({type, value})
      }, 1000)
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home2)
```

### react-reduce实现原理

```jsx
import React, { Component } from 'react';

// 创建上下文
const valueContext = React.createContext();

// 注入
export class Provider extends Component {
  render() {
    return (
      // 注入
      <valueContext.Provider value={this.props.store}>
        {this.props.children}
      </valueContext.Provider>
    )
  }
}

// 提供
export const connect = (mapStateToProps, mapDispatchToProps) => WrappedComponent => {
  return class extends Component {

    // 消费 此时组件的所有生命周期都能获得this.context
    static contextType = valueContext;

    state = {
      props: {}
    }

    componentDidMount() {
      const { subscribe } = this.context;
      this.updata()
      // 触发订阅
      subscribe(() => {
        this.updata()
      })
    }

    updata() {
      const {getState, dispatch } = this.context;

      // getState获取当前store的state
      let stateProps = mapStateToProps(getState());

      let dispatchProps = undefined;
      if(typeof mapDispatchToProps === 'object') {
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
      }else if(typeof mapDispatchToProps === 'function') {
        // 如果是函数 将 dispatch 方法回传给调用者，可以执行内部调用
        dispatchProps = mapDispatchToProps(dispatch)
      }else {
        dispatchProps = { dispatch }
      }

      this.setState({
        props: {
          ...stateProps,
          ...dispatchProps
        }
      })
    }

    render() {
      return(
        <WrappedComponent
          {...this.state.props}
        ></WrappedComponent>
      )
    }
  }
}

// 将dispatch注入到对象中
export function bindActionCreators(creators, dispatch) {
  const obj = {};
  for (const key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch)
  }
  return obj;
}

function bindActionCreator(creators, dispatch) {
  return (...args) => dispatch(creators(...args));
}
```

## redux-saga

- 概述
  redux-saga 是⼀个⽤于管理应⽤程序 Side
  Effect（副作⽤，例如异步获取数据，访问浏览器缓存等）的 library，它的⽬标是让副作⽤管理更容易，执⾏更
  ⾼效，测试更简单，在处理故障时更容易。
- 地址
  [地址](https://github.com/redux-saga/redux-saga)
  [redux-saga速查表](https://redux-saga-in-chinese.js.org/docs/api/index.html#task-descriptor)
- 安装

  ```bash
    npm install --save redux-saga

    yarn add --save redux-saga
  ```

### 使用

- 创建一个 Redux middleware，并将 Sagas 连接到 Redux Store。
  - configureStore.js

    ```js
      import { createStore, applyMiddleware } from 'redux'
      import createSagaMiddleware from 'redux-saga'
      import reducer from './reducer' // 状态

      export default function configureStore(initialState) {
        // 注意：必须满足 redux@>=3.1.0 才可以将 middleware 作为 createStore 的最后一个参数传递
        const sagaMiddleware = createSagaMiddleware()
        return {
          ...createStore(reducer, initialState, applyMiddleware(/* 其它 middleware, */sagaMiddleware)),
          runSaga: sagaMiddleware.run
        }
      }
    ```

  - main.js

    ```js
    import configureStore from './configureStore'
    import rootSaga from './sagas'
    // ... 其它 imports

    const store = configureStore()
    store.runSaga(rootSaga)
    /**
     * 注意事项:
        middleware.run(saga, ...args)
          动态地运行 saga。只能 用于在 applyMiddleware 阶段 之后 执行 Saga。
           - saga: Function: 一个 Generator 函数
           - args: Array<any>: 提供给 saga 的参数
    */
    ```
  
  - sagas

    ```js
      import { takeEvery, takeLatest, throttle, select, call, put } from "redux-saga/effects";

      export default function* defSaga() {
        // takeEvery 监听
        yield takeEvery("LOGIN", function* () {
          console.log("tackeEvery LOGIN");

          // 获取状态的数据
          const user = yield select(state => state.value);
          console.log(user);
          // 使用 call 发起异步任务（网络请求）

          // 请求完成后 使用 put 将数据返回给前台 相当于 dispatch
        });

        // takeLatest 监听
        yield takeLatest("LAYOUT", () => {
          console.log("takeLatest LAYOUT");
        });

        // throttle 监听
        yield throttle(0, "LAYOUT", () => {
          console.log("throttle LAYOUT");
        });
      }
        
    ```

### Saga 辅助函数

- takeEvery
  在发起（dispatch）到 Store 并且匹配 pattern 的每一个 action 上派生一个 saga，takeEvery 允许处理并发的 action（译注：即同时触发相同的 action）。在上面的例子里，当发起一个 USER_REQUESTED action 时，即使前一个 fetchUser 任务还未处理结束，也将会启动一个新的 fetchUser 任务。 （举个例子，用户以极快的速度连续点击一个 Load User 按钮 2 次，即使第一个触发的 fetchUser 任务还未结束，第二次点击依然会发起一个 USER_REQUESTED action。）takeEvery 不会对多个任务的响应进行排序，并且不保证任务将会以它们启动的顺序结束

  ```js
    import { takeEvery } from `redux-saga/effects`

    function* watchFetchUser() {
      yield takeEvery('USER_REQUESTED', fetchUser)
    }

    /**
     * takeEvery(channel, saga, ...args)
    */
  ```

- takeLatest
  在发起到 Store 并且匹配 pattern 的每一个 action 上派生一个 saga。并自动取消之前所有已经启动但仍在执行中的 saga 任务。
  
  ```js
    import { takeLatest } from `redux-saga/effects`

    function* watchLastFetchUser() {
      yield takeLatest('USER_REQUESTED', fetchUser)
    }

    /**
     * takeLatest(pattern, saga, ...args)
    */
  ```

- takeLeading
  在发起到 Store 并且匹配 pattern 的每一个 action 上派生一个 saga。 它将在派生一次任务之后阻塞，直到派生的 saga 完成，然后又再次开始监听指定的 pattern。简而言之，takeLeading 只在没有 saga 运行的时候才监听 action。

  ```js
    import { takeLeading } from `redux-saga/effects`

    function* watchLastFetchUser() {
      yield takeLeading('USER_REQUESTED', fetchUser)
    }

    /**
     * takeLeading(pattern, saga, ...args)
    */
  ```

- throttle
  在发起到 Store 并且匹配 pattern 的一个 action 上派生一个 saga。 它在派生一次任务之后，仍然将新传入的 action 接收到底层的 buffer 中，至多保留（最近的）一个。但与此同时，它在 ms 毫秒内将暂停派生新的任务 —— 这也就是它被命名为节流阀（throttle）的原因。其用途，是在处理任务时，无视给定的时长内新传入的 action。
  
  ```js
    import { call, put, throttle } from `redux-saga/effects`

    function* fetchAutocomplete(action) {
      const autocompleteProposals = yield call(Api.fetchAutocomplete, action.text)
      yield put({type: 'FETCHED_AUTOCOMPLETE_PROPOSALS', proposals: autocompleteProposals})
    }

    function* throttleAutocomplete() {
      yield throttle(1000, 'FETCH_AUTOCOMPLETE', fetchAutocomplete)
    }

    /**
     * throttle(ms, pattern, saga, ...args)
    */
  ```

### Effect 创建器

effect 是⼀个 javascript 对象，⾥⾯包含描述副作⽤的信息，可以通过 yield 传达给 sagaMiddleware 执⾏。在 redux-saga 世界⾥，所有的 effect 都必须被 yield 才会执⾏，所以有⼈写了 [eslint-plugin-redux-saga](https://github.com/pke/eslint-plugin-redux-saga) 来检查是否每个Effect 都被 yield。并且原则上来说，所有的 yield 后⾯也只能跟effect，以保证代码的易测性

- 注意
  - 以下每个函数都会返回一个普通 Javascript 对象（plain JavaScript object），并且不会执行任何其它操作。
  - 执行是由 middleware 在上述迭代过程中进行的。
  - middleware 会检查每个 Effect 的描述信息，并进行相应的操作

- take
  - pattern
    创建一个 Effect 描述信息，用来命令 middleware 在 Store 上等待指定的 action。 在发起与 pattern 匹配的 action 之前，Generator 将暂停。
    - take(pattern)
      - 我们用以下规则来解释 pattern：
        1. 如果以空参数或 '*' 调用 take，那么将匹配所有发起的 action。（例如，take() 将匹配所有 action）
        2. 如果它是一个函数，那么将匹配 pattern(action) 为 true 的 action。（例如，take(action => action.entities) 将匹配哪些 entities 字段为真的 action）
        3. 注意: 如果 pattern 函数上定义了 toString，action.type 将改用 pattern.toString 来测试。这个设定在你使用 action 创建函数库（如 redux-act 或 redux-actions）时非常有用。
        4. 如果它是一个字符串，那么将匹配 action.type === pattern 的 action。（例如，take(INCREMENT_ASYNC)）
        5. 如果它是一个数组，那么数组中的每一项都适用于上述规则 —— 因此它是支持字符串与函数混用的。不过，最常见的用例还属纯字符串数组，其结果是用 action.type 与数组中的每一项相对比。（例如，take([INCREMENT, DECREMENT]) 将匹配 INCREMENT 或 DECREMENT 类型的 action）
    - take.maybe(pattern)
      与 take(pattern) 相同，但在 END action 时不自动地终止 Saga。与所有在 take Effect 上阻塞的 Saga 都将获得 END 对象的规则相反。
  - channel
    - take(channel)
      创建一个 Effect 描述信息，用来命令 middleware 从指定的 Channel 中等待一条特定消息。 如果 channel 已经被关闭，那么 Generator 将以与上面 take(pattern) 所描述一致的步骤马上终止。
    - take.maybe(channel)
      与 take(channel) 相同，但在 END action 时不自动地终止 Saga。与所有在 take Effect 上阻塞的 Saga 都将获得 END 对象的规则相反。

- put
  - put(action)
    创建一个 Effect 描述信息，用来命令 middleware 向 Store 发起一个 action。 这个 effect 是非阻塞型的，并且所有向下游抛出的错误（例如在 reducer 中），都不会冒泡回到 saga 当中。
  - put.resolve(action)
    类似 put，但 effect 是阻塞型的（如果从 dispatch 返回了 promise，它将会等待其结果），并且会从下游冒泡错误。
  - put(channel, action)
    创建一个 Effect 描述信息，用来命令 middleware 向指定的 channel 中放入一条 action。

- call
  - call(fn, ...args)
    创建一个 Effect 描述信息，用来命令 middleware 以参数 args 调用函数 fn 。
    - fn: Function - 一个 Generator 函数, 也可以是一个返回 Promise 或任意其它值的普通函数。
    - args: Array`<any>` - 传递给 fn 的参数数组。

  - call([context, fn], ...args)
    类似 call(fn, ...args)，但支持传递 this 上下文给 fn。在调用对象方法时很有用。
  - call([context, fnName], ...args)
    类似 call([context, fn], ...args)，但支持用字符串传递 fn。在调用对象的方法时很有用。例如 yield call([localStorage, 'getItem'], 'redux-saga')。
  - apply(context, fn, [args])
    call([context, fn], ...args) 的另一种写法。
