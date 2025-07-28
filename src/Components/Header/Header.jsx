import React, { useState } from "react";
import './Header.css'
import { Link, useLocation, NavLink } from "react-router"
import ICONS from "../../constants/icons";

const Header = () => {
/*     const location = useLocation()
    const [active, setActive] = useState(location.pathname) */

    return (
        <header className="header">
            <div className="top-section">
                <NavLink 
                    to = {'/contacts'} 
                    className={({ isActive }) => `link ${isActive ? 'activo' : ''}`}
                >
                    <ICONS.Chats className="icon"/>
                </NavLink>
                <NavLink 
                    to = {'/stories'}                      
                    className={({ isActive }) => `link ${isActive ? 'activo' : ''}`}
                >
                    <ICONS.Stories className="icon"/>
                </NavLink>
                <NavLink 
                    to = {'/channels'} 
                    className={({ isActive }) => `link ${isActive ? 'activo' : ''}`}
                >
                    <ICONS.Channels className="icon"/>
                </NavLink>
                <NavLink 
                    to = {'/community'} 
                    className={({ isActive }) => `link ${isActive ? 'activo' : ''}`}
                >
                    <ICONS.Community className="icon"/>
                </NavLink>
            </div>
            <div className="settings-profile">
                <NavLink 
                    to = {'/settings'} 
                    className={({ isActive }) => `link ${isActive ? 'activo' : ''}`}
                >
                    <ICONS.Settings className="icon"/>
                </NavLink>
                <NavLink 
                    to = {'/profile'} 
                    className={({ isActive }) => `link btn_img ${isActive ? 'activo' : ''}`}
                >
                    <img src="/images/profile-photo.jpg" alt="profile-photo"/>
                </NavLink>
            </div>
        </header>
    )
}

export default Header 