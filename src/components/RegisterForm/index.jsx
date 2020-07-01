import React from "react";
import { Main, Title, Label, Input, FormGroup, Button } from "./styles";

export const RegisterForm = () => {
  return (
    <Main>
      <div className="container">
        <div className="row">
          <div className="col">
            <Title className="text-center">Registra tus hábitos diarios</Title>
            <form>
              <FormGroup className="form-group">
                <Label>Nombres</Label>
                <Input className="form-control" type="text"/>
              </FormGroup>
              <FormGroup className="form-group">
                <Label>Apellidos</Label>
                <Input className="form-control" type="text"/>
              </FormGroup>
              <FormGroup className="form-group">
                <Label>Correo electronico</Label>
                <Input className="form-control" type="email"/>
              </FormGroup>
              <FormGroup className="form-group">
                <Label>Username</Label>
                <Input className="form-control" type="text"/>
              </FormGroup>
              <FormGroup className="form-group">
                <Label>Nueva contraseña</Label>
                <Input className="form-control" type="password"/>
              </FormGroup>
              <FormGroup className="form-group">
                <Label>Confirma la contraseña</Label>
                <Input className="form-control" type="password"/>
              </FormGroup>
              <Button type="submit" className="btn btn-primary">Continuar</Button>
            </form>
          </div>
        </div>
      </div>
    </Main>
  )
};