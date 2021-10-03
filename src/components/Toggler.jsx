import React from "react";

const Toggler = ({ togglerOn, setTogglerOn }) => {
  function handleTogglerClick() {
    setTogglerOn(!togglerOn);
  }

  return (
    <button
      onClick={() => handleTogglerClick()}
      className="toggler button is-light"
    >
      <div
        className={
          togglerOn
            ? "toggler-circle toggler-on has-background-success"
            : "toggler-circle has-background-grey"
        }
      ></div>
    </button>
  );
};

export default Toggler;
