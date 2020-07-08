import React from "react";
import { HabitCard } from "./HabitCard";
import "../assets/styles/components/Stats.scss";

export const UserStats = () => {
  return (
    <section className="stats">
      <p>Aqui van las estadísticas del usuario</p>
      <HabitCard />
      <HabitCard />
      <HabitCard />
    </section>
  )
}