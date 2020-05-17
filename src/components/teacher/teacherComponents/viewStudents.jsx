import React from "react";
import {  Grid } from "semantic-ui-react";
import Students from "./list/students";
import Student from "../teacherAssets/student2.jpg";


export default function ViewStudents() {
  return (
    <div className="student-overview-container">
      <div className="search-students">
        <h2>View Students</h2>
        <hr/>
        <div className="focused-wrapper">
          <Grid>
            <Grid.Column width={4}>
            <span>Name: Alex Colik</span>
              <br/>
              <span>Phone: 123 123 12 12</span>
              <br/>
              <span>E-mail: example@gmail.com</span>
            </Grid.Column>

            <Grid.Column verticalAlign='middle' textAlign="left" width={4}>

              <img
                className="student-photo"
                src={Student}
                alt="Studentimage"
              />
            </Grid.Column>
          </Grid>
        </div>
      </div>

      <div className="side-border-teacher">
        <Students />
        <Students />
        <Students />
        <Students />
        <Students />
        <Students />
        <Students />
        <Students />
        <Students />
        <Students />
      </div>
    </div>
  );
}
