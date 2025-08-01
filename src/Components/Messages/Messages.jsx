import React, { useContext } from "react"
import "./Messages.css"
import ICONS from "../../constants/icons"
import { ContactContext } from "../../Context/ContactContext"

const Messages = ({emisor, hora, id, texto, status}) => {
    const {deletemessageById} = useContext(ContactContext)

    return (
        <div className={`messages-wrapper ${emisor === "Usuario" ? "sent" : "received"}`}>
            <div className="messages-container">
                <p>{texto}</p>
                <span className="time">{hora}</span>
                {emisor === 'Usuario' &&(
                    <span className="status"><ICONS.Checks className={`icon-check ${status === "visto" ? "seen" : "not-seen"}`}/></span>
                )}
                <button onClick={() => {deletemessageById(id)}}>
                    <ICONS.Trash className="icon-trash"/>
                </button>
            </div>
        </div>
    )
}

export default Messages