import React from "react";
import ICONS from "../../constants/icons";
import "../Screens.css"

const StoryScreen = () => {
    return (
        <div className="screens-container">
            <ICONS.Stories className="icon-screens"/>
            <h1 className="screens-title">Comparte actualizaciones de estado</h1>
            <span className="screens-description">Comparte fotos, videos y texto que desaparecen después de 24 horas.</span>
        </div>
    )
};

export default StoryScreen