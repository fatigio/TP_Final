import React from "react"
import Header from "../../Components/Header/Header"
import { Outlet } from "react-router"


const PrincipalScreen = () => {
    return (
        <div className="body">
            <div className="header-main">
            <Header/>
            </div>
            <Outlet/>
        </div>
    )
}

export default PrincipalScreen