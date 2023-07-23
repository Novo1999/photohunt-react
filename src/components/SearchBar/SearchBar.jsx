import React from 'react';
import './searchBar.css';
const SearchBar = ({ onHandleSearch, query, onSetQuery }) => {
  return (
    <div className="search search__container">
      <form onSubmit={e => onHandleSearch(e)}>
        <p>🔍</p>
        <input
          value={query}
          onChange={e => onSetQuery(e.target.value)}
          type="text"
          name="search"
          id="search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
