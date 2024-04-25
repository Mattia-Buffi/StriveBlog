import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const UserSetting=createContext(null)
export default function UserSettingProvider({children}){
    
    const textUser={
        nome: 'Mattia',
        cognome: 'Bfhh',
        avatar:'https://res.cloudinary.com/dmskelaj2/image/upload/v1713803537/authors/mattia.png'
    };
    
    const [userSetting,setUserSetting]=useState(textUser)
    const value={userSetting,setUserSetting}
    return(
        <UserSetting.Provider value={value}>
            {children}
        </UserSetting.Provider>
    );
}