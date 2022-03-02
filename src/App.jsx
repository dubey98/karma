import React from "react";
import "./config/firebase.config";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TaskContextProvider } from "./services/useTask";
import ProjectList from "./components/ProjectList";
import Seo from "./services/Seo";
import TaskDetail from "./components/TaskDetail";
import { useAuth } from "./services/useAuth";
import HomePage from "./pages/HomePage";
import "./App.scss";
import Settings from "./components/Settings";
import { useGlobals } from "./services/useGlobals";
import Calendar from "./components/Calendar";

const App = () => {
  const { user } = useAuth();
  const globals = useGlobals();

  return (
    <Router>
      <Seo />
      <div>
        <Navbar />
      </div>

      <section className="section">
        <TaskContextProvider>
          <TaskDetail />
          <HomePage />
        </TaskContextProvider>
      </section>
    </Router>
  );
};

export default App;
