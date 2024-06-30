import React from "react";
import ReactDOM from "react-dom";

import "./style.css"
;

const App = () => {
 return (
  <div>
   <img
    src="https://mimo.app/i/swoosh.png"
    alt="Basketball underneath a basketball hoop"
   />
   <p>The techniques used here are:</p>
   <ul>
    <li>Rule of Thirds</li>
    <li>Depth of Field</li>
   </ul>
  </div>
 );
};

ReactDOM.render(<App />, document.getElementById("root"));
