import React, { useRef, useState, useEffect } from "react";
import { startOfMonth, getDaysInMonth, isSameDay } from "date-fns";
import { useTask } from "../services/useTask";

const Calendar = () => {
  const calendarContainer = useRef(null);
  let currentWidth = 0;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (calendarContainer && calendarContainer.current) {
      setWidth(calendarContainer.current.clientWidth / 7);
    }
    return () => {};
  }, [currentWidth]);

  window.addEventListener("resize", () => {
    resized.bind(this);
    resized();
  });

  function resized() {
    currentWidth++;
  }

  function renderCells() {
    const calRows = [];
    const startDay = startOfMonth(new Date()).getDay();
    const daysInLastMonth = getDaysInMonth(
      new Date(new Date().getFullYear(), new Date().getMonth() - 1)
    );
    const daysInThisMonth = getDaysInMonth(new Date());

    function getProperties(input) {
      let displayValue = -2137821633;
      let classNames = "";
      let dateTime = new Date();
      if (input < startDay) {
        displayValue = daysInLastMonth - startDay + input + 1;
        classNames = "calBox-past";
        dateTime = new Date(
          new Date().getFullYear(),
          new Date().getMonth() - 1,
          displayValue
        );
      } else if (input >= startDay && input < daysInThisMonth + startDay) {
        displayValue = input - startDay + 1;
        classNames = "calBox";
        dateTime = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          displayValue
        );
      } else {
        displayValue = input - (daysInThisMonth + startDay) + 1;
        classNames = "calBox-past";
        dateTime = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          displayValue
        );
      }

      const retValues = {
        displayValue,
        classNames,
        width: width,
        dateTime,
      };
      return retValues;
    }

    for (let i = 0; i < 6; i++) {
      const tempRow = [];
      for (let j = 0; j < 7; j++) {
        const calCells = (
          <CalendarCells {...getProperties(i * 7 + j)} key={i * 7 + j} />
        );
        tempRow.push(calCells);
      }
      const calRow = (
        <div className="columns is-mobile" key={i}>
          {tempRow}
        </div>
      );
      calRows.push(calRow);
    }
    return <div>{calRows}</div>;
  }

  return (
    <div className="columns is-flex-direction-column" ref={calendarContainer}>
      <CalendarWeekDays width={width} />
      {renderCells()}
    </div>
  );
};

function CalendarCells({ displayValue, width, classNames, dateTime }) {
  const store = useTask();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let tempTasks = store.tasks.filter((task) =>
      isSameDay(task.dueDate, dateTime)
    );
    setTasks(tempTasks);
    return () => {};
  }, [store.tasks, dateTime]);

  return (
    <div
      className={
        isSameDay(new Date(), dateTime)
          ? "column m-1 has-background-warning-light " + classNames
          : "column m-1 " + classNames
      }
      style={{ height: width }}
    >
      <div>{displayValue}</div>
      <div>
        {tasks.map((task) => (
          <div className="has-background-white-bis" key={task.id}>
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
}

function CalendarWeekDays({ width }) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="columns is-mobile">
      {weekDays.map((day) => (
        <div
          className="column has-text-centered "
          style={{ width: width }}
          key={day}
        >
          {day}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
