import React, {useState} from 'react'
import { Input} from 'semantic-ui-react'

export default function SearchCourses() {

        const [input, setInput] = useState('')
    const testArr = [
        'HTML & CSS',
        'Javascript 1',
        'Javascript 2',
        'Javascript 3',
        'Communicaiton and Work Methodology',
        'Photo Editing with Photoshop',
        'Server Side Programming',
        'Project in Web Development',
        'LIA 1',
        'LIA 2',
        'Final Project'
    ]

    const courseNames = testArr
    .filter(
        (e) =>
          e.toLowerCase().match(input.toLowerCase())
      )
    .map((e) => {
        return <div key={e}>{e}</div>
    });

    return (
        <div className='search-student-container'>
            <Input
                transparent
                icon={{ name: 'search', link: true }}
                placeholder='Search Courses...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <div className="student-list-container">
                {courseNames}
              </div>
        </div>

    )

}
