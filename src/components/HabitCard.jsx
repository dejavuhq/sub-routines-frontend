import React from "react";
import "../assets/styles/components/HabitCard.scss";

export const HabitCard = () => {
  return (
    <div className="habitCard">
      <h3 className="habitCard__name">Nombre del hábito</h3>
      <p className="habitCard__frequency">Frecuencia: Lunes a viernes</p>
      <p className="habitCard__startDate">Inicio: 28/08/2019</p>
      <p className="habitCard__finishDate">Final: 07/01/2020</p>
    </div>
  )
}