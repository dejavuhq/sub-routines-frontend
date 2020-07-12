import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/static/logo.png';
import '../assets/styles/components/LandingPage.scss';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className='header'>
        <img src="../assets/static/logo.png" alt="dejavu logo" />
      </header>
      <h1>Track your Habits <br /> Reach your goals</h1>
      <button className="cta-btn"><Link to="/register">Get Started</Link></button>
      <img src={require('../assets/static/heatmap.png')} alt="heatmap" />
    </div>
  );
}

export default LandingPage;
