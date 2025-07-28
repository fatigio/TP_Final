import Messages from "../Messages/Messages"
import "./MessagesList.css"

const MessagesList = ({messages, deletemessageById}) => {

    //Esto se un ejemplo de renderizado condicional
    //Tarea para investigar, esto se puede hacer con algo llamado ternario
    if(messages.length === 0){
        return (
            <div>
                <span>No hay mensajes</span>
            </div>
        )
    }

    const list_messages = (
        <div className="messages-list">
            {messages.map((message) =>(
                        <Messages 
                            key = {message.id}
                            emisor = {message.emisor}
                            hora = {message.hora}
                            id = {message.id}
                            texto = {message.texto}
                            status = {message.status}
                            deletemessageById = {deletemessageById}
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
