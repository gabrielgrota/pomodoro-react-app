import React, { useState, useEffect } from 'react';
import '../styles/Timer.css'
import Button from './Button';
/* icons from buttons */
import imgPlay from '../img/play.png';
import imgReset from '../img/reset.png';
import img25min from '../img/25min.png';
import img5min from '../img/5min.png';
import { collection, addDoc, Timestamp } from 'firebase/firestore'; // Importa as funções do Firebase
import { db } from '../config/firebase';
import CustomTimer from "./CustomTimer";
import Modal from './Modal';

function Timer(){
    
    const [workDuration, setWorkDuration] = useState(25 * 60); // 25 minutos em segundos
    const [breakDuration, setBreakDuration] = useState(5 * 60); // 5 minutos em segundos

    // count é a variavel principal. onde irá ter o valor
    const [count, setCount] = useState(workDuration);

    // se o timer está ativo ou não
    const [isActive, setIsActive] = useState(false);

    // para alterar o estado enquanto for workTime e breakTime
    let [isWorkTime, setIsWorkTime] = useState("work");

    const [showCustomTimer, setShowCustomTimer] = useState(false);

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
    const toggleTimer = () => {
        setIsActive(!isActive);
        if (!isActive) saveTimestamp();
    }

    // reseta o timer para 25
    const resetTimer = () => {
        setIsActive(false);
        setCount(workDuration);
        setIsWorkTime("work");
    }

    // atualiza as durações de tempo
    /* const setDurations = (newWorkDuration, newBreakDuration) => {
        setWorkDuration(newWorkDuration * 60);
        setBreakDuration(newBreakDuration * 60);
        setCount(newWorkDuration * 60);
    } */

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

    const setTo10min = () => {
        setIsActive(false);
        setBreakDuration(10*60);
        setCount(10*60);
        setIsWorkTime(isWorkTime = 'break');
    }

    // som que toca quando acaba o timer
    const playSound = () => {
        const audio = new Audio('/crystalEcho.mp3');
        audio.play();
    }

    // salva timestamp para firebase
    const saveTimestamp = async () => {
        const timestamp = Timestamp.now();

        try {
            await addDoc(collection(db, 'pomodoroSessions'), {
                timestamp
            });
            console.log('timestamp saved sucessfully');
        } catch (e) {
            console.error('error saving timestamp: ', e)
        }
    };

    const applyCustomTimer = (totalSeconds) => {
        setIsActive(false);
        setCount(totalSeconds);
        setIsWorkTime(true);
        setShowCustomTimer(false);
    }

    return (
        <div id='timer-main'>
            <div id='timer-header'>
                {/* timer */}
                <h1 id='timer-count'>{formatTime(count)}</h1>
                <h2 id='timer-workTime'>{isWorkTime}</h2>
            </div>
           
            <div id='timer-btn-play'>
                <Button 
                    icon={imgPlay} 
                    function={toggleTimer} 
                    name={isActive ? 'pause' : 'start'}>
                </Button>
                <Button icon={imgReset} function={resetTimer} name="reset"></Button>
                {/* <Button icon={imgPause} function={pauseTimer} name="pause" disabled={!isActive}></Button> */}
            </div>

            <div id='timer-btn-set'>
                <Button icon={img25min} function={setTo25min} name="pomodoro"></Button>
                <Button icon={img5min} function={setTo5min} name="short break"></Button>
                <Button icon={img5min} function={setTo10min} /* set to 10 min */ name="long break"></Button>
            </div>

            {/* <div id='custom-timer'>
                <button onClick={() => setShowCustomTimer(!showCustomTimer)}>
                    {showCustomTimer ? 'Close' : 'Custom'}
                </button>
                {showCustomTimer && <CustomTimer onApply={applyCustomTimer} />}
            </div> */}
            
            {/* <Modal content={
            <div id='custom-timer'>
                <Button
                    function={() => setShowCustomTimer(!showCustomTimer)}
                    name={showCustomTimer ? 'close' : 'custom'}
                />
                {showCustomTimer && <CustomTimer onApply={applyCustomTimer} />}
            </div>}
            /> */}
        </div>
    )
}

export default Timer;