import React, {useState} from 'react'
import { Button, Header, Icon, Modal,Progress, Dropdown } from 'semantic-ui-react'
export default function Students({sendData}) {
    const [percent, setPrecent] = useState(0)
    const [incr ,setInc] = useState(0)
    const [modalState, setModalState] = useState(false)
    const detailButton = <Button onClick={()=> setModalState(true)}>Test</Button>
    function testIncrement(inc){
        setPrecent(inc)
        setInc(incr+1)
        console.log(percent)
    }
    const options = [
        { key: 1, text: 'IG', value: 1 },
        { key: 2, text: 'G', value: 2 },
        { key: 3, text: 'VG', value: 3 },
      ]
    return (
        <div className='course-comp'>
           <h2>{sendData}</h2>
           <div className="low-items">
            <div className="modal-grades">
            <Modal 
            className="modal-title"
            trigger={detailButton}
            basic size='small'
            open={modalState}
            onClose={modalState}>

                <Header icon='tag' content='JavaScript 1' />
                <hr/>
                <Modal.Content>
                    <div className="item-grade">
                        <div className="grade">
                        <p>Assignment 1</p>
                        <Dropdown  options={options} selection />
                        </div>
                        <div className="grade">
                        <p>Assignment 2</p>
                        <Dropdown clearable options={options} selection />
                        </div>
                        <div className="grade">
                        <p>Assignment 3</p>
                        <Dropdown clearable options={options} selection />
                        </div>
                    </div>
                    <div className="final-grade">
                        <p>Final Grade</p>
                        <Dropdown clearable options={options} selection />
                    </div>
                {/* <p>
                    Your inbox is getting full, would you like us to enable automatic
                    archiving of old messages?
                </p> */}
                </Modal.Content>
                <Modal.Actions>
                <Button basic color='red' inverted onClick={()=>setModalState(false)}>
                    <Icon name='remove' /> Cancel
                </Button>
                <Button color='green' inverted  onClick={()=> setModalState(false)}>
                    <Icon name='checkmark' /> Confirm
                </Button>

                </Modal.Actions>
            </Modal>
            </div>
           
            <p>Assignment: {incr}/3</p>
           <Progress className='prog-bar' active percent={percent} indicating />
           </div>
        </div>
    )
}
