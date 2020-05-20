import React from 'react';
import {Button, Icon, Modal} from 'semantic-ui-react';
import {useSelector} from "react-redux"


export default function Courses () {
    const currentCourseData = useSelector(state=>state.courses.currentCourseData)
   

    const descr = currentCourseData.map((e)=>
    <p className="assign-detail">
        
    {e.description}
     </p>
  )
    const detailBtn =  <Button className="infoBtn"><Icon name="info"/>Detail</Button>
    const modal = 
    <Modal trigger={detailBtn} centered={false}>
    <Modal.Header>Assignment # Details:</Modal.Header>
    <Modal.Content>
       {descr}

        <p className="links"> Links:
            <div>
                <a href="http://" target="_blank" rel="noopener noreferrer">PDF Link</a>
            </div>
        </p>
    </Modal.Content>
  </Modal>
    let assignSplice = [...currentCourseData]
    assignSplice.splice(0,1);
    const assignments =  assignSplice.map((e)=>
    <div className ="courses-cards" key={e.assigName}>

            <div className="upper-items">
                <h2>{e.assigName}</h2>
            </div>
            <div className="lower-items">
                <p>Deadline {e.deadline }</p>
                <div className="button-group">

                <Button className="editBtn"><Icon name="edit"/>Edit</Button>
                {modal}
                </div>
            </div>
        </div>
    
    
    
    )
    

    return (
        <div>
                {assignments}
        </div>

    )

}