import React from "react";
import { Link, useLocation } from "react-router-dom";
import uuid from "uuid";
import CX from "classnames";
import "./StickyBlockBox.css";

function StickyBlockBox(props) {
  const { list } = props;
  let location = useLocation();
  let newHref = location.hash;

  return (
    <div className="stickyblockbox-wrap">
      {list.map((item, index) => (
        <Link to={item.href} className="item-wrap" key={index + item}>
          <div className="item">
            {item.type === "H1" && (
              <div
                className={CX({
                  "font-h1-default": true,
                  "font-h1-choosen": item.href === newHref
                })}
              >
                {item.name}
              </div>
            )}
            {item.type === "H2" && (
              <div
                className={CX({
                  "font-h2-default": true,
                  "font-h2-choosen": item.href === newHref
                })}
              >
                {item.name}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
export default StickyBlockBox;
