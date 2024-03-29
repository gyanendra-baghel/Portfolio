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
                {type == "home" && <a href="/#skills" className="nav-link">Skills</a>}
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header