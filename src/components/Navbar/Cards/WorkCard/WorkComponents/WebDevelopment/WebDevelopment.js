import '../WorkComponents.css'

import Img2 from '../Img/Rectangle 22.png'
import Img3 from '../Img/Rectangle 23.png'



export default function WebDevelop(){
    return(
        <div className='WorkBlocks'>
            <div className='Work-Block3'>
                <img className='img' src={Img3} alt=''/>
                <p className='Work-Block-title'>UI/UX</p>
                <p className='Work-Block-text'>Rental</p>
            </div>
            <div className='Work-Block2'>
                <img className='img' src={Img2} alt=''/>
                <p className='Work-Block-title'>Blog</p>
                <p className='Work-Block-text'>Next.js</p>
            </div>
        </div>
    )
}