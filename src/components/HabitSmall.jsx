import React from "react";
import '../assets/styles/components/HabitSmall.scss';

const HabitSmall = (props) => {
  return (
    <div className="small-habit-row">
      <span>{props.name}</span>
      <button className="done">Done</button>
      <button>Settings</button>
    </div>
  )
}

export default HabitSmall;
