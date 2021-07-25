import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => {
  return <h2>jown</h2>;
};

const Message = () => {
  return <p>This is a my paragraph</p>;
};

//Whats going on under the hood essentially
// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "potatio")
//   );
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
