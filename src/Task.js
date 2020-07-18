import { nanoid } from "nanoid";

export const taskFactory = (title, dueDate, priority, projectID) => {
  let taskID = nanoid();
  let completed = false;
  return {
    title,
    priority,
    dueDate,
    taskID,
    projectID,
    completed,
  };
};
