import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./searchBox.css";
import { useNavigate } from "react-router-dom";

const Searchbox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log(searchQuery)
    navigate(`/search-result/${searchQuery}`);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch} className="search-button">
        <CiSearch className="search-icon" />
      </button>
    </div>
  );
};

export default Searchbox;
