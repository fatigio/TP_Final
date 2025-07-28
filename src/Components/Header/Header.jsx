import React, { useState } from "react";
import './Header.css'
import { Link, useLocation, Outlet } from "react-router"
import ICONS from "../../constants/icons";

const Header = () => {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname)

    return (
        <header className="header">
            <div className="top-section">
                <Link 
                    to = {'/contacts'} 
                    onClick={() => setActive('/contacts')} 
                    className={`link ${active === '/contacts' ? 'activo' : ''}`}
                >
                    <ICONS.Chats className="icon"/>
                </Link>
                <Link 
                    to = {'/stories'} 
                    onClick={() => setActive('/stories')} 
                    className={`link ${active === '/stories' ? 'activo' : ''}`}
                >
                    <ICONS.Stories className="icon"/>
                </Link>
                <Link 
                    to = {'/channels'} 
                    onClick={() => setActive('/channels')} 
                    className={`link ${active === '/channels' ? 'activo' : ''}`}
                >
                    <ICONS.Channels className="icon"/>
                </Link>
                <Link 
                    to = {'/community'} 
                    onClick={() => setActive('/community')} 
                    className={`link btn_community ${active === '/community' ? 'activo' : ''}`}
                >
                    <ICONS.Community className="icon"/>
                </Link>
            </div>
            <div className="settings-profile">
                <Link 
                    to = {'/settings'} 
                    onClick={() => setActive('/settings')} 
                    className={`link ${active === '/settings' ? 'activo' : ''}`}
                >
                    <ICONS.Settings className="icon"/>
                </Link>
                <Link 
                    to = {'/contacts/0/profile'} 
                    onClick={() => setActive('/profile')} 
                    className={`link btn_img ${active === '/profile' ? 'activo' : ''}`}
                >
                    <img src="/images/profile-photo.jpg" alt="profile-photo"/>
                </Link>
            </div>
        </header>
    )
}

export default Header 