import moment from "moment";
import React, { useState, useEffect } from "react";
import { selectPriority } from "./constants";
import { useTask } from "./services/useTask";
import TaskRow from "./components/TaskRow";

function TaskList() {
  const store = useTask();
  const [taskTable, setTaskTable] = useState(<></>);

  useEffect(() => {
    if (store.currentProject) {
      const _taskTable =
        store.currentProject.toString() === "1"
          ? mapTaskByDueDate(store.tasks)
          : mapTasksbyPriority(store.tasks);
      setTaskTable(_taskTable);
    }
    return () => {};
  }, [store.tasks, store.currentProject]);

  return <div>{taskTable}</div>;
}

function mapTasksbyPriority(taskList) {
  const _selectPriority = [...selectPriority];

  const priorityList = _selectPriority
    .sort((p1, p2) => p2.value - p1.value)
    .map((priority) => {
      return { ...priority, tasks: [] };
    });
  const tasks = taskList.sort((p1, p2) => {
    return new Date(p1.dueDate).getTime() - new Date(p2.dueDate).getTime();
  });
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

  return mapTaskTable(priorityList);
}

function mapTaskByDueDate(taskList) {
  const sortOrder = [];
  for (let i = 1; i < 30; i++) {
    let taskListObj = {
      display_name: moment(new Date()).add(i, "days").format("MMMM Do"),
      key: i,
      tasks: [],
    };
    const startDate = new Date(
      moment(new Date().setHours(0, 0, 0, 0)).add(i - 1, "days")
    ).getTime();
    const endDate = new Date(
      moment(new Date().setHours(0, 0, 0, 0)).add(i, "days")
    ).getTime();
    taskListObj.tasks = taskList.filter((task) => {
      const dueDate = new Date(task.dueDate).getTime();
      return dueDate > startDate && dueDate < endDate;
    });
    sortOrder.push(taskListObj);
  }
  return mapTaskTable(sortOrder);
}

function mapTaskTable(organizedTaskLists) {
  const TaskTable = [];
  organizedTaskLists.forEach((separator) => {
    if (separator.tasks.length > 0) {
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

export default TaskList;
