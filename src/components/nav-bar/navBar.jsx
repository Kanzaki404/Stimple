import React from 'react'
import Hamburger from '../../assets/button.svg'
import {Button} from 'semantic-ui-react'
import Logout from '../../assets/technology.svg'

export default function NavBar() {
    return (
        <div>
        <header className='navbar'>
            <div className='nav-wrapper'>
            <img className='menu-btn' src={Hamburger} alt="menu"/>
            <h1>Stimple</h1>


            </div>
            <div className='logged-in'>
                <p>Student: Bill Gates</p>
            </div>
            <Button className='logout-btn'><img src={Logout} alt="logout"/></Button>
        </header>
            </div>
    )
}


