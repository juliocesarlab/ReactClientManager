import Modal from 'react-modal';

import { useModal } from '../../Hooks/useModal.jsx'
import { useClients } from '../../Hooks/useClients.jsx'
import style from './style.css'

import { useToggleButton } from '../../Hooks/useToggleButton.jsx'

import { useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { app } from '../../services/axios.js';
import { inputsCheck } from '../../services/inputsCheck.js'
import { orderArr } from '../../services/orderArr.js'

import { ToggleButton } from '../ToggleButton/ToggleButton.jsx';
import { useEffect } from 'react/cjs/react.production.min';

Modal.setAppElement('#root');

export const FormModal = () => {  
  
  const [name, setName] = useState('')
  const [cel, setCel] = useState('')
  const [city, setCity] = useState('')

  const { clients, setClients } = useClients()
  const { toggleValue, setToggleValue } = useToggleButton()

  const {
    modalIsOpen, 
    closeModal, 
    role,
    setModalTitle,
    modalTitle,
    clientModalId,
    clientModalName,
    clientModalCel,
    clientModalCity,
    clientModalDisabled 
  } = useModal()

   function celMask(e) {
    
    let typed =  e.target.value
    typed = typed.replace(/(^\d{2})(\d)/, "($1) $2");
    typed = typed.replace(/(\d{1})(\d{4})(\d{4}$)/, "$1 $2-$3");

    setCel(typed)
  }

  async function afterOpenModal() {
    if (role === 'edit') {
      setName(clientModalName)
      setCity(clientModalCity)
      setCel(clientModalCel)
      setToggleValue(!clientModalDisabled)
    } else {
      setName('')
      setCity('')
      setCel('')
      setToggleValue('')
    }
 
  }

  async function handleAddClient() {
    try {
      const response = await app.post('client/create', {
        name,
        cel,
        city
      })

      const { data } = response
      const { id } = data
      
      const orderedClients = orderArr([...clients, {id, name, cel, city}])
      
      setClients(orderedClients)

      toast.success("Cliente cadastrado !")
      }catch(err) {
        toast.error("Cliente já cadastrado!")
        console.log(err)
      }
  }

   async function handleEditClient() {
    

      const id = clientModalId
      try {
        await app.put('client/edit', {
         id,
         name,
         cel,
         city,
         disabled: !toggleValue
      }
    )

    const filteredClients = clients.filter(client => client.id !== id)
    
    const addedClient = toggleValue 
    ? [...filteredClients, {id, name, cel , city}]
    : [...filteredClients]
    const orderedClients = orderArr(addedClient)

    setClients(orderedClients)
    setModalTitle(name)
    closeModal()

    toast.success("Cliente alterado !")
    }catch(err) {
      toast.error("Erro, contate o administrador")
      console.log(err)
    }
  }

  async function handleSubmit(){
    const allFieldsFilled  = inputsCheck([name, cel, city])

    if (!allFieldsFilled) {
      toast.warning("Preencha todos os campos")
      return
    }

    if (role === 'add') handleAddClient()
    else handleEditClient()
  }

  return (
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
        className="Modal"
      >
        <div className="heading">
          <h2>{modalTitle}</h2>
          <button onClick={closeModal}><i className="fas fa-times"></i></button>
        </div>
        <form>
          
          <div className="input-control">
            <label htmlFor="nome">Nome*</label>
            <input type="text" 
              id="nome" 
              placeholder='Nome' 
              
              value={name}
              onChange={(e) => setName(e.target.value)}
              />  
          </div>

          <div className="input-control">
            <label htmlFor="celular">Celular*</label>
            <input type="text"  
              id="celular" 
              placeholder='(34) 9 9999-9999' 
              maxLength='15'
              value={cel}
              onChange={(e) => celMask(e)}
              />
          </div>
         
         <div className="input-control">
          <label htmlFor="cidade">Cidade*</label>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option defaultValue>Escolha uma cidade</option>
              <option value="Uberaba">Uberaba</option>
              <option value="Belo Horizonte">Belo Horizonte</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Brasilia">Brasilia</option>
              <option value="Curitiba">Curitiba</option>
              <option value="Curitiba"></option>
            </select>
          </div>
          {role === 'edit' && (
            <>
              <div className="input-control">
              <label>Cliente ativo ?</label> 
              <ToggleButton className={toggleValue ? 'active' : ''}/>
              </div>
            </>
          )}
          <button type='submit' onClick={() => handleSubmit()}>Enviar</button>
        </form>
      </Modal>
  )
}