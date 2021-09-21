import React, { useState } from "react";
import { useTask } from "./services/useTask";
import * as constants from "./constants";
import moment from "moment";
import DropDown from "./components/DropDown";
import DateAndTimeSelector from "./components/DateAndTimeSelector";
import FormButtons from "./components/FormButtons";

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
      resetForm();
    }
  }

  function handleFormClose() {
    resetForm();
    setActivated(false);
  }

  function resetForm() {
    setTitle("");
    setDueDate(Date.now());
    setTitleError("");
    setCustomDueDate(false);
    setPriority(constants.selectPriority[0].value);
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
    let _date = constants.selectDateTime(dateTime, source);
    setDueDate(_date);
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
            onFocus={() => setTitleError("")}
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
        <DropDown
          handleValueChange={handleTaskPriority}
          initialValue={priority}
          dropDownOptions={constants.selectPriority}
        />
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
          <DateAndTimeSelector
            initialDateTime={dueDate}
            handleDateTimeSelect={handleTimeSelect}
          />
        )}
      </div>

      <FormButtons
        button1Click={addTask}
        button1Text={"Add Task"}
        button2Click={handleFormClose}
        button2Text={"Cancel"}
      />
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
