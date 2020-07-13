import React, { useContext, useState } from "react";
import UserContext from '../context/UserContext';
import Nav from "../components/Nav";
import "../assets/styles/pages/ProfileConfiguration.scss";

export const ProfileConfiguration = (props) => {
  const { user, setUser } = useContext(UserContext)
  const [ usernameError, setUsernameError] = useState(null);
  const [ currentUsername, setcurrentUsername] = useState(user.user.username);
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
    fetch(`https://dejavuhq.xyz/api/users/${currentUsername}`, requestOptions)
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
        src={
          user.user.picture
          ? user.user.picture
          :"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb_Hhic635ynT_DOoTuvLCUqKNXjVmCa0HxA&usqp=CAU"
        }
      />
      <label htmlFor="uploadPicture" className="profileConfiguration__changeImageButton">Change profile photo</label>
      <form
        className="profileConfiguration__form"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <input type="file" id="uploadPicture" name="picture" onChange={handleImageChange} />
        <div className="form-group">
          <label className="profileConfiguration__form-group-label">First name</label>
          <input
            required
            className="profileConfiguration__form-control"
            type="text"
            name="first_name"
            value={user.user.first_name}
            onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label className="profileConfiguration__form-group-label">Last name</label>
          <input
            required
            className="profileConfiguration__form-control"
            type="text"
            name="last_name"
            value={user.user.last_name}
            onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label className="profileConfiguration__form-group-label">Email</label>
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
          <label className="profileConfiguration__form-group-label">Biography</label>
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
            Set profile as public
          </label>
          <label className="switch">
            <input
              name="is_public"
              checked={user.user.is_public? true : false}
              type="checkbox"
              onChange={handleCheck}/>
            <span className="slider round"></span>
          </label>
          <span>{user.user.is_public? "Yes" : "No"}</span>
        </div>
        <button type="submit" className="profileConfiguration__submitButton">Save</button>
      </form>
      <Nav/>
    </section>
  )
}