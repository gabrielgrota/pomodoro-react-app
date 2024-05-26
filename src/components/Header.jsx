import React from "react";
import '../styles/Header.css'
import imgTimer from '../img/timer.png'

function Header(){
    return (
        <div id="header-main">
            <img id="header-icon" src={imgTimer} alt="" />
            <h1 id="header-title">pomodoro timer</h1>
        </div>
    )
}

export default Header;