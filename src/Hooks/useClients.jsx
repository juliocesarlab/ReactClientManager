import { useContext} from 'react'
import { ClientsContext } from '../Contexts/clientsProvider'

export const useClients = () => useContext(ClientsContext)

