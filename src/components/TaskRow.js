import React from "react";
import { useTask } from "../services/useTask";
import { useGlobals } from "../services/useGlobals";
import moment from "moment";
import { defaultDueDate } from "../constants";

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
      <td className="columns p-0 m-0">
        <div
          className="column is-narrow is-flex is-justify-content-center"
          style={style}
        >
          <span
            className="icon is-align-self-center"
            onClick={() => store.changeTaskStatus(task.id, !task.completed)}
          >
            {task.completed ? (
              <i className="fas fa-check-circle"></i>
            ) : (
              <i className="far fa-circle"></i>
            )}
          </span>
        </div>
        <div
          className="column is-flex is-clickable"
          onClick={() => handleTaskClick()}
          style={style}
        >
          <span className="is-align-self-center">
            {task.title}
            <br />

            {moment(task.dueDate).calendar() !== defaultDueDate && (
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
          className="column is-narrow is-flex"
          onClick={async () => await store.deleteTask(task.id)}
          style={style}
        >
          {task.description && (
            <span className="icon is-align-self-center">
              <i className="fas fa-align-left fa-sm"></i>
            </span>
          )}
          <button className="delete is-align-self-center"></button>
        </div>
      </td>
    </tr>
  );
}

export default TaskRow;
