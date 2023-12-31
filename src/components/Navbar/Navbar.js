import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {BrowserRouter as Router,Routes,Route,redirect } from "react-router-dom";
import Home from './Cards/HomeCard/Home';
import Resume from "./Cards/ResumeCard/Resume";
import Work from './Cards/WorkCard/Work'
import Contacts from "./Cards/ContacsCard/Contact";

export default function Navbar(){
    const [buttonStates, setButtonStates] = useState({
        home: true,
        resume: false,
        work: false,
        contacts: false,
      });

      const toggleButton = (buttonName) => {
        setButtonStates((prevState) => ({
          home: buttonName === 'home' ? !prevState.home : false,
          resume: buttonName === 'resume' ? !prevState.resume : false,
          work: buttonName === 'work' ? !prevState.work : false,
          contacts: buttonName === 'contacts' ? !prevState.contacts : false,
        }));
      };

    return(
        <Router>
            <nav className="Navbar">   
                <ul>
                    <li>
                        <Link to='/'>
                            <a className={buttonStates.home? 'active-button':'inactive-button'} onClick={()=>toggleButton('home')}>
                                <div className="icon_box">
                                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                                    <span class="material-symbols-outlined">home</span>
                                    <p className="text">Home</p>
                                </div>  
                            </a>                            
                        </Link>


                    </li>

                    <li>
                        <Link to='/Resume'>
                            <a className={buttonStates.resume? 'active-button':'inactive-button'} onClick={()=>toggleButton('resume')}>
                                <div className="icon_box">
                                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                                    <span class="material-symbols-outlined">assignment</span>
                                    <p className="text">Resume</p>
                                </div>
                            </a>                            
                        </Link>

                    </li>

                    <li>
                        <Link to='/Work'>
                            <a className={buttonStates.work? 'active-button':'inactive-button'} onClick={()=>toggleButton('work')}>
                                <div className="icon_box">
                                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                                    <span class="material-symbols-outlined">work</span>
                                    <p className="text">Work</p>
                                </div>                        
                            </a>                            
                        </Link>

                    </li>

                    <li>
                        <Link to={'/Contact'}>
                            <a className={buttonStates.contacts? 'active-button':'inactive-button'} onClick={()=>toggleButton('contacts')}>
                                <div className="icon_box">
                                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                                    <span class="material-symbols-outlined">contacts</span>
                                    <p className="text">Contacts</p>
                                </div>                        
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Resume" element={<Resume/>}/>
                <Route path="/Work/*" element={<Work/>}/>
                <Route path="/Contact" element={<Contacts/>}/>
            </Routes>            
        </Router>

    )
}