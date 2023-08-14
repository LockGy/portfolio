import React from 'react';
import logo from './img/Logo.svg'
import moon_icon from './img/ph_moon.svg'
import './Logo.css'


function Header() {
  return (
    <header>
      <div className='logo'>
        <img src={logo} alt="logo"/>
      </div>

      <div className='moon_logo'>
        <img src={moon_icon} alt="moon icon" />
      </div>

    </header>
  );
}

export default Header;
