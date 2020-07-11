import React, { Fragment } from "react";
import { HabitCard } from "./HabitCard";
import { HabitCardToEdit } from "./HabitCardToEdit";

export const HabitsList = ({ habits }) => {
  if(habits === "publics") {
    return (
      <Fragment>
        <HabitCard />
        <HabitCard />
        <HabitCard />
      </Fragment>
    )
  } else if(habits === "all") {
    return (
      <Fragment>
        <HabitCardToEdit />
        <HabitCardToEdit />
        <HabitCardToEdit />
      </Fragment>
    )
  } else if(habits === "forToday") {
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