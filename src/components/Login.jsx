import React from 'react';

const Home = () => {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" name="username" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password"/>
      <button type="submit">Login</button>
    </form>
  );
}

export default Home;
