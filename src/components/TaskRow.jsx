import React, { useState } from "react";
import { useTask } from "../services/useTask";
import { useGlobals } from "../services/useGlobals";
import { defaultDueDate } from "../Constants/constants";
import { formateRelativeWrapper } from "../Constants/gFunctions";
import addDays from "date-fns/addDays";
import TaskDetail from "./TaskDetail";

function TaskRow({ task }) {
  const { deleteTask, changeTaskStatus, archiveTask } = useTask();
  const globals = useGlobals();
  const [taskDetailData, setTaskDetailData] = useState(null);

  function selectClassName() {
    let className = "tag is-light ";

    if (
      new Date(task.dueDate).getTime() <
      new Date(addDays(new Date(), -1)).getTime()
    ) {
      className += "is-danger";
    } else if (new Date(task.dueDate).getTime() < new Date().getTime()) {
      className += "is-warning";
    } else {
      className += "is-success";
    }
    return className;
  }

  async function handleTaskAction(task, action, newStatus) {
    if (action === "archive") {
      await archiveTask(task, newStatus);
    } else if (
      action === "delete" &&
      window.confirm("do you really want to delete this task?")
    ) {
      await deleteTask(task);
    }
  }

  function handleTaskClick(t) {
    setTaskDetailData(t);
  }

  const style = {
    paddingTop: "0.25em",
    paddinBottom: "0.25em",
  };

  return (
    <tr>
      <TaskDetail task={taskDetailData} setTaskDetailData={setTaskDetailData} />
      <td className="columns p-0 m-0 is-mobile">
        <button
          className="column is-narrow is-flex is-justify-content-center remove-button-preset"
          style={style}
        >
          <span
            className="icon is-align-self-center"
            onClick={() => changeTaskStatus(task, !task.completed)}
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
          onClick={() => handleTaskClick(task)}
          style={style}
        >
          <span className="is-align-self-center">
            {task.title}
            <br />

            {new Date(task.dueDate).getTime() !==
              new Date(defaultDueDate).getTime() && (
              <span className="tags">
                <span className={selectClassName()}>
                  {formateRelativeWrapper(task.dueDate)}
                </span>
              </span>
            )}
          </span>
        </div>
        <div className="column is-narrow is-flex" style={style}>
          <div className="is-align-self-center"></div>
        </div>

        <div className="column is-narrow is-flex is-clickable  " style={style}>
          {globals.showArchived ? (
            <div>
              <button
                className=" is-align-self-center"
                onClick={async () =>
                  await handleTaskAction(task, "archive", !task.archived)
                }
              >
                UnArchive
              </button>
              <span
                className="icon is-align-self-center"
                onClick={async () => await handleTaskAction(task, "delete")}
              >
                <i className="far fa-trash-alt"></i>
              </span>
            </div>
          ) : (
            <span
              className="icon is-align-self-center"
              onClick={async () =>
                await handleTaskAction(task, "archive", !task.archived)
              }
            >
              <i className="fas fa-archive"></i>
            </span>
          )}
        </div>
      </td>
    </tr>
  );
}

export default TaskRow;
