import React from 'react'
import Hamburger from '../../assets/button.svg'

export default function NavBar() {
    return (
        <header className='navbar'>
            <div className='nav-wrapper'>
            <img className='menu-btn' src={Hamburger} alt="menu"/>
            <h1>Stimple</h1>


            </div>
        </header>
    )
}


