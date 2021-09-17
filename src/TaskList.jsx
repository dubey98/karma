import React, { useEffect } from "react";
import { useTask } from "./services/useTask";

function TaskList() {
  const store = useTask();

  return (
    <div className="">
      {store.tasks.map((task) => {
        return <Task task={task} key={task.id} />;
      })}
    </div>
  );
}

function Task({ task }) {
  return (
    <div className="columns is-size-4 block">
      <div className="column is-1 is-flex is-justify-content-center is-narrow">
        <div className="task-incomplete is-align-self-center is-flex is-justify-content-center">
          {task.completed && (
            <div className="task-complete is-align-self-center"></div>
          )}
        </div>
      </div>
      <div className="column">{task.title}</div>
      <div className="column is-narrow">
        <button className="button is-danger">Delete</button>
      </div>
      <div className="column is-narrow">
        <button className="button is-link">Schedule</button>
      </div>
    </div>
  );
}

export default TaskList;
