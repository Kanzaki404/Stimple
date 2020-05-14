import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import imagee from '../studentAssets/studentSample.jpg'
export default function StudentProfile() {
   
  return (
    <div className="student-profile-container">
      <Card className="card" fluid raised>
        <Image className="image" src={imagee} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Baby Yoda</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2019</span>
          </Card.Meta>
          <Card.Description>
            Baby yoda is a studen to become a front end jedi.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>  
            <Icon name="user" />
            Student
        </Card.Content>
      </Card>
    </div>
  );
}

