import React, { useRef, useState, useEffect } from "react";
import { startOfMonth, getDaysInMonth, isSameDay } from "date-fns";

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

    let startDate = daysInLastMonth - startDay;
    for (let i = 0; i < 6; i++) {
      const tempRow = [];
      for (let j = 0; j < 7; j++) {
        const calCells = <CalendarCells {...getProperties(i * 7 + j)} />;
        startDate === daysInLastMonth
          ? (startDate = startDate + 2)
          : startDate++;
        tempRow.push(calCells);
      }
      const calRow = <div className="columns is-mobile">{tempRow}</div>;
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
  return (
    <div
      className={
        isSameDay(new Date(), dateTime)
          ? "column m-1 has-background-warning-light " + classNames
          : "column m-1 " + classNames
      }
      style={{ height: width }}
      key={new Date(dateTime).getMilliseconds()}
    >
      {displayValue}
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
        <div className="column has-text-centered " style={{ width: width }}>
          {day}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
