import React, { useState } from "react";
import { useTask } from "./services/useTask";
import * as constants from "./constants";
import moment from "moment";

const TaskForm = () => {
  const store = useTask();

  const [activated, setActivated] = useState(false);
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [dueDate, setDueDate] = useState(Date.now());
  const [priority, setPriority] = useState(constants.selectPriority[0].value);
  const [customDueDate, setCustomDueDate] = useState(false);

  const scheduleTags = [
    {
      tag: "Today 9:00AM",
      date: new Date().setHours(9, 0, 0, 0),
    },
    {
      tag: "Today 12:00AM",
      date: new Date().setHours(12, 0, 0, 0),
    },
    {
      tag: "Today 03:00PM",
      date: new Date().setHours(15, 0, 0, 0),
    },
    {
      tag: "Today 06:00PM",
      date: new Date().setHours(18, 0, 0, 0),
    },
    {
      tag: "Tom 09:00AM",
      date: new Date(moment(new Date()).add(1, "days").format()).setHours(
        9,
        0,
        0,
        0
      ),
    },
    {
      tag: "Tom 12:00PM",
      date: new Date(moment(new Date()).add(1, "days").format()).setHours(
        12,
        0,
        0,
        0
      ),
    },
    {
      tag: "Tom 03:00PM",
      date: new Date(moment(new Date()).add(1, "days").format()).setHours(
        15,
        0,
        0,
        0
      ),
    },
    {
      tag: "Tom 06:00PM",
      date: new Date(moment(new Date()).add(1, "days").format()).setHours(
        18,
        0,
        0,
        0
      ),
    },
  ];

  async function addTask() {
    if (validateInput()) {
      const newTask = {
        title: title,
        description: "",
        completed: false,
        dueDate: dueDate,
        priority: priority,
      };
      await store.addTask(newTask);
      setActivated(false);
    }
  }

  function handleFormClose() {
    setTitle("");
    setDueDate(Date.now());
    setTitleError("");
    setCustomDueDate(false);
    setPriority(constants.selectPriority[0].value);
    setActivated(false);
  }

  function handleTaskPriority(priority) {
    console.log("setting priority", priority);
    setPriority(priority);
  }

  function validateInput() {
    let result = true;
    if (title.trim() === "") {
      result = false;
      setTitleError("Task title cannot be empty");
    }
    return result;
  }

  function handleTimeSelect(dateTime, source) {
    if (source === "tags") {
      setDueDate(new Date(dateTime).getTime());
    } else if (source === "date") {
      const _date = new Date(dateTime);
      setDueDate(_date);
    } else if (source == "time") {
      const timeFragment = dateTime.split(":");
      const _date = new Date(dueDate).setHours(
        timeFragment[0],
        timeFragment[1],
        0,
        0
      );
      setDueDate(_date);
    }
  }

  function mapScheduleTags() {
    const elligibleTags = scheduleTags.filter((tag) => {
      if (new Date(tag.date).getTime() < new Date().getTime()) {
        return false;
      } else return true;
    });
    return elligibleTags.map((tag) => {
      return (
        <span
          className={
            tag.date === dueDate
              ? "tag is-primary is-small is-clickable"
              : "tag is-light is-primary is-small is-clickable"
          }
          onClick={(e) => handleTimeSelect(tag.date, "tags")}
          key={tag.tag}
        >
          <span>{tag.tag}</span>

          <span className="icon is-small">
            <i className="far fa-clock"></i>
          </span>
        </span>
      );
    });
  }

  return activated ? (
    <div className="box block">
      <div className="field">
        <label className="label">Task Title</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="text"
            placeholder="Bring milk and sweets"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={(e) => setTitleError("")}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-tasks"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        <p className="help is-danger">{titleError}</p>
      </div>
      <div className="field">
        <div className="control">
          <div className="tags">
            <span className="tag border">select duedate from tags : </span>
            {mapScheduleTags()}
          </div>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <div className="select">
            <select
              onChange={(e) => handleTaskPriority(e.target.value)}
              value={priority}
            >
              {constants.selectPriority.map((priority) => {
                return (
                  <option key={priority.value} value={priority.value}>
                    {priority.priority}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {!customDueDate ? (
          <div className="field">
            <div className="control">
              <div
                className="button is-outlined is-info is-light"
                onClick={() => setCustomDueDate(!customDueDate)}
              >
                Custom due date
              </div>
            </div>
          </div>
        ) : (
          <div class="field is-horizontal is-grouped">
            <div class="field-body" style={{ flexGrow: "0" }}>
              <div class="field">
                <p class="control">
                  <input
                    class="input"
                    type="date"
                    placeholder="Name"
                    onChange={(e) => handleTimeSelect(e.target.value, "date")}
                    value={moment(dueDate).format("YYYY-MM-DD")}
                  />
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="time"
                    onChange={(e) => handleTimeSelect(e.target.value, "time")}
                    value={moment(dueDate).format("HH:mm")}
                  />
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button
            className="button is-success is-light is-outlined"
            onClick={() => addTask()}
          >
            Add Task
          </button>
        </div>
        <div className="control">
          <button
            className="button is-link is-light is-outlined"
            onClick={() => handleFormClose()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="control pl-4">
        <button
          className="button is-outlined is-success is-light is-fullwidth"
          onClick={() => setActivated(true)}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
