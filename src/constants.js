export const selectPriority = [
  {
    priority: "select priority",
    value: 1,
    display_name: "For later",
  },
  {
    priority: "Urgent",
    value: 5,
    display_name: "Urgent tasks",
  },
  {
    priority: "High",
    value: 4,
    display_name: "High priority tasks",
  },
  {
    priority: "Medium",
    value: 3,
    display_name: "Medium priority tasks",
  },
  {
    priority: "Low",
    value: 2,
    display_name: "Low priority tasks ",
  },
];

export function isNumeric(string) {
  if (typeof string != "string") return false;
  return !isNaN(string) && !isNaN(parseFloat(string));
}
