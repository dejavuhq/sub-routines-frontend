import React from "react";
import { HabitCard } from "./HabitCard";
import "../assets/styles/components/Profile.scss";

export const Profile = () => {
  return (
    <main className="profile">
      <img
        className="profile__image"
        src="https://pbs.twimg.com/profile_images/1062767896269590528/vOsDt9up_400x400.jpg" />
      <h2 className="profile__name">John Freddy Vega</h2>
      <h3 className="profile__username">@freddier</h3>
      <p className="profile__biography">Cofounder and CEO of Platzi: With over 1,000,000 students around the world, Platzi is the biggest tech school in Latam.</p>
      <p className="profile__joinDate">Fecha de union: <span>20/08/2019</span></p>
      <div className="profile__links">
        <a href="#">Habitos</a>
        <a href="#">Estadisticas</a>
      </div>
      <HabitCard />
      <HabitCard />
    </main>
  );
}