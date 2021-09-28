import React, { useState, useEffect } from "react";
import { selectPriority } from "../constants";

const PriorityTags = ({ priority, setPriority }) => {
  const [activated, setactivated] = useState(false);
  const [priorityList, setPriorityList] = useState([]);
  const [defaultPriority, setDefaultPriority] = useState({});

  useEffect(() => {
    const priorities = [];
    for (let index = 0; index < selectPriority.length; index++) {
      const p = selectPriority[index];
      if (priority === p.value) {
        setDefaultPriority(p);
      } else {
        priorities.push(p);
      }
    }
    setPriorityList(priorities);
  }, [priority]);

  function handlePriorityClick(_priority) {
    setPriority(_priority);
  }

  function handleMouseEnter() {
    setactivated(true);
  }

  function handleMouseLeave() {
    setactivated(false);
  }

  return (
    <div className="field">
      <span
        className="tags"
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <span className="tag is-rounded is-clickable border">
          {defaultPriority.priority}
        </span>
        {activated && (
          <>
            {priorityList.map((p) => {
              return (
                <span
                  key={p.value}
                  className="tag is-rounded is-clickable"
                  onClick={() => handlePriorityClick(p.value)}
                >
                  {p.priority}
                </span>
              );
            })}
          </>
        )}
      </span>
    </div>
  );
};

export default PriorityTags;
