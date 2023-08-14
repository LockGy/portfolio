import './Home.css';
import Line from './Img/Line 5.svg'
import Code_icon from './Img/code icon.svg'
import app_icon from './Img/App.svg'
import ui_icon from './Img/Groupui_icon.svg'
import mentor_icon from './Img/Mentor icon.svg'

export default function Home(){
    return(
        <div className="Home">
            <div className='AboutMe'>
                <h1>ABOUT ME</h1>
                <img className='Line' src={Line} alt='Line'></img>
                <hr/>
            </div>
            <p className='AboutMe-detail'>
                Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
                full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
                My journey in the world of web development has been nothing short of exhilarating, and 
                I constantly strive to enhance my skills and embrace emerging trends in the industry.
            </p>
            <h2 className='WhatIdo-text'>What I Do!</h2>
            <div className='WhatIdo'>
                <div className='WhatIdo-content'>
                    <div className='Block1'>
                        <img className='block-icon' src={Code_icon} alt=''/>
                        <h2 className='block-title'>Web Development</h2>
                        <p className='block-text'>As a developer, I find myself most 
                        captivated by the power and flexibility of 
                        NEXT.js. I'm always eager to dive into new
                        projects that leverage NEXT.js and 
                        discover innovative ways to create fast, 
                        scalable, and user-friendly applications.
                        </p>
                    </div>

                    <div className='Block2'>
                        <img className='block-icon' src={app_icon} alt=''/>
                        <h2 className='block-title'>App Development</h2>
                        <p className='block-text'>
                        With a focus on user-centric design and
                        cutting-edge technologies, I thrive on 
                        building intuitive and efficient apps 
                        that make a positive impact on people's 
                        lives. Let's turn ideas into reality and 
                        shape the future together.
                        </p>
                    </div>

                    <div className='Block2'>
                        <img className='block-icon' src={ui_icon} alt=''/>
                        <h2 className='block-title'>UI/UX Designing</h2>
                        <p className='block-text'>
                        Crafting visually appealing and intuitive user
                        interfaces that offer a delightful user 
                        experience is something I'm truly fanatic 
                        about.
                        </p>                       
                    </div>

                    <div className='Block1'>
                        <img className='block-icon' src={mentor_icon} alt=''/>
                        <h2 className='block-title'>Mentorship</h2>
                        <p className='block-text'>
                        I have also found great joy in sharing my 
                        knowledge with others. Being a technical 
                        mentor allows me to give back to the 
                        community that has supported me 
                        throughout my career. 
                        </p> 
                    </div>
                </div>

            </div>
        </div>
    );
}