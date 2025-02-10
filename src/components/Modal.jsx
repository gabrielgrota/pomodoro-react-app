import React, { useState } from "react";
import '../styles/Modal.css'
import Button from './Button'
import ButtonIcon from './ButtonIcon'
import imgOpen from '../img/open.png'
import imgClose from '../img/close.png'

export default function Modal(props){

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    if(modal){
        document.body.classList.add('modal-active');
    } else {
        document.body.classList.remove('modal-active');
    }

    return (
        <div>
            <Button function={toggleModal} icon={imgOpen} name="custom" />

            {modal && (
                <div id="modal-main">
                    {/* overlay é para clicar fora da div e sair dela */}
                    <div onClick={toggleModal} id="modal-overlay"></div>
                    <div id="modal-content">
                        <div>{props.content}</div>
                        <ButtonIcon icon={imgClose} className="modal-close" onClickFunction={toggleModal} />
                    </div>
                </div>
            )}
        </div>
    )
}