import React from 'react'
import { Card, Image } from "semantic-ui-react";
import imagee from '../teacherAssets/f3.jpg';
export default function TeacherProfile() {
    return (
        <div>
            <div className="student-profile-container">
                <Card raised className="card" >
                    <Image className="image" src={imagee} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>Martines Lopez</Card.Header>
                    <Card.Meta>
                        <span className="date">Joined in 2019</span>
                    </Card.Meta>
                    </Card.Content>
                </Card>
            </div>
        </div>
    )
}
