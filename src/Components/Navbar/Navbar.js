import React from 'react';
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <div className="Navbar">
        <a href="./" className='menunav'>Home 🏚️</a> &nbsp;&nbsp;
        <a href="./about" className='menunav'>About</a> &nbsp;&nbsp;
        <a href="./contact" className='menunav'>Contact ☎️</a>
        <a href="./counter" className='menunav'>Counter </a>
      </div>
    </div>
  )
}

export default Navbar;
