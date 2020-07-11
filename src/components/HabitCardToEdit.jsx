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
        id: this.props.id | 12345,
        name: this.props.name || "Estudiar",
        description: this.props.description || "Estudiar para no perder el semestre",
        recurrence: this.props.recurrence || "Lunes a viernes",
        is_public: this.props.is_public || true,
        is_paused: this.props.is_paused || false,
        start_date: this.props.start_date || "07/09/2019",
        end_date: this.props.end_date || null,
        total_instances: this.props.total_instances || 7,
        total_instances_done: this.props.total_instances_done || 7,
        completion_rate: this.props.completion_rate || 1.0
      }
    }
  }
  render() {
    return (
      <div className="habitCardToEdit">
        <Link
          to={
            {
              pathname: `/configuration/habits/123`,
              state: {
                habitData: this.state.data,
                hola: "doncho"
              }
            }}
          className="habitCardToEdit__editButton"><MdModeEdit size="20px"/></Link>
        <h3 className="habitCardToEdit__name">Nombre del hábito</h3>
        <p className="habitCardToEdit__frequency">Frecuencia: Lunes a viernes</p>
        <p className="habitCardToEdit__startDate">Inicio: 28/08/2019</p>
        <p className="habitCardToEdit__finishDate">Final: 07/01/2020</p>
      </div>
    )
  }
}