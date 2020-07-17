import { projects, tasks } from "./index";

// parma2 = map->the map to be processed
export const saveData = function () {
  //Stringify all the objects in projects
  for (let project in projects) {
    let str = JSON.stringify(projects[project]);
    projects[project] = str;
  }
  //stringify all the objects in tasks
  for (let task in tasks) {
    let str = JSON.stringify(tasks[task]);
    tasks[task] = str;
  }
  // Set them in localStorage
  localStorage.setItem("projects", JSON.stringify(projects));
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const retrieveData = function () {
  let projects = {};
  if (localStorage.getItem("projects")) {
    let temp1 = JSON.parse(localStorage.getItem("projects"));
    for (let project in temp1) {
      let temp = JSON.parse(temp1[project]);
      projects[temp.projectID] = temp;
    }
  }
  let tasks = {};
  if (localStorage.getItem("tasks")) {
    let temp1 = JSON.parse(localStorage.getItem("tasks"));
    for (let t in temp1) {
      let temp = JSON.stringify(temp1[t]);
      tasks[t.taskID] = temp;
    }
  }
  return {
    tasks,
    projects,
  };
};

//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array1[i].length; j++) {
//       try {
//         const ID = array1[i][0];
//         const p = Object.assign(projectFactory(), JSON.parse(array1[i][1]));
//         pMap.set(ID, p);
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   }
// tMap.clear();
// if (localStorage.getItem("tMap")) {
//   let array2 = JSON.parse(localStorage.getItem("tMap"));
//   for (let i = 0; i < array2.length; i++) {
//     for (let j = 0; j < array2[i].length; j++) {
//       try {
//         const ID = array2[i][0];
//         const t = Object.assign(taskFactory(), JSON.parse(array2[i][1]));
//         tMap.set(ID, t);
//       } catch (e) {
//         console.error(e);
//       }
//     }
//   }
// }
