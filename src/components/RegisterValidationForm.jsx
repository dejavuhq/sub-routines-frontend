import React, { Fragment, useState } from "react";
import "../assets/styles/components/RegisterValidationForm.scss";
import Image from "../assets/SVGimages/SVG-Register-Verification.svg";

export const RegisterValidationForm = () => {
  const [token, setToken] = useState("");

  const handleChange = (e) => {
    setToken(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({token})
    };
    fetch("https://dejavuhq.xyz/api/users/verify", requestOptions)
    .then(response => {
      if(response.status === 201){
        console.log("Done Register");
      } else {
        return response.json();
      }
    })
    .then(result => {
      if(result) {
        console.log("result: ", result);
      }
    })
    .catch(error => console.log("Error:", error));
  };

  return (
    <Fragment>
      <main className="main">
        <h1 className="verification-title">Enviamos un código de confirmación a tu correo electrónico</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-group__label">Ingresa aquí el código</label>
            <input required className="form-control" type="text" value={token} onChange={handleChange}/>
          </div>
          <button type="submit" className="btn">Empezar</button>
        </form>
      </main>
      <img src={Image} style={{display: "block", width: "80%", margin: "0 auto"}}/>
    </Fragment>
  )
}
