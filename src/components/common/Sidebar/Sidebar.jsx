import React from "react";
import "./Sidebar.css";

import assets from "../../../assets";
import SecondaryButton from "../../common/SecondaryButton/SecondaryButton";
import NewListButton from "../../NewListButton/NewListButton";

const Sidebar = ({ displayMenu, taskLists, setTaskLists }) => {
  const createNewList = () => {
    const newList = {
      id: taskLists.length,
      title: "New List",
      tasks: [],
    };
    setTaskLists([...taskLists, newList]);
  };

  return (
    <div className={`${displayMenu ? null : "sidebarHidden"} sidebarContainer`}>
      <div className="sidebarHeader">
        <img src={assets.logo} alt="logo" className="logo" />
      </div>
      <section className="navigationSection">
        <div className="buttonContainer">
          <NewListButton createNewList={createNewList} />
          {taskLists.map((item) => (
            <SecondaryButton key={item.id} text={item.title} id={item.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
