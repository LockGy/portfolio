import './Contact.css'
import Line from './Img/Line 5.svg'
import Phone_icon from './Img/phone.svg'
import Email_icon from './Img/email.svg'
import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';

export default function Contacts(){
    const form = useRef();
       
    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”
       
        emailjs.sendForm('service_ig5jphk', 'template_folaksj', form.current, 'WbqRjTx4xv6KKQ4mR')
        .then((result) => {
        
            alert("Sending email successfully!"); 
            
            
                // show the user a success message
        }, (error) => {
            console.log(error.text);
                // show the user an error
        });
    };
    return (
        <div className="Contact">
            <div className='Contact-title'>
                <h1>Contact</h1>
                <img className='Line' src={Line} alt='Line'></img>
            </div>

            <div className='Contact-detail'>
                <div className='Contact-phone'>
                    <div className='Contact-block-title'>
                        <img src={Phone_icon}></img>
                        <p className='Phone-text'>Phone:</p>
                    </div>
                    <div className='Phone_number'>
                        <p>
                            +0589311980
                        </p>
                    </div>
                </div>

                <div className='Contact-email'>
                    <div className='Contact-block-title'>
                        <img src={Email_icon}></img>
                        <p className='Email-text'>Email:</p>
                    </div>
                    <div className='Email-address'>
                        <p>
                            bachdangthaiminh@gmail.com
                        </p>
                    </div>
                </div>
            </div>
                <div className='Contact-form'>
                    <div className='Email-submit-text'>
                    I am always open to discussing <strong>new projects</strong>, <strong>opportunities in tech world,
                    partnerships</strong> and more so <strong>mentorship.</strong> 
                    </div>
                    
                    <form className='Contact-input' ref={form} onSubmit={sendEmail}>
                        <label className='Form-text'><strong>Name:</strong></label>
                        <input className='Form-input' type="text" name="name" />
                        <label className='Form-text'><strong>Email:</strong></label>
                        <input className='Form-input' type="email" name="email" />
                        <label className='Form-text'><strong>Message:</strong></label>
                        <input className='Form-input' type='text' name="message" />
                        <div className='Form-send'>
                            <input  type="submit" value="Submit" />
                        </div>
                        
                                                
                    </form>
                   
                </div>
        </div>
    )
};