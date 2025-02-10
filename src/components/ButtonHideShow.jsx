import React, { useState } from 'react';
import ButtonIcon from './ButtonIcon';

export default function ButtonHideShow(props) {

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    // pegar estado/evento do botão 
    const handleChange = (e) => {
        setIsButtonClicked(!isButtonClicked);
    }

    /* //fazer função que pega o componente e retorna como div
    if (isButtonClicked) {
        console.log("aparecendo")
    } else {
        console.log("escondido")
    } */

    return (
        <div>
            <ButtonIcon icon={props.icon} onClickFunction={handleChange}> {/* botão */}
                Show or Hide {props.name}
            </ButtonIcon>
            {
                isButtonClicked ?
                <div>
                    {props.component}
                </div> : <></>
            }
        </div>
    )
}
