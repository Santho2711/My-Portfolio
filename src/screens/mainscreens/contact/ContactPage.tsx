import React from 'react'
import Header from "../../templates/header/Header";
import Footer from "../../templates/footer/Footer";
import Profile from "../../templates/profile/Profile";
import Contact from "../../templates/contact/Contact";
import PageTransition from '../../../hooks/PageTransistion';


const ContactPage:React.FC = () => {
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
              <Experience />
              <Projects />
              <Tools /> */}
                <Contact padding={false} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </PageTransition>
    </>
  );
}

export default ContactPage