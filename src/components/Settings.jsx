import React, { useState } from "react";
import Toggler from "./Toggler";
import { useTask } from "../services/useTask";

const Settings = () => {
  const [activated, setActivated] = useState(false);
  const [showArchived, setShowArchived] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const store = useTask();

  function handleCogClick() {
    setActivated(!activated);
  }

  return (
    <div className="mb-0 pb-0">
      <div className="level p-2 ">
        <div className="level-left">
          <div className="level-item is-size-4 is-uppercase has-text-weight-semibold">
            {store.currentProject ? store.currentProject.title : ""}
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
          <div className="columns is-justify-content-space-between">
            <div className="column is-narrow">
              <span>Show Completed Tasks</span>
            </div>
            <div className="column is-narrow">
              <Toggler
                togglerOn={showCompleted}
                setTogglerOn={setShowCompleted}
              />
            </div>
          </div>
          <div className="columns is-justify-content-space-between">
            <div className="column is-narrow">
              <span>Show Archived Tasks</span>
            </div>
            <div className="column is-narrow">
              <Toggler
                togglerOn={showArchived}
                setTogglerOn={setShowArchived}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
