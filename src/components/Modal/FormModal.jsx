import Modal from 'react-modal';

import { useModal } from '../../Hooks/useModal.jsx'
import { useClients } from '../../Hooks/useClients.jsx'
import style from './style.css'

import { useToggleButton } from '../../Hooks/useToggleButton.jsx'

import { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { app } from '../../services/axios.js';
import { inputsCheck } from '../../services/inputsCheck.js'
import { orderArr } from '../../services/orderArr.js'

import { ToggleButton } from '../ToggleButton/ToggleButton.jsx';

Modal.setAppElement('#root');

export const FormModal = () => {  
  
  const [name, setName] = useState('')
  const [cel, setCel] = useState('')
  const [city, setCity] = useState('')

  const { clients, setClients } = useClients()
  const { toggleValue } = useToggleButton()

  const {
    modalIsOpen, 
    closeModal, 
    afterOpenModal,
    role,
    setModalTitle,
    modalTitle,
    clientModalId, 
  } =  useModal()

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

    const filteredClients = clients.filter(client => client.id != id && client.disabled === false)
    const addedClient = [...filteredClients, {id, name, cel , city}]
    console.log(addedClient)
    const orderedClients = orderArr(addedClient)

    setClients(orderedClients)
    setModalTitle("Edite "+name)
      
    

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
          
          <label htmlFor="nome">Nome*</label>
          <input type="text" 
            id="nome" 
            placeholder='Nome' 
            
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          <label htmlFor="celular">Celular*</label>
          <input type="text"  
            id="celular" 
            placeholder='(34) 9 9999-9999' 
            
            value={cel}
            onChange={(e) => setCel(e.target.value)}
            />
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
          {role === 'edit' && (
            <>
              <label>Cliente ativo ?</label> 
              <ToggleButton className={toggleValue ? 'active' : ''}/>
            </>
          )}
          <button type='submit' onClick={() => handleSubmit()}>Enviar</button>
        </form>
      </Modal>
  )
}