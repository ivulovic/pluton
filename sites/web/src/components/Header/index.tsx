import { useEffect, useState } from "react";
import { ImRocket } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./style.scss";

export default function Header(): JSX.Element {
  const location = useLocation();
  // const navbarRef = useRef();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    setIsNavbarOpen(false);
  }, [location]);

  //   useOnClickOutside(navbarRef, () => setIsNavbarOpen(false));
  const LogoWrapper = (): JSX.Element => (
    <div className="logo-wrapper">
      <Link to="/" className="logo-title">
        <ImRocket />
        <span>Pluton</span>
        <span className="preview">preview</span>
      </Link>
    </div>
  );
  const HamburgerMenu = (): JSX.Element => (
    <button onClick={(): void => setIsNavbarOpen(!isNavbarOpen)} className="nav-icon mobile">
      <RxHamburgerMenu width={24} height={24} />
    </button>
  );
  const Links = (): JSX.Element => (
    <>
      {/* <NavLink to="/apps" className="nav-item">
        Apps
      </NavLink> */}
      {/* <NavLink to="/finance" className="nav-item">
        <FaCoins /> &nbsp; Finance
      </NavLink>
      <NavLink to="/news" className="nav-item">
        <BiNews />
        &nbsp; News
      </NavLink>
      <NavLink to="/health" className="nav-item">
        Health
      </NavLink>
      <NavLink to="/open-source" className="nav-item">
        Open Source
      </NavLink>
      <NavLink to="/sign-in" className="nav-item">
        Sign In
      </NavLink> */}
      {/* <NavLink to="/sign-in" className="nav-item">
        Вештачка интелигенција
      </NavLink>
      <NavLink to="/sign-in" className="nav-item">
        Artificial Inteligence
      </NavLink> */}
      <NavLink to="/sign-in" className="nav-item">
        Плутон AI
      </NavLink>
    </>
  );
  return (
    <header className="header">
      <div className="header-wrapper">
        <LogoWrapper />
        <div className="nav-wrapper">
          <Links />
        </div>
        <HamburgerMenu />
        <div
          className={`nav-wrapper mobile ${isNavbarOpen ? "opened" : "closed"}`}
          // ref={navbarRef}
        >
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
