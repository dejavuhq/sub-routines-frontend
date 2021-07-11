import React from "react";
import { Link } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import "../assets/styles/components/HabitCardToEdit.scss";

export class HabitCardToEdit extends React.Component {
  // ({id, name, description, recurrence, is_public, is_completed, is_paused, start_date, end_date, total_instances, total_instances_done, completion_rate})
  constructor(props) {
    super(props);
    this.state = {
      // Cambiar este data por algo mas semantico
      data: {
        id: this.props.data.itemData.id || 123,
        name: this.props.data.itemData.name || "Estudiar",
        description: this.props.data.itemData.description || "Estudiar para no perder el semestre",
        recurrence: this.props.data.itemData.recurrence || "Lunes a viernes",
        is_public: this.props.data.itemData.is_public || false,
        is_paused: this.props.data.itemData.is_paused || false,
        start_date: this.props.data.itemData.start_date || "07/09/2019",
        end_date: this.props.data.itemData.end_date || null,
        total_instances: this.props.data.itemData.total_instances || 7,
        total_instances_done: this.props.data.itemData.total_instances_done || 7,
        completion_rate: this.props.data.itemData.completion_rate || 1.0
      },
      token: this.props.data.token
    }
  }
  render() {
    return (
      <div className="habitCardToEdit">
        <Link
          to={
            {
              pathname: `/configuration/habits/${this.props.data.itemData.id}`,
              state: {
                data: this.state
              }
            }}
          className="habitCardToEdit__editButton"><MdModeEdit size="20px"/></Link>
        <h3 className="habitCardToEdit__name">{this.props.data.itemData.name}</h3>
        <p className="habitCardToEdit__frequency">Frequency: {this.props.data.itemData.recurrence}</p>
        <p className="habitCardToEdit__frequency">
          Privacidad: {this.props.data.itemData.is_public? "Public": "Private"}
        </p>
        <p className="habitCardToEdit__startDate">Start: {this.props.data.itemData.start_date}</p>
        <p className="habitCardToEdit__finishDate">End: {this.props.data.itemData.end_date? this.props.data.itemData.end_date: "Not established"}</p>
      </div>
    )
  }
}