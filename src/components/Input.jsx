import React from "react";
import '../styles/Input.css'

function Input(props){
    return (
        <div id="input-container">
            <label id="input-label" htmlFor={props.htmlFor}>{props.name}</label>
            <input 
                id="input-main" 
                type={props.type} 
                value={props.value}
                onChange={props.onChange}
                min={props.min}
            />
        </div>
    )
}

export default Input;