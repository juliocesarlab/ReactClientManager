import { useState, createContext, useContext} from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const ModalContext = createContext()

export const ModalContextProvider = ({children}) => {

  const [modalIsOpen, setIsOpen] = useState(false);

  const [modalTitle, setModalTitle] = useState('');
  const [clientModalId, setClientModalId] = useState();
  const [role, setRole] = useState('');

 
  function openModal(modalInfo) {
    if (modalInfo) {
      const {
        id,
        name,
        cel,
        city,
        role,
        roleMessage,
      } = modalInfo

      setClientModalId(id)
      setRole(role)
      setModalTitle(roleMessage)
    }
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider value={{modalIsOpen, setIsOpen, openModal, closeModal, setModalTitle, modalTitle, role, clientModalId}}>
      {children}  
    </ModalContext.Provider>
  )
}

