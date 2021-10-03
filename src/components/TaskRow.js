import React from "react";
import { useTask } from "../services/useTask";
import { useGlobals } from "../services/useGlobals";
import moment from "moment";
import { defaultDueDate } from "../Constants/constants";

function TaskRow({ task }) {
  const store = useTask();
  const globals = useGlobals();

  function selectClassName() {
    let className = "tag is-light ";

    if (
      new Date(task.dueDate).getTime() <
      new Date(moment(new Date()).subtract(1, "days")).getTime()
    ) {
      className += "is-danger";
    } else if (new Date(task.dueDate).getTime() < new Date().getTime()) {
      className += "is-warning";
    } else {
      className += "is-success";
    }
    return className;
  }

  function handleTaskClick() {
    globals.activateTaskDetailModal(task);
  }

  const style = {
    paddingTop: "0.25em",
    paddinBottom: "0.25em",
  };

  return (
    <tr>
      <td className="columns p-0 m-0 is-mobile">
        <button
          className="column is-narrow is-flex is-justify-content-center remove-button-preset"
          style={style}
        >
          <span
            className="icon is-align-self-center"
            onClick={() => store.changeTaskStatus(task, !task.completed)}
          >
            {task.completed ? (
              <i className="fas fa-check-circle"></i>
            ) : (
              <i className="far fa-circle"></i>
            )}
          </span>
        </button>
        <div
          className="column is-flex is-clickable"
          onClick={() => handleTaskClick()}
          style={style}
        >
          <span className="is-align-self-center">
            {task.title}
            <br />

            {new Date(task.dueDate).getTime() !==
              new Date(defaultDueDate).getTime() && (
              <span className="tags">
                <span className={selectClassName()}>
                  {moment(task.dueDate).calendar()}
                </span>
              </span>
            )}
          </span>
        </div>
        <div className="column is-narrow is-flex" style={style}>
          <div className="is-align-self-center"></div>
        </div>

        <div
          className="column is-narrow is-flex is-clickable  "
          onClick={async () => await store.deleteTask(task)}
          style={style}
        >
          {globals.showArchived ? (
            <span className="icon is-align-self-center">
              <i className="fas fa-archive"></i>
            </span>
          ) : (
            <span className="icon is-align-self-center">
              <i className="far fa-trash-alt"></i>
            </span>
          )}
        </div>
      </td>
    </tr>
  );
}

export default TaskRow;
