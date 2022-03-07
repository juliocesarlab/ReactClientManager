import { CardsContainer, ListHeading } from './style.js'
import { ClientCard } from '../../components/ClientCard/ClientCard'

import { useState, useEffect,useContext } from 'react';
import { ClientsContext } from '../../Contexts/clientsProvider.jsx';


export const ClientsListpage = () => {
  
  const {clients, setClients} = useContext(ClientsContext)
  const[search, setSearch] = useState([...clients])
  
  const[searchInput, setSearchInput] = useState('')

  useEffect(async () => {
    if (searchInput == '' || !searchInput) setClients(clients)
    const clientsSearch = clients.filter(
      client => client.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    setSearch(clientsSearch)
  }, [searchInput])

  useEffect(async () => {
    setSearch(clients)
  }, [clients])
  
  return(
    <main className='container'>
      <ListHeading>
        <h1>Meus Clientes</h1>
        <input type="text" 
          value={searchInput} onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Procurando por algúem específico ?"
          />
      </ListHeading>
      <CardsContainer>
        {search && search.map(client => (
          <ClientCard key={client.id} id={client.id} name={client.name} cel={client.cel} city={client.city}/>
        ))}
      </CardsContainer>
    </main>
  )
}