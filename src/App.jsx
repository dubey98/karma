import React from "react";
import "./config/firebase.config";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { BrowserRouter as Router } from "react-router-dom";
import { TaskContextProvider } from "./services/useTask";
import ProjectList from "./components/ProjectList";
import Seo from "./services/Seo";
import TaskDetail from "./components/TaskDetail";
import { useAuth } from "./services/useAuth";
import HomePage from "./components/HomePage";
import "./App.scss";
import Settings from "./components/Settings";

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
            <div className="columns container mx-auto">
              <div className="column is-one-fifth">
                <ProjectList />
              </div>
              <div className="column">
                <Settings />
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
