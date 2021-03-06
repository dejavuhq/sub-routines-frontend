import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/styles/components/LoginForm.scss';
import UserContext from '../context/UserContext';

const Login = () => {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: target.username.value,
        password: target.password.value,
      }),
    };
    fetch('https://dejavuhq.xyz/api/users/login', requestOptions)
      .then((response) => {
        if (response.status === 200) {
          const res = response.json();
          res.then((result) => {
            if (result.user.biography === null) {
              setUser({
                user: { ...result.user, biography: '' },
                token: result.token,
                stats: result.stats,
              });
            } else {
              setUser({
                user: result.user,
                token: result.token,
                stats: result.stats,
              });
            }
            history.push('/home');
          });
        } else {
          return response.json();
        }
      })
      .then((result) => {
        if(result.hasOwnProperty("non_field_errors")){
          setError(result.non_field_errors);
        }
      })
      .catch((error) => console.log('error', error));
  };
  return (
    <main className="main">
      <h1 className="title">Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        {
          error? <small className="formError" >{error}</small>: null
        }
        <div className="form-group">
          <label className="form-group__label" htmlFor="username">
            Username
          </label>
          <input
            required
            className="form-control"
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div className="form-group">
          <label className="form-group__label" htmlFor="password">
            Password
          </label>
          <input
            required
            minLength="8"
            className="form-control"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button type="submit" className="btn">
          Continue
        </button>
      </form>
    </main>
  );
};

export default Login;
