import React from 'react'
import './header.scss'
import { NavLink } from 'react-router'
import { navLinks } from '../../../utilities/content'
import { GoHome, GoFileDirectory } from "react-icons/go";
import { TiMessages } from "react-icons/ti";
import { TbTool } from "react-icons/tb";
import { FaSuitcase } from "react-icons/fa6";





const Header:React.FC = () => {

  const renderIcon = (slug:string) => {
    switch (slug) {
      case "/experience":
        return <FaSuitcase />;
      case "/projects":
        return <GoFileDirectory />;
      case "/tools":
        return <TbTool />;
      case "/contact":
        return <TiMessages />;

      default:
        return <GoHome />;
    }
  }
  return (
    <header>
      <div className="container">
        <ul className="inner_head">
          {navLinks.map((item: navLinks, index: number) => (
            <li key={index}>
              <NavLink to={item.link}>
                {renderIcon(item.link)}
                <span>{item?.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header