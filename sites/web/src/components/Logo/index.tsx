import { PropsWithChildren } from "react";
import { ImRocket } from "react-icons/im";
import { Link } from "react-router-dom";

import "./style.scss";
import { LogoProps } from "./types";

export default function Logo(props: PropsWithChildren<LogoProps>): JSX.Element {
  return (
    <div className="logo">
      <Link to={props.to || "/"} className={`logo-title ${props.type}`}>
        <ImRocket />
        <span>PLUTON</span>
        {props.children}
      </Link>
    </div>
  );
}
