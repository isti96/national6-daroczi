import "./FormFieldTextArea.css";

export function FormFieldTextArea(props) {
  return (
    <div className="contact-form-field">
      <p>{props.label}</p>
      <textarea type="text" style={props.style} onChange={props.onChange} />
    </div>
  );
}
 