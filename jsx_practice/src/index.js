import React from "react";
import ReactDOM from "react-dom";

function getTime() {
  return new Date().toLocaleTimeString();
}

const App = function () {
  const buttonText = {
    text: "Click Me Please!!",
  };
  return (
    <div>
      <label htmlFor="name" className="label">
        {getTime()}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
