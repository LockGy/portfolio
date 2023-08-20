import '../WorkComponents.css'
import Img1 from '../Img/Rectangle 20.png'
import Img2 from '../Img/Rectangle 22.png'
import Img3 from '../Img/Rectangle 23.png'
import Img4 from '../Img/Rectangle 24.png'
import Img5 from '../Img/Rectangle 21.png'


export default function All(){
    return(
        <div className='WorkBlocks'>
            <div className='Work-Column'>
                <div className='Work-Block1'>
                    <img className='img' src={Img1} alt=''/>
                    <p className='Work-Block-title'>App Development</p>
                    <p className='Work-Block-text'>Smart Bank App</p>
                </div>
                <div className='Work-Block3'>
                    <img className='img' src={Img3} alt=''/>
                    <p className='Work-Block-title'>UI/UX</p>
                    <p className='Work-Block-text'>Rental</p>
                </div>
            <div className='Work-Block5'>
                <img className='img' src={Img5} alt=''/>
                <p className='Work-Block-title'>App Development</p>
                <p className='Work-Block-text'>Smart Bank App</p>
            </div>                                
            </div>

            <div className='Work-column'>
                <div className='Work-Block2'>
                    <img className='img' src={Img2} alt=''/>
                    <p className='Work-Block-title'>Blog</p>
                    <p className='Work-Block-text'>Next.js</p>
                </div>



                <div className='Work-Block4'>
                    <img className='img' src={Img4} alt=''/>
                    <p className='Work-Block-title'>Mentorship</p>
                    <p className='Work-Block-text'>Tech Mentor</p>
                </div>
            </div>


        </div>
    )
}