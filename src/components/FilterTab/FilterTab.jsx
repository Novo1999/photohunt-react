import React from 'react';
import './filterTab.css';

const FilterTab = ({
  curSelected,
  onHandleQuery,
  index,
  opt,
  onSetIsLoaded,
}) => {
  return (
    <>
      <div className="filter">
        <button
          id={curSelected === index ? 'active' : ''}
          onClick={() => {
            onSetIsLoaded(() => true);
            onHandleQuery(opt, index);
          }}
        >
          {opt.toUpperCase()}
        </button>
      </div>
    </>
  );
};

export default FilterTab;
