import React from "react";
import ICONS from "../../constants/icons";
import "../Screens.css"

const CommunityScreen = () => {
    return (
        <div className="screens-container">
            <ICONS.Community className="icon-screens"/>
            <h1 className="screens-title">Crea comunidades</h1>
            <span className="screens-description">Crea grupos para reunir a los miembros en función de temas y envíales fácilmente avisos al avisos del administrador.</span>
        </div>
    )
}

export default CommunityScreen