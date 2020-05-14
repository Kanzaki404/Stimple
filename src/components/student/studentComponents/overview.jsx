import React, {useState}from 'react'
import Courses from './courses'
import { Input, Menu, Segment } from 'semantic-ui-react'

export default function Overview() {

    const [tab, setTab] = useState('Current');
    const [data, setData] = useState('current')
    function handleClick(tab,data){
        setTab(tab)
        setData(data)
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
              <Courses sendData={data}/>
              <Courses/>
              <Courses/>
        </div>
    )
}
