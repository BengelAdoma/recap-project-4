import { useState } from "react";
import ColorInput from "./ColorInput"; // Assuming ColorInput is a separate component
import "./Color.css";

export default function ColorForm({
  onSubmit,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
}) {
  // State to track form input values
  const [role, setRole] = useState(initialData.role);
  const [hex, setHex] = useState(initialData.hex);
  const [contrastText, setContrastText] = useState(initialData.contrastText);

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload
    const data = { role, hex, contrastText };  // Prepare data to submit
    onSubmit(data);  // Pass the data to the parent component (App.jsx)
    setRole("");  // Reset form inputs after submission
    setHex("");
    setContrastText("");
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role">
        Role
        <br />
        <input
          type="text"
          id="role"
          name="role"
          value={role}  // Bind to state
          onChange={(e) => setRole(e.target.value)}  // Update state on change
        />
      </label>
      <br />
      <label htmlFor="hex">
        Hex
        <br />
        <ColorInput
          id="hex"
          value={hex}  // Bind to state
          onColorChange={setHex}  // Update state on change
        />
      </label>
      <br />
      <label htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput
          id="contrastText"
          value={contrastText}  // Bind to state
          onColorChange={setContrastText}  // Update state on change
        />
      </label>
      <br />
      <button type="submit">Add Color</button>
    </form>
  );
}
