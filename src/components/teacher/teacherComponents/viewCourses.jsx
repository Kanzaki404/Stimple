import React,{useState} from 'react';
import Courses from './list/courses';
import {Input,Button, Icon, Modal} from 'semantic-ui-react';
/* import Calendar from 'react-calendar'; */
export default function ViewCourses() {
    const [date, setDate] = useState('2020-05-18')
    const [modalState, setModalState] = useState(false)

    function handler(e){
        console.log(e);
        setDate(e)
      }
    const addBtn = <Button color='blue' onClick={()=> setModalState(true)} className="addBtn"  ><Icon icon name="add"/>Add new Assignment</Button>
    const modalAddNew =
  <Modal
  trigger={addBtn}
  centered={false}
  open={modalState}
  onClose={modalState}

  >
  <Modal.Header>New Assignment:</Modal.Header>
  <Modal.Content>
     <div className="title">
         <h5>Title:</h5>
         <Input className="input-title"
                transparent
                // icon={{ name: 'search', link: true }}


            />
     </div>
     <div className="Desctiption">
         <h5>Description:</h5>
         <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
     </div>
     <div className="Deadline:">
         <h5>Deadline:</h5>
         <input type="date" value={date} className="date-style" onChange={(e)=>handler(e.target.value)}/>

     </div>
     <div className="button-group">
        <Button onClick={()=> setModalState(false)} inverted color='green' className="confirmBtn"><Icon Icon name="checkmark"/>Add</Button>
        <Button onClick={()=> setModalState(false)} className="cancelBtn"><Icon Icon name="cancel"/>Cancel</Button>
     </div>

  </Modal.Content>
</Modal>
    return (
        <div className="view-courses">
            <div className="course-info">
                <div className="course-info-up">
                <h1>Javascript</h1>
                {modalAddNew}
                </div>
                <hr/>
            </div>
            <div className="course-list-container">
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
            </div>


        </div>
    )

}
