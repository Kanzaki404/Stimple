import React, {useState}from 'react'
import Courses from './courses'
import { Input, Menu } from 'semantic-ui-react'

export default function Overview() {

    const [tab, setTab] = useState('Current');
    const [data, setData] = useState('current')
    const [currentCourse, setCurrentCourses] = useState([
      {name:'JavaScript 2', completion: 1 },
      {name:'JavaScript 3', completion: 2 }
    ])
    const [completedCourses, setCompletedCourses] = useState([
      {name:'JavaScript 1', completion: 3 },
      {name:'HTML&CSS', completion: 3 },
      {name:'Graphical Design', completion: 2 }
    ])
    const [uncomplete, setunCompleteCourses] = useState([
      {name:'Server Side', completion: 0 },
      {name:'Project Course', completion: 0 },
      {name:'LIA', completion: 0 }
    ])
    function handleClick(tab,data){
        setTab(tab)
        setData(data)
        switch(tab){
          case 'Current':
          return currentCourse;
          case 'Completed':
            return completedCourses
          case 'Uncomplete':
            return uncomplete
        }
    }
    return (
        <div className='student-overview-container'>
           <Menu attached='top' tabular>
          <Menu.Item
            name='Current'
            active={tab === 'Current'}
            onClick={() => handleClick('Current','CurrentData')}
          />

          <Menu.Item
            name='Completed'
            active={tab === 'Completed'}
            onClick={() => handleClick('Completed','CompleteData')}
          />

          <Menu.Item
            name='Uncomplete'
            active={tab === 'Uncomplete'}
            onClick={() => handleClick('Uncomplete','Uncomplete')}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input
                transparent
                icon={{ name: 'search', link: true }}
                placeholder='Search courses..'
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <div className="side-border">
        <Courses sendData={data}/>
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
