
import React, { useState } from 'react'
import { Button, Divider, Form, Grid, Segment, Radio } from 'semantic-ui-react'

const LogIn = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [student, setStudent] = useState("");
    const [teacher, setTeacher] = useState("");
    const [result, setResult] = useState(<div></div>)


    const handleChangeStudent = event => {
        setStudent(event.target.value);
    };
    const handleChangeTeacher = event => {
        setTeacher(event.target.value);
    };
    const handleChangeUsername = event => {
        setUsername(event.target.value);
    };
    const handleChangePassword = event => {
        setPassword(event.target.value);
    };
    /* const handleLoginBtn = () => {
        setResult()
    } */


return (
  <Segment placeholder className="loginForm">
    <Grid columns={2} relaxed='very' stackable >
      <Grid.Column>
        <Form>
            <div className="radioBtns">
                <Form.Input type="radio" label='Student' onChange={handleChangeStudent} ></Form.Input>
                <Form.Input type="radio" label='Teacher' onChange={handleChangeTeacher}></Form.Input>
            </div>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            onChange={handleChangeUsername}
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            onChange={handleChangePassword}
          />

          <Button content='Login' primary  />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
)}


export default LogIn;