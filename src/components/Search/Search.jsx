import React from 'react';
import './search.css';
function Search() {
  return (
    <div className="search search__container">
      <form>
        <p>🔍</p>
        <input type="text" name="search" id="search" />
      </form>
    </div>
  );
}

export default Search;
