import React from "react"
import { Link } from "react-router"
import ICONS from "../../constants/icons"
import "./ContactItem.css"

const ContactItem = ({ contact }) => {
    const messages = contact.messages
    const last_message_function = () => {
        if(messages.length > 0){
            return messages[messages.length - 1]
        }
        return null;
    } 

    const last_meessage = last_message_function()

    return (
        <Link to = {'/contacts/' + contact.id + '/messages'} className="contact-item">
                <div className="avatar">
                    <img src={contact.avatar} alt={contact.name} width={100}/>
                </div>
                <div className="contact-info">
                    <div className="name-date">
                        <span className="name">{contact.name}</span>
                        <span className="date">{contact.last_message_time}</span>
                    </div>
                    <div  className="message-pin">
                        <span className="message">{last_meessage.texto}</span>
                        <button>
                            <ICONS.Pin className="icon-pin"/>
                        </button>
                    </div>
                </div>
        </Link>
    )
}

export default ContactItem