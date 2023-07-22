import React from 'react';
import './filter.css';
const filterOptions = [
  'animal',
  'nature',
  'beauty',
  'sky',
  'ocean',
  'flower',
  'human',
  'car',
];
function Filter() {
  return (
    <div className="filter">
      {filterOptions.map((opt, i) => (
        <button key={i}>{opt.toUpperCase()}</button>
      ))}
    </div>
  );
}

export default Filter;
