import React from 'react'
import TeacherProfile from "./teacherComponents/teacherProfile";
import SearchStudent from "./teacherComponents/searchStudents";
import ViewStudents from "./teacherComponents/viewStudents";
import ViewCourses from "./teacherComponents/viewCourses";
import SearchCourses from "./teacherComponents/searchCourses";
import {useSelector} from "react-redux"
import Student from "../../components/student/studentAssets/student-pic.png";
export default function TeacherMain({username}) {
    const seachCourseCompoenent = <SearchCourses />
    const seachStudentCompoenent = <SearchStudent />
    const teachMenu = useSelector(state=> state.menu.status)
    const currentStudent = useSelector((state) => state.courses.Students);
    const studentImage = 
<div>

<img className="student-photo" src={Student} alt="Studentimage" />



<h3>{currentStudent}</h3>
<br />
<span>Phone: 123 123 12 12</span>
<br />
<span>E-mail: example@gmail.com</span>

</div>
    return (
        <div>
            <div className="student-container">
                <div className="profile-comp">
                    <TeacherProfile username={username} />
                </div>
                <div className="progress-comp">
                    {teachMenu === 'students' ? studentImage : null }
                    
            
          
                </div>
                <div className="student-overview">
                {teachMenu === 'students' ? <ViewStudents copyComp2={seachStudentCompoenent} /> : <ViewCourses copyComp={seachCourseCompoenent} />}

                </div>
            </div>
        </div>
    )
}
