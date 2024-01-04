import React from "react";

const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <input
      className="w-full py-2.5 px-4 bg-primary-950 border border-primary-700 text-primary-100 rounded-lg focus:border-2 focus:border-primary-300 outline-none duration-300"
      type="text"
      placeholder="Cari Catatan"
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
};

export default SearchBar;
