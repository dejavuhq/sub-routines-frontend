import React from "react";
import "../assets/styles/components/RegisterForm.scss";

export const RegisterForm = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Registra tus hábitos diarios</h1>
            <form>
              <div className="form-group">
                <label>Nombres</label>
                <input className="form-control" type="text"/>
              </div>
              <div className="form-group">
                <label>Apellidos</label>
                <input className="form-control" type="text"/>
              </div>
              <div className="form-group">
                <label>Correo electronico</label>
                <input className="form-control" type="email"/>
              </div>
              <div className="form-group">
                <label>Username</label>
                <input className="form-control" type="text"/>
              </div>
              <div className="form-group">
                <label>Nueva contraseña</label>
                <input className="form-control" type="password"/>
              </div>
              <div className="form-group">
                <label>Confirma la contraseña</label>
                <input className="form-control" type="password"/>
              </div>
              <button type="submit" className="btn btn-primary">Continuar</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
};