import React,{useContext, useState} from 'react'
import { createContext } from 'react'
let Datacontext = createContext();



export const ContextProvider = ({children}) => {
    const [eventData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)

  return (
    <Datacontext.Provider value={{eventData, setEventData, loading, setLoading}}>
        {children}
    </Datacontext.Provider>
  )
}

export const useDataContext = ()=> useContext(Datacontext);