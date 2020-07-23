import React, { useRef } from "react";
import clamp from "../clamp";
import swap from "../swap";
import { useGesture } from "react-use-gesture";
import { useSprings, animated, to } from "react-spring";
import "./styles/styles.css";

// Returns fitting styles for dragged/idle items
const fn = (order, down, originalIndex, curIndex, y) => (index) =>
  down && index === originalIndex
    ? {
        y: curIndex * 55 + y,
        scale: 1.1,
        zIndex: "1",
        shadow: 15,
        immediate: (n) => n === "y" || n === "zIndex",
      }
    : {
        y: order.indexOf(index) * 55,
        scale: 1,
        zIndex: "0",
        shadow: 1,
        immediate: false,
      };

function DraggableList({ items }) {
  const order = useRef(items.map((_, index) => index)); // Sinterpolatere indicies as a local ref, this represents the item order
  const [springs, setSprings] = useSprings(items.length, fn(order.current)); // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  const bind = useGesture(({ args: [originalIndex], down, delta: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex);
    const curRow = clamp(
      Math.round((curIndex * 55 + y) / 55),
      0,
      items.length - 1
    );
    const newOrder = swap(order.current, curIndex, curRow);
    setSprings(fn(newOrder, down, originalIndex, curIndex, y)); // Feed springs new style data, they'll animate the view without causing a single render
    if (!down) order.current = newOrder;
  });
  return (
    <div className="content" style={{ height: items.length * 55 }}>
      {springs.map(({ zIndex, y, scale }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          style={{
            zIndex,
            transform: to(
              [y, scale],
              (y, s) => `translate3d(0,${y}px,0) scale(${s})`
            ),
          }}
          children={items[i]}
        />
      ))}
    </div>
  );
}
export default DraggableList;
