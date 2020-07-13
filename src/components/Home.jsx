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
  const [count, setCount] = useState(0);
  const [showAddHabit, setShowAddHabit] = useState(false);
  const today = new Date().toString().split(' ').slice(0, 4).join(' ');
  const token = user.token || "";

  useEffect(() => {
    getHabits();
  }, []);
  useEffect(() => {
    getHabits();
  }, [count]);
  
  const markHabitAsDone = (id) => {
    const body = {
      is_done: true
    }
    const requestOptions = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(body)
    };
    fetch(`https://dejavuhq.xyz/api/instances/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      setCount(count + 1);
  }

  const getHabits = () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    };
    fetch("https://dejavuhq.xyz/api/instances", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setHabits(result);
      })
      .catch(error => console.log('error', error));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var date = new Date(); // Or the date you'd like converted.
    var isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 21600)).toISOString().substr(0, 10);
    const target = e.target;
    const habit = {
      name: target.title.value,
      description: target.notes.value,
      recurrence: target.rrule.value,
      is_public: target.privacy.checked,
      is_completed: false,
      is_paused: false,
      start_date: isoDateTime,
      endDate: null,
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(habit)
    };
    fetch("https://dejavuhq.xyz/api/habits", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    setCount(count + 1);
    setShowAddHabit(false);
  }
  return (
    <div className="home">
      <header className='header'>
        <p>{today}</p>
        <h2>Today:</h2>
        <button className="small-btn" onClick={() => setCount(count + 1)}>Reload habit list</button>
        <div id="habits">
          {habits.map(item =>
            !item.is_done ? <HabitSmall key={item.id} {...item} markHabitAsDone={markHabitAsDone} /> : <HabitSmall key={item.id} {...item} markHabitAsDone={markHabitAsDone} done={true} />
          )}
        </div>
        <button className="small-btn" onClick={() => setShowAddHabit(!showAddHabit)}>Add Habit</button>
        {habits.length == 0 ? <p>You don't have any habits yet</p> : null}
        {showAddHabit ? <AddHabit handleSubmit={handleSubmit} /> : null}
        {showAddHabit ? <button className="small-btn" onClick={() => setShowAddHabit(!showAddHabit)}>Cancel</button> : null}
      </header>
      <HabitGraph />
      <Nav />
    </div>
  );
}

export default Home;
