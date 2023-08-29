import ProjectCard from "../../components/projectcard/ProjectCard";
import "./experience.css";
import Intro from "../../components/intro/Intro";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { page } from "../../store/NavSlice";

function Experience() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(page("Experience"));
  }, [dispatch]); 
  return (
    <>
      <Intro />
      <div className="experience">
        <div className="ex-cont">
          <div className="main_exp">EXPERIENCE</div>
          <h1 className="port">PORTFOLIO OF MY WORK</h1>
          <div className="sub-exright">
            <div className="circle"></div>
          </div>
          <div className="sub-ex">
            <div className="exleft">
              <div className="lineone"></div>
              <h1 className="excat">FRONTEND INTERNSHIP</h1>
              <h1 className="extime">NOVEMBER 2022 - MAY 2023</h1>

              <p className="paraex">
                During my frontend internship, I had the opportunity to work on
                the main website of the company using PHP/Laravel, HTML, CSS,
                and JavaScript. The experience was truly great as I got to work
                in a professional environment and attend daily meetings where I
                learned a lot from my colleagues. Overall, it was a valuable
                experience that helped me gain practical knowledge and improve
                my skills.
              </p>
              <h1 className="excampany">ACROSS THE GLOBE</h1>
            </div>
            <div className="exright">
              <ProjectCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
