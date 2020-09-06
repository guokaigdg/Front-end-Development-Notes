                         性能！！让你的 React 组件跑得再快一点

## 性能！！让你的 React 组件跑得再快一点

[小生方勤](<javascript:void(0);>)

**小生方勤**

微信号 XSFQ_HSD

功能介绍 这里是前端人的一片栖息之地，愿你在这里可以解开迷惑，收获喜悦。

_5 月 12 日_

收录于话题

以下文章来源于政采云前端团队 ，作者天泽

[![](http://wx.qlogo.cn/mmhead/Q3auHgzwzM76F9a6ibpNaugcBgCUuJS7Ecm7iaVia7zms1eu9nOt1d2Ig/0)

**政采云前端团队**

ZooTeam 带你一起探索前端开发的乐趣！前端相关技术沉淀、工程化建设、团队及职业成长分享，你想要的，我都有～](#)

## 性能和渲染（Render）正相关

React 基于虚拟 DOM 和高效 Diff 算法的完美配合，实现了对 DOM 最小粒度的更新。大多数情况下，React 对 DOM 的渲染效率足以我们的业务日常。但在个别复杂业务场景下，性能问题依然会困扰我们。此时需要采取一些措施来提升运行性能，其很重要的一个方向，就是**避免不必要的渲染（Render）**。

## 渲染（Render）时影响性能的点

React 处理 render 的基本思维模式是每次一有变动就会去重新渲染整个应用。在 Virtual DOM 没有出现之前，最简单的方法就是直接调用 innerHTML。Virtual DOM 厉害的地方并不是说它比直接操作 DOM 快，而是说不管数据怎么变，都会尽量以最小的代价去更新 DOM。React 将 render 函数返回的虚拟 DOM 树与老的进行比较，从而确定 DOM 要不要更新、怎么更新。当 DOM 树很大时，遍历两棵树进行各种比对还是相当耗性能的，特别是在顶层 setState 一个微小的修改，默认会去遍历整棵树。尽管 React 使用高度优化的 Diff 算法 ，但是这个过程仍然会损耗性能。

## 渲染（Render）何时会被触发

### ○ 组件挂载

React 组件构建并将 DOM 元素插入页面的过程称为挂载。当组件首次渲染的时候会调用 render，这个过程不可避免。

### ○ setState() 方法被调用

setState 是 React 中最常用的命令，通常情况下，执行 setState 会触发 render。但是这里有个点值得关注，执行 setState 的时候一定会重新渲染吗？答案是不一定。当 `setState` 传入 `null` 的时候，并不会触发 render ，可以运行下面的 Demo 来佐证：

```
class App extends React.Component {  state = {    a: 1  };  render() {    console.log("render");    return (      <React.Fragement>        <p>{this.state.a}</p>        <button          onClick={() => {            this.setState({ a: 1 }); // 这里并没有改变 a 的值          }}        >          Click me        </button>        <button onClick={() => this.setState(null)}>setState null</button>        <Child />      </React.Fragement>    );  }}
```

### ○ 父组件重新渲染

只要父组件重新渲染了，即使传入子组件的 `props` 未发生变化，那么子组件也会重新渲染，进而触发 `render`。

![](https://mmbiz.qpic.cn/mmbiz_png/vzEib9IRhZD6ia0XHTa9zcP45CwwOUdwibzNuR7PGaNcKUbo6Fib15Nq5qo9sLsrNCyt1XahhMqWC5VIfm1yM6gj4Q/640?wx_fmt=png)

Parent and Child Component

我们对上面的 demo 进行稍微的修改，可以看出当点击按钮的时候，`Child` 组件的 `props` 并没有发生变化，但是也触发了 `render` 方法：

```
const Child = () => {  console.log("child render");  return <div>child</div>;};class App extends React.Component {  state = {    a: 1  };  render() {    console.log("render");    return (      <React.Fragement>        <p>{this.state.a}</p>        <button          onClick={() => {            this.setState({ a: 1 });          }}        >          Click me        </button>        <button onClick={() => this.setState(null)}>setState null</button>        <Child />      </React.Fragement>    );  }}
```

## 优化 Render 我们能做什么？

上文描述的 React 组件渲染机制其实是一种较好的做法，很好地避免了在每一次状态更新之后，需要去手动执行重新渲染的相关操作。鱼和熊掌不可兼得，带来方便的同时也会存在一些问题，当子组件过多或者组件的层级嵌套过深时，因为反反复复重新渲染状态没有改变的组件，可能会增加渲染时间又会影响用户体验，此时就需要对 React 的 render 进行优化。

上面说了**不必要的 render 会带来性能问题**，因此我们的主要优化思路就是减少不必要的 render。

### ○ shouldComponentUpdate 和 PureComponent

在 React 类组件中，可以利用 `shouldComponentUpdate` 或者 `PureComponent` 来减少因父组件更新而触发子组件的 render，从而达到目的。shouldComponentUpdate 来决定是否组件是否重新渲染，如果不希望组件重新渲染，返回 false 即可。

在 React 中 PureComponet 的源码为

```
if (this._compositeType === CompositeTypes.PureClass) {  shouldUpdate = !shallowEqual(prevProps, nextProps) || ! shallowEqual(inst.state, nextState);}
```

看函数名就能够理解，PureComponet 通过对 props 和 state 的浅比较结果来实现 shouldComponentUpdate，当对象包含复杂的数据结构时，可能就不灵了，对象深层的数据已改变却没有触发 render。

看到这里，顺便看一下 `shallowEqual` 是如何实现的。

```
const hasOwnProperty = Object.prototype.hasOwnProperty;/** * is 方法来判断两个值是否是相等的值，为何这么写可以移步 MDN 的文档 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is */function is(x: mixed, y: mixed): boolean {  if (x === y) {    return x !== 0 || y !== 0 || 1 / x === 1 / y;  } else {    return x !== x && y !== y;  }}function shallowEqual(objA: mixed, objB: mixed): boolean {  // 首先对基本类型进行比较  if (is(objA, objB)) {    return true;  }  if (typeof objA !== 'object' || objA === null ||      typeof objB !== 'object' || objB === null) {    return false;  }  const keysA = Object.keys(objA);  const keysB = Object.keys(objB);  // 长度不相等直接返回false  if (keysA.length !== keysB.length) {    return false;  }  // key相等的情况下，再去循环比较  for (let i = 0; i < keysA.length; i++) {    if (      !hasOwnProperty.call(objB, keysA[i]) ||      !is(objA[keysA[i]], objB[keysA[i]])    ) {      return false;    }  }  return true;}
```

### ○ 利用高阶组件

在函数组件中，并没有 shouldComponentUpdate 这个生命周期，可以利用高阶组件，封装一个类似 `PureComponet` 的功能

```
const shouldComponentUpdate = arePropsEqual => BaseComponent => {  class ShouldComponentUpdate extends React.Component {    shouldComponentUpdate(nextProps) {      return arePropsEqual(this.props, nextProps)    }    render() {      return <BaseComponent {...this.props} />    }  }  ShouldComponentUpdate.displayName = `Pure(${BaseComponent.displayName})`;  return ShouldComponentUpdate;}const Pure = BaseComponent => {  const hoc = shouldComponentUpdate(  	(props, nextProps) => !shallowEqual(props, nextProps)  )  return hoc(BaseComponent);}
```

使用 `Pure` 高阶组件的时候，只需要对我们的子组件进行装饰即可。

```
import React from 'react';const Child = (props) => <div>{props.name}</div>;export default Pure(Child);
```

### ○ 使用 React.memo

`React.memo` 是 React 16.6 新的一个 API，用来缓存组件的渲染，避免不必要的更新，其实也是一个高阶组件，与 `PureComponent` 十分类似，但不同的是， `React.memo` 只能用于函数组件 。

**基本用法**

```
import { memo } from 'react';function Button(props) {  // Component code}export default memo(Button);
```

**高级用法**

默认情况下其只会对 props 做浅层对比，遇到层级比较深的复杂对象时，表示力不从心了。对于特定的业务场景，可能需要类似 `shouldComponentUpdate` 这样的 API，这时通过 `memo` 的第二个参数来实现：

```
function arePropsEqual(prevProps, nextProps) {  // your code  return prevProps === nextProps;}export default memo(Button, arePropsEqual);
```

> “
>
> 注意：与 `shouldComponentUpdate` 不同的是，`arePropsEqual` 返回 `true` 时，不会触发 render，如果返回 `false`，则会。而 `shouldComponentUpdate` 刚好与其相反。

### ○ 合理拆分组件

微服务的核心思想是：以更轻、更小的粒度来纵向拆分应用，各个小应用能够独立选择技术、发展、部署。我们在开发组件的过程中也能用到类似的思想。试想当一个整个页面只有一个组件时，无论哪处改动都会触发整个页面的重新渲染。在对组件进行拆分之后，render 的粒度更加精细，性能也能得到一定的提升。

## 总结

本文主要介绍了如何减少不必要的 `render` 来提升 React 的性能。在实际开发过程中，前端性能问题可能并不常见，随着业务的复杂度增加，遇到性能问题的概率也会随之增加。

- 减少 render 的次数 类组件可以使用 shouldComponentUpdate 或 PureComponent，函数组件可以利用高级组件的特性或者 React.memo
- 对组件进行合理的拆分

在摸索这些解决方案的同时，我们能够学习到诸多经典的编程思想，从而更加合理的运用框架、技术解决业务问题。

## 推荐阅读

- 网上都说操作真实 DOM 慢，但测试结果却比 React 更快，为什么？(https://www.zhihu.com/question/31809713/answer/53544875)
- 看完这篇，你也能把 React Hooks 玩出花 (https://juejin.im/post/5d754dbde51d4561cd2466bf)
- 21-performance-optimizations-techniques-for-react (https://medium.com/better-programming/https-medium-com-mayank-gupta-6-88-21-performance-optimizations-techniques-for-react-d15fa52c2349)
