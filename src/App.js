import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from "react-dom";
// import { BrowserRouter as Route, Router, Routes } from "react-router-dom";

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import LoginForm from './components/login';
import Home from './components/home';

const Main = () => <h1>Hello world</h1>;

const App = () => {
  return (
    <Router>
       <Route path='/' exact >
         <LoginForm />
       </Route>
       <Route path='/home'>
         <Home />
       </Route>
     </Router>
  )
}
export default App;

// ReactDOM.render(
//   <Router>
//     <Route path='/' component={Main} />
//   </Router>,
//   document.getElementById('app')
// );

// export default App;

// export default function App() {
//   return (
//     <Router>
//       <Route path='/' exact >
//         <LoginForm />
//       </Route>
//       <Route path='/home'>
//         <Home />
//       </Route>
//     </Router>
//   )
// }  

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );


