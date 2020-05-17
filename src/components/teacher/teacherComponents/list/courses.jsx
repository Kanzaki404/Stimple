import React from 'react';
import {Button, Icon} from 'semantic-ui-react';


export default function Courses () {

    return (

        <div className ="courses-cards">
            <div className="upper-items">
                <h2>Assignment Name</h2>
            </div>
            <div className="lower-items">
                <p>Dead Line 24/12/2020</p>
                <div className="button-group">
                <Button className="editBtn"><Icon Icon name="edit"/>Edit</Button>
                <Button className="infoBtn"><Icon Icon name="info"/>Detail</Button>
                </div>
            </div>
        </div>

    )

}