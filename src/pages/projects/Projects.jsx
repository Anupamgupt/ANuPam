import Profile from '../../components/profile/Profile'
import ProcardMain from '../../components/projectcard/ProcardMain'
import { Data } from '../../data/Data'

import './project.css'

function Projects() {
  return (
    <div className='project-container'>
        <div className='main_exp main_exp2'>PROJECTS</div>
        <h1 className='port port2'>PORTFOLIO OF MY PROJECTS</h1>
        <Profile/>
        <div className='pro-card-main'>
        {Data.map((item)=>(
            <ProcardMain desc={item.desc}/>
        ))}
        </div>
        
        {/* Projects */}
    </div>
  )
}

export default Projects