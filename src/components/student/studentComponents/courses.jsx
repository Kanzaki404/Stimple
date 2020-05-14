import React from 'react'
import {Button} from 'semantic-ui-react'

export default function courses({sendData}) {
    return (
        <div className='course-comp'>
           <h2>{sendData}</h2>
           <Button>Details</Button>
        </div>
    )
}
