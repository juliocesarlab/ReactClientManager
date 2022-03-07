import { useState, createContext, useContext} from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const ModalContext = createContext()

export const ModalContextProvider = ({children}) => {

  const [modalIsOpen, setIsOpen] = useState(false);

  const [modalTitle, setModalTitle] = useState('');
  const [clientModalId, setClientModalId] = useState();
  const [clientModalName, setClientModalName] = useState();
  const [clientModalCel, setClientModalCel] = useState();
  const [clientModalCity, setClientModalCity] = useState();
  const [clientModalDisabled, setClientModalDisabled] = useState();
  const [role, setRole] = useState('');

 
  function openModal(modalInfo) {
    if (modalInfo) {
      const {
        id,
        name,
        cel,
        city,
        disabled,
        role,
        roleMessage,
      } = modalInfo

      //client modal data
      setClientModalId(id)
      setClientModalName(name)
      setClientModalCel(cel)
      setClientModalCity(city)
      setClientModalDisabled(clientModalDisabled)

      setRole(role)
      setModalTitle(roleMessage)
    }
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider value={
      {modalIsOpen,
       setIsOpen, 
       openModal, 
       closeModal,
       setModalTitle, 
       modalTitle, 
       role, 
       clientModalId,
       clientModalName,
       clientModalCel,
       clientModalCity,
       clientModalDisabled
       }}>
      {children}  
    </ModalContext.Provider>
  )
}

