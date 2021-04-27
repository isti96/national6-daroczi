import "./FormField.css";

export function FormField(props) {
  return (
    <div className="contact-form-field">
      <p>{props.label}</p>
      <input type="text"  onChange={ props.checkHasError} />
    </div>
  );
}
