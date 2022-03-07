import {useContext} from 'react'
import { ModalContext } from '../Contexts/modalProvider'

export const useModal = () => useContext(ModalContext)