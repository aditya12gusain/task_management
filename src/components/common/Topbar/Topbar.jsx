import React from "react";
import "./Topbar.css";

import assets from "../../../assets";

// components
import SearchInput from "../../SearchInput/SearchInput";

const Topbar = ({ displayMenu, setDisplayMenu }) => {
  console.log(displayMenu);
  return (
    <div className="topbarContainer">
      <button
        className="menuButton"
        onClick={() => setDisplayMenu(!displayMenu)}
      >
        {displayMenu ? (
          <img src={assets.cross} alt="close" />
        ) : (
          <img src={assets.hamburger} alt="open" />
        )}
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
