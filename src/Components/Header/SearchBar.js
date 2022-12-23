import React, { useState } from "react";
import "./SearchBar.css";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchLog, setSearchLog] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
    console.log(searchLog);
    setSearchLog("");
  };
  const createLog = (e) => {
    e.preventDefault();
    console.log(searchLog);
    setSearchLog("");
  };
  return (
    <div className="search-bar-container">
      <form
        onSubmit={createLog}
        style={{
          display: "flex",
          width: "fit-content",
          height: "fit-content",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginLeft: "200px",
        }}
      >
        {isActive ? (
          <input
            autoFocus
            value={searchLog}
            onChange={(e) => setSearchLog(e.target.value)}
            className="search-bar-input"
          ></input>
        ) : (
          <input
            autoFocus
            value={searchLog}
            onChange={(e) => setSearchLog(e.target.value)}
            className="search-bar-input-onclick"
          ></input>
        )}
        <CiSearch size="2rem" className="search-icon" onClick={handleClick} />
      </form>
    </div>
  );
};

export default SearchBar;
