import React, {useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {actions} from '../../../features/reduxData'
import { Input, Menu, Label } from 'semantic-ui-react'
export default function SearchStudents({}) {
    const dispatch = useDispatch()
    const [dropdown, setDropdown] = useState(false);
    // const testArr = useSelector(state=>state.courses.Students)
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
        return <div key={e} onClick={()=>chooseStudent(e)}>{e}</div>
    });

    function chooseStudent(el){
        console.log(el)
        dispatch(actions.students(el))
        setDropdown(false)
    }

    const dropDownJSX = (
        <div id="myDropdown" className="dropdown-content">
          <input
            type="text"
            icon={{ name: 'search', link: true }}
            placeholder='Search Students...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="drop-down-content">

          <div className="student-list-container">
            {studentList2}
          </div>
        </div>

        </div>
      );

    return (
        <div className='search-student-container'>
           <div className="dropdown">
              <button onClick={() => setDropdown(!dropdown)} class="dropbtn">
                Students
              </button>
              {dropdown ? dropDownJSX : null}
            </div>
        </div>

    )
}
