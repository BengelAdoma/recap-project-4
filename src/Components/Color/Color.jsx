import "./Color.css";

export default function Color({ color,deleteId,handleDeleteColor,confirmDeleteColor,cancelDelete }) {
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
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
    
  );
  console.log("Find Issue 1");
}
