import React from "react";
import StickyBlockBox from "./StickyBlockBox";

function StickyBlockBoxWrap(props) {
  const { list } = props;
  return (
    <div>
      <StickyBlockBox list={list} />
    </div>
  );
}
export default StickyBlockBoxWrap;
