import React, { useState } from "react";
import Toggler from "./Toggler";
import { useGlobals } from "../services/useGlobals";
import { useLocation, withRouter } from "react-router";

const Settings = () => {
  const [activated, setActivated] = useState(false);
  const {
    currentProject,
    showCompleted,
    showArchived,
    changeShowArchived,
    changeShowCompleted,
  } = useGlobals();

  function handleCogClick() {
    setActivated(!activated);
  }

  return (
    <div className="mb-0 pb-0">
      <div className="level p-2 is-mobile">
        <div className="level-left">
          <div className="level-item is-size-4 is-uppercase has-text-weight-semibold">
            {currentProject && currentProject.title}
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button" onClick={() => handleCogClick()}>
              <span className="icon">
                <i className="fas fa-cog"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      {activated && (
        <div className="px-2">
          <div className="columns is-justify-content-space-between is-mobile">
            <div className="column is-narrow">
              <span>Show Completed Tasks</span>
            </div>
            <div className="column is-narrow">
              <Toggler
                togglerOn={showCompleted}
                setTogglerOn={changeShowCompleted}
              />
            </div>
          </div>
          <div className="columns is-justify-content-space-between is-mobile">
            <div className="column is-narrow">
              <span>Show Archived Tasks</span>
            </div>
            <div className="column is-narrow">
              <Toggler
                togglerOn={showArchived}
                setTogglerOn={changeShowArchived}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CalendarButton = withRouter(({ history }) => {
  const location = useLocation();

  return (
    <div className="level-item">
      <button
        className="button"
        onClick={() =>
          location.pathname === "/karma/calendar-view"
            ? history.push("/karma")
            : history.push("/karma/calendar-view")
        }
      >
        Calendar
      </button>
    </div>
  );
});

export default Settings;
