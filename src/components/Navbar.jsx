import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGlobals } from "../services/useGlobals";
import NavbarUserDropDown from "./NavbarUserDropDown";

const Navbar = () => {
  const burgerMenu = useRef(null);
  const globals = useGlobals();

  function toggleBurgerMenu() {
    if (burgerMenu !== null && burgerMenu.current) {
      burgerMenu.current.classList.toggle("is-active");
    }
    globals.handleSideBarStatus(!globals.sideBarStatus);
  }

  return (
    <nav
      className="navbar is-light has-background-success-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <button
            className="burger-left has-text-weight-bold"
            aria-label="menu"
            aria-expanded="false"
            onClick={() => toggleBurgerMenu()}
            data-target="navbarBasicExample"
            ref={burgerMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>

          <Link className="navbar-item" to="/">
            <span className="is-size-4 has-text-weight-semibold ">
              <strong>KARMA</strong>
            </span>
          </Link>

          {globals.isMobile && <NavbarUserDropDown />}
        </div>

        <div id="navbarMain" className="navbar-menu">
          <div className="navbar-end">
            <NavbarUserDropDown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
