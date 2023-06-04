import { Outlet } from "react-router-dom";
import "./style.scss";

export default function Content(): JSX.Element {
  return (
    <div className="open-source-content">
      {/* <h2 className="section-breadcrumb">Otvoreni podaci</h2> */}
      <Outlet />
    </div>
  );
}
