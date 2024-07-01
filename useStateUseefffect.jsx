import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
 const [ rating, setRating ] = 
useState
("5");
 const [ review, setReview ] = 
useState
("");

 
useEffect
(()=>{
  if (rating == "4" || rating == "5") setReview("");
 },
[
rating
]
);

 return (
  <div>
   <h1>Customer Feedback is appreciated</h1>
   <p>Please give us feedback:</p>
   <select 
    value={rating} 
    onChange={(e)=>{
     setRating(e.target.value)
    }}
   >
    <option value="5">5/5</option>
    <option value="4">4/5</option>
    <option value="3">3/5</option>
    <option value="2">2/5</option>
    <option value="1">1/5</option>
   </select>
   {
    rating < 4 &&
    <input 
     value={review}
     onChange={(e)=>{
      setReview(e.target.value)
     }}
     placeholder="Oh no! Please tell us how we can improve"
    />
   }
  </div>
 )
}

ReactDOM.render(
 <App />,
 document.getElementById("root")
)
