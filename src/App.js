import React from 'react';
import NavBar from './components/nav-bar/navBar'
//import LogIn from './components/logIn/logIn'
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import Student from './components/student/studentMain'
import LogIn from './components/logIn/logIn';

function App() {
  return (
    <div className="App">

      <main>
        <LogIn />
        <Student/>
        
      </main>
      <footer>
        Hej
      </footer>
    </div>
  );
}
//<LogIn/>
export default App;
