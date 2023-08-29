import React,{useRef, useEffect}  from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodeforces,
  SiCodechef,
} from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./landing.css";
import { Link } from "react-router-dom";
import Intro from "../intro/Intro";


function Landing() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    // const element = ref.current;
    gsap.fromTo(
      ".main_para",
      {
        y:'-5rem',
        lineHeight:0,
        opacity:0,
      },
      {
        y:'0',
        opacity:1,
        lineHeight:"inherit",
        duration: 2.5,
        ease: "power3.out"
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      "#icon-one>*,.line-work,.line",
      {
        opacity:0,
      },
      {
        y:'0',
        opacity:1,
        delay:0.5,
        stagger: 0.1 ,
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      "#icon-two>*,.line-work,.line",
      {
        opacity:0,
      },
      {
        y:'0',
        opacity:1,
        delay:0.5,
        stagger: 0.1 ,
     
      }
    );
  }, []);
  return (
    <div className="landing" ref={ref}>
      <Intro intro={"Portfolio"}/>
      <div className="landingtop">
        <div>
          <a
            href="https://drive.google.com/file/d/1Ypld4s9fjDPVqvZdCaAn1HOZP1hqAlhB/view?usp=sharing"
            target="_blank"
          >
            <button className="download">Resume</button>
          </a>
          <Link to="/contact">
            <button className="talk">Let's Talk</button>
          </Link>
        </div>
      </div>
      <div className="landingcenter">
        <div className="contentLeft">
          <div className="contIcons" id="icon-one">
            <a href="https://github.com/Anupamgupt" target="_blank">
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anupam-kumar-gupta-400962222/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a href="mailto:akgjune06@gmail.com" target="_blank">
              <AiOutlineMail />
            </a>
            <a href="https://leetcode.com/Anupam_01/" target="_blank">
              <SiLeetcode />
            </a>
          </div>
          <div className="line"></div>
        </div>
        <div className="content">
          <p className="main_para">
            MERN Stack Developer and Competitive Programmer
          </p>
          <p className="down_para">
            I am a fast learner and constantly seeking new opportunities to
            improve my skills and knowledge. Whether it's diving into the latest
            web development frameworks or tackling complex algorithmic problems
            in competitive programming, I am always up for a challenge.
          </p>
          <Link to="/projects">
            <button className="projects">
              Projects
              <HiOutlineArrowNarrowRight />
            </button>
          </Link>
        
        </div>
        <div className="contentLeft">
          <div className="contIcons" id="icon-two">
            <a
              href="https://auth.geeksforgeeks.org/user/akgjune06/"
              target="_blank"
            >
              {" "}
              <SiGeeksforgeeks />
            </a>
            <a href="https://codeforces.com/profile/meanupamm" target="_blank">
              <SiCodeforces />
            </a>
            <a href="https://www.codechef.com/users/potato_69" target="_blank">
              <SiCodechef />{" "}
            </a>
          </div>
          <Link to="/experience">
            <div className="line-work">works</div>
          </Link> 
          <div className="line line-two"></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
