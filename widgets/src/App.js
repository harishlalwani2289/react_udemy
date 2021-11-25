import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a front end java script library.",
  },
  {
    title: "Why use React?",
    content: "React si favourite fe ibrary for developers",
  },
  {
    title: "How do use React?",
    content: "We use react by creating components.",
  },
];

export default () => {
  return (
    <div>
      <br />
      <Accordion items={items} />
    </div>
  );
};
