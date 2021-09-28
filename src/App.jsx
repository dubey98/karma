import React from "react";
import "./services/firebase";
import Navbar from "./components/Navbar";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { BrowserRouter as Router } from "react-router-dom";
import { TaskContextProvider } from "./services/useTask";
import ProjectList from "./ProjectList";
import Seo from "./services/Seo";
import TaskDetail from "./components/TaskDetail";

const App = () => {
  return (
    <Router>
      <Seo />
      <div>
        <Navbar />
      </div>
      <section className="section has-text-light">
        <TaskContextProvider>
          <TaskDetail />
          <div
            className="columns container"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <div className="column is-one-fifth">
              <ProjectList />
            </div>
            <div className="column">
              <div className="block">
                <TaskList />
              </div>
              <div className="block">
                <TaskForm />
              </div>
            </div>
          </div>
        </TaskContextProvider>
      </section>
    </Router>
  );
};

export default App;
