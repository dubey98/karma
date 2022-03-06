import { addDays } from "date-fns/esm";
import React, { useState, useEffect } from "react";
import { selectPriority } from "../Constants/constants";
import { formateRelativeWrapper } from "../Constants/gFunctions";
import { useGlobals } from "../services/useGlobals";
import { useTask } from "../services/useTask";
import TaskRow from "./TaskRow";

export default function TaskList() {
  const { tasks } = useTask();
  const { currentProject } = useGlobals();
  const [taskTable, setTaskTable] = useState(<></>);

  useEffect(() => {
    if (currentProject) {
      const _taskTable =
        currentProject.id.toString().trim() === "1"
          ? mapTaskByDueDate(tasks)
          : mapTasksbyPriority(tasks);
      setTaskTable(_taskTable);
    }
  }, [tasks, currentProject]);

  return <div>{taskTable}</div>;
}

function mapTasksbyPriority(taskList) {
  const _selectPriority = [...selectPriority];

  const priorityList = _selectPriority
    .sort((p1, p2) => p2.value - p1.value)
    .map((priority) => {
      return { ...priority, tasks: [] };
    });
  const tasks =
    taskList &&
    taskList.sort((p1, p2) => {
      return new Date(p1.dueDate).getTime() - new Date(p2.dueDate).getTime();
    });
  if (tasks) {
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
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
  }

  return mapTaskTable(priorityList);
}

function mapTaskByDueDate(taskList) {
  const sortOrder = [];
  for (let i = 1; i < 30; i++) {
    // console.log(addDays(new Date(), i));
    let taskListObj = {
      display_name: formateRelativeWrapper(addDays(new Date(), i)),
      key: i,
      tasks: [],
    };
    const startDate = new Date(
      addDays(new Date(), i).setHours(0, 0, 0, 0)
    ).getTime();
    const endDate = new Date(
      addDays(new Date(), i + 1).setHours(0, 0, 0, 0)
    ).getTime();
    taskListObj.tasks =
      taskList &&
      taskList.filter((task) => {
        const dueDate = new Date(task.dueDate).getTime();
        return dueDate > startDate && dueDate < endDate;
      });
    sortOrder.push(taskListObj);
  }
  return mapTaskTable(sortOrder);
}

function mapTaskTable(organizedTaskLists) {
  const TaskTable = [];
  organizedTaskLists &&
    organizedTaskLists.forEach((separator) => {
      if (separator.tasks && separator.tasks.length > 0) {
        const element = (
          <table
            className="table is-fullwidth is-hoverable m-0 p-0"
            key={separator.key}
          >
            <thead>
              <tr>
                <th>{separator.display_name}</th>
              </tr>
            </thead>
            <tbody>
              {separator.tasks.map((task) => {
                return <TaskRow task={task} key={task.id} />;
              })}
            </tbody>
          </table>
        );

        TaskTable.push(element);
      }
    });

  return TaskTable;
}
