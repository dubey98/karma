import React from "react";
import "./config/firebase.config";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./services/useTask";
import Seo from "./services/Seo";
import TaskDetail from "./components/TaskDetail";
import { useAuth } from "./services/useAuth";
import HomePage from "./pages/HomePage";
import "./App.scss";
import { useGlobals } from "./services/useGlobals";
import { Fragment } from "react/cjs/react.production.min";

const App = () => {
  const { user } = useAuth();
  const globals = useGlobals();

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default App;
