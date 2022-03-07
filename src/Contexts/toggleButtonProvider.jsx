import { useState, createContext } from 'react'

export const ToggleButtonContext = createContext(false)

export const ToggleButtonContextProvider = ({children}) => {
  const [toggleValue, setToggleValue] = useState(true)

  return(
    <ToggleButtonContext.Provider value={{toggleValue, setToggleValue}}>
      {children}
    </ToggleButtonContext.Provider>
  )
}
