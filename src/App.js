import React from 'react';
import NavBar from './components/nav-bar/navBar'
import LogIn from './components/logIn/logIn'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
      </header>
      <main>
        <LogIn/>
      </main>
    </div>
  );
}

export default App;
