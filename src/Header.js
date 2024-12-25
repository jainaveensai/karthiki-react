import React from 'react';

function Header() {
    return(
        <div className="Header">
       <a href="/">
     <img 
     className="food"
     alt="logo"
     src='https://i.pinimg.com/736x/ab/ed/f5/abedf520cd1384463835e088bb910215.jpg'></img>
     </a>
    
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>Location</li>
        <li>Contact Us</li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
       </div>
       </div>
    );
};

export default Header;