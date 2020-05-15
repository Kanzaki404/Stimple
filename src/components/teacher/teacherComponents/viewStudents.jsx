import React, {useState} from 'react'
import { Input, Menu, Label } from 'semantic-ui-react'
import Students from './list/students'

export default function ViewStudents() {

    return (
        <div className='student-overview-container'>

            <div className="student-info">
                <h2>ViewStudents</h2>
                <hr/>

                <div className="info-container">
                    <div className="left-items">
                        <img src="" alt="Student image"/>
                        <p>Name: Alex Colik</p>
                        <p>Phone: 123 123 12 12</p>
                        <p>E-mail: example@gmail.com</p>
                    </div>
                    <div className="right-items">
                        <button>Just for item</button>
                    </div>
                </div>
            </div>

        <div className="search-students">


        </div>


        <div className="side-border">
            <Students/>
              <Students/>
              <Students/>
              <Students/>
              <Students/>
              <Students/>
              <Students/>
              <Students/>
              <Students/>
              <Students/>
        </div>
        </div>
    )
}
