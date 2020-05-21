import React from 'react'
import TeacherProfile from "./teacherComponents/teacherProfile";
import SearchStudent from "./teacherComponents/searchStudents";
import ViewStudents from "./teacherComponents/viewStudents";
import ViewCourses from "./teacherComponents/viewCourses";
import SearchCourses from "./teacherComponents/searchCourses";
import {useSelector} from "react-redux"
export default function TeacherMain({username}) {
    
    const teachMenu = useSelector(state=> state.menu.status)

    return (
        <div>
            <div className="student-container">
                <div className="profile-comp">
                    <TeacherProfile username={username} />
                </div>
                <div className="progress-comp">
                    {teachMenu === 'students' ? <SearchStudent /> : <SearchCourses />}                    
                </div>
                <div className="student-overview">
                {teachMenu === 'students' ? <ViewStudents /> : <ViewCourses />}

                </div>
            </div>
        </div>
    )
}
