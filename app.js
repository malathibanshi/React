import React from "react";
import ReactDOM from "react-dom";
var a =document.createElement("h1")
a.innerText="hello world using java"
var b = document.getElementById("root")
b.appendChild(a)
ReactDOM.render(
  <div>
  <h1>hello</h1>
    <p>This is react paragraph</p>
  </div>, 
  document.getElementById("root")
    );


