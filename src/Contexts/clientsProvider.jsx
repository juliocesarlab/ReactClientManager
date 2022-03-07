import { useState, useEffect, createContext} from 'react'
import { app } from '../services/axios';

export const ClientsContext = createContext(0)

export const ClientsContextProvider = ({children}) => {

  const [clients, setClients] = useState([]);
  
  useEffect(async () => { 
    const response = await app.get('/clients')
    const { data } = response;
    setClients(data)
  }, [])

  return (
    <ClientsContext.Provider value={{clients, setClients}}>
      {children}  
    </ClientsContext.Provider>
  )
}
