import React from 'react'
import TeacherProfile from "./teacherComponents/teacherProfile";
import SearchStudent from "./teacherComponents/searchStudents";
import ViewStudents from "./teacherComponents/viewStudents";
// import ViewCourses from "./teacherComponents/viewCourses";
// import SearchCourses from "./teacherComponents/searchCourses";
export default function TeacherMain() {
    return (
        <div>
            <div className="student-container">
                <div className="profile-comp">
                    <TeacherProfile />
                </div>
                <div className="progress-comp">
                    <SearchStudent />
                </div>
                <div className="student-overview">
                    <ViewStudents />
                </div>
            </div>
        </div>
    )
}
