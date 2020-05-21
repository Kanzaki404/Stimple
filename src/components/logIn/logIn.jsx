
import React, { useState } from 'react'
import { Button, Divider, Form, Grid, Segment, Radio, Modal, Icon, Input } from 'semantic-ui-react'
import {useDispatch, useSelector} from "react-redux"
import {actions} from '../../features/menu'
// import { useForm } from "react-hook-form";


const LogIn = ({setUsername, username, setStudentList, studentList}) => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState("")
    const [regTeacher, setRegTeacher] = useState("");
    const [pw, setPw] = useState("");
    const [modalState, setModalState] = useState(false);
    const detailButton = <Button className='sign-up-btn' content='Sign up' icon='signup' size='big' onClick={()=> setModalState(true)}></Button>
    /* const [termsNcondition, setTermsNcondition] = useState(""); */
    // const { register, handleSubmit, errors } = useForm();

    const handleChange = event => {
      setSelected(event.target.value);
    };

    /* const handleChangeTerms = event => {
      setTermsNcondition(event.target.value);
    }; */

    const handleChangePw = event => {
      setPw(event.target.value);
    };

    const handleChangeRegTeacher = event => {
      setRegTeacher(event.target.value);
    };

    const handleChangeUsername = event => {
      localStorage.setItem("username", event.target.value)
      setUsername(event.target.value);
    };

    const handleLoginBtn = () => {
        /* if (selected === 'Student' && username && pw){
          dispatch(actions.LoggedIn('Student'))
          //setStudentList([...studentList, {username: username}])
        }else if (selected === 'Teacher' && username && pw){
          dispatch(actions.LoggedIn('Teacher'))
        } */
        if(regTeacher === "a" && username && pw)
          dispatch(actions.LoggedIn('Teacher'))
        else if (pw && username)
          dispatch(actions.LoggedIn('Student'))
        
    }

    const registerBtn = () => {
      setModalState(false)
      if (regTeacher === "asd123" && username && pw)
      dispatch(actions.LoggedIn('Teacher'))
      else {
        dispatch(actions.LoggedIn('Student'))
        //setStudentList([...studentList, {username: username}])
      }
    }




return (
  <Segment placeholder className="loginForm">
        <Form>
            {/* <div className="radioBtns">
                <Form.Input type="radio" label='Student' value="Student" onChange={handleChange} checked={selected === 'Student'} ></Form.Input>
                <Form.Input type="radio" label='Teacher' value="Teacher" onChange={handleChange} checked={selected === 'Teacher'} ></Form.Input>
            </div> */}
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            onChange={handleChangeUsername}
            required
          />

          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type="password"
            onChange={handleChangePw}
            required
          />

          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Teacher-key'
            onChange={handleChangeRegTeacher}
          />

        <Button className='login-btn' content='Login' onClick={handleLoginBtn} /* disabled={!pw || !username || !selected} */ primary  />
        <Divider horizontal>Or</Divider>

        <Modal
            trigger={detailButton}
            basic size='small'
            open={modalState}
            onClose={()=>setModalState(false)}>
           <Modal.Content>
             <div className="registerForm">
                <Form.Input className="regForm" type="email" placeholder="Email... (opt)"  icon="mail" iconPosition="left"></Form.Input>
                <Form.Input className="regForm" type="text" placeholder="Username..." required icon="user" iconPosition="left" onChange={handleChangeUsername} ></Form.Input>
                <Form.Input className="regForm" type="password" placeholder="Password..." required icon="lock" iconPosition="left" onChange={handleChangePw} ></Form.Input>
                <label className="regForm asd">To sign up as a Teacher you will need a key from your workplace!</label>
                <Form.Input className="regForm" type="text" placeholder="Teacher key... (opt)" icon="lock" iconPosition="left" onChange={handleChangeRegTeacher}></Form.Input>
                {/* <Form.Checkbox className="regForm" 
                onChange={handleChangeTerms}
                required
                error={{
                  content: 'You must agree to the terms and conditions',
                  pointing: 'left',
                }}/> */}
              </div>
           </Modal.Content>
            <Modal.Actions className="asd">
                <Button color='green'   inverted  onClick={registerBtn} disabled={!username || !pw} >
                    <Icon name='sign in' /> Sign up and Log in!
                </Button>
            </Modal.Actions>
        </Modal>
        </Form>
  </Segment>

)}


export default LogIn;


