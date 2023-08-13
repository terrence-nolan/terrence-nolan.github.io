import React, { useState } from 'react';
import Navbar from './Navbar';

const Header: React.FC = () => {
    const [navbarOpen, setNavBarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavBarOpen(!navbarOpen);
    };

    return (
        <header className="app-header">
            <h1 className="page-title">Terrence Nolan</h1>
            <div className="flex-spacer"></div>
            <button className="hamburger-btn" aria-label="menu" onClick={toggleNavbar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
            <Navbar isOpen={navbarOpen} />
        </header>
    );
}

export default Header;