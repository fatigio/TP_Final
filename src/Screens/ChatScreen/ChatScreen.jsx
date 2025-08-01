import React, { useState, useEffect } from "react"
import MessagesList from "../../Components/MessagesList/MessagesList"
import NewMessageForm from "../../Components/NewMessageForm/NewMessageForm"
import { getContactById } from "../../services/contactService"
import { useParams, Link } from 'react-router'
import ICONS from "../../constants/icons"
import "./ChatScreen.css"

const ChatScreen = () => {

    const {contact_id} = useParams()
    const contact_selected = getContactById(contact_id)
    const [messages, setMessages] = useState(contact_selected.messages) 


    useEffect(() => {
        const contact_selected = getContactById(contact_id)
        setMessages(contact_selected.messages)
    }, [contact_id])

/*     useEffect(() => {
        // Código que querés que se ejecute
    }, [dependencias])
    
    El primer parámetro es una función que se ejecuta cuando el componente se renderiza o cuando cambian las dependencias.
    El segundo parámetro (el array de dependencias) le dice a React cuándo ejecutar esa función. 
    
    Lo que esta dentro de las llaves se ejecutara cuando el contact_id cambie */
    const deletemessageById = (message_id) => {
        
        const new_message_list = []

        for(const message of messages){
            if(message.id !== message_id){
                new_message_list.push(message)
            }
        }
        setMessages(new_message_list)
    }

    const deleteAllMessages = () => {
        setMessages([])
    }

    const addNewMessage = (text) => {
        const new_message = {
            emisor: 'Usuario',
            hora: '11:10',
            texto: text,
            status: 'no-visto',
            id: messages.length + 1
        }
        const cloned_messages_list = [...messages]

        cloned_messages_list.push(new_message)
        setMessages(cloned_messages_list)
    } 


    return ( 
        <div className="messages">
            <header className="header-chat">
                <div className="profile-header">
                    <Link to={'/contacts'} className="link">
                        <ICONS.ArrowBack className="icons-chat"/>
                    </Link>
                    <Link to={'/contacts/' + contact_selected.id + '/profile'} className="profile">
                        <img src={contact_selected.avatar} alt={contact_selected.name} />
                        <div className="name-conection">
                            <span className="name">{contact_selected.name}</span>
                            <span className="conection">{contact_selected.last_connection}</span>
                        </div>
                    </Link>
                </div>
                <div className="buttons-header-chat">
                    <button className="link">
                        <ICONS.Video className="icons-chat"/>
                        <ICONS.ArrowDown className="icons-chat"/>
                    </button>
                    <button className="link">
                        <ICONS.Search className="icons-chat"/>
                    </button>
                    <button className="link">
                        <ICONS.ThreeDots className="icons-chat"/>
                    </button>
                </div>
            </header>
            <div className="messages-screen">
                <MessagesList messages = {messages} deletemessageById = {deletemessageById}/>
            </div>
            <div className="new-message">
                <NewMessageForm addNewMessage = {addNewMessage}/>
            </div>
        </div>
    )
}

export default ChatScreen