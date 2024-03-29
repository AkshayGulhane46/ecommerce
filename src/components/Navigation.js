import React, { useState } from 'react';
import '../Styles/Navigation.css'; // Import your CSS file for styling

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation">
      <div className="logo">Logo</div>
      <div className={`menu ${isOpen ? 'open' : 'open'}`}>
        <div className='menu-items'>
          <div className='menu-item'><a href="#">Products</a></div> 
          <div className='menu-item'><a href="#">Contact us</a></div> 
          <div className='menu-item'><a href="#">Login</a></div> 
          <div className='menu-item'><a href="#">Cart</a></div> 
        </div>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? 'Close' : 'Menu'}
      </button>
    </nav>
  );
};

export default Navigation;
