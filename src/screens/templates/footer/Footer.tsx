import React from "react";
import "./footer.scss";
import { IoLogoLinkedin, IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { connetThrough } from "../../../utilities/content";

const Footer: React.FC = () => {
  return (
    <div className="foot_cont padding">
      <footer>
        <div className="container">
          <div className="inner_foot">
            <ul>
              <li>
                <a href={`mailto:${connetThrough.mail}`}>
                  <IoMdMail />
                  <b>{connetThrough.mail}</b>
                </a>
              </li>
              <li>
                <a href={connetThrough.linkedin} target="_blank">
                  <IoLogoLinkedin />
                  <b>Santhosh Kumar</b>
                </a>
              </li>
              {/* <li>
                <a href={connetThrough.github} target='_blank'>
                  <IoLogoGithub />
                  <b>{Sa}</b>
                </a>
              </li> */}
              <li>
                <a>
                  <IoLocation />
                  <b>{connetThrough.location}</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
