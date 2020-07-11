import React, { useContext, useState } from 'react';
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
  const today = new Date().toString();
  //console.log('This is the user in Home:')
  //console.log(user);
  

  const getHabits = () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk0NTA4NTMwLCJqdGkiOiI4NWRhMTZlOTRlOWU0MjFmYjdkNGM4NDBjM2E0MWFmMSIsInVzZXJfaWQiOjJ9.dwV7qzZ_5OxK-wNYGOt77uZbFRGRloXs5EH7stcyVeQ`
      }
    };
    fetch("https://dejavuhq.xyz/api/habits", requestOptions)
      .then(response => response.json())
      .then(result => {
        setHabits(result.results);
      })
      .catch(error => console.log('error', error));
  }
  //getHabits();
  console.log(habits);

  const handleSubmit = (e) => {
    e.preventDefault();
    let dateNow = new Date().toISOString().substr(0, 10);
    const target = e.target;
    const habit = {
      name: target.title.value,
      description: target.notes.value,
      recurrence: target.frequency.value,
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
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk0NTA4NTMwLCJqdGkiOiI4NWRhMTZlOTRlOWU0MjFmYjdkNGM4NDBjM2E0MWFmMSIsInVzZXJfaWQiOjJ9.dwV7qzZ_5OxK-wNYGOt77uZbFRGRloXs5EH7stcyVeQ`
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
        <h2>Hábitos para hoy:</h2>
        <div id="habits">
          {habits.map(item =>
            <HabitSmall key={item.id} {...item} />
          )}
        </div>
        <button onClick={getHabits}>Load Habits</button>
        <p>Aún no has registrado ningún hábito <button className="small-btn" onClick={() => setShowAddHabit(!showAddHabit)}>Agregar Hábito</button></p>
        {showAddHabit ? <AddHabit handleSubmit={handleSubmit} /> : null}
      </header>
      <HabitGraph />
      <Nav />
    </div>
  );
}

export default Home;
