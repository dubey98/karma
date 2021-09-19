import moment from "moment";

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
  } else if (source == "time") {
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
