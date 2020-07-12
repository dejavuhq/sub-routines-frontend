import React, { useState, useContext } from "react";
import { HabitsList } from "../components/HabitsList";
import { UserStats } from "../components/UserStats";
import UserContext from '../context/UserContext';
import Nav from "../components/Nav";
import "../assets/styles/pages/Profile.scss";

export const Profile = () => {
  const { user, setUser } = useContext(UserContext)
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
        src={user.user.picture? user.user.picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb_Hhic635ynT_DOoTuvLCUqKNXjVmCa0HxA&usqp=CAU"} />
      <h2 className="profile__name">{user.user.first_name} {user.user.last_name}</h2>
      <h3 className="profile__username">@{user.user.username}</h3>
      {
        user.user.biography
        ?<p className="profile__biography">{user.user.biography}</p>
        : null
      }
      <p className="profile__joinDate">Fecha de union: <span>{user.user.created_at}</span></p>
      <div className="profile__links">
        <button className="profile__button active" name="habits" onClick={handleClick}>Habitos</button>
        <button className="profile__button" name="stats" onClick={handleClick}>Estadisticas</button>
      </div>
      {
        lookingStats
        ? <UserStats/>
        : <HabitsList filter="habits" publicHabits/>
      }
      <Nav/>
    </main>
  );
}