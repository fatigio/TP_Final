import React from "react"
import ICONS from "../../constants/icons"
import "./NewMessageForm.css"

const NewMessageForm = ({addNewMessage}) => {
    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault()
        let new_message_text = event.target.message.value
        //Llamamos a la funcion de agregar nuevo mensaje
        addNewMessage(new_message_text)
        //Reseteamos el campo
        event.target.message.value = ''
    }
    return (
        <form className="new-message-form" onSubmit={handleSubmitSendMessageForm}>
            <div className="buttons-new-message">
                <button className="link">
                    <ICONS.Plus className="icons-new-message"/>
                </button>
                <button className="link">
                    <ICONS.Sticker className="icons-new-message"/>
                </button>
            </div>
            <input type="text" placeholder="Escribe un mensaje..." id="message" name="message"/>
            <button type="submit" className="link">
                <ICONS.Submit className="icons-new-message"/>
            </button>
        </form>
    )
}

export default NewMessageForm