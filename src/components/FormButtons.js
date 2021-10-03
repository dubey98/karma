import React from "react";

const FormButtons = ({
  button1Click,
  button1Text = "Done",
  button2Click,
  button2Text = "Cancel",
}) => {
  return (
    <div className="field is-grouped">
      <div className="control">
        <button
          className="button is-success is-light is-outlined"
          onClick={async () => await button1Click()}
        >
          {button1Text}
        </button>
      </div>
      <div className="control">
        <button
          className="button is-link is-light is-outlined"
          onClick={() => button2Click()}
        >
          {button2Text}
        </button>
      </div>
    </div>
  );
};

export default FormButtons;
