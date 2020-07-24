## 完整运行文件

```ts
import React, { useRef } from "react";
import { useGesture } from "react-use-gesture";
import { makeStyles } from "@material-ui/styles";
import { useSprings, animated, to } from "react-spring";
import { DragUserWorkView } from "../DragUserWorkView";
import { Divider } from "../Divider";
import clamp from "./clamp";
import swap from "./swap";

const useStyles = makeStyles({
  draggableMain: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    userSelect: "none",
    // display: flex;
    // justify-content: center;
    // align-items: center;
  },
  content: {
    position: "relative",
    width: "100%",
  },
  contentdiv: {
    position: "absolute",
    width: "100%",
    height: 55,
    overflow: "visible",
    pointerEvents: "auto",
    transformOrigin: "50% 50% 0px",
    cursor: "grab",
    "&:active": { cursor: "grabbing" },
  },
});

const fn = (
  order: any,
  down?: any,
  originalIndex?: number,
  curIndex?: number,
  y?: any
) => (index: number) =>
  down && index === originalIndex
    ? {
        y: curIndex! * 55 + y!,
        scale: 1,
        zIndex: "1",
        // immediate: n => n === 'y' || n === 'zIndex',
      }
    : {
        y: order.indexOf(index) * 55,
        scale: 1,
        zIndex: "0",
        immediate: false,
      };

interface DraggableDragUserWorkProps {
  items: any;
  onClick: (...args: any) => any;
  chooseditem?: string;
}

function DraggableDragUserWork(props: DraggableDragUserWorkProps) {
  const { items, chooseditem, onClick } = props;

  const order = useRef(items.map((_: any, index: any) => index));

  const [springs, setSprings] = useSprings(items.length, fn(order.current));

  const bind = useGesture(({ args: [originalIndex], down, delta: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex);
    const curRow = clamp(
      Math.round((curIndex * 55 + y) / 55),
      0,
      items.length - 1
    );
    const newOrder = swap(order.current, curIndex, curRow);
    setSprings(fn(newOrder, down, originalIndex, curIndex, y));
    if (!down) order.current = newOrder;
  });

  const classes = useStyles();

  return (
    <div>
      <div
        // className="content"
        className={classes.content}
        style={{
          height: items.length * 55,
        }}
      >
        {springs.map(({ zIndex, y, scale }: any, i) => (
          <animated.div
            className={classes.contentdiv}
            {...bind(i)}
            key={i}
            style={{
              zIndex,
              transform: to(
                [y, scale],
                (y, s) => `translate3d(0,${y}px,0) scale(${s})`
              ),
            }}
            children={
              <div>
                {items[i].workspaceId === chooseditem ? (
                  <DragUserWorkView
                    index={i}
                    data={items[i]}
                    choosed={true}
                    emoji={items[i].icon}
                    text={items[i].name}
                    desc={items[i].desc}
                    onClick={onClick}
                  />
                ) : (
                  <DragUserWorkView
                    index={i}
                    data={items[i]}
                    choosed={false}
                    emoji={items[i].icon}
                    text={items[i].name}
                    desc={items[i].desc}
                    onClick={onClick}
                  />
                )}
                <Divider />
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}
export default DraggableDragUserWork;
```

## 历史备份

