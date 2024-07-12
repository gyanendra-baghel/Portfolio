import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  type: string;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          <img src="/signature.png" />
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
