import React, { useRef } from "react";
import { useAuth } from "../services/useAuth";

const NavbarUserDropDown = () => {
  const auth = useAuth();
  const profileDropdown = useRef(null);
  const profileDropDownIcon = useRef(null);

  function toggleMenu() {
    if (profileDropDownIcon && profileDropDownIcon.current) {
      profileDropDownIcon.current.classList.toggle("is-active");
    }
  }

  function handleMouseEnter() {
    if (profileDropdown && profileDropdown.current) {
      profileDropdown.current.classList.add("is-block");
    }
  }

  function handleMouseLeave() {
    if (profileDropdown && profileDropdown.current) {
      profileDropdown.current.classList.remove("is-block");
    }
  }

  return (
    <div className="navbar-item burger-right" style={{ marginLeft: "auto" }}>
      {auth.user ? (
        <div className="buttons">
          <div
            className="navbar-item has-dropdown"
            ref={profileDropDownIcon}
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
          >
            <a href="/" className="navbar-link is-arrowless">
              {auth.user.photoURL ? (
                <figure className="image is-32x32">
                  <img
                    className="is-rounded"
                    src={auth.user.photoURL}
                    alt="user profile"
                  />
                </figure>
              ) : (
                <span className="icon">
                  <i className="far fa-user"></i>
                </span>
              )}
            </a>

            <div
              className="navbar-dropdown navbar-dropdown-persist is-right-extended"
              ref={profileDropdown}
            >
              <a to="/" className="navbar-item">
                Profile
              </a>
              <a to="/" className="navbar-item">
                Settings
              </a>
              <hr className="navbar-divider" />
              <a
                to="/"
                className="navbar-item is-selectable"
                onClick={async () => {
                  await auth.signOut();
                  toggleMenu();
                }}
              >
                Log Out
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="buttons">
          <button
            className="button has-background-success-light"
            onClick={async () => {
              await auth.signIn();
              toggleMenu();
            }}
          >
            <strong>Sign up</strong>
          </button>
          <button
            className="button has-background-success-light"
            onClick={async () => {
              await auth.signIn();
              toggleMenu();
            }}
          >
            Log in
          </button>
        </div>
      )}
    </div>
  );
};

export default NavbarUserDropDown;
