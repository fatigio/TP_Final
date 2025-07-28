import React from "react"
import ICONS from "../../constants/icons"
import "../Screens.css"

const ChannelScreen = () => {
    return (
        <div className="screens-container">
            <ICONS.Channels className="icon-screens"/>
            <h1 className="screens-title">Descubre canales</h1>
            <span className="screens-description">Entretenimiento, deportes, noticias, estilo de vida, personas y mucho más. Sigue los canales que te interesan.</span>
        </div>
    )
}

export default ChannelScreen