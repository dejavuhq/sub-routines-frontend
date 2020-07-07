import React from 'react';
import AddHabit from './AddHabit';
import HabitGraph from './HabitGraph';
import Nav from './Nav';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const target = e.target;
    const habit = {
      title: target.title.value,
      owner: 'owner',
      frequency: target.frequency.value,
      privacy: target.privacy.value,
      endDate: target.endDate.checked,
      notes: target.notes.value
    }
    console.log(habit);

    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(habit)
    };
    fetch("dejavuhq.xyz/api/habits", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  render() {
    return (
      <>
        <header className='header'>
          <p>Miércoles 1 de julio de 2020</p>
          <h2>Hábitos para hoy:</h2>
          <p>Aún no has registrado ningún hábito <button className="small-btn">Agregar Hábito</button></p>
          <AddHabit handleSubmit={this.handleSubmit} />
        </header>
        <HabitGraph />
        <Nav />
      </>
    );
  }
}

export default Home;
