import { useState } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/Color/ColorForm.jsx";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(initialColors);
  const [deleteId, setDeleteId] = useState(null); // Track the color to confirm deletion

  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }

  function handleDeleteColor(id) {
    setColors(colors.filter((color) => color.id !== id)); // Remove the color with the specified id
    setDeleteId(null); // Reset confirmation state
  }

  function confirmDeleteColor(id) {
    setDeleteId(id); // Set the id of the color to be deleted
  }

  function cancelDelete() {
    setDeleteId(null); // Cancel the delete action
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmit={handleAddColor} />

      {colors.length === 0 ? (
        <p className="color-card-highlight">
          No colors available. Add some colors to get started!
        </p>
      ) : (
        colors.map((color) => (
          <div key={color.id} className="color-card">
            <Color color={color} />
            {deleteId === color.id ? (
              <div className="color-card-highlight">
                <p>Really delete?</p>
                <button onClick={() => handleDeleteColor(color.id)}>Delete</button>
                <button onClick={cancelDelete}>Cancel</button>
              </div>
            ) : (
              <button
                className="delete-button"
                onClick={() => confirmDeleteColor(color.id)}
              >
                Delete
              </button>
            )}
          </div>
        ))
      )}
    </>
  );
}

export default App;
