import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          <img src="/signature.png" />
        </Link>
        <nav>
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
