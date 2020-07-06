import React from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import '../assets/styles/components/LoginForm.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(e) {
    e.preventDefault();
    console.log('form submitted');
    const target = e.target;
    const credentials = {
      "username": target.username.value,
      "password": target.password.value
    }
    async function postLogin() {
      const response = await fetch('http://dejavuhq.xyz/api/users/login', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
      })
      .then(response => {
        console.log(response);
      })
      //console.log(response.json());
    }
    console.log(credentials);
    await postLogin();
    /* fetch('dejavuhq.xyz/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
    .then(response => response.json())
    .then(data => console.log('Success: ', data))
    .catch(error => console.log('There was an errrrror: ' + error)) */
  }
  render() {
    return (
      <main className="main">
      <h1 className="title">Login</h1>
      <form className="form" onSubmit={this.handleSubmit}>
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
