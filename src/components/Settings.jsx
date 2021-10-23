import React, { useState } from "react";
import Toggler from "./Toggler";
import { useTask } from "../services/useTask";
import { useGlobals } from "../services/useGlobals";
import { useHistory, withRouter } from "react-router";

const Settings = () => {
  const [activated, setActivated] = useState(false);
  const store = useTask();
  const globals = useGlobals();
  const history = useHistory();

  function handleCogClick() {
    setActivated(!activated);
  }

  function handleCalendarClick() {
    history.push("/karma/calendar-view");
  }

  return (
    <div className="mb-0 pb-0">
      <div className="level p-2 is-mobile">
        <div className="level-left">
          <div className="level-item is-size-4 is-uppercase has-text-weight-semibold">
            {store.currentProject ? store.currentProject.title : ""}
          </div>
        </div>
        <div className="level-right">
          <CalendarButton />
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
                togglerOn={globals.showCompleted}
                setTogglerOn={globals.setShowCompleted}
              />
            </div>
          </div>
          <div className="columns is-justify-content-space-between is-mobile">
            <div className="column is-narrow">
              <span>Show Archived Tasks</span>
            </div>
            <div className="column is-narrow">
              <Toggler
                togglerOn={globals.showArchived}
                setTogglerOn={globals.setShowArchived}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CalendarButton = withRouter(({ history }) => {
  return (
    <div className="level-item">
      <button
        className="button"
        onClick={() => history.push("/karma/calendar-view")}
      >
        Calendar
      </button>
    </div>
  );
});

export default Settings;
