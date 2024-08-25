import React, {createContext, useEffect, useState} from "react";

//data 
import { roomData } from "../roomdata/data"; 

//  context 
export const RoomContext = createContext();

const RoomProvider = ({children}) => {
    console.log(roomData);
    return (
    <RoomContext.Provider value={'room context'}>
        {children}
    </RoomContext.Provider>
    );
};
 
export default RoomProvider;