import React from "react";
import "./Dashboard.css";

// components
import { Sidebar, Topbar, PrimaryButton } from "../components";
import assets from "../assets";

const Dashboard = () => {
  return (
    <div className="dashboardContainer sidebarOpen">
      <Sidebar />
      <section className="mainContainer">
        <Topbar />
        <div className="mainContent">
          <div className="mainHeader">
            <h1 style={{ fontSize: "2rem" }}>Title of the List </h1>
            <div className="addTaskCard">
              <h4>Create New Task</h4>
              <PrimaryButton />
            </div>
          </div>
          <div className="taskContainer" title="Hello Everyone">
            <p>Hello Everyone Hello Everyone</p>
            <div className="taskButtonContainer">
              <button className="completedButton">
                <img src={assets.check} alt="completed" />
              </button>
              <button className="deleteButton">
                <img src={assets.deleteBlack} alt="delete" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
