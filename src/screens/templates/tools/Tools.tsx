import React from "react";
import "./tools.scss";
import {
  getLastText,
  getRemainingText,
} from "../../../utilities/helperfunctions";
import { tools, type paddingProp, type projectObject } from "../../../utilities/content";
import { Link } from "react-router";

const Tools: React.FC<paddingProp> = ({padding=true}) => {
  return (
    <div
      className={`tools ${padding ? "padding" : ""}`}
    >
      <h4>
        {getRemainingText(tools.title)}
        <span>{getLastText(tools.title)}</span>
      </h4>

      <ul className="tool_lst">
        {tools.list.map((item: projectObject, index: number) => {
          return (
            <li key={index}>
              <Link to={item.link} className="d-flex align-items-center">
                <div className="img_">
                  <img src={item.thumbnail} alt="" />
                </div>
                <div className="rgt_ flex-grow-1">
                  <strong className="subtitle">{item.name}</strong>
                  <p>{item.platform}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tools;
