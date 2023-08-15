import React, { useRef } from 'react';
import './styles.css';

const Header = (): JSX.Element => {
    const sidebar = useRef<HTMLDivElement>(null);

    const openNav = () => {
        if (sidebar.current) {
            sidebar.current.style.width = "20rem";
        }
    };

    const closeNav = () => {
        if (sidebar.current) {
            sidebar.current.style.width = "0";
        }
    };

    return (
        <header className="app-header">
            <button onClick={openNav} className="hamburger-btn" aria-label="menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
            <div ref={sidebar} className="sidebar">
                <ul className="nav-list">
                    
                    <button onClick={closeNav} className="close-btn" aria-label="close-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2.75rem" height="2.75rem" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About Me</a></li>
                    <li><a href="/experience">Experience</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/photos">Photos</a></li>
                    <li><a href="/art">Art</a></li>
                </ul>
            </div>
            <div className="flex-spacer"></div>
            <h1 className="header-title">Terrence Nolan</h1>
        </header>
    );
}

export default Header;