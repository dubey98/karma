import moment from "moment";
import React, { useState } from "react";
import { isNumeric, selectPriority } from "./constants";
import { useGlobals } from "./services/useGlobals";
import { useTask } from "./services/useTask";

function TaskList() {
  const store = useTask();

  function mapTasksbyPriority() {
    const _selectPriority = [...selectPriority];

    const priorityList = _selectPriority
      .sort((p1, p2) => p2.value - p1.value)
      .map((priority) => {
        return { ...priority, tasks: [] };
      });
    const tasks = store.tasks;
    console.log(tasks.length);
    for (let i = 0; i < tasks.length; i++) {
      const task = store.tasks[i];
      let index = priorityList.length - 1;

      // find out at which index out task is goinf to go into
      for (let p = 0; p < priorityList.length; p++) {
        const priority = priorityList[p];
        // console.log(priority.value, task.priority);
        if (parseInt(priority.value) === parseInt(task.priority)) {
          index = p;
          break;
        }
      }
      // assign task to that index
      priorityList[index].tasks.push(task);
    }
    const TaskTable = [];
    console.log(priorityList);
    priorityList.forEach((p) => {
      if (p.tasks.length > 0) {
        const element = (
          <table
            className="table is-fullwidth is-hoverable m-0 p-0"
            key={p.priority}
          >
            <thead>
              <tr>
                <th>{p.display_name}</th>
              </tr>
            </thead>
            <tbody>
              {p.tasks.map((task) => {
                return <Task task={task} key={task.id} />;
              })}
            </tbody>
          </table>
        );

        TaskTable.push(element);
      }
    });

    return TaskTable;
  }

  return <div>{mapTasksbyPriority()}</div>;
}

function Task({ task }) {
  const store = useTask();
  const globals = useGlobals();

  function selectBackground() {
    let className = "columns p-0 m-0 ";

    if (
      new Date(task.dueDate).getTime() <
      new Date(moment(new Date()).subtract(1, "days")).getTime()
    ) {
      className += "has-background-danger-light";
    } else if (new Date(task.dueDate).getTime() < new Date().getTime()) {
      className += "has-background-warning-light";
    }
    return className;
  }

  function handleTaskClick() {
    globals.activateTaskDetailModal(task);
  }

  return (
    <tr>
      <td className={selectBackground()}>
        <div className="column is-narrow is-flex is-justify-content-center is-narrow">
          <div
            className="icon is-align-self-center"
            onClick={() => store.changeTaskStatus(task.id, !task.completed)}
          >
            {task.completed ? (
              <i className="fas fa-check-circle"></i>
            ) : (
              <i className="far fa-circle"></i>
            )}
          </div>
        </div>
        <div
          className="column is-flex is-clickable"
          onClick={() => handleTaskClick()}
        >
          <div className="is-align-self-center">{task.title}</div>
        </div>
        <div className="column is-narrow is-flex">
          <div className="is-align-self-center">
            {moment(task.dueDate).calendar()}
          </div>
        </div>

        <div
          className="column is-narrow is-flex"
          onClick={async () => await store.deleteTask(task.id)}
        >
          <button className="delete is-align-self-center"></button>
        </div>
      </td>
    </tr>
  );
}

export default TaskList;
