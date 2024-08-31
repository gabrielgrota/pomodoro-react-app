import React from "react";
import '../styles/ButtonLofi.css'

function ButtonLofi(props){
    return (
        <button className={props.className} id="button-lofi-main" onClick={props.function} disabled={props.disabled}>
            <p id="button-lofi-name">{props.name}</p>
        </button>
    )
    
}

export default ButtonLofi;