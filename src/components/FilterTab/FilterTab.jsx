import React from 'react';
import './filterTab.css';

const FilterTab = ({ curSelected, onHandleQuery, index, opt }) => {
  return (
    <>
      <div className="filter">
        <button
          id={curSelected === index ? 'active' : ''}
          onClick={() => onHandleQuery(opt, index)}
        >
          {opt.toUpperCase()}
        </button>
      </div>
    </>
  );
};

export default FilterTab;
