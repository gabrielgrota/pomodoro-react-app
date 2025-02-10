import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

import '../styles/Login.css'

import IconRegister from '../img/register.png'

import ButtonHideShow from './ButtonHideShow'
import Title from './Title'

export default function Login() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    /* const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []); */
    

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth, 
                registerEmail, 
                registerPassword
            );
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth, 
                loginEmail, 
                loginPassword
            );
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
    }

   /*  const logout = async () => {
        await signOut(auth);
    } */

    return (
        <div id='login-main'>

            <Title />
            
            <div id='login-container'>
                <h2>login</h2>
                <input 
                    type='email'
                    placeholder='email'
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }}
                />
                <input
                    type='password'
                    placeholder='password'
                    onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }}
                />
                <button onClick={login}>login</button>
            </div>
            
            <div id='register-container'>
            <p>don't have an account?</p>
            <ButtonHideShow 
                icon={IconRegister}
                component={
                    <div id='register-form'>
                        <h2>register User</h2>
                        <input
                            type='email' 
                            placeholder='email'
                            onChange={(event) => {
                                setRegisterEmail(event.target.value);
                            }}
                        />
                        <input 
                            type='password'
                            placeholder='password'
                            onChange={(event) => {
                                setRegisterPassword(event.target.value);
                            }}
                        />
                        <button onClick={register}>create user</button>
                    </div>
                } />
            </div>
        </div>
    )
}