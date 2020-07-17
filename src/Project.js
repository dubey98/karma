import { nanoid } from "nanoid";

export const projectFactory = (title) => {
  let projectID = nanoid();
  return {
    title,
    projectID,
  };
};
