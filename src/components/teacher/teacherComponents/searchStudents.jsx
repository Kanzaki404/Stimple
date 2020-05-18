import React, {useState} from 'react'
import { Input, Menu, Label } from 'semantic-ui-react'
export default function SearchStudents({getStudents, studentList}) {
    const [input, setInput] = useState('')
    const testArr = [
        'Alexander Colik',
        'Alexander Risteski',
        'Angelic Andersson',
        'Mohamed Albushra',
        'Bill Gates',
        'Augustin Martinez',
        'Emil Hammarstrand',
        'Sweetroll Master',
        'Robin Rakevik',
        'Thor noobmaster',
        'Henry hermique',
        'Gudetama Egg',
        'Stefan Mirovic',
        'Daniel Nor',
        'Hiro Hasamura',
        'Hanzo Hattori',
        'Genji Hattori',
        'Jack Daniels',
        'Kevin Lawrence',
        'Snarbjorn Ingrarikesson',
        'Riantea Talelian',
        'Frasa Calol',
        'Aicntar Elsinthar',
        'Inkaanus Drago',
        'Apple Pie',
        'Lavender Breado',
        'Xavier Pancake'
    ]

    const studentList2 = testArr
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
                placeholder='Search Students...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <div className="student-list-container">
                  {/* {studentList.map( (p, i ) => (
                      <li key={i}>
                        {p.username}
                      </li>
                  ))} */}
                 {studentList2} 
              </div>
        </div>

    )
}
