import React, { Fragment, useContext, useState, useEffect } from "react";
import { HabitCard } from "./HabitCard";
import { HabitCardToEdit } from "./HabitCardToEdit";
import UserContext from '../context/UserContext';

export const HabitsList = ({ filter="habits", method="GET", publicHabits = false}) => {
  const { user, setUser } = useContext(UserContext);
  const [habits, setHabits] = useState([]);

  useEffect(()=> {
    const requestOptions = {
      method: method,
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
    fetch(`https://dejavuhq.xyz/api/${filter}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      if(result.results) {
        setHabits(result.results)
      }
    })
    .catch(error => console.log('Error', error));
  }, []);

  if(filter === "habits" && publicHabits) {
    return (
      <Fragment>
        <HabitCard />
        <HabitCard />
        <HabitCard />
      </Fragment>
    )
  } else if(filter === "habits") {
    return (
      <Fragment>
        {
          habits.map( item => <HabitCardToEdit key={item.id} data={item}/>)
        }
      </Fragment>
    )
  } else if(filter === "instances") {
    return (
      <Fragment>
        <HabitCardToComplete />
        <HabitCardToComplete />
        <HabitCardToComplete />
      </Fragment>
    )
  } else {
    return <h2>Habits error</h2>
  }
}