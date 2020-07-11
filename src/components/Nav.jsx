import React from 'react';
import '../assets/styles/components/Nav.scss';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><a href="/home"> Home</a></li>
        <li><a href="/habits"> Habits</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
