import React from "react";
import { MdArrowOutward } from "react-icons/md";
import type { experience, projectObject } from "../../utilities/content";
import "./experience_projects.scss";

interface Props {
  data: experience | projectObject;
  projects: boolean;
}

const Experience_Projects: React.FC<Props> = ({ data, projects = false }) => {
//   console.log(data, "data");
  return (
    <a href={data.link} className="d-flex exp_proj" target="_blank">
        {
            projects && "platform" in data &&
            <img src={data.thumbnail} alt={data.name} />
        }
      <div className="lft flex-grow-1">
        <strong className="subtitle">{data.name}</strong>
        {!projects && "from" in data && (
          <>
            <p>{data.designation}</p>
            <br />
            <p>{`${data.from} - ${data.to}`}</p>
          </>
        )}
        {projects && "platform" in data && <p>{data.platform}</p>}
      </div>

      <MdArrowOutward />
    </a>
  );
};

export default Experience_Projects;
