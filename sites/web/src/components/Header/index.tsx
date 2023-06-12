import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useLocation } from "react-router-dom";

import useOutsideClick from "@web/hooks/useOutsideClick";

import Logo from "../Logo";

import { HeaderProps } from "./types";

import "./style.scss";

export default function Header(props: HeaderProps): JSX.Element {
  const { type = "default" } = props;
  const location = useLocation();
  const navbarRef = useRef<any>();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    setIsNavbarOpen(false);
  }, [location]);

  useOutsideClick(navbarRef, () => setIsNavbarOpen(false));
  const HamburgerMenu = (): JSX.Element => (
    <button onClick={(): void => setIsNavbarOpen(!isNavbarOpen)} className="nav-icon mobile">
      <RxHamburgerMenu width={24} height={24} />
    </button>
  );
  const Links = (): JSX.Element => (
    <>
      <NavLink to="/ai" className="nav-item">
        AI
      </NavLink>
      <NavLink to="/aplikacije" className="nav-item">
        APLIKACIJE
      </NavLink>
      <NavLink to="/informacije" className="nav-item">
        INFORMACIJE
      </NavLink>
      <NavLink to="/otvoreni-podaci" className="nav-item">
        OTVORENI PODACI
      </NavLink>
    </>
  );
  return (
    <header className={`header ${type}`}>
      <div className="header-wrapper">
        <Logo type="inline" />
        <div className="nav-wrapper">
          <Links />
        </div>
        <HamburgerMenu />
        <div className={`nav-wrapper mobile ${isNavbarOpen ? "opened" : "closed"}`} ref={navbarRef}>
          <div className="nav-header">
            <HamburgerMenu />
            {/* <FormattedMessage id="navigation" /> */}
          </div>
          <Links />
        </div>
      </div>
    </header>
  );
}
