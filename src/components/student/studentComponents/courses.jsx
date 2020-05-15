import React, {useState} from 'react'
import {Button, Progress} from 'semantic-ui-react'

export default function Courses({sendData}) {
    const [percent, setPrecent] = useState(0)
    const [incr ,setInc] = useState(0)

    function testIncrement(inc){
        setPrecent(inc)
        setInc(incr+1)
        console.log(percent)
    }
    return (
        <div className='course-comp'>
           <h2>{sendData}</h2>
           <div className="low-items">
           <Button onClick={()=> testIncrement(percent+33.33333)}>Test</Button>
            <p>Assignment: {incr}/3</p>
           <Progress className='prog-bar' active percent={percent} indicating />
           </div>
        </div>
    )
}
