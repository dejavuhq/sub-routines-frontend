import React from 'react';
import { RRule, RRuleSet, rrulestr } from 'rrule'
import '../assets/styles/components/AddHabit.scss';

const AddHabit = (props) => {
  const rule = new RRule({
    freq: RRule.WEEKLY,
    interval: 5,
    byweekday: [RRule.MO, RRule.FR],
    dtstart: new Date(Date.UTC(2012, 1, 1, 10, 30)),
    until: new Date(Date.UTC(2012, 12, 31))
  });

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
          <option value="RRULE:FREQ=WEEKLY;INTERVAL=1;WKST=MO;BYDAY=FR">Weekly</option>
          <option value="RRULE:FREQ=DAILY;INTERVAL=2;WKST=MO">Every # days</option>
          <option value="RRULE:FREQ=DAILY;INTERVAL=2;WKST=MO">Every # weeks</option>
        </select>
        <div className="add-habit-row">
          <input type="checkbox" id="monday" name="monday" value="MO" />
          <label htmlFor="monday">Monday</label>
          <input type="checkbox" id="tuesday" name="tuesday" value="TU" />
          <label htmlFor="tuesday">Tuesday</label>
          <input type="checkbox" id="wednesday" name="wednesday" value="WE" />
          <label htmlFor="wednesday">Wednesday</label>
          <span><input type="checkbox" id="thursday" name="thursday" value="TH" />
          <label htmlFor="thursday">Thursday</label></span>
          <input type="checkbox" id="friday" name="friday" value="FR" />
          <label htmlFor="friday">Friday</label>
          <input type="checkbox" id="saturday" name="saturday" value="SA" />
          <label htmlFor="saturday">Saturday</label>
          <label htmlFor="sunday"><input type="checkbox" id="sunday" name="sunday" value="SU" />
          Sunday</label>
        </div>
        <div className="add-habit-row">
          <label htmlFor="n-days">Day Interval</label>
          <input id="n-days" name="n-weeks" type="number"/>
        </div>
        <div className="add-habit-row">
          <label htmlFor="n-weeks">Week Interval</label>
          <input id="n-weeks" name="n-weeks" type="number"/>
        </div>
        <hr/>
        <div className="add-habit-row">
          <input type="checkbox" id="privacy" name="privacy" />
          <label htmlFor="privacy">Public</label>
        </div>
        <div className="add-habit-row">
          <input type="checkbox" id="end-date" name="endDate" value="true" />
          <label htmlFor="end-date">End Date</label>
          <input className="end-date" type="text" />
        </div>
        <label htmlFor="habit-notes">Description</label>
        <input name="notes" id="habit-notes" type="text" />
        <button className="btn" type="submit">Add Habit</button>
      </form>
    </>
  );
}

export default AddHabit;
