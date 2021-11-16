虚拟dom
vue现在是ts吧
react17 不是不需要babel转换了吗？

这个环境变量是干嘛的？
新版是用什么方式转化的呢
17 是那个 Root吗？
https://react.docschina.org/blog/2020/09/22/introducing-the-new-jsx-transform.html ;去官网看吧。  jsx转换有更新。
该发言可能违规，仅老师可见
在编译打包阶段 jsx转成了createElement
在浏览器的执行阶段createElement执行后会返回一个虚拟DOM
然后把虚拟DOM传递给了ReactDOM.render
ReactDOM.render这个方法内部也调用了createElement这个方法么
oliver送给老师一朵
太好了- -  感谢老师
是的，render是把虚拟DOM变成真实DOM插入容器
render应该是把虚拟dom转换为真实dom吧
转换的是fiber
render方法转换成fiber节点么
1
明媚送给老师一朵
你们有跟着一起敲代码么
没有 思路最重要
有道理
敲代码的前提是你知道接下来你敲啥
算了我也不敲代码了
你都不知道思路 敲啥？？？
propName 是undefined
不应该是看完后，自己再复盘敲吗
你这样敲跟抄没区别
大学学的陋习吧
haha
对嘛
跟着听思路就行 ，没必要敲 听完知道咋回事就行
面试够用了
要是想深入研究自己可以再去看源码
babel 转换的网址 勾了那些？
e
为什么chilrenLengh>1的时候那段代码
只要勾选jsx就可以吧


ag props key
只有2个都时候你指向我我指向你
stateNOde 代表dom对象
alternate：备用、轮流的
2个元素的环
第一次渲染的时候workInProgress就是传进来的element，在更新时workInProgress是diff算法比较之后产生的新的虚拟dom？
原来叫next 现在为啥叫alternate？
next更新队列的更新
现在是fiber树
替补
但是 每次改变不是都会有不同的差异么
next 是update quque。。
fiber.updateQueue  update1.next = update2
这样的好处就是,最大限度的复用
可以展开看看 alternate么
感觉和17 写法


为什么不直接创建一个current呢
current代表和当前页面中真实DOM完全 一样的fiber树

但是每次更改 不是改变的地方不大一样么 什么时候会进行同步呢
更新
render 根据老的fiber树和新的虚拟DOM构建新的fiber树并找出差异,也就是diff的结果 
commit 根据diff结果更新真实DOM
更新完了以后新的fiber树就成为fiberRoot.current
fiber和vdom是什么关系？
在render阶段会根据vdom创建fiber节点 一个vdom创建一个fiber

我还是喜欢女朋友的例子
创建虚拟dom的过程可以省略吗，可不可以直接从createDom生成fiber





创建虚拟dom的过程可以省略吗，可不可以直接从createDom生成fiber 不能

每个节点都有2个 fiberhost 自己和自己的替身

自己和兄弟之间是 next 指针
更新的话是.next
差不多散伙了
卡了
文本节点也有fiber吗？是的
vdom 是createElement 创建的  fiber 是render里创建的
是的。非常好


所以 fiber主要的目的 是简化比对过程？优化性能？
fiber的主要目的是可 暂停然后再恢复 
fiber都是一个工作单元，每完成一个工作单元，会判断浏览器有没有更重要的任务要做，
如果有，暂停，让浏览执行渲染之类更重要。等浏览忙完了再回来继续执行render下一个fiber

为什么副作用要用二进制标记，这样做有什么好处？
打第三轮更新时就开始使用alternate了
谷歌浏览器的控制台怎么欢唱中文..
换成


今晚是不是还没开始讲根据vdom创建fiber?
老师用的五笔吗
是为了不让页面掉帧吗？
会让浏览器渲染更流畅
fiber终止渲染，是不是react要开启并发渲染。
怎么暂停和恢复？
更新的时候 都向上找到根fiber  这样做是性能问题的吧，react是怎么解决这种性能问题的
vue 的diff 和 react的diff 有啥区别
新的 jsx 与老的 jsx 有什么区别
分时调度  好像是操作系统底层的一种策略 名字不记得了
react 17 fiber暂停渲染，是不是要开启并发渲染才能暂停？
拿过来的这个动作 值重新改变指针还是重新创建呢
重新创建岂不是没有意义了