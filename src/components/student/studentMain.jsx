import React from "react";
import StudentProfile from "./studentComponents/studentProfile";
import Stats from "./studentComponents/stats";
import Overview from "./studentComponents/overview";


export default function StudentMain({username}) {
  return (
    <div className="student-container">
      <div className="profile-comp">
        <StudentProfile username={username} />
      </div>
      <div className="progress-comp">
        <Stats />
      </div>
      <div className="student-overview">
        <Overview />
      </div>
    </div>
  );
}