import React from "react";

const Footer = (): JSX.Element => {
    return (
        <div className="app-footer">
            <p>© {new Date().getFullYear()} Terrence Nolan</p>
        </div>
    );
}

export default Footer;