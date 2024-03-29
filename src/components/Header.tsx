import React from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {
  type: string
}

const Header:React.FC<HeaderProps> = ({type}) => {
  return (
    <header>
        <div className="container">
            <Link to="/" className="logo">Gyanendra</Link>
            <nav className="hidden md:flex space-x-4">
                {type == "home" && <a href="/#skills" className="nav-links">Skills</a>}
                <Link to="/projects" className="nav-links">Projects</Link>
                <Link to="/contact" className="nav-links">Contact</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header