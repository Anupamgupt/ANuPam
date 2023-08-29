import Intro from '../../components/intro/Intro'
import Profile from '../../components/profile/Profile'
import ProcardMain from '../../components/projectcard/ProcardMain'
import { Data } from '../../data/Data'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { page } from "../../store/NavSlice";
import './project.css'

function Projects() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(page("Projects"));
  }, [dispatch]); 
  return (
    <div className='project-container'>
      <Intro/>
        <div className='main_exp main_skill'>PROJECTS</div>
        <h1 className='port port2'>PORTFOLIO OF MY PROJECTS</h1>
        <div className='pro-card-main'>
        {Data.map((item)=>(
            <ProcardMain desc={item.desc}/>
        ))}
        </div>
    </div>
  )
}

export default Projects