import React, { useState } from "react";
import NavBar from "./components/nav-bar/navBar";
import "./App.scss";
import "semantic-ui-css/semantic.min.css";
import Student from "./components/student/studentMain";
import Teacher from "./components/teacher/teacherMain";
import LogIn from "./components/logIn/logIn";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import {useDispatch,useSelector} from "react-redux"
import {actions} from './features/menu'
function App() {

  const dispatch = useDispatch();
  const [username, setUsername] = useState("") // leave it for now till actual solution
  const [studentList,setStudentList] =useState([])
  
  const sideBarToggle = useSelector(state=> state.menu.toggle)
  const category = useSelector(state=> state.menu.loggedIn)
  const showLogIn = useSelector(state=> state.menu.showLogInScreen)
  

  return (
    <div className="App">
      <header className="App-header">
        {showLogIn ? null : <NavBar username={username} />}
      </header>

      <main>
        {showLogIn ? (

          <LogIn username={username} studentList={studentList} setStudentList={setStudentList} setUsername={setUsername} />

        ) : null}
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="slide along"
            icon="labeled"
            inverted
            onHide={()=>dispatch(actions.sideNavToggler(false))}
            vertical
            visible={sideBarToggle}
            width="thin"
          >
            {category === "Teacher" ? (
              <div>
                <Menu.Item
                onClick={()=>dispatch(actions.changeMenu('students'))}
                as="a">
                  <Icon name="user" />
                  Students
                </Menu.Item>
                <Menu.Item
                 onClick={()=>dispatch(actions.changeMenu('courses'))}
                as="a">
                  <Icon name="clipboard list" />
                  Courses
                </Menu.Item>
                <Menu.Item as="a" className="remove-border">
                  <Icon name="add" />
                  New Course
                </Menu.Item>
              </div>
            ) : (
              <div>
                <Menu.Item as="a">
                <Icon name="home" />
                  Home
                </Menu.Item>
                <Menu.Item as="a">
                  Schedule
                </Menu.Item>
              </div>
            )}
          </Sidebar>

          <Sidebar.Pusher dimmed={sideBarToggle}>
            <Segment basic>
              {category === "Student" ? <Student username={username} /> : null}
              {category === "Teacher" ? <Teacher username={username} /> : null}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </main>
      <footer>Hejdå</footer>
    </div>
  );
}

export default App;
