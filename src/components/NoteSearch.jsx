import PropTypes from "prop-types";
import React from "react";

export const NoteSearch = ({ onSearch }) => {
  const onSearchChange = (e) => {
    onSearch(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="note-search">
      <input type="text" placeholder="Cari Catatan" onChange={onSearchChange} />
    </div>
  );
};

NoteSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
