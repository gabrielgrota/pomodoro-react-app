import React, { useState, useEffect } from 'react';

function Timer(){
    
    const workTime = 25 * 60;
    const breakTime = 5 * 60;
    // count é a variavel principal. onde irá ter o valor.
    const [count, setCount] = useState(workTime);

    // se o timer está ativo ou não
    const [isActive, setIsActive] = useState(false);

    // para alterar o estado enuanto for workTime e breakTime
    const [isWorkTime, setIsWorkTime] = useState(true);

    /* function */
    useEffect(() => {
        // declaramos uma variável timer que será usada para armazenar o identificador do intervalo.
        let timer;

        // se estiver ativo e maior que zero, tire um segundo.
        if (isActive && count > 0) {
            timer = setInterval(() => {
                setCount(count => count - 1);
            }, 1000);
        } else if (count === 0) {
            setIsActive(false);
            setIsWorkTime(!isWorkTime);
            setCount(isWorkTime ? breakTime : workTime);
        }
        return () => clearInterval(timer);
    }, [isActive, count, isWorkTime, breakTime, workTime]);

    // dá inicio ao timer
    const startTimer = () => {
        setIsActive(true);
    }

    // dá pausa ao timer
    const pauseTimer = () => {
        setIsActive(false);
    }

    // reseta o timer a zero
    const resetTimer = () => {
        setIsActive(false);
        setIsWorkTime(true);
        setCount(workTime);
    }

    // formata o timer em minutos e segundos
    const formatTime = (count) => {
        const minutes = Math.floor(count / 60);
        const seconds = count % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    const setTo25min = () => {
        setIsActive(false);
        setCount(25*60);
        setIsWorkTime(!isWorkTime);
        
    }

    const setTo5min = () => {
        setIsActive(false);
        setCount(5*60);
        setIsWorkTime(!isWorkTime);
    }

    return (
        <div>
            <div>
                {/* aqui ficará o timer */}
                <h1>{formatTime(count)}</h1>
                <h2>{isWorkTime ? 'Work' : 'Break'}</h2>
            </div>

            <div>
                <div>
                    <button onClick={startTimer} disabled={isActive}>Start</button>
                    <button onClick={pauseTimer} disabled={!isActive}>Pause</button>
                    <button onClick={resetTimer}>Resetar</button>
                </div>

                <div>
                    <button onClick={setTo25min}>25 minutos</button>
                    <button onClick={setTo5min}>5 minutos</button>
                </div>
            </div>

            <p>by Grota</p>
        </div>
    )
}

export default Timer;