import React from 'react';
import '../assets/styles/components/LoginForm.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('form submitted');
    const target = e.target;
    const credentials = {
      username: target.username.value,
      password: target.password.value
    }
    console.log(credentials);
  }
  render() {
    return (
      <main className="main">
      <h1 className="title">Login</h1>
      <form className="form">
        <div className="form-group">
          <label className="form-group__label" htmlFor="username">Username</label>
          <input className="form-control" type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label className="form-group__label" htmlFor="password">Password</label>
          <input className="form-control" type="password" name="password" id="password" />
        </div>
        <button type="submit" className="btn">Continuar</button>
      </form>
    </main>
    );
  }
}

export default Login;
