import React from "react"
import { useParams, Link } from 'react-router'
import { getContactById } from "../../services/contactService"
import ICONS from "../../constants/icons"
import "./ProfileScreen.css"

const ProfileScreen = () => {
    const {contact_id} = useParams()
    const contact_selected = getContactById(contact_id)

    return (
        <div>
            <header className="header-contact-profile">
                <div className="header-contact-profile-info">
                    <Link to={'/contacts/' + contact_id + '/messages'} className="header-button">
                        <ICONS.ArrowBack className="icon-header"/>
                    </Link>
                    <h1 className="contact-profile-title">Info. del contacto</h1>
                </div>
                <button className="header-button">
                    <ICONS.Pencil className="icon-header"/>
                </button>
            </header>
            <div className="contact-profile-info">
                <img src={contact_selected.avatar} alt={contact_selected.name} />
                <span className="contact-name">{contact_selected.name}</span>
                <span className="contact-description">{contact_selected.description}</span>
            </div>
                <div className="options">
                    <button className="options-buttons">
                        <ICONS.Files className="icon-options"/>
                        <span className="options-buttons-first-span">Archivos, enlaces y documentos</span>
                    </button>
                    <button className="options-buttons">
                        <ICONS.Star className="icon-options"/>
                        <span className="options-buttons-first-span">Mensajes destacados</span>
                    </button>
                    <button className="options-buttons">
                        <ICONS.Bell className="icon-options"/>
                        <span className="options-buttons-first-span">Notificaciones</span>
                    </button>
                    <button className="options-buttons">
                        <ICONS.Clock className="icon-options"/>
                        <div className="options-buttons-info">
                            <span className="options-buttons-first-span">Mensajes temporales</span>
                            <span className="options-buttons-second-span">Desactivados</span>
                        </div>
                    </button>
                    <button className="options-buttons">
                        <ICONS.Shield className="icon-options"/>
                        <divc className="options-buttons-info">
                            <span className="options-buttons-first-span">Privacidad avanzada del chat</span>
                            <span className="options-buttons-second-span">Desactivado</span>
                        </divc>
                    </button>
                    <button className="options-buttons">
                        <ICONS.Lock className="icon-options"/>
                        <div className="options-buttons-info">
                            <span className="options-buttons-first-span">Cifrado</span>
                            <span className="options-buttons-second-span">Los mensajes estan cifrados de extremo a extremo. Haz click para verificarlo.</span>
                        </div>
                    </button>
                </div>
        </div>
    )
}

export default ProfileScreen