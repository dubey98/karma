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
import { useAuth } from "./services/useAuth";
import HomePage from "./components/HomePage";

const App = () => {
  const auth = useAuth();

  return (
    <Router>
      <Seo />
      <div>
        <Navbar />
      </div>

      {auth.user ? (
        <section className="section">
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
      ) : (
        <div className="">
          <HomePage />
        </div>
      )}
    </Router>
  );
};

export default App;
