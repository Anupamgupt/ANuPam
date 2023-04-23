import './profile.css'
import gojo from '../../assets/images/gojo.jpeg'

function Profile() {
  return (
    <div className='profile'>
        <img src={gojo} className='gojo'/>
    </div>
  )
}

export default Profile