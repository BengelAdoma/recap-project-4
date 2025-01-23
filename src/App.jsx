import { useState } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/Color/ColorForm.jsx";
import { uid } from 'uid';
import useLocalStorageState from "use-local-storage-state";




function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }
  // console.log("Find Issue 1");
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      {colors.length < 1 && <h4>No colors. Start by adding one!</h4>}
      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            onDelete={handleDeleteColor}
            onEditColor={handleEditColor}
          />
        );
      })}
    </>
  );
}

export default App;
