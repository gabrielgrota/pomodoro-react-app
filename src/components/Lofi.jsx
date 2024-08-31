import React, { useState } from "react";
import ButtonLofi from "./ButtonLofi";
import '../styles/Lofi.css'

function Lofi(){

    const [link, setLink] = useState("https://www.youtube.com/embed/jfKfPfyJRdk?si=66pfIH1r0gzTQkBt")

    const handleClick = (newLink) => {
        setLink(newLink);
    }

    return (
        <div>
            <div id="lofi-main">
                <iframe width='280' height='157.5' src={link} title="YouTube video player" frameBorder="0" referrerPolicy="strict-origin-when-cross-origin" key={link}></iframe>
            </div>
            <div id="lofi-buttons">
                <ButtonLofi function={() => handleClick('https://www.youtube.com/embed/jfKfPfyJRdk?si=66pfIH1r0gzTQkBt')} name="lofi" />
                <ButtonLofi function={() => handleClick('https://www.youtube.com/embed/MadEqVeRFuM?si=8aYTWIXIfj2V14Fd')} name="bossa" />
                <ButtonLofi function={() => handleClick('https://www.youtube.com/embed/MYPVQccHhAQ?si=yIMoRMEHPZjBWxX_')} name="jazz" />
            </div>
        </div>
    )
}

export default Lofi;