
import React, { useState } from 'react'
import { Button, Divider, Form, Grid, Segment, Radio } from 'semantic-ui-react'

const LogIn = ({datafromLogIn}) => {

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
    
        <button onClick={()=>datafromLogIn('Student')}>Student</button>
        <button onClick={()=>datafromLogIn('Teacher')}>Teacher</button>
        <Form>
            {/* <div className="radioBtns">
                <Form.Input type="radio" label='Student' onChange={handleChangeStudent} ></Form.Input>
                <Form.Input type="radio" label='Teacher' onChange={handleChangeTeacher}></Form.Input>
            </div> */}
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

        <Button className='login-btn' content='Login' primary  />
        <Divider horizontal>Or</Divider>
        <Button className='sign-up-btn' content='Sign up' icon='signup' size='big' />
        </Form>
        
     
    
  </Segment>
  
)}


export default LogIn;
