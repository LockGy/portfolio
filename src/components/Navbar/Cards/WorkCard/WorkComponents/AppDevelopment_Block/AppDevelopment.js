import '../WorkComponents.css'
import Img1 from '../Img/Rectangle 20.png'
import Img5 from '../Img/Rectangle 21.png'

export default function AppDevelop(){
    return(
        <div className='WorkBlocks'>
            <div className='Work-Block1'>
                <img className='img' src={Img1} alt=''/>
                <p className='Work-Block-title'>App Development</p>
                <p className='Work-Block-text'>Smart Bank App</p>
            </div>

            <div className='Work-Block5'>
                <img className='img' src={Img5} alt=''/>
                <p className='Work-Block-title'>App Development</p>
                <p className='Work-Block-text'>Smart Bank App</p>
            </div>
        </div>
    )
}