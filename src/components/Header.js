import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
   
    <header className="header">
     
     <div className='headtitle'>
     <h1>Synergies Manager</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <h3>Darknight Labs</h3>

     </div>
    </header>

    </>
  );
};

export default Header;
