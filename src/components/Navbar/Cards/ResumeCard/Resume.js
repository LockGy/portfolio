import './Resume.css';
import Line from './Img/Line 5.svg'
import Education_icon from './Img/education_icon.svg'
import Resume_icon from './Img/resume_icon.svg'

export default function Resume(){

    return(
        <div className="Resume">
            <div className='Resume-text'>
                <h1>Resume</h1>
                <img className='Line' src={Line} alt='Line'></img>
                <hr/>
            </div>

            <div className="Resume-detail">
                <div className="education">
                    <div className="education-title">
                        <img src={Education_icon} alt=""></img>
                        <h2 className="Block-text">Education</h2>
                    </div>

                    <div className="block1">
                        <p className="time">2020-2021</p>
                        <p className="major">Software Development</p>
                        <p className="College">Moringa School</p>
                    </div>

                    <div className="block2">
                        <p className="time">2012-2016</p>
                        <p className="major">Disaster Management</p>
                        <p className="College">Masinde Muliro Universiity </p>                        
                    </div>
                </div>

                <div className="experience">
                    <div className="experience-title">
                        <img src={Resume_icon} alt=""></img>
                        <h2 className="Block-text">Resume</h2>
                    </div>

                    <div className="block2">
                        <p className="time">2022 - Present</p>
                        <p className="major">Technical Mentor</p>
                        <p className="College">Moringa School</p>
                    </div>

                    <div className="block1">
                        <p className="time">2021-2022</p>
                        <p className="major">Website Development </p>
                        <p className="College">Village 2 Nation</p>                        
                    </div>
                </div>

                <div className="work-skills">
                    <p className="work-skills-title">Work Skills</p>
                    <div className='work-skills-block'>
                        <div className='work-skills-block-information'>
                            <p className='work-skills-block-information-text'>NEXT.js</p>
                        </div>

                        <div className='work-skills-block-information'>
                            <p className='work-skills-block-information-text'>React.js</p>
                        </div>

                        <div className='work-skills-block-information'>
                            <p className='work-skills-block-information-text'>HTML5</p>
                        </div>

                        <div className='work-skills-block-information'>
                            <p className='work-skills-block-information-text'>CSS3</p>
                        </div>

                        <div className='work-skills-block-information'>
                            <p className='work-skills-block-information-text'>Tailwind CSS</p>
                        </div>

                        <div className='work-skills-block-information'>
                            <p className='work-skills-block-information-text'>Figma</p>
                        </div>

                        <div className='work-skills-block-information'>
                            <p className='work-skills-block-information-text'>JavaScript</p>
                        </div>

                        <div className='work-skills-block-information'>
                            <p className='work-skills-block-information-text'>Mongo DB</p>
                        </div>
                    </div>
                </div>

                <div className="soft-skills">
                    <p className="soft-skills-title">Soft Skills</p>
                    <div className='soft-skills-block'>
                        <div className='soft-skills-block-information'>
                            <p className='soft-skills-block-information-text'>Time Management</p>
                        </div>

                        <div className='soft-skills-block-information'>
                            <p className='soft-skills-block-information-text'>Mentorship</p>
                        </div>

                        <div className='soft-skills-block-information'>
                            <p className='soft-skills-block-information-text'>Impeccable Communication</p>
                        </div>

                        <div className='soft-skills-block-information'>
                            <p className='soft-skills-block-information-text'>Flexibility</p>
                        </div>

                        <div className='soft-skills-block-information'>
                            <p className='soft-skills-block-information-text'>Research</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}