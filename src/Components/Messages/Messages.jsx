import React from "react"
import "./Messages.css"
import ICONS from "../../constants/icons"

const Messages = ({emisor, hora, id, texto, status, deletemessageById}) => {

    /* Cuando  necesito pasar un parametro a una funcion asociada a un evento, podemos encerrarlo en otra funcion, de esta manera evitamos que se ejecute al renderizarse el componente 
    Ejemplo incorrecto:
    <button onClick = {alert('hola')}></button> => Apenas se cargue el boton se ejecutara la alerta
    Ejemplo correcto:
    <button onClick = {() => {alert('hola')}}></button> => La funcion solo se ejecutara al dar click
    */

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