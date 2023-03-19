# prop-types

## 安装

```jsx
  yarn add prop-types 或 npm i prop-types
```

## 类组件中

```jsx
import React from "react";
import PropTypes from 'prop-types'; // 引入依赖

class Comp extends React.Component {
  // react 会解析 porpTypes 静态属性，首字母是小写p
  static propTypes = {
    name: PropTypes.string,  // 这里的 PropTypes 指 prop-types依赖，类型是小写
    age: PropTypes.number,  // 若类型不匹配，控制台会报 Warning
    hobby: PropTypes.array,
    gender: PropTypes.any,  // 任意类型
    say: PropTypes.func  // function 类型
  }

  // react 会解析 defaultProps 静态属性，props默认值
  static defaultProps = {
    msg: '你是个麻瓜'
  }

  render() {
    const { name, age, gender, hobby, say } = this.props
    return (
      <div>
        <ul>
          <h2>{this.props.msg}</h2>
          <button onClick={say}>click</button>
          <li>名字：{name}</li>
          <li>年龄：{age}</li>
          <li>性别：{gender}</li>
          <li>爱好：{hobby.map((item, index) => <span key={index}>{item}</span>)}</li>
        </ul>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    obj: {
      name: 'Piemon',
      age: 20,
      gender: '男',
      hobby: ['游戏', '学习', 'piano']
    }
  }
  say = () => {
    alert('i say')
  }
  render() {
    return (
      <div className="App">
        <Comp {...this.state.obj} say={this.say}></Comp>
      </div>
    )
  }
}

export default App

```

## 函数式组件

```jsx
function Comp(props) {
  const { name, age, gender, hobby, say } = props
  return (
    <div>
      <ul>
        <h2>{this.props.msg}</h2>
        <button onClick={say}>click</button>
        <li>名字：{name}</li>
        <li>年龄：{age}</li>
        <li>性别：{gender}</li>
        <li>爱好：{hobby.map((item, index) => <span key={index}>{item}</span>)}</li>
      </ul>
    </div>
  )
}

Comp.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  hobby: PropTypes.array,
  gender: PropTypes.any,
  say: PropTypes.func
}

Comp.defaultProps = {
  msg: '你是个麻瓜'
}

```
