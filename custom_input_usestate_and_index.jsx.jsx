import React, { useState, useEffect } from "react";

const Textbox = (props) => {

 const [ value, setValue ] = useState("");
 
 useEffect(()=>{
  if (props.disabled) setValue("")
 },[
props.disabled
]);

 const changeValue = (e) => { setValue(e.target.value) }

 return (
  <input 
   type={props.type} 
   value={value} 
   onChange={changeValue} 
   placeholder={props.placeholder}
   disabled={props.disabled}
  />
 )

}

export default Textbox;

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Textbox from './custom_input.jsx';

const App = () => {
 const [ disableFirst, setDisableFirst ] = useState(false);
 const [ disableSecond, setDisableSecond ] = useState(false);

 const changeFirst = () => { setDisableFirst(d => !d) }
 const changeSecond = () => { setDisableSecond(d => !d) }

 return (
  <div>
   <h1>Boogle Forms</h1>
   <Textbox type="text" disabled={disableFirst} placeholder="Your name?"/>
   <Textbox type="email" disabled={disableSecond} placeholder="Your contact email?" />
   <button onClick={changeFirst}>Disable Name Field</button>
   <button onClick={changeSecond}>Disable Email Field</button>
  </div>
 )
}

ReactDOM.render(
 <App />,
 document.getElementById("root")
)

Continue
Make sure to type props.disabled.

Lesson solved. Good job!
