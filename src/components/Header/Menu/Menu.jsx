import { MenuFlyout } from "./MenuFlyout/MenuFlyout";
import { MenuButton } from "./MenuButton/MenuButton";
import "./Menu.css";

export function Menu() {
  return (
    <div className="app-menu">
      <MenuButton />
      <MenuFlyout /> 
    </div>
  );
}
