import React from 'react';
import AddHabit from './AddHabit';
import Nav from './Nav';

const Home = () => {
  return (
    <>
      <header className='header'>
        <p>Miércoles 1 de julio de 2020</p>
        <h2>Hábitos para hoy:</h2>
        <p>Aún no has registrado ningún hábito <button className="small-btn">Agregar Hábito</button></p>
        <AddHabit />
      </header>
      <Nav />
    </>
  );
}

export default Home;
