import React from "react";
import "./experience.scss";
import {
  getLastText,
  getRemainingText,
} from "../../../utilities/helperfunctions";
import { about, experience, type paddingProp } from "../../../utilities/content";
import Experience_Projects from "../../../components/cards/Experience_Projects";

const Experience: React.FC<paddingProp> = ({padding=true}) => {
  const experienceTitle: string = `${about.experience} years of experience`;
  return (
    <div
      className={`experience ${padding ? "padding" : ""}`}
    >
      <h2>
        {getRemainingText(experienceTitle)}
        <span>{getLastText(experienceTitle)}</span>
      </h2>

      <ul className="exp_lst">
        {experience.map((item: experience, index: number) => {
          return (
            <li key={index}>
              <Experience_Projects data={item} projects={false} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Experience;
