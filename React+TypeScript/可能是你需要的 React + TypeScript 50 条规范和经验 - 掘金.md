## 可能是你需要的 React + TypeScript 50 条规范和经验

> 这篇文章没有对错之分，肯定也有不完善的地方，结合了自己日常开发和经验。可以让你书写代码更具严谨性,希望看完之后有所帮助。本文字数 4000+ ，看完本文大概需半小时。

### 1\. 注释

#### (1) 文件顶部的注释，包括描述、作者、日期

```javascript
/**
 * @description xxxxxx
 * @author chengfeng
 * @since 19/05/21
 */
```

#### (2) 模块的注释

```javascript
/**
 * 拷贝数据
 * @param  {*}  data   要拷贝的源数据
 * @param  {boolean} [isDeep=false] 是否深拷贝，默认浅拷贝
 * @return {*}         返回拷贝后的数据
 */
```

#### (3) 业务代码注释

```javascript
/*业务代码注释*/
```

#### (4) 变量注释

```javascript
interface IState {
  // 名字
  name: string;
  // 电话
  phone: number;
  // 地址
  address: string;
}
```

### 2\. 引用组件顺序

- 先引用外部组件库,,再引用当前组件块级组件, 然后是 common 里的公共函数库最后是 css 样式

```javascript
import * as React from "react";
import { Dropdown, Menu, Icon } from "antd";
import Header from "./Header";
import toast from "common/toast";
import "./index.less";
```

### 3\. 引号

- 使用单引号,或者 es6 的反引号

### 4\. 缩进

- 使用两个空格

```javascript
const handleCheck = () => {
  onCancel && onCancel();
  onClose && onClose();
};
```

### 5\. 分号

- 除了代码块的以外的每个表达式后必须加分号。

### 6\. 括号

下列关键字后必须有大括号（即使代码块的内容只有一行）：if, else, for, while, do, switch, try, catch, finally, with。

```javascript
// not good
if (condition) doSomething();

// good
if (condition) {
  doSomething();
}
```

### 7\. 空格

- 二元和三元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格。

```bash
// bad
++ x;
y ++;
z = x?1:2;

// good
++x;
y++;
z = x ? 1 : 2;
```

