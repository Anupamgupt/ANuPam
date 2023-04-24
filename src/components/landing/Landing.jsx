import React from 'react'
import {AiFillGithub , AiFillLinkedin ,AiOutlineMail} from 'react-icons/ai'
import {SiLeetcode , SiGeeksforgeeks ,SiCodeforces ,SiCodechef } from 'react-icons/si'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import './landing.css'
import Profile from '../profile/Profile'

function Landing() {
  return (
    <div className='landing'>
      <Profile/>
      <div className="landingtop">
        <div>
        <a href='https://drive.google.com/file/d/1x5OSp31HlrXjALFdp-k5B7HENTbQFxLh/view?usp=sharing' target='_blank'>
          <button className='download'>
          
            Resume
           
          </button>
          </a>
          <button className='talk'>Let's Talk</button>
        </div>
      </div>
      <div className="landingcenter">
        <div className='contentLeft'>
          <div className='contIcons'>
            <a href='https://github.com/Anupamgupt' target='_blank'>
            <AiFillGithub/>
            </a>
            <a href='https://www.linkedin.com/in/anupam-kumar-gupta-400962222/' target='_blank'>
            <AiFillLinkedin/>
            </a>
            <a href='mailto:akgjune06@gmail.com' target='_blank'>
            <AiOutlineMail/>
            </a>
            <a href='https://leetcode.com/Anupam_01/' target='_blank'>
            <SiLeetcode/>
            </a>

            
          </div>
          <div className='line'></div>
        </div>
        <div className='content'>
          <p className='main_para'>MERN Stack Developer and Competitive Programmer</p>
          <p className='down_para'>I am a fast learner and constantly seeking new opportunities to improve my skills and knowledge. Whether it's diving into the latest web development frameworks or tackling complex algorithmic problems in competitive programming, I am always up for a challenge.</p>
          <button className='projects'>Projects
          <HiOutlineArrowNarrowRight/>
          </button>
        </div>
        <div className='contentLeft'>
          <div className='contIcons'>
          <a href='https://auth.geeksforgeeks.org/user/akgjune06/' target='_blank'> <SiGeeksforgeeks/></a>
          <a href='https://codeforces.com/profile/meanupamm' target='_blank'><SiCodeforces/></a>
          <a href='https://www.codechef.com/users/potato_69' target='_blank'><SiCodechef/> </a>
          </div>
          <div className='line-work'>works</div>
          <div className='line line-two'></div>
        </div>
      </div>
    </div>
  )
}

export default Landing