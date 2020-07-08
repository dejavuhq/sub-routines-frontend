import React from 'react';
import AddHabit from './AddHabit';
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
      name: target.title.value,
      description: target.notes.value,
      recurrence: target.frequency.value,
      owner: 'raul',
      is_public: target.privacy.value,
      is_completed: false,
      is_paused: false,
      start_date: "2020-07-01",
      endDate: null,
    }
    console.log(habit);
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
        <Nav />
      </>
    );
  }
}

export default Home;
