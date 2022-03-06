import { addDays, formatRelative } from "date-fns";

function isNumeric(string) {
  if (typeof string != "string") return false;
  return !isNaN(string) && !isNaN(parseFloat(string));
}

function selectDateTime(dateTime, source, initialDateTime) {
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

function getNextDayTimeStamp() {
  return new Date(
    new Date(addDays(new Date(), 1)).setHours(0, 0, 0, 0)
  ).getTime();
}

function getPrevDayTimeStamp() {
  return new Date(new Date().setHours(0, 0, 0, 0)).getTime();
}

function formateRelativeWrapper(date) {
  // console.log(date);
  let retVal = "";
  try {
    retVal = formatRelative(date, new Date());
  } catch (err) {
    console.log(err);
    retVal = new Date(date).toDateString();
  }
  return retVal;
}

export {
  getNextDayTimeStamp,
  getPrevDayTimeStamp,
  selectDateTime,
  isNumeric,
  formateRelativeWrapper,
};
