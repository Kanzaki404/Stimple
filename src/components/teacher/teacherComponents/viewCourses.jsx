import React, { useState, useEffect } from "react";
import Courses from "./list/courses";
import { Input, Button, Icon, Modal } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../features/reduxData";
import axios from "axios";
export default function ViewCourses({copyComp}) {
  const dispatch = useDispatch();
  const APIurl = "https://jsonbox.io/RP_DD_Coders_Student_Portal1/";
  const [date, setDate] = useState("2020-05-18");
  const [modalState, setModalState] = useState(false);
  const [input, setInput] = useState("");
  const [desInput, setDesInput] = useState("");
  const currentCourse = useSelector((state) => state.courses.currentCourseName);
  const currentData = useSelector((state) => state.courses.currentCourseData);
  const getID = useSelector((state) => state.courses.currentID);

  const [change, setchange] = useState(false);
  useEffect(() => {
    setchange(false);

    console.log(change);
  }, []);
  function handler(e) {
    setDate(e);
  }

  const addBtn = (
    <Button color="blue" onClick={() => setModalState(true)} className="addBtn">
      <Icon name="add" />
      Add new Assignment
    </Button>
  );

  const modalAddNew = (
    <Modal
      trigger={addBtn}
      centered={false}
      open={modalState}
      onClose={() => setModalState(false)}
     
    >
      <Modal.Header>New Assignment:</Modal.Header>
      <Modal.Content>
        <div className="title">
          <h5>Title:</h5>
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
            onClick={() => addAssig()}
            inverted
            color="green"
            className="confirmBtn"
          >
            <Icon name="checkmark" />
            Add
          </Button>
          <Button onClick={() => setModalState(false)} className="cancelBtn">
            <Icon name="cancel" />
            Cancel
          </Button>
        </div>
      </Modal.Content>
    </Modal>
  );

  let arr = [];

  function addAssig() {
    setModalState(false);
    arr = [...currentData];
    console.log("idMaybe", arr);
    arr.push({ assigName: input, description: desInput, deadline: date });
    console.log("idMaybe1", arr);

    console.log("scscscscscsc", getID);
    axios
      .put(APIurl + getID, { courseName: currentCourse, assignments: arr })
      .then((res) => {
        console.log(res);

        // dispatch(actions.currentCourse(allData()))
        // setchange(true)
        // arr.forEach(e =>{
        dispatch(actions.addAssig(arr));
        getList(APIurl, dispatch, currentCourse);

        // })
      })
      .catch((err) => console.log("ERROR --->", err));
  }
  let temp = [];
  function getList(url, dispatch, currentCourse) {
    // FIND OUT WHY THIS WORKS

    axios
      .get(url)
      .then((res) => {
        console.log(res);
        temp.push(...res.data);

        if (res.data.length !== 0) {
          dispatch(actions.addCourses([...temp]));
          dispatch(actions.setCurrentCourse(currentCourse));
        }
        temp = [];
      })
      .catch((err) => console.log("ERROR1 --->", err));
  }
  
  return (
    <div className="view-courses">
     
        <div className="course-info-up">
          
            <h1>{currentCourse}</h1>
            {copyComp}
          <div className="course-infor-up-right">
        </div>

      
      
          </div>
            <div className='addAssign'> {modalAddNew}</div>
           
          
          
      <div className="course-list-container">
      
        <Courses />
      </div>
    </div>
  );
}
