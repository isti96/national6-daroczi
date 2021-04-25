import menuButtonSvg from "./menu.svg";
import "./MenuButton.css";

export function MenuButton() {
  return (
    <div className="app-menu-button">
      <img src={menuButtonSvg} alt="menuButton" />
    </div>
  );
} 
