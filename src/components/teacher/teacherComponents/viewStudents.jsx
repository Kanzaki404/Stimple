import React from "react";

import Students from "./list/students";



export default function ViewStudents({copyComp2}) {
 
  return (
    <div className="student-overview-container">

      <div className="search-students">
        
      
        <div className="focused-wrapper">

          <div className="student-list-dissapear">
      {copyComp2}
      </div>
          <div className="side-border-teacher">
            <Students />
          </div>
        </div>
      </div>
    </div>
  );
}
