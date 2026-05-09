import React from "react";
import "./about.scss";
import { about } from "../../../utilities/content";
import {
  getLastText,
  getRemainingText,
} from "../../../utilities/helperfunctions";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const About: React.FC = () => {
  return (
    <div className="about">
      <h1>
        {getRemainingText(about.title)}
        <span>{getLastText(about.title)}</span>
      </h1>
      <p>{about.description}</p>

      <div className="num_blk">
        <div className="blk">
          <strong>{about.experience}</strong>
          <p>
            Years of <br /> Experience
          </p>
        </div>
        {/* <div className="blk">
          <strong>+{about.projects}</strong>
          <p>Projects <br /> Completed</p>
        </div> */}
      </div>
      <div className="btn_flx">
        <PrimaryButton
          text={"View Resume"}
          to={"./assets/resume/Santhosh_kumar_Resume.pdf"}
          target="_blank"
        />
        <PrimaryButton
          text={"Download Resume"}
          className="invert"
          download
          to={"./assets/resume/Santhosh_kumar_Resume.pdf"}
        />
      </div>
    </div>
  );
};

export default About;
