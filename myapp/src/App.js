import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message'
import Counter from './components/counter'
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylessheet';
function App() {
  return (
    <div className="App">
    <Stylesheet primary={true}/>
    <UserGreeting/>
    <NameList/>
    <Message></Message>
    <Counter/>
    </div>
  );
}

export default App;
