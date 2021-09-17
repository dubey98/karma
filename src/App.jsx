import React from "react";
import "./services/firebase";
import Navbar from "./Navbar";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="">
        <Navbar />
      </div>
      <section className="section">
        <div className="container block">
          <TaskList />
        </div>
        <div className="container block">
          <TaskForm />
        </div>
      </section>
    </Router>
  );
};

export default App;
