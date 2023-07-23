import React, { useEffect, useState } from 'react';
import './pagination.css';
function Pagination({ onSetCurrentPage }) {
  const [pagBtnValue, setPagBtnValue] = useState(1);
  function handleNext() {
    setPagBtnValue(value => value + 1);
    onSetCurrentPage(page => page + 1);
  }
  function handlePrevious() {
    if (pagBtnValue <= 1) return;
    setPagBtnValue(value => value - 1);
    onSetCurrentPage(page => page - 1);
  }

  return (
    <div className="pagination">
      <button onClick={handlePrevious}>◀</button>
      <button>{pagBtnValue}</button>
      <button>{pagBtnValue + 1}</button>
      <button>{pagBtnValue + 2}</button>
      <span>. . .</span>
      <button>{pagBtnValue + 7}</button>
      <button onClick={handleNext}>▶</button>
    </div>
  );
}

export default Pagination;
