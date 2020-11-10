import React from 'react'
import '../styles/App.scss'

import logo from '../images/ms-logo.svg';

export default function Header() {
    return (
        <header>
            <div className='logo'>
                <img src={logo} alt='Mail Shark' />
            </div>
            <div className='links'>
                <button onClick={(e) => e.preventDefault()}>Home</button>
                <button onClick={(e) => e.preventDefault()}>Clients</button>
                <button onClick={(e) => e.preventDefault()}>Reports</button>
                <button onClick={(e) => e.preventDefault()}>Admin</button>
                <button onClick={(e) => e.preventDefault()}>Log out</button>
            </div>
        </header>
    )
}
