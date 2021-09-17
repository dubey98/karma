import React, { useEffect } from "react";
import { useTask } from "./services/useTask";

function TaskList() {
  const store = useTask();

  return (
    <table className="table is-fullwidth is-hoverable">
      <tbody>
        {store.tasks.map((task) => {
          return <Task task={task} key={task.id} />;
        })}
      </tbody>
    </table>
  );
}

function Task({ task }) {
  return (
    <tr>
      <td className="columns m-0 p-0">
        <div className="column is-narrow is-flex is-justify-content-center is-narrow">
          <div className="task-incomplete is-align-self-center is-flex is-justify-content-center">
            {task.completed && (
              <div className="task-complete is-align-self-center"></div>
            )}
          </div>
        </div>
        <div className="column is-flex">
          <div className="is-align-self-center">{task.title}</div>
        </div>
        <div className="column is-narrow">
          <div className="button is-danger is-light">Delete</div>
        </div>
        <div className="column is-narrow">
          <div className="button is-link is-light">Schedule</div>
        </div>
      </td>
    </tr>
  );
}

export default TaskList;
