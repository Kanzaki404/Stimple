import React, { useState, useEffect } from "react";
import {
  Button,
  Header,
  Icon,
  Modal,
  Progress,
  Dropdown,
} from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../../features/reduxData";
import axios from "axios";

export default function Students() {
  useEffect(() => {
    axios
      .get(APIurl)
      .then((res) => {
        console.log("Api return", res);

        if (res.data.length !== 0) {
          res.data.forEach((e) => {
            console.log("element.assingments", e.assignments[0]);
            e.assignments.splice(0, 1);
          });
          dispatch(actions.addCourses([...res.data]));
        }
      })
      .catch((err) => console.log("ERROR1 --->", err));
  }, []);

  const APIurl = "https://jsonbox.io/RP_DD_Coders_Student_Portal1";
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);

  const [percent, setPrecent] = useState();
  const [incr, setInc] = useState(40);
  const [modalState, setModalState] = useState(false);
  const detailButton = (
    <Button onClick={() => setModalState(true)}>Set Grade</Button>
  );
  // function testIncrement(inc){
  //     setPrecent(inc)
  //     setInc(incr+1)
  //     console.log(percent)
  // }
  const options = [
    { key: 1, text: "IG", value: 1 },
    { key: 2, text: "G", value: 2 },
    { key: 3, text: "VG", value: 3 },
  ];



  console.log("CK", courses);
  const studentList = courses.map((e) => (
    <div className="course-comp" key={e.courseName}>
      <h2>{e.courseName}</h2> <p className='go-right'>Total assignments: {e.assignments.length}</p>
      <div className="modal-grades">
          <Modal
            className="modal-title"
            trigger={detailButton}
            basic
            size="small"
            open={modalState}
            onClose={() => setModalState(false)}
          >
            <Header icon="tag" content="JavaScript 1" />
            <hr /> 
            <Modal.Content>
              <div className="item-grade">
                <div className="grade">
                  <p>Assignment: {e.assignments.assignName}</p>
                  <Dropdown options={options} selection />
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
              <Button
                basic
                color="red"
                inverted
                onClick={() => setModalState(false)}
              >
                <Icon name="remove" /> Cancel
              </Button>
              <Button
                color="green"
                inverted
                onClick={() => setModalState(false)}
              >
                <Icon name="checkmark" /> Confirm
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
        {e.assignments.map((el,index) => (
        <div className='sorted-assign'>
            <p>Assignment {index+1} :</p>  <h3>{el.assigName}</h3>
          {/* <p></p> */}
          <p>Deadline: <h4>{el.deadline}</h4></p>
        </div>
      ))}


      <div className="low-items">
        

       
        <Progress className="prog-bar" active percent={Math.floor(Math.random() * Math.floor(e.assignments.length * 35))} indicating />
           
      </div>
    </div>
  ));
//
  return <div>{studentList}</div>;
}
