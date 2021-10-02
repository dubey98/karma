import React from "react";
import { useAuth } from "../services/useAuth";

const HomePage = () => {
  return (
    <section className="hero  is-fullheight-with-navbar">
      <div className="hero-head"></div>

      <div className="hero-body">
        <HomePageFront />
      </div>

      <div className="hero-foot pb-2 px-2">
        <div className="container">
          <nav className="level content">
            <div className="level-left">
              <p className="level-item">KARMA &copy; 2021</p>
            </div>
            <div className="level-right">
              <p className="level-item">FAQ</p>
              <p className="level-item mr-1 mb-4">Email Support</p>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

function HomePageFront() {
  const auth = useAuth();

  return (
    <div className="container has-text-centered">
      <p className="content">
        <span className="subtitle">
          A Minimalistic TODO App with powerfull features
          <br />
          Please <strong>SignUp</strong> or <strong>Log In</strong> to Continue
        </span>
      </p>
      <div className="buttons" style={{ justifyContent: "center" }}>
        <button
          className="button is-outlined is-success is-light"
          onClick={async () => await auth.signIn()}
        >
          Sign Up
        </button>
        <button
          className="button is-outlined is-link is-light"
          onClick={async () => await auth.signIn()}
        >
          Log In
        </button>
      </div>
    </div>
  );
}
