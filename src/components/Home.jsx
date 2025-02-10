import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase';
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import '../styles/Home.css'

import Timer from './Timer';
import Footer from './Footer';
import ButtonHideShow from './ButtonHideShow';
import User from './User';
import Lofi from "./Lofi";
import ToDoList from './ToDoList'


import IconGitHub from '../img/github.png'
import IconLofi from '../img/lofi.png'
import IconToDo from '../img/todo.png'
import IconLog from '../img/log.png'
import IconCustomTimer from '../img/custom.png'
import IconUser from '../img/user.png'
import Title from './Title';
import Modal from './Modal';    


export default function Home(props) {

    const handleLogout = async () => {
        signOut(auth);
    }

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
      
        return () => unsubscribe();
      }, []);

    return (
        <>
        <div id="container">
            <div id="header-main">

                {/* icon e title */}
                <Title />
                
                {/* buttons */}
                <div id="header-buttons">
                    {/* <ButtonHideShow name="GitHub" icon={IconGitHub} component={ 
                        <a 
                            target='_blank' 
                            rel="noreferrer"
                            href='https://github.com/gabrielgrota/pomodoro-react-app'>
                            Link
                        </a>
                        } 
                    /> */}
                    
                    {/* <ButtonHideShow name="Lofi" icon={IconLofi} component={ <Lofi /> } />
                    <ButtonHideShow name="ToDo" icon={IconToDo} component={ <ToDoList /> } />
                    <ButtonHideShow name="Log" icon={IconLog} component={ <p>Sem componente</p> } />
                    <ButtonHideShow name="Custom" icon={IconCustomTimer} component={ <p>Sem componente</p> } /> */}
                    {/* <ButtonHideShow name="User" icon={IconUser} component={ <User userEmail={user?.email} onClick={handleLogout} /> } /> */}
                    <User userEmail={user?.email} onClick={handleLogout} />
                    <div id="header-theme">
                        {props.buttonThemeContent}
                    </div>
                    {/* <Modal content="content" /> */}
                </div>
        
            </div>
            <Timer />
            <Footer />
        </div>
        </>
    )
}
