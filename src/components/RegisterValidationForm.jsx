import React, { Fragment } from "react";
import "../assets/styles/components/RegisterValidationForm.scss";
import Image from "../assets/SVGimages/SVG-Register-Verification.svg";

export const RegisterValidationForm = () => {
  return (
    <Fragment>
      <main className="main">
        <h1 className="verification-title">Enviamos un código de confirmación a tu correo electrónico</h1>
        <form className="form">
          <div className="form-group">
            <label className="form-group__label">Ingresa aquí el código</label>
            <input className="form-control" type="text"/>
          </div>
          <button type="submit" className="btn">Empezar</button>
        </form>
      </main>
      <img src={Image} style={{display: "block", width: "80%", margin: "0 auto"}}/>
    </Fragment>
  )
}
