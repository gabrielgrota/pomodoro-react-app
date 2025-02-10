import React from 'react'

import '../styles/Title.css'

import imgLogo from '../img/logo.png'

export default function Title() {
  return (
    <div id="title-info">
        <img id="title-icon" src={imgLogo} alt="plant" />
        <h1 id="title-title">pomodoro timer</h1>
    </div>
  )
}
