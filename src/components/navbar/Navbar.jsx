import './navbar.css'
import {AiOutlineHome ,AiOutlineUser , AiOutlinePhone} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {FaWrench} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  const currentPage = useSelector((state)=>state.page);
  return (
    <div className='navbar'>
        <div className="navicons">
          <Link className='ic' to="/" ><AiOutlineHome style={{
            backgroundColor:currentPage==="Portfolio" &&"rgba(66, 92, 79, 0.3)"
          }}/></Link>
          <Link className='ic' to="/experience"><MdWorkOutline style={{
            backgroundColor:currentPage==="Experience" &&"rgba(66, 92, 79, 0.3)"
          }}/></Link>
          <Link className='ic' to="/projects"><AiOutlineUser style={{
            backgroundColor:currentPage==="Projects" &&"rgba(66, 92, 79, 0.3)"
          }}/></Link>
          <Link className='ic' to="/skills"><FaWrench style={{
            backgroundColor:currentPage==="Skills" &&"rgba(66, 92, 79, 0.3)"
          }}/></Link>
          <Link className='ic' to="/contact"><AiOutlinePhone style={{
            backgroundColor:currentPage==="Contact" &&"rgba(66, 92, 79, 0.3)"
          }}/></Link>
        </div>
    </div>
  )
}

export default Navbar