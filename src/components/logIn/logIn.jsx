
import React, { useState } from 'react'
import { Button, Divider, Form, Segment } from 'semantic-ui-react'
import {useDispatch,useSelector} from "react-redux"
import {actions} from '../../features/menu'

const LogIn = ({setUsername, username}) => {
    const dispatch = useDispatch();
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
         dispatch(actions.LoggedIn('Student'))
        else if (selected === 'Teacher')
        dispatch(actions.LoggedIn('Teacher'))
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
