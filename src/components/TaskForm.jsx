import React, { useState, useEffect } from "react";
import { useTask } from "../services/useTask";
import * as constants from "../Constants/constants";
import DateAndTimeSelector from "./DateAndTimeSelector";
import FormButtons from "./FormButtons";
// import PriorityTags from "./components/PriorityTags";
import DropDown from "./DropDown";
import * as exttime from "exttime";

const TaskForm = () => {
  const store = useTask();

  const [activated, setActivated] = useState(false);
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [dueDate, setDueDate] = useState(constants.defaultDueDate);
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(constants.selectPriority[0].value);
  const [tagList, setTagList] = useState([]);
  const [skipIndex, setSkipIndex] = useState(0);

  useEffect(() => {
    tagList.forEach((tag) => {
      if (tag.category === constants.tagCategory.datetime) {
        setDueDate(tag.datetime);
      } else if (tag.category === constants.tagCategory.projects) {
      }
    });
    return () => {};
  }, [tagList]);

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
    setTagList([]);
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
    processText(title);
  }

  function processText(input) {
    const searchResult = exttime(input);
    const tempTagList = [...tagList];
    const category = constants.tagCategory.datetime;

    const containsDateTimeTag = tempTagList.find(
      (tag) => tag.category === constants.tagCategory.datetime
    );

    if (Array.isArray(searchResult) && searchResult.length > 0) {
      if (containsDateTimeTag) {
        const index = tempTagList.findIndex(
          (tag) => tag.category === constants.tagCategory.datetime
        );
        index !== -1 && tempTagList.splice(index, 1);
      }
      let dateTime, matchedText;
      // check if the sentence has more than one date-time part and then
      // check if the user has chose to skip the previous results
      if (searchResult.length > skipIndex) {
        dateTime = searchResult[skipIndex].dateTime;
        matchedText = searchResult[skipIndex].matchedText;
      } else {
        dateTime = searchResult[0].dateTime;
        matchedText = searchResult[0].matchedText;
        setSkipIndex(searchResult.length - 1);
      }
      tempTagList.push({
        id: 1,
        text: matchedText,
        category: category,
        datetime: dateTime,
      });
    } else if (containsDateTimeTag && searchResult.length === 0) {
      const index = tempTagList.findIndex(
        (tag) => tag.category === constants.tagCategory.datetime
      );
      index !== -1 && tempTagList.splice(index, 1);
    }
    setTagList(tempTagList);
  }

  function handleTagDelete(tagId) {
    const tempTagList = [...tagList];
    const index = tempTagList.findIndex((tag) => tag.id === tagId);
    if (index !== -1) {
      tempTagList.splice(index, 1);
      setTagList(tempTagList);
      setDueDate(new Date(constants.defaultDueDate));
      setSkipIndex(skipIndex + 1);
    }
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
              dropDownOptions={constants.selectPriority}
            />
          </div>
          <div className="column pb-0">
            <div className="tags">
              {tagList.map((tag) => {
                return (
                  <span className="tag is-info is-light" key={tag.id}>
                    {tag.text}
                    <button
                      className="delete is-small"
                      onClick={() => handleTagDelete(tag.id)}
                    ></button>
                  </span>
                );
              })}
            </div>
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
