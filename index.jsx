import React from "react";
import ReactDOM from "react-dom";

const name = "Lori Smith";
const url = "https://mimo.app/i/lori.png";

const app = (
 <div>
  <h1>Hello, {name}</h1>
  <img 
src={url}
 alt="Lori's Profile" />
 </div>
);

ReactDOM.render(app, document.getElementById("root"));
