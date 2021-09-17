import React, { useState } from "react";
import { useAuth } from "./services/useAuth";
import { useTask } from "./services/useTask";

const TaskForm = () => {
  const store = useTask();

  const [activated, setActivated] = useState(false);
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [dueDate, setDueDate] = useState(Date.now());
  const [dueDateError, setDueDateError] = useState("");

  async function addTask() {
    if (validateInput()) {
      const newTask = {
        title: title,
        description: "",
        completed: false,
        dueDate: dueDate,
      };
      await store.addTask(newTask);
      setActivated(false);
    }
  }

  function handleFormClose() {
    setTitle("");
    setDueDate(Date.now());
    setDueDateError("");
    setTitleError("");
    setActivated(false);
  }

  function validateInput() {
    let result = true;
    if (title.trim() === "") {
      result = false;
      setTitleError("Task title cannot be empty");
    }
    if (new Date(dueDate).getTime() < new Date().getTime()) {
      result = false;
      setDueDateError("due date cannot be in the past");
    }
    return result;
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
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        <p className="help is-danger">{titleError}</p>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <input
            className="input"
            type="datetime-local"
            value={new Date(dueDate).toISOString().split(".")[0]}
            onChange={(e) => setDueDate(e.target.value)}
            onFocus={(e) => setDueDateError("")}
          />
          <p className="help is-danger">{dueDateError}</p>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-success" onClick={() => addTask()}>
            Add Task
          </button>
        </div>
        <div className="control">
          <button
            className="button is-link is-light"
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
          className="button is-success"
          onClick={() => setActivated(true)}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
