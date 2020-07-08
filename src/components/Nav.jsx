import React from 'react';
import '../assets/styles/components/Nav.scss';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><a href="/login"> Home</a></li>
        <li><a href="/register"> Buscar</a></li>
        <li>Perfil</li>
      </ul>
    </nav>
  );
}

export default Nav;
