import React, { useState } from "react";
import { Button, Icon, Modal, Input, Dropdown } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { actions } from "../../../../features/reduxData";

export default function Courses() {
  const dispatch = useDispatch();

  const currentCourseData = useSelector(
    (state) => state.courses.currentCourseData
  );
  const getID = useSelector((state) => state.courses.currentID);
  const testArr = useSelector((state) => state.courses.courses);

  //    useEffect(() => {
  //        console.log('courses re-rendered')

  //    }, [])
  const [modalState, setModalState] = useState(false);
  const [input, setInput] = useState("");
  const [desInput, setDesInput] = useState("");
  const [date, setDate] = useState("");

  function handler(e) {
    setDate(e);
  }

  const editBtn = <Button onClick={() => setModalState(true)}>Edit</Button>;
  const modalEdit = (
    <Modal
      trigger={editBtn}
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
            onClick={() => setModalState(false)}
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
          <Button onClick={() => setModalState(false)} className="deleteBtn">
            <Icon name="times circle" />
            Delete
          </Button>
        </div>
      </Modal.Content>
    </Modal>
  );


  const options = [
    { key: 'delete', icon: 'delete', text: 'Remove Assignment', value: 'delete' }

  ]
  console.log(currentCourseData);

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
            <Modal.Header>Assignment # Details:</Modal.Header>
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
          {modalEdit}
          <Button color="red">Delete</Button>
        </div>
      </div>
    </div>
  ));

  return <div>{assignments}</div>;
}

// let arr = [];
// function addAssig(setModalState,currentCourseData,input,desInput,date,getID,dispatch,APIurl){

//     setModalState(false)
//     arr = [...currentCourseData]
//     console.log('idMaybe',arr)
//     arr.push({assigName:input,description:desInput, deadline:date})
//     console.log('idMaybe1',arr)

//    console.log('scscscscscsc',getID)
//         axios.put(APIurl+getID, {courseName:currentCourseData, assignments:arr})
//     .then(res => {
//         console.log(res)

//         // dispatch(actions.currentCourse(allData()))
//         // setchange(true)
//         // arr.forEach(e =>{
//         dispatch(actions.addAssig(arr))
//         //getList(APIurl,dispatch)

//         // })

//     })
//     .catch(err => console.log('ERROR --->',err))

// }

// function del(id,setchange,currentCourseData,dispatch){

//     axios.delete("https://jsonbox.io/RP_DD_Coders_Student_Portal1/" + id)
//   .then(response => {
//     console.log(response)
//     setchange(false)
//     console.log(currentCourseData)
//     // let temp = currentCourseData;
//     //     temp.pop()

//     //     dispatch(actions.addCourses(temp))
//   })
//   .catch(e => console.log(e))

// }
