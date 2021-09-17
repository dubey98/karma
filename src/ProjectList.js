import React, { useState } from "react";
import { useTask } from "./services/useTask";

function ProjectList() {
  const store = useTask();
  const [activated, setActivated] = useState(false);
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  function handleCloseForm() {
    setTitle("");
    setTitleError("");
    setActivated(false);
  }

  async function handleAddProject() {
    if (validateInput()) {
      console.log("calling add project");
      await store.addProject(title);
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
    <div className="content">
      <table>
        <thead>
          <tr>
            <th>Projects</th>
          </tr>
        </thead>
        <tbody>
          {store.projects.map((project) => {
            return (
              <tr key={project.id}>
                <td>{project.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        {activated ? (
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
        ) : (
          <div
            className="button is-light is-success is-outlined"
            onClick={() => setActivated(!activated)}
          >
            <strong>Add Project</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectList;
