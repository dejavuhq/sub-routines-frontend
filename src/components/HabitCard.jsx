import React from "react";
import "../assets/styles/components/HabitCard.scss";

export const HabitCard = (props) => {
  return (
    <div className="habitCard">
      <h3 className="habitCard__name">{props.data.name}</h3>
      <p className="habitCard__description">{props.data.description}</p>
      <p className="habitCard__frequency">Frecuencia: {props.data.recurrence}</p>
      <p className="habitCard__startDate">Inicio: {props.data.start_date}</p>
      {
        props.data.end_date
        ? <p className="habitCard__finishDate">Final: {props.data.end_date}</p>
        : null
      }
    </div>
  )
}