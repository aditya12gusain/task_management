import React, { useState } from "react";
import "./Dashboard.css";

// components
import { Sidebar, Topbar, PrimaryButton } from "../components";
import Task from "../components/common/Task/Task";

const Dashboard = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <div
      className={`dashboardContainer ${
        displayMenu ? "sidebarOpen" : "sidebarClosed"
      }`}
    >
      <Sidebar displayMenu={displayMenu} />
      <section className="mainContainer">
        <Topbar displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} />
        <div className="mainContent">
          <div className="mainHeader">
            <h1 style={{ fontSize: "2rem" }}>Title of the List </h1>
            <div className="addTaskCard">
              <h4>Create New Task</h4>
              <PrimaryButton />
            </div>
          </div>
          <Task title="Complete all the MERN Course Videos by 21-May-2018" />
          <Task title="Something else that I wanted to do but was not able to do becuase I was attending the meetings" />
          <Task title="Something else that I wanted to do but was not able to do becuase I was attending the meetings" />
          <Task title="Something else that I wanted to do but was not able to do becuase I was attending the meetings" />
          <Task title="Something else that I wanted to do but was not able to do becuase I was attending the meetings" />
          <Task title="Something else that I wanted to do but was not able to do becuase I was attending the meetings" />
          <Task title="Something else that I wanted to do but was not able to do becuase I was attending the meetings" />
          <Task title="Something else that I wanted to do but was not able to do becuase I was attending the meetings" />
          <Task title="Something else that I wanted to do but was not able to do becuase I was attending the meetings" />
          <Task title="Something else that I wanted to do but was not able to do becuase I was attending the meetings" />
          <Task title="Something else that I wanted to do but was not able to do becuase I was attending the meetings" />
          <Task title="Something else that I wanted to do but was not able to do becuase I was attending the meetings" />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
