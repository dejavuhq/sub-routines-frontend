import React, { useState, useEffect, useContext} from "react";
import UserContext from '../context/UserContext';
import "../assets/styles/components/Stats.scss";

export const UserStats = () => {
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState({})
  useEffect(() => {
    let requestOptions = {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${user.token}`,
      }
    }
    fetch("https://dejavuhq.xyz/api/stats", requestOptions)
      .then(response => response.json())
      .then(result => setData(result[0]))
      .catch(error => console.log('error', error));
  }, [])

  return (
    <section className="stats">
      <h3 className="stats__title">Current date: {data.date}</h3>
      <p className="stats__stat">Completion rate: {data.completion_rate*100}%</p>
      <p className="stats__stat">Completion streak: {data.completion_streak}</p>
      <p className="stats__stat">Total habits: {data.total_habits}</p>
      <p className="stats__stat">Habits for today: {data.total_habits_today}</p>
      <p className="stats__stat">Done habits: {data.total_habits_done_today}</p>
    </section>
  )
}