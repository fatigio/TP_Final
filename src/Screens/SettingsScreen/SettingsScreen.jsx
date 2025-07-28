import React from "react";
import ICONS from "../../constants/icons";
import "../Screens.css"

const SettingsScreen = () => {
    return (
        <div className="screens-container">
            <ICONS.Settings className="icon-screens"/>
            <h1 className="screens-title">Ajustes</h1>
        </div>
    )
}

export default SettingsScreen