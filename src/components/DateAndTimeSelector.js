import React from "react";
import moment from "moment";

const DateAndTimeSelector = ({ initialDateTime, handleDateTimeSelect }) => {
  return (
    <div className="field is-horizontal is-grouped">
      <div className="field-body" style={{ flexGrow: "0" }}>
        <div className="field">
          <p className="control">
            <input
              className="input"
              type="date"
              placeholder="Name"
              onChange={(e) => handleDateTimeSelect(e.target.value, "date")}
              value={moment(initialDateTime).format("YYYY-MM-DD") || ""}
            />
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="time"
              onChange={(e) => handleDateTimeSelect(e.target.value, "time")}
              value={moment(initialDateTime).format("HH:mm") || ""}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default DateAndTimeSelector;
