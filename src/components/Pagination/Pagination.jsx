import React, { useEffect, useState } from 'react';
import './pagination.css';
function Pagination({ onSetCurrentPage }) {
  const [pagBtnValue, setPagBtnValue] = useState(1);
  console.log(pagBtnValue);
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
    <div
      className="pagination"
      onClick={e => e.target.value && onSetCurrentPage(e.target.value)}
    >
      <button onClick={handlePrevious}>◀</button>
      <button>{pagBtnValue}</button>
      <button value={pagBtnValue + 1}>{pagBtnValue + 1}</button>
      <button value={pagBtnValue + 2}>{pagBtnValue + 2}</button>
      <span>. . .</span>
      <button value={pagBtnValue + 7}>{pagBtnValue + 7}</button>
      <button onClick={handleNext}>▶</button>
    </div>
  );
}

export default Pagination;
