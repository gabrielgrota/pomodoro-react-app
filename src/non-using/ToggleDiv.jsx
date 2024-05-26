import React, { useState, useEffect } from "react";
import '../styles/ToggleDiv.css';
import Button from "./Button";
import imgDiv from '../img/div.png'

const ToggleDiv = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    // set show or hide
    const { condition1 } = props;
    const { condition2 } = props;

    const setCondition = (p) => {
        console.log('O valor do parâmetro é:', p);
    };

    useEffect(() => {
        setCondition(condition1);
        setCondition(condition2)
    }, [condition1, condition2]);

    let p1 = props.condition1;
    let p2 = props.condition2;

    return (
        <div id="toggleDiv-container">
            <Button icon={imgDiv} function={toggleVisibility} name={isVisible ? p1 : p2}></Button>
            {isVisible && (
                <div id="toggleDiv">
                    {/* em `content` é onde vai o seu código que quer esconder ou mostrar */}
                    {props.content}
                </div>
            )}
        </div>
    );
}

export default ToggleDiv;