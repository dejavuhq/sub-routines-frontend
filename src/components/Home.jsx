import React from 'react';
import Nav from './Nav';

const Home = () => {
  return (
    <>
      <header className='header'>
        <p>Miércoles 1 de julio de 2020</p>
        <h2>Hábitos para hoy:</h2>
        <p>Aún no has registrado ningún hábito <button>Agregar Hábito</button></p>
      </header>
      <Nav />
    </>
  );
}

export default Home;
