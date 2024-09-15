import React from "react";
import '../styles/ButtonIcon.css'

/* padronizar os botões com ícone, função, nome e se está ativo ou não. */

function ButtonIcon(props){
    return (
        <a href={props.href} target="_blank">
            <button className={props.className} id="button-icon-main" onClick={props.function} disabled={props.disabled}>
                <img id="button-icon-icon" src={props.icon} alt="icon" />
            </button>
        </a>
    )
}

export default ButtonIcon;