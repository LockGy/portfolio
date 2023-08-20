import './Contact.css'
import Line from './Img/Line 5.svg'
import Phone_icon from './Img/phone.svg'
import Email_icon from './Img/email.svg'

export default function Contacts(){
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
        </div>
    )
}