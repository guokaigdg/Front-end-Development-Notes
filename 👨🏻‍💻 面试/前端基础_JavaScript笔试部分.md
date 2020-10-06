## 实现 instanceOf

- 方法一

```js
function instance_of(L, R) {
  //L 表示左表达式，R 表示右表达式
  var O = R.prototype; // 取 R 的显示原型
  L = L.__proto__; // 取 L 的隐式原型
  while (true) {
    if (L === null) return false;
    if (O === L)
      // 这里重点：当 O 严格等于 L 时，返回 true
      return true;
    L = L.__proto__;
  }
}
```

- 方法二

```js
function Instanceof(left, right) {
  let L = Object.getPrototypeOf(left);
  const R = right.prototype;
  while (L !== null) {
    if (L === R) return true;
    L = Object.getPrototypeOf(L);
  }
  return false;
}
```

## 模拟 new

new 操作符做了这些事：

- 它创建了一个全新的对象
- 它会被执行[[Prototype]]（也就是**proto**）链接
- 它使 this 指向新创建的对象
- 通过 new 创建的每个对象将最终被[[Prototype]]链接到这个函数的 prototype 对象上
- 如果函数没有返回对象类型 Object(包含 Functoin, Array, Date, RegExg, Error)，那么- new 表达式中的函数调用将返回该对象引用

```js
// objectFactory(name, 'cxk', '18')
function objectFactory() {
  const obj = new Object();
  const Constructor = [].shift.call(arguments);

  obj.__proto__ = Constructor.prototype;

  const ret = Constructor.apply(obj, arguments);

  return typeof ret === "object" ? ret : obj;
}
```

```js
function New(Fn, ...arg) {
  // 一个新的对象被创建
  const result = {};
  // 该对象的__proto__属性指向该构造函数的原型
  if (Fn.prototype !== null) {
    Object.setPrototypeOf(result, Fn.prototype);
  }
  // 将执行上下文（this）绑定到新创建的对象中
  const returnResult = Fn.apply(result, arg);
  // 如果构造函数有返回值，那么这个返回值将取代第一步中新创建的对象。否则返回该对象
  if (
    (typeof returnResult === "object" || typeof returnResult === "function") &&
    returnResult !== null
  ) {
    return returnResult;
  }
  return result;
}
```
