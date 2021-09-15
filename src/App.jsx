import React from "react";
import Navbar from "./Navbar";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const App = () => {
  return (
    <div className="">
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
    </div>
  );
};

export default App;
