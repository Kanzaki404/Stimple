import React from "react";
import { Grid } from "semantic-ui-react";
import Students from "./list/students";
import Student from "../../teacher/teacherAssets/graduated.png";
import { useSelector } from "react-redux";

export default function ViewStudents({copyComp2}) {
  const currentStudent = useSelector((state) => state.courses.Students);
  return (
    <div className="student-overview-container">

      <div className="search-students">
        <h2>View Students</h2>
      <div className="student-list-dissapear">
      {copyComp2}
      </div>
        <hr />
        <div className="focused-wrapper">
          <Grid>
            <Grid.Column width={4}>
              <img className="student-photo" src={Student} alt="Studentimage" />
            </Grid.Column>

            <Grid.Column verticalAlign="middle" textAlign="left" width={6}>
              <h3>{currentStudent}</h3>
              <br />
              <span>Phone: 123 123 12 12</span>
              <br />
              <span>E-mail: example@gmail.com</span>
            </Grid.Column>
          </Grid>
          <div className="side-border-teacher">
            <Students />
          </div>
        </div>
      </div>
    </div>
  );
}
