import './navbar.css'
import {AiOutlineHome ,AiOutlineUser , AiOutlinePhone} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {FaWrench} from 'react-icons/fa'

function navbar() {
  return (
    <div className='navbar'>
        <div className="navicons">
            <AiOutlineHome/>
            <MdWorkOutline/>
            <AiOutlineUser/>
            <FaWrench/>
            <AiOutlinePhone/>
        </div>
    </div>
  )
}

export default navbar