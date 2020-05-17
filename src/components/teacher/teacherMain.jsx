import React from 'react'
import TeacherProfile from "./teacherComponents/teacherProfile";
import SearchStudent from "./teacherComponents/searchStudents";
import ViewStudents from "./teacherComponents/viewStudents";
import ViewCourses from "./teacherComponents/viewCourses";
import SearchCourses from "./teacherComponents/searchCourses";
export default function TeacherMain({username, menu}) {
    return (
        <div>
            <div className="student-container">
                <div className="profile-comp">
                    <TeacherProfile username={username} />
                </div>
                <div className="progress-comp">
                    {menu === 'students' ? <SearchStudent /> : <SearchCourses />}

                </div>
                <div className="student-overview">
                {menu === 'students' ? <ViewStudents /> : <ViewCourses />}

                </div>
            </div>
        </div>
    )
}
