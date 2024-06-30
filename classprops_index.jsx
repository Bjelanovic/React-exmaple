import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
 
constructor(props)
 {
  super(props);
 }
 render() {
  return (
   <div>
    <h1>{this.props.title}</h1>
    <p>By {this.props.author}</p>
    <p>
     ...
     They had walked in single file down the path, and even in the open one stayed behind the other. Both were dressed in denim trousers and in denim coats with brass buttons. Both wore black, shapeless hats and both carried tight blanket rolls slung over their shoulders. The first man was small and quick, dark of face, with restless eyes and sharp, strong features. Every part of him was defined: small, strong hands, slender arms, a thin and bony nose. Behind him walked his opposite, a huge man, shapeless of face, with large, pale eyes, and wide, sloping shoulders; and he walked heavily, dragging his feet a little, the way a bear drags his paws. His arms did not swing at his sides, but hung loosely...
    </p>
   </div>
  );
 }
}

ReactDOM.render(
 <App title="Of Mice and Men" author="John Steinbeck" />,
 document.getElementById("root")
);
