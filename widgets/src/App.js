import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./route";
import Header from "./components/Header";

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

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "Shade of Blue",
    value: "blue",
  },
  {
    label: "Misty Green",
    value: "green",
  },
];

// const showAccordion = () => {
//   if (window.location.pathname === "/") {
//     return <Accordion items={items} />;
//   }
// };

// const showList = () => {
//   if (window.location.pathname === "/list") {
//     return <Search />;
//   }
// };

// const showDropdown = () => {
//   if (window.location.pathname === "/dropdown") {
//     return <Dropdown />;
//   }
// };

// const showTranslate = () => {
//   if (window.location.pathname === "/translate") {
//     return <Translate />;
//   }
// };

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      {/* <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      /> */}
      {/* {showAccordion()}
      {showDropdown()}
      {showList()}
      {showTranslate()} */}

      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
