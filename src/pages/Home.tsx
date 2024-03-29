import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CoderImage from '../assets/coder.svg'
import { HtmlIcon, CssIcon, JavaScriptIcon, ReactJsIcon, TailwindIcon, PhpIcon, NextJsIcon, MySQLIcon, NodeJsIcon, CIcon, CppIcon, JavaIcon, PythonIcon, GitIcon } from '../components/Icons'

const Home:React.FC = () => {
  return (
    <>
      <Header type='home'/>
      <main className="">
        <div className="wrapper">
          <div className="">
            <h3 className="headline">Hi !</h3>
            <h1 className="">I'm Gyanendra Baghel</h1>
            <h3 className="headline">I'm a <b className='text-gradient gradient-purple-darkpurple'>FullStack Developer</b></h3>
            <p className="paragraph">I am building and designing software in the span of 2 years. Currently, I have to work on web application using technologies like React, Tailwind, Next JS and MongoDB</p>
            <a href="/doc/Resume-Gyanendra-Singh.pdf" className="btn-grad">Download Resume</a>
          </div>
          <img className='coder-image' src={CoderImage} />
        </div>
        <hr/>
        <div className='skill-section'>
          <h1 id='skills' className="">Skills</h1>
          <div className='skill-features'>
            <div className='skill-container'>
              <h2 className=''>Frontend</h2>
              <div className='skills'>
                <HtmlIcon />
                <CssIcon />
                <JavaScriptIcon />
                <ReactJsIcon />
                <TailwindIcon />
              </div>
            </div>
            <div className='skill-container'>
              <h2 className=''>Backend</h2>
              <div className='skills'>
                <PhpIcon />
                <NextJsIcon />
                <MySQLIcon />
                <NodeJsIcon />
              </div>
            </div>
            <div className='skill-container'>
              <h2 className=''>Other</h2>
              <div className='skills'>
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
      <Footer/>
    </>
  )
}

export default Home