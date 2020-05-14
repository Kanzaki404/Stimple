import React, { useState } from 'react'

    const LogIn = () => {

    const [selectedAnswer, setSelectedAnswer] = useState("")

    const handleUserDecided = event => {
        setSelectedAnswer({selectedAnswer: event.target.value})
        /* if (selectedAnswer === ??? ) */
    }


    return (
        <div className="login">
            <label htmlFor="Teacher">Teacher</label>
            <input type="radio"
            id="Teacher"
            name="teacherRadioBtn"
            value="teacher"
            onChange={handleUserDecided}>
            </input>

            <label htmlFor="Student">Student</label>
            <input type="radio"
            id="Student"
            name="studentRadioBtn"
            value="student"
            onChange={handleUserDecided}>
            </input>

            <input type="text" placeholder="Username..." ></input>
            <input type="text" placeholder="Password..."></input>
            <button > Login </button>
        </div>
    )
}

export default LogIn;