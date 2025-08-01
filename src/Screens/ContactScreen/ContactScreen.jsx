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
            <div className={`contacts-container ${contact_id ? "not-active" : ""}`}>
                <ContactList contacts={contactList}/>
            </div>
            <div className={`chat-container ${contact_id ? "active" : ""}`}>
                {!contact_id && <EmptyChat />}
                <Outlet />
            </div>
        </div>
    );
};

export default ContactScreen
