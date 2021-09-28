import React, { useState } from "react";
import { useTask } from "./services/useTask";
import * as constants from "./constants";
import DateAndTimeSelector from "./components/DateAndTimeSelector";
import FormButtons from "./components/FormButtons";
// import PriorityTags from "./components/PriorityTags";
import DropDown from "./components/DropDown";

const TaskForm = () => {
  const store = useTask();

  const [activated, setActivated] = useState(false);
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [dueDate, setDueDate] = useState(constants.defaultDueDate);
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(constants.selectPriority[0].value);

  async function addTask() {
    if (validateInput()) {
      const newTask = {
        title: title,
        description: description,
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
    setDueDate(constants.defaultDueDate);
    setTitleError("");
    setPriority(constants.selectPriority[0].value);
    setDescription("");
  }

  function validateInput() {
    let result = true;
    if (title.trim() === "") {
      result = false;
      setTitleError("Task title cannot be empty");
    }
    return result;
  }

  function setDateTime(dateTime) {
    setDueDate(dateTime);
  }

  function handleTaskPriority(priority) {
    console.log(priority);
    setPriority(priority);
  }

  return activated ? (
    <div className="block">
      <div className="p-2 border-gray-light">
        <div className="field">
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
          <textarea
            className="textarea has-fixed-size"
            placeholder="Enter the task description here"
            rows="2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="field columns is-justify-content-space-between">
          <div className="column is-narrow pb-0">
            <DropDown
              initialValue={priority}
              handleValueChange={handleTaskPriority}
              dropDownOptions={constants.selectPriority}
            />
            {/* <PriorityTags priority={priority} setPriority={setPriority} /> */}
          </div>
          <div className="column is-narrow">
            <DateAndTimeSelector dateTime={dueDate} setDateTime={setDateTime} />
          </div>
        </div>
      </div>

      <div className="p-1">
        <FormButtons
          button1Click={addTask}
          button1Text={"Add Task"}
          button2Click={handleFormClose}
          button2Text={"Cancel"}
        />
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
