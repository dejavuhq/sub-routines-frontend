import React from "react";
import "../assets/styles/components/HabitCard.scss";

export const HabitCard = (props) => {
  return (
    <div className="habitCard">
      <h3 className="habitCard__name">{props.data.name}</h3>
      <p className="habitCard__description">{props.data.description}</p>
      <p className="habitCard__frequency">Frequency: {props.data.recurrence}</p>
      <p className="habitCard__startDate">Start: {props.data.start_date}</p>
      {
        props.data.end_date
        ? <p className="habitCard__finishDate">End: {props.data.end_date}</p>
        : null
      }
    </div>
  )
}