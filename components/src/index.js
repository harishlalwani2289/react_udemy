import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6pm</span>
          </div>
          <div className="text">
            My first comment and it is a nice blog post
          </div>
        </div>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
