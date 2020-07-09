import React from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/styles/components/LoginForm.scss';

const Login = () => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
    const target = e.target;

    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: target.username.value,
        password: target.password.value
      })
    };
    fetch("https://dejavuhq.xyz/api/users/login", requestOptions)
      .then(response => {
        if(response.status === 200){
          history.push("/home");
        } else {
          return response.json();
        }
      })
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  return (
    <main className="main">
    <h1 className="title">Login</h1>
    <form className="form" onSubmit={handleSubmit}>
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

export default Login;