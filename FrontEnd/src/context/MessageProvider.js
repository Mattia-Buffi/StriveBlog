import React, { useState } from 'react'
import { createContext } from 'react'

export const MessageUser=createContext(null)
export default function MessageProvider({children}) {
    const [messageUser,setMessageUser]=useState({show:true,msn:'prova',isok:true})
    const value={messageUser,setMessageUser}
  return (
    <MessageUser.Provider value={value}>{children}</MessageUser.Provider>
  )
}
