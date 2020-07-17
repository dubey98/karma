import { nanoid } from "nanoid";

export const taskFactory = (title, duedate, priority, projectID = "0") => {
  let taskID = nanoid();
  return {
    title,
    priority,
    duedate,
    taskID,
    projectID,
  };
};
