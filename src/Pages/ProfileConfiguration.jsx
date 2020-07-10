import React from "react";
import "../assets/styles/pages/ProfileConfiguration.scss";

export class ProfileConfiguration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        fistName: "",
        lastName: "",
        biography: "",
        email: "",
        username: ""
      }
    }
  }
  componentDidMount() {
    // Load user data
    fetch(`https://dejavuhq.xyz/api/users/superadmin1`, {
      headers: {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk0NDA4NDMwLCJqdGkiOiIxYmExMDZkMmRkNDI0YzRhOWFiNmM2ZDBjYTgwODEzNyIsInVzZXJfaWQiOjIwfQ.nN5gP52EEM6YSbozdcqxY7Vxb5gIHSJ2iNg-T1Vm6rk"}
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }
  handleSubmit = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }
  render() {
    return (
      <section className="profileConfiguration">
        <img
          className="profileConfiguration__image"
          src="https://pbs.twimg.com/profile_images/1062767896269590528/vOsDt9up_400x400.jpg"
        />
        <button className="profileConfiguration__changeImageButton">Cambiar foto de perfil</button>
        <form className="profileConfiguration__form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="profileConfiguration__form-group-label">Nombres</label>
            <input
              required
              className="profileConfiguration__form-control"
              type="text"
              name="fistName"
              value={this.state.form.fistName}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label className="profileConfiguration__form-group-label">Apellidos</label>
            <input
              required
              className="profileConfiguration__form-control"
              type="text"
              name="lastName"
              value={this.state.form.lastName}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label className="profileConfiguration__form-group-label">Correo electrónico</label>
            <input
              required
              pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$"
              className="profileConfiguration__form-control"
              type="email"
              name="email"
              placeholder="email@ejemplo.com"
              value={this.state.form.email}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label className="profileConfiguration__form-group-label">Username</label>
            <input
              required
              className="profileConfiguration__form-control"
              type="text"
              name="username"
              value={this.state.form.username}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label className="profileConfiguration__form-group-label">Biografía</label>
            <input
              className="profileConfiguration__form-control"
              type="text"
              name="biography"
              placeholder="Agrega una breve biografía"
              value={this.state.form.biography}
              onChange={this.handleChange}/>
          </div>
          <button type="submit" className="profileConfiguration__submitButton">Guardar</button>
        </form>
      </section>
    )
  }
}