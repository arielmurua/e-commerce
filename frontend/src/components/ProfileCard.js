import React from 'react'
import { AuthContext } from './App'
import profileImg from '../assets/LM10.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
  const { userLogged } = React.useContext(AuthContext)
  const userEditHandler = (e) => {
    e.preventDefault();
    console.log("edit---")
  }

  return (
    <div className="user-info-card">
        <div className="username-img-container">
          <img src={profileImg} alt="profile_pic"/>
        </div>
          <form className="user-info-container">
            <div className="info-line">
              <h2>{userLogged.username}</h2>
            </div>
            <div className="info-line">
              <p className="field-name">Nombre</p>
              <input type={"text"} defaultValue={userLogged.first_name} className="field-info"></input>
            </div>
            <div className="info-line">
              <p className="field-name">Apellido</p>
              <input type={"text"} defaultValue={userLogged.last_name} className="field-info"></input>
            </div>
            <div className="info-line">
              <p className="field-name">Direccion</p>
              <input type={"text"} defaultValue={userLogged.address} className="field-info"></input>
            </div>
            <div className="info-line">
              <p className="field-name">Telefono</p>
              <input type={"text"} defaultValue={userLogged.phone} className="field-info"></input>
            </div>
            <div className="info-line">
              <p className="field-name">Email</p>
              <input type={"text"} defaultValue={userLogged.email} className="field-info"></input>
            </div>
            <div className="info-line">
              <p className="field-name">Zipcode</p>
              <input type={"text"} defaultValue={userLogged.zip} className="field-info"></input>
            </div>
            <div className="info-line">
              <p className="field-name">Payment mathod</p>
              <input type={"text"} defaultValue={userLogged.payment_method_id} className="field-info"></input>
            </div>
            <br/>
            <div className="info-line">
              <button onClick={userEditHandler} className='btn-user-edit'>Editar <i className="far fa-edit"></i></button>
            </div>
          </form>
      </div>
  )
}

export default ProfileCard