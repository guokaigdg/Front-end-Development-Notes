import React from "react";
import Draggable from "./Draggable";
function App() {
  const data = [
    {
      content: "div1",
      code: "01",
      sort: 2,
    },
    {
      content: "div2",
      code: "02",
      sort: 3,
    },
    {
      content: "div3",
      code: "03",
      sort: 4,
    },
    {
      content: "div4",
      code: "04",
      sort: 5,
    },
    {
      content: "div5",
      code: "05",
      sort: 6,
    },
    {
      content: "div6",
      code: "06",
      sort: 1,
    },
  ];

  // const handelrender = item => {
  //   console.log(item);
  //   item.map(item => {
  //     return <div>{item}</div>;
  //   });
  // };

  return (
    <div>
      <Draggable
        value={data}
        sortKey={"sort"}
        codeKey={"code"}
        // rander={handelrender}
        style={{
          width: 320,
          height: 50,
          backgroundColor: "pink",
          marginBottom: 10,
        }}
        isAcceptAdd={"false"}
      />
    </div>
  );
}

export default App;
