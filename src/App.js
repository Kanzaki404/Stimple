import React from 'react';
import NavBar from './components/nav-bar/navBar'
//import LogIn from './components/logIn/logIn'
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import Student from './components/student/studentMain'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
      </header>
      <main>
        <Student/>
        
      </main>
    </div>
  );
}
//<LogIn/>
export default App;
