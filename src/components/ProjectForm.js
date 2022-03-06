import React, { useState } from "react";
import { useAuth } from "../services/useAuth";
import useProject from "../services/useProject";

const ProjectForm = ({ setActivated }) => {
  const { user } = useAuth();
  const { addProject } = useProject();
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  function handleCloseForm() {
    setTitle("");
    setTitleError("");
    setActivated(false);
  }

  async function handleAddProject() {
    if (validateInput()) {
      const project = {
        title: title,
        uid: user.uid,
        description: "",
        archived: false,
      };
      await addProject(project);
      setActivated(false);
    }
  }

  function validateInput() {
    let result = true;
    if (title.trim() === "") {
      result = false;
      setTitleError("project must have a name");
    }
    return result;
  }

  return (
    <form>
      <div className="field">
        <input
          className="input"
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => setTitleError("")}
        />
        <p className="help is-danger">{titleError}</p>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <div
            className="button is-success is-light"
            onClick={async () => await handleAddProject()}
          >
            Add Project
          </div>
        </div>
        <div className="control" onClick={() => handleCloseForm()}>
          <div className="button is-light is-info">Cancel</div>
        </div>
      </div>
    </form>
  );
};

export default ProjectForm;
