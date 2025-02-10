import React from 'react';
import "../styles/Sidebar.css";
import ButtonIcon from './ButtonIcon';

/* icons em ordem da sidebar */
import IconUser from '../img/user.png'
import IconCustomTimer from '../img/custom.png'
import IconToDo from '../img/todo.png'
import IconLog from '../img/log.png'
import IconGitHub from '../img/github.png'
import IconLofi from '../img/lofi.png'

export default function Sidebar(props){

    return (
        <div id='sidebar-main'>
            {/* 
                function = função do botao
                icon = icone do botao
            */}
            <ButtonIcon icon={IconUser} />
            <ButtonIcon icon={IconCustomTimer} />

            <div id="header-theme">
                {props.buttonThemeContent}
            </div>

            <ButtonIcon icon={IconToDo} />
            <ButtonIcon icon={IconLog} />
            <ButtonIcon icon={IconLofi} />
            <ButtonIcon icon={IconGitHub} href="https://github.com/gabrielgrota/pomodoro-react-app" />

            {/* Renderiza o componente ativo no centro da tela
            <div className="center-content">
                {activeComponent}
            </div> */}
        </div>
    )
}