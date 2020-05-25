import React, {useState} from 'react'
import Hamburger from '../../assets/menu.svg'
import Logout from '../../assets/technology.svg'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import {useDispatch} from "react-redux"
import {actions} from '../../features/menu'
export default function NavBar({username}) {
    const [modalState, setModalState] = useState(false)

    const logOutButton = <Button onClick={()=>setModalState(true)} className='logout-btn'><img src={Logout} alt="logout"/></Button>


    function choice(){

        setModalState(false)
        window.location.reload();
    }
    const dispatch = useDispatch();
    return (
        <div className='navbar'>

            <div className='nav-wrapper'>
            <img onClick={()=>dispatch(actions.sideNavToggler(true))} className='menu-btn rotate' src={Hamburger} alt="menu"/>
            <h1>Stimple</h1>


            </div>
            <div className='logged-in'>
            <p>Logged in as: {username}</p>
            <Modal
            trigger={logOutButton}
            basic size='small'
            open={modalState}
            onClose={()=>setModalState(false)}>
                <Header icon='log out' content='You will be logged out, are you sure?' />
                <Modal.Content>
                {/* <p>
                    Your inbox is getting full, would you like us to enable automatic
                    archiving of old messages?
                </p> */}
                </Modal.Content>
                <Modal.Actions>
                <Button basic color='red' inverted onClick={()=>setModalState(false)}>
                    <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted  onClick={()=> choice()}>
                    <Icon name='checkmark' /> Yes
                </Button>
                </Modal.Actions>
            </Modal>
            </div>


            </div>
    )
}


