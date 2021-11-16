//今天只讲dom diff
//不讲调度 lane 
let element = {
    type: 'div',
    key: 'A',
    props: {
        style,
        children: [
            'A文本',
            { type: 'div', key: 'B1', props: { style, children: 'B1文本' } },
            { type: 'div', key: 'B2', props: { style, children: 'B2文本' } }
        ]
    }
}
//React源码中如果一个节点只有一个子节点，而且这一个子节点是文本节点的话，不会为此子节点创建fiber优化

/**
 * 1.开始遍历一个fiber节之后
 * 2.如果有儿子，开始处理儿子
 * 3.如果没有儿子，自己就结束了， 开始处理弟弟
 * 4.如果没有弟弟，父亲就结束了，说明自己就是最小的儿子了，开始处理叔叔
 * 5.如果没有叔叔，找它爷爷
 *
 */