### 1.讲一下es6有哪些新特性 
 >   ECMAScript5，即ES5，是ECMAScript的第五次修订，于2009年完成标准化
　　ECMAScript6，即ES6，是ECMAScript的第六次修订，于2015年完成，也称ES2015
　　ES6是继ES5之后的一次改进，相对于ES5更加简洁，提高了开发效率
　　
######  ES6新增的一些特性：
- 1）let声明变量和const声明常量，两个都有块级作用域
　　ES5中是没有块级作用域的，并且var有变量提升，在let中，使用的变量一定要进行声明
- 2）箭头函数
　　ES6中的函数定义不再使用关键字function()，而是利用了()=>来进行定义
- 3）模板字符串
　　模板字符串是增强版的字符串，用反引号（`）标识，可以当作普通字符串使用，也可以用来定义多行字符串
- 4）解构赋值
　　ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值
- 5）for of循环
　　for...of循环可以遍历数组、Set和Map结构、某些类似数组的对象、对象，以及字符串
- 6）import、export导入导出
　　ES6标准中，Js原生支持模块(module)。将JS代码分割成不同功能的小块进行模块化，将不同功能的代码分别写在不同文件中，各模块只需导出公共接口部分，然后通过模块的导入的方式可以在其他地方使用
- 7）set数据结构
　　Set数据结构，类似数组。所有的数据都是唯一的，没有重复的值。它本身是一个构造函数
- 8）... 展开运算符 
　　可以将数组或对象里面的值展开；还可以将多个值收集为一个变量
- 10）class 类的继承
- 11）async、await
　　使用 async/await, 搭配promise,可以通过编写形似同步的代码来处理异步流程,提高代码的简洁性和可读性
　　async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成
- 12）promise
　　Promise是异步编程的一种解决方案，比传统的解决方案（回调函数和事件）更合理、强大
- 13）Symbol
　　Symbol是一种基本类型。Symbol 通过调用symbol函数产生，它接收一个可选的名字参数，该函数返回的symbol是唯一的
- 14）Proxy代理
　　使用代理（Proxy）监听对象的操作，然后可以做一些相应事情

### 2.css3中的anvas绘画，node.js webpack是否有了解
- canvas: <canvas>是一个可以使用脚本(通常为JavaScript)来绘制图形的 HTML 元素.例如,它可以用于绘制图表、制作图片构图或者制作简单的(以及不那么简单的)动画. 
- node.js: 简单的说 Node.js 就是运行在服务端的 JavaScript。
Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。
Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。
- webpack:本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。
	

### 3.html第一行！doctype是做上面用的  

DOCTYPE是html5标准网页声明，且必须声明在HTML文档的第一行。来告知浏览器的解析器用什么文档标准解析这个文档，不同的渲染模式会影响到浏览器对于 CSS 代码甚至 JavaScript 脚本的解析
文档解析类型有：
    * BackCompat：怪异模式，浏览器使用自己的怪异模式解析渲染页面。（如果没有声明DOCTYPE，默认就是这个模式）
    * CSS1Compat：标准模式，浏览器使用W3C的标准解析渲染页面。
IE8还有一种介乎于上述两者之间的近乎标准的模式，但是基本淘汰了。

### 4.css动画特性可以用js实现，网上还要用css实现 
用CSS3动画替代JS模拟动画的好处：

　　1. 不占用JS主线程；

　　2. 可以利用硬件加速；

　　3. 浏览器可对动画做优化（元素不可见时不动画，减少对FPS的影响）。

坏处是：

　　浏览器对渲染的批量异步化处理让动画难以控制，此时可以用


```
$.fn.repaint = function () {
   this.each(function (item) {
     return item.clientHeight;
});  
}
```
来强制同步。
### 5.ajax请求数据重新处理和拦截器
https://www.cnblogs.com/ll409546297/p/6203403.html
https://my.oschina.net/u/1540190/blog/1928255
### 6.boorstarp中栏珊的24个是怎么做到的
https://blog.csdn.net/qq_37957971/article/details/88050251
### 7.轮播图怎么考虑实现的
https://www.jianshu.com/p/366e374e108d
### 8.git的常用操作
- 1）从远程库中克隆项目
- git clone 项目地址
- 2）工作区到暂存区
- git add 文件名字、git add . 多个文件操作
- 3）暂存区到版本区
- git commit -m"注释信息"
- 4）把版本区文件上传到远程仓库
- git push origin master
- 5）将远程仓库的文件拉取/下载下来
- git pull origin master
- 6）查看当前历史记录、查看所有的操作记录
- git log、git reflog
- 7）查看文件状态
- git status
- 8）查看版本信息
- git version
- 9）查看配置信息
- git config --list
- 10）在当前目录新建一个Git代码库（生成隐藏.git文件）
- git init
- 11）版本回退
- git reset --hard 版本id
- 12）查看xx文件修改了哪些内容
- git diff xx
- 13）删除文件名
- git rm 文件名
- 14）恢复一个文件
- git checkout
- 15）关联一个远程库
- git remote add [远程仓库git地址]
- 16）移除关联一个远程库
- git remote remove [远程仓库git地址]
- 17）创建分支
- git branch 分支名
- 18）查看分支数量
- git branch
- 19）切换分支
- git checkout 分支名
- 20）创建并切换分支
- git checkout -b 分支名
- 21）当文件修改时切换分支
- git stash 暂存文件
- 22）合并分支
- git merge
- 23）合并指定分支到当前分支
- git merge [branch]
- 24）查看已合并的分支
- git branch --merge
- 25）查看未合并的分支
- git branch --no-merge
- 26）查看远程分支
- git branch -r
- 27）删除未合并的分支
- git branch -D 分支名
- 28）删除已合并的分支
- git branch --
- 29）删除远程分支
- git branch -d 分支名
- 30）生成一个可供发布的压缩包
- git archive

### 9,除了视频网站学习还会怎么学习
- MDN
- Github
- CSDN
- 个人技术博客
- google

### 10.简单说下get和post的区别  
- get和post在HTTP中都代表着请求数据，其中get请求相对来说更简单、快速，效率高些
- get相对post安全性低
- get有缓存，post没有
- get体积小，post可以无限大
- get的url参数可见，post不可见
- get只接受ASCII字符的参数数据类型，post没有限制
- get请求参数会保留历史记录，post中参数不会保留
- get会被浏览器主动catch，post不会，需要手动设置
- get在浏览器回退时无害，post会再次提交请求
- post一般用于修改服务器上的资源，对所发送的信息没有限制。比如
- 1. 无法使用缓存文件（更新服务器上的文件或数据库）
- 2. 向服务器发送大量数据（POST 没有数据量限制）
- 3. 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠
       

### 11.h5的新特性，和css3的新特性
https://www.jianshu.com/p/cddb84a31bfa

https://www.cnblogs.com/huaifeidejiushu/p/9092303.html
### 12.seo的搜索引擎优化

### 13.const定义对象能否改变

- 可以,因为对象是引用类型的，保存的仅是对象的指针，这就意味着，const仅保证指针不发生改变，修改对象的属性不会改变对象的指针，所以是被允许的。也就是说const定义的引用类型只要指针不发生改变，其他的不论如何改变都是允许的。


       
### 14.let和var在全局定义的时候有上面区别
-  var声明变量可以重复声明，而let不可以重复声明
- 　　var是不受限于块级的，而let是受限于块级
- 　　var会与window相映射（会挂一个属性），而let不与window相映射
- 　　var可以在声明的上面访问变量，而let有暂存死区，在声明的上面访问变量会报错
- 　　const声明之后必须赋值，否则会报错
- 　　const定义不可变的量，改变了就会报错
- 　　const和let一样不会与window相映射、支持块级作用域、在声明的上面访问变量会报错
　　


###  15.js的三大事件

- 鼠标事件, 键盘事件, HTML事件  https://www.jianshu.com/p/fd13be573156
