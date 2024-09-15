import React from "react";
import '../styles/Header.css'
import imgLogo from '../img/logo.png'

function Header(props){
    return (
        <div id="header-main">
            <div id="header-info">
                <img id="header-icon" src={imgLogo} alt="" />
                <h1 id="header-title">pomodoro timer</h1>
            </div>
            {/* <div id="header-theme">
                {props.buttonThemeContent}
            </div> */}
        </div>
    )
}

export default Header;