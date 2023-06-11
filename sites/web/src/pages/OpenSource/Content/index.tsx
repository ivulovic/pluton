import { Outlet } from "react-router-dom";
import "./style.scss";

export default function Content(): JSX.Element {
  return (
    <div className="open-source-content">
      <Outlet />
    </div>
  );
}