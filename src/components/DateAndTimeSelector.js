import React from "react";
import moment from "moment";

const DateAndTimeSelector = ({ initialDateTime, handleDateTimeSelect }) => {
  return (
    <div class="field is-horizontal is-grouped">
      <div class="field-body" style={{ flexGrow: "0" }}>
        <div class="field">
          <p class="control">
            <input
              class="input"
              type="date"
              placeholder="Name"
              onChange={(e) => handleDateTimeSelect(e.target.value, "date")}
              value={moment(initialDateTime).format("YYYY-MM-DD")}
            />
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="time"
              onChange={(e) => handleDateTimeSelect(e.target.value, "time")}
              value={moment(initialDateTime).format("HH:mm")}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default DateAndTimeSelector;
