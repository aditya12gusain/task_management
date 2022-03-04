import React from "react";
import "./Sidebar.css";

import assets from "../../../assets";
import SecondaryButton from "../../common/SecondaryButton/SecondaryButton";
import NewListButton from "../../NewListButton/NewListButton";

const Sidebar = ({ displayMenu }) => {
  return (
    <div className={`${displayMenu ? null : "sidebarHidden"} sidebarContainer`}>
      <div className="sidebarHeader">
        <img src={assets.logo} alt="logo" className="logo" />
      </div>
      <section className="navigationSection">
        <div className="buttonContainer">
          <NewListButton />
          <SecondaryButton text="College Work" />
          <SecondaryButton text="Daily Tasks And SOmeting" />
          <SecondaryButton text="College Work" />
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
