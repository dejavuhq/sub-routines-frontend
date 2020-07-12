import React from "react";
import Nav from "../components/Nav";
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
            marginBottom: "50px",
            background: "white"
          }
        }>
        <HabitsList filter="habits" method="GET" publicHabits={false} />
        <Nav/>
      </section>
    )
  }
}