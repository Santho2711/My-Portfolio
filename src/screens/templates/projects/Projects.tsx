import React from 'react'
import './projects.scss'
import { getLastText, getRemainingText } from '../../../utilities/helperfunctions';
import { projects, type paddingProp, type projectObject } from '../../../utilities/content';
import Experience_Projects from '../../../components/cards/Experience_Projects';

const Projects:React.FC<paddingProp> = ({padding=true}) => {
  return (
    <div
      className={`projects ${padding ? "padding" : ""}`}
    >
      <h3>
        {getRemainingText(projects.title)}
        <span>{getLastText(projects.title)}</span>
      </h3>

      <ul className="project_lst">
        {projects.list.map((item: projectObject, index: number) => {
          return (
            <li key={index}>
              <Experience_Projects data={item} projects={true} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Projects