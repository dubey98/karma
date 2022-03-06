import React, { useState } from "react";
import { useTask } from "../services/useTask";
import { defaultProjectIds, selectPriority } from "../Constants/constants";
import DateAndTimeSelector from "./DateAndTimeSelector";
import FormButtons from "./FormButtons";
import DropDown from "./DropDown";
import { useGlobals } from "../services/useGlobals";
import useProject from "../services/useProject";
import { useAuth } from "../services/useAuth";

const TaskForm = () => {
  const { addTask } = useTask();
  const { currentProject } = useGlobals();
  const { defaultProject } = useProject();
  const { user } = useAuth();

  const [activated, setActivated] = useState(false);
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(selectPriority[0].value);

  async function _addTask() {
    if (validateInput()) {
      const newTask = {
        title: title.trim(),
        description: description.trim(),
        completed: false,
        dueDate: dueDate,
        priority: priority,
        projectId: defaultProjectIds.includes(currentProject.id)
          ? defaultProject.id
          : currentProject.id,
        uId: user.uid,
        archived: false,
      };
      await addTask(newTask);
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
    setDueDate(new Date());
    setTitleError("");
    setPriority(selectPriority[0].value);
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
    setPriority(priority);
  }

  function handleTitleChange(title) {
    setTitle(title);
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
              onChange={(e) => handleTitleChange(e.target.value)}
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

        <div className="field columns is-mobile">
          <div className="column is-narrow pb-0">
            <DropDown
              initialValue={priority}
              handleValueChange={handleTaskPriority}
              dropDownOptions={selectPriority}
            />
          </div>
          <div className="column is-narrow">
            <DateAndTimeSelector dateTime={dueDate} setDateTime={setDateTime} />
          </div>
        </div>
      </div>

      <div className="p-1">
        <FormButtons
          button1Click={_addTask}
          button1Text={"Add Task"}
          button2Click={handleFormClose}
          button2Text={"Cancel"}
        />
      </div>
    </div>
  ) : (
    <div className="control pl-4">
      <button
        className="button is-outlined is-success is-light is-fullwidth"
        onClick={() => setActivated(true)}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
