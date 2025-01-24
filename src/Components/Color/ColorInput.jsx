function ColorInput({ id, value, onColorChange }) {
  return (
    <div>
      {/* Color input field */}
      <input
        type="color"
        id={id}
        value={value}  // Bind to state
        onChange={(e) => onColorChange(e.target.value)}  // Update the parent's state
      />
      {/* Text input for hex */}
      <input
        type="text"
        value={value}  // Bind to state
        onChange={(e) => onColorChange(e.target.value)}  // Update the parent's state
        placeholder="Enter hex value"
      />
    </div>
  );
}

export default ColorInput;
