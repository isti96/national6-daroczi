import "./Header.css";
import { AppLogo } from "../AppLogo/AppLogo";
export function Header() {
  return (
    <div className="app-header">
      <AppLogo />
      <p className="app-header__title">To Do App</p>
    </div>
  );
}
