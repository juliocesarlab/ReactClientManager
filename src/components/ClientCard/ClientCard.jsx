import { CardWrapper } from './style.js'

import { MdSmartphone, MdOutlineSort, MdOutlineDelete, MdEditRoad } from 'react-icons/md'
import { FaCity } from 'react-icons/fa'

import { useModal } from '../../Hooks/useModal.jsx'

export const ClientCard = ({id, name, cel, city, disable}) => {

  const { 
    modalIsOpen, 
    setIsOpen, 
    openModal, 
    closeModal, 
    afterOpenModal 
  } = useModal()

  function handleEditClient(){
    const modalInfo = {
      id,
      name,
      cel,
      city,
      disable,
      role: "edit",
      roleMessage: name
    }
    openModal(modalInfo)
  }

  return (
    <CardWrapper>
      <div className="heading">
        <h2>{name}</h2>
        <div>
          <span onClick={() => handleEditClient()}><MdOutlineSort/></span>
        </div>
      </div>
      <p>
        <span><MdSmartphone/></span> 
        {cel} 
      </p>
      <p>
        <span><FaCity/></span>
        {city}
      </p>
    </CardWrapper>
  )
}