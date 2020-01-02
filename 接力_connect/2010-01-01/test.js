import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import StickyBlockBox from "./index";
import Show from "./Show";

function BlockBox() {
  const list = [
    {
      name: "IT技术",
      type: "H1",
      href: "#it",
      node: [
        {
          name: "React",
          type: "H2",
          href: "#react"
        },
        {
          name: "VUE",
          type: "H2",
          href: "#vue"
        }
      ]
    },
    {
      name: "JavaScript",
      type: "H1",
      href: "#javascript"
    },
    {
      name: "VUE",
      type: "H2",
      href: "#vue"
    }
  ];
  return (
    <div>
      <Router>
        <StickyBlockBox list={list} />
        <Show />
      </Router>
    </div>
  );
}
export default BlockBox;
