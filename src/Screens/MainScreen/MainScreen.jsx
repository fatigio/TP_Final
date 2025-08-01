import React from "react"
import Header from "../../Components/Header/Header"
import { Outlet } from "react-router"


const MainScreen = () => {
    return (
        <div className="body">
            <Header/>
            <Outlet/>
        </div>
    )
}

export default MainScreen