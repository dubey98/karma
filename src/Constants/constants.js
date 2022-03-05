export const constants = {
  defaultDueDate: "1970-01-01T00:00:00.000Z",
  tagCategory: {
    datetime: "datetime",
    projects: "projects",
  },
  selectPriority: [
    {
      priority: "select priority",
      value: 1,
      display_name: "For later",
      key: 1,
    },
    {
      priority: "p5 Urgent",
      value: 5,
      display_name: "Urgent tasks",
      key: 2,
    },
    {
      priority: "p4 High",
      value: 4,
      display_name: "High priority tasks",
      key: 3,
    },
    {
      priority: "p3 Medium",
      value: 3,
      display_name: "Medium priority tasks",
      key: 4,
    },
    {
      priority: "p2 Low",
      value: 2,
      display_name: "Low priority tasks ",
      key: 5,
    },
  ],
  defaultProjects: [
    {
      title: "Today",
      id: "0",
    },
    {
      title: "Upcoming",
      id: "1",
    },
  ],
  defaultProjectDetails: {
    title: "INBOX",
    description: "A default project for all your tasks",
    archived: false,
  },
  defaultProjectIds: ["0", "1"],
};

export const defaultDueDate = "1970-01-01T00:00:00.000Z";
export const tagCategory = {
  datetime: "datetime",
  projects: "projects",
};

export const selectPriority = [
  {
    priority: "select priority",
    value: 1,
    display_name: "For later",
    key: 1,
  },
  {
    priority: "p5 Urgent",
    value: 5,
    display_name: "Urgent tasks",
    key: 2,
  },
  {
    priority: "p4 High",
    value: 4,
    display_name: "High priority tasks",
    key: 3,
  },
  {
    priority: "p3 Medium",
    value: 3,
    display_name: "Medium priority tasks",
    key: 4,
  },
  {
    priority: "p2 Low",
    value: 2,
    display_name: "Low priority tasks ",
    key: 5,
  },
];


export const defaultProjectDetails = {
  title: "INBOX",
  description: "A default project for all your tasks",
  archived: false,
};

export const defaultProjectIds = ["0", "1"];

export const defaultProjects = [
  {
    title: "Today",
    id: "0",
  },
  {
    title: "Upcoming",
    id: "1",
  },
];
