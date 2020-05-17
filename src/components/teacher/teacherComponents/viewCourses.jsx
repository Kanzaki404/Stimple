import React from 'react';
import {Button} from 'semantic-ui-react'
import Courses from './list/courses';
import {Icon} from "semantic-ui-react";
export default function ViewCourses() {
    return (
        <div className="view-courses">
            <div className="course-info">
                <div className="course-info-up">
                <h1>Javascript</h1>
                <Button className="addBtn"><Icon Icon name="add"/>Add new Assignment</Button>
                </div>
                <hr/>
            </div>
            <div className="course-list-container">
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
            </div>


        </div>
    )

}
