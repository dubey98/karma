import React, { useState } from "react";
import DropDown from "./DropDown";
import DateAndTimeSelector from "./DateAndTimeSelector";
import * as constants from "../Constants/constants";
import FormButtons from "./FormButtons";
import { useTask } from "../services/useTask";
import { formatRelative } from "date-fns/esm";

const TaskDetail = ({ task, setTaskDetailData }) => {
  const store = useTask();
  //form states
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");
  const [priority, setPriority] = useState(task ? task.priority : 1);
  const [dueDate, setDueDate] = useState(task ? task.dueDate : null);
  const [customDueDate, setCustomDueDate] = useState(false);

  function handleTaskPriority(priority) {
    setPriority(priority);
  }

  async function handleSubmit() {
    if (task) {
      const newTask = {
        title: title,
        description: description,
        dueDate: dueDate,
        completed: false,
        priority: priority,
      };
      await store.updateTask(task.id, newTask);
    }
    setTaskDetailData(null);
  }

  function handleCancel() {
    setTaskDetailData(null);
  }

  return task ? (
    <div className={"modal is-active"}>
      <div className="modal-background" onClick={() => handleCancel()}></div>
      {task && (
        <div className="modal-content has-background-white-bis has-text-black-bis">
          <div className="section">
            <div className="field">
              <label className="label">
                <span className="icon">
                  <i className="fas fa-tasks"></i>
                </span>
                <span>Task Title</span>
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Do Laundry"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <p className="help is-danger"></p>
            </div>

            <div className="field">
              <label className="label">
                <span className="icon">
                  <i className="fas fa-align-left"></i>
                </span>
                <span>Task Description</span>
              </label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="what are the steps to do laundry??? i need to google bro..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <strong>Due Date : </strong>
                {formatRelative(task.dueDate, new Date())}
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
                  dateTime={dueDate}
                  setDateTime={setDueDate}
                />
              )}
            </div>

            <FormButtons
              button1Text={"Update Task"}
              button2Text={"Cancel"}
              button1Click={handleSubmit}
              button2Click={handleCancel}
            />
          </div>
        </div>
      )}
    </div>
  ) : null;
};

export default TaskDetail;
