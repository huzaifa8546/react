import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import Age from "./components/Age.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Age />
  </StrictMode>
);
