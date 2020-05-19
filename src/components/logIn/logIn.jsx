
import React, { useState } from 'react'
import { Button, Divider, Form, Grid, Segment, Radio, Modal, Icon, Input } from 'semantic-ui-react'
import {useDispatch,useSelector} from "react-redux"
import {actions} from '../../features/menu'

const LogIn = ({setUsername, username, setStudentList, studentList}) => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState("")
    const [pw, setPw] = useState("")
    const [regTeacher, setRegTeacher] = useState("");
    const [modalState, setModalState] = useState(false)
    const detailButton = <Button className='sign-up-btn' content='Sign up' icon='signup' size='big' onClick={()=> setModalState(true)}></Button>
    

    const handleChange = event => {
        setSelected(event.target.value);
    };

    const handleChangePw = event => {
      setPw(event.target.value);
    };

    const handleChangeUsername = event => {
      setUsername(event.target.value);
    };

    const handleChangeRegTeacher = event => {
      setRegTeacher(event.target.value);
    };

    const handleLoginBtn = () => {
        if (selected === 'Student'){
          dispatch(actions.LoggedIn('Student'))
          setStudentList([...studentList, {username: username}])
        }else if (selected === 'Teacher'){
          dispatch(actions.LoggedIn('Teacher'))
        }
        
    }

    const registerBtn = () => {
      setModalState(false)
      if (regTeacher === "asd123")
      dispatch(actions.LoggedIn('Teacher'))
      else {
        dispatch(actions.LoggedIn('Student'))
        //setStudentList([...studentList, {username: username}])
      }
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
        <Modal
            trigger={detailButton}
            basic size='small'
            open={modalState}
            onClose={modalState}>
           <Modal.Content>
             <div className="registerForm">
                <Form.Input className="regForm" type="email" placeholder="Email..." icon="mail" iconPosition="left"></Form.Input>
                <Form.Input className="regForm" type="text" placeholder="Username..." icon="user" iconPosition="left" onChange={handleChangeUsername} ></Form.Input>
                <Form.Input className="regForm" type="password" placeholder="Password..." icon="lock" iconPosition="left"></Form.Input>
                <label className="regForm asd">To sign up as a Teacher you will need a key from your workplace!</label>
                <Form.Input className="regForm" type="password" placeholder="Teacher key..." icon="lock" iconPosition="left" onChange={handleChangeRegTeacher}></Form.Input>
                <Form.Checkbox className="regForm"
                error={{
                  content: 'You must agree to the terms and conditions',
                  pointing: 'left',
                }}/>
              </div>
           </Modal.Content>
            <Modal.Actions className="asd">
                <Button color='green'   inverted  onClick={registerBtn}>
                    <Icon name='sign in' /> Sign up and Log in!
                </Button>
            </Modal.Actions>
        </Modal>
        </Form>
  </Segment>

)}


export default LogIn;


