import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CoderImage from "../assets/coder.svg";
import {
  HtmlIcon,
  CssIcon,
  JavaScriptIcon,
  ReactJsIcon,
  TailwindIcon,
  PhpIcon,
  NextJsIcon,
  MySQLIcon,
  NodeJsIcon,
  CIcon,
  CppIcon,
  JavaIcon,
  PythonIcon,
  GitIcon,
} from "../assets/Icons";
import SocialLinks from "../components/SocialLinks";

const Home: React.FC = () => {
  return (
    <>
      <Header type="home" />
      <main className="">
        <div className="wrapper-container">
          <div className="wrapper">
            <div className="">
              <h3 className="headline">Hi !</h3>
              <h1 className="">I'm Gyanendra Baghel</h1>
              <h3 className="headline">
                I'm a{" "}
                <b className="text-gradient gradient-purple-darkpurple">
                  FullStack Developer
                </b>
              </h3>
              <p className="paragraph">
                I am building and designing software and also exploring fields
                of ML and Cloud. Currently, I am working on web application
                using technologies like React, Express, Tailwind, Next JS and
                MongoDB.
              </p>
              <a href="/doc/Resume-Gyanendra-Singh.pdf" className="btn-grad">
                Download Resume
              </a>
            </div>
            <img className="coder-image" src={CoderImage} />
          </div>
          <SocialLinks />
        </div>
        <hr style={{ borderColor: "#bbb" }} />
        <div className="skill-section">
          <h1 id="skills" className="">
            Skills
          </h1>
          <div className="skill-features">
            <div className="skill-container">
              <h2 className="">Frontend</h2>
              <div className="skills">
                <HtmlIcon />
                <CssIcon />
                <JavaScriptIcon />
                <ReactJsIcon />
                <TailwindIcon />
              </div>
            </div>
            <div className="skill-container">
              <h2 className="">Backend</h2>
              <div className="skills">
                <PhpIcon />
                <NodeJsIcon />
                <NextJsIcon />
                <MySQLIcon />
                <img
                  src="https://camo.githubusercontent.com/20039163b76f7278f3f309c82d7a6f7ab56d560ed0b8f5623805c8399a0ed098/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6d6f6e676f64622f6d6f6e676f64622d6f726967696e616c2e737667"
                  height={40}
                  width={40}
                />
              </div>
            </div>
            <div className="skill-container">
              <h2 className="">Other</h2>
              <div className="skills">
                <CIcon />
                <CppIcon />
                <JavaIcon />
                <PythonIcon />
                <GitIcon />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
