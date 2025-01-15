import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AllGames from './pages/AllGame';
import AnagramHunt from './pages/AnagramHunt';
import MathGames from './pages/MathGames';
import Navigation from './comps/nav';
import Footer from './comps/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Shop from './pages/Shop';


function App() {
  return (
    <div className="App">
    <Navigation/>
      <Router>
            <Routes>
            <Route path = "/" Component={Home} />
            <Route path = "/About" Component = {About}/>
            <Route path="/All-Games" Component = {AllGames}/>
            <Route path="/Anagram-Hunt" Component = {AnagramHunt}/>
            <Route path="/Math-Games" Component = {MathGames} />
            <Route path="/login" Component={Login}/>
            <Route path="/sign-up" Component={SignUp}/>
            <Route path="/shop" Component={Shop}/>
           

            </Routes>
      </Router>
     <Footer />
    </div>
  );
}

export default App;
