import React from "react"
import Header from "../../Components/Header/Header"
import ContactScreen from "../ContactScreen/ContactScreen"
import { Outlet } from "react-router"


const PrincipalScreen = () => {
    return (
        <div className="body">
            <Header/>
            <Outlet/>
        </div>
    )
}

export default PrincipalScreen