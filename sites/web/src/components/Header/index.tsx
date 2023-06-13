import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation } from "react-router-dom";

import useOutsideClick from "@web/hooks/useOutsideClick";

import DefaultLinks from "./DefaultLinks";
import DefaultLogo from "./DefaultLogo";
import { HeaderProps } from "./types";

import "./style.scss";

export default function Header(props: HeaderProps): JSX.Element {
  const { type = "default", links: Links = DefaultLinks, logo: Logo = DefaultLogo } = props;
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

  return (
    <header className={`header ${type}`}>
      <div className="header-wrapper">
        <Logo />
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
