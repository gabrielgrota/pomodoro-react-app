import React, { useState, useEffect } from 'react';
import '../styles/Timer.css'
import Button from './Button';
import CustomDuration from './CustomDuration';
import Modal from './Modal';
/* icons from buttons */
import imgPlay from '../img/play.png';
import imgPause from '../img/pause.png';
import imgReset from '../img/reset.png';
import img25min from '../img/25min.png';
import img5min from '../img/5min.png';

function Timer(){
    
    const [workDuration, setWorkDuration] = useState(25 * 60); // 25 minutos em segundos
    const [breakDuration, setBreakDuration] = useState(5 * 60); // 5 minutos em segundos

    // count é a variavel principal. onde irá ter o valor
    const [count, setCount] = useState(workDuration);

    // se o timer está ativo ou não
    const [isActive, setIsActive] = useState(false);

    // para alterar o estado enquanto for workTime e breakTime
    let [isWorkTime, setIsWorkTime] = useState(true);

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
            // toca um som alertando que acabou o tempo work/break
            playSound();
            
            setIsWorkTime(!isWorkTime);
            setCount(isWorkTime ? breakDuration : workDuration);
            setIsActive(true); // reiniciar automaticamente o próximo período
        }
        return () => clearInterval(timer);
    }, [isActive, count, isWorkTime, breakDuration, workDuration]);

    // inicia ao timer
    const startTimer = () => {setIsActive(true);}

    // pausa ao timer
    const pauseTimer = () => {setIsActive(false);}

    // reseta o timer para 25
    const resetTimer = () => {
        setIsActive(false);
        setCount(workDuration);
        setIsWorkTime(true);
    }

    // atualiza as durações de tempo
    const setDurations = (newWorkDuration, newBreakDuration) => {
        setWorkDuration(newWorkDuration * 60);
        setBreakDuration(newBreakDuration * 60);
        setCount(newWorkDuration * 60);
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
        setWorkDuration(25*60);
        setCount(25*60);
        setIsWorkTime(isWorkTime = 'work');
    }

    // muda o count para 5min
    const setTo5min = () => {
        setIsActive(false);
        setBreakDuration(5*60);
        setCount(5*60);
        setIsWorkTime(isWorkTime = 'break');
    }

    // som que toca quando acaba o timer
    const playSound = () => {
        const audio = new Audio('/crystalEcho.mp3');
        audio.play();
    }

    return (
        <div id='timer-main'>
            <div id='timer-header'>
                {/* aqui ficará o timer */}
                <h1 id='timer-count'>{formatTime(count)}</h1>
                {/* <h2 id='timer-workTime'>{isWorkTime}</h2> */}
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

                    {/* personalizar timer */}
                    <Modal content={
                        <CustomDuration onSetDurations={setDurations} />
                    } />
                </div>
            </div>

            
        </div>
    )
}

export default Timer;