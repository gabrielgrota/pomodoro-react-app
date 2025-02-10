import React, { useState } from 'react'

import '../styles/CustomTimer.css'

import Button from './Button'

const CustomTimer = ({ onApply }) => {
    const [customMinutes, setCustomMinutes] = useState(0);

    const handleApply = () => {
        const totalSeconds = parseInt(customMinutes) * 60;
        if (totalSeconds > 0) {
            onApply(totalSeconds);
        } else {
            alert("Invalid value.")
        }
    };

    return (
        <div id="custom-main">
            <label id='custom-label'>
                minutes:
                <input
                    id='custom-input'
                    type='number'
                    value={customMinutes}
                    onChange={(e) => setCustomMinutes(e.target.value)}
                    min="0"
                />
            </label>
            <Button name="apply" function={handleApply} />
        </div>
    );
;}

export default CustomTimer;