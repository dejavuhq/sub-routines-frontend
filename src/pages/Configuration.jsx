import React from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { BsCardList } from "react-icons/bs";
import Nav from "../components/Nav";
import "../assets/styles/pages/Configuration.scss";

export const Configuration = () => {
  return (
    <section className="configuration">
      <Link to="/configuration/profile" className="configuration__button">
        <FiUser className="icon" size="25px"/>
        My profile
      </Link>
      <Link to="/configuration/habits" className="configuration__button">
        <BsCardList className="icon" size="25px"/>
        My habits
      </Link>
      <Nav/>
    </section>
  )
}