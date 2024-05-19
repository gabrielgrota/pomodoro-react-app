import React from "react";
import './Button.css'

/* padronizar os botões com ícone, função, nome e se está ativo ou não. */

function Button(props){
    return (
        <button id="button-main" onClick={props.function} disabled={props.disabled}>
            <img id="button-icon" src={props.icon} alt="icon" />
            <p id="button-name">{props.name}</p>
        </button>
    )
    
}

export default Button;