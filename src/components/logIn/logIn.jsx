
import React, { useState } from 'react'
import { Button, Divider, Form, Grid, Segment, Radio, Modal, Icon, Input } from 'semantic-ui-react'

const LogIn = ({datafromLogIn, setUsername, username, setStudentList, studentList}) => {

    const [selected, setSelected] = useState("")
    const [pw, setPw] = useState("")
    const [modalState, setModalState] = useState(false)
    const detailButton = <Button className='sign-up-btn' content='Sign up' icon='signup' size='big' onClick={()=> setModalState(true)}></Button>
    
  
    const handleChange = event => {
      setSelected(event.target.value);
    };

    const handleChangePw = event => {
      setPw(event.target.value);
    };

    const handleChangeUsername = event => {
      localStorage.setItem("username", event.target.value)
      setUsername(event.target.value);
    };

    const handleLoginBtn = () => {
        if (selected === 'Student'){
          datafromLogIn('Student')
          setStudentList([...studentList, {username: username}])
        }
        else if (selected === 'Teacher')
          datafromLogIn('Teacher')

        /* else if(registered){
          datafromLogIn('Student')
          setStudentList([...studentList, {username: username}])
        } */

          console.log("student list", studentList)
    }

    const registerBtn = () => {
      setModalState(false)
      if (selected === 'Student'){
        datafromLogIn('Student')
        setStudentList([...studentList, {username: username}])
      }
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
                <div className="radioBtnsReg">
                  <Form.Input type="radio" label='Student' value="Student" onChange={handleChange} checked={selected === 'Student'} ></Form.Input>
                  <Form.Input type="radio" label='Teacher' value="Teacher" onChange={handleChange} checked={selected === 'Teacher'} ></Form.Input>
                </div>
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
