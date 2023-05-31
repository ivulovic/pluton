import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

import Logo from "../Logo";

import { HeaderProps } from "./types";
import "./style.scss";

export default function Header(props: HeaderProps): JSX.Element {
  const { type = "default" } = props;
  // const location = useLocation();
  // const navbarRef = useRef();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // useEffect(() => {
  //   setIsNavbarOpen(false);
  // }, [location]);

  //   useOnClickOutside(navbarRef, () => setIsNavbarOpen(false));
  const HamburgerMenu = (): JSX.Element => (
    <button onClick={(): void => setIsNavbarOpen(!isNavbarOpen)} className="nav-icon mobile">
      <RxHamburgerMenu width={24} height={24} />
    </button>
  );
  const Links = (): JSX.Element => (
    <>
      {/* //     <NavLink to="/apps" className="nav-item">
  //       Apps
  //     </NavLink>
  //     <NavLink to="/finance" className="nav-item">
  //       <FaCoins /> &nbsp; Finance
  //     </NavLink>
  //     <NavLink to="/news" className="nav-item">
  //       <BiNews />
  //       &nbsp; News
  //     </NavLink>
  //     <NavLink to="/health" className="nav-item">
  //       Health
  //     </NavLink>
  //     <NavLink to="/open-source" className="nav-item">
  //       Open Source
  //     </NavLink>
  //     <NavLink to="/sign-in" className="nav-item">
  //       Sign In
  //     </NavLink>
  //     <NavLink to="/sign-in" className="nav-item">
  //       Вештачка интелигенција
  //     </NavLink>
  //     <NavLink to="/sign-in" className="nav-item">
  //       Artificial Inteligence
  //     </NavLink>
  //     <NavLink to="/sign-in" className="nav-item">
  //       Плутон AI
  //     </NavLink> */}
      <NavLink to="/ai" className="nav-item">
        Pluton AI
      </NavLink>
      {/* <NavLink to="/blog" className="nav-item">
        Blog
      </NavLink>
      <NavLink to="/sign-in" className="nav-item">
        Sign In
      </NavLink> */}
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