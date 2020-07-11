import React from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { BsCardList } from "react-icons/bs";
import "../assets/styles/pages/Configuration.scss";

export const Configuration = () => {
  return (
    <section className="configuration">
      <Link to="/configuration/profile" className="configuration__button">
        <FiUser className="icon" size="25px"/>
        Mi perfil
      </Link>
      <Link to="/configuration/habits" className="configuration__button">
        <BsCardList className="icon" size="25px"/>
        Mis hábitos
      </Link>
    </section>
  )
}