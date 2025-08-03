import React from "react"
import ContactItem from "../ContactItem/ContactItem"
import "./ContactList.css"
import ICONS from "../../constants/icons"

const ContactList = ({ contacts, onContactClick}) => {
    return (
        <div className="contact-list-container">
            <header className="header-contact-list">
                <div className="header-contact-list-title">
                    <h1>WhatsApp</h1>
                    <div className="buttons">
                        <button className="link">
                            <ICONS.NewChat className="icon-contact-header"/>
                        </button>
                        <button className="link">
                            <ICONS.ThreeDots className="icon-contact-header"/>
                        </button>
                    </div>
                </div>
                <div className="search-container">
                    <div className="search-bar">
                        <button className="search-button">
                            <ICONS.Search className="icon-search"/>
                        </button>
                        <input type="text" placeholder="Buscar un chat o iniciar uno nuevo"/>
                    </div>
                </div>
                <div className="tabs">
                    <button className="tabs-btns tab-active">Todos</button>
                    <button className="tabs-btns">No leídos</button>
                    <button className="tabs-btns">Favoritos</button>
                    <button className="tabs-btns">Grupos</button>
                </div>
            </header>
            <div className="archived">
                <button>
                    <ICONS.File className="icon-file"/>
                </button>
                <span>Archivados</span>
            </div>
            <div className="contact-list">
                {contacts.map((contact) => (
                    <ContactItem key={contact.id} contact={contact} onClick={() => onContactClick(contact)} className="contact-item"/>
                ))}
            </div>
        </div>
    )
}

export default ContactList