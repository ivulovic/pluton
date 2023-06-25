import { NavLink } from "react-router-dom";

const DefaultLinks = (): JSX.Element => (
  <>
    <NavLink to="/ai" className="nav-item">
      AI
    </NavLink>
    {/* <NavLink to="/aplikacije" className="nav-item">
      APLIKACIJE
    </NavLink> */}
    <NavLink to="/fit" className="nav-item">
      Fit
    </NavLink>
    <NavLink to="/open-data" className="nav-item">
      Open Data
    </NavLink>
  </>
);

export default DefaultLinks;
