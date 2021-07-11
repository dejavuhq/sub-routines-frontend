import React from "react";
import { RegisterValidationForm } from "../components/RegisterValidationForm";

export const RegisterValidation = (props) => {
  return (
    <RegisterValidationForm history={props.history}/>
  )
};