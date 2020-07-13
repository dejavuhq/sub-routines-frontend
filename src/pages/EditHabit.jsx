import React from "react";
import { withRouter } from "react-router";
import { FcLock } from "react-icons/fc";
import Nav from "../components/Nav";
import "../assets/styles/pages/EditHabit.scss";

class EditHabitComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      habitData: this.props.location.state.data.data,
      token: this.props.location.state.data.token
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
    let requestOptions = {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${this.state.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.habitData)
    };
    fetch(`https://dejavuhq.xyz/api/habits/${this.state.habitData.id}`, requestOptions)
    .then(response => {
      if(response.status === 200){
        this.props.history.push("/configuration/habits");
      } else {
        return response.json();
      }
    })
    .then(result => {
      if(result) {
        console.log("result: ", result);
      }
    })
    .catch(error => console.log("Error: ", error));
  }
  render() {
    return (
      <section className="EditHabit">
        <h2 className="EditHabit__title">Edit habit</h2>
        <form className="EditHabit__form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="EditHabit__form-group-label">Name</label>
            <input
              className="EditHabit__form-control"
              type="text"
              name="name"
              value={this.state.habitData.name}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label className="EditHabit__form-group-label">Description</label>
            <input
              className="EditHabit__form-control"
              type="text"
              name="description"
              value={this.state.habitData.description}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label
              className="EditHabit__form-group-label">Frequency<FcLock style={{marginLeft: "5px"}}/>
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
            <label className="EditHabit__form-group-label">Do you want the habit to be public?</label>
            <label className="switch">
              <input
                name="is_public"
                checked={this.state.habitData.is_public? true : false}
                type="checkbox"
                onChange={this.handleCheck}/>
              <span className="slider round"></span>
            </label>
            <span>{this.state.habitData.is_public? "Yes" : "No"}</span>
          </div>
          <div className="form-group">
            <label className="EditHabit__form-group-label">Do you want to pause the habit?</label>
            <label className="switch">
              <input
                name="is_paused"
                checked={this.state.habitData.is_paused? true : false}
                type="checkbox"
                onChange={this.handleCheck}/>
              <span className="slider round"></span>
            </label>
            <span>{this.state.habitData.is_paused? "Yes" : "No"}</span>
          </div>
          <div className="form-group">
            <label className="EditHabit__form-group-label">Start date<FcLock style={{marginLeft: "5px"}}/></label>
            <input
              disabled
              readOnly="readonly"
              className="EditHabit__form-control"
              type="text"
              name="start_date"
              value={this.state.habitData.start_date}/>
          </div>
          <div className="form-group">
            <label className="EditHabit__form-group-label">End date<FcLock style={{marginLeft: "5px"}}/></label>
            <input
              disabled
              readOnly="readonly"
              className="EditHabit__form-control"
              type="text"
              name="end_date"
              value={this.state.habitData.end_date
              ? this.state.habitData.end_date: "Not established"}/>
          </div>
          <button type="submit" className="EditHabit__submitButton">Save</button>
        </form>
        <Nav/>
      </section>
    )
  }
}

export const EditHabit = withRouter(EditHabitComponent);