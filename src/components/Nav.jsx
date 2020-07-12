import React from 'react';
import { Link } from "react-router-dom";
import { MdHome, MdSettings, MdPerson } from "react-icons/md";
import '../assets/styles/components/Nav.scss';

const Nav = () => {
  const SIZE = "32px";
  return (
    <nav>
      <Link className="nav__button" to="/home"><MdHome size={SIZE}/></Link>
      <Link className="nav__button" to="/profile"><MdPerson size={SIZE}/></Link>
      <Link className="nav__button" to="/configuration"><MdSettings size={SIZE}/></Link>
    </nav>
  );
}

export default Nav;
