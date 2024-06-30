import React from "react";
import ReactDOM from "react-dom";

const App = () => {
 return (
  <div>
   <img
    src="https://mimo.app/i/swoosh.png"
    alt="Basketball underneath a basketball hoop"
    style={{
     width: "100%",
    }}
   />
   <p
    style={{
     marginBottom: 4,
    }}
   >
    The techniques used here are:
   </p>
   <ul
    style={{
     
paddingLeft
:
 
36
,
     
marginTop
:
 
0
,
    }}
   >
    <li>Rule of Thirds</li>
    <li>Depth of Field</li>
   </ul>
  </div>
 );
};

ReactDOM.render(<App />, document.getElementById("root"));
