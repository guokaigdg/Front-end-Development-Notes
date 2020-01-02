import React from "react";
// import { useHistory, useLocation } from "react-router-dom";
import StickyBlockBox from "./StickyBlockBox";

function StickyBlockBoxWrap(props) {
  const { list } = props;
  // let location = useLocation();
  // let  = upDateList(location.hash);
  return (
    <div>
      <StickyBlockBox list={list} />
    </div>
  );
}
export default StickyBlockBoxWrap;
