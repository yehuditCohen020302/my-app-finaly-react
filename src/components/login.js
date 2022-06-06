import React from 'react'
import '../css/login.css';
import { login } from '../api/user';
import { signIn } from '../api/user';
//  import { useNavigate } from "react-router-dom";
import Home from './home';
import { useHistory } from "react-router-dom";


export default function LoginForm() {

  const history = useHistory();

  async function Enter() {
    debugger
    const user = await login();
    console.log(user);
    history.push("/Home")
  }

  async function register() {
    const user = await signIn();
    console.log(user);
    history.push("/Home")
  }

  return (
    <div id="loginform">
      <h2 id="headerTitle" >Login for Our_App 😊</h2>
      <div className="row">
        <label description="Username"
          type="text">Username</label>
        <input type="text" description="Username" id='userName' placeholder="Enter your UserName" />
      </div>
      <div className="row">
        <label description="Password"
          type="password">Password</label>
        <input type="password" id='password' placeholder="Enter your Password" />
      </div>
      <div id="button" className="row" onClick={Enter}>
        <button >login - כניסה</button>
      </div>
      <div id="button" className="row" onClick={register}>
        <button>Signin - הרשמה</button>
      </div>
      <div id="button" className="row" onClick={Home}>
        <button>home</button>
      </div>
    </div>
  );
}





