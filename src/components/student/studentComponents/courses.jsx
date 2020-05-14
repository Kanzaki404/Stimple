import React, {useState} from 'react'
import {Button, Progress} from 'semantic-ui-react'

export default function Courses({sendData}) {
    const [percent, setPrecent] = useState(0)

    function testIncrement(inc){
        setPrecent(inc)
        console.log(percent)
    }
    return (
        <div className='course-comp'>
           <h2>{sendData}</h2>
           <Button onClick={()=> testIncrement(percent+33.33333)}>Test</Button>
           <Progress active percent={percent} indicating />
        </div>
    )
}
