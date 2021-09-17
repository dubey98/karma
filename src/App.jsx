import React from "react";
import "./services/firebase";
import Navbar from "./Navbar";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { BrowserRouter as Router } from "react-router-dom";
import { TaskContextProvider } from "./services/useTask";

const App = () => {
  return (
    <Router>
      <div className="">
        <Navbar />
      </div>
      <section className="section">
        <TaskContextProvider>
          <div className="container block">
            <TaskList />
          </div>
          <div className="container block">
            <TaskForm />
          </div>
        </TaskContextProvider>
      </section>
    </Router>
  );
};

export default App;
