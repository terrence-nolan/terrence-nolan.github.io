import React from 'react';

interface NavbarProps {
  isOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen }) => {
  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Me</a></li>
              <li><a href="#">Experience</a></li>
              <li><a href="#">Projects</a></li>
              {/* Add more items */}
          </ul>
    </nav>
  );
}

export default Navbar;
