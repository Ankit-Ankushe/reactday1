// import sum from './sum.js';
import React from "react";
import  ReactDOM  from "react-dom";
import("../src/index.css");

// let h1 = document.createElement("h1")
// h1.classList.add("redFont")
// h1.innerText = "Hello World";
// document.getElementById("root").append(h1)

// let h1 =React.createElement("h1" ,{className:"redFont" }, "Hello world")
let div = React.createElement("div" , {} , [
    React.createElement("h1", { className : "red-font"}, "Hello World"),
    React.createElement("p",{},"Welcome")
])
ReactDOM.render(
    div,
    document.getElementById("root")
)
console.log(sum(90,10));