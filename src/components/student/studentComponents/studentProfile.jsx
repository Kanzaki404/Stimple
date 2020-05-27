import React from "react";
import { Card, Image } from "semantic-ui-react";
import imagee from '../studentAssets/student-pic.png'
export default function StudentProfile({username}) {

  return (
    <div className="student-profile-container">
      <Card raised className="card" >
        <Image className="image" src={imagee} wrapped ui={false} />
        <Card.Content>
  <Card.Header>{username}</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2019</span>
          </Card.Meta>
        </Card.Content>
      </Card>
    </div>
  );
}
