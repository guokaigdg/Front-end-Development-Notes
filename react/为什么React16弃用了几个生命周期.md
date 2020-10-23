## React 16 之后有三个生命周期被废弃(但并未删除)

- componentWillMount
- componentWillReceiveProps
- componentWillUpdate

#### 防止第一个阶段 fiber 对生命周期的重复调用

理想情况下，React Fiber 应该完全不影响现有代码，但可惜并完全是这样，要吃这个包子还真要知道一点这个包子怎么做的，你如果不喜欢吃甜的就不要吃糖包子，对不对？

在 React Fiber 中，一次更新过程会分成多个分片完成，所以完全有可能一个更新任务还没有完成，就被另一个更高优先级的更新过程打断，这时候，优先级高的更新任务会优先处理完，而低优先级更新任务所做的工作则会完全作废，然后等待机会重头再来。

因为一个更新过程可能被打断，所以 React Fiber 一个更新过程被分为两个阶段(Phase)：第一个阶段 Reconciliation Phase 和第二阶段 Commit Phase。

在第一阶段 Reconciliation Phase，React Fiber 会找出需要更新哪些 DOM，这个阶段是可以被打断的；但是到了第二阶段 Commit Phase，那就一鼓作气把 DOM 更新完，绝不会被打断。

这两个阶段大部分工作都是 React Fiber 做，和我们相关的也就是生命周期函数。

以 render 函数为界，第一阶段可能会调用下面这些生命周期函数，说是“可能会调用”是因为不同生命周期调用的函数不同。

componentWillMount

componentWillReceiveProps

shouldComponentUpdate

componentWillUpdate

下面这些生命周期函数则会在第二阶段调用。

componentDidMount

componentDidUpdate

componentWillUnmount
