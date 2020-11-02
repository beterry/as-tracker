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
                <button>Home</button>
                <button>Clients</button>
                <button>Reports</button>
                <button>Admin</button>
                <button>Log out</button>
            </div>
        </header>
    )
}
