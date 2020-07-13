import React from "react";
import '../assets/styles/components/HabitSmall.scss';

const HabitSmall = (props) => {

  
  return (
    <div className="small-habit-row">
      <span>{props.habit.name}</span>
      {!props.done ? <button className="done" onClick={() => props.markHabitAsDone(props.id)}>Done</button> : <button className="done" disabled>Done</button>}
    </div>
  )
}

export default HabitSmall;
