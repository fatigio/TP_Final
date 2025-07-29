import React from "react"
import ICONS from "../../constants/icons"
import "./EmptyChat.css"

const EmptyChat = () => {
    return (
        <div className="empty-chat-screen">
            <div className="empty-chat-screen_first-part">
                <img src="/images/empty-chat.jpg" alt="empty-chat" />
                <h1>Descarga WhatsApp para Mac</h1>
                <span>Descarga la aplicacion para Mac y haz llamadas con mayor rapidez.</span>
                <button>Descargar de App Store</button>
            </div>
            <div className="empty-chat-screen_second-part">
                <span>
                    <ICONS.Lock className="icon-empty-chat"/>
                    Tus mensajes personales estan cifrados de extremo a extremo.
                </span>
            </div>
        </div>
    )
}

export default EmptyChat