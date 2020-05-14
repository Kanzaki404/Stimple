import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import imagee from '../studentAssets/studentSample.jpg'
export default function StudentProfile() {
   
  return (
    <div className="student-profile-container">
      <Card raised className="card" >
        <Image className="image" src={imagee} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Bill Gates</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2019</span>
          </Card.Meta>
        </Card.Content>  
      </Card>
    </div>
  );
}

