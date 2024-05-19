import React from "react";
import './Footer.css'
import imgGitHub from './github.png'

function Footer(){
    return <div id="footer-main">
        <p id="footer-p">by</p>
        <img id="footer-icon" src={imgGitHub} alt="" />
        <a id="footer-link" target='_blank' rel="noreferrer" href='https://github.com/gabrielgrota/pomodoro-react-app'>/gabrielgrota</a>
    </div>
}

export default Footer;