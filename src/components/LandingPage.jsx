import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/static/logo.png';
import heatmap from '../assets/static/heatmap.png';
import '../assets/styles/components/LandingPage.scss';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className='header'>
        <img className="logo" src={logo} alt="dejavu logo" />
      </header>
      <h1><span className="small">Track your Habits</span> <br /> Reach your goals</h1>
      <button className="cta-btn"><Link to="/register">Get Started</Link></button>
      <img src={heatmap} alt="heatmap" />
    </div>
  );
}

export default LandingPage;
