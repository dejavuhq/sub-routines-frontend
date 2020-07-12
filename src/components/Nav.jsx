import React from 'react';
import { Link } from "react-router-dom";
import '../assets/styles/components/Nav.scss';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/habits">Habits</Link></li>
        <li><Link to="/profile">Home</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
