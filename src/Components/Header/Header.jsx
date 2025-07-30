import React, { useState } from "react";
import './Header.css'
import { useParams, useLocation, NavLink } from "react-router"
import ICONS from "../../constants/icons";

const Header = () => {
    const location = useLocation()
    const {contact_id} = useParams()
    const hideHeader = 
    location.pathname.includes('/contacts/' + contact_id + '/messages') || 
    location.pathname.includes('/contacts/' + contact_id + '/profile')

    return (
        <header className={`header ${hideHeader ? 'hide' : ''}`}>
            <div className="top-section">
                <NavLink 
                    to = {'/contacts'} 
                    className={({ isActive }) => `link ${isActive ? 'active' : ''}`}
                >
                    <ICONS.Chats className="icons-header"/>
                </NavLink>
                <NavLink 
                    to = {'/stories'}                      
                    className={({ isActive }) => `link ${isActive ? 'active' : ''}`}
                >
                    <ICONS.Stories className="icons-header"/>
                </NavLink>
                <NavLink 
                    to = {'/channels'} 
                    className={({ isActive }) => `link ${isActive ? 'active' : ''}`}
                >
                    <ICONS.Channels className="icons-header"/>
                </NavLink>
                <NavLink 
                    to = {'/community'} 
                    className={({ isActive }) => `link ${isActive ? 'active' : ''}`}
                >
                    <ICONS.Community className="icons-header"/>
                </NavLink>
            </div>
            <div className="settings-profile">
                <NavLink 
                    to = {'/settings'} 
                    className={({ isActive }) => `link ${isActive ? 'active' : ''}`}
                >
                    <ICONS.Settings className="icons-header"/>
                </NavLink>
                <NavLink 
                    to = {'/profile'} 
                    className={({ isActive }) => `link btn_img ${isActive ? 'active' : ''}`}
                >
                    <img src="/images/profile-photo.jpg" alt="profile-photo"/>
                </NavLink>
            </div>
        </header>
    )
}

export default Header 
