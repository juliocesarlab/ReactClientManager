import { BsToggleOff , BsToggleOn } from 'react-icons/Bs'
import { useToggleButton } from '../../Hooks/useToggleButton.jsx'
import './styles.css'


export const ToggleButton = () => {
  
  const { toggleValue, setToggleValue } = useToggleButton()

  return (
    <div onClick={() => setToggleValue(!toggleValue)} className='toggleBtn'>
      { toggleValue ? <BsToggleOn/>  : <BsToggleOff/> }
    </div> 
  )
}