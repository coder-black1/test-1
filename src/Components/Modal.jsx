import React, { useState } from 'react'
import Modal1 from './Modal1'
import SearchWallet from './SearchWallet'
import Submit from './Submit'

const Modal = ({setOpen}) => {  
    const [element, setElement] = useState(0)
    const [wallet, setWallet] = useState({})
    const [td, setTd] = useState(0)

    const modals = [
        {
            element: <Modal1 setOpen={setOpen} next = {()=> {setElement(1)}} setTd={setTd} skip = {()=> setElement(2)} />
        },
        {
            element: <SearchWallet setWallet={setWallet} setOpen={setOpen} next = {()=> {setElement(2)}} td={td} back={()=> setElement(0)} />,
        },
        {
            element: <Submit wallet={wallet} setOpen={setOpen} back={()=> setElement(1)}/>
        }
    ]

    
  return (
    <div id="myModal" className="modal">
                 {/* Modal content */}
                {modals[element].element}
               
         </div> 
  )
}

export default Modal