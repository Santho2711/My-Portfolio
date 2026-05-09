import React from 'react'
import Header from "../../templates/header/Header";
import Footer from "../../templates/footer/Footer";
import Profile from "../../templates/profile/Profile";
import Projects from "../../templates/projects/Projects";
import Tools from "../../templates/tools/Tools";
import Contact from "../../templates/contact/Contact";
import PageTransition from '../../../hooks/PageTransistion';

const ProjectsPage:React.FC = () => {
  return (
    <>
      <Header />
      <PageTransition>
        <div className="main_content padding">
          <div className="container">
            <div className="inner_cont clearfix">
              <div className="lft">
                <Profile />
              </div>

              <div className="rgt">
                {/* <About />
              <Experience /> */}
                <Projects padding={false} />
                <Tools />
                <Contact />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </PageTransition>
    </>
  );
}

export default ProjectsPage