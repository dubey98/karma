import { nanoid } from "nanoid";

export const taskFactory = ({
  title,
  dueDate,
  priority,
  projectID = "0",
  completed,
  taskID,
} = {}) => {
  if (!taskID || taskID === undefined) {
    taskID = nanoid();
  }
  return {
    title,
    priority,
    dueDate,
    taskID,
    projectID,
    completed,
  };
};
