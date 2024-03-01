// import logo from './logo.svg';
import './App.css';
// import root from './index.js';
import Home from './Home.jsx';
import {  Route, Routes } from 'react-router-dom';
import About from './About.jsx';
import Course from './Course.jsx';

import Nav from './component/Nav.jsx';
import Contact from './Boxes/Contact.jsx';
import Enroll from './Boxes/Enroll.jsx';



function App() {
  return (
    <>
    <Nav/>
    
      <Routes>
        <Route path='/' Component={Home}/>
        <Route  path='/about' Component={About}/>
        <Route  path='/courses' Component={Course}/>
        {/* <Route  path='/contact' Component={Contact}/> */}
        <Route  path='/about' Component={About}/>
        <Route  path='/contact' Component={Contact}/>
        <Route  path='/enroll' Component={Enroll}/>
        
      </Routes>
      {/* <Navigate path='/' Component={Home}/> */}
     
      
    </>
  );
}

export default App;
