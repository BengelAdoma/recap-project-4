import { useState } from "react";
import ColorForm from "./ColorForm";
import "./Color.css";

export default function Color({
  color,
  handleDeleteColor,
  confirmDeleteColor,
  deleteId,
  cancelDelete,
  handleUpdateColor, // New prop to handle updates
}) {
  const [isEditing, setIsEditing] = useState(false); // State to track edit mode

  function handleEditSubmit(updatedColor) {
    handleUpdateColor(color.id, updatedColor); // Update the color
    setIsEditing(false); // Exit edit mode
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      {isEditing ? (
        <ColorForm
          onSubmit={handleEditSubmit} // Submit updated color
          initialData={{
            role: color.role,
            hex: color.hex,
            contrastText: color.contrastText,
          }}
        />
      ) : (
        <>
          <h3 className="color-card-headline">{color.hex}</h3>
          <h4>{color.role}</h4>
          <p>contrast: {color.contrastText}</p>
          {deleteId === color.id ? (
            <div className="color-card-highlight">
              <p className="color-card-headline">Really delete?</p>
              <button onClick={() => handleDeleteColor(color.id)}>Delete</button>
              <button onClick={cancelDelete}>Cancel</button>
            </div>
          ) : (
            <>
              <button
                className="delete-button"
                onClick={() => confirmDeleteColor(color.id)}
              >
                Delete
              </button>
              <button
                className="edit-button"
                onClick={() => setIsEditing(true)} // Enter edit mode
              >
                Edit
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}
