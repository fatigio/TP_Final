import React, {useContext, useState} from 'react'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import { Route, Routes, Navigate } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import './App.css'
import ChannelScreen from './Screens/ChannelScreen/ChannelScreen'
import StoryScreen from './Screens/StoryScreen/StoryScreen'
import CommunityScreen from './Screens/CommunityScreen/CommunityScreen'
import SettingsScreen from './Screens/SettingsScreen/SettingsScreen'
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen'
import PrincipalScreen from './Screens/PrincipalScreen/PrincipalScreen'
import UserProfileScreen from './Screens/UserProfileScreen/UserProfileScreen'
import './index.css'

const App = () => {

  /* Renderizen una lista de mensajes, cada mensaje sera un componente llamado <Message/> y la lista (el map) debe estar en componente llamado <MessageList/> */
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/contacts" />} />

      <Route path="/" element={<PrincipalScreen />}>
        <Route path="contacts" element={<ContactScreen />}>
          <Route path=":contact_id/messages" element={<ChatScreen />}/>
          <Route path=':contact_id/profile' element={<ProfileScreen />} />
        </Route>

        <Route path="stories" element={<StoryScreen />} />
        <Route path="channels" element={<ChannelScreen />} />
        <Route path="community" element={<CommunityScreen />} />
        <Route path="settings" element={<SettingsScreen />} />
        <Route path="profile" element={<UserProfileScreen />} />
      </Route>
    </Routes>
  )
}


export default App
