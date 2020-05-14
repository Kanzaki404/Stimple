import React from "react";
import StudentProfile from "./studentComponents/studentProfile";
import Stats from "./studentComponents/stats";
import Overview from "./studentComponents/overview";
import '../../styles/containers.css'

export default function StudentMain() {
  return (
    <div className="student-container">
      <div className="profile-comp">
        <StudentProfile />
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