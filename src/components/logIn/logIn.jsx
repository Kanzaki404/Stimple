
import React, { useState } from 'react'
import { Button, Divider, Form, Grid, Segment, Radio } from 'semantic-ui-react'

const LogIn = ({datafromLogIn, setUsername, username}) => {

    const [selected, setSelected] = useState("")
    const [pw, setPw] = useState("")
  

    const handleChange = event => {
        setSelected(event.target.value);
    };

    const handleChangePw = event => {
      setPw(event.target.value);
    };

    const handleChangeUsername = event => {
      setUsername(event.target.value);
    };

    

    const handleLoginBtn = () => {
        if (selected === 'Student')
          datafromLogIn('Student')
        else if (selected === 'Teacher')
          datafromLogIn('Teacher')
    }

return (
  <Segment placeholder className="loginForm">
        <Form>
            <div className="radioBtns">
                <Form.Input type="radio" label='Student' value="Student" onChange={handleChange} checked={selected === 'Student'} ></Form.Input>
                <Form.Input type="radio" label='Teacher' value="Teacher" onChange={handleChange} checked={selected === 'Teacher'} ></Form.Input>
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
            type="password"
            onChange={handleChangePw}
          />
         
        <Button className='login-btn' content='Login' onClick={handleLoginBtn} disabled={!pw || !username || !selected} primary  />
        <Divider horizontal>Or</Divider>
        <Button className='sign-up-btn' content='Sign up' icon='signup' size='big'  />
        </Form>
  </Segment>
  
)}


export default LogIn;
