import './projectcard.css'
import acrossPic from '../../assets/images/acrossPic.png'

function ProjectCard({desc}) {
  return (
    <div className='project-card'>
        <div className="card card2">
            <div className='card-img-container '>
            <div className="card-img-cont">
                <img src={acrossPic} className='card-img'/>
            </div>
            </div>
           
            <h1 className='atg-head'>ATG.WORLD</h1>
            <p className='atg-para atg-para2'>
                {desc}
            </p>
            <div className='card-button'>
                <button className='web'>Web</button>
                <button className='github-button'>Github</button>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard