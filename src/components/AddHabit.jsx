import React from 'react';

const AddHabit = () => {
  return (
    <>
      <p>Agregar Hábito</p>
      <form action="">
        <label htmlFor="title">Title</label>
        <input type="text"/>
        <label htmlFor="frequency">Frequency</label>
        <select name="frequency" id="frequency">
          <option value="daily">Daily</option>
        </select>
        <label htmlFor="private">Private</label>
        <input type="radio"/>
        <label htmlFor="private">Public</label>
        <input type="radio"/>
        <label htmlFor="vehicle1">End Date</label>
        <input type="checkbox" id="end-date" name="end-date" value="End Date" />
        <label htmlFor="habit-notes">Notes</label>
        <input id="habit-notes" type="text" />
      </form>
    </>
  );
}

export default AddHabit;
