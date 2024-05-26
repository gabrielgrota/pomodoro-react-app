import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import imgChange from '../img/change.png'
import '../styles/CustomDuration.css'

function CustomDuration({ onSetDurations }){
    const [workDuration, setWorkDuration] = useState(25);
    const [breakDuration, setBreakDuration] = useState(5);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSetDurations(workDuration, breakDuration);
    }

    return (
        <form id="custom-container" onSubmit={handleSubmit}>
            <div id="custom-input">
                {/* work duration */}
                <Input
                    name="work time"
                    htmlFor="workDuration"

                    type={"number"} 
                    value={workDuration}
                    onChange={(e) => setWorkDuration(Number(e.target.value))}
                    min={'1'}
                />

                {/* break duration */}
                <Input 
                    name="break time"
                    htmlFor="breakDuration"

                    type="number" 
                    value={breakDuration}
                    onChange={(e) => setBreakDuration(Number(e.target.value))}
                    min="1"
                />
            </div>

            {/* submit */} {/* colocar função toggleModal no componente /Modal para fechar o modal quando fizer o update  */}
            <Button className="custom-update" icon={imgChange} type="submit" name="update"></Button>
        </form>
    );
}

export default CustomDuration;