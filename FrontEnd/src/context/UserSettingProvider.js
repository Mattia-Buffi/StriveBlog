import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const UserSetting=createContext(null)
export default function UserSettingProvider({children}){
    
    let remenberLog=localStorage.getItem("userLog")
    if(remenberLog) remenberLog=JSON.parse(remenberLog)
    const [userSetting,setUserSetting]=useState(remenberLog)
    
    const value={userSetting,setUserSetting}
    //verifica del local storage
    return(
        <UserSetting.Provider value={value}>
            {children}
        </UserSetting.Provider>
    );
}