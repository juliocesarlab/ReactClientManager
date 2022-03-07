import { Navbar } from "./components/Navbar/Navbar"
import {ClientsListpage} from "./pages/ClientListPage/ClientsListPage"

import { ModalContextProvider } from "../src/Contexts/modalProvider.jsx"
import {ClientsContextProvider} from '../src/Contexts/clientsProvider.jsx'
import {ToggleButtonContextProvider} from '../src/Contexts/toggleButtonProvider.jsx'

import { FormModal } from '../src/components/Modal/FormModal.jsx'

import { ToastContainer} from 'react-toastify';

function App() {

  return (
    <>
      <ClientsContextProvider>
        <ModalContextProvider>
            <ToggleButtonContextProvider>
              <FormModal/>
            </ToggleButtonContextProvider>
            <Navbar />
            <ClientsListpage />
        </ModalContextProvider>
      </ClientsContextProvider>
      <ToastContainer/>
    </>
  )
}

export default App
