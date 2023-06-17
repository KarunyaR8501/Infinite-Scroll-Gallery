import React from 'react'
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom"
import './App.css';
import Home from "./pages/Home.js"
import Explore from "./pages/Explore.js"
import NavBar from "./components/NavBar.js"
import ScrollTop from './components/ScrollTop.js'
import Login from './pages/Login';


function App() {

  return (
    <div className="App">
       <Router>
        <ScrollTop/>
        <NavBar/>
        <Routes>

        <Route  path="/"  Component= {Login} />
        <Route path="/explore"  Component= {Explore} />

        </Routes>
      </Router>


      
    </div>
  );
}

export default App;
