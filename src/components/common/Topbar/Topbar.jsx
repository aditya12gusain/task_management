import React from "react";
import "./Topbar.css";

import assets from "../../../assets";

// components
import SearchInput from "../../SearchInput/SearchInput";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <button className="menuButton">
        <img src={assets.hamburger} alt="menu" />
      </button>
      <div className="topbarRightContainer">
        <SearchInput />

        <div className="userInfoConatiner">
          <h4>Aditya Gusain</h4>
          <p>Web Developer</p>
        </div>

        <div className="userProfileImage">
          <img src={assets.user} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