- 用作代码块起始的左花括号 { 前必须有一个空格。

```bash
// bad
if (condition){
}

while (condition){
}

function funcName(){
}

// good
if (condition) {
}

while (condition) {
}

function funcName() {
}

```

- if / else / for / while / function / switch / do / try / catch / finally 关键字后，必须有一个空格。

```bash
// bad
if(condition) {
}

while(condition) {
}

(function() {
})();

// good
if (condition) {
}

while (condition) {
}

(function () {
})();
```

- 在对象创建时，属性中的 : 之后必须有空格，: 之前不允许有空格。

```bash
// bad
var obj = {
    a : 1,
    b:2,
    c :3
};

// good
var obj = {
    a: 1,
    b: 2,
    c: 3
};
```

### 8\. 换行

- 每个独立语句结束后必须换行。
- 在函数声明、函数表达式、函数调用、对象创建、数组创建、for 语句等场景中，不允许在 , 或 ; 前换行

```bash
// bad
var obj = {
    a: 1
    , b: 2
    , c: 3,
};

function test()
{
    ...
}
for (const key in object)
 {
  if (object.hasOwnProperty(key)) {
    const element = object[key];

  }
}
// good
var obj = {
    a: 1,
    b: 2,
    c: 3,
};

function test() {
    ...
}

for (const key in object) {
  if (object.hasOwnProperty(key)) {
    const element = object[key];

  }
}
```

- 下列关键字后：else, catch, finally 不需要换行

```bash
// bad
if (condition) {
    ...
}
else {
    ...
}

try {
    ...
}
catch (e) {
    ...
}
finally {
    ...
}


// good
if (condition) {
    ...
} else {
    ...
}

try {
    ...
} catch (e) {
    ...
} finally {
    ...
}
```

### 9\. 数组、对象

- 对象属性名不需要加引号；
- 对象以缩进的形式书写，不要写在一行；
- 数组最后不要有逗号。
- 对象最后要有逗号。

```bash

// bad
const a = {
    'b': 1
};

const a = {b: 1};

const a = {
    b: 1,
    c: 2
};
const arr = [1, 2, 3, 4,];

// good
const a = {
    b: 1,
    c: 2,
};

const arr = [1, 2, 3, 4];
```

### 10\. 命名

- 类名: 大驼峰式风格，字母和数字，例如：AbcTest。禁止汉字、特殊符号，禁止非大驼峰式风格。

- 函数名: 小驼峰式风格，字母和数字，例如：abcTest。禁止汉字、特殊符号，禁止非小驼峰式风格，例如 snake_case 等。

- 变量名: 同函数名。

- 常量: 全大写风格，大写字母、数字和下划线，单词之间以下划线分隔，例如：ABC_TEST。禁止汉字、特殊符号、小写字母。

- 使用 onXxx 形式作为 props 中用于回调的属性名称。

```javascript
interface IProps {
  onClose?: () => void;
  onOk?: (item: Record<string, any>) => void;
}
```

- 组件内的事件函数使用 handle 开头尾,handleCheckBtn。
- 使用 withXxx 形式的词作为高阶组件的名称。
- 接口命名前面带上 I 表示 interface

```javascript
interface IProps {}
interface IState {}
```

### 11\. 类型断言

```bash
// bad
function getLength(something: string | number): number {
    return something.length;
}

// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.

// bad
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}

// good
function getLength(something: string | number): number {
  if (typeof something === 'string') {
    return something.length;
  } else {
    return something.toString().length;
  }
}

```

### 12\. interface 声明顺序

日常用到比较多的是四种，只读参数放第一位，必选参数第二位，可选参数次之，不确定参数放最后

```bash
interface iProps {
  readonly x: number;
  readonly y: number;
  name: string;
  age: number;
  height?: number;
  [propName: string]: any;
}
```

### 13\. ts 好用的相关工具泛型

- Record<string,any> 用这个来声明对象结构的类型

```bash
用于定义一个javascript的对象，key是字符串，value是任意类型
const people:Record<string,any> = {
    name: 'chengfeng',
    age: 10
}
```

- Partial 作用是将传入的属性变为可选项.

```bash
interface iPeople {
    title: string;
    name: string;
}

const people: Partial<iPeople> = {
    title: 'Delete inactive users',
};
定义的结构可以是接口iPeople的任意key
```

- Readonly 作用是将传入的属性变为变成只读

```bash
interface iPeople {
    title: string;
    name: string;
}

const people: Readonly<Todo> = {
    title: 'todo list',
    name: chenfeng;
};
title name属性就是只读的了
```

- Required 的作用是将传入的属性变为必选项

```bash
interface iPeople {
    title?: string;
    name?: string;
}

const people1: Props = { title: 'ts' }; // OK

const people22: Required<iPeople> = { title: 'ts' }; // Error: property 'name' missing
```

[查看更多](https://github.com/Microsoft/TypeScript-Handbook/diffs/0?base_sha=22b37a2d8c9a1dd378795444baf954c2e7ecccf5&commentable=true&head_user=csantos42&pull_number=801&sha1=22b37a2d8c9a1dd378795444baf954c2e7ecccf5&sha2=9d4c56f5d414dbe23780719885baa3df40222412&short_path=0b2da51&unchanged=expanded&utf8=%E2%9C%93#requiredt)

### 14\. ts 一些好用的小 tips

- keyof

```bash
interface iPeople {
  name: string;
  age: number
}

type T = keyof iPeople // -> "name" | "age"
```

- in

```bash
type Keys = "a" | "b"
type Obj =  {
  [p in Keys]: any
} // -> { a: any, b: any }
```

### 15\. 规范其他

- 不要使用 var 声明变量
- 不会被修改的变量使用 const 声明
- 去除声明但未被引用的代码
- 禁止在代码里使用 debug
- 不允许有空的代码块

### 16\. 仅当初始 state 需要从 props 计算得到的时候，才将 state 的声明放在构造函数中，其它情况下使用静态属性声明 state,并且一般情况下不要将 prop 传给 state，

```javascript
// bad
constructor (){
  this.setState({ people: this.props.people })
}

// good
state: IState = {
  people: {},
};
```

### 17\. 渲染默认值

- 添加非空判断可以提高代码的稳健性,例如后端返回的一些值,可能会出现不存在的情况，应该要给默认值.

```javascript
// bad
render(){
  {name}
}

// good
render(){
  {!!name || '--'}
}


```

- 还有一种情况，就是本来后端应该返回一个数组给你，但是数据库取不到数据，可能后端给你返回了 null,然后前端 null.length。这样就 gg 了

```javascript
// bad
const { list, totalCount } = await getPeopleList(keyword, page, pageSize);
list 可能是null或者undefined
list.length将直接导致前端报错

this.setState({
  status: STATUS.READY,
  apps: list,
  total: totalCount,
  page: page,
});


// good
const { list, totalCount } = await getPeopleList(keyword, page, pageSize);
this.setState({
  status: STATUS.READY,
  apps: list || [],
  total: totalCount || 0,
  page: page,
});

```

### 18\. 不确定的属性，最后却疯狂的用...访问不存在的属性

例如一些地方，不确定这个变量里面到底有什么，但自己觉得有，就疯狂的...,最明显的就是后端返回了一个对象给你，前端拿到之后判断都不判断直接 data.dataList.forEach()

```javascript
// bad
const data = await getPeopleList(keyword, page, pageSize);
data.dataList.forEach() // 直接挂了

// good
const data = await getPeopleList(keyword, page, pageSize);
if (data && data.dataList && Array.isArray(data.dataList) {
    data.dataList.forEach()
}
```

### 19\. 数据格式转换

1.  把字符串转整型可以使用+号

```javascript
let maxPrice = +form.maxPrice.value;
let maxPrice = Number(form.maxPrice.value);
```

2.  转成 boolean 值用!!

```javascript
let mobile = !!ua.match(/iPhone|iPad|Android|iPod|Windows Phone/);
```

### 20\. 判断条件真假

js 中以下为假,其他情况为真

- false
- null
- undefined
- 0
- '' (空字符串)
- NaN

### 21\. 简单组件可以使用函数代替

```javascript
// bad
class Listing extends React.Component {
  render() {
    return <div>{this.props.hello}</div>;
  }
}

// good
function Listing({ hello }) {
  return <div>{hello}</div>;
}
```

### 22\. 对于常用的属性进行缓存

```javascript
// bad
this.props.app.openid;
this.state.time;

// good
const { app } = this.props;
const { time } = this.state;
console.log(app.openid);
```

### 23\. input 输入框使用 trim()

```javascript
// bad
let searchContent = form.search.value;

// good
let searchContent = form.search.value.trim();
```

### 24\. 使用 location 跳转前需要先转义

```javascript
// bad
window.location.href = redirectUrl + "?a=10&b=20";

// good
window.location.href = redirectUrl + encodeURIComponent("?a=10&b=20");
```

### 25\. 使用 react-router

```javascript
// bad
import { withRouter, RouteComponentProps } from "react-router-dom";

export interface IProps extends RouteComponentProps<any> {}
class App extends React.Component<IProps, AppStates> {}
export default withRouter(App);

// good
import { withRouter, RouteComponentProps } from "react-router-dom";

class App extends React.Component<
  IProps & RouteComponentProps<{}>,
  AppStates
> {}
export default withRouter(App);
```

### 26\. 同时开发，数据请求 api 目录 git 冲突目录方案

- 在 api 目录下新建一个目录，目录对应一级 tab,这个目录内放置一个 index.js ，最后把二级 tab 组件所使用的 api 请求都在这个 index.js 内引入。

```bash
// 目前

|- api
  |- pageA.ts
  |- pageB.ts

// 建议

|- api
  |- pageA
    |- index.js
    |- aaa.js
    |- bbb.js
  |- pageB
    |- index.js
    |- aaa.js
    |- bbb.js
    |- ccc.js
```

### 27\. 组件嵌套过深

- 组件一般不要超过三层,最多四层,层级过深可能会导致数据传递过深，在做一些颗粒度比较细的操作的时候，处理起来较为繁琐，可以使用 redux 等状态管理工具替代。

### 28\. 代码过滤掉你没考虑到的情况

- 例如一个函数，你只想操作字符串，那你必须在函数开头就只允许参数是字符串

```bash
function parse (str:string){
  if (typeof(str) === 'string' ) {

  }
}
```

### 29\. 业务代码里面的异步请求需要 try catch

- ajax 请求，使用 try catch，错误提示后端返回,并且做一些失败后的状态操作例如进入列表页，我们需要一个 loading 状态，然后去请求数据,可是失败之后，也需要把 loading 状态去掉,把 loading 隐藏的代码就写在 finally 里面。

```javascript
getStudentList = async () => {
  try {
    this.setState({
      loading: true,
      isEmpty: false,
    });
    await getStudentList({});
  } catch (e) {
    // TODO
    console.log(e);
  } finally {
    //  失败之后的一些兜底操作
    this.setState({
      loading: false,
      isEmpty: true,
    });
  }
};
```

### 30\. setState 有三种用法

```bash
// 对象
this.setState({

})

// 函数，一般是用于在setState之前做一些操作
this.setState(
  () => {
    // TODO
    console.log('')
    return {
      a:300
    }
  }
)

// 第二个参数，一般是用于在setState之后做一些操作
this.setState({
  a:300
}, () => {
  // TODO
})
```

### 31\. setState 可能是同步的

- setState 在 react 里的合成事件和钩子函数中是“异步”的。
- setState 在原生事件和 setTimeout 中是同步的。

### 32\. 不要在 setState 前面加 await

- setState 前面也是可以带 await 的，会变成同步设置状态,但这是一种巧合，不确定未来哪个版本就不支持了，为了遵循 react 框架的设计原则，我们使用回掉函数的形式。

```javascript
// bad
func = async (name, value, status) => {
  await this.setState({
    name,
  });
  // TODO
};

// good
func = (name, value, status) => {
  this.setState(
    {
      name,
    },
    () => {
      // TODO
    }
  );
};
```

### 33\. 阻止事件默认行为

- 在 React 中你不能通过返回 false 来阻止默认行为。必须明确调用 preventDefault 。

### 34\. 在 componentWillUnmount 里面去除副作用的函数

- 清除 EventListener
- 中止数据请求
- 清除定时器

### 35\. key

- 对于组件中的 key 优化，起到最大化重用 dom

```javascript
//bad
this.state.dataAry.map((item, index) => {
  return <span key={index} />;
});

//good
this.state.dataAry.map((item) => <span key={item.id} />);
```

### 36\. for-in 中一定要有 hasOwnProperty 的判断（即禁止直接读取原型对象的属性）

```javascript
//bad
const arr = [];
const key = "";

for (key in obj) {
  arr.push(obj[key]);
}

//good
const arr = [];
const key = "";

for (key in obj) {
  if (obj.hasOwnProperty(key)) {
    arr.push(obj[key]);
  }
}
```

### 37\. 第三方库函数的使用

- 用 try catch 包裹，防止第三方库的出现错误，导致整个程序崩溃

```javascript
/*
 * Echart 用于代绘制图表，但当其自身发生错误时，可能影响到业务代码的执行
 */
// bad
const iniDom = document.getElementById("init-container");
const echartObj = echarts.init(iniDom);
this.setState(
  {
    echartObj,
  },
  () => {
    const { echartObj } = this.state;
    // 更新图表
    echartObj.setOption(CHART_CONFIG, true);
  }
);

// good
try {
  const iniDom = document.getElementById("init-container");
  const echartObj = echarts.init(iniDom);
  this.setState(
    {
      echartObj,
    },
    () => {
      const { echartObj } = this.state;
      // 更新图表
      echartObj.setOption(CHART_CONFIG, true);
    }
  );
} catch (error) {
  // TODO
}
```

### 38\. 防止 xss 攻击

- input，textarea 等标签，不要直接把 html 文本直接渲染在页面上,使用 xssb 等过滤之后再输出到标签上;

```javascript
import { html2text } from 'xss';
render(){
  <div
  dangerouslySetInnerHTML={{
    __html: html2text(htmlContent)
  }}
/>
}
```

### 39\. 在组件中获取真实 dom

- 使用 16 版本后的 createRef()函数

```javascript
class MyComponent extends React.Component<iProps, iState> {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    return <input type="text" ref={this.inputRef} />;
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }
}
```

### 40\. 减少魔法数字

- 写代码的时候尽量减少一些未知含义的数字，尽量用英文单词。例如 type === 0 的时候做了一些操作，让人不知所以然。

```javascript
// bad
if (type !== 0) {
  // TODO
}

// good
const STATUS: Record<string, any> = {
  READY: 0,
  FETCHING: 1,
  FAILED: 2
};

if (type === STATUS.READY) {
  // TODO
}

// best
enum STATUS {
  // 就绪
  READY = 0,
  // 请求中
  FETCHING = 1,
  // 请求失败
  FAILED = 2,
}

```

### 41\. 如果需要优化 react 性能（一般用不到）

- 如果组件的 state 和 props 都是简单类型，可以继承 PureComponent 而不是 Component

```javascript
import { Component, PureComponent } from "react";
// bad
class Message extends Component {
  render() {
    return <span>{this.state.message}</span>;
  }
}

// good
class Message extends PureComponent {
  render() {
    return <span>{this.state.message}</span>;
  }
}
```

- 重写 shouldComponentUpdate 方法,在 shouldComponentUpdate 里面根据 state,props 是否有改变来判断是否需要重新渲染.如果组件继承了 PureComponent 就没必要再重写 shouldComponentUpdate 方法

```javascript
import { isReactPropsEqual, isReactStateEqual } from '@fe/common/lib/equal';
shouldComponentUpdate(nextProps:IProps, nextState:IState) {
    if (isReactStateEqual(nextState,this.state) && isReactPropsEqual(nextProps,this.props)) {
        return false;
    }
    return true;
}
```

### 42\. Event 事件对象类型

很多小伙伴用了很久的 ts,都不知道常用 Event 事件对象类型：

ClipboardEvent<T = Element> 剪贴板事件对象

DragEvent<T = Element> 拖拽事件对象

ChangeEvent<T = Element> Change 事件对象

KeyboardEvent<T = Element> 键盘事件对象

MouseEvent<T = Element> 鼠标事件对象

TouchEvent<T = Element> 触摸事件对象

WheelEvent<T = Element> 滚轮事件对象

AnimationEvent<T = Element> 动画事件对象

TransitionEvent<T = Element> 过渡事件对象

```javascript
import { MouseEvent } from "react";

interface IProps {
  onClick(event: MouseEvent<HTMLDivElement>): void;
}
```

### 43\. 使用私有属性取代 state 状态

对于一些不需要控制 ui 的状态属性，我们可以直接绑到 this 上， 即私有属性，没有必要弄到 this.state 上，不然会触发渲染机制，造成性能浪费 例如请求翻页数据的时候,我们都会有个变量。

```bash
// bad
state: IState = {
  pageNo:1,
  pageSize:10
};

// good
queryParams:Record<string,any> = {
  pageNo:1,
  pageSize:10
}
```

### 44\. 代码细粒度的思考

总结四句话。我们在写组件或者函数的的时候，工具函数和业务逻辑抽离，表单校验和业务抽离、事件函数和业务抽离，ajax 和业务抽离。 例如有些页面是通过 location.href 跳转的，我们有些业务逻辑等都是放到 didmountMount,但是后期改需求，可能要用 react-router 进行跳转，可能要改的逻辑就会很多了，所以函数抽离出来，需求更新就少改一点代码。 如果还不确定如何划分函数的细粒度，我有个建议。使用过两次以上的代码，要抽离组件或者函数，两次的可以不用

### 45\. if else 等判断太多了，后期难以维护。

个人觉得 if else 嵌套深看起来也不会太难受，难受的是，项目迭代久之后，自己都忘记曾经写过这些代码，而且类型多或者不确定有什么类型，是否后期还会加的情况下，改起来就非常复杂了，而且很容易踩坑和背锅。 用配置取代 if 嵌套，大概就是抽离一个 config.ts 出来，里面放一些配置。

```bash
例如你的业务代码里面，会根据不同url参数，代码会执行不同的逻辑.
/info?type=wechat&uid=123456&
const qsObj = qs(window.location.url)
const urlType = qsObj.type
// bad
if (urlType === 'wechat') {
    doSomeThing()
} else if () {
    doSomeThing()
} else if () {
    doSomeThing()
} else if () {
    doSomeThing()
}

// good
config.t
const urlTypeConfig: Record<string, typeItem> = {
  'wechat': { // key 就是对应的type
    name: 'wechat',
    show: ['header', 'footer', 'wechat'] // 展示什么，可能是异步的
    pession: ['admin'], // 权限是什么，可能是异步的
  },
  'zhifubao': { // key 就是对应的type
    name: 'zhifubao',
    show: ['header', 'footer', 'zhifubao'] // 展示什么，可能是异步的
    pession: ['admin'], // 权限是什么，可能是异步的
  },
}

// 业务逻辑
const qsObj = qs(window.location.url)
const urlType = qsObj.type
Object.keys(urlTypeConfig).forEach(item => {
  if(urlType === item.type) {
    doSomeThing(item.show)
  }
})

```

### 46\. 不要使用 renderXXX,要使用函数式组件

发现团队一些小伙伴为了减少 render 函数里面的代码量，会把一些元素拆分到函数里面。

```bash
// bad
  renderHeader = () => {
    return (<div />)
  }
  renderBody = () => {
    return (<div />)
  }
  renderFooter = () => {
    return (<div />)
  }
  render(){
    return(
      <div>
        renderHeader()
        renderBody()
        renderFooter()
      </div>
    )
  }
```

更好的办法，是用函数式组件取代在当前组件里面写方法

```bash
// good
 function RenderHeader(props) =  {
    return (<div />)
  }
 function RenderBody(props) =  {
    return (<div />)
  }
 function RenderFooter(props) =  {
    return (<div />)
  }
class Component extends React.Component<iProps, iState>{
  render () {
    return(
      <div>
        <RenderHeader />
        <RenderBody />
        <RenderFooter />
      </div>
    )
  }
}
```

### 47\. a 标签安全问题

使用 a 标签打开一个新窗口过程中的安全问题。新页面中可以使用 window.opener 来控制原始页面。如果新老页面同域，那么在新页面中可以任意操作原始页面。如果是不同域，新页面中依然可以通过 window.opener.location，访问到原始页面的 location 对象

在带有 target="\_blank"的 a 标签中，加上 rel="noopener"属性。如果使用 window.open 的方式打开页面，将 opener 对象置为空。

```bash
var newWindow = window.open();
newWindow.opener = null;
```

### 48\. void 0 替代 undefined

```bash
clearSessioin = () => {

  req.session.userName = undefined;

  req.session.userName = void 0
}
```

### 49\. 前端不要操作 cookie

在做一些前后端鉴权的时候，后端应该开启 domain,secure,httponly 严格模式，禁止前端操作 cookie，防止 csrf 攻击。

### 50\. 代码检查插件

我们可以使用构建工具继承 husky eslint tslint lint-stage prettier 来规范代码。

- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [tslint-react](https://www.npmjs.com/package/tslint-react)
- [tslint-plugin-prettier](https://www.npmjs.com/package/tslint-plugin-prettier)
- [tslint-config-prettier](https://www.npmjs.com/package/tslint-config-prettier)
- [团队开发工作流](https://github.com/Faithree/web-build-tool-demo/tree/master/28-workflow)

### 参考

- [airbnb](https://github.com/airbnb/javascript/tree/master/react#alignment)
- [imweb 代码规范](http://imweb.github.io/CodeGuide/)
- [如何无痛降低 if else 面条代码复杂度](https://juejin.im/post/6844903502611759117#heading-5)
- [你真的理解 setState 吗？](https://juejin.im/post/6844903636749778958#heading-5)

关注下面的标签，发现更多相似文章

[乘风 gg](/user/4248168658899741) [![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIzIDE0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzM0RDE5QiIgZD0iTTMgMWgxN2EyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJWM2EyIDIgMCAwIDEgMi0yeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0zIDRoMnY3SDN6TTggNmgybDIgNWgtMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTQgNmgtMmwtMiA1aDJ6TTMgOWg1djJIM3pNMTYuMzMzIDRMMTcgM3YzaC0yek0xNSA2aDJ2NGgtMnpNMTcgOGgxdjJoLTF6TTE3IDNoMXYyaC0xek0xOCAzaDJ2OGgtMnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==)
](/book/5c90640c5188252d7941f5bb/section/5c9065385188252da6320022) 眼里有星星

[发布了 17 篇专栏 ·](/user/4248168658899741/posts) 获得点赞 4,288 · 获得阅读 164,586
