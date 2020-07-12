import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import UserContext from '../context/UserContext';
import AddHabit from './AddHabit';
import HabitSmall from './HabitSmall';
import HabitGraph from './HabitGraph';
import Nav from './Nav';
import '../assets/styles/components/Home.scss';

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const [habits, setHabits] = useState([]);
  const [showAddHabit, setShowAddHabit] = useState(false);
  const today = new Date().toString().split(' ').slice(0, 4).join(' ');
  const token = user.token || "";

  useEffect(() => {
    getHabits();
  }, []);
  

  const getHabits = () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    };
    fetch("https://dejavuhq.xyz/api/habits", requestOptions)
      .then(response => response.json())
      .then(result => {
        setHabits(result.results);
      })
      .catch(error => console.log('error', error));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let dateNow = new Date().toISOString().substr(0, 10);
    const target = e.target;
    const habit = {
      name: target.title.value,
      description: target.notes.value,
      recurrence: target.rrule.value,
      is_public: target.privacy.checked,
      is_completed: false,
      is_paused: false,
      start_date: dateNow,
      endDate: null,
    }
    console.log(habit);

    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        /* "Authorization": `Bearer ${user.token}` */
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(habit)
    };
    fetch("https://dejavuhq.xyz/api/habits", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  return (
    <div className="home">
      <header className='header'>
        <p>{today}</p>
        <h2>Today:</h2>
        <div id="habits">
          {habits.map(item =>
            <HabitSmall key={item.id} {...item} />
          )}
        </div>
        <button className="small-btn" onClick={() => setShowAddHabit(!showAddHabit)}>Add Habit</button>
        {habits.length == 0 ? <p>Aún no has registrado ningún hábito</p> : null}
        {showAddHabit ? <AddHabit handleSubmit={handleSubmit} /> : null}
        {showAddHabit ? <button className="small-btn" onClick={() => setShowAddHabit(!showAddHabit)}>Cancelar</button> : null}
      </header>
      <HabitGraph />
      <Link to="/configuration/habits">Habitooos</Link>
      <Link to="/configuration/profile">Perfillll</Link>
      <Nav />
    </div>
  );
}

export default Home;
