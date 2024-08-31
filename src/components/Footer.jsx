import React from "react";
import '../styles/Footer.css'
import imgGitHub from '../img/github.png'
import Lofi from './Lofi'
import DateTime from "./DateTime";

function Footer(){
    return <div id="footer-main">
        <div id="footer-github">
            <DateTime />
            {/* <a id="footer-link" href="https://www.stu.ca/studentsuccess/pomodoro-technique/">/theTechnique</a> */}
        </div>
        <div id="footer-lofi">
            <Lofi />
        </div>
        <div id="footer-github">
            <p id="footer-p">by</p>
            <img id="footer-icon" src={imgGitHub} alt="" />
            <a id="footer-link" target='_blank' rel="noreferrer" href='https://github.com/gabrielgrota/pomodoro-react-app'>/grota</a>
        </div>
    </div>
}

export default Footer;