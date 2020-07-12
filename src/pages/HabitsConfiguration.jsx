import React from "react";
import { HabitsList } from "../components/HabitsList";

export class HabitsConfiguration extends React.Component{
  render() {
    return (
      <section
        style={
          {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "100vh",
            background: "white"
          }
        }>
        <HabitsList filter="habits" method="GET" publicHabits={false} />
      </section>
    )
  }
}