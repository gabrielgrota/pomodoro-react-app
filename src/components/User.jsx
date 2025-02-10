import React, { useState, useEffect } from 'react'
import ButtonIcon from './ButtonIcon'
import imgLogout from '../img/register.png'
import '../styles/User.css'

export default function User(props) {

  const EmailDisplay = ({ email }) => {
    const [username, setUsername] = useState("");

    useEffect(() => {
      const fetchUsername = async () => {
        if (!email) return;

        await new Promise((resolve) => setTimeout(resolve, 1));
        setUsername(email.split("@")[0]);
      };

      fetchUsername();
    }, [email]);

    return <p id="user-name">{username}</p>;
  };

  /* // mostrar apenas o nome
  const EmailDisplay = ({ email }) => {
    const username = email.split("@")[0];

    return <p>{username}</p>;
  } */

  return (
    <div id='user-main'>
      <EmailDisplay email={props.userEmail} />
      {/* {props.userEmail} */}
      <ButtonIcon icon={imgLogout} onClickFunction={props.onClick}>Logout</ButtonIcon>
    </div>
  )
}
