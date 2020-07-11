import React from "react";
import { Link } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import "../assets/styles/components/HabitCardToEdit.scss";

export class HabitCardToEdit extends React.Component {
  // ({id, name, description, recurrence, is_public, is_completed, is_paused, start_date, end_date, total_instances, total_instances_done, completion_rate})
  constructor(props) {
    super(props);
    this.state = {
      data: {
        id: this.props.data.id || 12345,
        name: this.props.data.name || "Estudiar",
        description: this.props.data.description || "Estudiar para no perder el semestre",
        recurrence: this.props.data.recurrence || "Lunes a viernes",
        is_public: this.props.data.is_public || true,
        is_paused: this.props.data.is_paused || false,
        start_date: this.props.data.start_date || "07/09/2019",
        end_date: this.props.data.end_date || null,
        total_instances: this.props.data.total_instances || 7,
        total_instances_done: this.props.data.total_instances_done || 7,
        completion_rate: this.props.data.completion_rate || 1.0
      }
    }
  }
  render() {
    return (
      <div className="habitCardToEdit">
        <Link
          to={
            {
              pathname: `/configuration/habits/${this.state.data.id}`,
              state: {
                habitData: this.state.data
              }
            }}
          className="habitCardToEdit__editButton"><MdModeEdit size="20px"/></Link>
        <h3 className="habitCardToEdit__name">{this.state.data.name}</h3>
        <p className="habitCardToEdit__frequency">Frecuencia: {this.state.data.recurrence}</p>
        <p className="habitCardToEdit__startDate">Inicio: {this.state.data.start_date}</p>
        <p className="habitCardToEdit__finishDate">Final: {this.state.data.end_date? this.state.data.end_date: "Indefinido"}</p>
      </div>
    )
  }
}