import React from "react";

const App = () => {
 const myStyle = {
  container: {
   backgroundColor: "#d3d3d3",
   padding: 16,
  },
  pic: {
   width: "100%",
   marginBottom: 8,
  },
 };

 return (
  <div style={myStyle.container}>
   <img
    src="https://mimo.app/i/clawdius.png"
    alt="The guilty kitty"
    style={myStyle.pic}
   />
   <p>A very guilty kitty...</p>
  </div>
 );
};
