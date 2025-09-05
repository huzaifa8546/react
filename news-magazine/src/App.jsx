import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Navboard from "./components/Navboard";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <NavBar setCategory={setCategory}/>
      <Navboard category={category} />
    </div>
  );
}

export default App;
