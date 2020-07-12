import React, { useState } from 'react';
import RRuleGenerator from 'react-rrule-generator';
import { RRule, RRuleSet, rrulestr } from 'rrule'
import '../assets/styles/components/AddHabit.scss';

const AddHabit = (props) => {
  const [rrule, setRrule] = useState('');
  const [showPicker, setShowPicker] = useState('');

  return (
    <>
      <h3>Add Habit</h3>
      <form className="add-habit" action="" onSubmit={props.handleSubmit}>
        <div>
          <label htmlFor="title" className="full-with">Title</label>
          <input name="title" id="title" className="form-control" type="text"/>
        </div>
        <RRuleGenerator onChange={(rrule) => {
          console.log(`RRule changed, now it's ${rrule}`);
          setRrule(rrule);
        }} />
        <input name="rrule" id="rrule" type="hidden" value={rrule} />
        <div className="add-habit-row">
          <input type="checkbox" id="privacy" name="privacy" />
          <label htmlFor="privacy">Public</label>
        </div>
        <label htmlFor="habit-notes">Description</label>
        <input name="notes" id="habit-notes" type="text" />
        <button className="btn" type="submit">Add Habit</button>
      </form>
    </>
  );
}

export default AddHabit;
