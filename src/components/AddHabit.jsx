import React from 'react';
import '../assets/styles/components/AddHabit.scss';

const AddHabit = (props) => {
  return (
    <>
      <h3>Add Habit</h3>
      <form className="add-habit" action="" onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input name="title" id="title" className="form-control" type="text"/>
        </div>
        <label htmlFor="frequency">Frequency</label>
        <select name="frequency" id="frequency">
          <option value="RRULE:FREQ=DAILY;INTERVAL=1">Daily</option>
          <option value="RRULE:FREQ=WEEKLY;INTERVAL=1;WKST=MO;BYDAY=FR">Every friday</option>
          <option value="RRULE:FREQ=DAILY;INTERVAL=2;WKST=MO">Every two days</option>
        </select>
        <div className="add-habit-row">
          <input type="checkbox" id="privacy" name="privacy" />
          <label htmlFor="privacy">Public</label>
        </div>
        <div className="add-habit-row">
          <input type="checkbox" id="end-date" name="endDate" value="true" />
          <label htmlFor="end-date">End Date</label>
        </div>
        <input className="end-date" type="text"/>
        <label htmlFor="habit-notes">Notes</label>
        <input name="notes" id="habit-notes" type="text" />
        <button className="btn" type="submit">Add Habit</button>
      </form>
    </>
  );
}

export default AddHabit;
