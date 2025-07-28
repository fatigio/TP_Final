import React, { useState } from "react"
import { Outlet, useParams } from "react-router"
import ContactList from "../../Components/ContactList/ContactList";
import { getContactList } from "../../services/contactService";
import "./ContactScreen.css"
import EmptyChat from "../../Components/EmptyChat/EmptyChat";


const ContactScreen = () => {
    const contacts = getContactList()
    const [contactList, setContactList] = useState(contacts)
    const {contact_id} = useParams()

    
    return (
        <div className="contacts-screen-container">
            <div className="contacts-container">
                <ContactList contacts={contactList}/>
            </div>
            <div className="chat-container">
                {!contact_id && <EmptyChat />}
                <Outlet />
            </div>
        </div>
    );
};

export default ContactScreen

/* 
v1: 
Hace un componente de react llamado ContactScreen que tenga un estado con la lista de contactos, dicha lista debera renderizarse dentro del componente, por cada contacto quiero que crees un <div></div> con la informacion del contacto. Observa las propiedades de cada contacto para mostrarlas en la pantalla , necesito que dividas el renderizado de la lista en un componente aparte llamado ContactList que reciba el estado de la lista y cada ContactItem tambien sera componente aparte. */