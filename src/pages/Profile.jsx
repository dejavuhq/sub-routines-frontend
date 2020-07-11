import React, { useState } from "react";
import { HabitsList } from "../components/HabitsList";
import { UserStats } from "../components/UserStats";

import "../assets/styles/pages/Profile.scss";

export const Profile = () => {
  const [lookingStats, setLookingStats] = useState(false);
  const handleClick = (e) => {
    const habitsButton = document.getElementsByName("habits")[0];
    const statsButton = document.getElementsByName("stats")[0];
    if(e.target.name === "stats") {
      setLookingStats(true);
      habitsButton.classList.remove("active");
      statsButton.classList.add("active");
    } else {
      setLookingStats(false);
      habitsButton.classList.add("active");
      statsButton.classList.remove("active");
    }
  }
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
        <button className="profile__button active" name="habits" onClick={handleClick}>Habitos</button>
        <button className="profile__button" name="stats" onClick={handleClick}>Estadisticas</button>
      </div>
      {
        lookingStats
        ? <UserStats/>
        : <HabitsList habits="publics"/>
      }
    </main>
  );
}