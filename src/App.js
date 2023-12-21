import React from 'react'
import "./App.css";
import NavBar from "./components/NavBar";
 import Home from "./components/Home";
 import About from "./components/About";
 import NoteState from "./context/Notes/NoteState";
 import Login from './components/Login';
 import SignUp from './components/SignUp';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './elements/Nav';
import Homee from './elements/Homee';
import Contact from './elements/Contact';
import Skills from './elements/Skills';
import Mansory from './elements/Mansory';
import Crousal from './elements/Crousal';
import NewCrous from './elements/NewCrous';
 

function App() {
  return (
    <>
    <Nav/>
      <Homee/>
      <Skills/>
      <Mansory/>
      <Contact/>   
    </>
  );
}

export default App;
    // <NoteState>
    //   <Router>
    //     <div className="container">
    //     <Routes>
    //       <Route exact path="/home" element={<Home/>} ></Route>
    //       <Route exact path="/about" element={<About/>}></Route>
    //       <Route exact path="/login" element={<Login/>} ></Route>
    //       <Route exact path="/signup" element={<SignUp/>}></Route>
    //     </Routes>
    //     </div>
    //   </Router>
    //   </NoteState>


  //   "short_name": "React App",
  //   "name": "Create React App Sample",
  //   "icons": [
  //     {
  //       "src": "favicon.ico",
  //       "sizes": "64x64 32x32 24x24 16x16",
  //       "type": "image/x-icon"
  //     },
  //     {
  //       "src": "logo192.png",
  //       "type": "image/png",
  //       "sizes": "192x192"
  //     },
  //     {
  //       "src": "logo512.png",
  //       "type": "image/png",
  //       "sizes": "512x512"
  //     }
  //   ],
  //   "start_url": ".",
  //   "display": "standalone",
  //   "theme_color": "#000000",
  //   "background_color": "#ffffff"
  // }
  
