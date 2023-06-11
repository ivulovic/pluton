import { RiPlantLine, RiHospitalLine, RiBarChartLine } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { NavLink } from "react-router-dom";

import "./style.scss";

export default function Nav(): JSX.Element {
  return (
    <div className="info-nav">
      <h2 className="section-title">Životna sredina</h2>
      <ul className="links">
        <li>
          <NavLink to="kvalitet-vazduha">
            <RiPlantLine /> Kvalitet vazduha
          </NavLink>
        </li>
      </ul>
      <h2 className="section-title">COVID-19</h2>
      <ul className="links">
        <li>
          <NavLink to="covid-19-statistika">
            <RiBarChartLine />
            COVID-19 statistika
          </NavLink>
        </li>
        <li>
          <NavLink to="covid-19-ambulante">
            <RiHospitalLine />
            COVID-19 ambulante
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
