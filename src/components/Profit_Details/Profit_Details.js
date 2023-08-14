import React from "react";
import Profit_pic from "./img/profile picture.svg";
import "./profit.css";
import facebook_logo from "./img/facebook.svg"
import linkedin_logo from "./img/linkedin.svg"
import twitter_logo from "./img/ri_twitter-fill.svg"
import github_logo from "./img/ri_github-fill.svg"
import phone_icon from "./img/phone.svg"
import email_icon from "./img/email.svg"
import location_icon from "./img/ion_location-outline.svg"
import download_icon from "./img/material-symbols_download.svg"

export default function Information(){
    return  (
        <div className="profile_detail">
            <div className="profit_picture">
                <img src={Profit_pic} alt="Profit"/>
            </div>
            
            <div className="profit_bar">

                <div className="NameInform">
                    <h2 className="Name" >Name</h2>
                    <p className="Job">FullStack Developer</p>
                </div>

                <div className="icon_bar">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <img className="svg" src={facebook_logo} alt="facebook logo"/>
                        </div>
                    </a>
                    
                    <a href="https://www.linkedin.com" rel="noreferrer" target="_blank">
                        <div className="icon">
                            <img className="svg" src={linkedin_logo} alt="linkedin logo"/>
                        </div>
                    </a>

                    <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <img className="svg" src={twitter_logo} alt="twitter logo"/>
                        </div> 
                    </a>

                    <a href="https://github.com" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <img className="svg" src={github_logo} alt="github logo"/>
                        </div>
                    </a>
                </div>

                <div className="contact">
                    <div className="phone">
                        <img src={phone_icon} alt="phone icon" />
                        <p className="phone_text">Phone</p>
                        <p className="phone_number">+0589311980</p>
                    </div>
                    <hr className="line"/>

                    <div className="email">
                        <img src={email_icon} alt="email icon" />
                        <p className="email_text">Email</p>
                        <p className="email_content">bachdangthaiminh@gmail.com</p>
                    </div>
                    <hr className="line"/>

                    <div className="location">
                        <img src={location_icon} alt="location icon" />
                        <p className="location_text">Location</p>
                        <p className="location_content">Danang, Vietnam</p>
                    </div>
                    <hr className="line"/>
                    
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank" rel="noreferrer">
                        <div className="download_resume">
                            <img src={download_icon} alt="download icon"/>
                            <p className="download_text">Download Resume</p>
                        </div>                        
                    </a>


                </div>
            </div>
        </div>
    )
}