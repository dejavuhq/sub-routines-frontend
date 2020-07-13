import React, { useContext } from "react";
import UserContext from '../context/UserContext';
import "../assets/styles/pages/ProfileConfiguration.scss";

export const ProfileConfiguration = (props) => {
  const { user, setUser } = useContext(UserContext)

  const handleChange = (e) => {
    setUser({
      "user": {
        ...user.user,
        [e.target.name]: e.target.value
      },
      "token": user.token,
    })
  }
  const handleCheck = (e) => {
    setUser({
      "user": {
        ...user.user,
        is_public: e.target.checked
      },
      "token": user.token,
    })
  }
  const handleImageChange = (e) => {
    setUser({
      user: {
        ...user.user,
        picture: e.target.files[0],
      },
      token: user.token,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let requestOptions = {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${user.token}`
      },
      body: formData
    };
    fetch(`https://dejavuhq.xyz/api/users/${user.user.username}`, requestOptions)
    .then(response => {
      if(response.status === 200){
        props.history.push("/profile");
      } else {
        return response.json();
      }
    })
    .then(result => {
      if(result) {
        console.log("result: ", result);
      }
    })
    .catch(error => console.log("Error: ", error));
  }
  return (
    <section className="profileConfiguration">
      <img
        className="profileConfiguration__image"
        src="https://pbs.twimg.com/profile_images/1062767896269590528/vOsDt9up_400x400.jpg"
      />
      <button className="profileConfiguration__changeImageButton">Cambiar foto de perfil</button>
      <form 
        className="profileConfiguration__form"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <input type="file" name="picture" onChange={handleImageChange} />
        <div className="form-group">
          <label className="profileConfiguration__form-group-label">Nombres</label>
          <input
            required
            className="profileConfiguration__form-control"
            type="text"
            name="first_name"
            value={user.user.first_name}
            onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label className="profileConfiguration__form-group-label">Apellidos</label>
          <input
            required
            className="profileConfiguration__form-control"
            type="text"
            name="last_name"
            value={user.user.last_name}
            onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label className="profileConfiguration__form-group-label">Correo electrónico</label>
          <input
            required
            pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$"
            className="profileConfiguration__form-control"
            type="email"
            name="email"
            placeholder="email@ejemplo.com"
            value={user.user.email}
            onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label className="profileConfiguration__form-group-label">Username</label>
          <input
            required
            className="profileConfiguration__form-control"
            type="text"
            name="username"
            value={user.user.username}
            onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label className="profileConfiguration__form-group-label">Biografía</label>
          <input
            maxLength="250"
            placeholder="Max 250 caracteres"
            className="profileConfiguration__form-control"
            type="text"
            name="biography"
            placeholder="Agrega una breve biografía"
            value={user.user.biography}
            onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label
            className="profileConfiguration__form-group-label">
            Establecer perfil como público
          </label>
          <label className="switch">
            <input
              name="is_public"
              checked={user.user.is_public? true : false}
              type="checkbox"
              onChange={handleCheck}/>
            <span className="slider round"></span>
          </label>
          <span>{user.user.is_public? "Sí" : "No"}</span>
        </div>
        <button type="submit" className="profileConfiguration__submitButton">Guardar</button>
      </form>
    </section>
  )
}