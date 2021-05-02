import "./FormMessage.css";

export function FormMessage(props) {
  return (
    <div className="message" style={props.style}>
      <button id="message-button" onClick={props.onClick}>
        x
      </button>
      <p>Message sent!</p>
    </div>
  );
}
 