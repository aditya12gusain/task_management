import React from "react";
import "./SearchInput.css";

import assets from "../../assets";

const SearchInput = () => {
  return (
    <div className="seachInputContainer">
      <input type="text" placeholder="Search" />
      <button>
        <img src={assets.search} alt="search" />
      </button>
    </div>
  );
};

export default SearchInput;
