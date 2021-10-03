import React from "react";

const DropDown = ({ initialValue, handleValueChange, dropDownOptions }) => {
  return (
    <div className="control">
      <div className="select">
        <select
          onChange={(e) => handleValueChange(e.target.value)}
          value={initialValue}
        >
          {dropDownOptions.map((priority) => {
            return (
              <option key={priority.value} value={priority.value}>
                {priority.priority}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default DropDown;
