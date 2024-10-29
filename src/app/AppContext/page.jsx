"use client"
import { createContext, useState } from "react";
import Header from "../components/Header/page";

const Context = createContext();
const AppContext = (props)=> {
   

    const value = {
    
    }
    return (
         <Context.Provider value={value}>
            <Header/>
          {props.children}
         </Context.Provider>
    )
}


export default AppContext;
export {Context}