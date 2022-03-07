import { useModal } from '../../Hooks/useModal.jsx';
import Logo from '../../assets/logo.png'

import {StyledNav} from './style.js'


export const Navbar = () => {

  function handleClientAdd() {
    const modalInfo = {
     role: "add",
     roleMessage: "Cadastrar"
    }
    openModal(modalInfo)
  }

  const { 
    openModal, 
    closeModal, 
  } = useModal()

  return (
    <StyledNav>
      <a href="#">
        <img src={Logo} alt="logo"/>
      </a>
      <div className="links">
          <a href="#" className="link" onClick={() => handleClientAdd()}>Cadastrar</a>
      </div>
    </StyledNav>
  )
}