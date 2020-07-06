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
      title: target.title.value,
      owner: 'owner',
      frequency: target.frequency.value,
      privacy: target.privacy.value,
      endDate: target.endDate.checked,
      notes: target.notes.value
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
