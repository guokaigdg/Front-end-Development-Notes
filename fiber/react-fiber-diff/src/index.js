import React from './react';
import ReactDOM from './react-dom';
//let element = React.createElement("div", {key: "title",id: "title"}, "title");
let element = <div key="title" id="title">title</div>
ReactDOM.render(element, document.getElementById('root'));