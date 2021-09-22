import React from "react";
import { useAuth } from "./services/useAuth";
import { Link } from "react-router-dom";

const Navbar = () => {
  const auth = useAuth();

  function handleNavbarClick(e) {
    document.getElementById("navbarMain").classList.toggle("is-active");
    e.target.classList.toggle("is-active");
  }

  return (
    <nav
      className="navbar is-light has-background-success-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <span className="is-size-4 has-text-weight-semibold ">
              <strong>KARMA</strong>
            </span>
          </Link>

          <button
            className="navbar-burger has-text-weight-bold"
            aria-label="menu"
            aria-expanded="false"
            onClick={(e) => handleNavbarClick(e)}
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbarMain" className="navbar-menu">
          {/* <div className="navbar-start">
            <div className="navbar-item">
              <Link to="/">Home</Link>
            </div>

            <Link to="/projects" className="navbar-item">
              More
            </Link>
          </div> */}

          <div className="navbar-end">
            <div className="navbar-item">
              {auth.user ? (
                <div className="buttons">
                  <button
                    className="button has-background-success-light"
                    onClick={() => auth.signOut()}
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="buttons">
                  <button
                    className="button has-background-success-light"
                    onClick={() => auth.signIn()}
                  >
                    <strong>Sign up</strong>
                  </button>
                  <button
                    className="button has-background-success-light"
                    onClick={() => auth.signIn()}
                  >
                    Log in
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
