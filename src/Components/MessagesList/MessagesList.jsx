import Messages from "../Messages/Messages"
import { useContext } from "react"
import "./MessagesList.css"
import { ContactContext } from "../../Context/ContactContext"


const MessagesList = () => {
    const {contact_info} = useContext(ContactContext)

    if (!contact_info) {
        return <span>Cargando mensajes...</span>
    }

    if(contact_info.messages.length === 0){
        return (
            <div>
                <span>No hay mensajes</span>
            </div>
        )
    }

    const list_messages = (
        <div className="messages-list">
            {contact_info.messages.map((message) =>(
                        <Messages 
                            key = {message.id}
                            emisor = {message.emisor}
                            hora = {message.hora}
                            id = {message.id}
                            texto = {message.texto}
                            status = {message.status}
                        />
                    )
                )
            }
        </div>
    )


    return (
        <div>
            {list_messages}
        </div>
    )
}

export default MessagesList
