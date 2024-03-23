import React from 'react'
import { Link } from 'react-router-dom'
import Portfolio from '../assets/portfolio.png'

const Header:React.FC = () => {
  return (
    <header>
        <div className="container">
            <Link to="/" className="logo">
              <img height={30} src={Portfolio} />
            </Link>
            <nav className="hidden md:flex space-x-4">
                <Link to="/#skills" className="nav-links">Skills</Link>
                <Link to="/projects" className="nav-links">Projects</Link>
                <Link to="/contact" className="nav-links">Contact</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header