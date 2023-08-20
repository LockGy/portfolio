import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Work.css'
import Line from './Img/Line 5.svg'
import {Link,Route,Routes} from 'react-router-dom'
import All from './WorkComponents/AllBlock/AllBlock'
import AppDevelop from './WorkComponents/AppDevelopment_Block/AppDevelopment';
import WebDevelop from './WorkComponents/WebDevelopment/WebDevelopment';
import Design from './WorkComponents/Design/Design';
import Mentorship from './WorkComponents/Mentorship/Mentorship';

export default function Home(){
    const navigate = useNavigate();
    const [buttonStates, setButtonStates] = useState({
        All: true,
        AppDevelop: false,
        WebDevelop: false,
        Design: false,
        Mentorship: false,
      });

      const toggleButton = (buttonName) => {
        setButtonStates((prevState) => ({
          All: buttonName === 'All' ? !prevState.All : false,
          AppDevelop: buttonName === 'App Development' ? !prevState.AppDevelop : false,
          WebDevelop: buttonName === 'Web Development' ? !prevState.WebDevelop : false,
          Design: buttonName === 'Design'? !prevState.Design : false,
          Mentorship: buttonName === 'Mentorship' ? !prevState.Mentorship : false,
        }));
      };
    return(
        <div className="Work">
            <div className='Work-title'>
                <h1>Portfolio</h1>
                <img className='Line' src={Line} alt='Line'></img>
            </div>
            <nav className='Work-navbar'>
            <ul>
                <li>
                    <Link to={'/Work/'}>
                        <a href='#' className={buttonStates.All? 'work-activeButton' : 'work-inactiveButton'} onClick={()=>toggleButton('All')}>
                            All
                        </a> 
                    </Link>
                     
                    
                </li>

                <li>
                    <Link to={'/Work/AppDevelop'}>
                        <a href='#' className={buttonStates.AppDevelop? 'work-activeButton' : 'work-inactiveButton'} onClick={()=>toggleButton('App Development')}>
                            App Development
                        </a>                        
                    </Link>

                </li>

                <li>
                    <Link to={'/Work/WebDevelop'}>
                        <a href='#' className={buttonStates.WebDevelop? 'work-activeButton' : 'work-inactiveButton'} onClick={()=>toggleButton('Web Development')}>
                            Web Development
                        </a>
                    </Link>
                    
                </li>

                <li>
                    <Link to={'/Work/Design'}>
                        <a href='#' className={buttonStates.Design? 'work-activeButton' : 'work-inactiveButton'} onClick={()=>toggleButton('Design')}>
                        Design  
                        </a>
                    </Link>
                    
                </li>

                <li>
                    <Link to={'/Work/Mentorship'}>
                        <a href='#' className={buttonStates.Mentorship? 'work-activeButton' : 'work-inactiveButton'} onClick={()=>toggleButton('Mentorship')}>
                            Mentorship
                        </a>
                    </Link>
                    
                </li>
            </ul>
            </nav>

            <Routes>
                <Route path="/" element={<All/>}/>
                <Route path="AppDevelop" element={<AppDevelop/>}/>
                <Route path="WebDevelop" element={<WebDevelop/>}/>
                <Route path="Design" element={<Design/>}/>
                <Route path="Mentorship" element={<Mentorship/>}/>
            </Routes>
        </div>
    )
}