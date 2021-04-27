import "./FormField.css";

export function FormField(props) {
  return (
    <div className="contact-form-field">
      <p>{props.label}</p>
      <input type="text" style={props.style} onChange={props.onChange} />
    </div>
  );
}
