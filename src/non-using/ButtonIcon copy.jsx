// antigo, não sendo usado, apenas mantive a lógica salva

import React from "react";
import '../styles/ButtonIcon.css'

/* padronizar os botões com ícone, função, nome e se está ativo ou não. */

function ButtonIcon({ href, className, function: onClickFunction, icon, disabled }) {
    const handleClick = (e) => {
        if (onClickFunction) {
            e.preventDefault(); // Impede a navegação para permitir que a função execute primeiro
            onClickFunction(); // chama o onclick se fornecido
        } else if (href) {
            // Abre o link em uma nova aba caso não haja função
            window.open(href, '_blank');
        }
    }

    return (
        <a href={href || '#'} target="_blank" rel="noopener noreferrer">
            <button 
                className={className} 
                id="button-icon-main" 
                onClick={handleClick}
                disabled={disabled}
            >
                <img id="button-icon-icon" src={icon} alt="icon" />
            </button>
        </a>
    )
}

export default ButtonIcon;