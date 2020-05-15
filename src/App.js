import React, {useState} from 'react';
import NavBar from './components/nav-bar/navBar'
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import Student from './components/student/studentMain'
import Teacher from './components/teacher/teacherMain'
import LogIn from './components/logIn/logIn';

function App() {

  const [showLogIn, setShow] = useState(true)
  const [cat, setCat] = useState('')

  function showOne(choice){
    setShow(false)
    setCat(choice)

  }
  return (
    <div className="App">
      <header className="App-header">
          <NavBar/>
      </header>

      <main>
        {showLogIn ? <LogIn datafromLogIn={(choice) => showOne(choice)}/> : null}
        {cat === 'Student' ?  <Student/>: null}
        {cat === 'Teacher' ? <Teacher/> : null }


      </main>
      <footer>
        Hej
      </footer>
    </div>
  );
}
//<LogIn/> <Student/>
export default App;
