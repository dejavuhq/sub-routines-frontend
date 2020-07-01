import React from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"/>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
