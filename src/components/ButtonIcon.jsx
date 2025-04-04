import React from "react";
import '../styles/ButtonIcon.css'

/* padronizar os botões com ícone, função, nome e se está ativo ou não. */

function ButtonIcon({icon, onClickFunction}) {
    /* const handleClick = (e) => {
        if (onClickFunction) {
            e.preventDefault(); // Impede a navegação para permitir que a função execute primeiro
            onClickFunction(); // chama o onclick se fornecido
        } else if (href) {
            // Abre o link em uma nova aba caso não haja função
            window.open(href, '_blank');
        }
    } */

    return (
            <button id="button-icon-main" onClick={onClickFunction}>
                <img id="button-icon-icon" src={icon} alt="icon" />
            </button>
    )
}

export default ButtonIcon;