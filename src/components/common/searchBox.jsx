import React from "react";

const SearchBox = ({ value, onChange, group }) => {
  return (
    <div className="input-group">
      <i className="fa fa-search fa-lg icon" aria-hidden="true"></i>
      <input
        type="text"
        value={value}
        placeholder={`Find a ${group ? "group" : "pack"}`}
        className="input"
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBox;