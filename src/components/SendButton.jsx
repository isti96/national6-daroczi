import "./SendButton.css";

export function SendButton(props) {
  return (
    <div className="send-container">
      <button onClick={props.onClick}
     > Send </button>
    </div>
  );
}
