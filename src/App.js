import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { Registration } from './Registration';

function App() {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === 'Login' ? <Login onFormSwitch={toggleForm} /> : <Registration onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
