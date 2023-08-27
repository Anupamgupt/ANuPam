import './navbar.css'
import {AiOutlineHome ,AiOutlineUser , AiOutlinePhone} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {FaWrench} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <div className='navbar'>
        <div className="navicons">
          <Link className='ic' to="/"><AiOutlineHome/></Link>
          <Link className='ic' to="/experience"><MdWorkOutline/></Link>
          <Link className='ic' to="/projects"><AiOutlineUser/></Link>
          <Link className='ic' to="/skills"><FaWrench/></Link>
          <Link className='ic' to="/contact"><AiOutlinePhone/></Link>
        </div>
    </div>
  )
}

export default navbar