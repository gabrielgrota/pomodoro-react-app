import React from "react";
import '../styles/Header.css'
import imgLogo from '../img/logo.png'
import ButtonHideShow from "./ButtonHideShow";
import Lofi from "./Lofi";
import iconLofi from "../img/lofi.png"

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
            <div id="header-buttons">
                <ButtonHideShow name="Lofi" icon={iconLofi} component={ <Lofi /> } />
            </div>
        </div>
    )
}

export default Header;