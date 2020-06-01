import React from "react";

import "./Search.styles.css";

const Search = (props) => {
  return (
    <input
      className="search"
      type="search"
      placeholder="search monsters"
      onChange={(e) => props.search(e.target.value)}
    />
  );
};

export default Search;
