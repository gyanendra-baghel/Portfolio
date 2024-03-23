import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CoderImage from '../assets/coder.svg'
import { HtmlIcon, CssIcon, JavaScriptIcon, ReactJsIcon, TailwindIcon, PhpIcon, NextJsIcon, MySQLIcon, NodeJsIcon, CIcon, CppIcon, JavaIcon, PythonIcon, GitIcon } from '../components/Icons'

const Home:React.FC = () => {
  return (
    <>
      <Header/>
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
              <h2 className='h2 font-bold text-3xl text-gray-500 text-center'>Frontend</h2>
              <div className='flex flex-wrap p-4'>
                <HtmlIcon />
                <CssIcon />
                <JavaScriptIcon />
                <ReactJsIcon />
                <TailwindIcon />
              </div>
            </div>
            <div className='skill-container'>
              <h2 className='h2  font-bold text-3xl text-gray-500 text-center'>Backend</h2>
              <div className='flex flex-wrap p-4'>
                <PhpIcon />
                <NextJsIcon />
                <MySQLIcon />
                <NodeJsIcon />
              </div>
            </div>
            <div className='skill-container'>
              <h2 className='h2 font-bold text-3xl text-gray-500 text-center'>Other</h2>
              <div className='flex flex-wrap p-4'>
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