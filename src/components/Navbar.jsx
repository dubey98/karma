import React, { useRef } from "react";
import { useAuth } from "./../services/useAuth";
import { Link } from "react-router-dom";

const Navbar = () => {
  const auth = useAuth();
  const burgerMenu = useRef(null);
  const navbarMain = useRef(null);
  const profileDropdown = useRef(null);

  function toggleBurgerMenu() {
    if (burgerMenu !== null && navbarMain !== null) {
      burgerMenu.current.classList.toggle("is-active");
      navbarMain.current.classList.toggle("is-active");
    }
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
            onClick={() => toggleBurgerMenu()}
            data-target="navbarBasicExample"
            ref={burgerMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbarMain" className="navbar-menu" ref={navbarMain}>
          <div className="navbar-end">
            <div className="navbar-item">
              {auth.user ? (
                <div className="buttons">
                  <div
                    className="navbar-item has-dropdown is-hoverable"
                    ref={profileDropdown}
                  >
                    <Link to="/" className="navbar-link is-arrowless">
                      {auth.user.photoURL ? (
                        <figure className="image is-32x32">
                          <img
                            className="is-rounded"
                            src={auth.user.photoURL}
                            alt="user profile"
                          />
                          {console.log(auth.user.photoURL)}
                        </figure>
                      ) : (
                        <span className="icon">
                          <i className="far fa-user"></i>
                        </span>
                      )}
                    </Link>

                    <div className="navbar-dropdown is-right">
                      <Link to="/" className="navbar-item">
                        Profile
                      </Link>
                      <Link to="/" className="navbar-item">
                        Settings
                      </Link>
                      <hr className="navbar-divider" />
                      <Link
                        to="/"
                        className="navbar-item is-selectable"
                        onClick={async () => {
                          await auth.signOut();
                          toggleBurgerMenu();
                        }}
                      >
                        Log Out
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="buttons">
                  <button
                    className="button has-background-success-light"
                    onClick={async () => {
                      await auth.signIn();
                      toggleBurgerMenu();
                    }}
                  >
                    <strong>Sign up</strong>
                  </button>
                  <button
                    className="button has-background-success-light"
                    onClick={async () => {
                      await auth.signIn();
                      toggleBurgerMenu();
                    }}
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
