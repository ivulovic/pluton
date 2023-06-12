import { NavLink } from "react-router-dom";
import "./style.scss";

export default function Nav(): JSX.Element {
  return (
    <div className="open-source-nav">
      <h2 className="section-title">Životna sredina</h2>
      <ul className="links">
        <li>
          <NavLink to="kvalitet-vazduha">Kvalitet vazduha</NavLink>
        </li>
      </ul>
      <h2 className="section-title">COVID-19</h2>
      <ul className="links">
        <li>
          <NavLink to="covid-19-statistika">COVID-19 statistika</NavLink>
        </li>
        <li>
          <NavLink to="covid-19-ambulante">COVID-19 ambulante</NavLink>
        </li>
      </ul>
    </div>
  );
}
