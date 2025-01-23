import { useState } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/Color/ColorForm.jsx";
import { uid } from 'uid';




function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    setColors([{ id: nanoid(), ...newColor }, ...colors]);
  }
  // console.log("Find Issue 1");
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmit={handleAddColor} />
      {initialColors.map((color) => {
        return <Color key={color.id} color={color} />;
       
      })}
    </>
  );
}

export default App;
