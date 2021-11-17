<!--
 * @Author: guokai05
 * @Date: 2021-08-09 17:12:36
 * @LastEditors: guokai05
 * @LastEditTime: 2021-11-17 10:30:29
-->


## 普通函数跟箭头函数区别

|          | 语法格式                       | new 和原型 | argument super new.target | this 指向                                  | call.apply 和 bind |
| -------- | ------------------------------ | ---------- | ------------------------- | ------------------------------------------ | ------------------ |
| 普通函数 | function(){}函数声明函数表达式 | 有         | 有                        | 动态                                       | 修改 this 值       |
| 箭头函数 | ()=>{}函数表达式               | 没有       | 没有,可以调用外围         | 一般是全局对象或者被普通函数包含指向上一层 | 不可修改 this 值   |

## add(1)(2)(3)(4)求和  `柯里化`
```
function add(sum) {
    function s (b) {
        sum = sum+b;
        return s ;
    };
    s.toString = function() {
        return sum;
    }
    return s;
}

var a = +add(1)(2)(3)(4)(5);//10
console.log(a); //number
```


## JS 继承

- 原型链继承
- 构造继承
- 组合继承

### 创建一个父类

```js
// 定义一个动物类
function Animal(name, color) {
  // 属性
  this.name = name || "Animal";
  this.color = color || ["black"];
  // 实例方法
  this.sleep = function () {
    console.log(this.name + "正在睡觉！");
  };
}
// 原型方法
Animal.prototype.eat = function (food) {
  console.log(this.name + "正在吃：" + food);
};
```

1. 原型链继承

new 了一个空对象，这个空对象指向 Animal 并且 Cat.prototype 指向了这个空对象，这种就是基于原型链的继承。

```js
function Cat(name) {
  this.name = name || "tom";
}
Cat.prototype = new Animal();

var cat = new Cat();
cat.color.push("red");
cat.sleep(); //tom正在睡觉！
cat.eat("fish"); //tom正在吃：fish
console.log(cat.color); //["black", "red"]
console.log(cat instanceof Animal); //true
console.log(cat instanceof Cat); //true
var new_cat = new Cat();
console.log(new_cat.color); //["black", "red"]
```

- 特点：基于原型链，既是父类的实例，也是子类的实例。
- 缺点：1.无法实现多继承；2.所有新实例都会共享父类实例的属性。

2. 构造继承

```js
function Dog(name) {
  Animal.call(this);
  this.name = name || "mica";
}
var dog = new Dog();
dog.color.push("blue");
dog.sleep(); // mica正在睡觉！
dog.eat("bone"); //Uncaught TypeError: dog.eat is not a function
console.log(dog.color); //["black", "blue"]
console.log(dog instanceof Animal); //false
console.log(dog instanceof Dog); //true
var new_dog = new Dog();
console.log(new_dog.color); //["black"]
```

- 特点：可以实现多继承（call 多个），解决了所有实例共享父类实例属性的问题。
- 缺点：1.只能继承父类实例的属性和方法；2.不能继承原型上的属性和方法。

  3.组合继承

```js
function Mouse(name){
    Animal.call(this)
    this.name = name || 'jerry'
}
Mouse.prototype = new Animal()
Mouse.prototype.constructor = Mouse

var mouse = new Mouse()
mouse.color.push('yellow)
mouse.sleep() //jerry正在睡觉！
mouse.eat('carrot') //jerry正在吃：carrot
console.log(mouse instanceof Animal)//true
console.log(mouse instanceof Mouse)//true
var new_mouse = new Mouse()
console.log(new_mouse.color) //["black"]
```

- 特点：可以继承实例属性/方法，也可以继承原型属性/方法
- 缺点：调用了两次父类构造函数，生成了两份实例
