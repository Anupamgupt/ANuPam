import "./skills.css";
import { development, programming, tools } from "../../data/Data";
import { useState } from "react";
import Development from "../../components/development/Development";
import Intro from "../../components/intro/Intro";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { page } from "../../store/NavSlice";

function Skills() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(page("Skills"));
  }, [dispatch]); 
  const [skill, setSkill] = useState("Development");
  return (
      <div className="skills">
        <Intro/>
        <div className="skill-cont">
          <div className="main_exp main_skill">SKILLS</div>
          <h1 className="port port2">SKILLS AND SERVICES</h1>
          <div className="sub-skill">
            <div className="skill_left">
              <div className="lineone_skill"></div>
              <h1 className="skillcat">Development And DSA</h1>
              {/* <h1 className="extime">NOVEMBER 2022 - MAY 2023</h1> */}

              <p className="para_skill">
                My skills include MERN stack development and programming languages
                such as C++, C, and Python. With experience in both front-end and
                back-end development, I am adept at creating dynamic and
                interactive web applications. Additionally, my proficiency in
                database management systems such as MongoDB and SQL enables me to
                efficiently manage and manipulate data
              </p>
              <h1 className="skill_campany">FULL STACK DEV</h1>
            </div>
            <div className="skill_right">
              <div className="skill_buttons">
                <div className="skill_sub_button">
                  <button
                    className={skill === "Development" && "dev_but"}
                    onClick={() => setSkill("Development")}
                  >
                    Development
                  </button>
                  <button
                    className={skill === "Programming" && "dev_but"}
                    onClick={() => setSkill("Programming")}
                  >
                    Programming
                  </button>
                  <button
                    className={skill === "Tools" && "dev_but"}
                    onClick={() => setSkill("Tools")}
                  >
                    Tools
                  </button>
                </div>
              </div>
              <div className="main_services">
                <div className="skill_div"> 
                  {skill === "Development" && development.map((item)=>(
                    <Development img={item.pic} title={item.title}/>
                  ))}
                  {skill === "Programming" && programming.map((item)=>(
                    <Development img={item.pic} title={item.title}/>
                  ))}
                  {skill === "Tools" && tools.map((item)=>(
                    <Development img={item.pic} title={item.title}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Skills;
