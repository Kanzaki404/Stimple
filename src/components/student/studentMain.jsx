import React from "react";
import StudentProfile from "./studentComponents/studentProfile";
import Stats from "./studentComponents/stats";
import Overview from "./studentComponents/overview";
import {useSelector} from "react-redux"
import Schedule from './studentComponents/schedule'

export default function StudentMain({username}) {
  const studentMenu = useSelector(state=> state.menu.status)
  const home =
  <>
 <div className="profile-comp">
  <StudentProfile username={username} />
</div>
<div className="progress-comp">
  <Stats />
</div>
<div className="student-overview">
  <Overview />
</div>

  </>

  return (
    <div className="student-container">
     {studentMenu === 'homeStudent' ? <Schedule/>:home}
    </div>
  );
}
