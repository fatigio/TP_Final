import React from 'react'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import { Route, Routes, Navigate } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ChannelScreen from './Screens/ChannelScreen/ChannelScreen'
import StoryScreen from './Screens/StoryScreen/StoryScreen'
import CommunityScreen from './Screens/CommunityScreen/CommunityScreen'
import SettingsScreen from './Screens/SettingsScreen/SettingsScreen'
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen'
import UserProfileScreen from './Screens/UserProfileScreen/UserProfileScreen'
import MainScreen from './Screens/MainScreen/MainScreen'
import './index.css'
import ContactContextProvider from './Context/ContactContext'

const App = () => {

  /* Renderizen una lista de mensajes, cada mensaje sera un componente llamado <Message/> y la lista (el map) debe estar en componente llamado <MessageList/> */
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/contacts" />} />

      <Route path="/" element={<MainScreen />}>
        <Route path="contacts" element={<ContactScreen />}>
          <Route 
            path=":contact_id/messages" 
            element={
              <ContactContextProvider>
                <ChatScreen />
              </ContactContextProvider>
            }/>
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
