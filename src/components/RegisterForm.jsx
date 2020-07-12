import React from "react";
import "../assets/styles/components/RegisterForm.scss";

export class RegisterForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: "",
        fistName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: ""
      }
    }
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
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.form.username,
        first_name: this.state.form.fistName,
        last_name: this.state.form.lastName,
        email: this.state.form.email,
        password: this.state.form.password,
        password_confirmation: this.state.form.passwordConfirmation
      })
    }
    fetch("https://dejavuhq.xyz/api/users/signup", requestOptions)
    .then(response => {
      if(response.status === 201){
        this.props.history.push("/register/validation");
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
      <main className="main">
        <h1 className="title">Regístrate</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="form-group__label">Nombres</label>
            <input
              required
              className="form-control"
              type="text"
              name="fistName"
              value={this.state.form.fistName}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label className="form-group__label">Apellidos</label>
            <input
              required
              className="form-control"
              type="text"
              name="lastName"
              value={this.state.form.lastName}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label className="form-group__label">Correo electrónico</label>
            <input
              required
              pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$"
              className="form-control"
              type="email"
              name="email"
              placeholder="email@ejemplo.com"
              value={this.state.form.email}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label className="form-group__label">Username</label>
            <input
              required
              className="form-control"
              type="text"
              name="username"
              value={this.state.form.username}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label className="form-group__label">Nueva contraseña</label>
            <input
              required
              className="form-control"
              minLength="8"
              type="password"
              name="password"
              value={this.state.form.password}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label className="form-group__label">Confirma la contraseña</label>
            <input
              required
              pattern={this.state.form.password}
              title="Verifique que las contraseñas coincidan"
              className="form-control"
              type="password"
              name="passwordConfirmation"
              value={this.state.form.passwordConfirmation}
              onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn">Continuar</button>
        </form>

      <Link to="/login">Have an account? Login</Link>
      </main>
    )
  }
};