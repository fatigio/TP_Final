import React from "react"
import ICONS from "../../constants/icons"
import './UserProfileScreen.css'

const UserProfileScreen = () => {
    return (
        <div className="user-profile">
            <div className="left-screen">
                <h1>Perfil</h1>
                <div className="profile-photo">
                    <img src="/images/profile-photo.jpg" alt="profile-photo"/>
                </div>
                <div className="profile-info">
                    <span>Tu nombre</span>
                    <div className="profile-info-user">
                        <span>Usuario</span>
                        <button className="link">
                            <ICONS.Pencil className="icon-user-profile"/>
                        </button>
                    </div>
                </div>
                <span className="profile-description">Este no es tu nombre de usuario o PIN. Este nombre será visible para tus contactos de WhatsApp.</span>
                <div className="profile-info">
                    <span>Info.</span>
                    <div className="profile-info-user">
                        <span>Estado</span>
                        <button className="link">
                            <ICONS.Pencil className="icon-user-profile"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="right-screen">
                <ICONS.Profile className="icon-screens"/>
                <h1 className="screens-title">Perfil</h1>
            </div>
        </div>
    )
}

export default UserProfileScreen