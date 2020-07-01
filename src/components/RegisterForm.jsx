import React from "react";
import "../assets/styles/components/RegisterForm.scss";

export const RegisterForm = () => {
  return (
    <main className="main">
      <h1 className="title">Regístrate</h1>
      <form className="form">
        <div className="form-group">
          <label className="form-group__label">Nombres</label>
          <input className="form-control" type="text"/>
        </div>
        <div className="form-group">
          <label className="form-group__label">Apellidos</label>
          <input className="form-control" type="text"/>
        </div>
        <div className="form-group">
          <label className="form-group__label">Correo electrónico</label>
          <input className="form-control" type="email" placeholder="email@ejemplo.com"/>
        </div>
        <div className="form-group">
          <label className="form-group__label">Username</label>
          <input className="form-control" type="text"/>
        </div>
        <div className="form-group">
          <label className="form-group__label">Nueva contraseña</label>
          <input className="form-control" type="password"/>
        </div>
        <div className="form-group">
          <label className="form-group__label">Confirma la contraseña</label>
          <input className="form-control" type="password"/>
        </div>
        <button type="submit" className="btn">Continuar</button>
      </form>
    </main>
  )
};