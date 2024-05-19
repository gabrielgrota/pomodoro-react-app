import React, { useState, useEffect } from 'react';
import Button from './components/button/Button';
import './components/timer/Timer.css'
/* icons from buttons */
import imgPlay from './img/play.png';
import imgPause from './img/pause.png';
import imgReset from './img/reset.png';
import img25min from './img/25min.png';
import img5min from './img/5min.png';

function Timer(){
    
    const workTime = 25 * 60;
    const breakTime = 5 * 60;
    // count é a variavel principal. onde irá ter o valor
    const [count, setCount] = useState(workTime);

    // se o timer está ativo ou não
    const [isActive, setIsActive] = useState(false);

    // para alterar o estado enquanto for workTime e breakTime
    const [isWorkTime, setIsWorkTime] = useState(true);

    /* function */
    useEffect(() => {
        // declaramos uma variável timer que será usada para armazenar o identificador do intervalo
        let timer;

        // se estiver ativo e maior que zero, tire um segundo
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

    // inicia ao timer
    const startTimer = () => {
        setIsActive(true);
    }

    // pausa ao timer
    const pauseTimer = () => {
        setIsActive(false);
    }

    // reseta o timer para 25
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

    // muda o count para 25min
    const setTo25min = () => {
        setIsActive(false);
        setCount(25*60);
        setIsWorkTime(!isWorkTime);
    }

    // muda o count para 5min
    const setTo5min = () => {
        setIsActive(false);
        setCount(5*60);
        setIsWorkTime(!isWorkTime);
    }

    return (
        <div id='timer-main'>
            <div id='timer-header'>
                {/* aqui ficará o timer */}
                <h1 id='timer-count'>{formatTime(count)}</h1>
                <h2 id='timer-workTime'>{isWorkTime ? 'work' : 'break'}</h2>
            </div>

            <div>
                <div id='timer-btn-play'>
                    <Button icon={imgReset} function={resetTimer} name="reset"></Button>
                    <Button icon={imgPlay} function={startTimer} name="start" disabled={isActive}></Button>
                    <Button icon={imgPause} function={pauseTimer} name="pause" disabled={!isActive}></Button>
                </div>

                <div id='timer-btn-set'>
                    <Button icon={img25min} function={setTo25min} name="25 min"></Button>
                    <Button icon={img5min} function={setTo5min} name="5 min"></Button>
                </div>
            </div>
        </div>
    )
}

export default Timer;