import { NavLink } from "react-router-dom";

import "./style.scss";

export default function Nav(): JSX.Element {
  return (
    <div className="info-nav">
      <h2 className="section-title">Životna sredina</h2>
      <ul className="links">
        <li>
          <NavLink to="/open-data/visualization/air-quality">Kvalitet vazduha</NavLink>
        </li>
      </ul>
      <h2 className="section-title">COVID-19</h2>
      <ul className="links">
        <li>
          <NavLink to="/open-data/visualization/covid-19-statistic">COVID-19 statistika</NavLink>
        </li>
        <li>
          <NavLink to="/open-data/visualization/covid-19-clinic">COVID-19 ambulante</NavLink>
        </li>
      </ul>
    </div>
  );
}
