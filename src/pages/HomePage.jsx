import React from "react";
import { useAuth } from "../services/useAuth";
import {
  HomePageFront,
  TaskForm,
  TaskList,
  ProjectList,
  Settings,
} from "./../components/index";
import { useGlobals } from "../services/useGlobals";

const HomePage = () => {
  const { user } = useAuth();
  const globals = useGlobals();

  if (!user) {
    return <HomePageFront />;
  }

  return (
    <section className="section">
      <div className="columns container mx-auto">
        <div
          className={
            globals.sideBarStatus
              ? "column is-one-fifth has-display-none transition-all-1"
              : "column is-one-fifth transition-all-1"
          }
        >
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
    </section>
  );
};

export default HomePage;
