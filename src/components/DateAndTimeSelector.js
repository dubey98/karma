import { format, formatRelative } from "date-fns";
import React, { useState } from "react";
import * as constants from "../Constants/constants";

const DateAndTimeSelector = ({ dateTime, setDateTime }) => {
  const [activated, setActivated] = useState(false);
  const [tempDateTime, setTempDateTime] = useState(dateTime || new Date());

  function handleDateChange(e) {
    setTempDateTime(new Date(e.target.value));
  }

  function handleActivation() {
    setActivated(true);
    setTempDateTime(new Date());
  }

  function handleCancelClick() {
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
              type="datetime-local"
              value={
                format(tempDateTime, "yyyy-MM-dd") +
                "T" +
                format(tempDateTime, "hh:mm")
              }
              onChange={(e) => handleDateChange(e)}
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
          <span>{formatRelative(dateTime,new Date())}</span>
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
