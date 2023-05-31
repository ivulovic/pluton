import { ImRocket } from "react-icons/im";
import { Link } from "react-router-dom";

import "./style.scss";
import { LogoProps } from "./types";

export default function Logo(props: LogoProps): JSX.Element {
  return (
    <div className="logo">
      <Link to="/" className={`logo-title ${props.type}`}>
        <ImRocket />
        <span>PLUTON</span>
      </Link>
    </div>
  );
}
