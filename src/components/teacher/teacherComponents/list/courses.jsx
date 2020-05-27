import React, { useState, useEffect } from "react";
import { Button, Icon, Modal, Input,Label } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { actions } from "../../../../features/reduxData";

export default function Courses() {
  const dispatch = useDispatch();

  const currentCourseData = useSelector(
    (state) => state.courses.currentCourseData
  );
  const getID = useSelector((state) => state.courses.currentID);
  const currentCourseName =  useSelector((state) => state.courses.currentCourseName);
  const currentCourseAssignments =  useSelector((state) => state.courses.currentCourseData);
  const testArr = useSelector((state) => state.courses.courses);
  const [change, setChange] = useState(false)
  const [modalState, setModalState] = useState(false);
  const [input, setInput] = useState("");
  const [desInput, setDesInput] = useState("");
  const [date, setDate] = useState("");
  const errorMessageTitle = <Label basic color='red' pointing='below' >Please enter a Title longer than 3 characters</Label>
  const errorMessageDescription = <Label basic color='red' pointing='below' >Please enter a Descripting longer than 20 characters</Label>


     useEffect(() => {
      setChange(false)
         console.log('courses re-rendered')
     }, [change])


  function handler(e) {
    setDate(e);
  }


const [selectedIndex, setSelectedIndex] = useState(0)
  const options = [
    { key: 'delete', icon: 'delete', text: 'Remove Assignment', value: 'delete' }

  ]


  let assignSplice = [...currentCourseData];
  assignSplice.splice(0, 1);

  const assignments = assignSplice.map((e, index) => (
    <div className="courses-cards" key={e.assigName}>
      <div className="upper-items">
        <h2>{e.assigName}</h2>
      </div>
      <div className="lower-items">
        <p>Deadline {e.deadline}</p>
        <div className="button-group">

          <Modal
            trigger={
              <Button className="infoBtn">
                <Icon name="info" />
                Detail
              </Button>
            }
            centered={false}
            closeIcon
          >
            <Modal.Header>{e.assigName} Details:</Modal.Header>
            <Modal.Content>
              <p className="assign-detail">{assignSplice[index].description}</p>
              <p className="links">
                {" "}
                Links:
                <div>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    PDF Link
                  </a>
                </div>
              </p>
            </Modal.Content>
          </Modal>

          <Modal
      trigger={<Button onClick={() => defaultValue(assignSplice[index].assigName, assignSplice[index].description,assignSplice[index].deadline,index) }>Edit</Button>}
      centered={false}
      open={modalState}
      onClose={() => setModalState(false)}
    >
      <Modal.Header>New Assignment:</Modal.Header>
      <Modal.Content>
        <div className="title">
          <h5>Title:</h5>
          {input.length < 3 && input.length > 0? errorMessageTitle : null} 
          <Input
            className="input-title"
            transparent
            placeholder="Search Students..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="Desctiption">
          <h5>Description:</h5>
          {desInput.length < 20 && desInput.length > 0? errorMessageDescription : null} 
          <textarea
            value={desInput}
            onChange={(e) => setDesInput(e.target.value)}
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>
        </div>
        <div className="Deadline:">
          <h5>Deadline:</h5>
          <input
            type="date"
            value={date}
            className="date-style"
            onChange={(e) => handler(e.target.value)}
          />
        </div>
        <div className="button-group">
          <Button
           disabled={input.length < 3 || desInput.length < 20}
            onClick={() => editAction()}
            inverted
            color="green"
            className="confirmBtn"
          >
            <Icon name="checkmark" />
            Edit
          </Button>
          <Button onClick={() => setModalState(false)} className="cancelBtn">
            <Icon name="cancel" />
            Cancel
          </Button>
        </div>
      </Modal.Content>
    </Modal>
          <Button color="red" onClick={()=>del(getID,currentCourseName,currentCourseAssignments,e,dispatch,setChange)}>Delete</Button>
        </div>
      </div>
    </div>
  ));

  function defaultValue(title,des,deadline,index){
    setModalState(true)
    setDesInput(des)
    setInput(title)
    handler(deadline)
    setSelectedIndex(index)
  }

  function editAction(){
    // -> get data id coursename and assignments  - Done!
    // -> get data title,des and date             - Done!
    // -> change selected assignment to new value - Done!
    // -> update Api                              - Done!
    // -> update redux                            - Done!
    setModalState(false)
    let assignmentToBeEddited = {assigName:input,description:desInput,deadline:date }
    let tempAssig = [...currentCourseAssignments]
    tempAssig.splice([selectedIndex+1],1)  
    tempAssig.push(assignmentToBeEddited)

    axios.put("https://jsonbox.io/RP_DD_Coders_Student_Portal1/" + getID, {courseName:currentCourseName, assignments:tempAssig})
  .then(response => {
    console.log(response)
    setChange(true)
    dispatch(actions.addAssig(tempAssig))
  })
  .catch(e => console.log(e))
  }
  return <div>{assignments}</div>;
}


function del(id,courseName,assignments,toBeRemovedElement,dispatch,setChange){
  // -> get id of course(get Course)                Done!
  // -> get current course name                     Done!
  // -> get list asssignment of specific course     Done!
  // -> get element to be removed                   Done!
  // -> remove element from assignment list         Done!
  // -> update api                                  Done!
  // -> update Redux                                Done!
  let tempAssig = [...assignments];
  tempAssig = tempAssig.filter(el => el.assigName !== toBeRemovedElement.assigName);


  axios.put("https://jsonbox.io/RP_DD_Coders_Student_Portal1/" + id, {courseName:courseName, assignments:tempAssig})
  .then(response => {
    console.log(response)
    setChange(true)
    //getList(dispatch,courseName)
    dispatch(actions.addAssig(tempAssig))
  })
  .catch(e => console.log(e))

}

