import React from 'react';
import './header.css';
const Header = () => {
  return (
    <>
      <div className="header">
        <h1>
          <span>📸Photo</span>
          <span>🎯Hunt</span>
        </h1>
      </div>
      <div className="line line__container">
        <hr />
      </div>
    </>
  );
};

export default Header;
