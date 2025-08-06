import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click Me To Visit The Google",
};

function MyApp() {
  return (
    <div>
      <h1>custom react app</h1>
    </div>
  );
}

const AnotherElement = (
  <a href="http://google.com" target="_blank">
    Visit Google
  </a>
);

const AreactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Click to visit google"
);
createRoot(document.getElementById("root")).render(
  // <AnotherElement />
//   AreactElement
  <App />
);