```ts
import React, { useRef } from "react";
// import clamp from 'lodash-es/clamp';
import clamp from "./clamp";
// import swap from 'lodash-move';
import swap from "./swap";
// import { useDrag } from 'react-use-gesture';
import { useGesture } from "react-use-gesture";
import { useSprings, animated, to, interpolate } from "react-spring";
import { makeStyles } from "@material-ui/styles";
import { DragUserWorkView } from "../DragUserWorkView";
import { Divider } from "../Divider";

const useStyles = makeStyles({
  draggableMai: {
    height: 165,
    margin: 0,
    padding: 0,
    overflow: "hidden",
    userSelect: "none",
  },
  draggableInner: {
    position: "relative",
    // width: '55%',
    "& > div": {
      position: "absolute",
      // width: '55%',
      overflow: "visible",
      pointerEvents: "auto",
      transformOrigin: "50% 50% 0px",
      borderRadius: 5,
      textTransform: "uppercase",
      cursor: "grab",
      "&:active": { cursor: "grabbing" },
    },
  },
});

// 交换一个数组里的两个值
// const swap = (array: any, from: any, to: any) => (
//   array.splice(to, 0, ...array.splice(from, 1)), array
// );

// 依据元素是否被拖拽，从而返回相应样式

interface fnArgs {
  // order: number[];
  order: any;
  down?: boolean;
  originalIndex?: number;
  curIndex?: number;
  y?: number;
}

interface animProps {
  y: number;
  scale: number;
  zIndex: string;
  shadow: number;
  immediate: boolean | ((transitionTarget: string) => boolean);
}

type fnProp = (index: number) => animProps;

const fn = ({ order, down, originalIndex, curIndex, y }: fnArgs): fnProp => (
  index: number
): animProps =>
  down && index === originalIndex
    ? {
        y: curIndex! * 55 + y!,
        scale: 1,
        zIndex: "10",
        shadow: 15,
        // immediate: transitionTarget =>
        //   transitionTarget === 'y' || transitionTarget === 'zIndex',
        immediate: (n) => n === "y" || n === "zIndex",
      }
    : {
        y: order.indexOf(index) * 55,
        scale: 1,
        zIndex: "0",
        shadow: 1,
        immediate: false,
      };

interface DraggableDragUserWorkProps {
  data: any;
  onClick: (...args: any) => any;
  chooseditem: string;
}
function DraggableDragUserWork(props: DraggableDragUserWorkProps) {
  const { data, onClick, chooseditem } = props;
  // 将item的index存为local ref，用来表示item的次序
  const order = useRef(data.map((_: any, index: any) => index));

  //创建springs，每个spring都对应一个item，来控制item的变化，大小等样式
  const [springs, setSprings] = useSprings(data.length, fn(order.current));

  //准备一个gesture handler来返回拖拽差量，触碰/点击状态 等等...
  const bind = useGesture(({ args: [originalIndex], down, delta: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex);
    const curRow = clamp(
      //计算当下行以及变换后的新次序， clamp方法返回当前行数
      Math.round((curIndex * 55 + y) / 55),
      0,
      data.length - 1
    );
    const newOrder = swap(order.current, curIndex, curRow);
    //给springs传入新的样式值，动画无需重新渲染，自动更新
    setSprings(fn({ order: newOrder, down, originalIndex, curIndex, y }));
    if (!down) order.current = newOrder;
  });
  const classes = useStyles();
  return (
    <div className={classes.draggableMai} style={{ height: data.length * 55 }}>
      <div
        className={classes.draggableInner}
        style={{ height: data.length * 10 }}
      >
        {springs.map(({ zIndex, y, scale }: any, index: any) => (
          <animated.div
            {...bind(index)}
            key={index}
            style={{
              zIndex,
              transform: to(
                [y, scale],
                (y, s) => `translate3d(0,${y}px,0) scale(${s})`
              ),
            }}
            children={
              <div style={{ backgroundColor: "pink", height: 55 }}>
                {/* {data[index].workspaceId === chooseditem ? (
                  <DragUserWorkView
                    index={index}
                    data={data[index]}
                    choosed={true}
                    emoji={data[index].icon}
                    text={data[index].name}
                    desc={data[index].desc}
                    onClick={onClick}
                  />
                ) : (
                  <DragUserWorkView
                    index={index}
                    data={data[index]}
                    choosed={false}
                    emoji={data[index].icon}
                    text={data[index].name}
                    desc={data[index].desc}
                    onClick={onClick}
                  />
                )}
                <Divider /> */}
                {data[index].name}
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}

export default DraggableDragUserWork;
```
