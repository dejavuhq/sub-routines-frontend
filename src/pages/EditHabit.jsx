import React from "react";
import { withRouter } from "react-router";
import { FcLock } from "react-icons/fc"
import "../assets/styles/pages/EditHabit.scss";

class EditHabitComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      habitData: this.props.location.state.habitData
    }
  }
  handleCheck = (e) => {
    this.setState({habitData: {...this.state.habitData, [e.target.name]: e.target.checked}});
  }
  handleChange = (e) => {
    this.setState({habitData: {...this.state.habitData, [e.target.name]: e.target.value}});
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <section className="EditHabit">
        <h2 className="EditHabit__title">Editar hábito</h2>
        <form className="EditHabit__form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="EditHabit__form-group-label">Nombre</label>
            <input
              className="EditHabit__form-control"
              type="text"
              name="name"
              value={this.state.habitData.name}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label className="EditHabit__form-group-label">Descripción</label>
            <input
              className="EditHabit__form-control"
              type="text"
              name="description"
              value={this.state.habitData.description}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label
              className="EditHabit__form-group-label">Recurrencia<FcLock style={{marginLeft: "5px"}}/>
              </label>
            <input
              disabled
              readOnly="readonly"
              className="EditHabit__form-control"
              type="text"
              name="recurrence"
              value={this.state.habitData.recurrence}/>
          </div>
          <div className="form-group">
            <label className="EditHabit__form-group-label">Desea que el hábito sea público?</label>
            <label className="switch">
              <input
                name="is_public"
                checked={this.state.habitData.is_public? true : false}
                type="checkbox"
                onChange={this.handleCheck}/>
              <span className="slider round"></span>
            </label>
            <span>{this.state.habitData.is_public? "Sí" : "No"}</span>
          </div>
          <div className="form-group">
            <label className="EditHabit__form-group-label">Desea pausar el hábito?</label>
            <label className="switch">
              <input
                name="is_paused"
                checked={this.state.habitData.is_paused? true : false}
                type="checkbox"
                onChange={this.handleCheck}/>
              <span className="slider round"></span>
            </label>
            <span>{this.state.habitData.is_paused? "Sí" : "No"}</span>
          </div>
          <div className="form-group">
            <label className="EditHabit__form-group-label">Fecha de inicio<FcLock style={{marginLeft: "5px"}}/></label>
            <input
              disabled
              readOnly="readonly"
              className="EditHabit__form-control"
              type="text"
              name="start_date"
              value={this.state.habitData.start_date}/>
          </div>
          <div className="form-group">
            <label className="EditHabit__form-group-label">Fecha final<FcLock style={{marginLeft: "5px"}}/></label>
            <input
              disabled
              readOnly="readonly"
              className="EditHabit__form-control"
              type="text"
              name="end_date"
              value={this.state.habitData.end_date? this.state.habitData.end_date: "Sin establecer"}/>
          </div>
          <button type="submit" className="EditHabit__submitButton">Guardar</button>
        </form>
      </section>
    )
  }
}

export const EditHabit = withRouter(EditHabitComponent);