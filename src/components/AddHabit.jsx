import React from 'react';
import '../assets/styles/components/AddHabit.scss';

const AddHabit = () => {
  return (
    <>
      <p>Add Habit</p>
      <form className="add-habit" action="">
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
        <button type="submit">Add Habit</button>
      </form>
    </>
  );
}

export default AddHabit;
