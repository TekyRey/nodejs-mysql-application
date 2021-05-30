import React, {useState} from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  const register =()=>{
    Axios.post('http://localhost:3000/register', {
      username: usernameReg, 
      password: passwordReg
    }).then((response) =>{
      console.log(response);
    })
  };


  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input type="text" 
         onChange ={(e)=> {
          setUsernameReg(e.target.value);
        }} /> <br />
        <label>Password</label>
        <input type="password" 
         onChange ={(e)=> {
          setPasswordReg(e.target.value);
        }} /> <br />
        <button onClick={register}>Register</button>
      </div>

      <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="Username..."/> <br />
        <input type="password" placeholder="Password..."/> <br />
        <button>Register</button>
      </div>

    </div>
  );
}

export default App;
