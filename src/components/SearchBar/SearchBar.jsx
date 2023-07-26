import React, { useState } from 'react';
import './searchBar.css';
const SearchBar = ({ onHandleSearch, onSetSearchState, searchState }) => {
  return (
    <div className="search search__container">
      <form onSubmit={e => onHandleSearch(e)}>
        <p>🔍</p>
        <input
          value={searchState}
          onChange={e => onSetSearchState(e.target.value)}
          type="text"
          name="search"
          id="search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
