import ColorInput from "./ColorInput.jsx";
import "./Color.css";

export default function ColorForm({
    onSubmit, initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },

}){
function handleSubmit(e){
e.preventDefault();
const formData = new FormData(e.target);
const data = Object.fromEntries(formData)
onSubmit(data)
}
return(
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role">
        Role
        <br />
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={initialData.role}
        />
      </label>
      <br />
      <label htmlFor="hex">
        Hex
        <br />
        <ColorInput id="hex" defaultValue={initialData.hex} />
      </label>
      <br />
      <label htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput id="contrastText" defaultValue={initialData.contrastText} />
      </label>
      <br />
      <button>ADD COLOR</button>
    </form>
  );
}
