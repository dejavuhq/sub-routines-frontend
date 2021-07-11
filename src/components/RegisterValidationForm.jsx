import React, { Fragment, useState } from "react";
import "../assets/styles/components/RegisterValidationForm.scss";
import Image from "../assets/SVGimages/SVG-Register-Verification.svg";

export const RegisterValidationForm = (props) => {
  const [token, setToken] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState(null)
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
      if(response.status === 200){
        return response.json();
      }
    })
    .then(result => {
      if(result){
        if(result.hasOwnProperty("message")){
          setRegistrationStatus(true);
          setTimeout(() => {
            props.history.push("/login");
          }, 2500)
        }
      }
    })
    .catch(error => console.log("Error:", error));
  };

  return (
    <Fragment>
      <main className="main">
        <h1 className="verification-title">We send a confirmation code to your email</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-group__label">Enter the code here</label>
            <input required className="form-control" type="text" value={token} onChange={handleChange}/>
          </div>
          <small>
            {
              registrationStatus?
              <small className="validationSuccess" >
                Successful registration
              </small>: null
            }
            </small>
          <button type="submit" className="btn">Start!</button>
        </form>
      </main>
      <img src={Image} style={{display: "block", width: "80%", margin: "0 auto"}}/>
    </Fragment>
  )
}
