import React from "react";
import { useLocation } from "react-router-dom";

function Show() {
  let location = useLocation();
  let newHref = location.hash;

  return (
    <div style={{ top: "500px" }}>
      <div>滚动到{newHref}</div>
    </div>
  );
}
export default Show;
