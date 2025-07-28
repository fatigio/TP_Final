/* 
Para que sirve contexto?
Nos permite evitar el prop drilling 

Que es el prop drilling?
Cuando transferimos props a un componente hijo y ese hio se las trasfiere a un componente hijo y asi sucesivamente

*/

import React, {createContext, useEffect, useState} from "react"
import { useParams } from "react-router"
import { getContactById } from "../services/contactService"

//Paso 1:
export const ContactContext = createContext()

//Paso 2: Crear un proveedor
const ContactContextProvider = ({children}) => {
    
    //Paso 1: Obtengo el id de contacto
    const {contact_id} = useParams()

    //Paso 2: Creo un estado donde guardo el contexto seleccionado
    const [contact_info, setContactInfo] = useState(null)

    //Nos permite controlar la cantidad de recarga de una funcion
    //Recibe dos parametros
    //1: El efecto: la funcion que queremos controlar
    //2: Las dependencias: Los estados que mi efecto escuchara para re-llamar al efecto
    useEffect(() => {
        //Paso 3: Busco el contacto seleccionado
        const contact_selected = getContactById(contact_id)

        //Paso 4: Guardo mi estado de contacto seleccionado
        setContactInfo(contact_selected)
    },
    //Quiero que se recargue el efecto si mi id de contacto cambia 
    [contact_id])


    return (
        <ContactContext.Provider value={
            //Este objeto es el valor que podran acceder de nuestro contexto
            {
                contact_info: contact_info
            }
        }>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider
