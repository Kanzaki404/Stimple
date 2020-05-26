import React, { useState, useEffect } from "react";
import { Button, Progress } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { actions } from "../../../features/reduxData";
import axios from "axios";

export default function Courses({sendData,sendCourses}) {
  const APIurl = "https://jsonbox.io/RP_DD_Coders_Student_Portal1";
  const dispatch = useDispatch()
  const [percent, setPrecent] = useState(0);
  const [incr, setInc] = useState(0);

  useEffect(() => {

    axios.get(APIurl)
    .then((res)=>{
        console.log('Api return',res)
        if(res.data.length !== 0){
            dispatch(actions.addCourses([...res.data]))
        }

    })
    .catch(err => console.log('ERROR1 --->',err))
  }, [sendData]);
  function testIncrement(inc) {
    setPrecent(inc);
    setInc(incr + 1);

  }


  // assignSplice.splice(0,1);

  const courseslist = sendCourses.map((e) => (

    <div className="course-comp" key={e.courseName}>
      <h2>{e.courseName}</h2>
        <p className="assignment">Total assignments: {e.assignments.length}</p>
      <div className="low-items">
        {/* <Button onClick={() => testIncrement(percent + 33.33333)}>Test</Button> */}
        <Progress className="prog-bar" active percent={Math.floor(Math.random() * Math.floor(e.assignments.length * 35))} indicating />
      </div>
    </div>
  ));

  return (
  <div>
    {courseslist}
  </div>
  );
}
