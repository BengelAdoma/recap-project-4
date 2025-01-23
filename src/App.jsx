import { useState } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/Color/ColorForm.jsx";
import { uid } from 'uid';

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);  // Add the new color to the list
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmit={handleAddColor} />  {/* Pass the handler to the form */}
      {colors.map((color) => (
        <Color key={color.id} color={color} />  
      ))}
    </>
  );
}

export default App;
