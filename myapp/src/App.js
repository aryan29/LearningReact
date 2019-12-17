import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message'
import Counter from './components/counter'
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylessheet';
import InLine from './components/InLine';
import styles from './components/appStyles.module.css'
function App() {
  return (
    <div className="App">
    <h1 className={styles.succ}>Errororororoor</h1>
    <Stylesheet primary={true}/>
    <InLine/>
    <UserGreeting/>
    <NameList/>
    <Message></Message>
    <Counter/>
    </div>
  );
}

export default App;
