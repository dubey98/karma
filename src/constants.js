import moment from "moment";

export const defaultDueDate = "1970-01-01T00:00:00.000Z";

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

export const defaultProjectIds = ["0", "1"];

export function isNumeric(string) {
  if (typeof string != "string") return false;
  return !isNaN(string) && !isNaN(parseFloat(string));
}

export function selectDateTime(dateTime, source, initialDateTime) {
  let _date = null;
  if (source === "tags") {
    _date = new Date(dateTime).getTime();
  } else if (source === "date") {
    _date = new Date(dateTime);
  } else if (source === "time") {
    const timeFragment = dateTime.split(":");
    _date = new Date(initialDateTime).setHours(
      timeFragment[0],
      timeFragment[1],
      0,
      0
    );
  } else {
    _date = new Date(dateTime);
  }
  return _date;
}

export function getNextDayTimeStamp() {
  return new Date(
    new Date(moment(new Date()).add(1, "days")).setHours(0, 0, 0, 0)
  ).getTime();
}

export function getPrevDayTimeStamp() {
  return new Date(new Date().setHours(0, 0, 0, 0)).getTime();
}
