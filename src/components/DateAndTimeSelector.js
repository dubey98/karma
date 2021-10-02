import React, { useState } from "react";
import moment from "moment";
import * as constants from "../Constants/constants";

const DateAndTimeSelector = ({ dateTime, setDateTime }) => {
  const [activated, setActivated] = useState(false);
  const [tempDateTime, setTempDateTime] = useState(dateTime);

  function handleDateChange(e) {
    setTempDateTime(new Date(new Date(e.target.value).setHours(9, 0, 0, 0)));
  }

  function handleTimeChange(e) {
    const timeDetail = e.target.value.toString().split(":");
    setTempDateTime(
      new Date(new Date(tempDateTime).setHours(timeDetail[0], timeDetail[1]))
    );
  }

  function handleActivation() {
    setActivated(true);
    setTempDateTime(new Date());
  }

  function handleCancelClick() {
    setTempDateTime(dateTime);
    setActivated(false);
  }

  function handleSaveClick() {
    setActivated(false);
    setDateTime(tempDateTime);
  }

  return activated ? (
    <div className="field is-horizontal">
      <div className="field-body">
        <div className="field">
          <p className="control ">
            <input
              className="input"
              type="date"
              value={moment(tempDateTime).format("yyyy-MM-DD")}
              onChange={(e) => handleDateChange(e)}
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <input
              className="input"
              type="time"
              value={moment(tempDateTime).format("HH:mm")}
              onChange={(e) => handleTimeChange(e)}
            />
          </p>
        </div>
        <div className="field">
          <div
            className="button is-outlined is-success is-light"
            onClick={() => handleSaveClick()}
          >
            Save
          </div>
          <div
            className="button is-outlined is-link is-light"
            onClick={() => handleCancelClick()}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div onClick={() => handleActivation()}>
      <div className="button is-outlined is-light is-link">
        {new Date(dateTime).getTime() !==
        new Date(constants.defaultDueDate).getTime() ? (
          <span>{moment(dateTime).calendar()}</span>
        ) : (
          <span>
            <span className="icon">
              <i className="far fa-clock"></i>
            </span>
            <span>Schedule</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default DateAndTimeSelector;
